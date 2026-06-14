const user1 = {name: 'Вася'}
const user2 = {name: 'Миша'}

function logInfo() {
  console.log('this:', this)
  console.log('this.name:', this.name)
}

logInfo()

user1.logName = logInfo
user2.logName = logInfo

user1.logName()
user2.logName()
