import round from '../../helpers/round';

const basicElement = (report, settings) => {
  let html = `
    <style>
      .alternative-names > ul {
        margin: 0;
        padding-left: 30px;
      }
      .right {
        float: right;
      }
    </style>
  `;
  if (settings.basic) {
    if (report.synonyms && report.synonyms.length > 0) {
      html += `
        <section>
          <h1>Synonyms</h1>
          ${report.synonyms.join(', ')}
        </section>
      `;
    }
    if (report.fullname) {
      html += `
        <section>
          <h1>Name</h1>
          ${report.fullname}
        </section>
      `;
    }
    if (report.alternativeNames && report.alternativeNames.length > 0) {
      html += `
        <section class="alternative-names">
          <h1>Alternative Names</h1>
          <ul>
            ${report.alternativeNames.map(name => `<li>${name}</li>`).join('')}
          </ul>
        </section>
      `;
    }
    if (report.length) {
      const mw = report.mw ? round(report.mw / 1000) : '-';
      html += `
        <section>
          <h1>Length</h1>${report.length}aa
          <span class="right">
            <h1>MW</h1>${mw}kDa
          </span>
        </section>
      `;
    }
  }
  return html;
};

export default basicElement;
