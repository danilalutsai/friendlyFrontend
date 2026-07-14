const forthParagraph = document.createElement("p")
const zeroParagraph = document.createElement("p")

forthParagraph.textContent = "Четвертый параграф"
forthParagraph.classList.add("paragraph4")

zeroParagraph.textContent = "Нулевой параграф"
zeroParagraph.classList.add("paragraph0")

console.log(zeroParagraph)
console.log(forthParagraph)

const boxElement = document.querySelector(".box")
const thirdParagraph = document.querySelector(".paragraph3")

// Append добавляет элемент в конец списка
boxElement.append(forthParagraph)

// Prepend добавляет элемент в начало списка
boxElement.prepend(zeroParagraph)

// Добавляем элемент до или после элемента к которому он был применен
zeroParagraph.before(forthParagraph)
thirdParagraph.after(zeroParagraph)

// Заменяет элемент к которому был применен
thirdParagraph.replaceWith(forthParagraph)

const getNewParagraphElement = () => {
  const newParagraphElement = document.createElement("p")
  newParagraphElement.textContent = "Новый параграф"
  return newParagraphElement
}

const getNewArticleElement = () => {
  const newArticleElement = document.createElement("p")
  newArticleElement.textContent = "Новый артикул"
  return newArticleElement
}

// Если бы не было функции getNewParagraphElement то после выполнения любого из
// ранее рассмотренного метода элемент кочевал бы с одного места в другое
// В агрументы этих методов можно перечислять больше чем одного элемента
forthParagraph.before(getNewParagraphElement(), getNewArticleElement())
forthParagraph.before(getNewParagraphElement(), getNewArticleElement())
forthParagraph.before(getNewParagraphElement(), getNewArticleElement())

// Чтобы удалить элемент из DOM дерева используем remove()
forthParagraph.remove()
zeroParagraph.remove()

// Клонирование конкретного элемента c cloneNode
// Клонирование происходит без добавление содержимого элемента
// Происходит поверхностною клонирование, чтобы клонировать полностью нужно
// передать в агрументы метода cloneNode(true)
const fifthParagraph = thirdParagraph.cloneNode(true)
thirdParagraph.after(fifthParagraph)

// Перемещение элементов
fifthParagraph.after(zeroParagraph)
