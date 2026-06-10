let count = 1

// Две последующие строки делают одно и то же, но вторая короче.
count = count + 2
count += 2

console.log(count)

// Операторы дикремента и инкремента
count++
console.log(count)

count--
console.log(count)


// Ращница префиксного и постфиксного инкремента

count = 10
let newCount = ++count
console.log(count) // 11
console.log(newCount) // 11

count = 10
newCount = count++
console.log(count) // 11
console.log(newCount) // 10


console.log(5 > 3) // true
console.log(10 < 1) // false
console.log(2 >= 2) // true
console.log(3 <= 0) // false
console.log(4 == 4) // true
console.log(5 != 5) // false
