var express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./db')
const productRouter = require('./router/product')

var port = process.env.PORT || 8989
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Health is good.')
})

db()

app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
