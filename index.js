const createApp = require('./create-app')
const { MongoClient } = require('mongodb')
require('dotenv').config()

MongoClient.connect('mongodb://localhost/todo-app', (err, db) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  const app = createApp(db)
  app.listen(process.env.PORT, () => {
    console.log('Listening on Port', process.env.PORT)
  })
})
