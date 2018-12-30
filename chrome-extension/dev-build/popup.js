/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./chrome-extension/src/popup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chrome-extension/src/popup/index.js":
/*!*********************************************!*\
  !*** ./chrome-extension/src/popup/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listeners_bind_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/bind-listeners */ "./chrome-extension/src/popup/listeners/bind-listeners.js");
/* harmony import */ var _settings_load_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/load-preferences */ "./chrome-extension/src/popup/settings/load-preferences.js");
/* harmony import */ var _populate_populate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populate/populate */ "./chrome-extension/src/popup/populate/populate.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popup.css */ "./chrome-extension/src/popup/popup.css");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popup_css__WEBPACK_IMPORTED_MODULE_3__);






document.addEventListener('DOMContentLoaded', () => {
  // Populate menus.
  Object(_populate_populate__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // Get user preferences on load.
  Object(_settings_load_preferences__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Bind event handlers.
  Object(_listeners_bind_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])();
});


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/activation-check.js":
/*!******************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/activation-check.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const activatationCheck = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_activate: option });
    } else {
      document.getElementById(`check_activate_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'updateActivationMethod', type });
};

/* harmony default export */ __webpack_exports__["default"] = (activatationCheck);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/bind-listeners.js":
/*!****************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/bind-listeners.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activation_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-check */ "./chrome-extension/src/popup/listeners/activation-check.js");
/* harmony import */ var _namespace_check__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace-check */ "./chrome-extension/src/popup/listeners/namespace-check.js");
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./on-change */ "./chrome-extension/src/popup/listeners/on-change.js");
/* harmony import */ var _on_enter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-enter */ "./chrome-extension/src/popup/listeners/on-enter.js");
/* harmony import */ var _report_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-check */ "./chrome-extension/src/popup/listeners/report-check.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggle */ "./chrome-extension/src/popup/listeners/toggle.js");







const bindListeners = () => {
  document.querySelectorAll('.click-activate').forEach((element) => {
    element.addEventListener('click', _activation_check__WEBPACK_IMPORTED_MODULE_0__["default"]);
  });
  document.querySelectorAll('.click-display').forEach((element) => {
    element.addEventListener('click', _report_check__WEBPACK_IMPORTED_MODULE_4__["default"]);
  });
  document.querySelectorAll('.click-namespace').forEach((element) => {
    element.addEventListener('click', _namespace_check__WEBPACK_IMPORTED_MODULE_1__["default"]);
  });
  document.querySelectorAll('.input-search').forEach((element) => {
    element.addEventListener('keypress', _on_enter__WEBPACK_IMPORTED_MODULE_3__["default"]);
  });
  document.querySelectorAll('.select').forEach((element) => {
    element.addEventListener('change', _on_change__WEBPACK_IMPORTED_MODULE_2__["default"]);
  });
  document.querySelectorAll('.toggle').forEach((element) => {
    element.addEventListener('click', _toggle__WEBPACK_IMPORTED_MODULE_5__["default"]);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bindListeners);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/namespace-check.js":
/*!*****************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/namespace-check.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const namespaceCheck = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_namespace: option });
    } else {
      document.getElementById(`check_namespace_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'updateNamespace', type });
};

/* harmony default export */ __webpack_exports__["default"] = (namespaceCheck);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/on-change.js":
/*!***********************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/on-change.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const onChange = function change() {
  const { value } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [`select_${type}`]: value });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'updateSelect', type, value });
};

/* harmony default export */ __webpack_exports__["default"] = (onChange);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/on-enter.js":
/*!**********************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/on-enter.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const onEnter = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = this;
    chrome.storage.local.set({ input_search: value });
    if (value) {
      Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'searchTerm', value });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (onEnter);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/report-check.js":
/*!**************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/report-check.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const reportCheck = function report() {
  const options = ['detailed', 'tooltip'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ check_report: option });
    } else {
      document.getElementById(`check_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'updateReportType', type });
};

/* harmony default export */ __webpack_exports__["default"] = (reportCheck);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/toggle.js":
/*!********************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/toggle.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const toggle = function tog() {
  const { checked } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [`toggle_${type}`]: checked });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'toggleDisplayElement', type, checked });
  const optionsID = `toggle_options_${type}`;
  const el = document.getElementById(optionsID);
  if (el) {
    el.style.display = checked ? 'block' : 'none';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (toggle);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/update-tab.js":
/*!************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/update-tab.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Send object to content script. Do this for all tabs as they should all update
// When a setting changes.
const updateTab = (setting) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, setting);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (updateTab);


/***/ }),

/***/ "./chrome-extension/src/popup/populate/populate.js":
/*!*********************************************************!*\
  !*** ./chrome-extension/src/popup/populate/populate.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _species__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./species */ "./chrome-extension/src/popup/populate/species.js");
/* harmony import */ var _tissues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tissues */ "./chrome-extension/src/popup/populate/tissues.js");



const populate = () => {
  Object(_species__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_tissues__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (populate);


/***/ }),

/***/ "./chrome-extension/src/popup/populate/species.js":
/*!********************************************************!*\
  !*** ./chrome-extension/src/popup/populate/species.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../database/config */ "./database/config.js");
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_config__WEBPACK_IMPORTED_MODULE_0__);


const species = () => {
  const select = document.getElementById('select_species');
  _database_config__WEBPACK_IMPORTED_MODULE_0___default.a.species.forEach((specie) => {
    const option = document.createElement('option');
    option.value = specie.split(' ').join('-');
    option.innerHTML = specie;
    select.appendChild(option);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (species);


/***/ }),

/***/ "./chrome-extension/src/popup/populate/tissues.js":
/*!********************************************************!*\
  !*** ./chrome-extension/src/popup/populate/tissues.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_files_rna_tissues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../database/files/rna-tissues */ "./database/files/rna-tissues.js");
/* harmony import */ var _listeners_update_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");
/* harmony import */ var _node_modules_slim_select_dist_slimselect_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/slim-select/dist/slimselect.css */ "./node_modules/slim-select/dist/slimselect.css");
/* harmony import */ var _node_modules_slim_select_dist_slimselect_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slim_select_dist_slimselect_css__WEBPACK_IMPORTED_MODULE_3__);
/* eslint no-new: 0 */








const defaultTissues = ['HeLa', 'HEK 293', 'U-2 OS'];

const storedTissues = () => (
  new Promise((resolve) => {
    chrome.storage.local.get('select_tissues', (storage) => {
      resolve(storage.select_tissues || defaultTissues);
    });
  })
);

