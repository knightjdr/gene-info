const args = () => ({
  skipDownload: process.argv.includes('--skip-download'),
  skipUnzip: process.argv.includes('--skip-unzip'),
  skipXmlMin: process.argv.includes('--skip-xml-min'),
});

module.exports = args;
