console.log('Начало кода...')

try {
  const names = undefined
  console.log('Имя: ' + name)
} catch (error) {
  console.log('Full error: ' + error)
  console.log('name: ' + error.name)
  console.log('message: ' + error.message)
  console.log('stack: ' + error.stack)
}
