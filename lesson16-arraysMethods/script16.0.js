const data = ['Александр', 28, 'Приветсутвует']

const myName = data[0]
const myAge = data[1]

console.log('name:', myName)
console.log('age:', myAge)

// Синтаксис деструктурирующего присваивания
// Порядок крайне важен
const [myName1, myAge1, myGreetings] = data
console.log('myName1:', myName1)
console.log('myName2:', myAge)
console.log('myGreetings:', myGreetings)

// Итерируем переменную i столько раз сколько составляет длина переменной data
for (let i = 0; i < data.length; i++) {
    console.log(data[i])
}

const letters = ['А', 'Б', 'В', 'Г', 'Д', 'Е']

// Итерация каждого элемента массива
// for (let i = 0; i < letters.length; i++) {
//     console.log(letters[i])
//     }

// forEach перебирает все элементы массива слева направо
// Обычно используется только первая сущность element массива, то есть первый параметр в функции
letters.forEach((letter, i, array) => {
    console.log('По индексу', i, 'находится буква', letter)
    console.log('Массив:', array)
})

letters.forEach(function (letter) {
    console.log(letter)
})

const prices = [100, 200, 300, 400, 500, 600]
console.log(prices.indexOf(300))

// Если мы попытаемся получить индекс несуществующего обьекта мы получим index -1
console.log(prices.indexOf(333)) // -1

// Метод lastIndexOf производит поиск индекса элемента с конца массива 
console.log(prices.lastIndexOf(500)) // 4
