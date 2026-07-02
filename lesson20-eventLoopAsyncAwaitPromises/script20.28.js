const apiUrl = "http://not-real-url";
// Example of asynchronous code
function asynchronous() {
  fetch(apiUrl)
  .then(response => {
    console.log("B");
  })
}

console.log("A");
asynchronous();
console.log("C");
