var Crags = require('../models/crags')
var CragSelector = require('./crag_selector')

var UI = function() {
  var url = "http://localhost:3000/api/crags"
  var crags = new Crags()
  crags.all(url, function(result){
    var cragSelector = new CragSelector()
    cragSelector.populateSelect(result)
  })

}

module.exports = UI