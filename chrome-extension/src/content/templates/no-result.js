const noResult = () => {
  const html = '<p class="gene-info__no-result">No gene information available</p>';
  return {
    className: 'gene-info__panel gene-info__panel_small',
    html,
    style: [],
  };
};

export default noResult;
