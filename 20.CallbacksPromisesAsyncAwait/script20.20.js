function fetchDataWithRetry(url, maxRetries) {
  return new Promise((resolve, reject) => {
    let retries = 0
    const fetchData = () => {
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`HTTP Error. Status: ${response.status}`);
          }
        })
        .then(data => resolve(data))
        .catch(error => {
          retries++;
          if (retries <= maxRetries) {
            console.log(`Request failed. Retrying: (${retries}/${maxRetries})`);
            fetchData();
          } else {
            reject(new Error(`Failed after ${maxRetries} attempts. Error: ${error.message}`));
          }
        })
    }
    fetchData();
  });
}

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
console.log("URL -> ", apiUrl);
const maxRetries = 3;

fetchDataWithRetry('https://jsonplaceholder.typicode.com/posts3', 10)
  .then(data => {
    console.log(`Fetched data: ${data}`);
  })
  .catch(error => {
    console.log(`There is an error: ${error.message}`);
  });
