const selectGene = (event, text) => {
  if (text) {
    return text;
  } if (window.getSelection().toString()) {
    return window.getSelection().toString().trim();
  } if (
    event
    && event.target
    && (
      event.target.nodeName === 'INPUT'
      || event.target.nodeName === 'TEXTAREA'
    )
  ) {
    const { target } = event;
    return target.value.substring(target.selectionStart, target.selectionEnd);
  }
  return '';
};

export default selectGene;
