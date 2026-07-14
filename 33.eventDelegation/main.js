// Как бы делал новичек
const todoItemElement = document.querySelectorAll(".todo_item")

// Этот код плох потому что он обращается ко всем элементам todo_item и браузер хранит
// в себе информацию по поводу события для каждолго элемента. А если их было бы больше 1000?

// Так же мы присвоили обработчик события для элементов уже существующих в html файле, а если бы эти элементы 
// были динамичными и добавлялись бы в течении какого-то времени, то к ним обработчик событий уже не работал.
todoItemElement.forEach((todoItemElement) => {
  todoItemElement.addEventListener("click", () => {
    todoItemElement.classList.add("is_completed")
  })
})

const addTodoItem = () => {
  const todoListElement = document.querySelector(".todo_list")
  const newTodoItemMarkup = `<li class="todo_item"><span>Todo item</span></li>`

  todoListElement.insertAdjacentHTML("beforeend", newTodoItemMarkup)
}

// На добавленных трех элементах обработчик события не работает так как они новые
addTodoItem()
addTodoItem()
addTodoItem()

// Теперь делаем тоже самое при помощи делегирования событий. Вешаем один обработчик события на весь документ
// При таком раскладе каждый раз когда происходит клик в консоль выводится обьект по которому произошел клик
const onTodoItemClick = (todoItemElement) => {
  todoItemElement.classList.add("is_completed")
}

document.addEventListener("click", (event) => {
  const todoItemElement = event.target.closest(".todo_item")

  // Сначала нужно проверить что клик произошел именно по todo_item элементу с помощью classList.contains
  // Closest может вызываться у любого DOM элемента и ищет вверх по дом дереву ближайщий родительский элемент.
  if (todoItemElement) {
    onTodoItemClick(todoItemElement)
  }
})

// Поведение браузера по умолчанию
const linkElement = document.querySelector("a")
const formElement = document.querySelector("form")

// Обязательно нужно обращаться к обьекту event чтобы предотвратить выполнение событий по умолчанию.
linkElement.addEventListener("click", (event) => {
  event.preventDefault()
})
formElement.addEventListener("submit", (event) => {
  event.preventDefault()
})
