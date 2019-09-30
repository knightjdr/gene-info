const proteomicsDBElement = (report) => {
  const links = [];
  if (report.proteomicsdb) {
    links.push({
      database: 'Proteomics DB',
      href: `https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${report.proteomicsdb}/summary`,
    });
  }
  return links;
};

export default proteomicsDBElement;
