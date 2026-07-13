console.log(window)

const divElement = window.document.createElement("div")
divElement.style.width = "100px"
divElement.style.height = "100px"
divElement.style.border = "2px solid red"
window.document.body.appendChild(divElement)

window.document.querySelector("div").remove()

window.document.addEventListener("click", (event) => {
  console.log(`Координаты клика: x:${event.x}, y:${event.y}`)
  })

window.addEventListener("scroll", () => {
  console.log("Координаты скролла:", window.scrollY)
})

// Также с помощью встроенной функции window мы можем получить информацию о
// браузере. BOM - Browser Object Model
console.log('Мой браузер:', window.navigator.userAgent)
console.log('Высота окна браузера:', window.screen.height)

// Ко всем этим глобальным свойствам мы можем обращаться без ключевого слова
// window
console.log('Текущий URL-адрес вкладки браузера:', location.href)
console.log('Длина "истории" текущий сесии браузера:', history.length)

// DOM - Document Object Model
console.log(document)

const parentElement = document.body.children[0]

console.log("Элемент <div>:", parentElement)
console.log("Родительский элемент над <div>:", parentElement.parentElement)
console.log("Родительский элемент над <div>:", parentElement.parentNode)

console.log("Соседний элемент перед <div>:", parentElement.previousElementSibling)
console.log("Соседний узел перед <div>:", parentElement.previousSibling)

