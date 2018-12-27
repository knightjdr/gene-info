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
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./chrome-extension/src/popup/popup.css");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popup_css__WEBPACK_IMPORTED_MODULE_2__);





// Get user preferences on load.
Object(_settings_load_preferences__WEBPACK_IMPORTED_MODULE_1__["default"])();

// Bind event handlers.
Object(_listeners_bind_listeners__WEBPACK_IMPORTED_MODULE_0__["default"])();


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/activation-type.js":
/*!*****************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/activation-type.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const activatationType = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ activate: option });
    } else {
      document.querySelector(`#report_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'toggleActivationMethod', type });
};

/* harmony default export */ __webpack_exports__["default"] = (activatationType);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/bind-listeners.js":
/*!****************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/bind-listeners.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activation_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-type */ "./chrome-extension/src/popup/listeners/activation-type.js");
/* harmony import */ var _go_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./go-namespace */ "./chrome-extension/src/popup/listeners/go-namespace.js");
/* harmony import */ var _report_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-type */ "./chrome-extension/src/popup/listeners/report-type.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle */ "./chrome-extension/src/popup/listeners/toggle.js");





const bindListeners = () => {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.activate-click').forEach((element) => {
      element.addEventListener('click', _activation_type__WEBPACK_IMPORTED_MODULE_0__["default"]);
    });
    document.querySelectorAll('.display-click').forEach((element) => {
      element.addEventListener('click', _report_type__WEBPACK_IMPORTED_MODULE_2__["default"]);
    });
    document.querySelectorAll('.namespace-click').forEach((element) => {
      element.addEventListener('click', _go_namespace__WEBPACK_IMPORTED_MODULE_1__["default"]);
    });
    document.querySelectorAll('.toggle').forEach((element) => {
      element.addEventListener('click', _toggle__WEBPACK_IMPORTED_MODULE_3__["default"]);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (bindListeners);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/go-namespace.js":
/*!**************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/go-namespace.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const goNamespace = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ goNamespace: option });
    } else {
      document.getElementById(`goNamespace_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'toggleGoNamespace', type });
};

/* harmony default export */ __webpack_exports__["default"] = (goNamespace);


/***/ }),

/***/ "./chrome-extension/src/popup/listeners/report-type.js":
/*!*************************************************************!*\
  !*** ./chrome-extension/src/popup/listeners/report-type.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _update_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-tab */ "./chrome-extension/src/popup/listeners/update-tab.js");


const reportType = function report() {
  const { type } = this.dataset;
  ['detailed', 'tooltip'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ report: option });
    } else {
      document.getElementById(`report_${option}`).checked = false;
    }
  });
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'toggleReportType', type });
};

/* harmony default export */ __webpack_exports__["default"] = (reportType);


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
  const toggleObj = {};
  toggleObj[`detail-${type}`] = checked;
  chrome.storage.local.set(toggleObj);
  Object(_update_tab__WEBPACK_IMPORTED_MODULE_0__["default"])({ action: 'toggleDisplayElement', type, checked });
  const optionsID = `toggle-container-options-${type}`;
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

/***/ "./chrome-extension/src/popup/settings/activation-method.js":
/*!******************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/activation-method.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const activationMethod = () => {
  chrome.storage.local.get('activate', (storage) => {
    const activate = storage.activate || 'click';
    ['click', 'drag', 'disable'].forEach((option) => {
      if (option === activate) {
        document.getElementById(`report_${option}`).checked = true;
      } else {
        document.getElementById(`report_${option}`).checked = false;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (activationMethod);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/details.js":
/*!********************************************************!*\
  !*** ./chrome-extension/src/popup/settings/details.js ***!
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
];

const details = () => {
  options.forEach((option) => {
    const currDetail = `detail-${option}`;
    chrome.storage.local.get(currDetail, (storage) => {
      if (!storage[currDetail]) {
        document.getElementById(`detail_${option}`).checked = false;
        const el = document.getElementById(`toggle-container-options-${option}`);
        if (el) {
          el.style.display = 'none';
        }
      }
    });
  });

  chrome.storage.local.get('goNamespace', (storage) => {
    if (storage.goNamespace) {
      ['bp', 'cc', 'mf'].forEach((v) => {
        if (v === storage.goNamespace) {
          document.getElementById(`goNamespace_${v}`).checked = true;
        } else {
          document.getElementById(`goNamespace_${v}`).checked = false;
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (details);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/load-preferences.js":
/*!*****************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/load-preferences.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _activation_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-method */ "./chrome-extension/src/popup/settings/activation-method.js");
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details */ "./chrome-extension/src/popup/settings/details.js");
/* harmony import */ var _report_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report-type */ "./chrome-extension/src/popup/settings/report-type.js");




