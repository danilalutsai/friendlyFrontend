// Используется для подтверждения какого либо действия
// Значение всегда булевого типа True or False 

const isUserReady = confirm('Ты готов?')

if (isUserReady) {
    console.log('Начинаем')
} else {
    console.log('Ладно, подождем...')
}