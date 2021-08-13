const style = `
.domain-table {
  margin-top: 5px;
}
.domain-table th:first-child {
  width: 35%;
}
.domain-table th:last-child {
  width: 65%;
}
.domain-table td {
  text-align: center;
}`;

const createDomainLink = domain => (
  domain.pfam
    ? {
      href: `http://pfam.xfam.org/family/${domain.pfam}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: domain.name,
    }
    : { tag: 'span', textContent: domain.name }
);

const createDomainElement = (report, settings) => {
  const nodes = [];

  if (settings.domain || settings.region) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];
    let { domains } = report;
    let heading;
    let warning;
    if (settings.domain && settings.region) {
      heading = 'DOMAINS & REGIONS';
      warning = 'no annotated domains or regions';
    } else if (settings.domain) {
      heading = 'DOMAINS';
      domains = domains.filter(domain => domain.type === 'domain');
      warning = 'no annotated domains';
    } else if (settings.region) {
      heading = 'REGIONS';
      domains = domains.filter(domain => domain.type === 'region');
      warning = 'no annotated regions';
    }

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: heading },
            {
              href: `http://pfam.xfam.org/protein/${accession}`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'Pfam',
            },
          ],
        },
      ],
    };

    if (domains && domains.length > 0) {
      section.children.push({
        class: 'domain-table',
        tag: 'table',
        children: [
          {
            tag: 'thead',
            children: [
              {
                tag: 'tr',
                children: [
                  { tag: 'td', textContent: 'Start - End' },
                  { tag: 'td', textContent: 'Name' },
                ],
              },
            ],
          },
          {
            tag: 'tbody',
            children: domains.map(domain => ({
              tag: 'tr',
              children: [
                {
                  tag: 'td',
                  textContent: `${domain.start}-${domain.end}`,
                },
                {
                  tag: 'td',
                  children: [
                    createDomainLink(domain),
                  ],
                },
              ],
            })),
          },
        ],
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: warning,
      });
    }

    nodes.push(section);
  }

  return nodes;
};

export default createDomainElement;