const loadPreferences = () => {
  Object(_activation_method__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_details__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_report_type__WEBPACK_IMPORTED_MODULE_2__["default"])();
};

/* harmony default export */ __webpack_exports__["default"] = (loadPreferences);


/***/ }),

/***/ "./chrome-extension/src/popup/settings/report-type.js":
/*!************************************************************!*\
  !*** ./chrome-extension/src/popup/settings/report-type.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reportType = () => {
  chrome.storage.local.get('report', (storage) => {
    const report = storage.report || 'detailed';
    ['detailed', 'tooltip'].forEach((option) => {
      if (option === report) {
        document.getElementById(`report_${option}`).checked = true;
      } else {
        document.getElementById(`report_${option}`).checked = false;
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reportType);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./chrome-extension/src/popup/popup.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./chrome-extension/src/popup/popup.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  --font-stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n  --green: #4caf50;\n  --grey: #bdbdbd;\n  font-family: var(--font-stack);\n  font-size: 12px;\n  width: 170px;\n}\nbody > section:not(:first-child) {\n  margin-top: 10px;\n}\nsection > h1 {\n  font-size: 14px;\n  margin: 5px 0;\n}\n.activate > div,\n.display > div {\n  margin: 7px 0;\n}\n\n/* Checkbox */\n.checkbox:not(:checked),\n.checkbox:checked {\n  position: absolute;\n}\n.checkbox:not(:checked) + label,\n.checkbox:checked + label {\n  position: relative;\n  padding-left: 30px;\n  padding-top: 3px;\n  cursor: pointer;\n}\n.checkbox:not(:checked) + label:before,\n.checkbox:checked + label:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 1.25em; height: 1.25em;\n  border: 2px solid #ccc;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 3px rgba(0,0,0,.1);\n}\n.checkbox:not(:checked) + label:after,\n.checkbox:checked + label:after {\n  content: '\\2713';\n  position: absolute;\n  top: .1em; left: .3em;\n  font-size: 1.3em;\n  line-height: 0.8;\n  color: var(--green);\n  transition: all .2s;\n}\n.checkbox:not(:checked) + label:after {\n  opacity: 0;\n  transform: scale(0);\n}\n.checkbox:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.checkbox + label:hover:before {\n  border: 2px solid var(--green) !important;\n  transition: border .2s;\n}\n\n/* select */\nselect {\n  height: 25px;\n  width: 100%;\n}\nselect:focus {\n  box-shadow: 0px 0px 1px 1px var(--green);\n  outline:0;\n}\n\n/* Toggle */\n.toggle-container {\n  align-items: center;\n  display: flex;\n  height: 20px;\n  line-height: 20px;\n  margin: 5px 0px 5px 0px;\n  width: 100%;\n}\n.toggle {\n  display: none;\n}\n.toggle + label {\n  margin-right: 5px;\n}\n.toggle,\n.toggle:after,\n.toggle:before,\n.toggle *,\n.toggle *:after,\n.toggle *:before,\n.toggle + label {\n  box-sizing: border-box;\n}\n.toggle::selection,\n.toggle:after::selection,\n.toggle:before::selection,\n.toggle *::selection,\n.toggle *:after::selection,\n.toggle *:before::selection,\n.toggle + label::selection {\n  background: none;\n}\n.toggle + label {\n  outline: 0;\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  position: relative;\n  cursor: pointer;\n  user-select: none;\n}\n.toggle + label:after,\n.toggle + label:before {\n  position: relative;\n  display: inline-block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n.toggle + label:after {\n  left: 0;\n}\n.toggle + label:before {\n  display: none;\n}\n.toggle:checked + label:after {\n  left: 50%;\n}\n.toggle-flat + label {\n  padding: 1px;\n  transition: all .2s ease;\n  background: #fff;\n  border: 2px solid var(--grey);\n  border-radius: 2em;\n}\n.toggle-flat + label:after {\n  transition: all .2s ease;\n  background: var(--grey);\n  content: \"\";\n  border-radius: 1em;\n}\n.toggle-flat:checked + label {\n  border: 2px solid var(--green);\n}\n.toggle-flat:checked + label:after {\n  left: 50%;\n  background: var(--green);\n}\n.toggle-container-options {\n  border-bottom: 1px solid #A5D6A7;\n  border-top: 1px solid #A5D6A7;\n  display: block;\n  padding: 5px 0 5px 20px;\n}\n.toggle-container-options > h2 {\n  font-size: 12px;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.toggle-container-options > div {\n  margin: 5px 0;\n}\n", ""]);



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