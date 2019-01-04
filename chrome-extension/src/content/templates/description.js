const descriptionElement = (report, settings) => {
  let html = '';
  if (settings.description) {
    if (report.description) {
      html += `
        <section class="gene-info__description">
          <h1>Description</h1>
          <p>
            ${report.description}
          </p>
        </section>
      `;
    }
  }
  return html;
};

export default descriptionElement;
