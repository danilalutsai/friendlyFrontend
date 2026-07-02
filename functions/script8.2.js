const message = 'Глобальный привет'

function logMessage() {
    const message = 'Локальный привет'

    console.log(message)

    for (let i = 0; i < 3; i++) {
        const message = `Итерация цикла N ${i}`
        console.log(message)
    }
}

logMessage()

console.log(message)