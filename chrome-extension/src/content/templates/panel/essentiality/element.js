import config from '../../../../config';
import createCellTable from './create-cell-table';
import createCoDependencyTable from './create-co-dependency-table';
import createHeading from './create-heading';

const style = `
.essentiality__codependencies {
  margin-top: 10px;
}

.essentiality__link svg {
  fill: var(--primary);
}
.essentiality__link:focus svg,
.essentiality__link:hover svg {
  fill: var(--text);
}
.essentiality__stats {
  display: grid;
  gap: 4px;
  grid-template-columns: auto 1fr auto 1fr;
  margin: 5px 0;
}
.essentiality__stats > :nth-child(odd) {
  font-weight: bold;
  justify-self: end;
}
.essentiality__table {
  margin-top: 5px;
}
.essentiality__table td {
  text-align: center;
}`;

const shouldShowData = (settings, essentialityTissues) => {
  const { essentiality: essentialityRequested, species } = settings;
  return (
    essentialityRequested
    && essentialityTissues[species]
    && essentialityTissues[species].cells.length > 0
  );
};

const element = (report, settings) => {
  const nodes = [];

  if (shouldShowData(settings, config.tissues.essentiality)) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details',
      tag: 'section',
      children: createHeading(report),
    };

    section.children.push(...createCellTable(report, settings));
    section.children.push(...createCoDependencyTable(report, settings));

    nodes.push(section);
  }

  return nodes;
};

export default element;
