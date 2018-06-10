import SampleInteractor from './sample.interactor'

describe('SampleInteractor tests', () => {
  let interactor = new SampleInteractor()

  it('It should not be null', () => {
    expect(interactor).not.toBeNull()
  })

  it('It should return all samples', () => {
    let actual = interactor.getAll()
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)
  })

  it('It should return all samples by name keyword', () => {
    let actual = interactor.getAllByName('ka')
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)

    actual = interactor.getAllByName('ro')
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)

    actual = interactor.getAllByName('a')
    expect(actual).not.toBeNull()
    expect(actual.length).toEqual(2)
  })
})
