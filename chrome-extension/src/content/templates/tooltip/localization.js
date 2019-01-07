import config from '../../../config';

const localizationElement = (report, settings) => {
  const links = [];
  if (
    settings.localization
    && config.compartmentSpecies.includes(settings.species)
    && settings.localization_compartments
  ) {
    const accession = report.localization.compartments;
    const speciesID = config.speciesID[settings.species];
    links.push({
      database: 'Compartments',
      href: `https://compartments.jensenlab.org/Entity?figures=subcell_cell_%&knowledge=10&textmining=10&experiments=10&predictions=10&type1=${speciesID}&type2=-22&id1=${accession}`,
    });
  }
  return links;
};

export default localizationElement;
