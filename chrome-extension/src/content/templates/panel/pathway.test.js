import pathwayElement from './pathway';

describe('Pathway element', () => {
  describe('pathway setting on', () => {
    describe('pathway data present', () => {
      let nodes = [];
      beforeAll(() => {
        const report = {
          pathway: [
            { id: 1, term: 'a' },
            { id: 2, term: 'b' },
          ],
          uniprot: ['abc'],
        };
        const settings = {
          pathway: true,
        };
        nodes = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = nodes[1].children[0].children[1];
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should return a list', () => {
        const ul = nodes[1].children[1];
        expect(ul).not.toBeNull();
        expect(ul.tag).toBe('ul');
      });

      it('should return two list elements', () => {
        const ul = nodes[1].children[1];
        expect(ul.children.length).toBe(2);
      });

      it('should have pathway text in list links', () => {
        const li = nodes[1].children[1].children[0];
        expect(li.children[0].textContent).toBe('a');
      });

      it('should link to pathway ID in list links', () => {
        const a = nodes[1].children[1].children[0].children[1];
        const expected = 'https://reactome.org/PathwayBrowser/#1&FLG=abc';
        expect(a.href).toBe(expected);
      });
    });

    describe('pathway data empty', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          pathway: [],
          uniprot: ['abc'],
        };
        const settings = {
          pathway: true,
        };
        nodes = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = nodes[1].children[0].children[1];
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should return not found text', () => {
        const div = nodes[1].children[1];
        const expected = 'no Reactome data';
        expect(div.textContent).toBe(expected);
      });
    });

    describe('pathway data missing', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          uniprot: ['abc'],
        };
        const settings = {
          pathway: true,
        };
        nodes = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = nodes[1].children[0].children[1];
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should return not found text', () => {
        const div = nodes[1].children[1];
        const expected = 'no Reactome data';
        expect(div.textContent).toBe(expected);
      });
    });
  });

  describe('pathway setting off', () => {
    let nodes;

    beforeAll(() => {
      const report = {};
      const settings = {
        pathway: false,
      };
      nodes = pathwayElement(report, settings);
    });

    it('should return an empty string', () => {
      expect(nodes).toEqual([]);
    });
  });
});
