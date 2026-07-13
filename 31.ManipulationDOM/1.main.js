  const boxElement = document.querySelector(".box")

console.log(
  'Текстовое содержимое boxElement:',
  boxElement.textContent
)

const firstParagraphElement = document.querySelector(".paragraph1")

// С помощью метода textContent мы можем получить текстовое содержмиое DOM
// элемента включая текст всех дочерних элементов в одной строке
console.log(
  'Текстовое содержимое firstParagraphElement:',
  firstParagraphElement.textContent
)

// Так же мы можем поменять текстовое содержимое элемента
console.log(firstParagraphElement.textContent = "Новое текстовое содержимое первого параграфа")

// Если мы хотим добавить текст а не заменить его используем оператор +=
console.log(firstParagraphElement.textContent += "Еще какой-то текст")

// Если мы заменяем textContent то теряем все дочерние элементы
// Мы буквально перезаписываем все содержимое
console.log(boxElement.textContent = "Обновленный текст убирает все элементы HTML")

// Мы получим строку а не HTML элемент
console.log(boxElement.textContent = 
`Новое содержимое элемента <p>Абзац как строка</p>`)

// Чтобы получить HTML элемент используем innerHTML
console.log(boxElement.innerHTML = 
`Новое содержимое элемента
<p>Абзац</p>`)

// С помощью outerHTML мы получаем разметку HTML включая в себя сам элемент
console.log(boxElement.outerHTML)

// Это не самый лучший способ добавление элементов в HTML так как он достаточно
// медленный так как переписывает весь HTML код заного
const newParagraphElement = document.createElement("p")
newParagraphElement.textContent = "Новый параграф"
newParagraphElement.classList.add("paragraph4")
