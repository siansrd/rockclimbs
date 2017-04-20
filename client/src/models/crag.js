var Crag = function(options) {
  this.name = options.name
  this.latlng = options.latlng
  this.climbs = options.climbs || [];
}

Crag.prototype = {
  addClimb: function(climb) {
    this.climbs.push(climb)
  }
}

module.exports = Crag