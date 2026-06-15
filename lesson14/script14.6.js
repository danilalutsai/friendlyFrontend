const value = prompt('Введите ваше имя:')

// Проверяем чистоту введенного имени
const clearValue = value.trim().toLowerCase()

if (clearValue.length === 0) {
  alert('Ошибка! Имя не может быть пустым.')
}

if (clearValue.includes('admin')) {
  alert('Ошибка! Имя не может быть admin.')
}
