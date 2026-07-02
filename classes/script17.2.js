class Student {

  // Мы получим undefined так как не можем напрямую обращаться к свойствам класса по его имени
  // Для этого мы должны прописать перед названием свойства static
  // Эти методы со static нельзя будет использовать для экземпляров класса, мы получим ошибку
  static country = 'Россия';

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Также в static мы не можем использовть слова this такой код будет генерировать ошибку
  static logAge() {
    // console.log(this.age)
    console.log('Какой-то возраст')
  }
}

const firstStudent = new Student('Вася', 28)

// console.log('Страна:', firstStudent.country)
// firstStudent.logAge()

console.log('Страна:', Student.country)
Student.logAge()
