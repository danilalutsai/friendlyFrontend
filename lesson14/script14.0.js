// Длина строки - length
// length это не функция а метод поэтому круглые скобки после прописывать 
// не нужно

const name = 'Александр'
const emptyStr = ''
const stringWithOneSpace = ' '

console.log(`Длина строки '${name}':`, name.length) // 9
console.log(`Длина строки '${emptyStr}':`, emptyStr.length) // 0
console.log(`Длина строки '${stringWithOneSpace}':`, stringWithOneSpace.length) // 1

console.log('123'.length) // 3


// Возможность получить конкретный символ из строки по его индексу
const surname = 'Морозов'
console.log(surname[0]) // М
console.log(surname[1]) // о
console.log(surname[10]) // undefined

// Отрицательный индекс быть не может
// console.log(surname[-1]) // undefined

// Чтобы показать последний символ строки используем length
console.log(surname[surname.length - 1]) // в

// method at получаем символ строки с индексом в скобках
console.log(surname.at(0)) // М
console.log(surname.at(1)) // о

// Метод at может быть отрицательным и выдаст нам последнии символы строки
console.log(surname.at(-0)) // М - первый символ с начала
console.log(surname.at(-1)) // в - первый символ с конца
console.log(surname.at(-2)) // о - второй символ с конца
