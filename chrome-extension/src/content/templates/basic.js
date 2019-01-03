import round from '../helpers/round';

const basicElement = (report, settings) => {
  let html = '';
  if (settings.basic) {
    if (report.synonyms && report.synonyms.length > 0) {
      html += `
        <section>
          <span class="gene-info__heading">Synonyms</span>
          ${report.synonyms.join(', ')}
        </section>
      `;
    }
    if (report.fullname) {
      html += `
        <section>
          <span class="gene-info__heading">Name</span>
          ${report.fullname}
        </section>
      `;
    }
    if (report.alternativeNames && report.alternativeNames.length > 0) {
      html += `
        <section class="gene-info__alternative-names">
          <span class="gene-info__heading">Alternative Names</span>
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
          <span class="gene-info__heading">Length</span>${report.length}aa
          <span class="gene-info_right">
            <span class="gene-info__heading">MW</span>${mw}kDa
          </span>
        </section>
      `;
    }
  }
  return html;
};

export default basicElement;
