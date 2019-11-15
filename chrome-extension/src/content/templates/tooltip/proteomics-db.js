const proteomicsDBElement = (report, settings) => {
  const links = [];
  if (
    settings.protein_expression
    && report.proteomicsdb
  ) {
    links.push({
      database: 'Proteomics DB',
      href: `https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${report.proteomicsdb}/summary`,
    });
  }
  return links;
};

export default proteomicsDBElement;
