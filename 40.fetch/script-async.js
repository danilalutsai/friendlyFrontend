const loadPostFormElement = document.querySelector('.load-post-form')
const postIdInputElement = document.querySelector('#post-id')
const resultElement = document.querySelector('.result')

loadPostFormElement.addEventListener('submit', async (event) => {
  // Отменяем действия браузера по умолчанию 
  event.preventDefault()

  try {
    const response = await fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
    console.log('Response:', response)

    if (!response.ok) {
      const errorMessage = response.status === 404
      ? "Пост по указанному идентификатору не найден"
      : "Что-то пошло не так"

      // Досрочно прерываем промис чтобы не выполнилась следующая часть кода
      throw new Error(errorMessage)
}
    const data = await response.json()

    console.log(data)

    // Деструктурируем обьект json
    const { title, views } = data

    resultElement.innerHTML = `
      <p>${title}, просмотров: ${views}</p>
    `
  } catch (error) {
    resultElement.innerHTML = error.message
  }
})

const createPostFormElement = document.querySelector('.create-post-form')

createPostFormElement.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(createPostFormElement)
  const formDataObject = Object.fromEntries(formData)
  
  // Данные на сервер мы будем отправлять с помощью json Object
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      ...formDataObject,
      views: 0,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'X-Auth-Token': 'some-token',
      },
      credentials: 'include',
    })
  })
    console.log('Response:', response)
    const data = await response.json()

    console.log('JSON:', data)
})

const searchPostsFormElement = document.querySelector('.search-posts-form')
const postsViewsInputElement = document.querySelector('#post-views')

searchPostsFormElement.addEventListener('submit', async (event) => {
  event.preventDefault()

  const response = await fetch(`http://localhost:3000/posts?views_gte=${postsViewsInputElement.value}`)
  const data = await response.json()
    console.log(data)

  resultElement.innerHTML = data
    .map(({ title, views }) => `<p>${title}, просмотров: ${views}</p>`)
    .join('')
})
