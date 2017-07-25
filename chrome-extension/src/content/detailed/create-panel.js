createDetailedPanel = (selectedResult, completeResults, options) => {
  let detailedDiv = document.createElement('div');
  detailedDiv.id = 'cExtension_gene_info_panel';
  if (!selectedResult) {
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
        <b>Gene: </b>${geneConstructor(selectedResult, completeResults)}
      </div>`
    ;
    if (options.basic) {
      htmlString += basicConstructor(selectedResult);
    }
    if (options.links) {
      htmlString += linkConstructor(selectedResult);
    }
    if (options.description) {
      htmlString += descriptionConstructor(selectedResult);
    }
    if (selectedResult.domains && options.domain) {
      htmlString += domainConstructor(selectedResult);
    }
    if (selectedResult.go && options.go) {
      htmlString += goStringConstructor(selectedResult);
    }
    if (selectedResult.biogrid && options.interactors) {
      htmlString += biogridStringConstructor(selectedResult);
    }
    htmlString += '</div>';
    detailedDiv.innerHTML = htmlString;
    document.body.insertBefore(detailedDiv, document.body.firstChild);
    // listeners for GO and disable scroll
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    // add drag listeners
    addDrag(detailedDiv);
    // add select listener (if applicable)
    selectListener();
    // disableScroll(detailedDiv);
  }
  //create close cutton
  let closeButton = document.createElement('span');
  closeButton.id = 'cExtension_gene_info_panel_button';
  closeButton.className = 'cExtension-gene-info-panel-button';
  closeButton.innerHTML = 'x';
  detailedDiv.appendChild(closeButton);
  if (selectedResult) {
    detailedDiv.addEventListener('mouseover', function() { closeButton.style.display = 'inline' ;});
    detailedDiv.addEventListener('mouseout', function() { closeButton.style.display = 'none' ;});
  } else {
    closeButton.style.display = 'inline';
  }
  closeButton.addEventListener('click', removePanel);
  //show panel
  fadeIn(detailedDiv);
};
