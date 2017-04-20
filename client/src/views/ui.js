var Crags = require('../models/crags')

var UI = function() {
  var crags = new Crags()
  crags.all(function(result){
    console.log(result)
  })

}

module.exports = UI