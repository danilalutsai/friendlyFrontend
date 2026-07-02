async function fetchDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const response = await fetch(url, signal);
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Produced an error. Status: ${response.status}`)
    } 
    const data = await response.json();
    return data["title"]
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new Error('Request timed out.')
    }
    throw error;
  }
}

const timeout = 50;
const timeoutInSeconds = timeout / 1000;
const url = 'https://jsonplaceholder.typicode.com/posts/1';

console.log(`Timeout in seconds: ${timeoutInSeconds} seconds`)

fetchDataWithTimeout(url, timeout)
  .then(data => {
    console.log(`The data recieved: ${data}`)
  })
  .catch(error => {
    console.log(`The error is: ${error.message}`)
  });
