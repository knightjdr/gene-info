const interactorElement = (report, settings) => {
  const links = [];
  if (
    settings.interactors
    && report.biogrid
  ) {
    links.push({
      database: 'BioGRID',
      href: `https://thebiogrid.org/${report.biogrid}`,
    });
  }
  if (settings.interactors) {
    const accession = report.uniprot[0];
    links.push({
      database: 'IntAct',
      href: `https://www.ebi.ac.uk/intact/query/${accession}`,
    });
  }
  return links;
};

export default interactorElement;
