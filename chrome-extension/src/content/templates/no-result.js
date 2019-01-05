/* eslint indent: 0 */

const noResult = (error = false) => (`
  <style>
    .no-result {
      margin: 0;
    }
    .panel_small {
      min-width: unset;
      padding: 8px 35px 8px 5px;
      width: auto;
    }
    .panel_small .action-button:not(#resize) {
      visibility: visible;
    }
    .panel_small #resize {
      display: none;
    }
  </style>
  <aside
    class="panel_small"
    id="panel"
  >
    <p class="no-result">${
      error
        ? 'There was error with your search'
        : 'No gene information available'
    }</p>
  </aside>
`);

export default noResult;
