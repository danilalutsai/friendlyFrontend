const sectionElement = document.querySelectorAll("section")

const animateSections = () => {
  sectionElement.forEach((sectionElement) => {
    sectionElement.classList.add("is_visible")
  })
}

document.addEventListener("preloaderClose", () => {
  animateSections()
})
