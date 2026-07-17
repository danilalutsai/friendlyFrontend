'use strict';

const { EventEmitter } = require('node:events');
const crypto = require('node:crypto');

// ============================================================
// Utility functions
// ============================================================

function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function generateId(prefix = 'id') {
  return `${prefix}_${crypto.randomUUID()}`;
}

function deepClone(value) {
  return structuredClone(value);
}

function formatMoney(amount, currency = 'EUR') {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
  }).format(amount);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'medium',
  }).format(date);
}

function calculatePercentage(value, percentage) {
  return value * (percentage / 100);
}

function groupBy(array, callback) {
  return array.reduce((groups, item) => {
    const key = callback(item);

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});
}

function sortBy(array, callback, direction = 'asc') {
  const multiplier = direction === 'desc' ? -1 : 1;

  return [...array].sort((first, second) => {
    const firstValue = callback(first);
    const secondValue = callback(second);

    if (firstValue < secondValue) {
      return -1 * multiplier;
    }

    if (firstValue > secondValue) {
      return 1 * multiplier;
    }

    return 0;
  });
}

function retry(
  operation,
  {
    attempts = 3,
    delay = 300,
    backoffMultiplier = 2,
  } = {},
) {
  return async function executeWithRetry(...args) {
    let currentAttempt = 1;
    let currentDelay = delay;
    let lastError;

    while (currentAttempt <= attempts) {
      try {
        return await operation(...args);
      } catch (error) {
        lastError = error;

        console.log(
          `Attempt ${currentAttempt}/${attempts} failed: ${error.message}`,
        );

        if (currentAttempt < attempts) {
          await sleep(currentDelay);
          currentDelay *= backoffMultiplier;
        }

        currentAttempt += 1;
      }
    }

    throw lastError;
  };
}

// ============================================================
// Custom error classes
// ============================================================

class AppError extends Error {
  constructor(message, code = 'APP_ERROR', details = {}) {
    super(message);

    this.name = this.constructor.name;
    this.code = code;
    this.details = details;
    this.timestamp = new Date();

    Error.captureStackTrace?.(this, this.constructor);
  }
}

class ValidationError extends AppError {
  constructor(message, details = {}) {
    super(message, 'VALIDATION_ERROR', details);
  }
}

class NotFoundError extends AppError {
  constructor(resource, id) {
    super(`${resource} with id "${id}" was not found`, 'NOT_FOUND', {
      resource,
      id,
    });
  }
}

class InsufficientStockError extends AppError {
  constructor(productId, requested, available) {
    super(
      `Not enough stock for product "${productId}"`,
      'INSUFFICIENT_STOCK',
      {
        productId,
        requested,
        available,
      },
    );
  }
}

// ============================================================
// Validator
// ============================================================

class Validator {
  static required(value, fieldName) {
    if (
      value === undefined ||
      value === null ||
      value === ''
    ) {
      throw new ValidationError(`${fieldName} is required`, {
        fieldName,
        value,
      });
    }

    return this;
  }

  static string(value, fieldName) {
    if (typeof value !== 'string') {
      throw new ValidationError(`${fieldName} must be a string`, {
        fieldName,
        receivedType: typeof value,
      });
    }

    return this;
  }

  static number(value, fieldName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new ValidationError(`${fieldName} must be a valid number`, {
        fieldName,
        value,
      });
    }

    return this;
  }

  static positive(value, fieldName) {
    this.number(value, fieldName);

    if (value <= 0) {
      throw new ValidationError(`${fieldName} must be positive`, {
        fieldName,
        value,
      });
    }

    return this;
  }

  static email(value, fieldName = 'email') {
    this.required(value, fieldName);
    this.string(value, fieldName);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      throw new ValidationError(`${fieldName} is invalid`, {
        fieldName,
        value,
      });
    }

    return this;
  }

  static oneOf(value, allowedValues, fieldName) {
    if (!allowedValues.includes(value)) {
      throw new ValidationError(
        `${fieldName} must be one of: ${allowedValues.join(', ')}`,
        {
          fieldName,
          value,
          allowedValues,
        },
      );
    }

    return this;
  }
}

