const createTooltipTemplate = (event, selectedResult, completeResults, options, resultsIndex = 0) => {
  // if tooltip already exists, get position (when changing option via select)
  let tooltipLeft;
  let tooltipTop;
  if (!event) {
    const el = document.getElementById('cExtension_gene_info_tooltip');
    tooltipLeft = el.getBoundingClientRect().left;
    tooltipTop = el.getBoundingClientRect().top;
  }
  clearTooltip();
  let containerDiv = document.createElement('div');
  containerDiv.id = 'cExtension_gene_info_tooltip_container';
  containerDiv.className = 'cExtension-gene-info-tooltip-container';
  document.body.insertBefore(containerDiv, document.body.firstChild);
  containerDiv.addEventListener('click', clearTooltip);
  //create tooltip
  let tooltipDiv = document.createElement('div');
  tooltipDiv.id = 'cExtension_gene_info_tooltip';
  tooltipDiv.className = 'cExtension-gene-info-tooltip';
  if (!selectedResult) {
    let htmlString = `
      <div id="cExtension_gene_info_empty">
        No gene information available
      </div>`
    ;
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
  } else {
    //add html
    let htmlString = `
      <div class="cExtension-gene-info-tooltip-header">
        ${geneConstructor(selectedResult, completeResults, true, resultsIndex)}
      </div>`
    ;
    htmlString += '<div style="display: flex; flex-direction: row; flex-wrap: wrap;">';
    if (options.links && selectedResult.geneid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.ncbi.nlm.nih.gov/gene/?term=${selectedResult.geneid}"
          >
            NCBI
          </a>
        </span>`
      ;
    }
    if (options.links && selectedResult.uniprot) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.uniprot.org/uniprot/${selectedResult.uniprot}"
          >
            UniProt
          </a>
        </span>`
      ;
    }
    if (options.domain && selectedResult.domains) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://pfam.xfam.org/protein/${selectedResult.uniprot}"
          >
            Pfam
          </a>
        </span>`
      ;
    }
    if (options.go && selectedResult.go) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${selectedResult.uniprot}"
          >
            AmiGO
          </a>
        </span>`
      ;
    }
    if (options.interactors && selectedResult.biogrid) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://thebiogrid.org/${selectedResult.biogrid}/summary/homo-sapiens/"
          >
            BioGRID
          </a>
        </span>`
      ;
    }
    if (options.links && selectedResult['ensembl-gene']) {
      htmlString += `
        <span class="cExtension-gene-info-tooltip-link">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.proteinatlas.org/${selectedResult['ensembl-gene']}/cell"
          >
            HPA
          </a>
        </span>`
      ;
    }
    htmlString += '</div>';
    tooltipDiv.innerHTML = htmlString;
    containerDiv.appendChild(tooltipDiv);
    // prevent clicks on links etc. from dismissing parent
    tooltipDiv.addEventListener('click', function(event) { event.stopPropagation(); });
  }
  // position tooltip
  if (!event) {
    tooltipDiv.style.left = `${tooltipLeft}px`;
    tooltipDiv.style.top = `${tooltipTop}px`;
  } else {
    const divHeight = tooltipDiv.offsetHeight;
    const divWidth = tooltipDiv.offsetWidth;
    const scrollOffset =  window.innerWidth > document.documentElement.clientWidth ? 15 : 0;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    if (event.clientX < 5) {
      tooltipDiv.style.left = '5px';
    } else if (event.clientX + divWidth > viewportWidth - 5) {
      tooltipDiv.style.left = `${viewportWidth - divWidth - scrollOffset - 5}px`;
    } else {
      tooltipDiv.style.left = `${event.clientX}px`;
    }
    if (event.clientY - divHeight < 5) {
      tooltipDiv.style.top = '5px';
    } else if (event.clientY > viewportHeight - 5) {
      tooltipDiv.style.top = `${viewportHeight - divHeight - 5}px`;
    } else {
      tooltipDiv.style.top = `${event.clientY - divHeight}px`;
    }
  }
  // create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_tooltip_button';
  closeButton.className = 'cExtension-gene-info-tooltip-button';
  closeButton.innerHTML = 'x';
  tooltipDiv.appendChild(closeButton);
  closeButton.addEventListener('click', removeTooltip);
  // add select listener (if needed)
  selectListener();
  //show panel
  fadeIn(tooltipDiv);
  //bind scroll event
  tooltipScroll.init('cExtension_gene_info_tooltip');
};
