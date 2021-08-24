const theme = `
  aside.theme_dark {
    --alert: #4f5663;
    --background: #323639;
    --heading: #E68173;
    --primary: #7FA782;
    --primary-1: #445054;
    --text: rgba(255, 255, 255, 0.7);
    --text-contrast: #1F3C1D;
    --thumb: #999;
    --track: #bfbfbf;
    --warning: #F4887E;
  }
  aside.theme_light {
    --alert: #e3e5e8;
    --background: #fafafa;
    --heading: #BD4A42;
    --primary: #658170;
    --primary-1: #e2e9e5;
    --text: #333333;
    --text-contrast: #f5f5f5;
    --thumb: #ccc;
    --track: #eee;
    --warning: #F44336;
  }
`;

const themeStyleNode = {
  tag: 'style',
  textContent: theme,
  type: 'text/css',
};

export default themeStyleNode;
