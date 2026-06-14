// Обьект это ссылочный тип данных. Под каждый обьект выделяется собственная область в памяти. Это значит что при сравнении двух одинаковых обьектах результат будет false

const obj1 = {}
const obj2 = {}

console.log(obj1 === obj2) // false
console.log(obj1 == obj2) // false

// Если мы присваевоем один обьект другому он будет ссылаться на одну область в памяти и такие обьекты будут равны при сравнении true

const obj3 = {name:'Данила'}
const obj4 = obj3

console.log(obj3 === obj4) // true
console.log(obj3 == obj4) // true

obj4.name = 'Максим'

console.log(obj3) // name: 'Максим'
