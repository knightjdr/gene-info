const args = () => ({
  skipDownload: process.argv.includes('--skip-download'),
  skipUnzip: process.argv.includes('--skip-unzip'),
  skipMin: process.argv.includes('--skip-min'),
});

module.exports = args;
