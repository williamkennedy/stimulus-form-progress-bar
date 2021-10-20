import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['bar']
  static values = {
    width: Number,
    increment: Number,
    minWidth: Number
  }

  connect() {
    if (!this.hasIncrementValue) {
      this.incrementValue = this._setDefaultIncrement()
    }
    this.minWidthValue = this.widthValue || 0
  }

  updateProgressBar() {
    let canIncrement = false
    if (event.target.type === "radio") {
      const radioGroup = this.element.querySelectorAll(`[name="${event.target.name}"]`)
      canIncrement = !Array.from(radioGroup).some((input) =>  (Boolean(event.target.dataset.filled) && JSON.parse(event.target.dataset.filled)))
      radioGroup.forEach(e => e.dataset.filled = true)
      event.target.dataset.filled = false
    } else {
      canIncrement = (event.target.validity.valid && (!event.target.validity.valueMissing) || event.target.checked) 
    }

    if (canIncrement) {
      if (event.target.dataset.filled && JSON.parse(event.target.dataset.filled)) {
        return
      }
      this._incrementBar(this.incrementValue)
      event.target.dataset.filled = true
    } else {
      if (event.target.validity.valueMissing) {
        this._decrementBar(this.incrementValue)
        event.target.dataset.filled = false
      }
    }
  }

  widthValueChanged() {
    if (this.widthValue >= 100) {
      this.widthValue = 100
    } else if( this.widthValue <= this.minWidthValue) {
      this.widthValue = this.minWidthValue
    }
    this.barTarget.style.width = `${this.widthValue}%`
  }


  _incrementBar(num) {
    this.widthValue += num
  }

  _decrementBar(num) {
    this.widthValue -= num
  }

  _setDefaultIncrement() {
    // find total number of questions and divide by inputCount
    let inputCount = new Set(Array.from(this.element.querySelectorAll("[data-action*='progress-bar#updateProgressBar']")).map(e => e.name)).size
    const magicNumber = ((100 - this.minWidthValue) / inputCount)
    return magicNumber
  }
}
