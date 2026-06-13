// При обьявлении функции таким методом мы можем использовать функцию до ее обьявления
console.log(sum(5, 10))

// В скобках указываем параметры функции
function sum(a, b) {
    return a + b
}

// Так же можно перезаписывать функции с одним названием

function logMessage() {
    console.log('Привет!')
}

// Все равно выдаст Пока! так как Javascript берет все функции и перемещает вверх файла 
// и сначала читает все функции а потом уже идет дальше по файлу
logMessage()

function logMessage() {
    console.log('Пока!')
}

// Function expression это присваивание переменной функции
const logHello = function() {
    console.log('Привет!')
}

// Такую функцию нельзя переопределить
// const logHello = function() {
//     console.log('Пока!')
// }

logHello()

// Мы можем ее переопределить если она обьявлена с let
// А так же нельзя ее использовать до ее обьявления
let logHello1 = function() {
    console.log('Привет!')
}

logHello1 = function() {
    console.log('Пока!')
}

logHello1()