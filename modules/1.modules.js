// Когда мы делим код на несколько файлов каждый из таких файлов называется
// Модулем
import { newGreetings, tabsData } from "./1.tabs"

// При импорте дефолтной функции можем указать любое имя так как импортируемая
// функция по дефолту всего одна и не может быть больше 
import arrowFunction from "./1.tabs"

// Мы можем импортировать сразу все экспортируемые сущности 
import * as constants from "./1.constants.js"
console.log(constants.a) // 1
console.log(constants.b) // 2

