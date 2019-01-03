const defaultToggleState = value => Boolean(value || value === undefined);

class State {
  addReport(report) {
    this.results.push(report);
  }

  clearReports() {
    this.results = [];
  }

  removeReport(report) {
    this.results.pop(report);
  }

  clearMdTime() {
    this.mdTime = null;
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
