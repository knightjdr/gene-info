const findGene = genes => (
  genes.reduce((accum, gene) => {
    switch (gene.$.type) {
      case 'primary':
        return {
          ...accum,
          primary: gene._,
        };
      case 'synonym':
        return {
          ...accum,
          synonyms: [...accum.synonyms, gene._],
        };
      default:
        return accum;
    }
  }, { primary: '', synonyms: [] })
);

module.exports = findGene;
