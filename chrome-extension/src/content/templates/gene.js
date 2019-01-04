/* eslint indent: 0 */

const geneElement = (result, reportIndex, fullname = false) => {
  const report = result[0];
  if (result.length === 1) {
    return fullname ? report.fullname : report.gene;
  }
  return `
    <style>
      .gene-select {
        display: inline-block;
        max-width: 250px;
        min-width: 100px;
        width: 50%;
      }
      .gene-select > option {
        padding: 0;
      }
    </style>
    <select
      class="gene-select"
      id="gene-select"
    >
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
