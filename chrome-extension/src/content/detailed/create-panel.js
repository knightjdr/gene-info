createDetailedPanel = (data, options) => {
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
    //add html
    let htmlString = '<div id="cExtension_gene_info_details">';
    htmlString += `
      <div
        class="cExtension-gene-info-details-backdrop"
        id="cExtension_gene_info_details_gene"
      >
        <b>Gene: </b>${data.gene}
      </div>`
    ;
    if (options.basic) {
      htmlString += basicConstructor(data);
    }
    if (options.links) {
      htmlString += linkConstructor(data);
    }
    if (options.description) {
      htmlString += descriptionConstructor(data);
    }
    if (data.domains && options.domain) {
      htmlString += domainConstructor(data);
    }
    if (data.go && options.go) {
      htmlString += goStringConstructor(data);
    }
    if (data.biogrid && options.interactors) {
      htmlString += biogridStringConstructor(data);
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    //listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    addDrag(detailedDiv);
    // disableScroll(detailedDiv);
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
};
