// callback hell

// const makeRequest = (url, onSuccess) => {
//   // ...
// }
//
// const sellerId = 54
//
// makeRequest(`/api/sellers/${sellerId}`, (seller) => {
//   const firstProductId = seller.productsId[0]
//
//   makeRequest(`/api/products/${firstProductId}`, (seller) => {
//     const firstReviewId = seller.reviewsIds[0]
//       
//     makeRequest(`/api/reviews/${firstReviewId}`, (review) => {
//       const authorName = review.author.name
//     })
//   })
// })

// // Переписываем callback functions hell с Promise
// const makeRequest = (url, onSuccess) => {
//   return new Promise((fulfill) => {
//     fulfill('Ура! Состояние fulfill.')
//   })
// }
//
// const sellerId = 54
//
// makeRequest(`/api/sellers/${sellerId}`)
//   .then((seller) => {
//     const firstProductId = seller.productsId[0]
//
//     return makeRequest(`/api/products/${firstProductId}`)
//   })
//   .then((product) => {
//     const firstReviewId = product.reviewsIds[0]
//
//     return makeRequest(`/api/reviews/${firstReviewId}`)
//   })
//   .then((review) => {
//     const authorName = review.author.name
//   })
//   .catch((error) => {
//     console.log(error)
//   })


// Переписываем тоже самое с await
const makeRequest = async (url, onSuccess) => {
  return new Promise((fulfill) => {
    fulfill('Ура! Состояние fulfill.')
  })
}

const sellerId = 54

try {
  const seller = await makeRequest(`/api/sellers/${sellerId}`)
    const firstProductId = seller.productsId[0]

  const product = await makeRequest(`/api/products/${firstProductId}`)
    const firstReviewId = product.reviewsIds[0]

  const review = await makeRequest(`/api/reviews/${firstReviewId}`)
    const authorName = review.author.name
} catch (error) {
  console.log(error)
}
