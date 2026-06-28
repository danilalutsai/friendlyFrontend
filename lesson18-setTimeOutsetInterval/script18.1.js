// Принимает в себя два аргумента:
// 1. Функция которая будет выполняться 
// 2. Число - отвечающее за время задержки в милисекундах 1 сек = 1000 мсек
// Если не передать время задержки то по умолчанию будет 0
setTimeout(() => {}, 2000)
// =
setTimeout(function() {}, 2000)
// = 
const doSomething = () => {
  alert('Этот код выполнится через 2 секунды')
}
// Мы не ставим после функции круглые скобки, а то код отработает некоректно
// Необходимо лишь передать ее по ссылке
// setTimeout(doSomething, 2000)

const logMessage = (name, age) => {
  alert(`Привет. Меня зовут ${name} и мне ${age} лет.`)
}

// Чтобы код правильно выполнил свои функции передаем параметры logMessage 3 м 4 аргументами
// setTimeout(logMessage, 2000, 'Вася', 30)

// Чтобы отменить вызова функции setTimeout записываем ID функции в переменную 
// а дальше передаем ее в функцию clearTimeout
const timerId = setTimeout(logMessage, 2000, 'Александр', 28)
clearTimeout(timerId)

// Для повторения каких-либо действий используем setInterval
const intervalId = setInterval(() => {
  console.log('Привет!')
}, 1000)

setTimeout(() => {
  clearInterval(intervalId)
}, 5000)
  
