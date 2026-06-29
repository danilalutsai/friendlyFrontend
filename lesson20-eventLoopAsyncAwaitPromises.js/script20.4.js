const promise = new Promise((resolve, reject) => {
  const dataFound = true;

  if (dataFound) {
    resolve('Data loaded.');
  } else {
    reject('Data not found');
  }

})

promise
  .then(result => console.log('Success:', result))
  .catch(error => console.log('Error:', error));

