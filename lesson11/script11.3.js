const obj1 = {name:'Данила'}
const obj2 = {age: 28}
const obj3 = {
  isDeveloper: true, 
  name: 'Максим',
}

// При обьединении обьектов также используем функцию Object.assign()
// Если значения свойства будут повтаряться то попадет значение из последнего обьекта
const user = Object.assign({}, obj1, obj2, obj3)

// Так же вместо Object.assign() можем использовать spreak operator ...
const user1 = {...obj1, ...obj2, ...obj3}

console.log('user:', user)
console.log('user1:', user1)
