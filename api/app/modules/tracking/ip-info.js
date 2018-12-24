const geoip = require('geoip-lite');

const ipInfo = (ip) => {
  const info = {
    country: 'unknown',
  };
  const lookup = geoip.lookup(ip);
  if (lookup && lookup.country) {
    info.country = lookup.country;
  }
  return info;
};

module.exports = ipInfo;
