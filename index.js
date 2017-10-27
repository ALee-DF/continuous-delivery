const createApp = require('./create-app')
const app = createApp()

app.listen(3000, () => {
  console.log('Listening on Port 3000 for Continuous Delivery Part 1')
})
