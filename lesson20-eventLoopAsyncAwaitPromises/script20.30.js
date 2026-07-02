// Real example of promise with the weather
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true"
let isLoading = true;

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error("Error getting the response from the server.", response.status);
  } else {
    // API usually communicate via text mode called JSON
    // To convert the JSON into an object in Javascript we use function .json()
    // Function json() itself returns a promise so we can use .then again afterwars
    return response.json();
  }
})
.then(data => {
  console.log("Temperature:", data.current_weather.temperature);
})
.catch(error => {
  console.log("We catched an error.", error.message);
})
// If we want to execute some code not depending on the status of the promise
// Even is fulfilled or rejected we use .finally method
.finally(() => {
  // Runs once the promise is settled
  isLoading = false;
})

myPromise
.then() // Handle success
.catch() // Hande error
.finally() // Run once finished