const tissues = async () => {
  // const select = document.getElementById('select_tissues');
  const species = document.getElementById('select_species').value.replace('-', ' ');
  const selectedTissues = await storedTissues();

  new slim_select__WEBPACK_IMPORTED_MODULE_0___default.a({
    closeOnSelect: false,
    data: [
      { placeholder: true, text: 'Select cells/tissues' },
      {
        label: 'Cells',
        options: _database_files_rna_tissues__WEBPACK_IMPORTED_MODULE_1__["default"][species].cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      },
      {
        label: 'Tissues',
        options: _database_files_rna_tissues__WEBPACK_IMPORTED_MODULE_1__["default"][species].tissues.map(tissue => ({
          selected: selectedTissues.includes(tissue),
          text: tissue,
        })),
      },
    ],
    onChange: (options) => {
      const selected = options.map(option => option.value);
      chrome.storage.local.set({ select_tissues: selected });
      Object(_listeners_update_tab__WEBPACK_IMPORTED_MODULE_2__["default"])({ action: 'updateTissues', selected });
    },
    select: '.slim-select',
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tissues);


/***/ }),

/***/ "./chrome-extension/src/popup/popup.css":
/*!**********************************************!*\
  !*** ./chrome-extension/src/popup/popup.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./chrome-extension/src/popup/popup.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./chrome-extension/src/popup/settings/activation-checkbox.js":
/*!********************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/activation-checkbox.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = ['click', 'drag', 'disable'];

const activationCheckbox = () => {
  chrome.storage.local.get('check_activate', (storage) => {
    const activate = storage.check_activate || 'click';
    options.forEach((option) => {
      const checked = option === activate;
      document.getElementById(`check_activate_${option}`).checked = checked;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (activationCheckbox);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/load-preferences.js":
/*!*****************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/load-preferences.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activation_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-checkbox */ "./chrome-extension/src/popup/settings/activation-checkbox.js");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus */ "./chrome-extension/src/popup/settings/menus.js");
/* harmony import */ var _namespace_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namespace-checkbox */ "./chrome-extension/src/popup/settings/namespace-checkbox.js");
/* harmony import */ var _report_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-checkbox */ "./chrome-extension/src/popup/settings/report-checkbox.js");
/* harmony import */ var _search_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-input */ "./chrome-extension/src/popup/settings/search-input.js");
/* harmony import */ var _toggles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toggles */ "./chrome-extension/src/popup/settings/toggles.js");







const loadPreferences = () => {
  Object(_activation_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_menus__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_namespace_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_report_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_search_input__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_toggles__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (loadPreferences);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/menus.js":
/*!******************************************************!*\
  !*** ./chrome-extension/src/popup/settings/menus.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menuDefaults = [
  { name: 'field', value: 'gene' },
  { name: 'species', value: 'Homo-sapiens' },
];

const menus = () => {
  menuDefaults.forEach((menu) => {
    const currMenu = `select_${menu.name}`;
    chrome.storage.local.get(currMenu, (storage) => {
      const value = storage[currMenu] || menu.value;
      document.getElementById(currMenu).value = value;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (menus);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/namespace-checkbox.js":
/*!*******************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/namespace-checkbox.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = ['bp', 'cc', 'mf'];

const namespaceCheckbox = () => {
  chrome.storage.local.get('check_namespace', (storage) => {
    const namespace = storage.check_namespace || 'bp';
    options.forEach((option) => {
      const checked = option === namespace;
      document.getElementById(`check_namespace_${option}`).checked = checked;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (namespaceCheckbox);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/report-checkbox.js":
/*!****************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/report-checkbox.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reportCheckbox = () => {
  const options = ['detailed', 'tooltip'];
  chrome.storage.local.get('check_report', (storage) => {
    const report = storage.check_report || 'detailed';
    options.forEach((option) => {
      const checked = option === report;
      document.getElementById(`check_${option}`).checked = checked;
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reportCheckbox);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/search-input.js":
/*!*************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/search-input.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const searchInput = () => {
  chrome.storage.local.get('input_search', (storage) => {
    const value = storage.input_search || '';
    document.getElementById('input_search').value = value;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (searchInput);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/toggles.js":
/*!********************************************************!*\
  !*** ./chrome-extension/src/popup/settings/toggles.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = [
  'auto',
  'basic',
  'description',
  'domain',
  'go',
  'interactors',
  'links',
  'localization',
  'localization_compartments',
  'localization_hpa',
  'localization_uniprot',
  'rna',
];

const toggles = () => {
  options.forEach((option) => {
    const currToggle = `toggle_${option}`;
    chrome.storage.local.get(currToggle, (storage) => {
      const checked = Boolean(storage[currToggle] || storage[currToggle] === undefined);
      document.getElementById(`toggle_${option}`).checked = checked;
      const el = document.getElementById(`toggle_options_${option}`);
      if (el) {
        el.style.display = checked ? 'block' : 'none';
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toggles);


/***/ }),

/***/ "./database/config.js":
/*!****************************!*\
  !*** ./database/config.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const config = {
  fields: [
    'accession',
    'comment',
    'dbReference',
    'gene',
    'organism',
    'protein',
    'sequence',
  ],
  species: [
    'Homo sapiens',
  ],
  speciesID: {
    9606: 'Homo sapiens',
  },
};

module.exports = config;


/***/ }),

