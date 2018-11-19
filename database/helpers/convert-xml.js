const { parseString } = require('xml2js');

const convertXml = xml => (
  new Promise((resolve, reject) => {
    parseString(xml, (err, js) => {
      if (err) {
        reject(err);
      }
      resolve(js);
    });
  })
);

module.exports = convertXml;
