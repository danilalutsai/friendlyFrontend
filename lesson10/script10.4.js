const propName = prompt('Имя свойства который добавить в обьект?')
const propValue = prompt('Какое значение забисать в свойство')

const obj = {
  [propName]: propValue,
}

console.log(obj)

// Можно проверить наличие свойства функции in
// Имя свойства в скобкаъ ''
// Всегда возвращает булевое значение

const user = {
  name: 'Данила',
  age: 28,
  ['is developer']: undefined,
}

console.log('name' in user)
console.log('is developer' in user)
// Это равносильно этой строке
console.log(user['is developer'] !== undefined)
console.log(user.name !== undefined)

// Но стоит использовать оператор in так как если изначально выражение будет равнятся undefined то проверку мы не пройдем


