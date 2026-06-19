// Присвоение message то или иное значение в зависимости от того, равно ли year 3000 или нет.

const year = 2000
const message = year === 3000 
    ? 'Happy New Year!' 
    : year === 2000
        ? 'Welcome to the new millennium!'
        : 'Sorry, you are too early...'

console.log(message)