const message = 'Пробуем найти -это выражение- в этом предложении'

// Именно с этой позиции начинается подстрока в скобках
console.log(
  message.indexOf('-это выражение-')
) // 14

console.log(
  message.indexOf('п')
) // 37

console.log(
  message.indexOf('П')
) // 0

// Если попытаемся найти индекс строки которой не существует получим -1
console.log(
  message.indexOf('sadawdadw') !== -1
) // false

// Чтобы сразу вернуть значение существует ли строка в строке используем 
// функцию includes()

console.log(
  message.includes('-это выражение-')
)

// startsWith и endsWith
console.log(message.startsWith('Пробуем')) // true
console.log(message.endsWith('предложении')) // true

// К каждому из этих методов можем передать второй аргумент индекс
// Означающий номер позиции символа строки с которого будет происходить
// поиск вхождения
console.log(message.indexOf('бу', 3)) // 3
console.log(message.includes('бу', 3)) // true
console.log(message.startsWith('ем', 5)) // true
console.log(message.endsWith('ем', 7)) // true
console.log(message.endsWith('предложении', message.length)) // true

