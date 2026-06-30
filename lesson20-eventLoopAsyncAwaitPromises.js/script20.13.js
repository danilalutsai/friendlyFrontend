function callbackBasedFunction(argument1, argument2, callback) {
  // Perform asynchronous operation
  // Call the callback with the result or error
  setTimeout(() => {
    const result = argument1 + argument2;

    if (result % 2 === 0) {
      callback(null, result);
    } else {
      callback(new Error('Result is not odd!'), null)
    }
  }, 1000)
}

function promisifiedFunction(argument1, argument2) {
  return new Promise((resolve, reject) => {
    callbackBasedFunction(argument1, argument2, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    })
  })
}

// Usage example:
promisifiedFunction(3, 2)
  .then(result => {
    console.log('The result is: ' + result)
  })
  .catch(error => {
    console.log('The error is: ' + error)
  })
