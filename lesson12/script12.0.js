console.log('this глобальный', this)

// Функции которые записываются в свойства обьектов называются методами

const user = {
  name: 'Александр',
  age: 28,
  logThis: function() {
    console.log('this в теле метода обьекта user:', this)
//    console.log('this.name:', this.name)
  },
  address: {
    city: 'Москва',
    zipcode: 123456,
    logInnerThis: function() {
      console.log('this в теле метода обьекта address:', this)
    },
  },
}

user.logThis() // Ссылается на весь обьект user
user.address.logInnerThis() // Ссылается на обьект address

