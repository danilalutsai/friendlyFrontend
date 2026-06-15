// Способы обрезки строки
const str = 'JavaScript'

// В скобках указываем начальный и последний индекс подстроки которую вырезаем
console.log(str.substring(0, 4)) // Java
console.log(str.substring(4)) // Script

console.log(str.slice(0, 4)) // Java

// Параметры функции slice может быть отрицательным, и отрежем строку с 
// конца в то время как substring негативным быть не может
console.log(str.slice(-6)) // Script
console.log(str.slice(-6, -3)) // Scr

// Функция repeat повторяет строку указанное количество раз
console.log(str.repeat(3)) // JavaScriptJavaScriptJavaScript

// Метод replace принимает два аргумента
// 'что меняем', 'на что меняем'
// Заменяет только первую обнаруженную строку на другую подстроку
// Остальные не трогает
const replaceMessage = 'Я изучаю бэкенд и бэкенд'
console.log(
  replaceMessage.replace('бэкенд', 'фронтенд') // Я изучаю фронтенд и бэкенд
)

// Если хотим заменить все значения строки на другую используем replaceAll
console.log(
  replaceMessage.replaceAll('бэкенд', 'фронтенд') 
  // Я изучаю фронтенд и фронтенд
)
