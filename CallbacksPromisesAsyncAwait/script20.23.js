async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort()
  }, timeout);

  return fetch(url, {signal})
    .then(response => {
      clearTimeout(timeoutId);
      if (!response.ok) {
        throw new Error(`An error produced fetching data. Status: ${response.status}`)
      }
      return JSON.stringify(response.json());
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        throw new Error(`Request timed out.`);
      } else {
        throw error;
      }
    });
}

const url = 'https://jsonplaceholder.typicode.com/posts/1';
const timeout = 5000; // 5 seconds
const timeoutInSeconds = `${timeout / 1000}s`;

console.log(`Timeout in seconds: ${timeoutInSeconds}`)

fetchDataWithTimeout(url, timeout)
  .then(data => {
    console.log(`Recieved data is: ${data}`)
  })
  .catch(error => {
    console.log(`Produced an error: ${error.message}`)
  });