/***/ "./database/files/rna-tissues.js":
/*!***************************************!*\
  !*** ./database/files/rna-tissues.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const rnaTissues = {
  'Homo sapiens': {
    cells: [
      'A-431',
      'A549',
      'AF22',
      'AN3-CA',
      'ASC diff',
      'ASC TERT1',
      'BEWO',
      'BJ',
      'BJ hTERT+',
      'BJ hTERT+ SV40 Large T+',
      'BJ hTERT+ SV40 Large T+ RasG12V',
      'CACO-2',
      'CAPAN-2',
      'Daudi',
      'EFO-21',
      'fHDF/TERT166',
      'HaCaT',
      'HAP1',
      'HBEC3-KT',
      'HBF TERT88',
      'HDLM-2',
      'HEK 293',
      'HEL',
      'HeLa',
      'Hep G2',
      'HHSteC',
      'HL-60',
      'HMC-1',
      'HSkMC',
      'hTCEpi',
      'hTEC/SVTERT24-B',
      'hTERT-HME1',
      'HUVEC TERT2',
      'K-562',
      'Karpas-707',
      'LHCN-M2',
      'MCF7',
      'MOLT-4',
      'NB-4',
      'NTERA-2',
      'PC-3',
      'REH',
      'RH-30',
      'RPMI-8226',
      'RPTEC TERT1',
      'RT4',
      'SCLC-21H',
      'SH-SY5Y',
      'SiHa',
      'SK-BR-3',
      'SK-MEL-30',
      'T-47d',
      'THP-1',
      'TIME',
      'U-138 MG',
      'U-2 OS',
      'U-2197',
      'U-251 MG',
      'U-266/70',
      'U-266/84',
      'U-698',
      'U-87 MG',
      'U-937',
      'WM-115',
    ],
    tissues: [
      'adipose tissue',
      'adrenal gland',
      'appendix',
      'bone marrow',
      'breast',
      'cerebral cortex',
      'cervix, uterine',
      'colon',
      'duodenum',
      'endometrium',
      'epididymis',
      'esophagus',
      'fallopian tube',
      'gallbladder',
      'heart muscle',
      'kidney',
      'liver',
      'lung',
      'lymph node',
      'ovary',
      'pancreas',
      'parathyroid gland',
      'placenta',
      'prostate',
      'rectum',
      'salivary gland',
      'seminal vesicle',
      'skeletal muscle',
      'skin',
      'small intestine',
      'smooth muscle',
      'spleen',
      'stomach',
      'testis',
      'thyroid gland',
      'tonsil',
      'urinary bladder',
    ],
  },
};

/* harmony default export */ __webpack_exports__["default"] = (rnaTissues);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./chrome-extension/src/popup/popup.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./chrome-extension/src/popup/popup.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  --green: #4caf50;\n  --grey: #bdbdbd;\n  display: grid;\n  font-family: var(--font-stack);\n  font-size: 12px;\n  grid-column-gap: 10px;\n  grid-template-columns: 170px 170px;\n  grid-template-rows: auto;\n  margin: 5px 8px;\n  width: 350px;\n}\nbody > div:first-child {\n  grid-column: 1;\n  grid-row: 1;\n}\nbody > div:nth-child(2) {\n  grid-column: 2;\n  grid-row: 1;\n}\nbody > div:last-child {\n  border-top: 1px solid #A5D6A7;\n  grid-column: 1 / 3;\n  grid-row: 2;\n  padding-top: 3px;\n  text-align: center;\n  width: 100%;\n}\nbody > div > section:not(:first-child) {\n  margin-top: 10px;\n}\nem {\n  display: block;\n  margin-bottom: 5px;\n  margin-top: 2px;\n}\nsection > h1 {\n  font-size: 14px;\n  margin: 5px 0;\n}\n.activate > div,\n.display > div {\n  margin: 7px 0;\n}\n\n/* Checkbox */\n.checkbox:not(:checked),\n.checkbox:checked {\n  position: absolute;\n}\n.checkbox:not(:checked) + label,\n.checkbox:checked + label {\n  position: relative;\n  padding-left: 30px;\n  padding-top: 3px;\n  cursor: pointer;\n}\n.checkbox:not(:checked) + label:before,\n.checkbox:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.25em; height: 1.25em;\n  border: 2px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);\n}\n.checkbox:not(:checked) + label:after,\n.checkbox:checked + label:after {\n  content: '\\2713';\n  position: absolute;\n  top: .1em; left: .3em;\n  font-size: 1.3em;\n  line-height: 0.8;\n  color: var(--green);\n  transition: all .2s;\n}\n.checkbox:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n.checkbox:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.checkbox + label:hover:before {\n  border: 2px solid var(--green) !important;\n  transition: border .2s;\n}\n\n/* input */\n.input-search {\n  border-radius: 2px;\n  border-width: 1px;\n  height: 20px;\n  width: 98%;\n}\n.input-search:focus {\n  box-shadow: 0px 0px 1px 1px var(--green);\n  outline: none;\n}\n\n/* select */\nselect {\n  height: 25px;\n  width: 100%;\n}\nselect:focus {\n  box-shadow: 0px 0px 1px 1px var(--green);\n  outline: none;\n}\n.slim-select {\n  height: auto;\n}\n\n/* Toggle */\n.toggle-container {\n  align-items: center;\n  display: flex;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0px 5px 0px;\n  width: 100%;\n}\n.toggle {\n  display: none;\n}\n.toggle + label {\n  margin-right: 5px;\n}\n.toggle,\n.toggle:after,\n.toggle:before,\n.toggle *,\n.toggle *:after,\n.toggle *:before,\n.toggle + label {\n  box-sizing: border-box;\n}\n.toggle::selection,\n.toggle:after::selection,\n.toggle:before::selection,\n.toggle *::selection,\n.toggle *:after::selection,\n.toggle *:before::selection,\n.toggle + label::selection {\n  background: none;\n}\n.toggle + label {\n  outline: 0;\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n}\n.toggle + label:after,\n.toggle + label:before {\n  position: relative;\n  display: inline-block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n.toggle + label:after {\n  left: 0;\n}\n.toggle + label:before {\n  display: none;\n}\n.toggle:checked + label:after {\n  left: 50%;\n}\n.toggle-flat + label {\n  padding: 1px;\n  transition: all .2s ease;\n  background: #fff;\n  border: 2px solid var(--grey);\n  border-radius: 2em;\n}\n.toggle-flat + label:after {\n  transition: all .2s ease;\n  background: var(--grey);\n  content: \"\";\n  border-radius: 1em;\n}\n.toggle-flat:checked + label {\n  border: 2px solid var(--green);\n}\n.toggle-flat:checked + label:after {\n  left: 50%;\n  background: var(--green);\n}\n.toggle-options {\n  border-bottom: 1px solid #A5D6A7;\n  border-top: 1px dotted #A5D6A7;\n  display: block;\n  padding: 5px 0 5px 20px;\n}\n.toggle-options > h2 {\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.toggle-options > div {\n  margin: 5px 0;\n}\n.toggle-options_no-bottom_border {\n  border-bottom: none;\n}\n.toggle-options_no-padding {\n  padding-left: 0;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ss-main {\n  position: relative;\n  display: inline-block;\n  user-select: none;\n  color: #666666;\n  width: 100%; }\n  .ss-main .ss-single-selected {\n    display: flex;\n    cursor: pointer;\n    width: 100%;\n    height: 30px;\n    padding: 6px;\n    border: 1px solid #dcdee2;\n    border-radius: 4px;\n    background-color: #ffffff;\n    outline: 0;\n    box-sizing: border-box;\n    transition: background-color .3s; }\n    .ss-main .ss-single-selected.ss-disabled {\n      background-color: #dcdee2;\n      cursor: not-allowed; }\n    .ss-main .ss-single-selected.ss-open-above {\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px; }\n    .ss-main .ss-single-selected.ss-open-below {\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px; }\n    .ss-main .ss-single-selected .placeholder {\n      display: flex;\n      flex: 1 1 100%;\n      align-items: center;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      text-align: left;\n      width: calc(100% - 30px);\n      line-height: 1em;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n      .ss-main .ss-single-selected .placeholder * {\n        display: flex;\n        align-items: center;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: auto; }\n      .ss-main .ss-single-selected .placeholder .ss-disabled {\n        cursor: pointer;\n        color: #8a8a8a; }\n    .ss-main .ss-single-selected .ss-deselect {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      flex: 0 1 auto;\n      margin: 0 6px 0 6px;\n      font-weight: bold; }\n      .ss-main .ss-single-selected .ss-deselect.ss-hide {\n        display: none; }\n    .ss-main .ss-single-selected .ss-arrow {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      flex: 0 1 auto;\n      margin: 0 6px 0 6px; }\n      .ss-main .ss-single-selected .ss-arrow span {\n        border: solid #666666;\n        border-width: 0 2px 2px 0;\n        display: inline-block;\n        padding: 3px;\n        transition: transform .2s, margin .2s; }\n        .ss-main .ss-single-selected .ss-arrow span.arrow-up {\n          transform: rotate(-135deg);\n          margin: 3px 0 0 0; }\n        .ss-main .ss-single-selected .ss-arrow span.arrow-down {\n          transform: rotate(45deg);\n          margin: -3px 0 0 0; }\n  .ss-main .ss-multi-selected {\n    display: flex;\n    flex-direction: row;\n    cursor: pointer;\n    min-height: 30px;\n    width: 100%;\n    padding: 0 0 0 3px;\n    border: 1px solid #dcdee2;\n    border-radius: 4px;\n    background-color: #ffffff;\n    outline: 0;\n    box-sizing: border-box;\n    transition: background-color .3s; }\n    .ss-main .ss-multi-selected.ss-disabled {\n      background-color: #dcdee2;\n      cursor: not-allowed; }\n      .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {\n        color: #666666; }\n      .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {\n        cursor: not-allowed; }\n    .ss-main .ss-multi-selected.ss-open-above {\n      border-top-left-radius: 0px;\n      border-top-right-radius: 0px; }\n    .ss-main .ss-multi-selected.ss-open-below {\n      border-bottom-left-radius: 0px;\n      border-bottom-right-radius: 0px; }\n    .ss-main .ss-multi-selected .ss-values {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n      flex: 1 1 100%;\n      width: calc(100% - 30px); }\n      .ss-main .ss-multi-selected .ss-values .ss-disabled {\n        display: flex;\n        padding: 4px 5px;\n        margin: 2px 0px;\n        line-height: 1em;\n        align-items: center;\n        width: 100%;\n        color: #8a8a8a;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap; }\n\n@keyframes scaleIn {\n  0% {\n    transform: scale(0);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes scaleOut {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0);\n    opacity: 0; } }\n      .ss-main .ss-multi-selected .ss-values .ss-value {\n        display: flex;\n        user-select: none;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 5px;\n        margin: 3px 5px 3px 0px;\n        color: #ffffff;\n        background-color: #5897fb;\n        border-radius: 4px;\n        animation-name: scaleIn;\n        animation-duration: .2s;\n        animation-timing-function: ease-out;\n        animation-fill-mode: both; }\n        .ss-main .ss-multi-selected .ss-values .ss-value.ss-out {\n          animation-name: scaleOut;\n          animation-duration: .2s;\n          animation-timing-function: ease-out; }\n        .ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {\n          margin: 0 0 0 5px;\n          cursor: pointer; }\n    .ss-main .ss-multi-selected .ss-add {\n      display: flex;\n      flex: 0 1 3px;\n      margin: 9px 12px 0 5px; }\n      .ss-main .ss-multi-selected .ss-add .ss-plus {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #666666;\n        position: relative;\n        height: 10px;\n        width: 2px;\n        transition: transform .2s; }\n        .ss-main .ss-multi-selected .ss-add .ss-plus:after {\n          background: #666666;\n          content: \"\";\n          position: absolute;\n          height: 2px;\n          width: 10px;\n          left: -4px;\n          top: 4px; }\n        .ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {\n          transform: rotate(45deg); }\n  .ss-main .ss-content {\n    position: absolute;\n    width: 100%;\n    margin: -1px 0 0 0;\n    box-sizing: border-box;\n    border: solid 1px #dcdee2;\n    z-index: 1010;\n    background-color: #ffffff;\n    transform-origin: center top;\n    transition: transform .2s, opacity .2s;\n    opacity: 0;\n    transform: scaleY(0); }\n    .ss-main .ss-content.ss-open {\n      display: block;\n      opacity: 1;\n      transform: scaleY(1); }\n    .ss-main .ss-content .ss-search {\n      display: flex;\n      flex-direction: row;\n      padding: 8px 8px 6px 8px; }\n      .ss-main .ss-content .ss-search.ss-hide {\n        height: 0px;\n        opacity: 0;\n        padding: 0px 0px 0px 0px;\n        margin: 0px 0px 0px 0px; }\n        .ss-main .ss-content .ss-search.ss-hide input {\n          height: 0px;\n          opacity: 0;\n          padding: 0px 0px 0px 0px;\n          margin: 0px 0px 0px 0px; }\n      .ss-main .ss-content .ss-search input {\n        display: inline-flex;\n        font-size: inherit;\n        line-height: inherit;\n        flex: 1 1 auto;\n        width: 100%;\n        min-width: 0px;\n        height: 30px;\n        padding: 6px 8px;\n        margin: 0;\n        border: 1px solid #dcdee2;\n        border-radius: 4px;\n        background-color: #ffffff;\n        outline: 0;\n        text-align: left;\n        box-sizing: border-box;\n        -webkit-box-sizing: border-box;\n        -webkit-appearance: textfield; }\n        .ss-main .ss-content .ss-search input::placeholder {\n          color: #bdbdbd;\n          vertical-align: middle; }\n        .ss-main .ss-content .ss-search input:focus {\n          box-shadow: 0 0 5px #5897fb; }\n      .ss-main .ss-content .ss-search .ss-addable {\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        font-size: 22px;\n        font-weight: bold;\n        flex: 0 0 30px;\n        height: 30px;\n        margin: 0 0 0 8px;\n        border: 1px solid #dcdee2;\n        border-radius: 4px;\n        box-sizing: border-box; }\n    .ss-main .ss-content .ss-addable {\n      padding-top: 0px; }\n    .ss-main .ss-content .ss-list {\n      max-height: 200px;\n      overflow-x: hidden;\n      overflow-y: auto;\n      text-align: left; }\n      .ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label {\n        padding: 6px 10px 6px 10px;\n        font-weight: bold; }\n      .ss-main .ss-content .ss-list .ss-optgroup .ss-option {\n        padding: 6px 6px 6px 25px; }\n      .ss-main .ss-content .ss-list .ss-option {\n        padding: 6px 10px 6px 10px;\n        cursor: pointer;\n        user-select: none; }\n        .ss-main .ss-content .ss-list .ss-option * {\n          display: inline-block; }\n        .ss-main .ss-content .ss-list .ss-option:hover, .ss-main .ss-content .ss-list .ss-option.ss-highlighted {\n          color: #ffffff;\n          background-color: #5897fb; }\n        .ss-main .ss-content .ss-list .ss-option.ss-disabled {\n          cursor: default;\n          color: #bdbdbd;\n          background-color: #ffffff; }\n        .ss-main .ss-content .ss-list .ss-option.ss-hide {\n          display: none; }\n        .ss-main .ss-content .ss-list .ss-option .ss-search-highlight {\n          background-color: #fff70062; }\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.css":
/*!******************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./slimselect.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/slim-select/dist/slimselect.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,function(){return function(i){var n={};function s(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}return s.m=i,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=2)}([function(e,t,i){"use strict";t.__esModule=!0,t.hasClassInTree=function(e,t){function n(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}return n(e,t)||function e(t,i){return t&&t!==document?n(t,i)?t:e(t.parentNode,i):null}(e,t)},t.ensureElementInView=function(e,t){var i=e.scrollTop+e.offsetTop,n=i+e.clientHeight,s=t.offsetTop,a=s+t.clientHeight;s<i?e.scrollTop-=i-s:n<a&&(e.scrollTop+=a-n)},t.putContent=function(e,t,i){var n=e.offsetHeight,s=e.getBoundingClientRect(),a=i?s.top:s.top-n,o=i?s.bottom:s.bottom+n;return a<=0?"below":o>=window.innerHeight?"above":i?t:"below"},t.debounce=function(n,s,a){var o;return void 0===s&&(s=100),void 0===a&&(a=!1),function(){var e=self,t=arguments,i=a&&!o;clearTimeout(o),o=setTimeout(function(){o=null,a||n.apply(e,t)},s),i&&n.apply(e,t)}},t.isValueInArrayOfObjects=function(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var n=0;n<e.length;n++)if(e[n]&&e[n][t]&&e[n][t]===i)return!0;return!1},t.highlight=function(e,t,i){var n=n||e,s=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(s))return e;var a=e.match(s).index,o=a+e.match(s)[0].toString().length,l=e.substring(a,o);return n=n.replace(s,'<mark class="'+i+'">'+l+"</mark>")},function(){var e=window;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}"function"!=typeof e.CustomEvent&&(t.prototype=e.Event.prototype,e.CustomEvent=t)}()},function(e,t,i){"use strict";t.__esModule=!0;var n=function(){function e(e){this.contentOpen=!1,this.contentPosition="below",this.isOnChangeEnabled=!0,this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}return e.prototype.newOption=function(e){return{id:e.id?e.id:String(Math.floor(1e8*Math.random())),value:e.value?e.value:"",text:e.text?e.text:"",innerHTML:e.innerHTML?e.innerHTML:"",selected:!!e.selected&&e.selected,display:void 0===e.display||e.display,disabled:!!e.disabled&&e.disabled,placeholder:!!e.placeholder&&e.placeholder,data:e.data?e.data:{}}},e.prototype.add=function(e){var t={id:String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:"",selected:!1,display:!0,disabled:!1,placeholder:!1,data:{}};this.data.push(t)},e.prototype.parseSelectData=function(){this.data=[];for(var e=this.main.select.element.childNodes,t=0;t<e.length;t++)if("OPTGROUP"===e[t].nodeName){for(var i={label:e[t].label,options:[]},n=e[t].childNodes,s=0;s<n.length;s++)if("OPTION"===n[s].nodeName){var a=this.pullOptionData(n[s]);i.options.push(a),a.placeholder&&""!==a.text.trim()&&(this.main.config.placeholderText=a.text)}this.data.push(i)}else if("OPTION"===e[t].nodeName){a=this.pullOptionData(e[t]);this.data.push(a),a.placeholder&&""!==a.text.trim()&&(this.main.config.placeholderText=a.text)}},e.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,innerHTML:e.innerHTML,selected:e.selected,disabled:e.disabled,placeholder:"true"===e.dataset.placeholder,data:e.dataset}},e.prototype.setSelectedFromSelect=function(){var e=this.main.select.element.options;if(this.main.config.isMultiple){for(var t=[],i=0;i<e.length;i++){if((s=e[i]).selected){var n=this.getObjectFromData(s.value,"value");n&&n.id&&t.push(n.id)}}this.setSelected(t,"id")}else if(-1!==e.selectedIndex){var s,a=(s=e[e.selectedIndex]).value;this.setSelected(a,"value")}},e.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0;i<this.data.length;i++)if(this.data[i].hasOwnProperty("label")){if(this.data[i].hasOwnProperty("options")){var n=this.data[i].options;if(n)for(var s=0;s<n.length;s++)n[s].placeholder||(n[s].selected=this.shouldBeSelected(n[s],e,t))}}else this.data[i].selected=this.shouldBeSelected(this.data[i],e,t)},e.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t)){for(var n=0;n<t.length;n++)if(i in e&&String(e[i])===String(t[n]))return!0}else if(i in e&&String(e[i])===String(t))return!0;return!1},e.prototype.getSelected=function(){for(var e={text:""},t=[],i=0;i<this.data.length;i++)if(this.data[i].hasOwnProperty("label")){if(this.data[i].hasOwnProperty("options")){var n=this.data[i].options;if(n)for(var s=0;s<n.length;s++)n[s].selected&&(this.main.config.isMultiple?t.push(n[s]):e=n[s])}}else this.data[i].selected&&(this.main.config.isMultiple?t.push(this.data[i]):e=this.data[i]);return this.main.config.isMultiple?t:e},e.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){var i=[],n=this.getSelected();if(Array.isArray(n))for(var s=0;s<n.length;s++)i.push(n[s][t]);i.push(e),this.setSelected(i,t)}},e.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],n=this.getSelected(),s=0;s<n.length;s++)String(n[s][t])!==String(e)&&i.push(n[s][t]);this.setSelected(i,t)}},e.prototype.onDataChange=function(){this.main.onChange&&this.isOnChangeEnabled&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},e.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0;i<this.data.length;i++){if(t in this.data[i]&&String(this.data[i][t])===String(e))return this.data[i];if(this.data[i].hasOwnProperty("options")){var n=this.data[i];if(n.options)for(var s=0;s<n.options.length;s++)if(String(n.options[s][t])===String(e))return n.options[s]}}return null},e.prototype.search=function(s){if(""!==(this.searchValue=s).trim()){var e=this.data.slice(0);s=s.trim().toLowerCase();var t=e.map(function(e){if(e.hasOwnProperty("options")){var t=e,i=[];if(t.options&&(i=t.options.filter(function(e){return-1!==e.text.toLowerCase().indexOf(s)})),0!==i.length){var n=Object.assign({},t);return n.options=i,n}}if(e.hasOwnProperty("text")&&-1!==e.text.toLowerCase().indexOf(s))return e;return null});this.filtered=t.filter(function(e){return e})}else this.filtered=null},e}();function a(e){return void 0!==e.text||(console.error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e)),!1)}t.default=n,t.validateData=function(e){if(!e)return console.error("Data must be an array of objects"),!1;for(var t=0,i=0;i<e.length;i++)if(e[i].hasOwnProperty("label")){if(e[i].hasOwnProperty("options")){var n=e[i].options;if(n)for(var s=0;s<n.length;s++)a(n[s])||t++}}else a(e[i])||t++;return 0===t},t.validateOption=a},function(e,t,i){"use strict";t.__esModule=!0;var n=i(3),s=i(0),a=i(4),o=i(1),l=i(5),r=function(){function e(e){var t=this;this.ajax=null,this.addable=null,this.beforeOnChange=null,this.onChange=null,this.beforeOpen=null,this.afterOpen=null,this.beforeClose=null,this.afterClose=null;var i=this.validate(e);i.dataset.ssid&&this.destroy(i.dataset.ssid),e.ajax&&(this.ajax=e.ajax),e.addable&&(this.addable=e.addable),this.config=new n.default({select:i,isAjax:!!e.ajax,showSearch:e.showSearch,searchPlaceholder:e.searchPlaceholder,searchText:e.searchText,searchingText:e.searchingText,searchHighlight:e.searchHighlight,closeOnSelect:e.closeOnSelect,showContent:e.showContent,placeholderText:e.placeholder,allowDeselect:e.allowDeselect,isEnabled:e.isEnabled,valuesUseText:e.valuesUseText,showOptionTooltips:e.showOptionTooltips,limit:e.limit}),this.select=new a.default({select:i,main:this}),this.data=new o.default({main:this}),this.slim=new l.default({main:this}),this.select.element.parentNode&&this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),e.data?this.setData(e.data):this.render(),document.addEventListener("click",function(e){e.target&&!s.hasClassInTree(e.target,t.config.id)&&t.close()}),window.addEventListener("scroll",s.debounce(function(e){t.data.contentOpen&&"auto"===t.config.showContent&&("above"===s.putContent(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())}),!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange),e.beforeOpen&&(this.beforeOpen=e.beforeOpen),e.afterOpen&&(this.afterOpen=e.afterOpen),e.beforeClose&&(this.beforeClose=e.beforeClose),e.afterClose&&(this.afterClose=e.afterClose),this.config.isEnabled||this.disable()}return e.prototype.validate=function(e){var t="string"==typeof e.select?document.querySelector(e.select):e.select;if(!t)throw new Error("Could not find select element");if("SELECT"!==t.tagName)throw new Error("Element isnt of type select");return t},e.prototype.selected=function(){if(this.config.isMultiple){for(var e=this.data.getSelected(),t=[],i=0;i<e.length;i++)t.push(e[i].value);return t}return(e=this.data.getSelected())?e.value:""},e.prototype.set=function(e,t,i,n){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===n&&(n=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.select.setValue(),this.data.onDataChange(),this.render(),i&&this.close()},e.prototype.setSelected=function(e,t,i,n){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===n&&(n=!0),this.set(e,t,i,n)},e.prototype.setData=function(e){if(o.validateData(e)){var t=JSON.parse(JSON.stringify(e)),i=this.data.getSelected();if(this.config.isAjax&&i)if(this.config.isMultiple)for(var n=i.reverse(),s=0;s<n.length;s++)t.unshift(n[s]);else t.unshift(this.data.getSelected()),t.unshift({text:"",placeholder:!0});this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect()}else console.error("Validation problem on: #"+this.select.element.id)},e.prototype.addData=function(e){if(o.validateData([e])){var t=this.data.newOption(e);this.data.add(t),this.select.create(this.data.data),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()}else console.error("Validation problem on: #"+this.select.element.id)},e.prototype.open=function(){var e=this;if(this.config.isEnabled&&!this.data.contentOpen){if(this.slim.search.input.focus(),this.beforeOpen&&this.beforeOpen(),this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.plus.classList.add("ss-cross"):this.slim.singleSelected&&(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.slim.content.classList.add(this.config.open),"up"===this.config.showContent.toLowerCase()?this.moveContentAbove():"down"===this.config.showContent.toLowerCase()?this.moveContentBelow():"above"===s.putContent(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),!this.config.isMultiple){var t=this.data.getSelected();if(t){var i=t.id,n=this.slim.list.querySelector('[data-id="'+i+'"]');n&&s.ensureElementInView(this.slim.list,n)}}setTimeout(function(){e.data.contentOpen=!0,e.afterOpen&&e.afterOpen()},300)}},e.prototype.close=function(){var e=this;this.data.contentOpen&&(this.beforeClose&&this.beforeClose(),this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""),setTimeout(function(){e.slim.content.removeAttribute("style"),e.data.contentPosition="below",e.config.isMultiple&&e.slim.multiSelected?(e.slim.multiSelected.container.classList.remove(e.config.openAbove),e.slim.multiSelected.container.classList.remove(e.config.openBelow)):e.slim.singleSelected&&(e.slim.singleSelected.container.classList.remove(e.config.openAbove),e.slim.singleSelected.container.classList.remove(e.config.openBelow)),e.slim.search.input.blur(),e.afterClose&&e.afterClose()},300))},e.prototype.moveContentAbove=function(){var e=0;this.config.isMultiple&&this.slim.multiSelected?e=this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected&&(e=this.slim.singleSelected.container.offsetHeight);var t=e+this.slim.content.offsetHeight-1;this.slim.content.style.margin="-"+t+"px 0 0 0",this.slim.content.style.height=t-e+1+"px",this.slim.content.style.transformOrigin="center bottom",this.data.contentPosition="above",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.container.classList.add(this.config.openAbove)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.container.classList.add(this.config.openAbove))},e.prototype.moveContentBelow=function(){this.slim.content.removeAttribute("style"),this.data.contentPosition="below",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.add(this.config.openBelow)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.add(this.config.openBelow))},e.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.triggerMutationObserver=!0},e.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.triggerMutationObserver=!0},e.prototype.search=function(t){if(this.data.searchValue!==t)if(this.slim.search.input.value=t,this.config.isAjax){var i=this;this.config.isSearching=!0,this.render(),this.ajax&&this.ajax(t,function(e){i.config.isSearching=!1,Array.isArray(e)?(e.unshift({text:"",placeholder:!0}),i.setData(e),i.data.search(t),i.render()):"string"==typeof e?i.slim.options(e):i.render()})}else this.data.search(t),this.render()},e.prototype.setSearchText=function(e){this.config.searchText=e},e.prototype.render=function(){this.config.isMultiple?this.slim.values():(this.slim.placeholder(),this.slim.deselect()),this.slim.options()},e.prototype.destroy=function(e){void 0===e&&(e=null);var t=e?document.querySelector("."+e):this.slim.container,i=e?document.querySelector("[data-ssid="+e+"]"):this.select.element;t&&i&&(i.style.display=null,delete i.dataset.ssid,i.slim=null,t.parentElement&&t.parentElement.removeChild(t))},e}();t.default=r},function(e,t,i){"use strict";t.__esModule=!0;var n=function(e){this.id="",this.isMultiple=!1,this.isAjax=!1,this.isSearching=!1,this.showSearch=!0,this.searchHighlight=!1,this.closeOnSelect=!0,this.showContent="auto",this.searchPlaceholder="Search",this.searchText="No Results",this.searchingText="Searching...",this.placeholderText="Select Value",this.allowDeselect=!1,this.isEnabled=!0,this.valuesUseText=!1,this.showOptionTooltips=!1,this.limit=0,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.searchHighlighter="ss-search-highlight",this.addable="ss-addable",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.option="ss-option",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.classList,this.isMultiple=e.select.multiple,this.isAjax=e.isAjax,this.showSearch=!1!==e.showSearch,this.searchHighlight=!0===e.searchHighlight,this.closeOnSelect=!1!==e.closeOnSelect,e.showContent&&(this.showContent=e.showContent),this.isEnabled=!1!==e.isEnabled,e.searchPlaceholder&&(this.searchPlaceholder=e.searchPlaceholder),e.searchText&&(this.searchText=e.searchText),e.searchingText&&(this.searchingText=e.searchingText),e.placeholderText&&(this.placeholderText=e.placeholderText),this.allowDeselect=!0===e.allowDeselect,e.valuesUseText&&(this.valuesUseText=e.valuesUseText),e.showOptionTooltips&&(this.showOptionTooltips=e.showOptionTooltips),e.limit&&(this.limit=e.limit)};t.default=n},function(e,t,i){"use strict";t.__esModule=!0;var n=function(){function e(e){this.triggerMutationObserver=!0,this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.mutationObserver=null,this.addMutationObserver(),this.element.slim=e.main}return e.prototype.setValue=function(){if(this.main.data.getSelected()){if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=this.element.options,i=0;i<t.length;i++){var n=t[i];n.selected=!1;for(var s=0;s<e.length;s++)e[s].value===n.value&&(n.selected=!0)}else{e=this.main.data.getSelected();this.element.value=e?e.value:""}this.main.data.isOnChangeEnabled=!1,this.element.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.main.data.isOnChangeEnabled=!0}},e.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none",this.element.dataset.ssid=this.main.config.id},e.prototype.addEventListeners=function(){var t=this;this.element.addEventListener("change",function(e){t.main.data.setSelectedFromSelect(),t.main.render()})},e.prototype.addMutationObserver=function(){var t=this;this.main.config.isAjax||(this.mutationObserver=new MutationObserver(function(e){t.triggerMutationObserver&&(t.main.data.parseSelectData(),t.main.data.setSelectedFromSelect(),t.main.render(),e.forEach(function(e){"class"===e.attributeName&&t.main.slim.updateContainerDivClass(t.main.slim.container)}))}),this.observeMutationObserver())},e.prototype.observeMutationObserver=function(){this.mutationObserver&&this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},e.prototype.disconnectMutationObserver=function(){this.mutationObserver&&this.mutationObserver.disconnect()},e.prototype.create=function(e){this.element.innerHTML="";for(var t=0;t<e.length;t++)if(e[t].hasOwnProperty("options")){var i=e[t],n=document.createElement("optgroup");if(n.label=i.label,i.options)for(var s=0;s<i.options.length;s++)n.appendChild(this.createOption(i.options[s]));this.element.appendChild(n)}else this.element.appendChild(this.createOption(e[t]))},e.prototype.createOption=function(t){var i=document.createElement("option");return i.value=t.value||t.text,i.innerHTML=t.innerHTML||t.text,t.selected&&(i.selected=t.selected),t.disabled&&(i.disabled=!0),t.placeholder&&i.setAttribute("data-placeholder","true"),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach(function(e){i.setAttribute("data-"+e,t.data[e])}),i},e}();t.default=n},function(e,t,i){"use strict";t.__esModule=!0;var o=i(0),l=i(1),n=function(){function e(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.singleSelected=null,this.multiSelected=null,this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.container.appendChild(this.multiSelected.container)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container)),this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)}return e.prototype.containerDiv=function(){var e=document.createElement("div");return e.style.cssText=this.main.config.style,this.updateContainerDivClass(e),e},e.prototype.updateContainerDivClass=function(e){this.main.config.class=this.main.select.element.classList,e.className="",e.classList.add(this.main.config.id),e.classList.add(this.main.config.main);for(var t=0;t<this.main.config.class.length;t++)e.classList.add(this.main.config.class[t])},e.prototype.singleSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),e.appendChild(i);var n=document.createElement("span");n.innerHTML="X",n.classList.add("ss-deselect"),n.onclick=function(e){e.stopPropagation(),t.main.config.isEnabled&&t.main.set("")},e.appendChild(n);var s=document.createElement("span");s.classList.add(this.main.config.arrow);var a=document.createElement("span");return a.classList.add("arrow-down"),s.appendChild(a),e.appendChild(s),e.onclick=function(){t.main.config.isEnabled&&(t.main.data.contentOpen?t.main.close():t.main.open())},{container:e,placeholder:i,deselect:n,arrowIcon:{container:s,arrow:a}}},e.prototype.placeholder=function(){var e=this.main.data.getSelected();if(null===e||e&&e.placeholder){var t=document.createElement("span");t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.placeholderText,this.singleSelected&&(this.singleSelected.placeholder.innerHTML=t.outerHTML)}else{var i="";e&&(i=e.innerHTML&&!0!==this.main.config.valuesUseText?e.innerHTML:e.text),this.singleSelected&&(this.singleSelected.placeholder.innerHTML=e?i:"")}},e.prototype.deselect=function(){if(this.singleSelected){if(!this.main.config.allowDeselect)return void this.singleSelected.deselect.classList.add("ss-hide");""===this.main.selected()?this.singleSelected.deselect.classList.add("ss-hide"):this.singleSelected.deselect.classList.remove("ss-hide")}},e.prototype.multiSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),e.appendChild(i);var n=document.createElement("div");n.classList.add(this.main.config.add);var s=document.createElement("span");return s.classList.add(this.main.config.plus),s.onclick=function(e){t.main.data.contentOpen&&(t.main.close(),e.stopPropagation())},n.appendChild(s),e.appendChild(n),e.onclick=function(e){t.main.config.isEnabled&&(e.target.classList.contains(t.main.config.valueDelete)||t.main.open())},{container:e,values:i,add:n,plus:s}},e.prototype.values=function(){if(this.multiSelected){for(var e,t=this.multiSelected.values.childNodes,i=this.main.data.getSelected(),n=[],s=0;s<t.length;s++){e=!0;for(var a=t[s],o=0;o<i.length;o++)String(i[o].id)===String(a.dataset.id)&&(e=!1);e&&n.push(a)}for(var l=0;l<n.length;l++)n[l].classList.add("ss-out"),this.multiSelected.values.removeChild(n[l]);t=this.multiSelected.values.childNodes;for(o=0;o<i.length;o++){e=!1;for(s=0;s<t.length;s++){a=t[s];String(i[o].id)===String(a.dataset.id)&&(e=!0)}e||(0!==t.length&&HTMLElement.prototype.insertAdjacentElement?0===o?this.multiSelected.values.insertBefore(this.valueDiv(i[o]),t[o]):t[o-1].insertAdjacentElement("afterend",this.valueDiv(i[o])):this.multiSelected.values.appendChild(this.valueDiv(i[o])))}if(0===i.length){var r=document.createElement("span");r.classList.add(this.main.config.disabled),r.innerHTML=this.main.config.placeholderText,this.multiSelected.values.innerHTML=r.outerHTML}}},e.prototype.valueDiv=function(s){var a=this,e=document.createElement("div");e.classList.add(this.main.config.value),e.dataset.id=s.id;var t=document.createElement("span");t.classList.add(this.main.config.valueText),t.innerHTML=s.innerHTML&&!0!==this.main.config.valuesUseText?s.innerHTML:s.text,e.appendChild(t);var i=document.createElement("span");return i.classList.add(this.main.config.valueDelete),i.innerHTML="x",i.onclick=function(e){if(e.preventDefault(),e.stopPropagation(),a.main.config.isEnabled)if(a.main.beforeOnChange){for(var t=a.main.data.getSelected(),i=JSON.parse(JSON.stringify(t)),n=0;n<i.length;n++)i[n].id===s.id&&i.splice(n,1);!1!==a.main.beforeOnChange(i)&&(a.main.data.removeFromSelected(s.id,"id"),a.main.render(),a.main.select.setValue())}else a.main.data.removeFromSelected(s.id,"id"),a.main.render(),a.main.select.setValue(),a.main.data.onDataChange()},e.appendChild(i),e},e.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},e.prototype.searchDiv=function(){var s=this,e=document.createElement("div"),n=document.createElement("input");e.classList.add(this.main.config.search),this.main.config.showSearch||(e.classList.add(this.main.config.hide),n.readOnly=!0),n.type="search",n.placeholder=this.main.config.searchPlaceholder,n.tabIndex=0,n.onclick=function(e){setTimeout(function(){""===e.target.value&&s.main.search("")},10)},n.onkeydown=function(e){"ArrowUp"===e.key?(s.main.open(),s.highlightUp(),e.preventDefault()):"ArrowDown"===e.key?(s.main.open(),s.highlightDown(),e.preventDefault()):"Tab"===e.key?s.main.close():"Enter"===e.key&&e.preventDefault()},n.onkeyup=function(e){var t=e.target;if("Enter"===e.key){if(s.main.addable&&e.ctrlKey)return a.click(),e.preventDefault(),void e.stopPropagation();var i=s.list.querySelector("."+s.main.config.highlighted);i&&i.click()}else"ArrowUp"===e.key||"ArrowDown"===e.key||("Escape"===e.key?s.main.close():s.main.config.showSearch&&s.main.data.contentOpen?s.main.search(t.value):n.value="");e.preventDefault(),e.stopPropagation()},n.onfocus=function(){s.main.open()},e.appendChild(n);var t={container:e,input:n};if(this.main.addable){var a=document.createElement("div");a.classList.add(this.main.config.addable),a.innerHTML="+",a.onclick=function(e){if(s.main.addable){e.preventDefault(),e.stopPropagation();var t=s.search.input.value;if(""===t.trim())return void s.search.input.focus();var i=s.main.addable(t),n="";if(!i)return;if("object"==typeof i)l.validateOption(i)&&(s.main.addData(i),n=i.value?i.value:i.text);else s.main.addData(s.main.data.newOption({text:i,value:i})),n=i;s.main.search(""),setTimeout(function(){s.main.set(n,"value",!1,!1)},100),s.main.config.closeOnSelect&&setTimeout(function(){s.main.close()},100)}},e.appendChild(a),t.addable=a}return t},e.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.previousSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}if(t&&t.classList.contains(this.main.config.optgroupLabel)&&(t=null),null===t){var n=e.parentNode;if(n.classList.contains(this.main.config.optgroup)&&n.previousSibling){var s=n.previousSibling.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");s.length&&(t=s[s.length-1])}}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),o.ensureElementInView(this.list,t))},e.prototype.highlightDown=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.nextSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.nextSibling;else t=this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===t&&null!==e){var i=e.parentNode;if(i.classList.contains(this.main.config.optgroup))if(i.nextSibling)t=i.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")")}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),o.ensureElementInView(this.list,t))},e.prototype.listDiv=function(){var l=document.createElement("div");return l.classList.add(this.main.config.list),l.addEventListener("wheel",function(e){var t=l.scrollTop,i=l.scrollHeight,n=l.offsetHeight,s=Math.round(-e.deltaY),a=0<s,o=function(){return e.stopPropagation(),e.preventDefault(),e.returnValue=!1};return!a&&i-n-t<-s?(l.scrollTop=i,o()):a&&t<s?(l.scrollTop=0,o()):void 0}),l},e.prototype.options=function(e){void 0===e&&(e="");var t,i=this.main.data.filtered||this.main.data.data;if((this.list.innerHTML="")!==e)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=e,void this.list.appendChild(t);if(this.main.config.isAjax&&this.main.config.isSearching)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.innerHTML=this.main.config.searchingText,void this.list.appendChild(t);if(0===i.length){var n=document.createElement("div");return n.classList.add(this.main.config.option),n.classList.add(this.main.config.disabled),n.innerHTML=this.main.config.searchText,void this.list.appendChild(n)}for(var s=0;s<i.length;s++)if(i[s].hasOwnProperty("label")){var a=i[s],o=document.createElement("div");o.classList.add(this.main.config.optgroup);var l=document.createElement("div");l.classList.add(this.main.config.optgroupLabel),l.innerHTML=a.label,o.appendChild(l);var r=a.options;if(r)for(var c=0;c<r.length;c++)o.appendChild(this.option(r[c]));this.list.appendChild(o)}else this.list.appendChild(this.option(i[s]))},e.prototype.option=function(e){if(e.placeholder){var t=document.createElement("div");return t.classList.add(this.main.config.option),t.classList.add(this.main.config.hide),t}var i=document.createElement("div");i.classList.add(this.main.config.option);var s=this.main.data.getSelected();i.dataset.id=e.id,this.main.config.searchHighlight&&this.main.slim&&e.innerHTML&&""!==this.main.slim.search.input.value.trim()?i.innerHTML=o.highlight(e.innerHTML,this.main.slim.search.input.value,this.main.config.searchHighlighter):e.innerHTML&&(i.innerHTML=e.innerHTML),this.main.config.showOptionTooltips&&i.textContent&&i.setAttribute("title",i.textContent);var a=this;return i.addEventListener("click",function(e){if(e.preventDefault(),e.stopPropagation(),!(a.main.config.limit&&Array.isArray(s)&&a.main.config.limit<=s.length)){var t=this.dataset.id;if(a.main.beforeOnChange){var i=void 0,n=JSON.parse(JSON.stringify(a.main.data.getObjectFromData(t)));n.selected=!0,a.main.config.isMultiple?(i=JSON.parse(JSON.stringify(s))).push(n):i=JSON.parse(JSON.stringify(n)),!1!==a.main.beforeOnChange(i)&&a.main.set(t,"id",a.main.config.closeOnSelect)}else a.main.set(t,"id",a.main.config.closeOnSelect)}}),(e.disabled||s&&o.isValueInArrayOfObjects(s,"id",e.id))&&(i.onclick=null,i.classList.add(this.main.config.disabled)),i},e}();t.default=n}]).default});

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })

/******/ });
//# sourceMappingURL=popup.js.map