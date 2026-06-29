// Javascript is singlethreaded - it means it can only handle one task at a time
Promise.resolve()
  .then(() => {
    console.log(1);
  })

setTimeout(() => {
  console.log(2);
})

queueMicrotask(() => {
  console.log(3);
  queueMicrotask(() => {
    console.log(4)
  })
})

console.log(5)

// The output is 5, 1, 3, 4, 2