// ============================================================
// Logger
// ============================================================

class Logger {
  constructor(context = 'Application') {
    this.context = context;
  }

  createEntry(level, message, metadata = {}) {
    return {
      level,
      context: this.context,
      message,
      metadata,
      timestamp: new Date().toISOString(),
    };
  }

  log(level, message, metadata = {}) {
    const entry = this.createEntry(level, message, metadata);

    console.log(JSON.stringify(entry, null, 2));
  }

  info(message, metadata = {}) {
    this.log('INFO', message, metadata);
  }

  warn(message, metadata = {}) {
    this.log('WARN', message, metadata);
  }

  error(message, metadata = {}) {
    this.log('ERROR', message, metadata);
  }
}

// ============================================================
// Generic in-memory repository
// ============================================================

class Repository {
  #items = new Map();

  constructor(entityName) {
    this.entityName = entityName;
  }

  create(entity) {
    if (this.#items.has(entity.id)) {
      throw new ValidationError(
        `${this.entityName} with id "${entity.id}" already exists`,
      );
    }

    this.#items.set(entity.id, deepClone(entity));

    return this.findById(entity.id);
  }

  findById(id) {
    const entity = this.#items.get(id);

    if (!entity) {
      throw new NotFoundError(this.entityName, id);
    }

    return deepClone(entity);
  }

  findAll() {
    return [...this.#items.values()].map(deepClone);
  }

  find(callback) {
    return this.findAll().filter(callback);
  }

  update(id, updateFunction) {
    const existingEntity = this.findById(id);
    const updatedEntity = updateFunction(existingEntity);

    this.#items.set(id, deepClone(updatedEntity));

    return this.findById(id);
  }

  delete(id) {
    const entity = this.findById(id);

    this.#items.delete(id);

    return entity;
  }

  exists(id) {
    return this.#items.has(id);
  }

  count() {
    return this.#items.size;
  }

  clear() {
    this.#items.clear();
  }
}

// ============================================================
// Cache with expiration
// ============================================================

class Cache {
  #storage = new Map();

  set(key, value, ttl = 5000) {
    const expiresAt = Date.now() + ttl;

    this.#storage.set(key, {
      value: deepClone(value),
      expiresAt,
    });
  }

  get(key) {
    const cachedItem = this.#storage.get(key);

    if (!cachedItem) {
      return null;
    }

    if (Date.now() >= cachedItem.expiresAt) {
      this.#storage.delete(key);
      return null;
    }

    return deepClone(cachedItem.value);
  }

  has(key) {
    return this.get(key) !== null;
  }

  delete(key) {
    this.#storage.delete(key);
  }

  clear() {
    this.#storage.clear();
  }
}

// ============================================================
// Domain models
// ============================================================

