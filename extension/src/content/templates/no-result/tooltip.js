import createLinkList from './link';
import State from '../../state';

const style = `
.no-result {
  margin: 0;
}
#tooltip h1 {
  font-size: 1em;
}
#tooltip ul {
  margin: 10px 0 5px 0;
}`;

const createNoResultTooltipNodes = (error, fadeClass = '') => {
  const aside = {
    class: `theme_${State.settings.theme} close-on-click-outside ${fadeClass}`,
    id: 'tooltip',
    tag: 'aside',
  };

  if (error) {
    aside.children = [
      { tag: 'header', textContent: 'An error occured' },
      {
        children: [
          { tag: 'span', textConent: 'Please use our ' },
          {
            href: 'https://github.com/knightjdr/gene-info/issues',
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'issue tracker',
          },
          { tag: 'span', textConent: ' to report bugs.' },
        ],
        class: 'no-result',
        tag: 'p',
      },
    ];
  } else {
    aside.children = [
      { tag: 'header', textContent: 'No search result' },
      { tag: 'h1', textContent: 'Search at:' },
      createLinkList(State.searchTerm, State.settings),
    ];
  }

  return [
    {
      tag: 'style',
      textContent: style,
    },
    aside,
  ];
};

export default createNoResultTooltipNodes;
