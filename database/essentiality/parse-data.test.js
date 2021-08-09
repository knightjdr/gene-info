const mockFS = require('mock-fs');

const {
  addStats,
  parseCellInfo,
  parseData,
  parseEssentialityData,
} = require('./parse-data');

const cellInfoData = `essentiality_ID,cell_line_name,stripped_cell_line_name,CCLE_Name
ACH-000001,NIH:OVCAR-3,NIHOVCAR3,NIHOVCAR3_OVARY
ACH-000002,HL-60,HL60,HL60_HAEMATOPOIETIC_AND_LYMPHOID_TISSUE
ACH-000003,CACO2,CACO2,CACO2_LARGE_INTESTINE
ACH-000004,"HEL, clone X",HEL,HEL_HAEMATOPOIETIC_AND_LYMPHOID_TISSUE
`;

const effectData = `Essentiality_ID,A1BG (1),A1CF (29974),A2M (2),A2ML1 (144568)
ACH-000001,0,-0.5,-1,0.1
ACH-000003,0.2,-0.1,-0.75,0.15
ACH-000004,-0.4,0.2,-1,-1.5
`;

const mockedFileSystem = {
  'Homo sapiens-cell-info.csv': cellInfoData,
  'Homo sapiens.csv': effectData,
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Parse essentiality', () => {
  describe('calculate stats', () => {
    it('should calculate stats', () => {
      const effects = {
        1: {
          CACO2: 0.2,
          HEL: -0.4,
          NIHOVCAR3: 0,
        },
        2: {
          CACO2: -0.75,
          HEL: -1,
          NIHOVCAR3: -1,
        },
        29974: {
          CACO2: -0.1,
          HEL: 0.2,
          NIHOVCAR3: -0.5,
        },
        144568: {
          CACO2: 0.15,
          HEL: -1.5,
          NIHOVCAR3: 0.1,
        },
      };
      const expected = {
        1: {
          cells: {
            CACO2: 0.2,
            HEL: -0.4,
            NIHOVCAR3: 0,
          },
          stats: {
            mean: -0.0667,
            median: 0,
            sd: 0.2494,
          },
        },
        2: {
          cells: {
            CACO2: -0.75,
            HEL: -1,
            NIHOVCAR3: -1,
          },
          stats: {
            mean: -0.9167,
            median: -1,
            sd: 0.1179,
          },
        },
        29974: {
          cells: {
            CACO2: -0.1,
            HEL: 0.2,
            NIHOVCAR3: -0.5,
          },
          stats: {
            mean: -0.1333,
            median: -0.1,
            sd: 0.2867,
          },
        },
        144568: {
          cells: {
            CACO2: 0.15,
            HEL: -1.5,
            NIHOVCAR3: 0.1,
          },
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
            cells: {
              CACO2: 0.2,
              HEL: -0.4,
              NIHOVCAR3: 0,
            },
            stats: {
              mean: -0.0667,
              median: 0,
              sd: 0.2494,
            },
          },
          2: {
            cells: {
              CACO2: -0.75,
              HEL: -1,
              NIHOVCAR3: -1,
            },
            stats: {
              mean: -0.9167,
              median: -1,
              sd: 0.1179,
            },
          },
          29974: {
            cells: {
              CACO2: -0.1,
              HEL: 0.2,
              NIHOVCAR3: -0.5,
            },
            stats: {
              mean: -0.1333,
              median: -0.1,
              sd: 0.2867,
            },
          },
          144568: {
            cells: {
              CACO2: 0.15,
              HEL: -1.5,
              NIHOVCAR3: 0.1,
            },
            stats: {
              mean: -0.4167,
              median: 0.1,
              sd: 0.7663,
            },
          },
        },
      };
      const actual = await parseData('./Homo sapiens.csv', './Homo sapiens-cell-info.csv');
      expect(actual).toEqual(expected);
    });
  });
});
