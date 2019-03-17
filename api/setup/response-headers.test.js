const responseHeaders = require('./response-headers');

const next = jest.fn();
const res = {
  setHeader: jest.fn(),
};

describe('Resonse headers', () => {
  beforeAll(() => {
    res.setHeader.mockClear();
    responseHeaders(jest.fn(), res, next);
  });

  it('should set three headers', () => {
    expect(res.setHeader).toHaveBeenCalledTimes(4);
  });

  it('should set Access header', () => {
    expect(res.setHeader).toHaveBeenCalledWith('Access-Control-Allow-Origin', '*');
  });

  it('should set XSS header', () => {
    expect(res.setHeader).toHaveBeenCalledWith('X-XSS-Protection', '1;mode=block');
  });

  it('should set X-frame header', () => {
    expect(res.setHeader).toHaveBeenCalledWith('X-Frame-Options', 'SAMEORIGIN');
  });

  it('should set nosniff header', () => {
    expect(res.setHeader).toHaveBeenCalledWith('X-Content-Type-Options', 'nosniff');
  });
});
