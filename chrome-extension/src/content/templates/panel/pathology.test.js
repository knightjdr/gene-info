import pathologyElement, { createDiseaseElement } from './pathology';

describe('Disease section', () => {
  describe('with links and name', () => {
    let nodes;

    beforeAll(() => {
      const pathology = {
        description: 'disease description',
        mim: 123,
        name: 'disease name',
        uniprotID: 'abc',
      };
      nodes = createDiseaseElement(pathology);
    });

    describe('header', () => {
      let h2;

      beforeAll(() => {
        [h2] = nodes.children;
      });

      it('should display header', () => {
        expect(h2).not.toBeNull();
      });

      it('should have disease name', () => {
        expect(h2.textContent).toBe('disease name');
      });
    });

    describe('links', () => {
      let links;

      beforeAll(() => {
        [, links] = nodes.children;
      });

      it('should show two links', () => {
        expect(links.children.length).toBe(2);
      });

      it('should have OMIM href for first link', () => {
        const expected = 'http://www.omim.org/entry/123';
        expect(links.children[0].href).toBe(expected);
      });

      it('should have Uniprot href for second link', () => {
        const expected = 'https://www.uniprot.org/diseases/abc';
        expect(links.children[1].href).toBe(expected);
      });
    });

    it('should show paragraph', () => {
      const p = nodes.children[2];
      expect(p.textContent).toBe('disease description');
    });
  });

  describe('with no links or name', () => {
    let nodes;

    beforeAll(() => {
      const pathology = {
        description: 'disease description',
      };
      nodes = createDiseaseElement(pathology);
    });

    it('should show paragraph', () => {
      const p = nodes.children[0];
      expect(p.textContent).toBe('disease description');
    });
  });
});

describe('Pathology element', () => {
  describe('pathology setting on', () => {
    describe('pathology data present', () => {
      let nodes;

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
        nodes = pathologyElement(report, settings);
      });

      describe('header links', () => {
        let links;

        beforeAll(() => {
          [, links] = nodes[1].children[0].children;
        });

        it('should return a header link with MIM ID', () => {
          const expected = 'https://www.omim.org/entry/123';
          expect(links.children[0].href).toBe(expected);
        });

        it('should return a header link with UniProt accession', () => {
          const expected = 'https://www.uniprot.org/uniprot/abc#pathology_and_biotech';
          expect(links.children[1].href).toBe(expected);
        });
      });

      it('should return pathology section', () => {
        const div = nodes[1].children[1];
        expect(div.class).toBe('pathology-condition');
      });
    });

    describe('pathway data empty', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          pathology: [],
          mim: 123,
          uniprot: ['abc'],
        };
        const settings = {
          pathology: true,
        };
        nodes = pathologyElement(report, settings);
      });

      it('should return pathology section', () => {
        const div = nodes[1].children[1];
        const expected = 'no pathology data';
        expect(div.textContent).toBe(expected);
      });
    });

    describe('pathway data missing', () => {
      let nodes;

      beforeAll(() => {
        const report = {
          mim: 123,
          uniprot: ['abc'],
        };
        const settings = {
          pathology: true,
        };
        nodes = pathologyElement(report, settings);
      });

      it('should return pathology section', () => {
        const div = nodes[1].children[1];
        const expected = 'no pathology data';
        expect(div.textContent).toBe(expected);
      });
    });
  });

  describe('pathology setting off', () => {
    let nodes;

    beforeAll(() => {
      const report = {};
      const settings = {
        pathology: false,
      };
      nodes = pathologyElement(report, settings);
    });

    it('should return an empty string', () => {
      expect(nodes).toEqual([]);
    });
  });
});
