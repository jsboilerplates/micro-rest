import sampleService from './sample.service'

describe('SampleService tests', () => {
  it('It should return all samples', () => {
    let actual = sampleService.all()
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)
  })

  it('It should return all samples by name keyword', () => {
    let actual = sampleService.allByName('ka')
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)

    actual = sampleService.allByName('ro')
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)

    actual = sampleService.allByName('a')
    expect(actual).not.toBeNull()
    expect(actual.length).toEqual(2)
  })
})
