// Чтобы обьеденить массивы так же можем использовать оператор spread ...
const arr1 = ['A', 'B']
const arr2 = ['C', 'D']

const arr3 = [...arr1, ...arr2] // ['A', 'B', 'C', 'D']
console.log(arr3)

// Так же можем использовать функцию concat
const arr4 = arr1.concat(arr2, arr3)
console.log(arr4) // ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']

// Массивы как и обьекты нельзя сравнивать напрямую
const array1 = ['A', 'B', 'C', ['A', 'B']]
const array2 = ['A', 'B', 'C', ['A', 'B']]

console.log(array1 === array2) // false
console.log(array1 == array2) // false

// Чтобы сравнить аналогичность двух массивов нужно перебрать и сравнить
// каждый элемент массива с другим
const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false
  }

  for (let i = 0; i < array1.length; i++) {
    const value1 = array1[i]
    const value2 = array2[i]

    const areValuesArrays = 
      Array.isArray(value1) && Array.isArray(value2)

    if (areValuesArrays) {
      if (!areArraysEqual(value1, value2)) {
        return false
      } else {
        continue
      }
    }

    if (value1 !== value2) {
      return false
    }
  }
  
  return true
}

console.log(areArraysEqual(array1, array2))
