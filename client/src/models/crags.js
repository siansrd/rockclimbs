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
  all: function() {
    this.makeRequest("http://localhost:3000/api/crags", function() {
      if(this.status !== 200) return
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      console.log(results);
    })
  }
}

module.exports = Crags