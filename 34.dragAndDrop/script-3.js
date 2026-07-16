// События тачскринов: touchmove, touchstart, touchend
// События указателя: pointermove, pointerdown, pointerup, pointerover, pointerout, pointercenter,
// pointerleave, pointercancel, gotpointercapture, lostpointercapture
// События мыши: mousemove, mousedown, mouseup, mouseover, mouseout, mouseenter, mouseleave

// Плюс использования событий указателя, а не событий мыши мы получаем больше функции с event
const boxElement = document.querySelector(".button")

boxElement.addEventListener("pointerdown", (event) => {
  console.log(event)
})

class DragAndDrop {
  constructor() {
    this.state = { ...this.initialState }
    this.bindEvents()
  }

  resetState() {
    this.state = { ...this.initialState }
  }

  onPointerDown(event) {
    // Деструктурируем event чтобы не дублировать код и обращаемся к target, x, y напрямую
    const { target, x, y } = event

    // Вернет boolean в зависимости от того соответствует ли DOM элемент определенному селектору
    const isDraggable = target.matches(this.selectors.root)

    if (!isDraggable) {
      return
    }

    event.target.classList.add(this.stateClasses.isDragging)
    const { left, top } = target.getBoundingClientRect()

    this.state = {
      offsetX: x - left,
      offsetY: y - top,
      isDragging: true,
      currentDraggingElement: target,
    }
  }

  onPointerMove(event) {
    if (!this.state.isDragging) {
      return
    }

    const x = event.pageX - this.state.offsetX
    const y = event.pageY - this.state.offsetY

    this.state.currentDraggingElement.style.left = `${x}px`
    this.state.currentDraggingElement.style.top = `${y}px`
  }

  onPointerUp() {
    if (!this.state.isDragging) {
      return
    }

    this.state.currentDraggingElement.classList.remove(this.stateClasses.isDragging)
    this.resetState()
  }

  bindEvents() {
    document.addEventListener("pointerdown", (event) => {
      this.onPointerDown(event)
    })
    document.addEventListener("pointermove", (event) => {
      this.onPointerMove(event)
    })
    document.addEventListener("pointerup", () => {
      this.onPointerUp()
    })
  }

  selectors = {
    root: '[data-js-dnd]',
  }

  stateClasses = {
    // Именя свойств в обьекте stateClasses лучше писать в camelCase, а значение в kebab-case
    isDragging: "is-dragging"
  }

  initialState = {
    offsetX: null,
    offsetY: null,
    isDragging: false,
    currentDraggingElement: null,
  }
}

new DragAndDrop()
