import SampleInteractor from '../../core/interactor/sample.interactor'

class SampleService {
  constructor () {
    this.interactor = new SampleInteractor()
  }
  all () {
    return this.interactor.getAll()
  }
  allByName (keyword) {
    return this.interactor.getAllByName(keyword)
  }
}

export default new SampleService()
