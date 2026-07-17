// Cookie: 
// Данные сохраняются после перезагрузки страницы. 
// Данные привязаны к конкретному домену.
// Могут управляться сервером.
// Количество записей ограничено: 20 записей.
// Каждая запись хранит не больше 4кбайт данных.
// Для чтения, добавления, изменения и удаления записей нужны кастомные утилитарные функции.

// Session storage and Local storage: 
// Данные сохраняются после перезагрузки страницы. 
// Данные привязаны к конкретному домену.
// Не могут управляться сервером.
// Количество и обьем записей ограничено 5мбайт данных.
// Для чтения, добавления, изменения и удаления записей есть встроенные методы

// Session storage: существует в рамках текущий активной вкладки
// Local storage: данные не имеют срока давности

// Методы манипуляции даннами
console.log(sessionStorage)
console.log(localStorage)

// Для установки значения в хранилище. Принимает 2 аргумента: имя записи и значение (только в виде строки)
sessionStorage.setItem('username', 'Aleksandr')
sessionStorage.setItem('age', 28)
sessionStorage.setItem(
  'user',
  JSON.stringify({
    name: 'Max',
    age: 28,
    isDeveloper: true,
  })
)

// Полностью удаляет данные по указанному в аргументах ключу
sessionStorage.removeItem('username')

// Чтобы получить значение какой-нибудь записи в sessionStorage используем getItem
console.log('username:', sessionStorage.getItem('username'))
console.log('age:', sessionStorage.getItem('age'))

// Чтобы распарсить и превратить в обычний Javascript object
console.log(
  'user:',
  JSON.parse(
    sessionStorage.getItem('user')
  )
)

// clear полностью очищает хранилище
sessionStorage.clear()
console.log('Session storage после очищения:', sessionStorage)
