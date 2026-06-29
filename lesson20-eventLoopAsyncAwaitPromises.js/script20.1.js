const wait = (ms, callback) => {
  // const now = new Date().getTime()
  //
  // while (new Date().getTime() < now + ms) {
  //   // Ничего не делаем
  // }
  //
  // callback()
  
  // Делаем функцию сверху асинхронной
  setTimeout(callback, ms)
}


// console.log(1)
// wait(5000, () => console.log(2))
// console.log(3)

// Асинхронные функции возвращают обьект Promise в качестве результата
// Promise имеет 3 состояния: 
// - pending: ожидание, исходное состояние
// - fulfilled: выполнено успешно, получаем резултьат
// - rejected: выполнено с ошибкой

const promise = new Promise((fulfill, reject) => {
  console.log('Начало состояния pending...')

  setTimeout(() => {
    if (Math.random() > 0.5) {
      fulfill('Ура! Состояние fulfilled!')
    } else {
      reject('Увы. Состояние reject.')
    }
  }, 3000)
})

promise
  .then((successData) => {
    console.log('Успех! Получаем данные: ' + successData)
  })
  // (errorData) => {
  //   console.log('Ошибка. Получаем данные: ' + errorData)
  // })
  // Вместо использования catch можем передать его вторым аргументом в .then()
  // Однако лучшей практикой будет использовать метод .then()
  .catch((errorData) => {
    console.log('Ошибка. Получаем данные: ' + errorData)
  })
  .finally(() => {
    console.log('Код, выполняющийся в самом конце. Не зависимо от результата.')
  })
