const createQuery = require('./create-query');
const find = require('../db-methods/find');
const findOne = require('../db-methods/find-one');
const sortResults = require('./sort-results');
const tracking = require('../tracking/tracking');
const { validate } = require('./validate');

const report = (req, res) => {
  const { field, term } = req.params;
  const species = req.params.species.split('-').join(' ');
  const validated = validate(species, field, term);
  if (validated.err) {
    res.statusMessage = validated.message;
    res.status(400);
    res.end();
  } else {
    const findMethod = validated.field === 'gene' ? find : findOne;
    const query = createQuery(validated.field, validated.term);
    findMethod(validated.species, query, {}, { gene: 1 })
      .then((matches) => {
        if (!matches || matches.length === 0) {
          res.send([]);
          tracking(validated.species, validated.field, false);
        } else {
          res.send(sortResults(validated.term, matches));
          tracking(validated.species, validated.field, true);
        }
      })
      .catch(() => {
        res.status(500);
        res.end();
      });
  }
};

module.exports = report;
