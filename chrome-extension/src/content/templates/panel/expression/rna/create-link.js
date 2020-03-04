const createLink = accession => (
  accession
    ? {
      href: `https://www.proteinatlas.org/${accession}/tissue`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'Protein Atlas',
    }
    : {}
);

export default createLink;
