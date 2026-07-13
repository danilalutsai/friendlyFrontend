// У оператора И && приоритет выше, чем у оператора ИЛИ ||, поэтому он выполняется первым.
// В этом примере оператор И && выполняется первым, а затем оператор ИЛИ ||:

const name = 'Данила'
const age = 28
const hasMuchMoney = false
const hasGoodJob = false
const hasMotivation = true
const hasFreeTime = true

if (name !== 'Данила') {
    console.log('Вы не Данила, позовите Данилу')
} else if (age < 16) {
    console.log('Вам еще рано думать о взрослой жизни') 
} else if (!hasMuchMoney || !hasGoodJob || hasMotivation && hasFreeTime) {
    console.log('Даниле нужно учить фронтенд')
} else {
    console.log('Ты либо безумнр богат, либо у тебя отличная работа, либо тебе это не нужно.')
}

console.log(!hasMuchMoney)