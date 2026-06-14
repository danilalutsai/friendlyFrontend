let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep() {
    alert(this.step)
    return this
  },
}

ladder.up()
ladder.up()
ladder.down()
ladder.showStep()
ladder.down()
ladder.showStep()

ladder
  .up()
  .up()
  .down()
  .showStep()
  .down()
  .showStep() // Показывает 1 и 0
