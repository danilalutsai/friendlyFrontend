class Student {
  // Теперь мы не можем напрямую обратиться к этому приватному свойству
  // Мы получим ошибку в консоли
  #city = null

  planet = 'Земля';
  country = 'Россия';
  region;

  constructor(name, age) {
    this.name = name;
    this.age = age;

    // Такое вызывание метода - нормальная практика
    this._someSecretAction()
  }

  // Записывает форматированные данные в реестр
  set city(value) {
    const firstLetter = value[0].toUpperCase();
    const fromSecondLetter = value.slice(1).toLowerCase();

    // Подчеркивание перетр свойством принято ставить в использовании в рамках обьекта
    this._city = `${firstLetter}${fromSecondLetter}`;
  }

  // Выдает данные с реестра форматированные
  get city() {
    // Подчеркивание перетр свойством принято ставить в использовании в рамках обьекта
    return `г. ${this.#city}`;
  }

  // Если мы хотим обьявить метод который не должен быть использован вне тела класса
  // ставим нижнее подчеркивание перед названием метода
  _someSecretAction() {
    // ...
  }

}

const firstStudent = new Student("Вася", 28);

// Здесь отработает setter
firstStudent.city = 'москва';

// Здесь отработает getter
console.log(firstStudent.city);

// Так же можем обратиться к скрытому методу класса через подчеркивание
// Однако так делать не желательно так как такая логика не предусматривалась изначально
console.log(firstStudent._city)

// Ничто не помешает вызвать приватный метод класса с нижним подчеркиванием
// Разработчики понимают что использование такого класса скорее всего некоректное
firstStudent._someSecretAction()
