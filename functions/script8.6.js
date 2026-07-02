function sum(a, b) { 
    return a + b

    // Последующие после Return инструкции не будут выполнены
    // После инструкции Return она вычисляет и возвращает результат справа от нее
    console.log('Привет')
    console.log('Пока')
}

const result = sum(100, 1)
console.log(result)

console.log(
    sum(100, 1)
)