let message = '   Привет!  '

console.log(`
  Сообщение до:
  "${message}"
`)

// Эти методы не мутируют исходную строку сами по себе
// Поэтому мы перезаписываем строку в переменную message 
// чтобы сохранить изменения
message = message
  .trim()
  .toUpperCase()
  .slice(0, 4)

console.log(`
  Сообщение после: 
  "${message}"
`)
