const formElement = document.querySelector("form")
const genderRadios = formElement.gender
const loginInputElement = formElement.login
const aboutInputElement = formElement.about
const agreementCheckboxElement = formElement.agreement
const citySelectElement = formElement.city

loginInputElement.value = "TheBestFrontendDeveloper"
aboutInputElement.value = "Лучший из лучших"
citySelectElement.value = "Новосибирск"

console.log("Логин:", loginInputElement.value)
console.log("О себе:", aboutInputElement.value)
console.log("Информация о гендере:", genderRadios)
console.log("Выбранный пол:", genderRadios.value)
console.log("Согласен ли на все?", agreementCheckboxElement.checked)
console.log("Выбранный город:", citySelectElement.value)
console.log("Все опции:", citySelectElement.options)
console.log("Индекс выбранной опции:", citySelectElement.selectedIndex)
