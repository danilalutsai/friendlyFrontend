async function fetchDataWithRetry(url, maxRetries) {
  let retries = 0;

  while (retries <= maxRetries) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error. Status: ${response.status}`);
      } else {
        const data = await response.json();
        return data
      }
    } catch (error) {
      retries++;
      if (retries <= maxRetries) {
        console.log(`Request failed. Retrying: (${retries}/${maxRetries})`);
      } else {
        throw new Error(`Failed after ${maxRetries} attempts. Error: ${error.message}`);
      }
    }
  }
}

const url = 'url';
console.log(`URL -> ${url}`);

fetchDataWithRetry('https://jsonplaceholder.typicode.com/posts2', 10)
  .then(data => {
    console.log(`The recieved data is: ${data}`)
  })
  .catch(error => {
    console.log(`We recieved an error. ${error.message}`)
  });
