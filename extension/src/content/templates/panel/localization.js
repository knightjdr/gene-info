import config from '../../../config';

const createHpaList = list => ({
  tag: 'ul',
  children: list.map(item => ({ tag: 'li', textContent: item })),
});

const createHpaRows = (data) => {
  const rows = [];
  if (data.enhanced) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Enhanced' },
        { tag: 'td', children: [createHpaList(data.enhanced)] },
      ],
    });
  }
  if (data.supported) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Supported' },
        { tag: 'td', children: [createHpaList(data.supported)] },
      ],
    });
  }
  if (data.approved) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Approved' },
        { tag: 'td', children: [createHpaList(data.approved)] },
      ],
    });
  }
  if (data.uncertain) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Uncertain' },
        { tag: 'td', children: [createHpaList(data.uncertain)] },
      ],
    });
  }
  return rows;
};

const style = `
.localization h1::after {
  content: '';
}
.localization h2 {
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.localization h2::after {
  content: ':';
  margin-right: 3px;
}
.localization p {
  margin: 8px 0;
}
.localization table {
  margin-bottom: 10px;
}
.localization table ul {
  margin: 4px 0;
  padding-left: 20px;
}
.localization ul {
  margin-bottom: 8px;
  margin-top: 5px;
}
.localization__section {
  margin-top: 5px;
}
.localization__section:not(:nth-of-type(+2)) {
  border-top: 1px solid #d0d0d0;
  margin-top: 6px;
  padding-top: 6px;
}`;

const createLocalizationElement = (report, settings) => {
  const nodes = [];

  if (
    settings.localization
    && (
      settings.localization_compartments
      || settings.localization_hpa
      || settings.localization_uniprot
    )
  ) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details localization',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'LOCALIZATION' },
          ],
        },
      ],
    };

    if (
      settings.localization_hpa
      && settings.species === 'Homo sapiens'
    ) {
      const ensembl = report['ensembl-gene'][0];
      const fieldNumber = Object.keys(report.localization.hpa).length;

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'Protein Atlas' },
        ],
      };

      if (report.localization.hpa && fieldNumber > 0) {
        element.children.push({
          href: `https://www.proteinatlas.org/${ensembl}/cell`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: ensembl,
        });
        element.children.push({
          tag: 'p',
          children: [
            {
              tag: 'span',
              textContent: `The Human Protein Atlas annotates localizations based on
              the supporting evidence. From best to worst the reliability
              scores are: "Enhanced", "Supported", "Approved" and "Uncertain". 
              See `,
            },
            {
              href: 'https://www.proteinatlas.org/about/assays+annotation',
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'IF - Reliability score',
            },
            { tag: 'span', textContent: ' for more.' },
          ],
        });
        element.children.push({
          tag: 'table',
          children: [
            {
              tag: 'thead',
              children: [
                {
                  tag: 'tr',
                  children: [
                    { tag: 'th', textContent: 'Score' },
                    { tag: 'th', textContent: 'Localization' },
                  ],
                },
              ],
            },
            {
              children: createHpaRows(report.localization.hpa),
              tag: 'tbody',
            },
          ],
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    if (settings.localization_uniprot) {
      const accession = report.uniprot[0];

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'UniProt' },
        ],
      };

      if (report.localization.uniprot && report.localization.uniprot.length > 0) {
        element.children.push({
          href: `https://www.uniprot.org/uniprot/${accession}#subcellular_location`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        });
        element.children.push({
          tag: 'ul',
          children: report.localization.uniprot.map(localization => ({
            tag: 'li',
            textContent: localization,
          })),
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    if (settings.localization_compartments && config.compartmentSpecies.includes(settings.species)) {
      const { accession } = report.localization.compartments;
      const speciesID = config.speciesID[settings.species];

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'Compartments' },
        ],
      };

      if (
        report.localization.compartments
        && report.localization.compartments.terms
        && report.localization.compartments.terms.length > 0
      ) {
        element.children.push({
          href: `https://compartments.jensenlab.org/Entity?figures=subcell_cell_%&knowledge=10&textmining=10&experiments=10&predictions=10&type1=${speciesID}&type2=-22&id1=${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        });
        element.children.push({
          tag: 'ul',
          children: report.localization.compartments.terms.map(localization => ({
            tag: 'li',
            textContent: localization,
          })),
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    nodes.push(section);
  }

  return nodes;
};

export default createLocalizationElement;
