function asyncOperation1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Asynchronous operation 1.');
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Asynchronous operation 2.');
      resolve();
    }, 1000);
  });
}

function asyncOperation3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Asynchronous operation 3.');
      resolve();
    }, 1000);
  });
}

async function performOperations() {
  try {
    await asyncOperation1();
    await asyncOperation2();
    await asyncOperation3();
  } catch (error) {
    console.log('Error:', error.message)
  }
}

performOperations()
