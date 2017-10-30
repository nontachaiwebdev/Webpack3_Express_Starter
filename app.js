const express = require('express')
const app = express()

const apiRoute = require('./routes/api')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/api', apiRoute)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
