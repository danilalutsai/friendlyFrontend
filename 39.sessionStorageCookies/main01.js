// Cookie это небольшие фрагменты данных склеиные в единную строку
// Используя document.cookie setter мы не перезаписываем полностью куки а лишь добавляем их
document.cookie = 'age=28'

// Перезаписываем значение age в куки
document.cookie = 'age=55'

// document.cookie = 'date of birth=february 4, 1996'
// Для присваимого в куки выражения используем encodeURIComponent
document.cookie = `${encodeURIComponent('date of birth')}=${encodeURIComponent('february 4, 1996')}`

const setCookie = (name, value, options = {}) => {
  let newEntryBody = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`

  const optionsAsString = Object.entries(options)
    .map((entry) => entry.join('='))
    .join('; ')

  if (optionsAsString) {
    newEntryBody += `; ${optionsAsString}`
  }

  document.cookie = newEntryBody
}

setCookie('date of birth', 'february 4, 1996')

const deleteCookie = (name) => {
  // Благодаря отрицательной записи срока жизни куки мы фактически удаляем куки
  setCookie(name, '', { 'max-age': -1 })
}

console.log('Cookie:', document.cookie)

const getCookie = (name) => {
  for (const entryStr of document.cookie.split('; ')) {
    const [entryName, entryValue] = entryStr.split('=')

    if (decodeURIComponent(entryName) === name) {
      return entryValue
    }
  }
}

document.cookie = 'username=Aleksandr'
deleteCookie('username')

console.log('username:', getCookie('username'))
console.log('date of birth:', getCookie('date of birth'))

