import config from '../../../../config';

const style = `
.essentiality-link svg {
  fill: var(--primary);
}
.essentiality-link:focus svg,
.essentiality-link:hover svg {
  fill: var(--text);
}
.essentiality-stats {
  display: grid;
  gap: 4px;
  grid-template-columns: auto 1fr auto 1fr;
  margin: 5px 0;
}
.essentiality-stats > :nth-child(odd) {
  font-weight: bold;
  justify-self: end;
}
.essentiality-table {
  margin-top: 5px;
}
.essentiality-table td {
  text-align: center;
}`;

const getRequestedCellData = (data, cells) => (
  cells.map(cell => ({
    cell,
    value: data[cell] || '-',
  }))
);

const shouldShowData = (showEssentiality, species, data) => (
  showEssentiality
  && data[species]
  && data[species].cells.length > 0
);

const createEssentialityElement = (report, settings) => {
  const nodes = [];

  if (shouldShowData(settings.essentiality, settings.species, config.tissues.essentiality)) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const { essentiality, gene } = report;
    const heading = 'ESSENTIALITY';
    const warning = 'no data reported';

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: heading },
            {
              class: 'essentiality-link',
              href: `https://depmap.org/portal/gene/${gene}?tab=overview`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'DepMap',
            },
          ],
        },
        {
          class: 'details-description',
          tag: 'p',
          children: [
            {
              href: 'https://depmap.org/portal/',
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'DepMap',
            },
            {
              tag: 'span',
              textContent: ` is a cell dependency map that includes genome-scale
              CRISPR–Cas9 essentiality screens across cancer cell lines. The CERES score
              is an estimate of gene dependency with scores of 0 and -1 representing the median for
              nonessential genes and common core essential genes, respectively.`,
            },
          ],
        },
      ],
    };

    if (essentiality && essentiality.cells && Object.keys(essentiality.cells).length > 0) {
      const noCells = Object.keys(essentiality.cells).length;
      const requestedData = getRequestedCellData(essentiality.cells, settings.essentiality_tissues);

      section.children.push({
        class: 'essentiality-stats',
        tag: 'div',
        children: [
          {
            tag: 'span',
            textContent: 'No. cell lines:',
          },
          {
            tag: 'span',
            textContent: noCells,
          },
          {
            tag: 'span',
            textContent: 'Median:',
          },
          {
            tag: 'span',
            textContent: essentiality.stats.median,
          },
          {
            tag: 'span',
            textContent: 'Mean:',
          },
          {
            tag: 'span',
            textContent: essentiality.stats.mean,
          },
          {
            tag: 'span',
            textContent: 'SD:',
          },
          {
            tag: 'span',
            textContent: essentiality.stats.sd,
          },
        ],
      });

      section.children.push({
        class: 'essentiality-table',
        tag: 'table',
        children: [
          {
            tag: 'thead',
            children: [
              {
                tag: 'tr',
                children: [
                  { tag: 'td', textContent: 'Cell' },
                  { tag: 'td', textContent: 'CERES' },
                ],
              },
            ],
          },
          {
            tag: 'tbody',
            children: requestedData.map(datum => ({
              tag: 'tr',
              children: [
                {
                  tag: 'td',
                  textContent: datum.cell,
                },
                {
                  tag: 'td',
                  textContent: datum.value,
                },
              ],
            })),
          },
        ],
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: warning,
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createEssentialityElement;
