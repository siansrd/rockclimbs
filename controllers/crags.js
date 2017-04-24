var express = require('express')
var cragRouter = express.Router()
var crags = ['Bennibeg', 'Limekilns']

var CragQuery = require('../db/CragQuery')
var cragQuery = new CragQuery()

cragRouter.get('/', function(req, res) {
  cragQuery.all(function(data){
    res.json(data);
  });
})

cragRouter.get('/:id', function(req, res) {
  cragQuery.byId(req.params.id, function(data){
    res.json(data)
  })
})

module.exports = cragRouter