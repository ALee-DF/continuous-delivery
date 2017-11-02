const express = require('express')
const todosGateway = require('./todos-gateway')

module.exports = function createApp(db) {
  const app = express()
  const todos = todosGateway(db.collection('todos'))
  app
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
  return app
}
