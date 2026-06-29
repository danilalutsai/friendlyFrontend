// Если функция стрелочная ключевое слово async пишется перед круглыми скобками
// const func = async() = {}

// Async говорит о том что функция возвращает Promise
// Даже если искуственно прописываем return все равно возвращает Promise
async function getSomething() {
  return new Promise((fulfill) => {
    setTimeout(() => {
      fulfill('Привет!')
    }, 3000)
  })
}

// Мы можем работать с async функциями как с Promise
// getSomething().then((something) => {
//   console.log(something)
// })

// Ключевое слово await оно заставляет javascript код дождаться выполнения Promise а уже затем продолжить работу
// Благодаря await мы можем не использовать в функции метод .then() и сделать наш код еще более плоским
// const something = getSomething()

// Если передадим функцию без await получим Promise {status}
// console.log(something) Promise { <pending> }

// console.log(await something) // Привет!

console.log('Начало кода...')
// Лучше написать await когда записываем функцию в переменную
const getToDoSomething = await getSomething()
console.log(getToDoSomething) // Привет!

console.log('Конец кода...')
