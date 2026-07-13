class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {console.log('Ем...')}
  sleep() {console.log('Сплю...')}
}

const examplePerson = new Person('Василий', 30);

// console.log('Имя:', examplePerson.name);
// console.log('Возраст:', examplePerson.age);
// examplePerson.eat();
// examplePerson.sleep();

class Developer extends Person {
  writeCode() {console.log('Пишу код...')}

  // Мы можем переписать метод заимствомоего класса
  sleep() {
    console.log('Не хочу спать, пойду еще попишу код.');
    this.writeCode();
  }
}

class JavascriptDeveloper extends Developer {
  makeFrontend() {console.log('Пишу фронтенд...')}

  eat() {
    // Переиспользуем существующий в родительском классе код
    super.eat();
    console.log('Смотрю ютуб...')
  }
}

const exampleDeveloper = new Developer('Михаил', 28);
const jsDeveloperExample = new JavascriptDeveloper('Александр', 35)
// console.log('Имя:', exampleDeveloper.name);
// console.log('Возраст', exampleDeveloper.age);
// exampleDeveloper.eat();
// exampleDeveloper.sleep();
// exampleDeveloper.writeCode();
jsDeveloperExample.eat()