class User {
  constructor({
    id = generateId('user'),
    firstName,
    lastName,
    email,
    role = 'customer',
    address = {},
  }) {
    Validator.required(firstName, 'firstName');
    Validator.string(firstName, 'firstName');

    Validator.required(lastName, 'lastName');
    Validator.string(lastName, 'lastName');

    Validator.email(email);

    Validator.oneOf(
      role,
      ['customer', 'admin', 'manager'],
      'role',
    );

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email.toLowerCase();
    this.role = role;

    this.address = {
      country: address.country ?? null,
      city: address.city ?? null,
      street: address.street ?? null,
      postalCode: address.postalCode ?? null,
    };

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  updateAddress(partialAddress) {
    this.address = {
      ...this.address,
      ...partialAddress,
    };

    this.updatedAt = new Date();

    return this;
  }
}

class Product {
  constructor({
    id = generateId('product'),
    name,
    description = '',
    category,
    price,
    stock = 0,
    metadata = {},
  }) {
    Validator.required(name, 'name');
    Validator.string(name, 'name');

    Validator.required(category, 'category');
    Validator.string(category, 'category');

    Validator.positive(price, 'price');
    Validator.number(stock, 'stock');

    if (stock < 0) {
      throw new ValidationError('stock cannot be negative');
    }

    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.price = price;
    this.stock = stock;

    this.metadata = {
      manufacturer: metadata.manufacturer ?? 'Unknown',
      tags: metadata.tags ?? [],
      dimensions: {
        width: metadata.dimensions?.width ?? null,
        height: metadata.dimensions?.height ?? null,
        depth: metadata.dimensions?.depth ?? null,
      },
    };

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  decreaseStock(quantity) {
    Validator.positive(quantity, 'quantity');

    if (quantity > this.stock) {
      throw new InsufficientStockError(
        this.id,
        quantity,
        this.stock,
      );
    }

    this.stock -= quantity;
    this.updatedAt = new Date();

    return this;
  }

  increaseStock(quantity) {
    Validator.positive(quantity, 'quantity');

    this.stock += quantity;
    this.updatedAt = new Date();

    return this;
  }
}

class CartItem {
  constructor(product, quantity) {
    Validator.positive(quantity, 'quantity');

    this.productId = product.id;
    this.productName = product.name;
    this.unitPrice = product.price;
    this.quantity = quantity;
  }

  get subtotal() {
    return this.unitPrice * this.quantity;
  }
}

class ShoppingCart {
  constructor(userId) {
    this.id = generateId('cart');
    this.userId = userId;
    this.items = [];
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  addProduct(product, quantity = 1) {
    const existingItem = this.items.find(
      (item) => item.productId === product.id,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new CartItem(product, quantity));
    }

    this.updatedAt = new Date();

    return this;
  }

  removeProduct(productId) {
    this.items = this.items.filter(
      (item) => item.productId !== productId,
    );

    this.updatedAt = new Date();

    return this;
  }

  updateQuantity(productId, quantity) {
    Validator.positive(quantity, 'quantity');

    const item = this.items.find(
      (currentItem) => currentItem.productId === productId,
    );

    if (!item) {
      throw new NotFoundError('Cart item', productId);
    }

    item.quantity = quantity;
    this.updatedAt = new Date();

    return this;
  }

  get subtotal() {
    return this.items.reduce(
      (total, item) => total + item.subtotal,
      0,
    );
  }

  get totalItems() {
    return this.items.reduce(
      (total, item) => total + item.quantity,
      0,
    );
  }

  clear() {
    this.items = [];
    this.updatedAt = new Date();
  }
}

class Order {
  constructor({
    user,
    items,
    subtotal,
    discount,
    tax,
    shipping,
    total,
    paymentMethod,
  }) {
    this.id = generateId('order');

    this.customer = {
      id: user.id,
      name: user.fullName,
      email: user.email,
      address: deepClone(user.address),
    };

    this.items = deepClone(items);
    this.pricing = {
      subtotal,
      discount,
      tax,
      shipping,
      total,
    };

    this.payment = {
      method: paymentMethod,
      status: 'pending',
      transactionId: null,
      paidAt: null,
    };

    this.status = 'created';

    this.history = [
      {
        status: 'created',
        timestamp: new Date(),
      },
    ];

    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  setStatus(status) {
    const allowedStatuses = [
      'created',
      'paid',
      'processing',
      'shipped',
      'delivered',
      'cancelled',
    ];

    Validator.oneOf(status, allowedStatuses, 'order status');

    this.status = status;
    this.updatedAt = new Date();

    this.history.push({
      status,
      timestamp: new Date(),
    });

    return this;
  }

  markAsPaid(transactionId) {
    this.payment.status = 'paid';
    this.payment.transactionId = transactionId;
    this.payment.paidAt = new Date();

    this.setStatus('paid');

    return this;
  }
}

// ============================================================
// Discount strategies
// ============================================================

class DiscountStrategy {
  calculate() {
    throw new Error('calculate() must be implemented');
  }
}

class NoDiscount extends DiscountStrategy {
  calculate() {
    return 0;
  }
}

class PercentageDiscount extends DiscountStrategy {
  constructor(percentage) {
    super();

    Validator.positive(percentage, 'percentage');

    this.percentage = percentage;
  }

