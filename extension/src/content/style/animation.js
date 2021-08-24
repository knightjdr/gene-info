const style = `
  .panel_animate-fade {
    animation: fadein 0.4s forwards;
  }
  .panel_animate-show {
    opacity: 1;
  }
  .panel_animate-fadeout {
    animation: fadeout 0.4s forwards;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const animationStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

export default animationStyleNode;
