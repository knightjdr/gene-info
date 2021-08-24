const style = `
.description p {
  display: inline;
  margin: 0;
}`;

const createDescriptionElement = (report, settings) => {
  const nodes = [];

  if (settings.description && report.description) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'description',
      tag: 'section',
      children: [
        { tag: 'h1', textContent: 'Description' },
        { tag: 'p', textContent: report.description },
      ],
    };

    nodes.push(section);
  }

  return nodes;
};

export default createDescriptionElement;
