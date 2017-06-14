const goStringConstructor = (data, options) => {
  let goString =
    `<div class="cExtension-gene-info-section-header">
      <b>GO TERMS: </b>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="http://amigo.geneontology.org/amigo/gene_product/UniProtKB:${data.uniprot}"
      >
        AmiGO
      </a>
    </div>
    <div>
      <div style="display: flex; flex-direction: row;">
        <div
          class="cExtension-gene-info-go-selector active"
          data-type="bp"
        >
          BP
        </div>
        <div
          class="cExtension-gene-info-go-selector"
          data-type="cc"
        >
          CC
        </div>
        <div
          class="cExtension-gene-info-go-selector"
          data-type="mf"
        >
          MF
        </div>
      </div>
    `
  ;
  goString += `
    <div
      id="cExtension-gene-info-go-container-bp"
      style="padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.p.length > 0) {
    data.go.p.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += `
    <div
      id="cExtension-gene-info-go-container-cc"
      style="display: none; padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.c.length > 0) {
    data.go.c.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += `
    <div
      id="cExtension-gene-info-go-container-mf"
      style="display: none; padding: 0px 5px 0px 5px;"
    >`
  ;
  if(data.go.f.length > 0) {
    data.go.f.forEach(function(term) {
      goString +=
        `<div style="padding: 2px 0px 2px 0px;">
          &#8226;
          ${term.term}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://amigo.geneontology.org/amigo/term/GO:${term.id}"
            style="text-decoration: none;"
          >
            &#10162;
          </a>
        </div>`
      ;
    });
  } else {
    goString += '<div style="padding: 2px 0px 2px 0px;">no terms</div>';
  }
  goString += '</div>';
  goString += '</div>';
  return goString;
};
