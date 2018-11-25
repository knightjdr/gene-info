const fs = require('fs');

const createFolder = name => (
  new Promise((resolve) => {
    fs.mkdir(name, { recursive: true }, () => {
      resolve();
    });
  })
);

module.exports = createFolder;
