// В javascript есть множество способов получить размеры DOM элементов
const boxElement = document.querySelector(".box")

console.log('Полная ширина:', boxElement.offsetWidth)
console.log('Полная высота:', boxElement.offsetHeight)

// Растояние с наружной точки и внутреннего начала элемента
console.log('Ширина левой рамки:', boxElement.clientLeft)
console.log('Ширина верхней рамки:', boxElement.clientTop)

console.log('Ширина без учета рамки и скроллбара:', boxElement.clientWidth)
console.log('Высота без учета рамки и скроллбара:', boxElement.clientHeight)

// Прокрутка содержимого элемента на 10px вправо и на 50px вниз относительно
// начального положения
boxElement.scroll(10, 50)

console.log(
'Вычесленная из свойства height высота элемента:', getComputedStyle(boxElement).height
)
