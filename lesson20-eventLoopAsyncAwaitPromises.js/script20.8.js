// Async await is a simple way to manage tasks that takes time to finish
async function getUserInfo() {
  try {
    // fetch function needs time to process the data from the server so we use await key word
    // Await waits for the data but only where you tell it where to wait
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    // This tells to Javascript wait this to finish until moving on

    // That also takes time to perform so we also use await
    const users = await response.json();
    console.log("User's name: " + users.name);
  } catch (error) {
    console.log('There is an error: ' + error)
  }
}
getUserInfo();
