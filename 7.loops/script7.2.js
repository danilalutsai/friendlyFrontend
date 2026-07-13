let count = 1

console.log('Цикл сейчас начнется...')

while (count < 10) {
    console.log(count)

    if (count % 5 === 0) {
        console.log('Цикл прерван досрочно.')
        break
    }

    count++
}

console.log('...цикл закончен!')