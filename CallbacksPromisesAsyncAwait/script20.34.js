// Callback functions

function orderPizza(cb) {
  setTimeout(() => {
    const pizza = "🍕";
    cb(pizza);
  }, 2000);
}

function pizzaReady(pizza) {
  console.log(`Eat ${pizza}`);
}

orderPizza(pizzaReady);
console.log(`Call Qoli`);

