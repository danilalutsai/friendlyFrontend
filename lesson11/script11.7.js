const logAddress = (city, street, houseNumber, apartmentNumber) => {
  console.log(`
    Адрес:
    г. ${city}, ул. ${street},
    д. ${houseNumber}, кв. ${apartmentNumber}
    `)
}

logAddress('Москва', 'Пушкина', 21, 33)

// Если функции требуется более чем 2, 3 параметра ее упрощают до такого 
// вида

// Так же практикуем функцию если значение слева null или undefined
// То используем выражение справа функцией ??
const logAddress1 = (address) => {
  console.log(`
    Адрес:
    г. ${address?.city ?? 'Не известно'}, ул. ${address.street},
    д. ${address.houseNumber}, кв. ${address.apartmentNumber}
    `)
}
// Чтобы не писать каждый раз address.city address.street и т.д.
// Вытаскиваем единые инструкции с помощью одноименный переменной
const logAddress2 = (address) => {
  const {city, street, houseNumber, apartmentNumber} = address

  console.log(`
    Адрес:
    г. ${city}, ул. ${street},
    д. ${houseNumber}, кв. ${apartmentNumber}
    `)
}

// Или деструктуризацию свойств обьекта можем напрямую записать премиком
// в круглых скобках функции при описании параметров вот таким вот образом

const logAddress3 = ({
  city,
  street,
  houseNumber,
  apartmentNumber,
}) => {
  console.log(`
    Адрес:
    г. ${city}, ул. ${street},
    д. ${houseNumber}, кв. ${apartmentNumber}
  `)
}



logAddress3({
  street: 'Маяковского',
  houseNumber: 23,
  apartmentNumber: 30,
})
