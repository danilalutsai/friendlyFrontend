function callbackbasedFc(a, b, cb) {
  setTimeout(() => {
    const result = a + b;
    if (result % 2 !== 0) {
      cb(result, null);
    } else {
      cb(null, new Error('The result is not odd.'));
    }
  }, 1000);
}

function promisifiedFc(a, b) {
  return new Promise((resolve, reject) => {
    callbackbasedFc(a, b, (result, error) => {
      if (result) {
        resolve('That is the result. ' + result);
      } else {
        reject('There is an error. ' + error);
      }
    });
  });
}

promisifiedFc(3, 3)
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(error)
  });
