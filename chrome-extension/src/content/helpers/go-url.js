const goURL = (report, settings) => {
  const base = 'http://amigo.geneontology.org/amigo/gene_product/';
  switch (settings.species) {
    case 'Arabidopsis thaliana':
      if (report.tair) {
        return `${base}TAIR:${report.tair}`;
      }
      break;
    case 'Caenorhabditis elegans':
      if (report.wormbase) {
        return `${base}WB:${report.wormbase}`;
      }
      break;
    case 'Danio rerio':
      if (report.zfin) {
        return `${base}ZFIN:${report.zfin}`;
      }
      break;
    case 'Dictyostelium discoideum':
      if (report.dictybase) {
        return `${base}dictyBase:${report.dictybase}`;
      }
      break;
    case 'Drosophila melanogaster':
      if (report.flybase) {
        return `${base}FB:${report.flybase}`;
      }
      break;
    case 'Mus musculus':
      if (report.mgi) {
        return `${base}MGI:${report.mgi}`;
      }
      break;
    case 'Saccharomyces cerevisiae':
      if (report.sgd) {
        return `${base}SGD:${report.sgd}`;
      }
      break;
    default:
      return `http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${report.uniprot[0]}`;
  }
  return null;
};

module.exports = goURL;
