const age = 17
const withParent = true

if (age >= 18 || withParent) {
    console.log('Проходите') 
} else {
        console.log('Вы не проходите')
    }

// || - оператор ИЛИ
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
console.log(true || true) // true

// && - оператор И
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
console.log(true && true) // true