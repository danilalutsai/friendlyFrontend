// Чистый пример предыдущего кода

const logAddress = ({
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

logAddress({
  city: 'Москва',
  street: 'Пушкина',
  houseNumber: 21,
  apartmentNumber: 33,
})

