/* eslint indent: 0 */
import links from './link';
import position from '../position';
import State from '../../state';

const noResult = (error = false, stateStyle) => {
  const style = position(stateStyle, false);
  return `
    <style>
      .no-result {
        margin: 0;
      }
      .panel_small {
        min-width: unset;
        width: auto;
      }
      .panel_small h1 {
        font-size: 1em;
      }
      .panel_small ul {
        margin: 10px 0 5px 0;
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
      .panel_small p {
        width: calc(100% - 60px);
      }
    </style>
    <aside
      class="panel_small theme_${State.settings.theme}"
      id="panel"
      style="${style}"
    >
      ${
        error
        ? `<p class="no-result">
            An error occured. Please use our
            <a
              href="https://github.com/knightjdr/gene-info/issues"
              rel='noopener noreferrer'
              target="_blank"
            >
              issue tracker
            </a>
            to report bugs.
          </p>`
        : `<p class="no-result">
            No search result
          </p>
          <h1>
            Search at:
          </h1>
          ${links(State.searchTerm, State.settings)}
          `
      }
    </aside>
  `;
};

export default noResult;
