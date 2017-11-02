const { expect } = require('chai')
const { describe, it, after, before, beforeEach } = require('mocha')
const request = require('request')
const { MongoClient } = require('mongodb')
const createApp = require('../server/create-app')
require('dotenv').config()

describe('continuous delivery', () => {
  let db
  let collection
  let server

  before('connect to mongodb and express server', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) return done(err)
      db = _db
      collection = db.collection('todos')
      const app = createApp(db)
      server = app.listen(process.env.PORT, () => {
        done()
      })
    })
  })

  after('disconnect from mongodb and express server', done => {
    db.close()
    server.close(() => {
      done()
    })
  })

  describe('GET Request', () => {
    it('should get the information of name, description, and link of repo', done => {
      request('http://localhost:3000/', (err, response, body) => {
        expect(err).to.equal(null)
        const result = JSON.parse(body)
        expect(response.statusCode).to.equal(200)
        expect(result).to.be.an('object')
        expect(result.name).to.equal('continuous-delivery')
        expect(result.description).to.equal('A practice repository for testing and deployment.')
        expect(result.link).to.equal('https://github.com/ALee-DF/continuous-delivery.git')
        done()
      })
    })

    it('should fail when going to wrong port', done => {
      request('http://localhost:2999/', (err, response, body) => {
        expect(err).to.not.equal(null)
        done()
      })
    })
  })

  describe('GET todos list', () => {
    const date = new Date()
    const testList = [
      {
        task: 'write tests',
        dueDate: date
      },
      {
        task: 'verify tests',
        dueDate: date
      },
      {
        task: 'integrate the file',
        dueDate: date
      }
    ]

    beforeEach('reset todos collection', async () => {
      await collection.deleteMany()
      await collection.insert(testList)
    })

    describe('GET /todos request', () => {
      it('list all the todos', done => {
        request('http://localhost:3000/todos', (err, response, body) => {
          expect(err).to.equal(null)
          const result = JSON.parse(body)
          expect(response.statusCode).to.equal(200)
          expect(result)
            .to.be.an('array')
            .to.have.lengthOf(3)
          done()
        })
      })
    })
  })
})
