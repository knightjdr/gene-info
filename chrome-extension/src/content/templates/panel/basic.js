import round from '../../helpers/round';

const basicElement = (report, settings) => {
  let html = `
    <style>
      .alternative-names > ul {
        margin: 0;
        padding-left: 30px;
      }
      .basic > div {
        margin-top: 5px;
      }
      .right {
        float: right;
      }
    </style>
  `;
  if (settings.basic) {
    html += '<section class="basic">';
    if (report.synonyms && report.synonyms.length > 0) {
      html += `
        <div>
          <h1>Synonyms</h1>
          ${report.synonyms.join(', ')}
        </div>
      `;
    }
    if (report.fullname) {
      html += `
        <div>
          <h1>Name</h1>
          ${report.fullname}
        </div>
      `;
    }
    if (report.alternativeNames && report.alternativeNames.length > 0) {
      html += `
        <div class="alternative-names">
          <h1>Alternative Names</h1>
          <ul>
            ${report.alternativeNames.map(name => `<li>${name}</li>`).join('')}
          </ul>
        </div>
      `;
    }
    if (report.length) {
      const mw = report.mw ? round(report.mw / 1000) : '-';
      html += `
        <div>
          <h1>Length</h1>${report.length}aa
          <span class="right">
            <h1>MW</h1>${mw}kDa
          </span>
        </div>
      `;
    }
    html += '</section>';
  }
  return html;
};

export default basicElement;
