var MongoClient = require('mongodb').MongoClient

var CragQuery = function() {
  this.url = 'mongodb://localhost:27017/rockclimbing'
}

CragQuery.prototype = {
  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('crags');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs)
      });
    })
  },
  byId: function(name, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('crags');
      collection.find({name: { $eq: name }}).toArray(function(err, docs){
        onQueryFinished(docs)
      });
    })
  }
}

module.exports = CragQuery