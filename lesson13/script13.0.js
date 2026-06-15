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

newUser.logInfo()
console.log('Взрослый?', newUser.getIsAdult())

