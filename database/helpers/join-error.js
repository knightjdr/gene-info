// Add a message to an error

const joinError = (err, message) => (
  new Error(`${message}: ${err.toString().replace('Error: ', '')}`)
);

module.exports = joinError;
