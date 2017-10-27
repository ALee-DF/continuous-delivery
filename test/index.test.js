const { expect } = require('chai')
const { describe, it, after, before } = require('mocha')
const request = require('request')
const createApp = require('../create-app')

describe('Express Server', () => {
  const app = createApp()
  let server
  before(done => {
    server = app.listen(3000, () => {
      done()
    })
  })

  after(done => {
    server.close(() => {
      done()
    })
  })
  describe('GET Request', () => {
    it('should get the information of name and description of repo', () => {
      request('http://localhost:3000/', (err, response, body) => {
        expect(err).to.equal(null)
        const result = JSON.parse(body)
        expect(result).to.be.an('object')
        expect(result.name).to.equal('continuous-delivery')
        expect(result.description).to.equal('A practice repository for testing and deployment.')
      })
    })
  })
})
