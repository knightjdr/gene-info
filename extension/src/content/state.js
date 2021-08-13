import config from '../config';
import confirmSettingOrder from '../utils/confirm-setting-order';

export const defaultFalseToggleState = value => Boolean(value);
export const defaultTrueToggleState = value => Boolean(value || value === undefined);

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
    this.activeReport = 0;
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

  init(storage) {
    const species = storage.species || 'Homo sapiens';
    this.activeReport = 0;
    this.searchTerm = '';
    this.settings = {
      activate: storage.activate || 'click',
      auto: defaultTrueToggleState(storage.auto),
      basic: defaultTrueToggleState(storage.basic),
      ctrl: defaultFalseToggleState(storage.ctrl),
      essentiality: defaultTrueToggleState(storage.essentiality),
      essentiality_codependencies: storage.essentiality_codependencies
        || config.defaultInputs.essentiality_codependencies,
      essentiality_tissues: storage.essentiality_tissues || config.defaultTissues.essentiality[species],
      description: defaultTrueToggleState(storage.description),
      domain: defaultTrueToggleState(storage.domain),
      field: storage.field || 'gene',
      go: defaultTrueToggleState(storage.go),
      go_namespace: storage.go_namespace || config.defaultGoNamespace,
      interactors: defaultTrueToggleState(storage.interactors),
      interactorSortDirection: 'asc',
      interactorSortKey: 'gene',
      links: defaultTrueToggleState(storage.links),
      localization: defaultTrueToggleState(storage.links),
      localization_compartments: defaultTrueToggleState(storage.links),
      localization_hpa: defaultTrueToggleState(storage.links),
      localization_uniprot: defaultTrueToggleState(storage.links),
      pathology: defaultTrueToggleState(storage.pathology),
      pathway: defaultTrueToggleState(storage.pathway),
      setting_order: confirmSettingOrder(storage.setting_order, config.defaultSettingOrder).order,
      report: storage.report || 'detailed',
      protein_expression: defaultTrueToggleState(storage.protein_expression),
      protein_expression_tissues: storage.protein_expression_tissues
        || config.defaultTissues.protein[species],
      rna_expression: defaultTrueToggleState(storage.rna_expression),
      rna_expression_tissues: storage.rna_expression_tissues || config.defaultTissues.rna[species],
      region: defaultTrueToggleState(storage.region),
      species,
      theme: storage.theme || 'light',
    };
    this.style = {
      left: '',
      right: '',
      width: '',
    };
    this.mdTime = null;
    this.results = [];
  }

  latestReport() {
    return this.results[this.results.length - 1][this.activeReport];
  }

  removeReport() {
    this.results.pop();
  }

  reset() {
    this.updateSetting('interactorSortDirection', 'asc');
    this.updateSetting('interactorSortKey', 'gene');
  }

  setActiveReport(value) {
    this.activeReport = value;
  }

  setSearchTerm(value) {
    this.searchTerm = value;
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
