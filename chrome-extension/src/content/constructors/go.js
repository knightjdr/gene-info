function goStringConstructor(data, options) {
  let goString = '<b>GO terms: </b>';
  goString += '<a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:' + data.uniprot + '">AmiGO</a>';
  goString += '<hr style="margin: 1px 1px 1px 1px;"/>';
  goString += '<div>';
  goString += '<div style="display: flex; flex-direction: row;">';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="bp" style="background-color: #a8a6a6; border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">BP</div>';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="cc" style="border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">CC</div>';
  goString += '<div class="cExtension-gene-info-go-selector" data-type="mf" style="border: 1px solid #90a4ae; border-radius: 2px; cursor: pointer; flex-grow: 1; margin: 0px 2px 0px 2px; text-align: center;">MF</div>';
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-bp" style="padding: 0px 5px 0px 5px;">';
  if(data.go.p.length > 0) {
    data.go.p.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-cc" style="display: none; padding: 0px 5px 0px 5px;">';
  if(data.go.c.length > 0) {
    data.go.c.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '<div id="cExtension-gene-info-go-container-mf" style="display: none; padding: 0px 5px 0px 5px;">';
  if(data.go.f.length > 0) {
    data.go.f.forEach(function(term) {
      goString += '<div style="padding: 2px 0px 2px 0px;"> &#8226; ' + term.term + ' <a rel="noopener noreferrer" target="_blank" href="http://amigo.geneontology.org/amigo/term/GO:' + term.id + '">&#10162;</a></div>';
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '</div>';
  return goString;
}
