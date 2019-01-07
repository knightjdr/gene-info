const goElement = (report, settings) => {
  const links = [];
  if (settings.go) {
    const accession = report.uniprot[0];
    links.push({
      database: 'AmiGO',
      href: `http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${accession}`,
    });
  }
  return links;
};

export default goElement;
