const express = require('express')
const path = require('path')
const todosGateway = require('./todos-gateway')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = function createApp(db) {
  const app = express()
  const todos = todosGateway(db.collection('todos'))
  app
    .use(cors())
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json())
    .get('/api', (req, res) => {
      res.json({
        name: 'continuous-delivery',
        description: 'A practice repository for testing and deployment.',
        link: 'https://github.com/ALee-DF/continuous-delivery.git'
      })
    })
    .get('/api/todos', async (req, res) => {
      const list = await todos.find(req.query)
      res.json(list)
    })
    .post('/api/todos', async (req, res) => {
      console.log(req.body)
      const created = await todos.create(req.body)
      res.status(201).json(created)
    })
  return app
}
