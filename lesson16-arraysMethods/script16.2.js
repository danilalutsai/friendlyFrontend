const prices = [100, 200, 444, 500, 444, 700]



// Поиск элементов в массиве при помощи всех этих функций

// indexOf
console.log(prices.indexOf(500) !== -1)

// lastIndexOf
console.log(prices.lastIndexOf(500) !== -1)

// findIndex
console.log(prices.findIndex((price) => price === 500) !== -1)

// findLastIndex
console.log(prices.findLastIndex((price) => price === 500) !== -1)

// Для проверки наличия элемента в массиве используется метод includes
// Аргументом принимаеет элемент который мы будем искать в искомом массиве
// И если элемент в массиве существует метод includes вернет true
// Вторым параметром передается индекс с которого будет происходить поиск. Можно ничего не передавать
console.log(prices.includes(500, 4)) // false
