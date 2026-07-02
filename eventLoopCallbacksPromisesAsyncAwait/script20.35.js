function weatherRecieved(data) {
  let weather = data;
  console.log(weather);
}

function displayIcon(data) {
  if (data === "Sunny") console.log('☀️');
  if (data === "Cloudy") console.log('☁️');
}

function fetchWeather(callback) {
  setTimeout(() => {
    callback("Sunny");
  }, 2000);
}

fetchWeather(weatherRecieved);
fetchWeather(displayIcon);

