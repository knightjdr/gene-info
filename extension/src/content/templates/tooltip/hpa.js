const hpaElement = (report, settings) => {
  const links = [];
  if (
    settings.species === 'Homo sapiens'
    && report['ensembl-gene'][0]
    && (
      settings.rna_expression
      || (
        settings.localization
        && settings.localization_hpa
      )
    )
  ) {
    links.push({
      database: 'Protein Atlas',
      href: `https://www.proteinatlas.org/${report['ensembl-gene'][0]}/cell`,
    });
  }
  return links;
};

export default hpaElement;
