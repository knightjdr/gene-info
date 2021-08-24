import round from '../../helpers/round';

const style = `
.alternative-names > ul {
  margin: 0;
  padding-left: 30px;
}
.basic > div {
  margin-top: 5px;
}
.right {
  float: right;
}`;

const createBasicElement = (report, settings) => {
  const nodes = [];

  if (settings.basic) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      children: [],
      class: 'basic',
      tag: 'section',
    };

    if (report.synonyms && report.synonyms.length > 0) {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Synonyms' },
          { tag: 'span', textContent: report.synonyms.join(', ') },
        ],
      });
    }

    if (report.fullname) {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Name' },
          { tag: 'span', textContent: report.fullname },
        ],
      });
    }

    if (report.alternativeNames && report.alternativeNames.length > 0) {
      section.children.push({
        class: 'alternative-names',
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Alternative Names' },
          {
            tag: 'ul',
            children: report.alternativeNames.map(name => ({
              tag: 'li',
              textContent: name,
            })),
          },
        ],
      });
    }

    if (report.length) {
      const mw = report.mw ? round(report.mw / 1000) : '-';
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Length' },
          { tag: 'span', textContent: `${report.length}aa` },
          {
            class: 'right',
            tag: 'span',
            children: [
              { tag: 'h1', textContent: 'MW' },
              { tag: 'span', textContent: `${mw}kDa` },
            ],
          },
        ],
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createBasicElement;
