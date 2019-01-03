/* eslint indent: 0 */

const geneElement = (result, reportIndex, fullname = false) => {
  const report = result[0];
  if (result.length === 1) {
    return fullname ? report.fullname : report.gene;
  }
  return `
    <select id="gene-info__select">
      ${
        result.map((gene, index) => {
          const displayName = fullname ? gene.fullname : gene.gene;
          const synonyms = gene.synonyms.length === 0
          ? 'none'
          : gene.synonyms.join(', ');
          const props = [
            `title="Synonyms: (${synonyms})"`,
            `value="${index}"`,
          ];
          if (index === reportIndex) {
            props.push('selected');
          }
          return `
            <option ${props.join(' ')}>
              ${displayName}
            </option>
          `;
        })
      }.join('\n');
    </select>
  `;
};

export default geneElement;
