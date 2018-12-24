const fs = require('fs');

const stringify = (file, content) => (
  new Promise((resolve) => {
    const stream = fs.createWriteStream(file, { flags: 'w' });
    stream.write('[\n');
    content.forEach((entry, index) => {
      stream.write(`${JSON.stringify(entry, null, 2)}`);
      if (index + 1 < content.length) {
        stream.write(',');
      }
      stream.write('\n');
    });
    stream.write(']\n');
    stream.end();
    resolve();
  })
);

module.exports = stringify;
