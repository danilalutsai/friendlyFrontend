const boxElement = document.querySelector(".box")

console.log(boxElement.style)

// Мы задаем стили по-штучно
boxElement.style.position = "absolute"
boxElement.style.top = "40px"
boxElement.style.left = "80px"

boxElement.style.border = "5px solid red"
boxElement.style.width = "200px"
boxElement.style.height = "200px"

// Задаем стили по группам
// Однако мы полностью перезаписываем атрибуты style в html файле
// Чтобы полностью не перезаписывать стили можем просто их добавить с помощью +=
boxElement.style.cssText += `
  position: absolute;
  top: 60px;
  left: 100px;
  height: 60px;
  border: 6px solid green;
`

// Чтобы получить стили в отдельном файле а не в html
console.log(
  'Вычисление стилей вне html файла, а в css:', getComputedStyle(boxElement).width
)

// Можем передать вторым аргументов название псевдоэлемента с учетом ::
console.log(
  'Стили псевдоэлемента:', getComputedStyle(boxElement, "::after").textDecoration
)

// Можем напрямую изменить имя класса или свойства элемента
boxElement.className = "BOX"

// Верхним способом обычно не меняют или не добавляют классы это делается с
// помощью classList различными методами типо add, remove, toggle, contains
boxElement.classList.add("red", "big")

// Чтобы удалить класс у элемента используем remove
boxElement.classList.remove("big", "BOX")

// Toggle добавляет класс элементу если такого класса нет и удаляет если такой
// класс уже существует
boxElement.classList.toggle("big")

// Вторым аргументом в метод toggle мы передаем условие любого вида которое
// будет автоматически преобразованно в boolean
const hasError = true
boxElement.classList.toggle("big", hasError)

// Containts просто проверяет есть ли у элемента определенный класс
// И возвращает результат как true or false
console.log(
  'Есть ли класс "red" у элемента boxElement?', boxElement.classList.contains("red")
)

// Управление css переменными через Javascript
// Метод принимаем 2 аргумента, название стиля css и его значение
boxElement.style.setProperty("border-color", "blue")
