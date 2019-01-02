const removeTooltip = () => {
  const tooltip = document.getElementById('gene-info__tooltip');
  if (tooltip) {
    tooltip.removeEventListener('click', removeTooltip);
    document.getElementById('gene-info__tooltip-remove').removeEventListener('click', removeTooltip);
    const changeEl = document.getElementById('gene-info__gene-select');
    if (changeEl) {
      changeEl.removeEventListener('change', geneSelect);
    }
    window.removeEventListener('scroll', tooltipScroll.scroll);
    fadeOut(tooltip);
  }
}

module.exports = removeTooltip;
