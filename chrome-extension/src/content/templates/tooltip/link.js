const linkElement = (report, settings) => {
  const links = [];
  if (settings.links) {
    if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
      const accession = report['ensembl-gene'][0];
      links.push({
        database: 'Ensembl',
        href: `https://ensembl.org/Gene/Summary?g=${accession}`,
      });
    }
    if (settings.species === 'Drosophila melanogaster' && report.flybase) {
      links.push({
        database: 'FlyBase',
        href: `https://flybase.org/reports/${report.flybase}`,
      });
    }
    if (report.geneid) {
      links.push({
        database: 'NCBI',
        href: `https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}`,
      });
    }
    if (settings.species === 'Saccharomyces cerevisiae' && report.sgd) {
      links.push({
        database: 'SGD',
        href: `https://www.yeastgenome.org/locus/${report.sgd}`,
      });
    }
    if (report.uniprot && report.uniprot.length > 0) {
      const accession = report.uniprot[0];
      links.push({
        database: 'UniProt',
        href: `https://www.uniprot.org/uniprot/${accession}`,
      });
      if (settings.species === 'Homo sapiens') {
        links.push({
          database: 'neXtProt',
          href: `https://www.nextprot.org/entry/NX_${accession}`,
        });
      }
    }
  }
  return links;
};

export default linkElement;
