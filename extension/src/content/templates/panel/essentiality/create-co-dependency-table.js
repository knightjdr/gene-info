const isCoDependencyDataAvailable = essentiality => (
  essentiality
  && essentiality.coDependencies
  && essentiality.coDependencies.length > 0
);

const createCoDependencyTable = (essentiality, settings) => {
  const { essentiality_codependencies: noRequestedCoDependencies } = settings;

  if (noRequestedCoDependencies <= 0) {
    return [];
  }

  const nodes = [];
  nodes.push({
    class: 'essentiality__codependencies',
    tag: 'h2',
    textContent: 'Co-dependencies',
  });

  if (!isCoDependencyDataAvailable(essentiality)) {
    nodes.push(
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no co-dependency data available',
      },
    );
  } else {
    const topCoDependencies = essentiality.coDependencies.slice(0, noRequestedCoDependencies);

    nodes.push({
      class: 'essentiality__table',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'Gene' },
                { tag: 'td', textContent: 'Pearson' },
              ],
            },
          ],
        },
        {
          tag: 'tbody',
          children: topCoDependencies.map(([gene, value]) => ({
            tag: 'tr',
            children: [
              {
                tag: 'td',
                textContent: gene,
              },
              {
                tag: 'td',
                textContent: value,
              },
            ],
          })),
        },
      ],
    });
  }

  return nodes;
};

export default createCoDependencyTable;
