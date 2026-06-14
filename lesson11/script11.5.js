const guest1 = {
  name: 'Василий',
  age: 20,
  orderInfo: {
    roomType: 2,
    stayDates: {
      from: '14.04.2026',
      to: '21.05.2026',
    },
  },
}

const guest2 = {
  name: 'Екатерина',
  age: 30,
}

const logGuestInfo = (guest) => {
  console.log(`
    Имя: ${guest.name}
    Возраст: ${guest.age}
    Дата выезда: ${guest?.orderInfo?.stayDates?.to ?? 'Не указана'}
    `)
}
// ?? Далает что если левая сторона выражения возвращает undefined или
// null то выполняется правая сторона выражения

logGuestInfo(guest1)
logGuestInfo(guest2)
