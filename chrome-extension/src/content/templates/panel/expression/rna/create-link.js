const createLink = accession => (
  accession
    ? `
      <a
        href="https://www.proteinatlas.org/${accession}/tissue"
        rel="noopener noreferrer"
        target="_blank"
      >
        Protein Atlas
      </a>
    `
    : ''
);

export default createLink;
