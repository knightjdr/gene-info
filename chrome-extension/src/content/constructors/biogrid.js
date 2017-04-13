function biogridStringConstructor(data, options) {
  let biogridString = '<b>Interactors: </b>';
  biogridString += '<a rel="noopener noreferrer" target="_blank" href="https://thebiogrid.org/' + data.biogrid + '/summary/homo-sapiens/">BioGRID</a>';
  biogridString += '<hr style="margin: 1px 1px 1px 1px;"/><div>';
  if(data.interactors.length > 0) {
    data.interactors.forEach(function(interactor) {
      biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;">';
      biogridString += '<div style="flex: 0 0 30%;">' + interactor.gene + '</div>';
      biogridString += '<div style="flex: 1;">' + interactor.evidence + '</div>';
      biogridString += '</div>';
    });
  } else {
    biogridString += '<div id="cExtension_gene_info_details_interactors" style="display: flex;"><div style="flex: 0 0 25%;">none</div></div>';
  }
  biogridString += '</div>';
  return biogridString;
}
