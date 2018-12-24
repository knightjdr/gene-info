const createQuery = require('./create-query');
const find = require('../db-methods/find');
const findOne = require('../db-methods/find-one');
const tracking = require('../tracking/tracking');
const validate = require('./validate');

const report = (req, res) => {
  const { field, term } = req.params;
  const species = req.params.species.split('-').join(' ');
  const validated = validate(species, field, term);
  if (validated.err) {
    res.statusMessage = validated.message;
    res.status(400);
    res.end();
  } else {
    const findMethod = field === 'gene' ? find : findOne;
    const query = createQuery(field, term);
    Promise.all([
      findMethod(species, query, {}, { gene: 1 }),
      tracking(req.ip, species, field, term),
    ])
      .then((results) => {
        const [matches] = results;
        const official = [];
        const nonOfficial = [];
        matches.forEach((match) => {
          if (match.gene === term) {
            official[0] = match;
          } else {
            nonOfficial.push(match);
          }
        });
        res.send({ result: [...official, ...nonOfficial] });
      })
      .catch((err) => {
        res.statusMessage = `Gene-Info extension ${err.toString()}`;
        res.status(500);
        res.end();
      });
  }
};

module.exports = report;
