const descriptionElement = (report, settings) => {
  let html = '';
  if (settings.description) {
    if (report.description) {
      html += `
        <style>
          .description {
            text-align: justify;
            word-spacing: -2px;
          }
          .description p {
            display: inline;
            margin: 0;
          }
        </style>
        <section class="description">
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
