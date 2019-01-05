const panelStyle = `
  <style>
    #panel {
      --primary: #658170;
      --primary-1: #b8c7be;
      --primary-2: #d4ddd8;
      --primary-3: #e2e9e5;
      --text-light: #f5f5f5;
      background-color: #fafafa;
      border-radius: 2px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      color: #333333;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 14px;
      line-height: 1.3em;
      max-height: calc(100vh - 25px);
      min-width: 300px;
      padding: 5px 0px 5px 8px;
      position: fixed;
      right: 5px;
      top: 5px;
      text-align: left;
      width: calc(.25vw);
      z-index: 2147483647;
    }
    #panel:hover .action-button {
      visibility: visible;
    }

    a {
      text-decoration: none;
    }
    a:link,
    a:visited {
      color: var(--primary);
      cursor: pointer;
      border-bottom: none;
    }
    a:hover,
    a:active,
    a:focus {
      border-bottom: 1px dotted var(--primary);
    }
    section h1 {
      display: inline;
      font-size: 14px;
      font-weight: bold;
      margin: 0;
    }
    section h1::after {
      content: ':';
      margin-right: 3px;
    }
    select:focus {
      box-shadow: 0px 0px 1px var(--primary);
      outline: none;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    thead tr {
      background-color: var(--primary);
      color: var(--text-light);
    }
    th {
      padding: 2px 0;
      text-align: center;
    }
    th:first-of-type {
      border-top-left-radius: 2px;
    }
    th:last-of-type {
      border-top-right-radius: 2px;
    }
    td {
      padding: 2px;
    }
    tbody tr:nth-child(even) {
      background-color: var(--primary-3);
    }
    li {
      margin: 2px 0;
    }

    .panel__inner {
      max-height: calc(100vh - 35px);
      overflow-x: none;
      overflow-y: auto;
      padding-right: 8px;
    }
    .panel__inner > section:not(:last-of-type) {
      margin-bottom: 5px;
    }
    .panel__inner::-webkit-scrollbar {
      width: 8px;
    }
    .panel__inner::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 20px;
    }
    .panel__inner::-webkit-scrollbar-track {
      background: #eee;
      border-radius: 20px;
    }

    .action-button {
      background-color: transparent;
      border: none;
      box-shadow: none;
      cursor: pointer;
      position: absolute;
      top: 2px;
      visibility: hidden;
    }
    .action-button:focus {
      outline: 0;
    }
    #back {
      right: 56px;
    }
    #close {
      right: 10px;
    }
    #drag {
      right: 33px;
    }

    .bevel {
      border-top: 2px groove #e6e6e6;
    }
    .gene-info__details {
      padding-bottom: 5px;
    }
    .details-header {
      border-bottom: 1px solid #d0d0d0;
      display: inline-block;
      margin-bottom: 5px;
      padding: 4px 0 3px 0;
    }
    .details-description {
      margin-top: 0px;
      margin-bottom: 8px;
      text-align: justify;
    }

    .none {
      display: block;
      text-align: center;
    }

    @media (max-width: 309) {
      .panel {
        min-width: calc(1vw - 10px);
        width: calc(1vw - 10px);
      }
    }
  </style>
`;

export default panelStyle;
