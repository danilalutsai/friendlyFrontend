const user = {
  name: 'Александр',
  age: 28, 
  isDeveloper: true,
}

// const name = user.name
// const age = user.age
// const isDeveloper = user.isDeveloper

// ===

const {
  name, 
  age, 
  isDeveloper,
  address,
} = user

console.log('name:', name)
console.log('age:', age)
console.log('isDeveloper:', isDeveloper)
console.log('address:', address ?? 'не указан')

