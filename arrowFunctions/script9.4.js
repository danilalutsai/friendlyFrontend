const validate = (hasAccess) => {
  if (hasAccess) {
    return () => console.log('Доступ разрешен :)')
  } else {
    return () => console.log('Доступ запрещен :(')
  }
}

const logMessage = validate(false)
logMessage()


// Этот код упращенный будет выглядить вот так вот 

const validate1 = (hasAccess1) => hasAccess1 
  ? () => console.log('Доступ разрешен')
  : () => console.log('Доступ запрещен')

const logMessage1 = validate(true)
logMessage1()

