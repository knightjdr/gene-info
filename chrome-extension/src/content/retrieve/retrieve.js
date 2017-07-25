function retrieveInfo(event) {
  const gene = window.getSelection().toString().trim();
  const getInfo = (gene) => {
    http(gene)
      .then((data) => {
        details.results = data;
        if (details.report === 'detailed') {
          removeTooltip();
          createDetailedTemplate(data[0], data, details.displayOptions);
        } else {
          removePanel();
          createTooltipTemplate(event, data[0], data, details.displayOptions);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    ;
  };
  if (gene) {
    if (!details.mdTime) {
      getInfo(gene);
    } else {
      if (details.mdTime &&
        Date.now() - details.mdTime > 500
      ) {
        getInfo(gene);
      }
      details.mdTime = null;
    }
  }
}
