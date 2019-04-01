const fs = require('fs');
const mockFS = require('mock-fs');

const minHuman = require('./min-human');

const json = `
{
  "responseHeader":{"status":0,"QTime":15},
  "response":{
    "numFound":19201,
    "docs":[
      {
        "date_approved_reserved":"1998-04-28",
        "vega_id":"OTTHUMG00000150226",
        "locus_group":"protein-coding gene",
        "status":"Approved",
        "alias_symbol":["p38-2","p38Beta","SAPK2"],
        "_version_":1629578602942038022,
        "uuid":"a499b293-1529-4a25-ad07-47b9231d8549",
        "refseq_accession":["NM_002751"],
        "locus_type":"gene with protein product",
        "iuphar":"objectId:1500",
        "cosmic":"MAPK11",
        "hgnc_id":"HGNC:6873",
        "rgd_id":["RGD:1309340"],
        "ensembl_gene_id":
        "ENSG00000185386",
        "entrez_id":"5600",
        "gene_group":["Mitogen-activated protein kinases"],
        "omim_id":["602898"],
        "symbol":"MAPK11",
        "location":"22q13.33",
        "name":"mitogen-activated protein kinase 11",
        "date_modified":"2015-08-25",
        "mgd_id":["MGI:1338024"],
        "ucsc_id":"uc003bkr.4",
        "prev_symbol":["PRKM11"],
        "enzyme_id":["2.7.11.1"],
        "uniprot_ids":["Q15759"],
        "ccds_id":["CCDS14090"],
        "ena":["Y14440"],
        "gene_group_id":[651],
        "pubmed_id":[9218798],
        "location_sortable":"22q13.33"
      },
      {
        "date_approved_reserved":"1998-04-28",
        "vega_id":"OTTHUMG00000030145",
        "locus_group":"protein-coding gene",
        "status":"Approved",
        "alias_symbol":["ERK6","PRKM12","p38gamma","SAPK-3"],
        "_version_":1629578602943086592,
        "uuid":"05b85c36-8ce3-402d-b66b-198131cfcfc6",
        "refseq_accession":["NM_002969"],
        "locus_type":"gene with protein product",
        "iuphar":"objectId:1501",
        "cosmic":"MAPK12",
        "hgnc_id":"HGNC:6874",
        "rgd_id":["RGD:70975"],
        "ensembl_gene_id":"ENSG00000188130",
        "entrez_id":"6300",
        "gene_group":["Mitogen-activated protein kinases"],
        "omim_id":["602399"],
        "symbol": "MAPK12",
        "location":"22q13.33",
        "name":"mitogen-activated protein kinase 12",
        "date_modified":"2016-10-05",
        "mgd_id":["MGI:1353438"],
        "ucsc_id":"uc003bkm.2",
        "prev_symbol":["SAPK3"],
        "enzyme_id":["2.7.11.1"],
        "uniprot_ids":["P53778"],
        "ccds_id":["CCDS14089","CCDS77688"],
        "ena":["U66243"],
        "gene_group_id":[651],
        "pubmed_id":[9169156],
        "location_sortable":"22q13.33"
      },
      {
        "hgnc_id": "HGNC:1",
        "symbol": "a"
      },
      {
        "hgnc_id": "HGNC:2",
        "alias_symbol": ["g2"],
        "symbol": "b"
      }
    ]
  }
}`;

const mockedFileSystem = {
  'hgnc.json': json,
  files: {
    'gene-names': {},
  },
};
mockFS(mockedFileSystem);

afterAll(() => {
  mockFS.restore();
});

describe('Parse human gene names from HGNC', () => {
  describe('successful parse', () => {
    beforeAll(async (done) => {
      await minHuman('hgnc.json', './files/gene-names', false);
      done();
    });

    it('should parse results to a file', () => {
      const result = JSON.parse(fs.readFileSync('./files/gene-names/Homo sapiens.json', 'UTF8'));
      const expected = {
        1: {
          symbol: 'a',
          synonyms: [],
        },
        2: {
          symbol: 'b',
          synonyms: ['g2'],
        },
        6873: {
          symbol: 'MAPK11',
          synonyms: ['p38-2', 'p38Beta', 'SAPK2', 'PRKM11'],
        },
        6874: {
          symbol: 'MAPK12',
          synonyms: ['ERK6', 'PRKM12', 'p38gamma', 'SAPK-3', 'SAPK3'],
        },
      };
      expect(result).toEqual(expected);
    });
  });

  describe('failed parse', () => {
    it('should throw error when write input file is missing', () => {
      const expected = new Error("ENOENT, no such file or directory 'missing.json'");
      return expect(minHuman('missing.json', './files/gene-names', false)).rejects.toEqual(expected);
    });
  });

  describe('skip parsing', () => {
    beforeAll(async (done) => {
      await minHuman('hgnc.json', './files/gene-names', true);
      done();
    });

    it('should not parse results', async (done) => {
      fs.access('./files/gene-names/Homo sapiens.json', (err) => {
        expect(err).not.toBeUndefined();
        done();
      });
    });
  });
});
