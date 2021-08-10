/* eslint no-console: 0 */

const convertXML = require('../helpers/convert-xml');
const parseDescription = require('./parse-description');
const xmlEntry = require('../files/example/xml-entry');

let exampleEntry;
beforeAll(async () => {
  ({ entry: exampleEntry } = await convertXML(xmlEntry));
});

describe('Parse protein description', () => {
  it('should return name without pubmed IDs', () => {
    const proteinFunction = exampleEntry.comment.find(v => v.$.type === 'function').text[0]._;
    const expected = 'Promotes cell proliferation. Modulates apoptotic pathways.'
      + ' Increases mitogen-activated protein kinase activity and STK26 activity.'
      + ' Important for cell migration, and for normal structure and assembly of'
      + ' the Golgi complex. Important for KDR/VEGFR2 signaling. Increases the'
      + ' stability of KDR/VEGFR2 and prevents its breakdown. Required for normal'
      + ' cardiovascular development. Required for normal angiogenesis, vasculogenesis'
      + ' and hematopoiesis during embryonic development.';
    expect(parseDescription(proteinFunction)).toBe(expected);
  });

  it('should remove pubmed ID with no leading space', () => {
    const proteinFunction = 'aaaaaa(PubMed:123456). Aaaaaaaa';
    const expected = 'aaaaaa. Aaaaaaaa';
    expect(parseDescription(proteinFunction)).toBe(expected);
  });

  it('should remove pubmed ID with any characters before "Pubmed"', () => {
    const proteinFunction = 'aaaaaa (ABC|PubMed:123456). Aaaaaaaa';
    const expected = 'aaaaaa. Aaaaaaaa';
    expect(parseDescription(proteinFunction)).toBe(expected);
  });
});
