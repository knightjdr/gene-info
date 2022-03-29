const mockFS = require('mock-fs');

const {
  addStats,
  createIDtoSymbolMap,
  parseCellInfo,
  parseCoDependencies,
  parseData,
  parseEssentialityData,
} = require('./parse-data');

const cellInfoData = `essentiality_ID,cell_line_name,stripped_cell_line_name,CCLE_Name
ACH-000001,NIH:OVCAR-3,NIHOVCAR3,NIHOVCAR3_OVARY
ACH-000002,HL-60,HL60,HL60_HAEMATOPOIETIC_AND_LYMPHOID_TISSUE
ACH-000003,CACO2,CACO2,CACO2_LARGE_INTESTINE
ACH-000004,"HEL, clone X",HEL,HEL_HAEMATOPOIETIC_AND_LYMPHOID_TISSUE
`;

const coDependencyData = `dim_0,dim_1,cor
A1BG (1),A1BG (1),1.0
A1CF (29974),A1CF (29974),1.0
A2M (2),A2M (2),1.0
A1BG (1),A1CF (29974),0.77777
A1BG (1),A2M (2),0.1
A1CF (29974),A1BG (1),0.77777
A1CF (29974),A2M (2),0.23543
A2M (2),A1BG (1),0.1
A2M (2),A1CF (29974),0.23543
`;

const effectData = `Essentiality_ID,A1BG (1),A1CF (29974),A2M (2),A2ML1 (144568)
ACH-000001,0,-0.5,-1,0.1
ACH-000003,0.2,-0.1,-0.75,0.15
ACH-000004,-0.4,0.2,-1,-1.5
`;

