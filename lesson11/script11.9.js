// При работе с синтаксисом деструктуризации можем переиминовать сущность
// которую мы вытягиваем из обьекта если ее имя совпадает

const user = {
  name: 'Александр'
}

const admin = {
  name: 'Boss'
}

// Такой код выдаст ошибку так как два раза используем имя name
// const {name} = user
// const {name} = admin
// однако мы можем это исправить таким вот образом

const {name: userName} = user
const {name: adminName} = admin

// проверяем

console.log('userName:', userName)
console.log('adminName:', adminName)
