const noResult = () => (`
  <style>
    .no-result {
      margin: 0;
    }
    .panel_small {
      min-width: unset;
      padding: 8px 35px 8px 5px;
      width: auto;
    }
    .panel_small .action-button {
      visibility: visible;
    }
  </style>
  <aside
    class="panel_small"
    id="panel"
  >
    <p class="no-result">No gene information available</p>
  </aside>
`);

export default noResult;
