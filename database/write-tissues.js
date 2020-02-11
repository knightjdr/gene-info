const fs = require('fs');

const writeTissue = (species, file) => (
  new Promise((resolve, reject) => {
    const writeStream = fs.createWriteStream(file, { flags: 'w' });
    writeStream.write('const tissues = {\n');
    Object.entries(species).forEach(([specie, tissues]) => {
      writeStream.write(`  '${specie}': {\n`);
      writeStream.write('    cells: [\n');
      if (tissues.cells) {
        tissues.cells.forEach((cell) => {
          writeStream.write(`      '${cell}',\n`);
        });
      }
      writeStream.write('    ],\n');
      writeStream.write('    tissues: [\n');
      if (tissues.tissues) {
        tissues.tissues.forEach((tissue) => {
          writeStream.write(`      '${tissue}',\n`);
        });
      }
      writeStream.write('    ],\n');
      writeStream.write('  },\n');
    });
    writeStream.write('};\n\n');
    writeStream.write('export default tissues;\n');
    resolve();
    writeStream.on('error', (err) => {
      reject(err);
    });
  })
);

module.exports = writeTissue;
