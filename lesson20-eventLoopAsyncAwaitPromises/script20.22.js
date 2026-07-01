function repeatFunction(fn, interval) {
  // Executing the function inmediately
  fn();

  // Asigning interval to a variable
  const intervalId = setInterval(fn, interval);

  // Returning the function to stop the execution
  return function stopExecution() {
    clearInterval(intervalId);
    console.log('Execution has stopped.');
  };
}

const intervalMs = 1000; // 1 second

let number = 1;
const maxAttempts = 5;

// Define the function to be repeated
function printMessage() {
  if (number > maxAttempts) return;
  console.log(`Printing message ${number}/${maxAttempts}`)
  number++;
  
}

const stopExecution = repeatFunction(printMessage, intervalMs);

// Stop the execution after 5 seconds
setTimeout(() => {
  stopExecution();
}, 6000);
