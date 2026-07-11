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
      if(5 + 5 === 10) {
      resolve("Cloudy");
      }
      reject("Error.");
    }, 100);
  });
}

function getWeatherIcon(weather) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      switch(weather) {
        case "Sunny": 
          resolve("☀️");
          break
        case "Cloudy": 
          resolve("☁️");
          break
        case "Rainy": 
          resolve("🌧️");
          break
        default:
          reject("No icon found.");
      }
    }, 100);
  });
}

function onSuccess(data) {
  console.log(`Success! Data recieved: ${data}`);
}

function onError(error) {
  console.error(`Error recieved: ${error}`);
}

// Promise receiver
// Pending state
let promise = getWeather()
// Resolved or fulfilled state
// Whatever is recieved in resolve case is passed as a 
// parameter to function declared as a parameter to then
  .then(getWeatherIcon)
  .then(onSuccess)
// Rejected state
  .catch(onError);
