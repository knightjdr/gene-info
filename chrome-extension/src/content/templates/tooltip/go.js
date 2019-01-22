import goURL from '../../helpers/go-url';

const goElement = (report, settings) => {
  const links = [];
  if (settings.go) {
    const url = goURL(report, settings);
    if (url) {
      links.push({
        database: 'AmiGO',
        href: url,
      });
    }
  }
  return links;
};

export default goElement;
