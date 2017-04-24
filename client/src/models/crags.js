var Climb = require('./climb')
var Crag = require('./crag')

var Crags = function() {

}

Crags.prototype = {
  makeRequest: function(url, oncomplete) {
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = oncomplete
    request.send()
  },
  all: function(url, onComplete) {
    this.makeRequest(url, function() {
      if(this.status !== 200) return
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);
      onComplete(results);
    })
  }
}

module.exports = Crags