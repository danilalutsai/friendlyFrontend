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
