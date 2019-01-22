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
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      links.push({
        database: 'dictyBase',
        href: `http://dictybase.org/gene/${report.dictybase}`,
      });
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
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
    if (report.mgi && settings.species === 'Mus musculus') {
      links.push({
        database: 'MGI',
        href: `http://www.informatics.jax.org/marker/${report.mgi}`,
      });
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      links.push({
        database: 'SGD',
        href: `https://www.yeastgenome.org/locus/${report.sgd}`,
      });
    }
    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      links.push({
        database: 'TAIR',
        href: `https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}`,
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
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      links.push({
        database: 'WormBase',
        href: `https://wormbase.org/species/c_elegans/gene/${report.wormbase}`,
      });
    }
    if (report.xenbase && settings.species === 'Xenopus laevis') {
      links.push({
        database: 'Xenbase',
        href: `http://www.xenbase.org/gene/showgene.do?method=display&geneId=${report.xenbase}`,
      });
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      links.push({
        database: 'ZFIN',
        href: `https://zfin.org/${report.zfin}`,
      });
    }
  }
  return links;
};

export default linkElement;
