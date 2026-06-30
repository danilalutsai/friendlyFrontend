function delayedAction(callback) {
  setTimeout(callback, 2000)
}



function sayingHi() {
  console.log('Hi!')
}

delayedAction(sayingHi)
