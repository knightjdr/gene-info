const detectField = require('./detect-field');

describe('Detect field', () => {
  describe('ensembl gene', () => {
    it('should detect human id', () => {
      const term = 'ENSG00000114209';
      expect(detectField(term)).toBe('ensembl-gene');
    });

    it('should detect non-human id', () => {
      // Prefix is for Danio rerio
      const term = 'ENSDARG00000114209';
      expect(detectField(term)).toBe('ensembl-gene');
    });
  });

  describe('ensembl protein', () => {
    it('should detect human id', () => {
      const term = 'ENSP00000376506';
      expect(detectField(term)).toBe('ensembl-protein');
    });

    it('should detect non-human id', () => {
      // Prefix is for Danio rerio
      const term = 'ENSDARP00000376506';
      expect(detectField(term)).toBe('ensembl-protein');
    });
  });

  describe('Gene name', () => {
    it('should detect PDCD10', () => {
      const term = 'PDCD10';
      expect(detectField(term)).toBe('gene');
    });

    it('should detect EIF4EBP1', () => {
      const term = 'EIF4EBP1';
      expect(detectField(term)).toBe('gene');
    });
  });

  it('should detect gene id', () => {
    const term = '11235';
    expect(detectField(term)).toBe('geneid');
  });

  describe('locus', () => {
    it('should detect locus in yeast', () => {
      const species = 'Saccharomyces cerevisiae';
      const term = 'YGL190C';
      expect(detectField(term, species)).toBe('locus');
    });

    it('should not detect locus in other species', () => {
      const species = 'Homo sapiens';
      const term = 'YGL190C';
      expect(detectField(term, species)).toBe('gene');
    });
  });

  describe('Nextprot', () => {
    it('should detect O, P, Q type accession', () => {
      const term = 'NX_Q9BUL8';
      expect(detectField(term)).toBe('nextprot');
    });

    it('should detect other letter type accession', () => {
      const term = 'NX_A2BC19';
      expect(detectField(term)).toBe('nextprot');
    });

    it('should detect long accession', () => {
      const term = 'NX_A0A022YWF9';
      expect(detectField(term)).toBe('nextprot');
    });
  });

  describe('ORF', () => {
    it('should detect 6 character orfs in flies', () => {
      const species = 'Drosophila melanogaster';
      const term = 'CG1217';
      expect(detectField(term, species)).toBe('orf');
    });

    it('should detect 7 character orfs in flies', () => {
      const species = 'Drosophila melanogaster';
      const term = 'CG12217';
      expect(detectField(term, species)).toBe('orf');
    });

    it('should not detect orfs in other species', () => {
      const species = 'Homo sapiens';
      const term = 'CG12217';
      expect(detectField(term, species)).toBe('gene');
    });
  });

  describe('RefSeq', () => {
    it('should detect NP_ accession', () => {
      const term = 'NP_009148';
      expect(detectField(term)).toBe('refseq');
    });

    it('should detect NM_ accession', () => {
      const term = 'NM_007217';
      expect(detectField(term)).toBe('refseq');
    });

    it('should detect XP_ accession', () => {
      const term = 'XP_005247144';
      expect(detectField(term)).toBe('refseq');
    });

    it('should detect XM_ accession', () => {
      const term = 'XM_005247087';
      expect(detectField(term)).toBe('refseq');
    });
  });

  describe('Uniprot', () => {
    it('should detect O, P, Q type accession', () => {
      const term = 'Q9BUL8';
      expect(detectField(term)).toBe('uniprot');
    });

    it('should detect other letter type accession', () => {
      const term = 'A2BC19';
      expect(detectField(term)).toBe('uniprot');
    });

    it('should detect long accession', () => {
      const term = 'A0A022YWF9';
      expect(detectField(term)).toBe('uniprot');
    });
  });

  describe('C elegans', () => {
    it('should detect Wormbase IDs', () => {
      const term = 'WBGene00007561';
      expect(detectField(term, 'Caenorhabditis elegans')).toBe('wormbase');
    });

    describe('ORFs', () => {
      it('should detect general format', () => {
        const term = 'ZC395.2';
        expect(detectField(term, 'Caenorhabditis elegans')).toBe('orf');
      });

      it('should detect wp suffix format', () => {
        const term = 'Y46C8AL.9a:wp261';
        expect(detectField(term, 'Caenorhabditis elegans')).toBe('orf');
      });
    });
  });
});
