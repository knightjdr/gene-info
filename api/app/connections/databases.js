'use strict';

const config = require('../../config');
const mongo = require('mongodb');
const mongoClient = mongo.MongoClient;

const Connection = {
  acquire: function(name) {
    return Connection.connection[name];
  },
  connection: {},
  init: function() {
    config.database.names.forEach(function(v) {
      const url = 'mongodb://' + config.database.user + ':' + config.database.readPW + '@localhost:27017/' + v;
      mongoClient.connect(url, function(err, db) {
        if(!err) {
          Connection.connection[v] = db;
          console.log('MongoDB connected, db: ' + v);
        } else {
          console.log(err);
          console.log('Could not connect to database ' + v);
        }
      });
    });
  }
};
module.exports = Connection;
