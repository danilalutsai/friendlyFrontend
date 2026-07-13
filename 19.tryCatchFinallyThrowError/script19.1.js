console.log('Начало кода...');

const userData = undefined;
  
// names.forEach((name) => {
//   console.log('Имя: ' + name);
// })

try {
  // Пробуем выполнить код
  const names = ['Александр', 'Михаил', 'Василий']

  names.forEach((name) => 
    console.log('Имя: ' + name)
  )
} catch (error) {
  // Обрабатываем возникшую ошибку
  console.log('Возникла ошибка: ' + error)
}

console.log('Конец кода...');
