const str = '+7 (9) 999-99-99'

console.log(
  str.replace(/\d/g, '#')
)

// Метод split помогает разбить строку на массив
const welcomeMessage = 'Привет, мир!'

console.log(
  welcomeMessage.split(', ') // 'Привет', 'мир'
)

// Так же можем разбить строку на масив
console.log(
  welcomeMessage.split('') 
  // ['П', 'р', 'и', 'в', 'е', 'т', ',', ' ', 'м', 'и', 'р', '!']
)

