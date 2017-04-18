var express = require('express')
var app = express()

app.use(require('./controllers'))

app.use(express.static('client/build'))

app.listen(9000, function() {
  console.log('App running on port' + this.address().port)
})