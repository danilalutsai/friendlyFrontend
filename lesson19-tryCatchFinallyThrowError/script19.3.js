console.log('Начало кода...')

try {
  const userJSON = `{
    "age": 28
  }`

  const user = JSON.parse(userJSON)
  const {name, age} = user

  // if (!name) {
  //   throw 'Имя не заполнено!'
  // }


  console.log(`
    Привет: ${name},
    Твой возраст ${age}, верно?
    `)

  throw new Error(errorMessage)

} catch (error) {
  console.log('Возникла ошибка: ' + error)
}

console.log('Конец кода...')
