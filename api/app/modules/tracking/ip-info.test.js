const ipInfo = require('./ip-info');

describe('IP info', () => {
  it('should return IP country', () => {
    // France Telecom
    const ip = '83.206.36.224';
    const expected = { country: 'FR' };
    expect(ipInfo(ip)).toEqual(expected);
  });

  it('should return unknown IP country', () => {
    // Testnet
    const ip = '198.51.100.255';
    const expected = { country: 'unknown' };
    expect(ipInfo(ip)).toEqual(expected);
  });
});
