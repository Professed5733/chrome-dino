import config from '../config.js'

export default class Cloud {
  constructor (x, y, speedMod) {
    this.speedMod = speedMod
    this.x = x
    this.y = y
  }

  nextFrame () {
    this.x -= config.settings.cloudSpeed * this.speedMod
  }
}