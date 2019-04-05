import pathologyElement, { diseaseSection } from './pathology';

describe('Disease section', () => {
  describe('with links and name', () => {
    beforeAll(() => {
      const pathology = {
        description: 'disease description',
        mim: 123,
        name: 'disease name',
        uniprotID: 'abc',
      };
      document.body.innerHTML = diseaseSection(pathology);
    });

    describe('header', () => {
      let h2;

      beforeAll(() => {
        h2 = document.querySelector('h2');
      });

      it('should display header', () => {
        expect(h2).not.toBeNull();
      });

      it('should have disease name', () => {
        expect(h2.textContent).toBe('disease name');
      });
    });

    describe('links', () => {
      let a;

      beforeAll(() => {
        a = document.querySelectorAll('a');
      });

      it('should show two links', () => {
        expect(a.length).toBe(2);
      });

      it('should have OMIM href for first link', () => {
        const expected = 'http://www.omim.org/entry/123';
        expect(a[0].href).toBe(expected);
      });

      it('should have Uniprot href for second link', () => {
        const expected = 'https://www.uniprot.org/diseases/abc';
        expect(a[1].href).toBe(expected);
      });
    });

    it('should show paragraph', () => {
      const p = document.querySelector('p');
      expect(p.textContent).toBe('disease description');
    });
  });

  describe('with no links or name', () => {
    beforeAll(() => {
      const pathology = {
        description: 'disease description',
      };
      document.body.innerHTML = diseaseSection(pathology);
    });

    it('should not show header', () => {
      const h2 = document.querySelector('h2');
      expect(h2).toBeNull();
    });

    it('should not show links', () => {
      const a = document.querySelectorAll('a');
      expect(a.length).toBe(0);
    });

    it('should show paragraph', () => {
      const p = document.querySelector('p');
      expect(p.textContent).toBe('disease description');
    });
  });
});

describe('Pathology element', () => {
  describe('pathology setting on', () => {
    describe('pathology data present', () => {
      beforeAll(() => {
        const report = {
          pathology: [
            {
              description: 'disease description',
              mim: 456,
              name: 'disease name',
              uniprotID: 'def',
            },
          ],
          mim: 123,
          uniprot: ['abc'],
        };
        const settings = {
          pathology: true,
        };
        document.body.innerHTML = pathologyElement(report, settings);
      });

      describe('header links', () => {
        let a;

        beforeAll(() => {
          a = document.querySelectorAll('.details-header a');
        });

        it('should return a header link with MIM ID', () => {
          const expected = 'https://www.omim.org/entry/123';
          expect(a[0].href).toBe(expected);
        });

        it('should return a header link with UniProt accession', () => {
          const expected = 'https://www.uniprot.org/uniprot/abc#pathology_and_biotech';
          expect(a[1].href).toBe(expected);
        });
      });

      it('should return pathology section', () => {
        const div = document.querySelector('.pathology-condition');
        expect(div).not.toBeNull();
      });
    });

    describe('pathway data empty', () => {
      beforeAll(() => {
        const report = {
          pathology: [],
          mim: 123,
          uniprot: ['abc'],
        };
        const settings = {
          pathology: true,
        };
        document.body.innerHTML = pathologyElement(report, settings);
      });

      it('should return pathology section', () => {
        const div = document.querySelector('.pathology-condition');
        expect(div).toBeNull();
      });
    });

    describe('pathway data missing', () => {
      beforeAll(() => {
        const report = {
          mim: 123,
          uniprot: ['abc'],
        };
        const settings = {
          pathology: true,
        };
        document.body.innerHTML = pathologyElement(report, settings);
      });

      it('should return pathology section', () => {
        const div = document.querySelector('.pathology-condition');
        expect(div).toBeNull();
      });
    });
  });

  describe('pathology setting off', () => {
    let html;

    beforeAll(() => {
      const report = {};
      const settings = {
        pathology: false,
      };
      html = pathologyElement(report, settings);
    });

    it('should return an empty string', () => {
      expect(html).toBe('');
    });
  });
});
