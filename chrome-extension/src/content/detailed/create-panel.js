function createDetailedPanel(data, options) {
  let detailedDiv = document.createElement('div');
  detailedDiv.id = 'cExtension_gene_info_panel';
  if (!data) {
    detailedDiv.className = 'cExtension-gene-info-panel-backdrop-small';
    let htmlString = '<div id="cExtension_gene_info_empty">No gene information available</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
  } else {
    detailedDiv.className = 'cExtension-gene-info-panel-backdrop';
    detailedDiv.style.minWidth = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : '300px';
    detailedDiv.style.width = window.innerWidth < 310 ? window.innerWidth - 10 + 'px' : 'calc(25vw)';
    // css 'classes'
    const elementBackdrop = `
      padding: 2px 0px 2px 0px;
    `;
    //add html
    let htmlString = '<div id="cExtension_gene_info_details">';
    htmlString += `<div id="cExtension_gene_info_details_gene" style="${elementBackdrop}"><b>Gene: </b>${data.gene}</div>`;
    if (data.synonyms && options.basic) {
      htmlString += `<div id="cExtension_gene_info_details_synonyms" style="${elementBackdrop}"><b>Synonyms: </b>`;
      if (data.synonyms.length > 0) {
        data.synonyms.forEach(function(synonym, i) {
          htmlString += synonym;
          if (i < data.synonyms.length - 1) {
            htmlString += ', ';
          }
        });
      } else {
        htmlString += '-';
      }
      htmlString += '</div>';
    }
    if (data.fullname && options.basic) {
      htmlString +=
        `<div id="cExtension_gene_info_details_name" style="${elementBackdrop}">
          <b>Name: </b>${data.fullname}
        </div>`
      ;
    }
    if (data.geneid && options.links) {
      htmlString +=
        `<div id="cExtension_gene_info_details_ncbi" style="${elementBackdrop}">
          <b>NCBI: </b>
          <a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/?term=${data.geneid }">${data.geneid }</a>
        </div>`
      ;
    }
    if (data.uniprot && options.links) {
      htmlString +=
        `<div id="cExtension_gene_info_details_uniprot" style="${elementBackdrop}">
          <b>UniProt: </b>
          <a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/${data.uniprot}">${data.uniprot }</a>
        </div>`
      ;
    }
    if (data.description && options.description) {
      htmlString +=
        `<div id="cExtension_gene_info_details_description" style="${elementBackdrop}">
          <b>Description: </b>${data.description}
        </div>`
      ;
    }
    htmlString += '<hr style="margin: 0px 1px 1px 1px;"/>';
    if(data.go && options.go) {
      htmlString +=
        `<div id="cExtension_gene_info_details_go" style="${elementBackdrop}">
          ${goStringConstructor(data, options)}
        </div>`
      ;
    }
    if(data.biogrid && options.interactors) {
      htmlString +=
        `<div id="cExtension_gene_info_details_biogrid" style="${elementBackdrop}">
          ${biogridStringConstructor(data, options)}
        </div>`
      ;
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    //listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    addDrag(detailedDiv);
    disableScroll(detailedDiv);
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.className = 'cExtension-gene-info-panel-button';
  closeButton.innerHTML = 'x';
  detailedDiv.appendChild(closeButton);
  if (data) {
    detailedDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
    detailedDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  } else {
    closeButton.style.display = 'inline';
  }
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(detailedDiv);
}
