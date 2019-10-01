const createLink = accession => (
  accession
    ? `
      <a
        href="https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${accession}/expression"
        rel="noopener noreferrer"
        target="_blank"
      >
        Proteomics DB
      </a>
    `
    : ''
);

export default createLink;
