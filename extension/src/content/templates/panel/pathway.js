/* eslint indent: 0 */
import link from '../../helpers/link-svg';

const style = `
.pathway {
  margin: 5px 0 8px 0;
  padding-left: 30px;
}
.pathway a svg {
  fill: var(--primary);
}
.pathway a:focus svg,
.pathway a:hover svg {
  fill: var(--text);
}
.pathway a {
  margin-left: 5px;
}
`;

const createPathwayElement = (report, settings) => {
  const nodes = [];

  if (settings.pathway) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'PATHWAYS' },
            {
              href: `https://www.uniprot.org/uniprot/${accession}#section_x-ref_pathway`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'UniProt - pathway',
            },
          ],
        },
      ],
    };

    if (report.pathway && report.pathway.length > 0) {
      section.children.push({
        class: 'pathway',
        tag: 'ul',
        children: report.pathway.map(term => ({
          tag: 'li',
          children: [
            { tag: 'span', textContent: term.term },
            {
              children: [link],
              href: `https://reactome.org/PathwayBrowser/#${term.id}&FLG=${accession}`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
            },
          ],
        })),
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no Reactome data',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createPathwayElement;
