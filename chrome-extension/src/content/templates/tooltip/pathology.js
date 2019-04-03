const pathologyElement = (report, settings) => {
  const links = [];
  if (settings.pathology && report.mim) {
    links.push({
      database: 'OMIM',
      href: `https://www.omim.org/entry/${report.mim}`,
    });
  }
  return links;
};

export default pathologyElement;
