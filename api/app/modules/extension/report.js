'use strict';

const crud = require('../crud/crud');
const sortFunctions = require('../helpers/sort');

const Report =  {
  extension: function(gene, res) {
    // check if gene is null
    if (
      !gene ||
      (typeof gene !== 'number' && typeof gene !== 'string')
    ) {
      res.status(400).send({error: 'The query must be a non-empty string or number'});
    } else {
      const searchString = '^' + gene + '$';
			const re = new RegExp(searchString, "i");
      const queryObj = {
        $or: [
          { gene: { $regex: re } },
          { synonyms: re }
        ]
      };
      crud.get('geneinfo', 'homosapiens', queryObj)
        .then((matches) => {
          if (matches.length === 0) {
            res.send({status: 200, result: []});
          } else if (matches.length === 1) {
            res.send({status: 200, result: matches});
          } else {
            let orderedMatches = [];
            let nonGeneMatches = [];
            matches.some((match) => {
              if (match.gene === gene) {
                orderedMatches[0] = match;
              } else {
                nonGeneMatches.push(match);
              }
            });
            nonGeneMatches = sortFunctions.string(nonGeneMatches, 'gene');
            orderedMatches = orderedMatches.concat(nonGeneMatches);
            res.send({status: 200, result: orderedMatches});
          }
        })
        .catch(function(error) {
          res.status(500).send({status: 500, error: 'Gene-Info extension ' + error});
        })
      ;
    }
  }
};
module.exports = Report;
