/* eslint indent: 0 */

const noResult = (error = false) => (`
  <style>
    .no-result {
      margin: 0;
    }
    .panel_small {
      min-width: unset;
      width: auto;
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
    class="panel_small"
    id="panel"
  >
    <p class="no-result">${
      error
        ? `
          An error occured. Please use our
          <a
            href="https://github.com/knightjdr/gene-info/issues"
            rel='noopener noreferrer'
            target="_blank"
          >
            issue tracker
          </a>
          to report bugs.
        `
        : 'No gene information available'
    }</p>
  </aside>
`);

export default noResult;
