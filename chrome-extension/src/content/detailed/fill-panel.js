fillDetailedPanel = (selectedResult, completeResults, options, updateGene = true) => {
  let lastNode;
  //update gene
  if (updateGene) {
    document.getElementById('cExtension_gene_info_details_gene').innerHTML = `<b>Gene: </b>${geneConstructor(selectedResult, completeResults)}`;
  }
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  // basic
  if (options.basic) {
    let basicString = basicConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_basic')) {
      document.getElementById('cExtension_gene_info_details_basic').innerHTML = basicString;
    } else {
      let basicDiv = document.createElement('div');
      basicDiv.id = 'cExtension_gene_info_details_basic';
      basicDiv.innerHTML = basicString;
      insertAfter(basicDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_basic');
  } else {
    if (document.getElementById('cExtension_gene_info_details_basic')) {
      document.getElementById('cExtension_gene_info_details_basic').remove();
    }
  }
  // ncbi
  if (options.links) {
    let linkString = linkConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_link')) {
      document.getElementById('cExtension_gene_info_details_link').innerHTML = linkString;
    } else {
      let linkDiv = document.createElement('div');
      linkDiv.id = 'cExtension_gene_info_details_basic';
      linkDiv.innerHTML = linkString;
      insertAfter(linkDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_link');
  } else {
    if (document.getElementById('cExtension_gene_info_details_link')) {
      document.getElementById('cExtension_gene_info_details_link').remove();
    }
  }
  //description
  if (options.description) {
    let descriptionString = descriptionConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').innerHTML = descriptionString;
    } else {
      let descDiv = document.createElement('div');
      descDiv.id = 'cExtension_gene_info_details_description';
      descDiv.innerHTML = descriptionString;
      insertAfter(descDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_description');
  } else {
    if (document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').remove();
    }
  }
  // domain
  if (selectedResult.domains && options.domain) {
    let domainString = domainConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_domain')) {
      document.getElementById('cExtension_gene_info_details_domain').innerHTML = domainString;
    } else {
      let domainDiv = document.createElement('div');
      domainDiv.id = 'cExtension_gene_info_details_domain';
      domainDiv.innerHTML = domainString;
      insertAfter(domainDiv, lastNode);
    }
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    lastNode = document.getElementById('cExtension_gene_info_details_domain');
  } else {
    if (document.getElementById('cExtension_gene_info_details_domain')) {
      document.getElementById('cExtension_gene_info_details_domain').remove();
    }
  }
  // go
  if (selectedResult.go && options.go) {
    //remove listeners for GO
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    let goString = goStringConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').innerHTML = goString;
    } else {
      let goDiv = document.createElement('div');
      goDiv.id = 'cExtension_gene_info_details_go';
      goDiv.innerHTML = goString;
      insertAfter(goDiv, lastNode);
    }
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    lastNode = document.getElementById('cExtension_gene_info_details_go');
  } else {
    if (document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').remove();
    }
  }
  //biogrid
  if (selectedResult.biogrid && options.interactors) {
    let biogridString = biogridStringConstructor(selectedResult, false);
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').innerHTML = biogridString;
    } else {
      let biogridDiv = document.createElement('div');
      biogridDiv.id = 'cExtension_gene_info_details_biogrid';
      biogridDiv.innerHTML = biogridString;
      insertAfter(biogridDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_biogrid');
  } else {
    if (document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
  // if gene changes, select listener needs to be updated
  selectListener();
  // set scroll to top
  document.getElementById('cExtension_gene_info_panel').scrollTop = 0;
};
