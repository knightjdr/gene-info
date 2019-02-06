import buttonStyle from './button';
import linkStyle from './link';
import theme from './theme';

const panelStyle = `
  ${theme}
  ${buttonStyle}
  ${linkStyle}
  <style>
    #panel {
      background-color: var(--background);
      border-radius: 2px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      box-sizing: border-box;
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 14px;
      line-height: 1.3em;
      max-height: calc(100vh - 10px);
      min-width: 300px;
      padding: 5px 0px 5px 8px;
      position: fixed;
      right: 5px;
      top: 5px;
      text-align: left;
      width: calc(25vw);
      z-index: 2147483647;
    }
    #panel.theme_dark {
      background-color: var(--background_dark);
      color: var(--text_dark);
    }
    #panel.theme_default {
      background-color: var(--background);
      color: var(--text);
    }
    #panel:hover .action-button {
      visibility: visible;
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
    .theme_dark select:focus {
      box-shadow: 0px 0px 1px var(--primary_dark);
      outline: none;
    }
    .theme_dark select:focus {
      box-shadow: 0px 0px 1px var(--primary);
      outline: none;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    .theme_dark thead tr {
      background-color: var(--primary_dark);
      color: var(--text-contrast_dark);
    }
    .theme_default thead tr {
      background-color: var(--primary);
      color: var(--text-contrast);
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
    .theme_dark tbody tr:nth-child(even) {
      background-color: var(--primary-1_dark);
    }
    .theme_default tbody tr:nth-child(even) {
      background-color: var(--primary-1);
    }
    li {
      margin: 2px 0;
    }

    .panel__inner {
      box-sizing: border-box;
      max-height: calc(100vh - 25px);
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
      border-radius: 20px;
    }
    .panel__inner::-webkit-scrollbar-track {
      border-radius: 20px;
    }
    .theme_dark .panel__inner::-webkit-scrollbar-thumb {
      background: var(--thumb_dark);
    }
    .theme_dark .panel__inner::-webkit-scrollbar-track {
      background: var(--track_dark);
    }
    .theme_default .panel__inner::-webkit-scrollbar-thumb {
      background: var(--thumb);
    }
    .theme_default .panel__inner::-webkit-scrollbar-track {
      background: var(--track);
    }

    .bevel {
      border-top: 2px groove #e6e6e6;
      margin-top: 10px;
      padding-top: 8px;
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
