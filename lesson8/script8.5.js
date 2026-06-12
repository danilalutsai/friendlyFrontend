const globalMessage = 'Привет'

function logMessage(message = 'Мяу', count = 4) {
    const messageFormatted = `(((${message})))`
    
    for (i = 0; i < count; i++) {
        console.log(messageFormatted)
    }
}

logMessage(globalMessage)