// Если в html файле мы указываем Id элемента то мы можем найти его по Id
const buttonElement = document.getElementById("buttonid1")
console.log("Button element:", buttonElement)

const buttonQuery = document.querySelector("button")
// Поиск по классу
document.querySelector(".button")

// Поиск по Id
document.querySelector("#button")

// Чтобы получить все элементы по указанному селектору
const documentItems = document.querySelectorAll(".item")

console.log("Button query:", buttonQuery)

// Получаем значение атрибута data-js-slider в html файле
const sliderElement = document.querySelector("[data-js-slider]")
console.log(sliderElement.getAttribute("data-js-slider"))
console.log(sliderElement.dataset.jsSlider)

const sliderListElement = document.querySelector("[data-js-slider-list]")

// Таким способом вместо атриюутов мы получим простую строку обьекта json
let sliderListParams = sliderListElement.getAttribute("data-js-slider-list")
console.log(sliderListParams)

sliderListParams = JSON.parse(
  sliderListElement.getAttribute("data-js-slider-list")
)
console.log(sliderListParams)
console.log(sliderListParams.direction)