  calculate(subtotal) {
    return calculatePercentage(subtotal, this.percentage);
  }
}

class MinimumPurchaseDiscount extends DiscountStrategy {
  constructor({
    minimumPurchase,
    percentage,
  }) {
    super();

    this.minimumPurchase = minimumPurchase;
    this.percentage = percentage;
  }

  calculate(subtotal) {
    if (subtotal < this.minimumPurchase) {
      return 0;
    }

    return calculatePercentage(subtotal, this.percentage);
  }
}

// ============================================================
// Payment providers
// ============================================================

class PaymentProvider {
  async charge() {
    throw new Error('charge() must be implemented');
  }
}

class FakeCardPaymentProvider extends PaymentProvider {
  constructor(logger) {
    super();

    this.logger = logger;
  }

  async charge({
    amount,
    cardNumber,
    cardHolder,
  }) {
    Validator.positive(amount, 'amount');
    Validator.required(cardNumber, 'cardNumber');
    Validator.required(cardHolder, 'cardHolder');

    this.logger.info('Starting card payment', {
      amount,
      cardHolder,
      maskedCard: `**** **** **** ${cardNumber.slice(-4)}`,
    });

    await sleep(500);

    const randomFailure = Math.random() < 0.15;

    if (randomFailure) {
      throw new AppError(
        'Payment provider temporarily unavailable',
        'PAYMENT_PROVIDER_ERROR',
      );
    }

    return {
      success: true,
      transactionId: generateId('transaction'),
      amount,
      processedAt: new Date(),
    };
  }
}

// ============================================================
// Notification service
// ============================================================

class NotificationService {
  constructor(logger) {
    this.logger = logger;
  }

  async sendEmail({
    to,
    subject,
    body,
  }) {
    Validator.email(to, 'recipient email');

    await sleep(150);

    this.logger.info('Email sent', {
      to,
      subject,
      bodyLength: body.length,
    });

    return {
      delivered: true,
      messageId: generateId('email'),
    };
  }

  async sendOrderConfirmation(order) {
    return this.sendEmail({
      to: order.customer.email,
      subject: `Order confirmation: ${order.id}`,
      body: [
        `Hello ${order.customer.name},`,
        '',
        `Your order total is ${formatMoney(order.pricing.total)}.`,
        `Order status: ${order.status}`,
        '',
        'Thank you for your purchase.',
      ].join('\n'),
    });
  }
}

// ============================================================
// Inventory service
// ============================================================

class InventoryService {
  constructor(productRepository, eventBus, logger) {
    this.productRepository = productRepository;
    this.eventBus = eventBus;
    this.logger = logger;
  }

  reserveItems(items) {
    const reservedItems = [];

    try {
      for (const item of items) {
        const product = this.productRepository.findById(
          item.productId,
        );

        product.decreaseStock(item.quantity);

        this.productRepository.update(
          product.id,
          () => product,
        );

        reservedItems.push({
          productId: product.id,
          quantity: item.quantity,
        });

        this.logger.info('Stock reserved', {
          productId: product.id,
          quantity: item.quantity,
          remainingStock: product.stock,
        });

        if (product.stock <= 3) {
          this.eventBus.emit('inventory:low', {
            productId: product.id,
            productName: product.name,
            remainingStock: product.stock,
          });
        }
      }

      return reservedItems;
    } catch (error) {
      this.restoreItems(reservedItems);
      throw error;
    }
  }

