const user = {
  name: 'Александр',
  age: 28,
//  address: {
//    city: 'Москва',
//    zipcode: 123456,
//  },
}

// Чтобы обратиться к свойству city прописываем через . 
// Такая цепочка может быть бесконечно длинной
// console.log(user.address.city)

// Если свойства с таким именем не будет мы увидим undefined
// Так как мы обратились к несуществующему свойству
// console.log(user.address.city1) // undefined

// Если мы обратимся не к существуемому обьекту и его свойству то выдаст
// ошибку поэтому нужно проверять наличие свойства оператором ? например:
// Чтобы код выполнился дальше
// Такой оператор используется очень часто!!!
// Оператор называется optional chaning

console.log(user.address?.city)
console.log('Какой-то текст')

/** 
 * Пример ожидаемого результата: {
 *  name: 'Vasya',
 *  age: 15,
 *  hasPremium: true,
 * }
 *
 **/

// const userInfo = await fetchUserInfo()

// renderUserName(userInfo?.name)
// renderCatalog()
