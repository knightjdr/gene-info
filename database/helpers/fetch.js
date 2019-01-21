const fetch = require('node-fetch');

const parseJSON = require('./parse-json');

const fetchJson = url => (
  new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        const contentType = res.headers.get('content-type');
        if (
          res.ok
          && contentType
          && contentType.includes('application/json')
        ) {
          return res.text();
        }
        return Promise.rejected(new Error(res.statusText));
      })
      .then((text) => {
        const json = parseJSON(text);
        if (json) {
          resolve(json);
        } else {
          reject(new Error(`JSON not returned for: ${url}`));
        }
      })
      .catch((err) => {
        reject(err);
      });
  })
);

module.exports = fetchJson;