  restoreItems(items) {
    for (const item of items) {
      const product = this.productRepository.findById(
        item.productId,
      );

      product.increaseStock(item.quantity);

      this.productRepository.update(
        product.id,
        () => product,
      );

      this.logger.warn('Reserved stock restored', {
        productId: product.id,
        quantity: item.quantity,
      });
    }
  }
}

// ============================================================
// Order service
// ============================================================

class OrderService {
  constructor({
    userRepository,
    productRepository,
    orderRepository,
    inventoryService,
    paymentProvider,
    notificationService,
    eventBus,
    logger,
  }) {
    this.userRepository = userRepository;
    this.productRepository = productRepository;
    this.orderRepository = orderRepository;
    this.inventoryService = inventoryService;
    this.paymentProvider = paymentProvider;
    this.notificationService = notificationService;
    this.eventBus = eventBus;
    this.logger = logger;
  }

  calculatePricing(
    cart,
    discountStrategy = new NoDiscount(),
  ) {
    const subtotal = cart.subtotal;
    const discount = discountStrategy.calculate(subtotal);
    const discountedSubtotal = subtotal - discount;

    const tax = calculatePercentage(discountedSubtotal, 20);
    const shipping = discountedSubtotal >= 100 ? 0 : 7.99;

    const total =
      discountedSubtotal +
      tax +
      shipping;

    return {
      subtotal,
      discount,
      tax,
      shipping,
      total: Number(total.toFixed(2)),
    };
  }

  async checkout({
    userId,
    cart,
    paymentDetails,
    discountStrategy,
  }) {
    if (cart.items.length === 0) {
      throw new ValidationError(
        'Cannot checkout with an empty cart',
      );
    }

    const user = this.userRepository.findById(userId);
    const pricing = this.calculatePricing(
      cart,
      discountStrategy,
    );

    this.logger.info('Checkout started', {
      userId,
      cartId: cart.id,
      totalItems: cart.totalItems,
      pricing,
    });

    const reservedItems =
      this.inventoryService.reserveItems(cart.items);

    try {
      const paymentResult = await retry(
        (details) => this.paymentProvider.charge(details),
        {
          attempts: 3,
          delay: 300,
          backoffMultiplier: 2,
        },
      )({
        amount: pricing.total,
        ...paymentDetails,
      });

      const order = new Order({
        user,
        items: cart.items,
        ...pricing,
        paymentMethod: 'card',
      });

      order.markAsPaid(paymentResult.transactionId);
      order.setStatus('processing');

      const savedOrder = this.orderRepository.create(order);

      this.eventBus.emit('order:created', savedOrder);
      this.eventBus.emit('order:paid', savedOrder);

      await this.notificationService.sendOrderConfirmation(
        savedOrder,
      );

      cart.clear();

      this.logger.info('Checkout completed', {
        orderId: savedOrder.id,
        transactionId: paymentResult.transactionId,
      });

      return savedOrder;
    } catch (error) {
      this.inventoryService.restoreItems(reservedItems);

      this.eventBus.emit('order:failed', {
        userId,
        cartId: cart.id,
        error,
      });

      throw error;
    }
  }
}

// ============================================================
// Analytics service
// ============================================================

class AnalyticsService {
  constructor(orderRepository, productRepository) {
    this.orderRepository = orderRepository;
    this.productRepository = productRepository;
  }

  createSalesReport() {
    const orders = this.orderRepository.findAll();

    const totalRevenue = orders.reduce(
      (total, order) => total + order.pricing.total,
      0,
    );

    const totalItemsSold = orders.reduce(
      (orderTotal, order) => {
        return (
          orderTotal +
          order.items.reduce(
            (itemTotal, item) =>
              itemTotal + item.quantity,
            0,
          )
        );
      },
      0,
    );

    const productSales = new Map();

    for (const order of orders) {
      for (const item of order.items) {
        const existing = productSales.get(item.productId) ?? {
          productId: item.productId,
          productName: item.productName,
          quantity: 0,
          revenue: 0,
        };

        existing.quantity += item.quantity;
        existing.revenue += item.subtotal;

        productSales.set(item.productId, existing);
      }
    }

    const bestSellingProducts = sortBy(
      [...productSales.values()],
      (item) => item.quantity,
      'desc',
    );

    const ordersByStatus = groupBy(
      orders,
      (order) => order.status,
    );

    return {
      generatedAt: new Date(),
      summary: {
        totalOrders: orders.length,
        totalRevenue,
        totalItemsSold,
        averageOrderValue:
          orders.length === 0
            ? 0
            : totalRevenue / orders.length,
      },
      bestSellingProducts,
      ordersByStatus: Object.fromEntries(
        Object.entries(ordersByStatus).map(
          ([status, statusOrders]) => [
            status,
            statusOrders.length,
          ],
        ),
      ),
    };
  }

