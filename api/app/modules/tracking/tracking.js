'use strict';

const crud = require('../crud/crud');

const tracking = {
  log: function(req, res, next) {
    crud.create('tracking', 'geneinfo', {ip: req.ip, date: new Date()})
      .then(function() {
        next();
      })
      .catch(function() {
				next();
			})
    ;
  }
};
module.exports = tracking;
