import createLink from './create-link';

describe('Create RNA expression link', () => {
  it('should create link when accession is defined', () => {
    const accession = 1234;
    const result = createLink(accession);

    const expected = 'https://www.proteinatlas.org/1234/tissue';
    const re = new RegExp(expected);
    expect(re.test(result)).toBeTruthy();
  });

  it('should return empty string when accession is not defined', () => {
    const accession = '';
    const result = createLink(accession);

    expect(result).toEqual('');
  });
});
