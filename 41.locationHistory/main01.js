console.log(window.location);

// Метод reload по сути просто перезагружает страницу, в данном случае каждые 3 секунды
// setTimeout(() => {window.location.reload()}, 3000)

// Оба этиз метода иницирует переход на страницу адрес который указан как единственный аргумент
setTimeout(() => {
  // window.location.assign('./')
  // window.location.replace('./')
  // window.location.href = './'
}, 3000);

// Таким методом мы отменили события по умолчанию клика перехода по ссылке
document.addEventListener('click', (event) => {
  if (event.target.href) {
    event.preventDefault();
    window.location.href = event.target.href
  }
})

console.log(window.history);

// Для перехода назад по истории сессии браузера
const backButElem = document.getElementById('back-button')
const forwardButElem = document.getElementById('forward-button')
const historyButElem = document.getElementById('history-button')
const showHistoryButElem = document.getElementById('show-history-button')

backButElem.addEventListener('click', () => {
  window.history.back()
})

forwardButElem.addEventListener('click', () => {
  window.history.forward()
})

// Переход на 2 страницы назад
backButElem.addEventListener('click', () => {
  window.history.go(-2)
})

// Переход на 3 страницы вперед
forwardButElem.addEventListener('click', () => {
  window.history.go(3)
})

// Pushstate используется для создания новый записи в истории текущей сессии
historyButElem.addEventListener('click', () => {
  window.history.pushState(
    {
      example: 'Какой-то текст',
    },
    '',
    './'
  )
})


// Метод replaceState в отличии от pushState модифицирует последнюю запись в истории сессии,
// а не добавляет новую
historyButElem.addEventListener('click', () => {
  window.history.replaceState(
    {
      example: 'Какой-то текст',
    },
    '',
    './'
  )
})

showHistoryButElem.addEventListener('click', () => {
  console.log('history:', window.history)
})
