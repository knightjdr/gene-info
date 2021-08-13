import animationStyleNode from './animation';
import buttonStyleNode from './button';
import linkStyleNode from './link';
import selectStyleNode from './select';
import themeStyleNode from './theme';

const style = `
  #tooltip {
    background-color: var(--background);
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    color: var(--text);
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 14px;
    height: auto;
    max-width: 300px;
    padding: 5px 10px 5px 10px;
    position: fixed;
    width: auto;
    z-index: 2147483647;
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
`;

const tooltipStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

const styles = [
  themeStyleNode,
  animationStyleNode,
  buttonStyleNode,
  linkStyleNode,
  selectStyleNode,
  tooltipStyleNode,
];

export default styles;
