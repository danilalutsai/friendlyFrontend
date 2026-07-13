// Чтобы распарсить строку и получить из нее число
const numberAsString = '100'
const numberAsString2 = '100.052px'
const numberAsString3 = '   p100.05px' 
// Распарсить такое число не получится. Результат будет NaN 

// Используем или функцию Number или унарным оператором +
console.log(Number(numberAsString)) // 100
console.log(+numberAsString) // 100

console.log(+numberAsString2) // NaN - Not a Number
 
// Для таких случаев используем функция parseInt
// Получаем только целое число
console.log(parseInt(numberAsString2)) // 100

// parseFloat чтобы получить число учитывая decimals
console.log(parseFloat(numberAsString2)) // 100.052

// Распарсить переменную numberAsString3 не получится
console.log(parseFloat(numberAsString3)) // NaN
