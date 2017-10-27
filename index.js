const createApp = require('./create-app')
const app = createApp()
require('dotenv').config()

app.listen(process.env.PORT, () => {
  console.log('Listening on Port', process.env.PORT)
})
