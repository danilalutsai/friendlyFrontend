let users = [
    {
        name: 'Александр',
        age: 28,
        city: 'Москва',
    },
    {
        name: 'Василий',
        age: 32,
        city: 'Екатеринбург',
    },
    {
        name: 'Ольга',
        age: 45,
        city: 'Москва',
    },
    {
        name: 'Василий',
        age: 40,
        city: 'Санкт-Петербург',
    },
]

// Обе функции findIndex одинаковые просто интерпретированы по разному
console.log(
    users.findIndex((user) => {
        if (user.name === 'Василий') {
            return true
        } 
    }),

    // Это лучший из вариантов так как его читаемость лучше чем читаемость других функций findIndex
    users.findIndex((user) => user.name === 'Ольга'), 

    users.findIndex(({ name }) => name === 'Александр')
)

// Если мы хотим проверить индекс начиная с конца используем findLastIndex
console.log(users.findLastIndex((user) => user.name === 'Ольга'))

// Мы не можем проверять наличия элемента в массиве методом includes если это обьекты
console.log(users.includes({name: 'Александр', age: 28})) // false

// Метод some проверяет соответствует ли условиям хотя бы один элемент массива чтобы 
// узнать существует ли этот обьект в массиве
console.log(users.some((user) => user.name === 'Ольга')) // true

// Метод every проверяет все элементы массива на содержание чего-то
// Например проверяем все ли обьекты совершеннолетние
// Если хотя бы один обьект массива не будет соответствовать задаче вернется false
console.log(users.every((user) => user.age > 18)) // true

// Метод find выдает полный обьект если нашел какой-то из его методов
// Если таких будет несколько метод find найдет только первый
console.log(users.find((user) => user.name === 'Василий')) // {name: 'Василий', age: 32}

// Если требуется найти все обьекты выполняющие условия фильтрации используем функцию filter
console.log(users.filter((user) => user.name === 'Василий'))
// {name:'Василий', age: 32}, {name:'Василий', age: 40}

console.log(
    users.filter(({city, age}) => city === 'Москва' || age < 40)
)

const filteredUser = users.filter(({city, age}) => {
    return city === 'Москва' || age < 40
})
console.log(filteredUser)

// Если filter ничего не находит то возвращает пустой массив
console.log(users.filter((user) => user.age > 75)) // []

// Метод map позваляет изменить элемент обьекта в массиве
// На выходе получаем новый массив с измененными обьектами
// Не мутирует исходный обьект а только меняет его в return
// Поэтому мы присваеваем изменения на новый массив formattedUsers
// Если мы хотим поменять исходные данные в массиве нужно присвоить его ему же и обьевить его при помощи let
// Таким образом получаем новый массив состоящий из строк вместо обьектов
usersStrings = users.map((user) => {
    return `Пользователь по имени: ${user.name}, Возраст: ${user.age}, Живет в г. ${user.city}`
})
console.log(usersStrings)

// Мы хотим получить средний возраст всех Пользователей

// Обьявляем переменную с let
let ageSumOfUsers = 0

for (let i = 0; i < users.length; i++) {
    ageSumOfUsers += users[i].age
}

const getAverageAgeOfUsers = ageSumOfUsers / users.length
console.log(+getAverageAgeOfUsers)

// Тоже самое мы можем сделать с помощью метода reduce
// Он принимает в себя два значения, callback функцию и через запятую начальное значение
const ageSum = users.reduce((sum, user) => {
    return sum + user.age
}, 0)

// Упростим предыдущую функцию reduce
const ageSum1 = users.reduce((sum, {age}) => sum + age, 0)
console.log(
    'Средний возраст всех пользователей:', 
    ageSum1 / users.length
)

// Метод reverse переворачивает исходный массив
// Метод reverse в отличии от других методов мутирует исходную сущность
const reversedUsers = users.reverse()
console.log(users)

// Если мы не хотим мутировать обьект users то можно перевернуть его копию с помощью оператора ...
const reversedUsers1 = [...users].reverse()

// Метод sort сортирует текущий массив
// Также мутирует исходный массив
const names = ['Василий', 'Александр', 'Максим', 'Андрей',]
const sortedNames = names.sort()
console.log(names)
// поэтому также если хотим работать над копией массива используем оператор ...
const sortedNames1 = [...names].sort()
console.log(sortedNames1)

// Если сортируем числа то нужно применять callback функцию
numbers = [8, 500, 4]
const sortedNumbers = [...numbers].sort((a, b) => a - b)
console.log(sortedNumbers)
const reverseSortedNumbers = [...numbers].sort((a, b) => b - a)
console.log(reverseSortedNumbers)
