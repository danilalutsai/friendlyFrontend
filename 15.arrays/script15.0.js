// Массивы или Arrays это не отдельный тип данных
// Это специальная структура, коллекция в которой элементы хранятся
// в том порядке в котором их поместили в массив или array

const arr = [
  'Привет!',
  100,
  true,
  () => console.log('hi'),
  {name: 'Александр'},
  [1, 2, 3, 4, 5],
]

const names = ['Александр', 'Михаил', 'Тимофей']
const ages = [13, 28, 35]
const permissions = [true, false, false, false, true]

// Чтобы создать массив используем квадратные парные скобки []
// Или же функцию new Array
const arr1 = []
const arr2 = new Array()

console.log('arr:', arr)

// Массив это обьект
console.log('typeof arr:', typeof arr)
console.log(arr[0]) // Привет!
console.log(arr[999]) // undefined

console.log(arr[4].name) // Александр
console.log(arr[4]['name']) // Александр
arr[3]() // hi
console.log(arr[5][0]) // 1

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

console.log(matrix[1][0]) // 4

arr[0] = 'Пока'
console.log(arr)
