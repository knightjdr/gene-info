const depmapElement = (report, settings) => {
  const links = [];
  if (
    settings.species === 'Homo sapiens'
    && settings.depmap
    && report?.depmap?.cells
    && Object.keys(report.depmap.cells).length
  ) {
    links.push({
      database: 'DepMap',
      href: `https://depmap.org/portal/gene/${report.gene}?tab=overview`,
    });
  }
  return links;
};

export default depmapElement;
