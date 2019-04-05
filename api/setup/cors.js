const cors = require('cors');


// All origins are allowed because our api can be used by third party sites.
const corsSetup = () => (
  cors({
    origin: '*',
    optionsSuccessStatus: 204,
  })
);

module.exports = corsSetup;
