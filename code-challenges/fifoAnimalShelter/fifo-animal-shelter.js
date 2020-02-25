class AnimalShelter {
  constructor () {
    this.shelter = []
  }

  enqueue (animal) {
    return animal.type.toLowerCase() === 'dog' || animal.type.toLowerCase() === 'cat' ? this.shelter.push(animal) : console.log(`We don't serve their kind here.`)
  }

  dequeue (pref = 'noPref') {
    if (pref.toLowerCase() === 'dog' || pref.toLowerCase() === 'cat') {
      let counter = 0
      while (counter < this.shelter.length) {
        if (this.shelter[counter].type.toLowerCase() === pref) {
          this.shelter.splice(counter, 1)
          counter = this.shelter.length
        } else {
          counter++
        }
      }
    } else if (pref === 'noPref') {
      pref = this.shelter[0].type
      this.shelter.splice(0, 1)
    } else {
      pref = null
    }
    return pref
  }
}

module.exports = AnimalShelter
