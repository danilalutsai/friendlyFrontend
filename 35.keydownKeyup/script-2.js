const inputElement = document.querySelector("input")
const nameOutputElement = document.querySelector(".name-output")
const errorMessageElement = document.querySelector("#error-message")

// Чтобы обработку делать не моментальной на момент ввода как с input обработчиком событий
// мы ставим change и ошибка выходит только когда теряется момент фокусировки поля ввода
inputElement.addEventListener("change", () => {
  nameOutputElement.textContent = inputElement.value
  
  const isInvalid = inputElement.value.length < 5

  inputElement.classList.toggle("is-invalid", isInvalid)
  errorMessageElement.textContent = isInvalid
    ? "Минимальная длина - 5 символов"
    : ""
})

document.addEventListener("cut", async function(event) {
  console.log("Событие CUT:", event)

  navigator.clipboard.readText().then((clipboardText) => {
    // console.log("clipboardText:", clipboardText)
  })

  try {
    const clipboardText = await navigator.clipboard.readText()
    console.log("clipboardText:", clipboardText)
  } catch (error) {
    console.log("Не удалось прочитать буфер обмена:", error.message)
  }
})

document.addEventListener("copy", (event) => {
  console.log("Событие COPY:", event)
})

document.addEventListener("paste", (event) => {
  console.log("Событие PASTE:", event)
  console.log(event.clipboardData.getData("text/plain"))
})

