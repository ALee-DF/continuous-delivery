const express = require('express')
const todosGateway = require('./todos-gateway')
const bodyParser = require('body-parser')

module.exports = function createApp(db) {
  const app = express()
  const todos = todosGateway(db.collection('todos'))
  app
    .use(express.static('public'))
    .use(bodyParser.json())
    .get('/', (req, res) => {
      res.json({
        name: 'continuous-delivery',
        description: 'A practice repository for testing and deployment.',
        link: 'https://github.com/ALee-DF/continuous-delivery.git'
      })
    })
    .get('/todos', async (req, res) => {
      const list = await todos.find(req.query)
      res.json(list)
    })
    .post('/todos', async (req, res) => {
      const created = await todos.create(req.body)
      res.status(201).json(created)
    })
  return app
}
