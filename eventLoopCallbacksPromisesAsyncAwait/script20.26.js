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
