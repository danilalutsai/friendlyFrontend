// Обьект это самый непростой и самый важный тип данных в Javascript
// Он предназначен для хранения непримитивных сущностей
// Базовый синтаксис обьекта это открывающие и закрывающие синтаксисные скобки

const firstEmptyObject = {}
// Формально разницы никакой не будет

const newEmptyObject = new Object()

// Набор свойств. Набор пар - ключ:значение
// Которые записываются в парных фигурных скобках
const user = {
  login: 'iamsuperhero',
  password: 'qwerty',
  'registration date': '01.01.2026',
  'last-auth': '05.04.2026',
  sayHi: () => console.log('Привет'), // Такая функция внутри обьекта называется методом
  'say hi': () => console.log('Привет 2')
}

console.log(user.login)
console.log(user['registration date'])

// Если бы функция содержала пробел или дефиз мы бы вызывали ее таким методом
user.sayHi()
user['say hi']()

// Если обратиться к несуществуемому обьекта свойству получим undefined
console.log(user.blablabla)
