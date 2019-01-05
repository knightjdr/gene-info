const defaultToggleState = value => Boolean(value || value === undefined);

class State {
  addReport(report) {
    /* If there is a previous result and it was empty, remove it
    ** before adding another */
    if (
      this.results.length
      && this.results[this.results.length - 1].length === 0
    ) {
      this.results.pop();
    }
    this.results.push(report);
  }

  clearReports() {
    this.results = [];
  }

  createShadow() {
    const div = document.createElement('div');
    document.body.insertBefore(div, document.body.firstChild);
    this.shadowRoot = div.attachShadow({ mode: 'open' });
  }

  clearMdTime() {
    this.mdTime = null;
  }

  removeReport() {
    this.results.pop();
  }

  init(storage) {
    this.settings = {
      activate: storage.activate || 'click',
      auto: defaultToggleState(storage.auto),
      basic: defaultToggleState(storage.basic),
      description: defaultToggleState(storage.description),
      domain: defaultToggleState(storage.domain),
      field: storage.field || 'gene',
      go: defaultToggleState(storage.go),
      'go-namespace': storage['go-namespace'] || 'cc',
      interactors: defaultToggleState(storage.interactors),
      links: defaultToggleState(storage.links),
      report: storage.report || 'detailed',
      species: storage.species || 'Homo sapiens',
    };
    this.mdTime = null;
    this.results = [];
  }

  updateMdTime() {
    this.mdTime = Date.now();
  }

  updateSetting(setting, value) {
    this.settings[setting] = value;
  }
}

module.exports = new State();
