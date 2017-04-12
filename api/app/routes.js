'use strict';

let report = require('./modules/extension/report');
let tracking = require('./modules/tracking/tracking');

const Routes = {
	configure: function(app) {
		app.get('/extension', tracking.log, function(req, res) {
			report.extension(req.query.gene, res);
		});
		app.get('/*', function(req, res) {
			res.status(404).send({status: 400, error: 'Gene-Info extension - the route is not valid'});
		});
		app.use(function(req, res) {
			res.status(405).send({status: 405, error: 'Gene-Info extension - request method not supported'});
		});
  }
};
module.exports = Routes;
