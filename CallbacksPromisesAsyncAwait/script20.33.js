// function orderPizza() {
//   return "🍕";
// }
//
// const pizza = orderPizza();
// console.log(pizza);
//
let pizza;

function orderPizza() {
  console.log("Ordering pizza.");
  setTimeout(() => {
    pizza = "🍕" ;
    console.log(`${pizza} is ready.`);
  }, 2000);
  console.log("Pizza was ordered.");
}

orderPizza();
console.log("Call Qoli.")
console.log(`Eating ${pizza}.`);

setTimeout(() => {
  console.log(`Eating ${pizza}, attempt 2.`)
}, 3000);