  createInventoryReport() {
    const products = this.productRepository.findAll();

    return {
      totalProducts: products.length,

      totalUnitsInStock: products.reduce(
        (total, product) => total + product.stock,
        0,
      ),

      lowStockProducts: products.filter(
        (product) => product.stock <= 3,
      ),

      productsByCategory: groupBy(
        products,
        (product) => product.category,
      ),
    };
  }
}

// ============================================================
// Application
// ============================================================

class StoreApplication {
  constructor() {
    this.eventBus = new EventEmitter();
    this.logger = new Logger('StoreApplication');

    this.userRepository = new Repository('User');
    this.productRepository = new Repository('Product');
    this.orderRepository = new Repository('Order');

    this.cache = new Cache();

    this.notificationService =
      new NotificationService(this.logger);

    this.paymentProvider =
      new FakeCardPaymentProvider(this.logger);

    this.inventoryService =
      new InventoryService(
        this.productRepository,
        this.eventBus,
        this.logger,
      );

    this.orderService = new OrderService({
      userRepository: this.userRepository,
      productRepository: this.productRepository,
      orderRepository: this.orderRepository,
      inventoryService: this.inventoryService,
      paymentProvider: this.paymentProvider,
      notificationService: this.notificationService,
      eventBus: this.eventBus,
      logger: this.logger,
    });

    this.analyticsService = new AnalyticsService(
      this.orderRepository,
      this.productRepository,
    );

    this.registerEventListeners();
  }

  registerEventListeners() {
    this.eventBus.on('order:created', (order) => {
      this.logger.info('Order-created event received', {
        orderId: order.id,
      });

      this.cache.delete('sales-report');
    });

    this.eventBus.on('order:paid', (order) => {
      this.logger.info('Order-paid event received', {
        orderId: order.id,
        amount: order.pricing.total,
      });
    });

    this.eventBus.on('order:failed', ({ error, ...context }) => {
      this.logger.error('Order failed', {
        ...context,
        error: {
          name: error.name,
          message: error.message,
          code: error.code,
        },
      });
    });

    this.eventBus.on('inventory:low', (data) => {
      this.logger.warn('Low inventory warning', data);
    });
  }

  seedData() {
    const user = new User({
      firstName: 'Danila',
      lastName: 'Lutsai',
      email: 'danila@example.com',
      address: {
        country: 'Estonia',
        city: 'Tallinn',
        street: 'Example Street 12',
        postalCode: '10111',
      },
    });

    const products = [
      new Product({
        name: 'Mechanical Keyboard',
        description: 'A keyboard with hot-swappable switches',
        category: 'electronics',
        price: 89.99,
        stock: 10,
        metadata: {
          manufacturer: 'KeyWorks',
          tags: ['keyboard', 'mechanical', 'usb'],
          dimensions: {
            width: 35,
            height: 4,
            depth: 13,
          },
        },
      }),

      new Product({
        name: 'Wireless Mouse',
        description: 'Lightweight wireless mouse',
        category: 'electronics',
        price: 49.99,
        stock: 7,
        metadata: {
          manufacturer: 'PointerTech',
          tags: ['mouse', 'wireless'],
        },
      }),

      new Product({
        name: 'JavaScript Handbook',
        description: 'A detailed JavaScript reference book',
        category: 'books',
        price: 29.5,
        stock: 4,
        metadata: {
          manufacturer: 'Code Books',
          tags: ['javascript', 'programming', 'book'],
        },
      }),

      new Product({
        name: 'USB-C Hub',
        description: 'Seven-port USB-C hub',
        category: 'electronics',
        price: 59.95,
        stock: 2,
        metadata: {
          manufacturer: 'ConnectEverything',
          tags: ['usb-c', 'hub', 'adapter'],
        },
      }),
    ];

    this.userRepository.create(user);

    for (const product of products) {
      this.productRepository.create(product);
    }

    return {
      user,
      products,
    };
  }

