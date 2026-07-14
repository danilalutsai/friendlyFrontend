const firstBoxEl = document.querySelector(".box-1")
const secondBoxEl = document.querySelector(".box-2")
const thirdBoxEl = document.querySelector(".box-3")

// Если мы нажмем на квадрат 3 то сработают все 3 обработчика события начиная с третьего
// и заканчивая первым в порядке от дочернего элемента к родительскому

// Весь этот процесс называется вспытием события или по английский bubbling
firstBoxEl.addEventListener("click", (event) => {
  console.log("Клик по квадрату номер 1", event.target, event.currentTarget)
})

// Если мы хотим начать обрабатывать событие на этапе погружения а не вспылия то указываем 
// третьим аргументом после функции обект со свойством { capture: true} или просто true
// После этого при клике по box 2 порядок исполнения событий будет следующий: box 2, box 3, box 1
secondBoxEl.addEventListener("click", (event) => {
  console.log(
    "Клик по квадрату номер 2", 
    event.target, 
    event.currentTarget,
    event.stopPropagation()
  )
}, { capture: true }) // или просто true вместо обьекта

// Если будет передана не стрелочная функция а function declaration то к элементу 
// обработчика события мы можем обратиться с помощью ключевого слова this

// Чтобы остановить событий других родительских элементов обращаемся к обьекту event
// и к методу stopPropagation
thirdBoxEl.addEventListener("click", function(event) {
  console.log("Клик по квадрату номер 3", this, event.currentTarget, event.stopPropagation())
})
