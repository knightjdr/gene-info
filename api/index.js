/* eslint no-console: 0 */

const compression = require('compression');
const express = require('express');
const http = require('http');

const config = require('./config');
const corsSetup = require('./setup/cors');
const database = require('./app/connections/database');
const logger = require('./logger');
const responseHeaders = require('./setup/response-headers');
const router = require('./app/routes/router');
const uriError = require('./setup/uri-error');

// Initialize app
const initApp = () => {
  const app = express();
  const server = http.createServer(app);
  app.use(responseHeaders);
  app.use(corsSetup());
  app.use(compression());
  app.use(uriError);
  app.use(config.base, router);

  // Start server
  server.listen(config.port, () => {
    console.log(`Server listening on port ${server.address().port}`);
  });
};


function init() {
  database.init()
    .then(() => {
      initApp();
    })
    .catch((err) => {
      logger.error(err);
    });
}

init();
