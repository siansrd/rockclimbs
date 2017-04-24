var CragSelector = function() {
  this.select = document.querySelector('#crags-select')
}

CragSelector.prototype = {

  populateSelect: function(crags) {
    for (var crag of crags) {
      var option = document.createElement('option')
      option.value = crag._id
      option.innerText = crag.name
      this.select.appendChild(option)
    }
  }

}

module.exports = CragSelector