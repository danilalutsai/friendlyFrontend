new Promise((resolve, reject) => {
  // Some async stuff here
  // The current promise state is pending
  // The current promise result is undefined
  //
  // We can now call the resolve built in function
  // The promise state changes to fulfilled
  // The promise result is Done!
  resolve('Done!');

  // We can now call the reject built in function
  // The promise state changes to reject
  // The promise result is Fail!
  reject('Fail!');
})
// We can create a Promise reaction method by chaining then or catch method to the Promise
// Promise resolve value is passed to result in .then method
.then((result) => {console.log(result)});

new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Done!') }, 2000);
})
// Then itself is also returning a Promise object
  .then((result) => { console.log(result) });

new Promise((resolve) => {
  resolve(1)
})
.then(result => result * 2)
.then(result => result * 3)
.then(result => console.log(result)) // The output is 6 because 1 * 2 * 3 = 6

new Promise(resolve => {
  console.log(1);
  resolve(2);
}).then(result => console.log(result));

console.log(3); // The output is 1, 3, 2
