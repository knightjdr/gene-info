/* eslint indent: 0 */
import links from './link';
import State from '../../state';

const noResult = (error, fadeClass) => (`
  <style>
    .no-result {
      margin: 0;
    }
    #tooltip h1 {
      font-size: 1em;
    }
    #tooltip ul {
      margin: 10px 0 5px 0;
    }
  </style>
  <aside
    class="theme_${State.settings.theme} close-on-click-outside ${fadeClass}"
    id="tooltip"
  >
    ${
      error
      ? `<header>An error occured</header>
        <p class="no-result">
          Please use our
          <a
            href="https://github.com/knightjdr/gene-info/issues"
            rel='noopener noreferrer'
            target="_blank"
          >
            issue tracker
          </a>
          to report bugs.
        </p>`
      : `<header>No search result</header>
        <h1>
          Search at:
        </h1>
        ${links(State.searchTerm, State.settings)}
        `
    }
  </class>
`);

export default noResult;
