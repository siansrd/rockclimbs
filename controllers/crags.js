var express = require('express')
var cragRouter = express.Router()
var crags = ['Bennibeg', 'Limekilns']

cragRouter.get('/', function(req, res) {
  res.json(crags)
})

module.exports = cragRouter