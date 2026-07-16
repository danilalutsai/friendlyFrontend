const buttonElement = document.querySelector(".button")

buttonElement.addEventListener("mousedown", (event) => {
  console.log("1. mousedown", event.target, event.currentTarget)
})

// Mouseup это события отпускания клавишы мыши
buttonElement.addEventListener("mouseup", (event) => {
  console.log("2. mouseup", event.target, event.currentTarget)
})

// Click это комбинация кликов mousedown и mouseup
buttonElement.addEventListener("click", (event) => {
  console.log("3. click", event.target, event.currentTarget)
})

// События генерируются во время двойного клика левой клавиши мыши
buttonElement.addEventListener("dblclick", () => {
  console.log("dblclick")
})

// Сразабывает при врамов клике мыши
buttonElement.addEventListener("contextmenu", (event) => {

  // С помощью preventDefault мы можем отменять открытия вспывающего окна с функциями браузера
  event.preventDefault()
  console.log("Context menu click")
})
