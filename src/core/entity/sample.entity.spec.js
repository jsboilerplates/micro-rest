import Sample from './sample.entity'

describe('Sample Entity tests', () => {
  it('It should return new sample object', () => {
    let actual = new Sample()
    expect(actual).not.toBeNull()
    expect(actual.name).toBeUndefined()

    actual = new Sample('kaka')
    expect(actual.name).toEqual('kaka')
  })
})
