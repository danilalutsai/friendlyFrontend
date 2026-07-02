const usersRequest = fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json());

const postsRequest = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(data => data.json());

// console.log(usersRequest);
// console.log(postsRequest);

// If we want them both to run at the same time we have to use function Promise.all()
// So we run both in paralel time
Promise.all([usersRequest, postsRequest])
  .then(([users, posts]) => {
    console.log('Users: ' + users);
    console.log('Posts: ' + posts);
  });
