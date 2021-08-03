/* eslint-disable max-len */
const parseCSVLine = require('./parse-csv-line');

describe('Parse CSV line', () => {
  it('should parse a line of csv', () => {
    const line = 'ACH-000017,SK-BR-3,SKBR3,SKBR3_BREAST,,,Female,ATCC,2.0,-2.9322500616974234,Adherent,McCoy\'s 5A + 10% FBS,72.9,CVCL_0033,,pleural_effusion,Metastasis,Breast Cancer,Carcinoma,43,SIDM00897,,breast,breast_carcinoma,ERneg_HER2pos,HER2_amp';
    const expected = [
      [
        'ACH-000017',
        'SK-BR-3',
        'SKBR3',
        'SKBR3_BREAST',
        '',
        '',
        'Female',
        'ATCC',
        '2.0',
        '-2.9322500616974234',
        'Adherent',
        "McCoy's 5A + 10% FBS",
        '72.9',
        'CVCL_0033',
        '',
        'pleural_effusion',
        'Metastasis',
        'Breast Cancer',
        'Carcinoma',
        '43',
        'SIDM00897',
        '',
        'breast',
        'breast_carcinoma',
        'ERneg_HER2pos',
        'HER2_amp',
      ],
    ];
    expect(parseCSVLine(line)).toEqual(expected);
  });
});
