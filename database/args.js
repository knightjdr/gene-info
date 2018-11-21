const args = () => ({
  skipDownload: process.argv.includes('--skip-download'),
});

module.exports = args;
