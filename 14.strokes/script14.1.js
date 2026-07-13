// Изменения регистра строки
const text = 'КаКоЙ-То ТеКсТ'

// Чтобы получть строку в нижнем регистре используем функцию toLowerCase()
console.log(text.toLowerCase()) // какой-то текст

// Чтобы получить строку в верхнем регистре используем функцию toUpperCase()
console.log(text.toUpperCase()) // КАКОЙ-ТО ТЕКСТ


// Избаевления строки от пробелов в начале и конце используем функцию trim
const message = '    Привет!  '
const messageFormatted = message.trim()

console.log(`Строка '${message}', имеет: ${message.length} символов`)
console.log(`Строка '${messageFormatted}', имеет: ${messageFormatted.length} символов`)

const messageTrimStart = message.trimStart()
const messageTrimEnd = message.trimEnd()

console.log(`Строка '${messageTrimStart}', имеет: ${messageTrimStart.length} символов`)
console.log(`Строка '${messageTrimEnd}', имеет: ${messageTrimEnd.length} символов`)

