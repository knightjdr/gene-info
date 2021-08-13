import goURL from '../../helpers/go-url';
import link from '../../helpers/link-svg';

const style = `
#go-buttons {
  display: flex;
  margin: 5px 0;
}
.go-button {
  background-color: var(--primary-1);
  border: 1px solid var(--primary);
  border-radius: 2px;
  color: var(--text);
  cursor: pointer;
  flex-grow: 1;
  font-size: 14px;
  margin: 0px 2px 0px 2px;
  text-align: center;
}
.go-button.active {
  background-color: var(--primary);
  color: var(--text-contrast);
}
.go-button:focus {
  background-color: var(--primary);
  color: var(--text-contrast);
  outline: none;
}
.go-terms {
  padding: 0 5px;
}
.go-terms ul {
  margin: 5px 0 8px 0;
  padding-left: 20px;
}
.go-terms a svg {
  fill: var(--primary);
}
.go-terms a:focus svg,
.go-terms a:hover svg {
  fill: var(--text);
}
.go-term {
  margin-right: 5px;
}`;

const createGoElement = (report, settings) => {
  const nodes = [];

  if (settings.go) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'GO TERMS' },
          ],
        },
      ],
    };

    const url = goURL(report, settings);
    if (url) {
      section.children[0].children.push({
        href: url,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'AmiGO',
      });
    }

    section.children.push({
      id: 'go-buttons',
      tag: 'div',
      children: ['bp', 'cc', 'mf'].map((namespace) => {
        const currentClass = namespace === settings.go_namespace
          ? 'go-button active'
          : 'go-button';
        return {
          class: currentClass,
          'data-type': namespace,
          id: `go-button-${namespace}`,
          tag: 'button',
          textContent: namespace.toUpperCase(),
          type: 'button',
        };
      }),
    });

    section.children.push(
      ...['bp', 'cc', 'mf'].map((namespace) => {
        const firstCharacter = namespace.charAt(1);
        const terms = report.go[firstCharacter];
        const element = {
          children: [],
          class: 'go-terms',
          id: `go-terms-${namespace}`,
          style: `display: ${namespace === settings.go_namespace ? 'block' : 'none'}`,
          tag: 'div',
        };

        if (terms && terms.length > 0) {
          element.children.push({
            tag: 'ul',
            children: terms.map(term => ({
              tag: 'li',
              children: [
                { tag: 'span', class: 'go-term', textContent: term.term },
                {
                  href: `http://amigo.geneontology.org/amigo/term/GO:${term.id}`,
                  rel: 'noopener noreferrer',
                  tag: 'a',
                  target: '_blank',
                  children: [link],
                },
              ],
            })),
          });
        } else {
          element.children.push({
            class: 'warning',
            tag: 'div',
            textContent: 'no terms',
          });
        }

        return element;
      }),
    );

    nodes.push(section);
  }

  return nodes;
};

export default createGoElement;
