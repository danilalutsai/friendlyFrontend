class Thenable {
  constructor(num) {
    this.num = num;
  }

  then(resolve) {
    alert(typeof resolve);
    setTimeout(() => resolve(this.num * 2), 1000);
  }
}

async function fn() {
  let response = await new Thenable(1);
  alert(response);
}

fn();

async function fn2() {
  throw new Error("Some error 1.")
}
fn2().catch(error => {
  console.log(error.message);
});

// This is the same as below
async function fn3() {
  await Promise.reject(new Error("Some error 2."));
}
fn3().catch(error => {
  console.log(error.message);
});

async function fn4() {
  try {
    let response = await fetch("http://no-such-url");
    let user = response.json();
    if (!response.ok) {
      throw new Error('Error fetching data. Status:', response.status);
    }
    return user;
  } catch (error) {
    alert(error);
  }
}
fn4();
