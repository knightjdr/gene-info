import createLinkList from './link';
import createSpeciesNode from './species';
import position from '../position';
import State from '../../state';

const style = `
.ctrl-notification {
  border-top: 1px solid #d0d0d0;
  font-size: 0.9em;
  padding-top: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.ctrl-notification strong {
  color: var(--warning);
  display: block;
  margin-bottom: 5px;
}
.no-result {
  margin: 0;
}
.panel_small {
  min-width: unset;
  width: auto;
}
.panel_small h1 {
  font-size: 1em;
  margin-right: 10px;
}
.panel_small ul {
  margin: 10px 10px 5px 0;
}
.panel_small .action-button:not(#resize) {
  visibility: visible;
}
.panel_small #back {
  right: 46px;
}
.panel_small #close {
  right: 0px;
}
.panel_small #drag {
  right: 23px;
}
.panel_small #resize {
  display: none;
}
.panel_small .no-result {
  width: calc(100% - 60px);
}
.slim-select-style {
  max-width: calc(100% - 15px);
}
.slim-select-style > option {
  padding: 0;
}
.species-notification {
  margin: 5px 10px 5px 0;
}`;

const addControlNotification = show => (
  show
    ? {
      class: 'ctrl-notification',
      tag: 'div',
      children: [
        {
          tag: 'strong',
          textContent: '"CTRL/⌘ required" not enabled',
        },
        {
          tag: 'p',
          textContent: `If you are double-clicking for purposes other than activating GIX, you
          can further control its activation by toggling the "CTRL/⌘ required" option.
          This will require the control (Linux/Windows) or command (Mac) key be pressed
          while double-clicking to trigger activation.`,
        },
      ],
    }
    : null
);

const noResult = (error = false, stateStyle, fadeClass) => {
  const positionStyle = position(stateStyle, false);
  const aside = {
    class: `panel_small theme_${State.settings.theme} close-on-click-outside ${fadeClass}`,
    id: 'panel',
    style: positionStyle,
    tag: 'aside',
  };

  if (error) {
    aside.children = [{
      class: 'no-result',
      tag: 'p',
      children: [
        { tag: 'span', textContent: 'An error occured. Please use our ' },
        {
          href: 'https://github.com/knightjdr/gene-info/issues',
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: 'issue tracker',
        },
        { tag: 'span', textContent: ' to report bugs.' },
      ],
    }];
  } else {
    aside.children = [
      {
        class: 'no-result',
        tag: 'h1',
        textContent: 'No search result',
      },
      {
        class: 'species-notification',
        tag: 'p',
        textContent: 'Your currently selected species is:',
      },
      createSpeciesNode(State.settings.species),
      {
        tag: 'h1',
        textContent: 'Search at:',
      },
      createLinkList(State.searchTerm, State.settings),
      addControlNotification(!State.settings.ctrl),
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

export default noResult;
