export const createGeneralLinks = (report) => {
  const links = [];
  if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
    const accession = report['ensembl-gene'][0];
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'Ensembl' },
        {
          href: `https://ensembl.org/Gene/Summary?g=${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        },
      ],
    });
  }
  if (report.geneid) {
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'NCBI' },
        {
          href: `https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: report.geneid,
        },
      ],
    });
  }
  if (report.uniprot && report.uniprot.length > 0) {
    const accession = report.uniprot[0];
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'UniProt' },
        {
          href: `https://www.uniprot.org/uniprot/${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        },
      ],
    });
  }
  return links;
};

const style = `
.links > div {
  margin-top: 5px;
}`;

const createLinkElement = (report, settings) => {
  const nodes = [];

  if (settings.links) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'links',
      tag: 'section',
      children: createGeneralLinks(report),
    };

    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'TAIR' },
          {
            href: `https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.tair,
          },
        ],
      });
    }
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'WormBase' },
          {
            href: `https://wormbase.org/species/c_elegans/gene/${report.wormbase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.wormbase,
          },
        ],
      });
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'ZFIN' },
          {
            href: `https://zfin.org/${report.zfin}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.zfin,
          },
        ],
      });
    }
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'dictyBase' },
          {
            href: `http://dictybase.org/gene/${report.dictybase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.dictybase,
          },
        ],
      });
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'FlyBase' },
          {
            href: `https://flybase.org/reports/${report.flybase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.flybase,
          },
        ],
      });
    }
    if (report.biocyc && settings.species === 'Escherichia coli (K12)') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'EcoCyc' },
          {
            href: `https://ecocyc.org/gene?orgid=ECOLI&id=${report.biocyc}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.biocyc,
          },
        ],
      });
    }
    if (report.uniprot
      && report.uniprot.length > 0
      && settings.species === 'Homo sapiens'
    ) {
      const accession = report.uniprot[0];
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'neXtProt' },
          {
            href: `https://www.nextprot.org/entry/NX_${accession}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: `NX_${accession}`,
          },
        ],
      });
    }
    if (report.mgi && settings.species === 'Mus musculus') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'MGI' },
          {
            href: `http://www.informatics.jax.org/marker/${report.mgi}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.mgi,
          },
        ],
      });
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'SGD' },
          {
            href: `https://www.yeastgenome.org/locus/${report.sgd}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.sgd,
          },
        ],
      });
    }
    if (report.pombase && settings.species === 'Schizosaccharomyces pombe') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'PomBase' },
          {
            href: `https://www.pombase.org/gene/${report.pombase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.pombase,
          },
        ],
      });
    }
    if (report.xenbase && settings.species === 'Xenopus laevis') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Xenbase' },
          {
            href: `http://www.xenbase.org/gene/showgene.do?method=display&geneId=${report.xenbase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.xenbase,
          },
        ],
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createLinkElement;
