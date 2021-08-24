/* eslint indent: 0 */

export const createDiseaseElement = (path) => {
  const links = [];
  if (path.mim) {
    links.push({
      href: `http://www.omim.org/entry/${path.mim}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: `OMIM: ${path.mim}`,
    });
  }
  if (path.uniprotID) {
    links.push({
      href: `https://www.uniprot.org/diseases/${path.uniprotID}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: `UniProt: ${path.uniprotID}`,
    });
  }

  const element = {
    class: 'pathology-condition',
    tag: 'div',
    children: [],
  };

  if (path.name) {
    element.children.push({
      tag: 'h2',
      textContent: path.name,
    });
  }
  if (links.length > 0) {
    element.children.push({
      children: links,
      class: 'links links_comma',
      tag: 'span',
    });
  }
  element.children.push({
    tag: 'p',
    textContent: path.description,
  });

  return element;
};

const style = `
.pathology h2 {
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  margin: 0;
  margin-bottom: 1px;
}
.pathology p {
  margin: 5px 0 0 0;
}
.pathology .links {
  display: inline-flex;
}
.pathology .links a:not(:first-child) {
  margin-left: 4px;
}
.pathology-condition:not(:last-child) {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 8px;
  padding-bottom: 8px;
}`;

const createPathologyElement = (report, settings) => {
  const nodes = [];

  if (settings.pathology) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const links = [];
    if (report.mim) {
      links.push({
        href: `https://www.omim.org/entry/${report.mim}`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'OMIM',
      });
    }
    links.push({
      href: `https://www.uniprot.org/uniprot/${accession}#pathology_and_biotech`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'UniProt - pathology',
    });

    const section = {
      class: 'details pathology',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'PATHOLOGY' },
            {
              children: links,
              class: 'links links_comma',
              tag: 'span',
            },
          ],
        },
      ],
    };

    if (report.pathology && report.pathology.length > 0) {
      section.children.push(...report.pathology.map(createDiseaseElement));
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no pathology data',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createPathologyElement;
