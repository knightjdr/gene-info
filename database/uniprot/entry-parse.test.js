/* eslint no-console: 0 */
const convertXML = require('../helpers/convert-xml');

const entryParse = require('./entry-parse');
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

describe('Parse xml entry', () => {
  describe('with primary gene name', () => {
    let parsed;

    beforeAll(() => {
      parsed = entryParse(exampleEntry);
    });

    it('should return alternative names', () => {
      const expected = [
        'Cerebral cavernous malformations 3 protein',
        'TF-1 cell apoptosis-related protein 15',
      ];
      expect(parsed.alternativeNames).toEqual(expected);
    });

    it('should return BioGRID ID', () => {
      const expected = 116400;
      expect(parsed.biogrid).toEqual(expected);
    });

    it('should return description', () => {
      const expected = 'Promotes cell proliferation. Modulates apoptotic pathways. '
      + 'Increases mitogen-activated protein kinase activity and STK26 activity. Important '
      + 'for cell migration, and for normal structure and assembly of the Golgi complex. '
      + 'Important for KDR/VEGFR2 signaling. Increases the stability of KDR/VEGFR2 and prevents '
      + 'its breakdown. Required for normal cardiovascular development. Required for normal '
      + 'angiogenesis, vasculogenesis and hematopoiesis during embryonic development.';
      expect(parsed.description).toEqual(expected);
    });

    it('should return Ensembl gene ID', () => {
      const expected = ['ENSG00000114209'];
      expect(parsed['ensembl-gene']).toEqual(expected);
    });

    it('should return Ensembl protein ID', () => {
      const expected = [
        'ENSP00000376506',
        'ENSP00000420021',
        'ENSP00000417202',
        'ENSP00000418317',
        'ENSP00000420553',
      ];
      expect(parsed['ensembl-protein']).toEqual(expected);
    });

    it('should return full name', () => {
      const expected = 'Programmed cell death protein 10';
      expect(parsed.fullname).toEqual(expected);
    });

    it('should return gene symbol', () => {
      const expected = 'PDCD10';
      expect(parsed.gene).toEqual(expected);
    });

    it('should return gene ID', () => {
      const expected = 11235;
      expect(parsed.geneid).toEqual(expected);
    });

    it('should return go terms', () => {
      const expected = {
        c: [
          { id: '0005737', term: 'cytoplasm' },
          { id: '0005829', term: 'cytosol' },
          { id: '0070062', term: 'extracellular exosome' },
          { id: '0005794', term: 'Golgi apparatus' },
          { id: '0000139', term: 'Golgi membrane' },
          { id: '0005886', term: 'plasma membrane' },
        ],
        f: [
          { id: '0042803', term: 'protein homodimerization activity' },
          { id: '0019901', term: 'protein kinase binding' },
          { id: '0047485', term: 'protein N-terminus binding' },
        ],
        p: [
          { id: '0001525', term: 'angiogenesis' },
          { id: '1990830', term: 'cellular response to leukemia inhibitory factor' },
          { id: '0051683', term: 'establishment of Golgi localization' },
          { id: '0090168', term: 'Golgi reassembly' },
          { id: '0036481', term: 'intrinsic apoptotic signaling pathway in response to hydrogen peroxide' },
          { id: '0043066', term: 'negative regulation of apoptotic process' },
          { id: '1903588', term: 'negative regulation of blood vessel endothelial cell proliferation involved in sprouting angiogenesis' },
          { id: '0090051', term: 'negative regulation of cell migration involved in sprouting angiogenesis' },
          { id: '0010629', term: 'negative regulation of gene expression' },
          { id: '0030335', term: 'positive regulation of cell migration' },
          { id: '0008284', term: 'positive regulation of cell proliferation' },
          { id: '0010628', term: 'positive regulation of gene expression' },
          { id: '0090316', term: 'positive regulation of intracellular protein transport' },
          { id: '0043406', term: 'positive regulation of MAP kinase activity' },
          { id: '0045747', term: 'positive regulation of Notch signaling pathway' },
          { id: '0033138', term: 'positive regulation of peptidyl-serine phosphorylation' },
          { id: '0071902', term: 'positive regulation of protein serine/threonine kinase activity' },
          { id: '0032874', term: 'positive regulation of stress-activated MAPK cascade' },
          { id: '0050821', term: 'protein stabilization' },
          { id: '0042542', term: 'response to hydrogen peroxide' },
          { id: '0044319', term: 'wound healing, spreading of cells' },
        ],
      };
      expect(parsed.go).toEqual(expected);
    });

    it('should return hgnc ID', () => {
      const expected = 8761;
      expect(parsed.hgnc).toBe(expected);
    });

    it('should return protein length', () => {
      const expected = 212;
      expect(parsed.length).toBe(expected);
    });

    it('should return localizations (unsorted)', () => {
      const expected = {
        uniprot: [
          'Cell membrane',
          'Cytoplasm',
          'Golgi apparatus membrane',
        ],
      };
      expect(parsed.localization).toEqual(expected);
    });

    it('should return locus', () => {
      const expected = 'locusTest';
      expect(parsed.locus).toBe(expected);
    });

    it('should return protein mw', () => {
      const expected = 24702;
      expect(parsed.mw).toBe(expected);
    });

    it('should return ORF', () => {
      const expected = ['orfTest1', 'orfTest2'];
      expect(parsed.orf).toEqual(expected);
    });

    it('should return pathologies', () => {
      const expected = [
        {
          description: 'A congenital vascular anomaly of the central nervous system that can result in hemorrhagic stroke.',
          mim: 603285,
          name: 'Cerebral cavernous malformations 3',
          uniprotID: 'DI-00257',
        },
        {
          description: 'Animals are sterile and develop slowly.',
          mim: undefined,
          name: '',
          uniprotID: '',
        },
      ];
      expect(parsed.pathology).toEqual(expected);
    });

    it('should return pathways', () => {
      const expected = [
        {
          id: 'R-HSA-69231',
          term: 'Cyclin D associated events in G1',
        },
        {
          id: 'R-HSA-2995383',
          term: 'Initiation of Nuclear Envelope Reformation',
        },
      ];
      expect(parsed.pathway).toEqual(expected);
    });

    it('should return ProteomicsDB ID', () => {
      const expected = 79108;
      expect(parsed.proteomicsdb).toBe(expected);
    });

    it('should return refseq IDs', () => {
      const expected = [
        'NP_009148',
        'NM_007217',
        'NP_665858',
        'NM_145859',
        'NP_665859',
        'NM_145860',
        'XP_005247143',
        'XM_005247086',
        'XP_005247144',
        'XM_005247087',
        'XP_005247145',
        'XM_005247088',
        'XP_006713548',
        'XM_006713485',
        'XP_011510670',
        'XM_011512368',
        'XP_011510671',
        'XM_011512369',
        'XP_016861133',
        'XM_017005644',
      ];
      expect(parsed.refseq).toEqual(expected);
    });

    it('should return synonyms', () => {
      const expected = ['CCM3', 'TFAR15'];
      expect(parsed.synonyms).toEqual(expected);
    });

    it('should return UniProt ID', () => {
      const expected = [
        'Q9BUL8',
        'A8K515',
        'D3DNN5',
        'O14811',
      ];
      expect(parsed.uniprot).toEqual(expected);
    });

    it('should return dictybase ID', () => {
      const expected = 'DDB_G0286499';
      expect(parsed.dictybase).toBe(expected);
    });

    it('should return flybase ID', () => {
      const expected = 'flybaseTest';
      expect(parsed.flybase).toBe(expected);
    });

    it('should return MGI ID', () => {
      const expected = 'MGITest';
      expect(parsed.mgi).toBe(expected);
    });

    it('should return MIM ID', () => {
      const expected = 609118;
      expect(parsed.mim).toBe(expected);
    });

    it('should return PomBase ID', () => {
      const expected = 'SPAC24B11.06c';
      expect(parsed.pombase).toBe(expected);
    });

    it('should return sgd ID', () => {
      const expected = 'SGDTest';
      expect(parsed.sgd).toBe(expected);
    });

    it('should return TAIR ID', () => {
      const expected = 'locus:2196506';
      expect(parsed.tair).toBe(expected);
    });

    it('should return wormbase ID', () => {
      const expected = 'WBGene00003920';
      expect(parsed.wormbase).toBe(expected);
    });

    it('should return xenbase ID', () => {
      const expected = 'XB-GENE-984751';
      expect(parsed.xenbase).toBe(expected);
    });

    it('should return ZFIN ID', () => {
      const expected = 'ZFINTest';
      expect(parsed.zfin).toBe(expected);
    });
  });

  describe('no primary gene name', () => {
    it('should return null', () => {
      expect(entryParse({})).toBeNull();
    });
  });
});
