function fetchDataAPI(url) {
  return fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function fetchMultipleAPI(apiUrls) {
  const promises = apiUrls.map(url => fetchDataAPI(url));
  return Promise.all(promises);
}

const apiUrls = [
  'https://jsonplaceholder.typicode.com/posts/4',
  'https://jsonplaceholder.typicode.com/posts/5',
  'https://jsonplaceholder.typicode.com/posts/6'
];

fetchMultipleAPI(apiUrls)
  .then(content => {
    console.log(`Combined results: ${content}`)
  })
  .catch(error => {
    console.log(`There is an error: ${error}`)
  })
