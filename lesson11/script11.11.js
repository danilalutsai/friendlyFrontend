// Остаточные или rest параметры

const logUser = (user) => {
  const {name, age, city, ...otherInfo} = user

  console.log(`
    Имя: ${name},
    Возраст: ${age},
    Город: ${city}
    `)
  console.log('Дополнительная информация:', otherInfo)
}

logUser({
  name: 'Александр',
  age: 28,
  city: 'Москва',
  company: 'VK',
  jobPost: 'Фронтенд-разработчик',
  yearsOfExperience: 30,
  hasCat: true,
})
