const essentialityElement = (report, settings) => {
  const links = [];
  if (
    settings.species === 'Homo sapiens'
    && settings.essentiality
    && report.essentiality.cells
    && Object.keys(report.essentiality.cells).length
  ) {
    links.push({
      database: 'DepMap',
      href: `https://depmap.org/portal/gene/${report.gene}?tab=overview`,
    });
  }
  return links;
};

export default essentialityElement;
