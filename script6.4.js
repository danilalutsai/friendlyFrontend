const age = +prompt('Сколько тебе лет?')

switch (age) {
    case 0: {
        console.log('Такого возраста не существует')
        break
    }
    case 18: {
        console.log('Не верю, покажи пасспорт.')
        break
    }
    case 1000: {
        console.log('Вампир что-ли?')
        break
    }
    default: {
        console.log(`Твой возраст ${age}`)
    }
}