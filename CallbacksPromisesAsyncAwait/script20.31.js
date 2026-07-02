let isLoading = true;
const apiUrl = "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true";

async function getTemperature() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      console.error("Error fetching the data. Status:", response.status);
    }
    const data = await response.json();
    console.log(`Current temperature is ${data.current_weather.temperature} degrees.`)
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
}

// Async function always return a promise Promise { <resolved> }
// If the promise returns an error it becomes a rejected promise
getTemperature();

