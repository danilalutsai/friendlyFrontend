// Promise example

// The function inside the Promise is called the executor. 
// Two parametres inside executor (resolve, reject)
const testPromise = new Promise((resolve, reject) => {
  const result = 5 + 7;
  if (result === 10) {
    resolve("The promise is fulfilled.");
  } else {
    reject({ "message": "something went wrong"});
  }
});

// Now we want to react diferently depending on if the operation was successful or not
// For that we use .then and .catch
testPromise
// Inside then we got the value passed in the resolve method in Promise declaration
.then(message => console.log(message))
// Same in catch we pass the value written in reject method in Promise declaration
.catch(error => console.log(error));

// Fetch makes the request to an API
// The function returns a Promise
// Which is fulfilled with the response object
fetch("http://some-invalid-url")
.then(response => {
  console.log("Valid url.")
})
.catch(response => {
  console.log("Invalid url.")
});
