const user = {
  name: 'Данила',
  age: 28,
  isDeveloper: true,
}

// Перебираем key как имя свойства перебираемый лупов for в user
for (const key in user) {
  console.log(key)
}

// Так же можем итерировать значения свойств
for (const key in user) {
  console.log(user[key])
}
