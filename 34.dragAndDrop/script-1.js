const buttonElement = document.querySelector(".button")

buttonElement.addEventListener("click", () => {
  console.log("Произошел клик")
})

buttonElement.addEventListener("mousemove", () => {
  // console.log("Движение мыши над элементов кнопка")
})

buttonElement.addEventListener("mouseover", (event) => {
  console.log("🟢 Курсор навели на элемент поиска кнопки")

  // Target это элемент на который навели курсор
  console.log("target:", event.target)

  // Related target это элемент с которого курсор ушел
  console.log("relatedTarget:", event.relatedTarget)
})

buttonElement.addEventListener("mouseout", () => {
  console.log("🟡 Курсор увели с элемента кнопки")
  console.log("target:", event.target)
  console.log("relatedTarget:", event.relatedTarget)
})

buttonElement.addEventListener("mouseenter", () => {
  console.log("🟢 Курсор навели на элемент (или на его дочерний элемент")
})

buttonElement.addEventListener("mouseleave", () => {
  console.log("🟡 Курсор увели с элемента (или с его дочернего элемента)")
})
