const findGene = (genes) => {
  if (!genes) {
    return {};
  }
  const obj = {
    locus: '',
    orf: [],
    primary: '',
    synonyms: [],
  };
  return genes[0].name.reduce((accum, gene) => {
    switch (gene.$.type) {
      case 'ordered locus':
        return {
          ...accum,
          locus: gene._,
        };
      case 'ORF':
        return {
          ...accum,
          orf: [...accum.orf, gene._],
        };
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
  }, obj);
};

module.exports = findGene;
