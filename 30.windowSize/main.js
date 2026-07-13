const htmlElement = document.documentElement

console.log('Ширина окна:', htmlElement.clientWidth)
console.log('Высота окна:', htmlElement.clientHeight)

console.log('Ширина страницы:', htmlElement.scrollWidth)
console.log('Высота страницы:', htmlElement.scrollHeight)

console.log(
  'Координаты позиции скролла страницы:',
  window.scrollX,
  window.scrollY
)

// С помощью скролл можно прокрутить страницу
document.documentElement.scroll({
  top: 200,
  behaviour: "smooth",
})

// Или можно сократить код и использовать window
window.scroll({
  top: 400,
  behaviour: "smooth",
})

// Теперь зададим прокрутку через 2 секунды после загрузки страницы
setTimeout(() => {
  window.scroll({
    top: 100,
    behaviour: "smooth",
  })
}, 2000)

// Проскроллить страницу не на 100px начиная сверху а на 100px от данного
// расположения
setTimeout(() => {
  window.scrollBy({
    top: 100,
    behaviour: "smooth",
  })
})

// Scroll до указанного элемента страницы
const reviesSectionElement = document.querySelector("#reviews")

setTimeout(() => {
  reviesSectionElement.scrollIntoView({
    behaviour: "smooth",
  })
})
