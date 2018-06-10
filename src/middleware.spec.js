import middleware from './middleware'
import request from 'supertest'
import app from './app'

describe('Middleware tests', () => {
  it('It should return compress middleware', () => {
    let actual = middleware.compress
    expect(actual).toBeInstanceOf(Function)
  })

  it('It should return helmet middleware', () => {
    let actual = middleware.helmet
    expect(actual).toBeInstanceOf(Function)
  })

  it('It should return cors middleware', () => {
    let actual = middleware.cors
    expect(actual).toBeInstanceOf(Function)
  })

  it('It should return favicon middleware', () => {
    let actual = middleware.favicon
    expect(actual).toBeInstanceOf(Function)
  })

  it('It should return json middleware', () => {
    let actual = middleware.json
    expect(actual).toBeInstanceOf(Function)
  })

  it('It should return urlencoded middleware', () => {
    let actual = middleware.urlencoded
    expect(actual).toBeInstanceOf(Function)
  })

  describe('Static middleware tests', () => {
    it('It should return static middleware', () => {
      let actual = middleware.static
      expect(actual).toBeInstanceOf(Function)
    })

    it('It should response the GET method', () => {
      return request(app).get('/').then((response) => {
        expect(response.statusCode).toBe(200)
      })
    })
  })
})
