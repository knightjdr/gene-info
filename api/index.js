'use strict';

const config = require('./config');
const cors = require('cors');
const database = require('./app/connections/databases');
const express = require('express');
const http = require('http');
const routes = require('./app/routes');

//init database connection
database.init();

//init app
const app = express();
const server = http.createServer(app);
app.use(cors());
routes.configure(app);

//start server
server.listen(config.port, function() {
	console.log('Server listening on port ' + server.address().port);
});
