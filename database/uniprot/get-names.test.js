/* eslint no-console: 0 */

const convertXML = require('../helpers/convert-xml');
const { getNames, parseName } = require('./get-names');
const xmlEntry = require('../files/example/xml-entry');

let exampleEntry;
beforeAll(async (done) => {
  convertXML(xmlEntry)
    .then((converted) => {
      exampleEntry = converted.entry;
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
});

describe('Parse protein name', () => {
  it('should return a string from a string', () => {
    const name = 'name';
    expect(parseName(name)).toBe('name');
  });

  it('should return a string from an object', () => {
    const name = { _: 'name' };
    expect(parseName(name)).toBe('name');
  });
});

describe('Get protein names', () => {
  describe('entry with full information', () => {
    let names;

    beforeAll(() => {
      names = getNames(exampleEntry.protein[0]);
    });

    it('should return full recommend name', () => {
      const expected = 'Programmed cell death protein 10';
      expect(names.full).toBe(expected);
    });

    it('should return alternative names', () => {
      const expected = [
        'Cerebral cavernous malformations 3 protein',
        'TF-1 cell apoptosis-related protein 15',
      ];
      expect(names.alternative).toEqual(expected);
    });
  });

  describe('entry with missing information', () => {
    let names;

    beforeAll(() => {
      names = getNames({});
    });

    it('should return empty full recommend name', () => {
      const expected = '';
      expect(names.full).toBe(expected);
    });

    it('should return empty array for alternative names', () => {
      const expected = [];
      expect(names.alternative).toEqual(expected);
    });
  });
});
