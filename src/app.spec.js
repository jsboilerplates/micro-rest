import app from './app'
import request from 'supertest'

describe('App tests', () => {
  it('App should be not null', () => {
    expect(app).not.toBeNull()
  })

  describe('ErrHandler tests', () => {
    it('It should response the 404 statu', () => {
      return request(app).get('/something').then((response) => {
        expect(response.statusCode).toBe(404)
      })
    })
  })

  describe('ErrHandler tests', () => {
    app.get('/error', function (req, res) {
      throw new Error('BROKEN')
    })
    it('It should response 500 status', () => {
      return request(app).get('/error').then((response) => {
        expect(response.statusCode).toBe(500)
      })
    })
  })
})
