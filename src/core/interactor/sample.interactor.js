import Sample from '../entity/sample.entity'

export default class SampleInteractor {
  constructor (samples = [new Sample('Kaka'), new Sample('Ronaldo')]) {
    this.samples = samples
  }

  // get all samples
  getAll () {
    return this.samples
  }

  // get all samples by name keyword
  getAllByName (keyword = '') {
    keyword = keyword.toLowerCase()
    let list = []
    this.samples.forEach(item => {
      if (item.name.toLowerCase().includes(keyword)) {
        list.push(item)
      }
    })
    return list
  }
}
