import addNodes from '../../helpers/add-nodes';
import removeAllChildren from '../../helpers/remove-all-children';
import { sortIcon } from '../assets/sort';
import { sortUpIcon } from '../assets/sort-up';

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
                textContent: `∙ ${method}`,
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
                textContent: `∙ ${method}`,
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
.interactor-table__col_fixed {
  width: 100px;
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
            { tag: 'span', class: 'links_comma', children: links },
          ],
        },
      ],
    };

    if (report.interactors && report.interactors.length > 0) {
      section.children.push({
        class: 'details-description',
        tag: 'p',
        textContent: `The values in the table indicate the number of different methods
        that have been used to detect the interaction partner (target) as
        reported by each database. Click on a table cell to view the list
        of methods.`,
      });
      section.children.push({
        class: 'interactor-table',
        tag: 'table',
        children: [
          {
            tag: 'colgroup',
            children: [
              {
                class: 'interactor-table__col_fixed',
                tag: 'col',
              },
              {
                class: 'interactor-table__col_dynamic',
                tag: 'col',
              },
              {
                class: 'interactor-table__col_dynamic',
                tag: 'col',
              },
            ],
          },
          {
            tag: 'thead',
            children: [
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'Target',
                      },
                      {
                        children: [sortUpIcon],
                        id: 'interactor_gene',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'BioGRID',
                      },
                      {
                        children: [sortIcon],
                        id: 'interactor_biogrid',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'IntAct',
                      },
                      {
                        children: [sortIcon],
                        id: 'interactor_intact',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            children: createRowNode(report.interactors),
            id: 'interactor_tbody',
            tag: 'tbody',
          },
        ],
      });
    } else {
      section.children.push({
        class: 'none',
        tag: 'div',
        textContent: 'no known interactors',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createInteractorElement;
