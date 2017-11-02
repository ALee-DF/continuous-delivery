const { describe, before, beforeEach, after, it } = require('mocha')
const { expect } = require('chai')
const { MongoClient } = require('mongodb')
const todosGateway = require('../server/todos-gateway')
require('dotenv').config()

describe('todosGateway', () => {

  let db
  let todos
  let collection
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

  before('connect to mongodb', done => {
    MongoClient.connect(process.env.MONGODB_URI, (err, _db) => {
      if (err) return done(err)
      db = _db
      collection = db.collection('todos')
      todos = todosGateway(collection)
      done()
    })
  })

  after('disconnect from mongodb', () => db.close())

  beforeEach('reset todos collection', async () => {
    await collection.deleteMany()
    await collection.insert(testList)
  })
  describe('find method', () => {
    it('lists all the todos', async () => {
      const list = await todos.find({})
      expect(list)
        .to.be.an('array')
        .to.have.lengthOf(3)
        .deep.equal(testList)
    })
  })
})
