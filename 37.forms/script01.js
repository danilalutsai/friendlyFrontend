console.log(
  "Все элементы <form> на странице:",
  document.forms
)

console.log(
  "Форма регистрации:",
  document.forms.regForm
)

console.log(
  "Форма авторизации:",
  document.forms.authForm
)

const formElement = document.querySelector("#regForm")
const loginInputElement = formElement.login
const passwordInputElement = formElement.password

console.log(
  "Элементы input, textarea и select внутри формы:",
  formElement.elements
)

console.log("Поле ввода логина:", formElement.elements.login)

// Мы можем не использовать .elements. а напрямую обратиться к свойствам password или gender
console.log("Поле ввода пароля:", formElement.password)
console.log("Радиокнопка выбора пола:", formElement.gender)

console.log("К какой форме относится поле ввода логина?", loginInputElement.form)
console.log("К какой форме относится поле ввода пароля?", passwordInputElement.form)

console.log("К какой форме относится селект выбора города?", document.querySelector("#city").form)
console.log("Поле формы:", formElement.elements)
