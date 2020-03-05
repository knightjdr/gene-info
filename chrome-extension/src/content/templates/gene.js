const style = `
.slim-select-style {
  display: inline-block;
  max-width: 250px;
  min-width: 100px;
  width: 50%;
}
.slim-select-style > option {
  padding: 0;
}`;

const createGeneElement = (result, reportIndex, fullname = false) => {
  const report = result[0];
  if (result.length === 1) {
    return {
      tag: 'header',
      textContent: fullname ? report.fullname : report.gene,
    };
  }

  return {
    tag: 'header',
    children: [
      { tag: 'style', textContent: style },
      {
        class: 'slim-select-style',
        tag: 'select',
        children: result.map((gene, index) => {
          const displayName = fullname ? gene.fullname : gene.gene;
          const synonyms = gene.synonyms.length === 0 ? 'none' : gene.synonyms.join(', ');
          const option = {
            tag: 'option',
            textContent: displayName,
            title: `Synonyms: (${synonyms})`,
            value: index,
          };
          if (index === reportIndex) {
            option.selected = true;
          }
          return option;
        }),
      },
    ],
  };
};

export default createGeneElement;
