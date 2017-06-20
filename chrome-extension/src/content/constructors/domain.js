const domainConstructor = (data, wrapper = true) => {
  let domainString = `
    <div
      class="cExtension-gene-info-details-backdrop"
    >
      <div class="cExtension-gene-info-bevel-line"></div>
      <div class="cExtension-gene-info-section-header">
        <b>DOMAINS:</b>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://pfam.xfam.org/protein/${data.uniprot}"
        >
          Pfam
        </a>
      </div>`
  ;
  if (data.domains.length > 0) {
    domainString += `
      <div
        style="display: flex;"
      >
        <div
          style="text-align: center; width: 35%"
        >
          <u>Start-End</u>
        </div>
        <div style="width: 65%">
          <u>Name</u>
        </div>
      </div>`
    ;
    data.domains = data.domains.sort((a,b) => { return a.domain_start - b.domain_start; });
    data.domains.forEach((domain) => {
      domainString += `
        <div
          style="display: flex;"
        >`
      ;
      domainString += `
        <div style="text-align:center; width: 35%;">
          ${domain.domain_start}-${domain.domain_end}
        </div>`
      ;
      if (domain.pfam) {
        domainString += `
          <div style="width: 65%">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://pfam.xfam.org/family/${domain.pfam}"
              style="text-decoration: none;"
            >
              ${domain.domain_name}
            </a>
          </div>`
        ;
      } else {
        domainString += `
          <div style="width: 65%">
            ${domain.domain_name}
          </div>`
        ;
      }
      domainString += '</div>';
    });
  } else {
    domainString += `
      <div>
        none
      </div>`
    ;
  }
  domainString += '</div></div>';
  if (wrapper) {
    domainString = `
      <div id="cExtension_gene_info_details_domain">
        ${domainString}
      </div>
    `;
  }
  return domainString;
};
