examplePromise
.then(result => {
  // Handles the resolved promise
})
.catch(error => {
  // Handles rejected promise
})
.finally(() => {
  // Run once finished
})

async function exampleAsync() {
  try {
    const result = await examplePromise;
  } catch (error) {
    // Handle error
  } finally {
    // Run once finished
  }
}
