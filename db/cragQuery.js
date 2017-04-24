var MongoClient = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId

var CragQuery = function() {
  this.url = 'mongodb://localhost:27017/rockclimbing'
}

CragQuery.prototype = {

  all: function(onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('crags')
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs)
      });
    })
  },

  byId: function(id, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      var collection = db.collection('crags')
      collection.find(ObjectId(id)).toArray(function(err, docs){
        onQueryFinished(docs)
      });
    })
  },

  add: function(newCrag, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('crags')
        collection.insert(newCrag)
      }
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs)
      })
    })
  },

  delete: function(id, onQueryFinished) {
    MongoClient.connect(this.url, function(err, db) {
      if (db) {
        var collection = db.collection('crags')
        collection.remove({ _id: ObjectId(id) })
      }
      collection.find().toArray(function(err, docs) {
        onQueryFinished(docs)
      })
    })
  }


}

module.exports = CragQuery