const mockedFileSystem = {
  'Homo sapiens-cell-info.csv': cellInfoData,
  'Homo sapiens-co-dependency.csv': coDependencyData,
  'Homo sapiens.csv': effectData,
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Parse essentiality', () => {
  describe('id mapping', () => {
    it('should create a map of gene IDs to sumbol', async () => {
      const expected = {
        1: 'A1BG',
        29974: 'A1CF',
        2: 'A2M',
        144568: 'A2ML1',
      };
      const actual = await createIDtoSymbolMap('./Homo sapiens.csv');
      expect(actual).toEqual(expected);
    });
  });

  describe('calculate stats', () => {
    it('should calculate stats', () => {
      const effects = {
        1: [
          { name: 'NIHOVCAR3', value: 0 },
          { name: 'CACO2', value: 0.2 },
          { name: 'HEL', value: -0.4 },
        ],
        2: [
          { name: 'NIHOVCAR3', value: -1 },
          { name: 'CACO2', value: -0.75 },
          { name: 'HEL', value: -1 },
        ],
        29974: [
          { name: 'NIHOVCAR3', value: -0.5 },
          { name: 'CACO2', value: -0.1 },
          { name: 'HEL', value: 0.2 },
        ],
        144568: [
          { name: 'NIHOVCAR3', value: 0.1 },
          { name: 'CACO2', value: 0.15 },
          { name: 'HEL', value: -1.5 },
        ],
      };
      const expected = {
        1: {
          cells: [
            { name: 'NIHOVCAR3', value: 0 },
            { name: 'CACO2', value: 0.2 },
            { name: 'HEL', value: -0.4 },
          ],
          stats: {
            mean: -0.0667,
            median: 0,
            sd: 0.2494,
          },
        },
        2: {
          cells: [
            { name: 'NIHOVCAR3', value: -1 },
            { name: 'CACO2', value: -0.75 },
            { name: 'HEL', value: -1 },
          ],
          stats: {
            mean: -0.9167,
            median: -1,
            sd: 0.1179,
          },
        },
        29974: {
          cells: [
            { name: 'NIHOVCAR3', value: -0.5 },
            { name: 'CACO2', value: -0.1 },
            { name: 'HEL', value: 0.2 },
          ],
          stats: {
            mean: -0.1333,
            median: -0.1,
            sd: 0.2867,
          },
        },
        144568: {
          cells: [
            { name: 'NIHOVCAR3', value: 0.1 },
            { name: 'CACO2', value: 0.15 },
            { name: 'HEL', value: -1.5 },
          ],
          stats: {
            mean: -0.4167,
            median: 0.1,
            sd: 0.7663,
          },
        },
      };
      expect(addStats(effects)).toEqual(expected);
    });
  });

  describe('cell info', () => {
    it('should create a map of ID to cell name', async () => {
      const expected = {
        'ACH-000001': 'NIHOVCAR3',
        'ACH-000002': 'HL60',
        'ACH-000003': 'CACO2',
        'ACH-000004': 'HEL',
      };
      const actual = await parseCellInfo('./Homo sapiens-cell-info.csv');
      expect(actual).toEqual(expected);
    });
  });

  describe('co dependency info', () => {
    it('should create a map of ID to co dependent genes as tuples', async () => {
      const expected = {
        1: [
          ['A1CF', 0.7778],
          ['A2M', 0.1],
        ],
        2: [
          ['A1CF', 0.2354],
          ['A1BG', 0.1],
        ],
        29974: [
          ['A1BG', 0.7778],
          ['A2M', 0.2354],
        ],
      };
      const actual = await parseCoDependencies('./Homo sapiens-co-dependency.csv');
      expect(actual).toEqual(expected);
    });
  });

  describe('effect data', () => {
    it('should create a map of cells to gene IDs with effect values', async () => {
      const expected = {
        'ACH-000001': {
          1: 0,
          29974: -0.5,
          2: -1,
          144568: 0.1,
        },
        'ACH-000003': {
          1: 0.2,
          29974: -0.1,
          2: -0.75,
          144568: 0.15,
        },
        'ACH-000004': {
          1: -0.4,
          29974: 0.2,
          2: -1,
          144568: -1.5,
        },
      };
      const actual = await parseEssentialityData('./Homo sapiens.csv');
      expect(actual).toEqual(expected);
    });
  });

  describe('parse data', () => {
    it('should parse data by gene id', async () => {
      const expected = {
        essentialityTissues: {
          cells: ['CACO2', 'HEL', 'NIHOVCAR3'],
        },
        effects: {
          1: {
            cells: [
              { name: 'NIHOVCAR3', value: 0 },
              { name: 'CACO2', value: 0.2 },
              { name: 'HEL', value: -0.4 },
            ],
            coDependencies: [
              ['A1CF', 0.7778],
              ['A2M', 0.1],
            ],
            sourceSymbol: 'A1BG',
            stats: {
              mean: -0.0667,
              median: 0,
              sd: 0.2494,
            },
          },
          2: {
            cells: [
              { name: 'NIHOVCAR3', value: -1 },
              { name: 'CACO2', value: -0.75 },
              { name: 'HEL', value: -1 },
            ],
            coDependencies: [
              ['A1CF', 0.2354],
              ['A1BG', 0.1],
            ],
            sourceSymbol: 'A2M',
            stats: {
              mean: -0.9167,
              median: -1,
              sd: 0.1179,
            },
          },
          29974: {
            cells: [
              { name: 'NIHOVCAR3', value: -0.5 },
              { name: 'CACO2', value: -0.1 },
              { name: 'HEL', value: 0.2 },
            ],
            coDependencies: [
              ['A1BG', 0.7778],
              ['A2M', 0.2354],
            ],
            sourceSymbol: 'A1CF',
            stats: {
              mean: -0.1333,
              median: -0.1,
              sd: 0.2867,
            },
          },
          144568: {
            cells: [
              { name: 'NIHOVCAR3', value: 0.1 },
              { name: 'CACO2', value: 0.15 },
              { name: 'HEL', value: -1.5 },
            ],
            coDependencies: [],
            sourceSymbol: 'A2ML1',
            stats: {
              mean: -0.4167,
              median: 0.1,
              sd: 0.7663,
            },
          },
        },
      };
      const actual = await parseData(
        './Homo sapiens.csv',
        './Homo sapiens-cell-info.csv',
        './Homo sapiens-co-dependency.csv',
      );
      expect(actual).toEqual(expected);
    });
  });
});
