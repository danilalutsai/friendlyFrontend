function weatherRecieved(data) {
  let weather = data;
  console.log(weather);
}

function displayIcon(data) {
  if (data === "Sunny") console.log('☀️');
  if (data === "Cloudy") console.log('☁️');
}

function fetchWeather(callback) {
  function timeoutCallback() {
    callback("Sunny");
  }
  setTimeout(timeoutCallback, timeout);
}

fetchWeather(weatherRecieved);
fetchWeather(displayIcon);


const timeout = 2000;
