// Здесь мы подразумеваем actionBefore и actionAfter быть функциями поэтому
// Прописываем их в последовательности скобками

const logMessage = (actionBefore, actionAfter) => {
  actionBefore()
  console.log('Привет')
  actionAfter()
}


const fn1 = () => console.log('before')
const fn2 = () => console.log('after')


// Callback функции
logMessage(
  () => console.log('Before'),
  () => console.log('After')
)
