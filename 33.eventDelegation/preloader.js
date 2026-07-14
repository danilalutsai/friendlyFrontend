const preloaderElement = document.querySelector(".preloader")

// Animationend отслеживает когда на элементе или на одном из внутренних дочерних элементов
// заканчивается выполнение css анимации указанный в свойстве animation
preloaderElement.addEventListener("animationend", (event) => {
  if (event.animationName === "fade-out") {
    preloaderElement.dispatchEvent(
      new CustomEvent('preloaderClose', { 
        bubbles: true,
        details: {
          closeAnimationName: event.animationName,
          closeAnimationDuration: event.elapsedTime,
        }
      })
    )
  }
  console.log(event)
})
