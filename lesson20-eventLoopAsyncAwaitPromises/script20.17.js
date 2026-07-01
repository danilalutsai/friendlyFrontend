function downloadContents(urls) {
  const promises = urls.map(url => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('There is an error.');
          }
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  });
  return Promise.all(promises)
}

const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
]

downloadContents(urls)
  .then(content => console.log(content.data))
  .catch(error => console.log(error))
