'use strict';

const crud = require('../crud/crud');

const Report =  {
  extension: function(gene, res) {
    //check if gene is null
    if(!gene || (typeof gene !== 'number' && typeof gene !== 'string')) {
      res.status(400).send({error: 'The query must be a non-empty string or number'});
    } else {
      const queryObj = {
        $or: [
          {gene: gene},
          {synonyms: gene}
        ]
      };
      crud.get('geneinfo', 'homosapiens', queryObj)
        .then(function(matches) {
          if(matches.length === 0) {
            res.send({status: 200, result: null});
          } else if (matches.length === 1) {
            res.send({status: 200, result: matches[0]});
          } else {
            let geneMatch;
            for(let i = 0, iLen = matches.length; i < iLen; i++) {
              if(matches[i].gene === gene) {
                geneMatch = matches[i];
                break;
              }
            }
            if(geneMatch) {
              geneMatch = matches[0];
            }
            res.send({status: 200, result: geneMatch});
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
