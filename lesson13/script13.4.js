// Методы округления

// round
// Округляет до ближайщего целого по стандартным правилам округления
console.log(Math.round(3.49)) // 3
console.log(Math.round(3.5)) // 4
console.log(Math.round(3.51)) // 4

console.log(Math.round(-3.49)) // -3
console.log(Math.round(-3.5)) // -3
console.log(Math.round(-3.51)) // -4

// floor
// Округляет число вниз до ближайщего целого
console.log(Math.floor(3.49)) // 3
console.log(Math.floor(3.5)) // 3
console.log(Math.floor(3.51)) // 3

console.log(Math.floor(-3.49)) // -4
console.log(Math.floor(-3.5)) // -4
console.log(Math.floor(-3.51)) // -4

// ceil 
// Округляет число до ближайщего целого вверх 
console.log(Math.ceil(3.49)) // 4
console.log(Math.ceil(3.5)) // 4
console.log(Math.ceil(3.51)) // 4

console.log(Math.ceil(-3.49)) // -3
console.log(Math.ceil(-3.5)) // -3
console.log(Math.ceil(-3.51)) // -3

// trunc
// Округляет число до целого в меньшую сторону без учета знака числа
console.log(Math.trunc(3.49)) // 3
console.log(Math.trunc(3.5)) // 3
console.log(Math.trunc(3.51)) // 3

console.log(Math.trunc(-3.49)) // -3
console.log(Math.trunc(-3.5)) // -3
console.log(Math.trunc(-3.51)) // -3

