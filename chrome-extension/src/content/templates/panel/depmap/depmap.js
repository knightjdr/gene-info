import link from '../../../helpers/link-svg';

const style = `
.depmap-link svg {
  fill: var(--primary);
}
.depmap-link:focus svg,
.depmap-link:hover svg {
  fill: var(--text);
}
.depmap-stats {
  margin: 0 0 10px 0;
  list-style-type: none;
}
.depmap-table {
  margin-top: 5px;
}
.depmap-table td {
  text-align: center;
}`;

const getRequestedCellData = (data, cells) => (
  cells.map(cell => ({
    cell,
    value: data[cell] || '-',
  }))
);

const createDepmapElement = (report, settings) => {
  const nodes = [];

  if (settings.depmap) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const { depmap, gene } = report;
    const heading = 'DEPMAP';
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
              children: [link],
              class: 'depmap-link',
              href: `https://depmap.org/portal/gene/${gene}?tab=overview`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
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
              textContent: ` is a cancer cell dependency map that includes genome-scale
              CRISPR–Cas9 essentiality screens across cancer cell lines. The CERES score
              is an estimate of gene dependency with scores of 0 and -1 representing the median for
              nonessential genes and common core essential genes, respectively.`,
            },
          ],
        },
      ],
    };

    if (depmap && Object.keys(depmap.cells).length > 0) {
      const noCells = Object.keys(depmap.cells).length;
      const requestedData = getRequestedCellData(depmap.cells, settings.depmap_tissues);

      section.children.push({
        tag: 'h2',
        textContent: 'Stats (CERES score)',
      });

      section.children.push({
        class: 'depmap-stats',
        tag: 'ul',
        children: [
          {
            tag: 'li',
            textContent: `Mean: ${depmap.stats.mean}`,
          },
          {
            tag: 'li',
            textContent: `Median: ${depmap.stats.median}`,
          },
          {
            tag: 'li',
            textContent: `SD: ${depmap.stats.sd}`,
          },
          {
            tag: 'li',
            textContent: `No. cell lines: ${noCells}`,
          },
        ],
      });

      section.children.push({
        class: 'depmap-table',
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
        class: 'none',
        tag: 'div',
        textContent: warning,
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createDepmapElement;
