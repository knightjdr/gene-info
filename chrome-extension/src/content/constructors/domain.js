const domainConstructor = (data, options) => {
  let domainString = `
    <div class="cExtension-gene-info-section-header">
      <b>DOMAINS:</b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.ebi.ac.uk/interpro/protein/${data.uniprot}"
      >
        InterPro
      </a>
    </div>`
  ;
  const length = data.length ? data.length : '-';
  const mw = data.mw ? data.mw : '-';
  domainString = `
    <div>
      <b>Length:</b> ${length}, <b>MW:</b> ${mw}
    </div>`
  ;
  if (data.domains.length > 0) {
    data.domains.forEach((domain) => {
      domainString += '<div id="cExtension_gene_info_details_domains" style="display: flex;">';
      domainString += `
        <div style="flex: 0 0 30%;">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ebi.ac.uk/interpro/entry/${domain.domain_interpro}"
          >
            ${domain.domain_name}
          </a>
        </div>`
      ;
      domainString += `
        <div style="flex: 1;">
          ${domain.domain_start}
        </div>`
      ;
      domainString += `
        <div style="flex: 1;">
          ${domain.domain_end}
        </div>`
      ;
      domainString += '</div>';
    });
  } else {
    domainString += `
      <div
        id="cExtension_gene_info_details_domains"
        style="display: flex;"
      >
        <div style="flex: 0 0 25%;">
          none
        </div>
      </div>`
    ;
  }
  domainString += '</div>';
  return domainString;
};
