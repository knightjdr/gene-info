import config from '../config';

const defaultFalseToggleState = value => Boolean(value);
const defaultTrueToggleState = value => Boolean(value || value === undefined);

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
    const species = storage.species || 'Homo sapiens';
    this.settings = {
      activate: storage.activate || 'click',
      auto: defaultTrueToggleState(storage.auto),
      basic: defaultTrueToggleState(storage.basic),
      ctrl: defaultFalseToggleState(storage.ctrl),
      description: defaultTrueToggleState(storage.description),
      domain: defaultTrueToggleState(storage.domain),
      field: storage.field || 'gene',
      go: defaultTrueToggleState(storage.go),
      go_namespace: storage.go_namespace || config.defaultGoNamespace,
      interactors: defaultTrueToggleState(storage.interactors),
      links: defaultTrueToggleState(storage.links),
      localization: defaultTrueToggleState(storage.links),
      localization_compartments: defaultTrueToggleState(storage.links),
      localization_hpa: defaultTrueToggleState(storage.links),
      localization_uniprot: defaultTrueToggleState(storage.links),
      report: storage.report || 'detailed',
      rna_expression: defaultTrueToggleState(storage.rna_expression),
      rna_expression_tissues: storage.rna_expression_tissues || config.defaultTissues[species],
      region: defaultTrueToggleState(storage.region),
      species,
    };
    this.style = {
      left: '',
      right: '',
      width: '',
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

  updateStyle(setting, value) {
    this.style[setting] = value;
  }
}

export default new State();
