import util from './util'

describe('Util tests', () => {
  it('It should return full path', () => {
    let actual = util.getFullPath()
    expect(actual).not.toBeNull()
    expect(actual.length).toBeGreaterThan(0)

    actual = util.getFullPath('app.js')
    expect(actual).toContain('app.js')
  })
})
