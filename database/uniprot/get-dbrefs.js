const arrayUnique = require('../helpers/array-unique');

const getDBRefs = dbRefs => (
  dbRefs.reduce((accum, ref) => {
    if (ref.$.type === 'BioCyc') {
      return {
        ...accum,
        biocyc: ref.$.id.split(/:(.+)/)[1],
      };
    } if (ref.$.type === 'BioGRID') {
      return {
        ...accum,
        biogrid: Number(ref.$.id),
      };
    } if (ref.$.type === 'dictyBase') {
      return {
        ...accum,
        dictybase: ref.$.id,
      };
    } if (ref.$.type === 'FlyBase') {
      return {
        ...accum,
        flybase: ref.$.id,
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
      }, { id: ref.$.id.split(':')[1] });
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
    } if (ref.$.type === 'Ensembl') {
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
        'ensembl-gene': arrayUnique([...accum['ensembl-gene'], ensembl.gene]),
        'ensembl-protein': arrayUnique([...accum['ensembl-protein'], ensembl.protein]),
      };
    } if (ref.$.type === 'HGNC') {
      return {
        ...accum,
        hgnc: Number(ref.$.id.split(':')[1]),
      };
    } if (ref.$.type === 'MGI') {
      return {
        ...accum,
        mgi: ref.$.id,
      };
    } if (ref.$.type === 'MIM' && ref?.property[0]?.$?.value === 'gene') {
      return {
        ...accum,
        mim: Number(ref.$.id),
      };
    } if (ref.$.type === 'PomBase') {
      return {
        ...accum,
        pombase: ref.$.id,
      };
    } if (ref.$.type === 'ProteomicsDB' && !accum.proteomicsdb) {
      return {
        ...accum,
        proteomicsdb: Number(ref.$.id),
      };
    } if (ref.$.type === 'Reactome') {
      const { id } = ref.$;
      const term = ref.property[0].$.value;
      return {
        ...accum,
        pathway: arrayUnique([...accum.pathway, { id, term }]),
      };
    } if (ref.$.type === 'RefSeq') {
      const id = ref.$.id.split('.')[0];
      const value = ref.property[0].$.value.split('.')[0];
      return {
        ...accum,
        refseq: arrayUnique([...accum.refseq, id, value]),
      };
    } if (ref.$.type === 'SGD') {
      return {
        ...accum,
        sgd: ref.$.id,
      };
    } if (ref.$.type === 'TAIR') {
      return {
        ...accum,
        tair: ref.$.id,
      };
    } if (ref.$.type === 'WormBase') {
      const isoform = ref.$.id;
      const id = ref.property.find(prop => prop.$.type === 'gene ID');
      if (id && id.$ && id.$.value) {
        return {
          ...accum,
          wormIsoforms: [...accum.wormIsoforms, isoform],
          wormbase: id.$.value,
        };
      }
      return accum;
    } if (ref.$.type === 'Xenbase') {
      return {
        ...accum,
        xenbase: ref.$.id,
      };
    } if (ref.$.type === 'ZFIN') {
      return {
        ...accum,
        zfin: ref.$.id,
      };
    }
    return accum;
  }, {
    'ensembl-gene': [],
    'ensembl-protein': [],
    go: { c: [], f: [], p: [] },
    wormIsoforms: [],
    pathway: [],
    refseq: [],
  })
);

module.exports = getDBRefs;
