function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        } else {
          return {
            "status": `${response.status}-${response.statusText}`,
            "headers": response.headers,
            "body": await response.text(),
            // "json": response.json()
          }
        }
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

makeGetRequest('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => {
    console.log('Response data:', data)
  })
  .catch(error => {
    console.log('There is an error:', error)
  });

