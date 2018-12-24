const messages = require('./route-messages');
const report = require('../modules/extension/report');

const get = (router) => {
  router.get('/extension/:species/:field/:term', report);
  router.get('*', (req, res) => {
    res.status(404).send({ message: messages.invalidRoute });
  });
};

module.exports = get;
