const obj1 = {
  name: 'Данила',
  age: 28,
}

const obj2 = {
  name: 'Данила',
  age: 28,
}

const areObjectsEqual = (object1, object2) => {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)

  console.log('keys1:', keys1)
  console.log('keys2:', keys2)

// Чтобы сравнить длинну прописываем length
  console.log('Длина keys1:', keys1.length)
  console.log('Длина keys2:', keys2.length)

// Проверка если длина свойств у двух обьектов одинаковая

  if (keys1.length !== keys2.length) {
    return false
  }

// Проверяем одинаковые ли свойства у двух обьекто с помощью функции for
  for (key in object1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }

  return true
}

console.log(
  'Равны ли обьекты obj1 и obj2? ',
  areObjectsEqual(obj1, obj2)
)
