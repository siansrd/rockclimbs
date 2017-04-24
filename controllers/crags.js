var express = require('express')
var cragRouter = express.Router()
var Crag = require('../client/src/models/crag.js')


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

cragRouter.post('/', function(req, res) {
  var newCrag = new Crag({ 
    name: req.body.name,
    latlng: req.body.latlng,
    climbs: []
  })
  cragQuery.add(newCrag, function(data){
    res.json(data)
  })
})

cragRouter.delete('/:id', function(req, res) {
  console.log(req.params.id)
  cragQuery.delete(req.params.id, function(data) {
    res.json(data)
  })
})

module.exports = cragRouter