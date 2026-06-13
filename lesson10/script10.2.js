const user = {}

user.name = 'Данила'
user['is developer'] = true

console.log(user)

// Меняем значение свойства
user.name = 'Максим'
user.age = 30

console.log(user)

delete user.name
delete user['is developer']

console.log(user)
