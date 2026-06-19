// Для получения рандомного числа используем метод random()

console.log('Случайное число:', Math.random())

// Возведение числа в степень методом pow()
console.log(Math.pow(2, 10)) // 1024
console.log(2**10) // 1024

// Получение квадратного корня из числа sqrt
console.log(Math.sqrt(16)) // 4
console.log(Math.sqrt(49)) // 7
console.log(Math.sqrt(256)) // 16

// Получение кубического корня из числа cbrt
console.log(Math.cbrt(9)) // 2.080083823051904
console.log(Math.cbrt(125)) // 5 
console.log(Math.cbrt(1000)) // 10

// Методы min и max возвращают минимальное и максимальное число
console.log(Math.min(1, 2, 3, -5, 10, 1111, 100)) // -5
console.log(Math.max(1, 2, 3, -5, 10, 1111, 100)) // 1111

// Числа собранные в масив передать просто в метод min и max не получится
const nums = [1, 2, 3, -5, 10, 1111, 100]

console.log(Math.min(nums)) // NaN - Not a Number

// Нужно в аргументе перед nums передать spread оператор
console.log(Math.min(...nums)) // -5

