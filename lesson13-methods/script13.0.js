// Примитивные виды данных

const name = 'Данила' // String
const age = 28 // Number
const universeStars = 9999999999999n // bigInt
const isDeveloper = true // Boolean
const id = Symbol() // Symbol
const dog = null // Null
const future = undefined // Undefined


// Непримитивные виды данных
const user = {} // Object

// В обьектах содержатся свойства, некоторые их них могут быть функциями
// Такие функции называются методами

const newUser = {
  name: 'Александр',
  age: 28,
  logInfo() {
    console.log(`
      Имя: ${this.name}
      Возраст: ${this.age}
      `)
  },
  getIsAdult() {
    return this.age >= 18
  },
}

class UserClass {
    className = 'className'
    constructor(name) {
        this.name = name
        console.log(this.className)
    }
}

// Функция constructor вызывается автоматически когда пишем new 
const newUserInstance = new UserClass('Данила')
const newUserInstance2 = new UserClass('Никита')

console.log(newUserInstance2.name)
console.log(newUserInstance.name)
newUserInstance.className = 'className1'
console.log(newUserInstance.className)

newUser.logInfo()
console.log('Взрослый?', newUser.getIsAdult())

