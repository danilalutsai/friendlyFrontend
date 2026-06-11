console.log('Цикл сейчас начнется...')

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue
    }

    console.log(i)
}

console.log('...цикл закончен!')