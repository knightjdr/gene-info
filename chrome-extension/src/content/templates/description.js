const descriptionElement = (report, settings) => {
  let html = '';
  if (settings.description) {
    if (report.description) {
      html += `
        <section class="gene-info__description">
          <span class="gene-info__heading">Description</span>
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
