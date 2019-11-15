/* eslint indent: 0 */
import links from './link';
import position from '../position';
import speciesSelect from './species';
import State from '../../state';

const noResult = (error = false, stateStyle, fadeClass) => {
  const style = position(stateStyle, false);
  return `
    <style>
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
      }
    </style>
    <aside
      class="panel_small theme_${State.settings.theme} close-on-click-outside ${fadeClass}"
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
        : `<h1 class="no-result">No search result</h1>
          <p class="species-notification">
            Your currently selected species is:
          </p>
          ${speciesSelect(State.settings.species)}
          <h1>Search at:</h1>
          ${links(State.searchTerm, State.settings)}
          ${
            !State.settings.ctrl
            ? `<div class="ctrl-notification">
              <strong>"CTRL/⌘ required" not enabled</strong>
              If you are double-clicking for purposes other than activating GIX, you
              can further control its activation by toggling the "CTRL/⌘ required" option.
              This will require the control (Linux/Windows) or command (Mac) key be pressed
              while double-clicking to trigger activation.
            </div>`
            : ''
          }
          `
      }
    </aside>
  `;
};

export default noResult;
