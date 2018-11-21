const getDBRefs = dbRefs => (
  dbRefs.reduce((accum, ref) => {
    if (ref.$.type === 'BioGrid') {
      return {
        ...accum,
        biogrid: Number(ref.$.id),
      };
    } if (ref.$.type === 'GeneID') {
      return {
        ...accum,
        geneid: Number(ref.$.id),
      };
    } if (ref.$.type === 'GO') {
      const go = ref.property.reduce((accumRef, prop) => {
        if (prop.$.type === 'term') {
          const term = prop.$.value.split(':');
          return {
            ...accumRef,
            compartment: term[0].toLowerCase(),
            term: term[1],
          };
        }
        return accumRef;
      }, { id: Number(ref.$.id.split(':')[1]) });
      return {
        ...accum,
        go: {
          ...accum.go,
          [go.compartment]: [
            ...accum.go[go.compartment],
            {
              id: go.id,
              term: go.term,
            },
          ],
        },
      };
    } if (ref.$.type === 'Ensembl' && !accum['ensembl-gene']) {
      const ensembl = ref.property.reduce((accumRef, prop) => {
        if (prop.$.type === 'gene ID') {
          return {
            ...accumRef,
            gene: prop.$.value,
          };
        } if (prop.$.type === 'protein sequence ID') {
          return {
            ...accumRef,
            protein: prop.$.value,
          };
        }
        return accumRef;
      }, {});
      return {
        ...accum,
        'ensembl-gene': ensembl.gene,
        'ensembl-protein': ensembl.protein,
      };
    } if (ref.$.type === 'HGNC') {
      return {
        ...accum,
        hgnc: Number(ref.$.id.split(':')[1]),
      };
    } if (ref.$.type === 'ProteomicsDB' && !accum.proteomicsdb) {
      return {
        ...accum,
        proteomicsdb: Number(ref.$.id),
      };
    }
    return accum;
  }, { go: { c: [], f: [], p: [] } })
);

module.exports = getDBRefs;
