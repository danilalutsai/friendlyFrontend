// There are also two pieces involved in Promises:
// 1. Promise maker - function that creates a promise and returns it
// 2. Promise receiver - part of the code that calls the maker and recieves the code from it
// and does something with it

// Promise maker
function getWeather() {
  // Promise takes as a parameter a function where you add async logic
  // Function inside the promise takes two parameters resolve, reject
  return new Promise(function(resolve, reject) {
    // Async logic here
    setTimeout(() => {
      if (5 + 5 === 11) {
      resolve("Sunny");
      }
      reject("Error");
    }, 2000);
  });
}

// Promise receiver
getWeather()
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
})
