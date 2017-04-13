function retrieveInfo(event) {
  const gene = window.getSelection().toString().trim();
  http(gene)
    .then((data) => {
      if(details.report === 'detailed') {
        removeTooltip();
        createDetailedTemplate(data, details.displayOptions);
      } else {
        removePanel();
        createTooltipTemplate(event, data, details.displayOptions);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  ;
}
