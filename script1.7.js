/*
    Проверка типа данных
    typeof и в последовательности имя переменной
*/


const message = 'Привет'

console.log(
    typeof message
)

console.log(typeof 100) // number
console.log(typeof 100n) // bigint
console.log(typeof true) // boolean
console.log(typeof null) // object (это баг, но так исторически сложилось)
console.log(typeof undefined) // undefined
console.log(typeof {}) // object
console.log(typeof [4, 8, 15]) // object (массивы в JavaScript являются объектами)
console.log(typeof function() {}) // function (функции в JavaScript имеют свой тип данных)
