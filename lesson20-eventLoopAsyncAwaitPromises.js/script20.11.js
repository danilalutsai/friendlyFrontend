function eatThePizza() {
  console.log('Eating pizza...')
}

function heatThePizza() {
  console.log('Heating pizza...')
}

function orderPizza(doSomethingFirst, doSomethingSecond) {
  console.log('Ordering pizza...')
  doSomethingFirst()
  doSomethingSecond()
}

orderPizza(heatThePizza, eatThePizza)
