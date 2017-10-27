const express = require('express')
const app = express()

app
  .get('/', (req, res) => {
    res.json({
      name: 'continuous-delivery',
      description: 'A practice repository for testing and deployment.'
    })
  })
  .listen(3000, () => {
    console.log('Listening on Port 3000 for Continuous Delivery Part 1')
  })
