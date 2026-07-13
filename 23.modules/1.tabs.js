// С помощью export мы указываем что этоим элементом мы можем пользоваться в
// другом файле
const greetings = () => {
  console.log("Say hi")
}

// При экспорте дефолтной функции можно совсем не указывать ее имя так как ей
// присвоется любое другое имя при импорте
export default function() {
  console.log("I am a default function")
}

// Если функция стрелочная то мы не сможем указать default - получим ошибку.
// Поэтому нужно указывать ее отдельно таким образом
const arrowFunction = () => {
  console.log("I am an arrow function")
}

// Может быть только одна default export 
// export default arrowFunction

export const tabsData = {}

// Также мы можем передавать в другой файл другое называние переменной
export { greetings as newGreetings }
