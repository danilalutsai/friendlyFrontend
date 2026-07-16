// Keydown - нажатие на клавишу
// Keyup - отпускание клавиши

document.addEventListener("keydown", (event) => {
  const { code, metaKey } = event

  if (
  code === "ArrowDown" && metaKey ||
  code === "Numpad3"
  ) {
    event.preventDefault()
    console.log("Нажатие на pageDown отменено.")
  }

  if (code === "Tab") {
    event.preventDefault()
    console.log("Нажатие на Tab отменено.")
  }

  const anyDigitRegExp = /\d/

  if (anyDigitRegExp.test(event.key)) {
    event.preventDefault()
    console.log("Отменен ввод цифры:", event.key)
  }
})

document.addEventListener("keyup", (event) => {
  // console.log("Keyup event:", event)
})
