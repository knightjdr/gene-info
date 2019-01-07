const domainElement = (report, settings) => {
  const links = [];
  if (settings.domain) {
    const accession = report.uniprot[0];
    links.push({
      database: 'Pfam',
      href: `http://pfam.xfam.org/protein/${accession}`,
    });
  }
  return links;
};

export default domainElement;
