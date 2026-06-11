const age = +prompt('Введите свой возраст:')


/*

Очень важно в конце каждого case прописывать команду break так как если ее не прописать
то все последующие case будут выводится как true в консоли:

Твой возраст: 1
Вампир что-ли?
Возраст введен некоректно.

*/

switch (true) {
    case age < 1: {
        console.log('Такого возраста не бывает')
        break
    }
    case age === 18: {
        console.log('Не верю, покажи пасспорт.')
        break
    }
    case age > 0 && age <= 125: {
        console.log(`Твой возраст: ${age}`)
        break
    }
    case age > 125: {
        console.log('Вампир что-ли?')
        break
    }
    default: {
        console.log('Возраст введен некоректно.')
    }
}