// We wrap the fetch function in a custom Promise
// But fetch function already returns a Promise
const fetchUsers = new Promise((resolve, reject) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject('Failed to fetch: ' + error));
});

// Fetch function returns a Promise by default built in function
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log('Posts: ' + data);
  })
  .catch(error => {
    console.log('Error fetching posts: ' + error);
  })


fetchUsers
  .then(users => {
  console.log('Fetched users: ' + users);
  })
  .catch(error => {
    console.log('Error: ' + error)
  })

