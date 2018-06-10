import app from '../../app'
import request from 'supertest'

describe('SampleApi tests', () => {
  it('It should response all samples', () => {
    return request(app).get('/api/samples').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body
      expect(body).not.toBeNull()
      expect(body.length).toBeGreaterThan(0)
      expect(body.length).toEqual(2)
    })
  })

  it('It should response all samples by name keyword', () => {
    return request(app).get('/api/samples/name/ka').then(response => {
      expect(response.statusCode).toBe(200)

      let body = response.body
      expect(body).not.toBeNull()
      expect(body.length).toBeGreaterThan(0)
      expect(body.length).toEqual(1)
    })
  })
})
