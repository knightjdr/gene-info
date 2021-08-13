const domainElement = (report, settings) => {
  const links = [];
  if (settings.domain || settings.region) {
    const accession = report.uniprot[0];
    links.push({
      database: 'Pfam',
      href: `http://pfam.xfam.org/protein/${accession}`,
    });
  }
  return links;
};

export default domainElement;
