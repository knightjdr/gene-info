const joinError = require('./join-error');

describe('Join error', () => {
  it('should should add a message to an existing error', () => {
    const err = new Error('initial error');
    const message = 'message';
    const expected = new Error('message: initial error');
    expect(joinError(err, message)).toEqual(expected);
  });
});
