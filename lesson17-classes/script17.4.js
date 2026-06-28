class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {console.log('Ем...')}
  sleep() {console.log('Сплю...')}
}

class Developer extends Person {
  // Если мы хотим переписать сущности конструктора родительского класса используем super()
  constructor(name, age, experience) {
    super(name, age);
    this.experience = experience;
  }
  writeCode() {console.log('Пишу код...')}

  sleep() {
    console.log('Не хочу спать, пойду еще попишу код.');
    this.writeCode();
  }
}

const developerExample = new Developer('Миша', 25, 5);
console.log('Количество лет опыта:', developerExample.experience);
