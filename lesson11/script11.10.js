const user1 = {
  name: 'Александр',
  age: 28,
  city: 'Москва',
}

const user2 = {
  name: 'Дмитрий',
  age: 30,
}

// Присваеваем обьекту city значение по умолчанию
const {city = 'не указан'} = user2 
console.log('Город:', city) // не указан

// Пример комбинируемого изученого ранее
const user = {
//  city: 'Москва',
}

const {city: userCity = 'не указано'} = user
console.log('userCity:', userCity)
