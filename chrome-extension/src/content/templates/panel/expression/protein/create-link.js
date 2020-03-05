const createLink = accession => (
  accession
    ? {
      href: `https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${accession}/expression`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'Proteomics DB',
    }
    : {}
);

export default createLink;
