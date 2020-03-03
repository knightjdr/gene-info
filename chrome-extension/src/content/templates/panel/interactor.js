import removeAllChildren from '../../helpers/remove-all-children';
import sortIcon from '../assets/sort';
import sortUpIcon from '../assets/sort-up';
import addNodes from '../../helpers/add-nodes';

const createRowNode = (interactors) => {
  const nodes = [];

  interactors.forEach((interactor) => {
    const tr = {
      tag: 'tr',
      children: [
        { tag: 'td', textContent: interactor.gene },
        {
          class: 'interactor-list-toggle',
          'data-gene': interactor.gene,
          tag: 'td',
          children: [
            { tag: 'div', textContent: interactor.biogrid.length },
            {
              class: `interactor__method-list interactor-list-${interactor.gene}`,
              tag: 'ul',
              children: interactor.biogrid.map(method => ({
                tag: 'li',
                textContent: method,
              })),
            },
          ],
        },
        {
          class: 'interactor-list-toggle',
          'data-gene': interactor.gene,
          tag: 'td',
          children: [
            { tag: 'div', textContent: interactor.intact.length },
            {
              class: `interactor__method-list interactor-list-${interactor.gene}`,
              tag: 'ul',
              children: interactor.intact.map(method => ({
                tag: 'li',
                textContent: method,
              })),
            },
          ],
        },
      ],
    };

    nodes.push(tr);
  });

  return nodes;
};

export const updateRows = (tbody, interactors) => {
  removeAllChildren(tbody);
  addNodes(tbody, createRowNode(interactors));
};

const style = `
.interactor .links {
  display: inline-flex;
}
.interactor .links a:not(:first-child) {
  margin-left: 4px;
}
.interactor-table {
  table-layout: fixed;
}
.interactor-table th:first-child {
  width: 100px;
}
.interactor-table th:not(:first-child) {
  width: calc((100% - 100px) / 2);
}
.interactor-table th button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: auto;
  padding: 2px;
}
.interactor-table th button:focus {
  outline: none;
}
.interactor-table th svg path {
  fill: var(--text-contrast);
}
.interactor-table td:not(:first-child) {
  cursor: pointer;
  text-align: center;
  vertical-align: top;
}
.interactor__method-list {
  border-top: 1px dotted #d0d0d0;
  display: none;
  font-size: 0.8em;
  list-style: none;
  margin: 0;
  padding-left: 0;
  text-align: left;
  width: auto;
  word-break: break-word;
}
.interactor__method-list li {
  margin: 0;
}`;

const createInteractorElement = (report, settings) => {
  const nodes = [];
  if (settings.interactors) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const links = [];
    if (report.biogrid) {
      links.push({
        href: `https://thebiogrid.org/${report.biogrid}`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'BioGRID',
      });
    }
    links.push({
      href: `https://www.ebi.ac.uk/intact/query/${accession}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'IntAct',
    });

    const section = {
      class: 'details interactor',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'INTERACTORS' },
            { tag: 'span', children: links },
          ],
        },
      ],
    };

    console.log(section);

    nodes.push(section);
  }

  return nodes;

  /* if (settings.interactors) {
    html = `
      <section class="details interactor">
        ${
          report.interactors && report.interactors.length > 0
          ? `
            <p class="details-description">
              The values in the table indicate the number of different methods
              that have been used to detect the interaction partner (target) as
              reported by each database. Click on a table cell to view the list
              of methods.
            </p>
            <table class="interactor-table">
              <thead>
                <tr>
                  <th>
                    Target
                    <button
                      id="interactor_gene"
                      type="button"
                    >
                      ${sortUpIcon}
                    </button>
                  </th>
                  <th>
                    BioGRID
                    <button
                      id="interactor_biogrid"
                      type="button"
                    >
                      ${sortIcon}
                    </button>
                  </th>
                  <th>
                    IntAct
                    <button
                      id="interactor_intact"
                      type="button"
                    >
                      ${sortIcon}
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody id="interactor_tbody">
                ${createRowNode(report.interactors)}
              </tbody>
            </table>
          `
          : '<div class="none">no known interactors</div>'
        }
      </section>
    `;
  }
  return html; */
};

export default createInteractorElement;
