'use strict';

var config = require('../../../config');
var databases = require('../../connections/databases');
var Promise = require('promise');

var Crud = {
  create: function(database, collection, queryObject) {
		return new Promise(function(resolve, reject) {
			databases.acquire(database).collection(collection).insert(queryObject, function(err, entry) {
				if(!err) {
					resolve(entry);
				} else {
					reject('There was an error inserting the data');
				}
			});
		});
	},
	get: function(database, collection, queryObject, returnObject = {}) {
		return new Promise(function(resolve, reject) {
			databases.acquire(database).collection(collection).find(queryObject, returnObject).toArray(function(err, documents) {
				if(!err) {
					resolve(documents);
				} else {
					reject('There was an error performing this query');
				}
			});
		});
	}
};
module.exports = Crud;
