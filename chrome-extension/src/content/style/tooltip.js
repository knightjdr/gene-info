import buttonStyle from './button';
import linkStyle from './link';
import theme from './theme';

const panelStyle = `
  ${theme}
  ${buttonStyle}
  ${linkStyle}
  <style>
    #backdrop {
      height: 100vh;
      left: 0px;
      position: fixed;
      top: 0px;
      width: 100vw;
      z-index: 10000;
      z-index: 2147483646;
    }
    #tooltip {
      border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      display: inline-block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 14px;
      height: auto;
      max-width: 300px;
      opacity: 0;
      padding: 5px 10px 5px 10px;
      position: relative;
      width: auto;
      z-index: 2147483647;
    }
    #tooltip.theme_dark {
      background-color: var(--background_dark);
      color: var(--text_dark);
    }
    #tooltip.theme_default {
      background-color: var(--background);
      color: var(--text);
    }
    #tooltip:hover .action-button {
      visibility: visible;
    }
    #tooltip #close {
      right: -5px;
    }
    
    header {
      padding: 0 20px;
      text-align: center;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    section a {
      margin: 5px;
    }
  </style>
`;

export default panelStyle;