  getSalesReport() {
    const cacheKey = 'sales-report';
    const cachedReport = this.cache.get(cacheKey);

    if (cachedReport) {
      this.logger.info('Returning cached sales report');
      return cachedReport;
    }

    const report =
      this.analyticsService.createSalesReport();

    this.cache.set(cacheKey, report, 10_000);

    return report;
  }
}

// ============================================================
// Main execution
// ============================================================

async function main() {
  const app = new StoreApplication();

  try {
    const { user, products } = app.seedData();

    console.log('\n================ PRODUCTS ================\n');

    for (const product of app.productRepository.findAll()) {
      console.log({
        id: product.id,
        name: product.name,
        price: formatMoney(product.price),
        stock: product.stock,
      });
    }

    const cart = new ShoppingCart(user.id);

    cart
      .addProduct(products[0], 1)
      .addProduct(products[1], 2)
      .addProduct(products[2], 1)
      .addProduct(products[3], 1);

    console.log('\n================ CART ================\n');

    console.log({
      cartId: cart.id,
      customer: user.fullName,
      totalItems: cart.totalItems,
      subtotal: formatMoney(cart.subtotal),
      items: cart.items.map((item) => ({
        product: item.productName,
        quantity: item.quantity,
        unitPrice: formatMoney(item.unitPrice),
        subtotal: formatMoney(item.subtotal),
      })),
    });

    const discountStrategy =
      new MinimumPurchaseDiscount({
        minimumPurchase: 100,
        percentage: 10,
      });

    const order = await app.orderService.checkout({
      userId: user.id,
      cart,
      discountStrategy,
      paymentDetails: {
        cardNumber: '4111111111111111',
        cardHolder: user.fullName,
      },
    });

    console.log('\n================ ORDER ================\n');

    console.log({
      id: order.id,
      customer: order.customer,
      status: order.status,
      payment: order.payment,
      pricing: {
        subtotal: formatMoney(order.pricing.subtotal),
        discount: formatMoney(order.pricing.discount),
        tax: formatMoney(order.pricing.tax),
        shipping: formatMoney(order.pricing.shipping),
        total: formatMoney(order.pricing.total),
      },
      createdAt: formatDate(new Date(order.createdAt)),
    });

    console.log('\n================ SALES REPORT ================\n');

    const salesReport = app.getSalesReport();

    console.dir(
      {
        generatedAt: formatDate(
          new Date(salesReport.generatedAt),
        ),

        summary: {
          ...salesReport.summary,
          totalRevenue: formatMoney(
            salesReport.summary.totalRevenue,
          ),
          averageOrderValue: formatMoney(
            salesReport.summary.averageOrderValue,
          ),
        },

        bestSellingProducts:
          salesReport.bestSellingProducts,

        ordersByStatus:
          salesReport.ordersByStatus,
      },
      {
        depth: null,
        colors: true,
      },
    );

    console.log('\n================ INVENTORY REPORT ================\n');

    const inventoryReport =
      app.analyticsService.createInventoryReport();

    console.dir(inventoryReport, {
      depth: null,
      colors: true,
    });

    console.log('\n================ CACHE TEST ================\n');

    app.getSalesReport();
    app.getSalesReport();

    console.log('\nProgram finished successfully.');
  } catch (error) {
    console.error('\n================ ERROR ================\n');

    if (error instanceof AppError) {
      console.error({
        name: error.name,
        message: error.message,
        code: error.code,
        details: error.details,
        timestamp: error.timestamp,
      });
    } else {
      console.error(error);
    }

    process.exitCode = 1;
  }
}

main();
