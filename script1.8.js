/*
Преобразование типов данных в JavaScript происходит автоматически, 
когда вы выполняете операции с разными типами данных. 

В данном случае, когда вы складываете число (num) и строку (str), 
JavaScript преобразует число в строку и выполняет конкатенацию (объединение) строк.
*/


// Преобразование типа данных число в строку

const num = 111
const str = '222'
const result = num + str

console.log(result)
console.log(typeof result)
console.log(typeof num)


// Преобразование типа данных строка в число

const a = '16'
const b = '8'
const c = a / b

console.log(c)
console.log(typeof a)
console.log(typeof c)