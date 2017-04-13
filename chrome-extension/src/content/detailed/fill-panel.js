function fillDetailedPanel(data, options) {
  let lastNode;
  //update gene
  document.getElementById('cExtension_gene_info_details_gene').innerHTML = '<b>Gene: </b>' + data.gene;
  lastNode = document.getElementById('cExtension_gene_info_details_gene');
  //synonyms
  if(data.synonyms && options.basic) {
    let synonymString = '<b>Synonyms: </b>';
    if(data.synonyms.length > 0) {
      data.synonyms.forEach(function(synonym, i) {
        synonymString += synonym;
        if(i < data.synonyms.length - 1) {
          synonymString += ', ';
        }
      });
    } else {
      synonymString += '-';
    }
    if(document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').innerHTML = synonymString;
    } else {
      let synonymsDiv = document.createElement('div');
      synonymsDiv.id = 'cExtension_gene_info_details_synonyms';
      synonymsDiv.innerHTML = synonymString;
      synonymsDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(synonymsDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_synonyms');
  } else {
    if(document.getElementById('cExtension_gene_info_details_synonyms')) {
      document.getElementById('cExtension_gene_info_details_synonyms').remove();
    }
  }
  //name
  if(data.fullname && options.basic) {
    let nameString = '<b>Name: </b>' + data.fullname;
    if(document.getElementById('cExtension_gene_info_details_name')) {
      document.getElementById('cExtension_gene_info_details_name').innerHTML = nameString;
    } else {
      let nameDiv = document.createElement('div');
      nameDiv.id = 'cExtension_gene_info_details_name';
      nameDiv.innerHTML = nameString;
      nameDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(nameDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_name');
  } else {
    if(document.getElementById('cExtension_gene_info_details_name')) {
      document.getElementById('cExtension_gene_info_details_name').remove();
    }
  }
  //hgnc
  if(data.geneid && options.links) {
    let uniprotString = '<b>NCBI: </b><a rel="noopener noreferrer" target="_blank" href="http://www.genenames.org/cgi-bin/gene_symbol_report?hgnc_id=HGNC:' + data.hgnc + '">' + data.hgnc + '</a>';
    if(document.getElementById('cExtension_gene_info_details_hgnc')) {
      document.getElementById('cExtension_gene_info_details_hgnc').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_hgnc';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_hgnc');
  } else {
    if(document.getElementById('cExtension_gene_info_details_hgnc')) {
      document.getElementById('cExtension_gene_info_details_hgnc').remove();
    }
  }
  //ncbi
  if(data.geneid && options.links) {
    let uniprotString = '<b>NCBI: </b><a rel="noopener noreferrer" target="_blank" href="https://www.ncbi.nlm.nih.gov/gene/?term=' + data.geneid + '">' + data.geneid + '</a>';
    if(document.getElementById('cExtension_gene_info_details_ncbi')) {
      document.getElementById('cExtension_gene_info_details_ncbi').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_ncbi';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_ncbi');
  } else {
    if(document.getElementById('cExtension_gene_info_details_ncbi')) {
      document.getElementById('cExtension_gene_info_details_ncbi').remove();
    }
  }
  //uniprot
  if(data.uniprot && options.links) {
    let uniprotString = '<b>UniProt: </b><a rel="noopener noreferrer" target="_blank" href="http://www.uniprot.org/uniprot/' + data.uniprot + '">' + data.uniprot + '</a>';
    if(document.getElementById('cExtension_gene_info_details_uniprot')) {
      document.getElementById('cExtension_gene_info_details_uniprot').innerHTML = uniprotString;
    } else {
      let uniprotDiv = document.createElement('div');
      uniprotDiv.id = 'cExtension_gene_info_details_uniprot';
      uniprotDiv.innerHTML = uniprotString;
      uniprotDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(uniprotDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_uniprot');
  } else {
    if(document.getElementById('cExtension_gene_info_details_uniprot')) {
      document.getElementById('cExtension_gene_info_details_uniprot').remove();
    }
  }
  //description
  if(data.description && options.description) {
    let descriptionString = '<b>Description: </b>' + data.description;
    if(document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').innerHTML = descriptionString;
    } else {
      let descriptionDiv = document.createElement('div');
      descriptionDiv.id = 'cExtension_gene_info_details_description';
      descriptionDiv.innerHTML = descriptionString;
      descriptionDiv.style.padding = '2px 0px 2px 0px';
      insertAfter(descriptionDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_description');
  } else {
    if(document.getElementById('cExtension_gene_info_details_description')) {
      document.getElementById('cExtension_gene_info_details_description').remove();
    }
  }
  //go
  if(data.go && options.go) {
    //remove listeners for GO
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.removeEventListener('click', goSelector); });
    let goString = goStringConstructor(data, options);
    if(document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').innerHTML = goString;
    } else {
      let goDiv = document.createElement('div');
      goDiv.id = 'cExtension_gene_info_details_go';
      goDiv.innerHTML = goString;
      goDiv.style.padding = '5px 0px 2px 0px';
      insertAfter(goDiv, lastNode);
    }
    document.querySelectorAll('.cExtension-gene-info-go-selector').forEach(function(element) { element.addEventListener('click', goSelector); });
    lastNode = document.getElementById('cExtension_gene_info_details_go');
  } else {
    if(document.getElementById('cExtension_gene_info_details_go')) {
      document.getElementById('cExtension_gene_info_details_go').remove();
    }
  }
  //biogrid
  if(data.biogrid && options.interactors) {
    let biogridString = biogridStringConstructor(data, options);
    if(document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').innerHTML = biogridString;
    } else {
      let biogridDiv = document.createElement('div');
      biogridDiv.id = 'cExtension_gene_info_details_biogrid';
      biogridDiv.innerHTML = biogridString;
      biogridDiv.style.padding = '5px 0px 2px 0px';
      insertAfter(biogridDiv, lastNode);
    }
    lastNode = document.getElementById('cExtension_gene_info_details_biogrid');
  } else {
    if(document.getElementById('cExtension_gene_info_details_biogrid')) {
      document.getElementById('cExtension_gene_info_details_biogrid').remove();
    }
  }
}
