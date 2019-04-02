import pathwayElement from './pathway';

describe('Pathway element', () => {
  describe('pathway setting on', () => {
    describe('pathway data present', () => {
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
        document.body.innerHTML = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = document.querySelector('.details-header a');
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should return a list', () => {
        const ul = document.querySelector('ul');
        expect(ul).not.toBeNull();
      });

      it('should return two list elements', () => {
        const li = document.querySelectorAll('ul li');
        expect(li.length).toBe(2);
      });

      it('should have pathway text in list links', () => {
        const li = document.querySelector('li');
        expect(li.innerHTML.trim().split(/\s+/)[0]).toBe('a');
      });

      it('should link to pathway ID in list links', () => {
        const a = document.querySelector('li a');
        const expected = 'https://reactome.org/PathwayBrowser/#1&FLG=abc';
        expect(a.href).toBe(expected);
      });
    });

    describe('pathway data empty', () => {
      beforeAll(() => {
        const report = {
          pathway: [],
          uniprot: ['abc'],
        };
        const settings = {
          pathway: true,
        };
        document.body.innerHTML = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = document.querySelector('.details-header a');
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should not return a list', () => {
        const ul = document.querySelector('ul');
        expect(ul).toBeNull();
      });

      it('should return not found text', () => {
        const div = document.querySelector('.none');
        const expected = 'no Reactome data';
        expect(div.innerHTML).toBe(expected);
      });
    });

    describe('pathway data missing', () => {
      beforeAll(() => {
        const report = {
          uniprot: ['abc'],
        };
        const settings = {
          pathway: true,
        };
        document.body.innerHTML = pathwayElement(report, settings);
      });

      it('should return a header link with UniProt accession', () => {
        const a = document.querySelector('.details-header a');
        const expected = 'https://www.uniprot.org/uniprot/abc#section_x-ref_pathway';
        expect(a.href).toBe(expected);
      });

      it('should not return a list', () => {
        const ul = document.querySelector('ul');
        expect(ul).toBeNull();
      });

      it('should return not found text', () => {
        const div = document.querySelector('.none');
        const expected = 'no Reactome data';
        expect(div.innerHTML).toBe(expected);
      });
    });
  });

  describe('pathway setting off', () => {
    let html;

    beforeAll(() => {
      const report = {};
      const settings = {
        pathway: false,
      };
      html = pathwayElement(report, settings);
    });

    it('should return an empty string', () => {
      expect(html).toBe('');
    });
  });
});
