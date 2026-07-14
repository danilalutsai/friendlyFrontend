// Примеры событий: click, scroll, keydown/keyup, mouseover/mouseout
const logAllEvents = () => {
  console.log(
    Object
      .keys(window)
      .filter((key) => /^on/.test(key))
      .map((eventName) => eventName.slice(2))
  )
}

logAllEvents()

// Чтобы начать обрабатывать события нужно сначало назначить DOM элементу обработчик. 
// В html файле добавляем onclick="logMessage() Это не самый правельный способ обработки событий
function logMessage() {
  return
}

// Находим элемент обработки событий например кнопки
const buttonElement = document.querySelector(".button")

// Не нужно вызывать самому функцию а нужно лишь только передать имя функции
buttonElement.onclick = logMessage

// У предыдущих способов обработки событий мы не можем повесить несколько функций 
// обработки событий для этого нужно использовать метод addEventListener

// Принимает в себя минимум два аргумента, строку с именем события (click) и функцию
// обработчик этого самого события
buttonElement.addEventListener("click", () => {

})

// Также вторым аргументом мы можем передать ссылку на какую либо функцию
function logMessageOnClick() {
  console.log("Ты нажал на кнопку")
}

function logMessageOnClick2() {
  console.log("Ты нажал на кнопку 2")
}

// Таким образом можно повесить несколько событийных функций на элемент
buttonElement.addEventListener("click", logMessageOnClick)
buttonElement.addEventListener("click", logMessageOnClick2)

const secondButtonElement = document.querySelector(".button2")

secondButtonElement.addEventListener("click", () => {
  
  // Первым аргументом задается событие а вторым функция которую хотим отменить 
  buttonElement.removeEventListener("click", logMessageOnClick)
  buttonElement.removeEventListener("click", logMessageOnClick2)
})

// Убираем обработчик события чтобы нам не мешал в дальнейшем исполнении кода
buttonElement.removeEventListener("click", logMessageOnClick)
buttonElement.removeEventListener("click", logMessageOnClick2)

// В рамках функции обработчика события через первый параметр этой функции у нас есть
// доступ к обьекту который будет содержать подробную информацию о случившимся событии
// Эту сущность лучше называть как event

// Внутри event находится обьект уникальный для каждого типа события
// В данном случае обьект относится к событию pointerEvent - событие указателя

// Самое важное свойство в обьекте event это target
// В нем находится ссылка на DOM элемент в котором возникло событие
buttonElement.addEventListener("click", (event) => {
  console.log(event)
})
