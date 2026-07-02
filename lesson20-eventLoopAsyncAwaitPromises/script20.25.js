// The fc1 and fc2 are the same. Async function always returns a Promise
async function fc1() {
  return 1;
}

async function fc2() {
  return Promise.resolve(2)
}

fc1().then(console.log(1))
fc2().then(console.log(2))

// Here we create async function. Create a promise that awaits until the timer 
// is completed so it can proceed to store its result in the result variable
// Then we return result
async function fc3() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("The promise has resolved.")
    }, 1000);
  });
  let result = await promise;
  return result;
}

// Here we call async function and wait for the promise to resolve or reject
// In our case its resolved and we know it so we return resolved promise with then
fc3().then(res => {
  console.log('The result of the promise:', res);
});

// async function showAvatar() {
//   // Reading our github user
//   let githubResponse = await fetch(`https://api.github.com/users/"danilalutsai"`);
//   let githubUser = await githubResponse.json();
//
//   // Show the Avatar
//   let img = document.createElement('img');
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);
//
//   // Wait for 3 seconds
//   await new Promise((resolve) => {
//     setTimeout(resolve, 3000)
//   });
//   img.remove();
//   return githubUser;
// }
//
// showAvatar();

async function showAvatar(username) {
  let img;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error('HTTP Error getting data. Status:', response.status);
    } 

    const githubUser = await response.json();

    img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.alt = `${githubUser.login}'v avatar`;
    img.className = "promise-avatar-example";

    // Wait until image loads or fails
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject(new Error("Failed to load image."));

      document.body.append(img);
    });

    // Keep the image on the screen for 3 seconds
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });

    return githubUser;

  } catch (error) {

    console.log(`Something went wrong. Error: ${error.message}`);
    return null;

  } finally {
    
    // Always remove image if it was added
    if (img) {
      img.remove();
    }
  }
}

showAvatar("danilalutsai").then((user) => {
  if (user) {
    console.log(`Loaded user: ${user.login}`);
  }
  console.log(`Could not load user.`);
});
