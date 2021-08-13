const createHeading = (report) => {
  const { essentiality, gene } = report;

  const nodes = [];

  const linkSymbol = essentiality.sourceSymbol || gene;
  nodes.push({
    class: 'details-header',
    tag: 'div',
    children: [
      { tag: 'h1', textContent: 'ESSENTIALITY' },
      {
        class: 'essentiality__link',
        href: `https://depmap.org/portal/gene/${linkSymbol}?tab=overview`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'DepMap',
      },
    ],
  });

  nodes.push({
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
  });

  return nodes;
};

export default createHeading;
