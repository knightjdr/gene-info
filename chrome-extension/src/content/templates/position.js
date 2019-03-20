const position = (stateStyle, panel = true) => {
  let style = '';
  if (stateStyle.right) {
    style += `left: auto;right: ${stateStyle.right};`;
  } else if (stateStyle.left) {
    style += `left: ${stateStyle.left};right: auto;`;
  }
  if (panel && stateStyle.width) {
    style += `width: ${stateStyle.width};`;
  }
  return style;
};

export default position;
