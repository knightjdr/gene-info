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

  it('should detect gene', () => {
    const term = 'PDCD10';
    expect(detectField(term)).toBe('gene');
  });

  it('should detect gene id', () => {
    const term = '11235';
    expect(detectField(term)).toBe('geneid');
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
});
