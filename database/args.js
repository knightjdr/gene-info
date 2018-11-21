const args = () => ({
  skipDownload: process.argv.includes('--skip-download'),
  skipXmlMin: process.argv.includes('--skip-xml-min'),
});

module.exports = args;
