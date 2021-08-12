/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/slim-select/dist/slimselect.css":
/*!******************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/slim-select/dist/slimselect.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/slim-select/dist/slimselect.min.js ***!
  \*********************************************************/
/***/ ((module) => {

!function(e,t){ true?module.exports=t():0}(window,function(){return(s={},n.m=i=[function(e,t,i){"use strict";function s(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}var n;t.__esModule=!0,t.hasClassInTree=function(e,t){function s(e,t){return t&&e&&e.classList&&e.classList.contains(t)?e:null}return s(e,t)||function e(t,i){return t&&t!==document?s(t,i)?t:e(t.parentNode,i):null}(e,t)},t.ensureElementInView=function(e,t){var i=e.scrollTop+e.offsetTop,s=i+e.clientHeight,n=t.offsetTop,a=n+t.clientHeight;n<i?e.scrollTop-=i-n:s<a&&(e.scrollTop+=a-s)},t.putContent=function(e,t,i){var s=e.offsetHeight,n=e.getBoundingClientRect(),a=i?n.top:n.top-s,o=i?n.bottom:n.bottom+s;return a<=0?"below":o>=window.innerHeight?"above":i?t:"below"},t.debounce=function(n,a,o){var l;return void 0===a&&(a=100),void 0===o&&(o=!1),function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=self,s=o&&!l;clearTimeout(l),l=setTimeout(function(){l=null,o||n.apply(i,e)},a),s&&n.apply(i,e)}},t.isValueInArrayOfObjects=function(e,t,i){if(!Array.isArray(e))return e[t]===i;for(var s=0,n=e;s<n.length;s++){var a=n[s];if(a&&a[t]&&a[t]===i)return!0}return!1},t.highlight=function(e,t,i){var s=e,n=new RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(n))return e;var a=e.match(n).index,o=a+e.match(n)[0].toString().length,l=e.substring(a,o);return s=s.replace(n,'<mark class="'+i+'">'+l+"</mark>")},"function"!=typeof(n=window).CustomEvent&&(s.prototype=n.Event.prototype,n.CustomEvent=s)},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.newOption=function(e){return{id:e.id?e.id:String(Math.floor(1e8*Math.random())),value:e.value?e.value:"",text:e.text?e.text:"",selected:!!e.selected&&e.selected,display:void 0===e.display||e.display,disabled:!!e.disabled&&e.disabled,placeholder:!!e.placeholder&&e.placeholder,class:e.class?e.class:void 0,data:e.data?e.data:{}}},n.prototype.add=function(e){this.data.push({id:String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,selected:!1,display:!0,disabled:!1,placeholder:!1,class:void 0,data:{}})},n.prototype.parseSelectData=function(){this.data=[];for(var e=0,t=this.main.select.element.childNodes;e<t.length;e++){var i=t[e];if("OPTGROUP"===i.nodeName){for(var s={label:i.label,options:[]},n=0,a=i.childNodes;n<a.length;n++){var o=a[n];if("OPTION"===o.nodeName){var l=this.pullOptionData(o);s.options.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text)}}this.data.push(s)}else"OPTION"===i.nodeName&&(l=this.pullOptionData(i),this.data.push(l),l.placeholder&&""!==l.text.trim()&&(this.main.config.placeholderText=l.text))}},n.prototype.pullOptionData=function(e){return{id:!!e.dataset&&e.dataset.id||String(Math.floor(1e8*Math.random())),value:e.value,text:e.text,selected:e.selected,disabled:e.disabled,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}},n.prototype.setSelectedFromSelect=function(){if(this.main.config.isMultiple){for(var e=[],t=0,i=this.main.select.element.options;t<i.length;t++){var s=i[t];if(s.selected){var n=this.getObjectFromData(s.value,"value");n&&n.id&&e.push(n.id)}}this.setSelected(e,"id")}else{var a=this.main.select.element;if(-1!==a.selectedIndex){var o=a.options[a.selectedIndex].value;this.setSelected(o,"value")}}},n.prototype.setSelected=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.placeholder||(r.selected=this.shouldBeSelected(r,e,t))}}}else n.selected=this.shouldBeSelected(n,e,t)}},n.prototype.shouldBeSelected=function(e,t,i){if(void 0===i&&(i="id"),Array.isArray(t))for(var s=0,n=t;s<n.length;s++){var a=n[s];if(i in e&&String(e[i])===String(a))return!0}else if(i in e&&String(e[i])===String(t))return!0;return!1},n.prototype.getSelected=function(){for(var e={text:"",placeholder:this.main.config.placeholderText},t=[],i=0,s=this.data;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){var r=l[o];r.selected&&(this.main.config.isMultiple?t.push(r):e=r)}}}else n.selected&&(this.main.config.isMultiple?t.push(n):e=n)}return this.main.config.isMultiple?t:e},n.prototype.addToSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){var i=[],s=this.getSelected();if(Array.isArray(s))for(var n=0,a=s;n<a.length;n++){var o=a[n];i.push(o[t])}i.push(e),this.setSelected(i,t)}},n.prototype.removeFromSelected=function(e,t){if(void 0===t&&(t="id"),this.main.config.isMultiple){for(var i=[],s=0,n=this.getSelected();s<n.length;s++){var a=n[s];String(a[t])!==String(e)&&i.push(a[t])}this.setSelected(i,t)}},n.prototype.onDataChange=function(){this.main.onChange&&this.isOnChangeEnabled&&this.main.onChange(JSON.parse(JSON.stringify(this.getSelected())))},n.prototype.getObjectFromData=function(e,t){void 0===t&&(t="id");for(var i=0,s=this.data;i<s.length;i++){var n=s[i];if(t in n&&String(n[t])===String(e))return n;if(n.hasOwnProperty("options")){var a=n;if(a.options)for(var o=0,l=a.options;o<l.length;o++){var r=l[o];if(String(r[t])===String(e))return r}}}return null},n.prototype.search=function(n){if(""!==(this.searchValue=n).trim()){var a=this.main.config.searchFilter,e=this.data.slice(0);n=n.trim();var t=e.map(function(e){if(e.hasOwnProperty("options")){var t=e,i=[];if(t.options&&(i=t.options.filter(function(e){return a(e,n)})),0!==i.length){var s=Object.assign({},t);return s.options=i,s}}return e.hasOwnProperty("text")&&a(e,n)?e:null});this.filtered=t.filter(function(e){return e})}else this.filtered=null},n);function n(e){this.contentOpen=!1,this.contentPosition="below",this.isOnChangeEnabled=!0,this.main=e.main,this.searchValue="",this.data=[],this.filtered=null,this.parseSelectData(),this.setSelectedFromSelect()}function r(e){return void 0!==e.text||(console.error("Data object option must have at least have a text value. Check object: "+JSON.stringify(e)),!1)}t.Data=s,t.validateData=function(e){if(!e)return console.error("Data must be an array of objects"),!1;for(var t=0,i=0,s=e;i<s.length;i++){var n=s[i];if(n.hasOwnProperty("label")){if(n.hasOwnProperty("options")){var a=n.options;if(a)for(var o=0,l=a;o<l.length;o++){r(l[o])||t++}}}else r(n)||t++}return 0===t},t.validateOption=r},function(e,t,i){"use strict";t.__esModule=!0;var s=i(3),n=i(4),a=i(5),o=i(1),l=i(0),r=(c.prototype.validate=function(e){var t="string"==typeof e.select?document.querySelector(e.select):e.select;if(!t)throw new Error("Could not find select element");if("SELECT"!==t.tagName)throw new Error("Element isnt of type select");return t},c.prototype.selected=function(){if(this.config.isMultiple){for(var e=[],t=0,i=n=this.data.getSelected();t<i.length;t++){var s=i[t];e.push(s.value)}return e}var n;return(n=this.data.getSelected())?n.value:""},c.prototype.set=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.config.isMultiple&&!Array.isArray(e)?this.data.addToSelected(e,t):this.data.setSelected(e,t),this.select.setValue(),this.data.onDataChange(),this.render(),i&&this.close()},c.prototype.setSelected=function(e,t,i,s){void 0===t&&(t="value"),void 0===i&&(i=!0),void 0===s&&(s=!0),this.set(e,t,i,s)},c.prototype.setData=function(e){if(o.validateData(e)){var t=JSON.parse(JSON.stringify(e)),i=this.data.getSelected();if(this.config.isAjax&&i)if(this.config.isMultiple)for(var s=0,n=i.reverse();s<n.length;s++){var a=n[s];t.unshift(a)}else t.unshift(this.data.getSelected()),t.unshift({text:"",placeholder:!0});this.select.create(t),this.data.parseSelectData(),this.data.setSelectedFromSelect()}else console.error("Validation problem on: #"+this.select.element.id)},c.prototype.addData=function(e){o.validateData([e])?(this.data.add(this.data.newOption(e)),this.select.create(this.data.data),this.data.parseSelectData(),this.data.setSelectedFromSelect(),this.render()):console.error("Validation problem on: #"+this.select.element.id)},c.prototype.open=function(){var e=this;if(this.config.isEnabled&&!this.data.contentOpen){if(this.beforeOpen&&this.beforeOpen(),this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.plus.classList.add("ss-cross"):this.slim.singleSelected&&(this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-up")),this.slim[this.config.isMultiple?"multiSelected":"singleSelected"].container.classList.add("above"===this.data.contentPosition?this.config.openAbove:this.config.openBelow),this.config.addToBody){var t=this.slim.container.getBoundingClientRect();this.slim.content.style.top=t.top+t.height+window.scrollY+"px",this.slim.content.style.left=t.left+window.scrollX+"px",this.slim.content.style.width=t.width+"px"}if(this.slim.content.classList.add(this.config.open),"up"===this.config.showContent.toLowerCase()?this.moveContentAbove():"down"===this.config.showContent.toLowerCase()?this.moveContentBelow():"above"===l.putContent(this.slim.content,this.data.contentPosition,this.data.contentOpen)?this.moveContentAbove():this.moveContentBelow(),!this.config.isMultiple){var i=this.data.getSelected();if(i){var s=i.id,n=this.slim.list.querySelector('[data-id="'+s+'"]');n&&l.ensureElementInView(this.slim.list,n)}}setTimeout(function(){e.data.contentOpen=!0,e.config.searchFocus&&e.slim.search.input.focus(),e.afterOpen&&e.afterOpen()},this.config.timeoutDelay)}},c.prototype.close=function(){var e=this;this.data.contentOpen&&(this.beforeClose&&this.beforeClose(),this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.plus.classList.remove("ss-cross")):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.arrowIcon.arrow.classList.add("arrow-down"),this.slim.singleSelected.arrowIcon.arrow.classList.remove("arrow-up")),this.slim.content.classList.remove(this.config.open),this.data.contentOpen=!1,this.search(""),setTimeout(function(){e.slim.content.removeAttribute("style"),e.data.contentPosition="below",e.config.isMultiple&&e.slim.multiSelected?(e.slim.multiSelected.container.classList.remove(e.config.openAbove),e.slim.multiSelected.container.classList.remove(e.config.openBelow)):e.slim.singleSelected&&(e.slim.singleSelected.container.classList.remove(e.config.openAbove),e.slim.singleSelected.container.classList.remove(e.config.openBelow)),e.slim.search.input.blur(),e.afterClose&&e.afterClose()},this.config.timeoutDelay))},c.prototype.moveContentAbove=function(){var e=0;this.config.isMultiple&&this.slim.multiSelected?e=this.slim.multiSelected.container.offsetHeight:this.slim.singleSelected&&(e=this.slim.singleSelected.container.offsetHeight);var t=e+this.slim.content.offsetHeight-1;this.slim.content.style.margin="-"+t+"px 0 0 0",this.slim.content.style.height=t-e+1+"px",this.slim.content.style.transformOrigin="center bottom",this.data.contentPosition="above",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openBelow),this.slim.multiSelected.container.classList.add(this.config.openAbove)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openBelow),this.slim.singleSelected.container.classList.add(this.config.openAbove))},c.prototype.moveContentBelow=function(){this.data.contentPosition="below",this.config.isMultiple&&this.slim.multiSelected?(this.slim.multiSelected.container.classList.remove(this.config.openAbove),this.slim.multiSelected.container.classList.add(this.config.openBelow)):this.slim.singleSelected&&(this.slim.singleSelected.container.classList.remove(this.config.openAbove),this.slim.singleSelected.container.classList.add(this.config.openBelow))},c.prototype.enable=function(){this.config.isEnabled=!0,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.remove(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.remove(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!1,this.slim.search.input.disabled=!1,this.select.triggerMutationObserver=!0},c.prototype.disable=function(){this.config.isEnabled=!1,this.config.isMultiple&&this.slim.multiSelected?this.slim.multiSelected.container.classList.add(this.config.disabled):this.slim.singleSelected&&this.slim.singleSelected.container.classList.add(this.config.disabled),this.select.triggerMutationObserver=!1,this.select.element.disabled=!0,this.slim.search.input.disabled=!0,this.select.triggerMutationObserver=!0},c.prototype.search=function(t){if(this.data.searchValue!==t)if(this.slim.search.input.value=t,this.config.isAjax){var i=this;this.config.isSearching=!0,this.render(),this.ajax&&this.ajax(t,function(e){i.config.isSearching=!1,Array.isArray(e)?(e.unshift({text:"",placeholder:!0}),i.setData(e),i.data.search(t),i.render()):"string"==typeof e?i.slim.options(e):i.render()})}else this.data.search(t),this.render()},c.prototype.setSearchText=function(e){this.config.searchText=e},c.prototype.render=function(){this.config.isMultiple?this.slim.values():(this.slim.placeholder(),this.slim.deselect()),this.slim.options()},c.prototype.destroy=function(e){void 0===e&&(e=null);var t=e?document.querySelector("."+e+".ss-main"):this.slim.container,i=e?document.querySelector("[data-ssid="+e+"]"):this.select.element;if(t&&i&&(i.style.display="",delete i.dataset.ssid,i.slim=null,t.parentElement&&t.parentElement.removeChild(t),this.config.addToBody)){var s=e?document.querySelector("."+e+".ss-content"):this.slim.content;if(!s)return;document.body.removeChild(s)}},c);function c(e){var t=this;this.ajax=null,this.addable=null,this.beforeOnChange=null,this.onChange=null,this.beforeOpen=null,this.afterOpen=null,this.beforeClose=null,this.afterClose=null;var i=this.validate(e);i.dataset.ssid&&this.destroy(i.dataset.ssid),e.ajax&&(this.ajax=e.ajax),e.addable&&(this.addable=e.addable),this.config=new s.Config({select:i,isAjax:!!e.ajax,showSearch:e.showSearch,searchPlaceholder:e.searchPlaceholder,searchText:e.searchText,searchingText:e.searchingText,searchFocus:e.searchFocus,searchHighlight:e.searchHighlight,searchFilter:e.searchFilter,closeOnSelect:e.closeOnSelect,showContent:e.showContent,placeholderText:e.placeholder,allowDeselect:e.allowDeselect,allowDeselectOption:e.allowDeselectOption,hideSelectedOption:e.hideSelectedOption,deselectLabel:e.deselectLabel,isEnabled:e.isEnabled,valuesUseText:e.valuesUseText,showOptionTooltips:e.showOptionTooltips,selectByGroup:e.selectByGroup,limit:e.limit,timeoutDelay:e.timeoutDelay,addToBody:e.addToBody}),this.select=new n.Select({select:i,main:this}),this.data=new o.Data({main:this}),this.slim=new a.Slim({main:this}),this.select.element.parentNode&&this.select.element.parentNode.insertBefore(this.slim.container,this.select.element.nextSibling),e.data?this.setData(e.data):this.render(),document.addEventListener("click",function(e){e.target&&!l.hasClassInTree(e.target,t.config.id)&&t.close()}),"auto"===this.config.showContent&&window.addEventListener("scroll",l.debounce(function(e){t.data.contentOpen&&("above"===l.putContent(t.slim.content,t.data.contentPosition,t.data.contentOpen)?t.moveContentAbove():t.moveContentBelow())}),!1),e.beforeOnChange&&(this.beforeOnChange=e.beforeOnChange),e.onChange&&(this.onChange=e.onChange),e.beforeOpen&&(this.beforeOpen=e.beforeOpen),e.afterOpen&&(this.afterOpen=e.afterOpen),e.beforeClose&&(this.beforeClose=e.beforeClose),e.afterClose&&(this.afterClose=e.afterClose),this.config.isEnabled||this.disable()}t.default=r},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.searchFilter=function(e,t){return-1!==e.text.toLowerCase().indexOf(t.toLowerCase())},n);function n(e){this.id="",this.isMultiple=!1,this.isAjax=!1,this.isSearching=!1,this.showSearch=!0,this.searchFocus=!0,this.searchHighlight=!1,this.closeOnSelect=!0,this.showContent="auto",this.searchPlaceholder="Search",this.searchText="No Results",this.searchingText="Searching...",this.placeholderText="Select Value",this.allowDeselect=!1,this.allowDeselectOption=!1,this.hideSelectedOption=!1,this.deselectLabel="x",this.isEnabled=!0,this.valuesUseText=!1,this.showOptionTooltips=!1,this.selectByGroup=!1,this.limit=0,this.timeoutDelay=200,this.addToBody=!1,this.main="ss-main",this.singleSelected="ss-single-selected",this.arrow="ss-arrow",this.multiSelected="ss-multi-selected",this.add="ss-add",this.plus="ss-plus",this.values="ss-values",this.value="ss-value",this.valueText="ss-value-text",this.valueDelete="ss-value-delete",this.content="ss-content",this.open="ss-open",this.openAbove="ss-open-above",this.openBelow="ss-open-below",this.search="ss-search",this.searchHighlighter="ss-search-highlight",this.addable="ss-addable",this.list="ss-list",this.optgroup="ss-optgroup",this.optgroupLabel="ss-optgroup-label",this.optgroupLabelSelectable="ss-optgroup-label-selectable",this.option="ss-option",this.optionSelected="ss-option-selected",this.highlighted="ss-highlighted",this.disabled="ss-disabled",this.hide="ss-hide",this.id="ss-"+Math.floor(1e5*Math.random()),this.style=e.select.style.cssText,this.class=e.select.className.split(" "),this.isMultiple=e.select.multiple,this.isAjax=e.isAjax,this.showSearch=!1!==e.showSearch,this.searchFocus=!1!==e.searchFocus,this.searchHighlight=!0===e.searchHighlight,this.closeOnSelect=!1!==e.closeOnSelect,e.showContent&&(this.showContent=e.showContent),this.isEnabled=!1!==e.isEnabled,e.searchPlaceholder&&(this.searchPlaceholder=e.searchPlaceholder),e.searchText&&(this.searchText=e.searchText),e.searchingText&&(this.searchingText=e.searchingText),e.placeholderText&&(this.placeholderText=e.placeholderText),this.allowDeselect=!0===e.allowDeselect,this.allowDeselectOption=!0===e.allowDeselectOption,this.hideSelectedOption=!0===e.hideSelectedOption,e.deselectLabel&&(this.deselectLabel=e.deselectLabel),e.valuesUseText&&(this.valuesUseText=e.valuesUseText),e.showOptionTooltips&&(this.showOptionTooltips=e.showOptionTooltips),e.selectByGroup&&(this.selectByGroup=e.selectByGroup),e.limit&&(this.limit=e.limit),e.searchFilter&&(this.searchFilter=e.searchFilter),null!=e.timeoutDelay&&(this.timeoutDelay=e.timeoutDelay),this.addToBody=!0===e.addToBody}t.Config=s},function(e,t,i){"use strict";t.__esModule=!0;var s=(n.prototype.setValue=function(){if(this.main.data.getSelected()){if(this.main.config.isMultiple)for(var e=this.main.data.getSelected(),t=0,i=this.element.options;t<i.length;t++){var s=i[t];s.selected=!1;for(var n=0,a=e;n<a.length;n++)a[n].value===s.value&&(s.selected=!0)}else e=this.main.data.getSelected(),this.element.value=e?e.value:"";this.main.data.isOnChangeEnabled=!1,this.element.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.main.data.isOnChangeEnabled=!0}},n.prototype.addAttributes=function(){this.element.tabIndex=-1,this.element.style.display="none",this.element.dataset.ssid=this.main.config.id},n.prototype.addEventListeners=function(){var t=this;this.element.addEventListener("change",function(e){t.main.data.setSelectedFromSelect(),t.main.render()})},n.prototype.addMutationObserver=function(){var t=this;this.main.config.isAjax||(this.mutationObserver=new MutationObserver(function(e){t.triggerMutationObserver&&(t.main.data.parseSelectData(),t.main.data.setSelectedFromSelect(),t.main.render(),e.forEach(function(e){"class"===e.attributeName&&t.main.slim.updateContainerDivClass(t.main.slim.container)}))}),this.observeMutationObserver())},n.prototype.observeMutationObserver=function(){this.mutationObserver&&this.mutationObserver.observe(this.element,{attributes:!0,childList:!0,characterData:!0})},n.prototype.disconnectMutationObserver=function(){this.mutationObserver&&this.mutationObserver.disconnect()},n.prototype.create=function(e){for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(var t=0,i=e;t<i.length;t++){var s=i[t];if(s.hasOwnProperty("options")){var n=s,a=document.createElement("optgroup");if(a.label=n.label,n.options)for(var o=0,l=n.options;o<l.length;o++){var r=l[o];a.appendChild(this.createOption(r))}this.element.appendChild(a)}else this.element.appendChild(this.createOption(s))}},n.prototype.createOption=function(t){var i=document.createElement("option");return i.value=t.value||t.text,i.textContent=t.text,t.selected&&(i.selected=t.selected),t.disabled&&(i.disabled=!0),t.placeholder&&i.setAttribute("data-placeholder","true"),t.class&&t.class.split(" ").forEach(function(e){i.classList.add(e)}),t.data&&"object"==typeof t.data&&Object.keys(t.data).forEach(function(e){i.setAttribute("data-"+e,t.data[e])}),i},n);function n(e){this.triggerMutationObserver=!0,this.element=e.select,this.main=e.main,this.element.disabled&&(this.main.config.isEnabled=!1),this.addAttributes(),this.addEventListeners(),this.mutationObserver=null,this.addMutationObserver(),this.element.slim=e.main}t.Select=s},function(e,t,i){"use strict";t.__esModule=!0;var a=i(0),o=i(1),s=(n.prototype.containerDiv=function(){var e=document.createElement("div");return e.style.cssText=this.main.config.style,this.updateContainerDivClass(e),e},n.prototype.updateContainerDivClass=function(e){this.main.config.class=this.main.select.element.className.split(" "),e.className="",e.classList.add(this.main.config.id),e.classList.add(this.main.config.main);for(var t=0,i=this.main.config.class;t<i.length;t++){var s=i[t];""!==s.trim()&&e.classList.add(s)}},n.prototype.singleSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.singleSelected);var i=document.createElement("span");i.classList.add("placeholder"),e.appendChild(i);var s=document.createElement("span");s.textContent=this.main.config.deselectLabel,s.classList.add("ss-deselect"),s.onclick=function(e){e.stopPropagation(),t.main.config.isEnabled&&t.main.set("")},e.appendChild(s);var n=document.createElement("span");n.classList.add(this.main.config.arrow);var a=document.createElement("span");return a.classList.add("arrow-down"),n.appendChild(a),e.appendChild(n),e.onclick=function(){t.main.config.isEnabled&&(t.main.data.contentOpen?t.main.close():t.main.open())},{container:e,placeholder:i,deselect:s,arrowIcon:{container:n,arrow:a}}},n.prototype.placeholder=function(){var e=this.main.data.getSelected();if(null===e||e&&e.placeholder){var t=document.createElement("span");t.classList.add(this.main.config.disabled),t.textContent=this.main.config.placeholderText,this.singleSelected&&this.singleSelected.placeholder.appendChild(t)}else{var i="";e&&(i=e.text),this.singleSelected&&(this.singleSelected.placeholder.textContent=e?i:"")}},n.prototype.deselect=function(){if(this.singleSelected){if(!this.main.config.allowDeselect)return void this.singleSelected.deselect.classList.add("ss-hide");""===this.main.selected()?this.singleSelected.deselect.classList.add("ss-hide"):this.singleSelected.deselect.classList.remove("ss-hide")}},n.prototype.multiSelectedDiv=function(){var t=this,e=document.createElement("div");e.classList.add(this.main.config.multiSelected);var i=document.createElement("div");i.classList.add(this.main.config.values),e.appendChild(i);var s=document.createElement("div");s.classList.add(this.main.config.add);var n=document.createElement("span");return n.classList.add(this.main.config.plus),n.onclick=function(e){t.main.data.contentOpen&&(t.main.close(),e.stopPropagation())},s.appendChild(n),e.appendChild(s),e.onclick=function(e){t.main.config.isEnabled&&(e.target.classList.contains(t.main.config.valueDelete)||(t.main.data.contentOpen?t.main.close():t.main.open()))},{container:e,values:i,add:s,plus:n}},n.prototype.values=function(){if(this.multiSelected){for(var e,t=this.multiSelected.values.childNodes,i=this.main.data.getSelected(),s=[],n=0,a=t;n<a.length;n++){var o=a[n];e=!0;for(var l=0,r=i;l<r.length;l++){var c=r[l];String(c.id)===String(o.dataset.id)&&(e=!1)}e&&s.push(o)}for(var d=0,h=s;d<h.length;d++){var u=h[d];u.classList.add("ss-out"),this.multiSelected.values.removeChild(u)}for(t=this.multiSelected.values.childNodes,c=0;c<i.length;c++){e=!1;for(var p=0,m=t;p<m.length;p++)o=m[p],String(i[c].id)===String(o.dataset.id)&&(e=!0);e||(0!==t.length&&HTMLElement.prototype.insertAdjacentElement?0===c?this.multiSelected.values.insertBefore(this.valueDiv(i[c]),t[c]):t[c-1].insertAdjacentElement("afterend",this.valueDiv(i[c])):this.multiSelected.values.appendChild(this.valueDiv(i[c])))}if(0===i.length){var f=document.createElement("span");f.classList.add(this.main.config.disabled),f.textContent=this.main.config.placeholderText,this.multiSelected.values.appendChild(f)}}},n.prototype.valueDiv=function(a){var o=this,e=document.createElement("div");e.classList.add(this.main.config.value),e.dataset.id=a.id;var t=document.createElement("span");t.classList.add(this.main.config.valueText),t.textContent=a.text,e.appendChild(t);var i=document.createElement("span");return i.classList.add(this.main.config.valueDelete),i.textContent=this.main.config.deselectLabel,i.onclick=function(e){e.preventDefault(),e.stopPropagation();var t=!1;if(o.main.config.isEnabled){if(o.main.beforeOnChange||(t=!0),o.main.beforeOnChange){for(var i=o.main.data.getSelected(),s=JSON.parse(JSON.stringify(i)),n=0;n<s.length;n++)s[n].id===a.id&&s.splice(n,1);!1!==o.main.beforeOnChange(s)&&(t=!0)}t&&(o.main.data.removeFromSelected(a.id,"id"),o.main.render(),o.main.select.setValue(),o.main.data.onDataChange())}},e.appendChild(i),e},n.prototype.contentDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.content),e},n.prototype.searchDiv=function(){var n=this,e=document.createElement("div"),s=document.createElement("input"),a=document.createElement("div");e.classList.add(this.main.config.search);var t={container:e,input:s};return this.main.config.showSearch||(e.classList.add(this.main.config.hide),s.readOnly=!0),s.type="search",s.placeholder=this.main.config.searchPlaceholder,s.tabIndex=0,s.setAttribute("aria-label",this.main.config.searchPlaceholder),s.setAttribute("autocapitalize","off"),s.setAttribute("autocomplete","off"),s.setAttribute("autocorrect","off"),s.onclick=function(e){setTimeout(function(){""===e.target.value&&n.main.search("")},10)},s.onkeydown=function(e){"ArrowUp"===e.key?(n.main.open(),n.highlightUp(),e.preventDefault()):"ArrowDown"===e.key?(n.main.open(),n.highlightDown(),e.preventDefault()):"Tab"===e.key?n.main.data.contentOpen?n.main.close():setTimeout(function(){n.main.close()},n.main.config.timeoutDelay):"Enter"===e.key&&e.preventDefault()},s.onkeyup=function(e){var t=e.target;if("Enter"===e.key){if(n.main.addable&&e.ctrlKey)return a.click(),e.preventDefault(),void e.stopPropagation();var i=n.list.querySelector("."+n.main.config.highlighted);i&&i.click()}else"ArrowUp"===e.key||"ArrowDown"===e.key||("Escape"===e.key?n.main.close():n.main.config.showSearch&&n.main.data.contentOpen?n.main.search(t.value):s.value="");e.preventDefault(),e.stopPropagation()},s.onfocus=function(){n.main.open()},e.appendChild(s),this.main.addable&&(a.classList.add(this.main.config.addable),a.textContent="+",a.onclick=function(e){if(n.main.addable){e.preventDefault(),e.stopPropagation();var t=n.search.input.value;if(""===t.trim())return void n.search.input.focus();var i=n.main.addable(t),s="";if(!i)return;"object"==typeof i?o.validateOption(i)&&(n.main.addData(i),s=i.value?i.value:i.text):(n.main.addData(n.main.data.newOption({text:i,value:i})),s=i),n.main.search(""),setTimeout(function(){n.main.set(s,"value",!1,!1)},100),n.main.config.closeOnSelect&&setTimeout(function(){n.main.close()},100)}},e.appendChild(a),t.addable=a),t},n.prototype.highlightUp=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.previousSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.previousSibling;else{var i=this.list.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");t=i[i.length-1]}if(t&&t.classList.contains(this.main.config.optgroupLabel)&&(t=null),null===t){var s=e.parentNode;if(s.classList.contains(this.main.config.optgroup)&&s.previousSibling){var n=s.previousSibling.querySelectorAll("."+this.main.config.option+":not(."+this.main.config.disabled+")");n.length&&(t=n[n.length-1])}}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.highlightDown=function(){var e=this.list.querySelector("."+this.main.config.highlighted),t=null;if(e)for(t=e.nextSibling;null!==t&&t.classList.contains(this.main.config.disabled);)t=t.nextSibling;else t=this.list.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")");if(null===t&&null!==e){var i=e.parentNode;i.classList.contains(this.main.config.optgroup)&&i.nextSibling&&(t=i.nextSibling.querySelector("."+this.main.config.option+":not(."+this.main.config.disabled+")"))}t&&(e&&e.classList.remove(this.main.config.highlighted),t.classList.add(this.main.config.highlighted),a.ensureElementInView(this.list,t))},n.prototype.listDiv=function(){var e=document.createElement("div");return e.classList.add(this.main.config.list),e},n.prototype.options=function(e){void 0===e&&(e="");for(var t,i=this.main.data.filtered||this.main.data.data;this.list.firstChild;)this.list.removeChild(this.list.firstChild);if(""!==e)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.textContent=e,void this.list.appendChild(t);if(this.main.config.isAjax&&this.main.config.isSearching)return(t=document.createElement("div")).classList.add(this.main.config.option),t.classList.add(this.main.config.disabled),t.textContent=this.main.config.searchingText,void this.list.appendChild(t);if(0===i.length){var s=document.createElement("div");return s.classList.add(this.main.config.option),s.classList.add(this.main.config.disabled),s.textContent=this.main.config.searchText,void this.list.appendChild(s)}for(var n=function(e){if(e.hasOwnProperty("label")){var t=e,n=document.createElement("div");n.classList.add(c.main.config.optgroup);var i=document.createElement("div");i.classList.add(c.main.config.optgroupLabel),c.main.config.selectByGroup&&c.main.config.isMultiple&&i.classList.add(c.main.config.optgroupLabelSelectable),i.textContent=t.label,n.appendChild(i);var s=t.options;if(s){for(var a=0,o=s;a<o.length;a++){var l=o[a];n.appendChild(c.option(l))}if(c.main.config.selectByGroup&&c.main.config.isMultiple){var r=c;i.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();for(var t=0,i=n.children;t<i.length;t++){var s=i[t];-1!==s.className.indexOf(r.main.config.option)&&s.click()}})}}c.list.appendChild(n)}else c.list.appendChild(c.option(e))},c=this,a=0,o=i;a<o.length;a++)n(o[a])},n.prototype.option=function(r){if(r.placeholder){var e=document.createElement("div");return e.classList.add(this.main.config.option),e.classList.add(this.main.config.hide),e}var t=document.createElement("div");t.classList.add(this.main.config.option),r.class&&r.class.split(" ").forEach(function(e){t.classList.add(e)}),r.style&&(t.style.cssText=r.style);var c=this.main.data.getSelected();t.dataset.id=r.id,r.text&&(t.textContent=r.text),this.main.config.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent);var d=this;t.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation();var t=this.dataset.id;if(!0===r.selected&&d.main.config.allowDeselectOption){var i=!1;if(d.main.beforeOnChange&&d.main.config.isMultiple||(i=!0),d.main.beforeOnChange&&d.main.config.isMultiple){for(var s=d.main.data.getSelected(),n=JSON.parse(JSON.stringify(s)),a=0;a<n.length;a++)n[a].id===t&&n.splice(a,1);!1!==d.main.beforeOnChange(n)&&(i=!0)}i&&(d.main.config.isMultiple?(d.main.data.removeFromSelected(t,"id"),d.main.render(),d.main.select.setValue(),d.main.data.onDataChange()):d.main.set(""))}else{if(r.disabled||r.selected)return;if(d.main.config.limit&&Array.isArray(c)&&d.main.config.limit<=c.length)return;if(d.main.beforeOnChange){var o=void 0,l=JSON.parse(JSON.stringify(d.main.data.getObjectFromData(t)));l.selected=!0,d.main.config.isMultiple?(o=JSON.parse(JSON.stringify(c))).push(l):o=JSON.parse(JSON.stringify(l)),!1!==d.main.beforeOnChange(o)&&d.main.set(t,"id",d.main.config.closeOnSelect)}else d.main.set(t,"id",d.main.config.closeOnSelect)}});var i=c&&a.isValueInArrayOfObjects(c,"id",r.id);return(r.disabled||i)&&(t.onclick=null,d.main.config.allowDeselectOption||t.classList.add(this.main.config.disabled),d.main.config.hideSelectedOption&&t.classList.add(this.main.config.hide)),i?t.classList.add(this.main.config.optionSelected):t.classList.remove(this.main.config.optionSelected),t},n);function n(e){this.main=e.main,this.container=this.containerDiv(),this.content=this.contentDiv(),this.search=this.searchDiv(),this.list=this.listDiv(),this.options(),this.singleSelected=null,this.multiSelected=null,this.main.config.isMultiple?(this.multiSelected=this.multiSelectedDiv(),this.multiSelected&&this.container.appendChild(this.multiSelected.container)):(this.singleSelected=this.singleSelectedDiv(),this.container.appendChild(this.singleSelected.container)),this.main.config.addToBody?(this.content.classList.add(this.main.config.id),document.body.appendChild(this.content)):this.container.appendChild(this.content),this.content.appendChild(this.search.container),this.content.appendChild(this.list)}t.Slim=s}],n.c=s,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)).default;function n(e){if(s[e])return s[e].exports;var t=s[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var i,s});

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../database/config */ "../database/config.js");
/* harmony import */ var _database_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_database_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database_files_essentiality_tissues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/files/essentiality-tissues */ "../database/files/essentiality-tissues.js");
/* harmony import */ var _database_files_protein_tissues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/files/protein-tissues */ "../database/files/protein-tissues.js");
/* harmony import */ var _database_files_rna_tissues__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database/files/rna-tissues */ "../database/files/rna-tissues.js");





const species = Object.values((_database_config__WEBPACK_IMPORTED_MODULE_0___default().speciesID));
species.sort();

const config = {
  compartmentSpecies: [
    'Arabidopsis thaliana',
    'Caenorhabditis elegans',
    'Drosophila melanogaster',
    'Homo sapiens',
    'Mus musculus',
    'Saccharomyces cerevisiae',
  ],
  defaultCheckedOptions: [
    'auto',
    'basic',
    'description',
    'domain',
    'essentiality',
    'go',
    'interactors',
    'links',
    'localization',
    'localization_compartments',
    'localization_hpa',
    'localization_uniprot',
    'pathology',
    'pathway',
    'protein_expression',
    'rna_expression',
    'region',
  ],
  defaultGoNamespace: 'bp',
  defaultInputs: {
    essentiality_codependencies: 5,
  },
  defaultSettingOrder: [
    'basic',
    'links',
    'description',
    'domain',
    'expression',
    'go',
    'localization',
    'essentiality',
    'pathology',
    'pathway',
    'interactors',
  ],
  defaultSpecies: 'Homo sapiens',
  defaultTissues: {
    essentiality: {
      'Homo sapiens': ['HEPG2', 'JURKAT', 'U2OS'],
    },
    protein: {
      'Homo sapiens': ['HEK-293', 'HeLa', 'Hep-G2', 'U2-OS'],
    },
    rna: {
      'Homo sapiens': ['HEK 293', 'HeLa', 'Hep G2', 'U-2 OS'],
    },
  },
  defaultUncheckedOptions: [
    'ctrl',
  ],
  expressionThresholds: {
    none: [0, 1],
    low: [1, 10],
    medium: [10, 50],
    high: [50],
  },
  goNamespaces: ['bp', 'cc', 'mf'],
  species,
  // The yeast species ID is what the compartment database uses.
  speciesID: {
    'Arabidopsis thaliana': 3702,
    'Caenorhabditis elegans': 6239,
    'Drosophila melanogaster': 7227,
    'Homo sapiens': 9606,
    'Mus musculus': 10090,
    'Saccharomyces cerevisiae': 4932,
  },
  theme: 'light',
  tissues: {
    essentiality: _database_files_essentiality_tissues__WEBPACK_IMPORTED_MODULE_1__.default,
    protein: _database_files_protein_tissues__WEBPACK_IMPORTED_MODULE_2__.default,
    rna: _database_files_rna_tissues__WEBPACK_IMPORTED_MODULE_3__.default,
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/popup/display/display.js":
/*!**************************************!*\
  !*** ./src/popup/display/display.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateDisplay": () => (/* binding */ updateDisplay),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _toggle_compartments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle-compartments */ "./src/popup/display/toggle-compartments.js");
/* harmony import */ var _toggle_tissues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle-tissues */ "./src/popup/display/toggle-tissues.js");
/* harmony import */ var _toggle_hpa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-hpa */ "./src/popup/display/toggle-hpa.js");





const updateDisplay = (species) => {
  (0,_toggle_compartments__WEBPACK_IMPORTED_MODULE_1__.default)(species);
  (0,_toggle_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    className: 'essentiality',
    species,
    tissueID: 'essentiality',
  });
  (0,_toggle_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    className: 'protein-expression',
    species,
    tissueID: 'protein',
  });
  (0,_toggle_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    className: 'rna-expression',
    species,
    tissueID: 'rna',
  });
  (0,_toggle_hpa__WEBPACK_IMPORTED_MODULE_3__.default)(species);
};

const display = () => {
  chrome.storage.local.get('species', (storage) => {
    const species = storage.species || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultSpecies;
    updateDisplay(species);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);


/***/ }),

/***/ "./src/popup/display/toggle-compartments.js":
/*!**************************************************!*\
  !*** ./src/popup/display/toggle-compartments.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const toggleCompartments = (species) => {
  const element = document.querySelector('.compartments');
  if (_config__WEBPACK_IMPORTED_MODULE_0__.default.compartmentSpecies.includes(species)) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleCompartments);


/***/ }),

/***/ "./src/popup/display/toggle-hpa.js":
/*!*****************************************!*\
  !*** ./src/popup/display/toggle-hpa.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleHPA = (species) => {
  const elements = document.querySelectorAll('.hpa');
  if (species === 'Homo sapiens') {
    elements.forEach((element) => {
      element.classList.remove('hide');
    });
  } else {
    elements.forEach((element) => {
      element.classList.add('hide');
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleHPA);


/***/ }),

/***/ "./src/popup/display/toggle-tissues.js":
/*!*********************************************!*\
  !*** ./src/popup/display/toggle-tissues.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const toggleTissues = ({ className, species, tissueID }) => {
  const element = document.querySelector(`.${className}`);
  const availableSpecies = _config__WEBPACK_IMPORTED_MODULE_0__.default.tissues[tissueID];

  if (
    availableSpecies[species]
    && (availableSpecies[species].cells.length > 0 || availableSpecies[species].tissues.length > 0)
  ) {
    element.classList.remove('hide');
  } else {
    element.classList.add('hide');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTissues);


/***/ }),

/***/ "./src/popup/helpers/message.js":
/*!**************************************!*\
  !*** ./src/popup/helpers/message.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeTab": () => (/* binding */ activeTab),
/* harmony export */   "updateTab": () => (/* binding */ updateTab)
/* harmony export */ });
const activeTab = (action, setting, value) => (
  new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action, setting, value }, (response) => {
        resolve(response);
      });
    });
  })
);

// Send object to content script. Do this for all tabs as they should all update
// When a setting changes.
const updateTab = (action, setting, value) => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { action, setting, value });
    });
  });
};


/***/ }),

/***/ "./src/popup/helpers/storage.js":
/*!**************************************!*\
  !*** ./src/popup/helpers/storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const get = (field, callback, ...args) => {
  chrome.storage.local.get(field, (storage) => {
    callback(field, storage[field], ...args);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (get);


/***/ }),

/***/ "./src/popup/listeners/activation-check.js":
/*!*************************************************!*\
  !*** ./src/popup/listeners/activation-check.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const activatationCheck = function activate() {
  const options = ['click', 'drag', 'disable'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ activate: option });
      document.getElementById(`activate_${option}`).checked = true;
    } else {
      document.getElementById(`activate_${option}`).checked = false;
    }
  });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', 'activate', type);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activatationCheck);


/***/ }),

/***/ "./src/popup/listeners/advanced-settings.js":
/*!**************************************************!*\
  !*** ./src/popup/listeners/advanced-settings.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const advancedSettings = function settings() {
  const { type } = this.dataset;
  const el = document.getElementById(type);
  if (el) {
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (advancedSettings);


/***/ }),

/***/ "./src/popup/listeners/bind-listeners.js":
/*!***********************************************!*\
  !*** ./src/popup/listeners/bind-listeners.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _activation_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-check */ "./src/popup/listeners/activation-check.js");
/* harmony import */ var _advanced_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advanced-settings */ "./src/popup/listeners/advanced-settings.js");
/* harmony import */ var _namespace_check__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namespace-check */ "./src/popup/listeners/namespace-check.js");
/* harmony import */ var _on_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./on-change */ "./src/popup/listeners/on-change.js");
/* harmony import */ var _report_check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report-check */ "./src/popup/listeners/report-check.js");
/* harmony import */ var _species_on_change__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./species-on-change */ "./src/popup/listeners/species-on-change.js");
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toggle */ "./src/popup/listeners/toggle.js");
/* harmony import */ var _drag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drag */ "./src/popup/listeners/drag.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ "./src/popup/listeners/search.js");










const bindListeners = () => {
  document.querySelectorAll('.click-activate').forEach((element) => {
    element.addEventListener('click', _activation_check__WEBPACK_IMPORTED_MODULE_0__.default);
  });
  document.querySelectorAll('.advanced-settings').forEach((element) => {
    element.addEventListener('click', _advanced_settings__WEBPACK_IMPORTED_MODULE_1__.default);
  });
  document.querySelectorAll('.click-display').forEach((element) => {
    element.addEventListener('click', _report_check__WEBPACK_IMPORTED_MODULE_4__.default);
  });
  document.querySelectorAll('.click-namespace').forEach((element) => {
    element.addEventListener('click', _namespace_check__WEBPACK_IMPORTED_MODULE_2__.default);
  });
  document.querySelectorAll('.input').forEach((element) => {
    element.addEventListener('change', _on_change__WEBPACK_IMPORTED_MODULE_3__.default);
  });
  document.querySelectorAll('.select').forEach((element) => {
    element.addEventListener('change', _on_change__WEBPACK_IMPORTED_MODULE_3__.default);
  });
  document.querySelectorAll('.toggle').forEach((element) => {
    element.addEventListener('click', _toggle__WEBPACK_IMPORTED_MODULE_6__.default);
  });

  // Species select menu.
  document.getElementById('species').addEventListener('change', _species_on_change__WEBPACK_IMPORTED_MODULE_5__.default);

  // Search listeners
  document.getElementById('button_search').addEventListener('click', _search__WEBPACK_IMPORTED_MODULE_8__.onSearchClick);
  document.getElementById('input_search').addEventListener('keypress', _search__WEBPACK_IMPORTED_MODULE_8__.search);

  // Drag listeners
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('drag', _drag__WEBPACK_IMPORTED_MODULE_7__.drag);
  });
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('dragend', _drag__WEBPACK_IMPORTED_MODULE_7__.dragEnd);
  });
  document.querySelectorAll('div[draggable="true"]').forEach((element) => {
    element.addEventListener('dragstart', _drag__WEBPACK_IMPORTED_MODULE_7__.dragStart);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bindListeners);


/***/ }),

/***/ "./src/popup/listeners/drag.js":
/*!*************************************!*\
  !*** ./src/popup/listeners/drag.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": () => (/* binding */ data),
/* harmony export */   "arrayMove": () => (/* binding */ arrayMove),
/* harmony export */   "elementChildren": () => (/* binding */ elementChildren),
/* harmony export */   "mouseOverID": () => (/* binding */ mouseOverID),
/* harmony export */   "drag": () => (/* binding */ drag),
/* harmony export */   "dragOver": () => (/* binding */ dragOver),
/* harmony export */   "dragEnd": () => (/* binding */ dragEnd),
/* harmony export */   "dragStart": () => (/* binding */ dragStart)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const data = {
  get: function getter(key) {
    return this.values[key];
  },
  set: function setter(key, value) {
    this.values[key] = value;
  },
  values: {},
};

// Move an item fromIndex toIndex in arr
const arrayMove = (arr, fromIndex, toIndex) => {
  const reordered = [...arr];
  const item = reordered[fromIndex];
  reordered.splice(fromIndex, 1);
  reordered.splice(toIndex, 0, item);
  return reordered;
};

// Get the ID and top position of children in an element.
const elementChildren = (element) => {
  const childData = [];
  const { children } = element;
  for (let i = 0; i < children.length; i += 1) {
    childData.push({
      id: children[i].id,
      top: children[i].offsetTop,
    });
  }
  return childData;
};

// Get ID and array index of item being moused over.
const mouseOverID = (mousePosition, arr, startIndex) => {
  const lastIndex = arr.length - 1;
  if (mousePosition < arr[0].top) {
    return {
      dropBeforeID: arr[0].id,
      dropIndex: 0,
    };
  }
  for (let i = 0; i < lastIndex; i += 1) {
    if (
      mousePosition >= arr[i].top
      && mousePosition < arr[i + 1].top
    ) {
      return {
        dropBeforeID: arr[i + 1].id,
        dropIndex: i < startIndex ? i + 1 : i,
      };
    }
  }
  return {
    dropBeforeID: 'drag_noelement',
    dropIndex: lastIndex,
  };
};

const drag = (e) => {
  const { id } = e.target;
  e.preventDefault();

  // Update element position.
  const el = document.getElementById(id);
  const mousePosition = data.get('y');
  const top = mousePosition - data.get('offset');
  el.style.top = `${top}px`;

  // Get drop position and update placeholder
  const insertPosition = mouseOverID(mousePosition, data.get('children'), data.get('startIndex'));
  data.set('dropBeforeID', insertPosition.dropBeforeID);
  data.set('dropIndex', insertPosition.dropIndex);
  el.parentElement.insertBefore(
    document.getElementById('drag_placeholder'),
    document.getElementById(insertPosition.dropBeforeID),
  );
};

const dragOver = (e) => {
  data.set('y', e.clientY);
};

const dragEnd = (e) => {
  e.preventDefault();
  const { id } = e.target;

  // Move element.
  const el = document.getElementById(id);
  const container = el.parentElement;
  container.insertBefore(el, document.getElementById(data.get('dropBeforeID')));

  // destroy "placeholder" drag image
  container.removeChild(document.getElementById('drag_placeholder'));

  // Restore element appearence
  el.setAttribute('style', `
    background-color: transparent;
    position: static;
    width: auto;
    z-index: auto;
  `);

  // destroy "hidden" drag image
  container.removeChild(document.getElementById('drag_image'));

  // Remove drag over listener from document.
  document.removeEventListener('dragover', dragOver);

  // Update user settings.
  const settingNames = data.get('children').map(child => child.id.replace('drag_', ''));
  const newOrder = arrayMove(settingNames, data.get('startIndex'), data.get('dropIndex'));
  chrome.storage.local.set({ setting_order: newOrder });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', 'setting_order', newOrder);
};

const dragStart = (e) => {
  const { clientY, dataTransfer, target } = e;
  const {
    id,
    offsetHeight,
    offsetTop,
    offsetWidth,
  } = target;

  // Get drag children and selected element index.
  const container = document.getElementById('settings_drop_container');
  const children = elementChildren(container);
  const startIndex = children.findIndex(child => child.id === id);

  // Firefox requires setData to be called.
  dataTransfer.setData('text/plain', '');

  /* Add drag over listener from document. This is needed because Firefox
  ** does not attach clientY to drag events. */
  document.addEventListener('dragover', dragOver);

  // Create hidden drag image
  const dragImage = document.createElement('div');
  dragImage.id = 'drag_image';
  dragImage.style.height = '1px';
  dragImage.style.opacity = 0;
  dragImage.style.width = '1px';
  container.appendChild(dragImage);
  dataTransfer.setDragImage(dragImage, 0, 0);

  // Create placeholder
  const el = document.getElementById(id);
  const placeholder = document.createElement('div');
  placeholder.id = 'drag_placeholder';
  placeholder.style.height = `${offsetHeight}px`;
  placeholder.style.width = `${offsetWidth}px`;
  container.insertBefore(placeholder, el);

  // Configure element for dragging
  const lightTheme = document.querySelector('.theme_light');
  el.setAttribute('style', `
    background-color: ${lightTheme ? '#fafafa' : '#323639'};
    position: absolute;
    top: ${offsetTop}px;
    width: ${offsetWidth}px;
    z-index: 10;
  `);

  // Set current data.
  data.set('children', children);
  data.set('offset', clientY - offsetTop);
  data.set('startIndex', startIndex);
  data.set('y', clientY);
};


/***/ }),

/***/ "./src/popup/listeners/namespace-check.js":
/*!************************************************!*\
  !*** ./src/popup/listeners/namespace-check.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const namespaceCheck = function namespage() {
  const { type } = this.dataset;
  ['bp', 'cc', 'mf'].forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ go_namespace: option });
      document.getElementById(`go_namespace_${option}`).checked = true;
    } else {
      document.getElementById(`go_namespace_${option}`).checked = false;
    }
  });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', 'go_namespace', type);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (namespaceCheck);


/***/ }),

/***/ "./src/popup/listeners/on-change.js":
/*!******************************************!*\
  !*** ./src/popup/listeners/on-change.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const onChange = function change() {
  const { value } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [type]: value });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', type, value);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onChange);


/***/ }),

/***/ "./src/popup/listeners/report-check.js":
/*!*********************************************!*\
  !*** ./src/popup/listeners/report-check.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const reportCheck = function report() {
  const options = ['detailed', 'tooltip'];
  const { type } = this.dataset;
  options.forEach((option) => {
    if (option === type) {
      chrome.storage.local.set({ report: option });
      document.getElementById(option).checked = true;
    } else {
      document.getElementById(option).checked = false;
    }
  });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', 'report', type);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportCheck);


/***/ }),

/***/ "./src/popup/listeners/search.js":
/*!***************************************!*\
  !*** ./src/popup/listeners/search.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "search": () => (/* binding */ search),
/* harmony export */   "onSearchClick": () => (/* binding */ onSearchClick)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const search = function enter(e) {
  if (e.keyCode === 13) {
    const { value } = e.target;
    if (value) {
      (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.activeTab)('search', value);
    }
  }
};

const onSearchClick = () => {
  const e = {
    keyCode: 13,
    target: {
      value: document.getElementById('input_search').value,
    },
  };
  search(e);
};


/***/ }),

/***/ "./src/popup/listeners/species-on-change.js":
/*!**************************************************!*\
  !*** ./src/popup/listeners/species-on-change.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/display */ "./src/popup/display/display.js");
/* harmony import */ var _populate_tissues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../populate/tissues */ "./src/popup/populate/tissues.js");




const speciesOnChange = function change() {
  const { value } = this;
  chrome.storage.local.set({ species: value });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', 'species', value);
  (0,_display_display__WEBPACK_IMPORTED_MODULE_1__.updateDisplay)(value);
  (0,_populate_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    expressionType: 'essentiality',
    restoreDefaults: true,
    selectID: 'essentiality_tissues',
    species: value,
  });
  (0,_populate_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    expressionType: 'protein',
    restoreDefaults: true,
    selectID: 'protein_expression_tissues',
    species: value,
  });
  (0,_populate_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    expressionType: 'rna',
    restoreDefaults: true,
    selectID: 'rna_expression_tissues',
    species: value,
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (speciesOnChange);


/***/ }),

/***/ "./src/popup/listeners/toggle.js":
/*!***************************************!*\
  !*** ./src/popup/listeners/toggle.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const toggle = function tog() {
  const { checked } = this;
  const { type } = this.dataset;
  chrome.storage.local.set({ [type]: checked });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.updateTab)('updateSetting', type, checked);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggle);


/***/ }),

/***/ "./src/popup/populate/populate.js":
/*!****************************************!*\
  !*** ./src/popup/populate/populate.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _species__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./species */ "./src/popup/populate/species.js");
/* harmony import */ var _tissues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tissues */ "./src/popup/populate/tissues.js");




const populate = () => {
  (0,_species__WEBPACK_IMPORTED_MODULE_1__.default)();
  chrome.storage.local.get('select_species', (storage) => {
    const organism = storage.select_species || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultSpecies;
    (0,_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
      selectID: 'essentiality_tissues',
      species: organism,
      tissueID: 'essentiality',
    });
    (0,_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
      selectID: 'protein_expression_tissues',
      species: organism,
      tissueID: 'protein',
    });
    (0,_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
      selectID: 'rna_expression_tissues',
      species: organism,
      tissueID: 'rna',
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populate);


/***/ }),

/***/ "./src/popup/populate/species.js":
/*!***************************************!*\
  !*** ./src/popup/populate/species.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const species = () => {
  const select = document.getElementById('species');
  _config__WEBPACK_IMPORTED_MODULE_0__.default.species.forEach((specie) => {
    const option = document.createElement('option');
    option.value = specie;
    option.textContent = specie;
    select.appendChild(option);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (species);


/***/ }),

/***/ "./src/popup/populate/tissues.js":
/*!***************************************!*\
  !*** ./src/popup/populate/tissues.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");
/* harmony import */ var _node_modules_slim_select_dist_slimselect_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/slim-select/dist/slimselect.css */ "./node_modules/slim-select/dist/slimselect.css");
/* eslint no-new: 0 */








const changeTissues = selectID => (options) => {
  const selected = options.map(option => option.value);
  chrome.storage.local.set({ [selectID]: selected });
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_2__.updateTab)('updateSetting', selectID, selected);
};

const defineDefaultTissues = (tissueID, species, tissueData) => {
  const defaultTissues = [];
  if (
    _config__WEBPACK_IMPORTED_MODULE_1__.default.defaultTissues[tissueID][species]
    && _config__WEBPACK_IMPORTED_MODULE_1__.default.defaultTissues[tissueID][species].length > 0
  ) {
    defaultTissues.push(..._config__WEBPACK_IMPORTED_MODULE_1__.default.defaultTissues[tissueID][species]);
  } else if (tissueData) {
    if (tissueData.cells && tissueData.cells.length > 0) {
      defaultTissues.push(tissueData.cells[0]);
    }
    if (tissueData.tissues && tissueData.tissues.length > 0) {
      defaultTissues.push(tissueData.tissues[0]);
    }
  }

  return defaultTissues;
};

const storedTissues = (defaultTissues, selectID, restore) => (
  new Promise((resolve) => {
    if (restore) {
      chrome.storage.local.set({ [selectID]: defaultTissues });
      resolve(defaultTissues);
      (0,_helpers_message__WEBPACK_IMPORTED_MODULE_2__.updateTab)('updateSetting', selectID, defaultTissues);
    } else {
      chrome.storage.local.get(selectID, (storage) => {
        resolve(storage[selectID] || defaultTissues);
      });
    }
  })
);

const defineOptions = (inputOptions) => {
  const defaultOptions = {
    restoreDefaults: false,
  };

  return {
    ...defaultOptions,
    ...inputOptions,
  };
};

const tissueSelect = async (inputOptions = {}) => {
  const {
    tissueID,
    restoreDefaults,
    selectID,
    species,
  } = defineOptions(inputOptions);

  const tissueData = _config__WEBPACK_IMPORTED_MODULE_1__.default.tissues[tissueID][species];
  const defaultTissues = defineDefaultTissues(tissueID, species, tissueData);

  if (tissueData) {
    const selectedTissues = await storedTissues(defaultTissues, selectID, restoreDefaults);
    const data = [
      { placeholder: true, text: 'Select cells/tissues' },
    ];
    if (tissueData.cells.length > 0) {
      data.push({
        label: 'Cells',
        options: tissueData.cells.map(cell => ({
          selected: selectedTissues.includes(cell),
          text: cell,
        })),
      });
    }
    if (tissueData.tissues.length > 0) {
      data.push({
        label: 'Tissues',
        options: tissueData.tissues.map(tissue => ({
          selected: selectedTissues.includes(tissue),
          text: tissue,
        })),
      });
    }

    new (slim_select__WEBPACK_IMPORTED_MODULE_0___default())({
      closeOnSelect: false,
      data,
      onChange: changeTissues(selectID),
      select: `#${selectID}`,
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tissueSelect);


/***/ }),

/***/ "./src/popup/settings/activation-checkbox.js":
/*!***************************************************!*\
  !*** ./src/popup/settings/activation-checkbox.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const options = ['click', 'drag', 'disable'];

const activationCheckbox = () => {
  chrome.storage.local.get('activate', (storage) => {
    const activate = storage.activate || 'click';
    options.forEach((option) => {
      const checked = option === activate;
      document.getElementById(`activate_${option}`).checked = checked;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activationCheckbox);


/***/ }),

/***/ "./src/popup/settings/inputs.js":
/*!**************************************!*\
  !*** ./src/popup/settings/inputs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setInput": () => (/* binding */ setInput),
/* harmony export */   "inputs": () => (/* binding */ inputs)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/storage */ "./src/popup/helpers/storage.js");



const setInput = (inputID, storageValue, defaultValue) => {
  const value = storageValue === undefined ? defaultValue : Number(storageValue);
  const inputEl = document.getElementById(inputID);
  inputEl.value = value;
};

const inputs = () => {
  Object.entries(_config__WEBPACK_IMPORTED_MODULE_0__.default.defaultInputs).forEach(([inputID, value]) => {
    (0,_helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default)(inputID, setInput, value);
  });
};


/***/ }),

/***/ "./src/popup/settings/load-preferences.js":
/*!************************************************!*\
  !*** ./src/popup/settings/load-preferences.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _activation_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activation-checkbox */ "./src/popup/settings/activation-checkbox.js");
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menus */ "./src/popup/settings/menus.js");
/* harmony import */ var _namespace_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./namespace-checkbox */ "./src/popup/settings/namespace-checkbox.js");
/* harmony import */ var _report_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-checkbox */ "./src/popup/settings/report-checkbox.js");
/* harmony import */ var _setting_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setting-order */ "./src/popup/settings/setting-order.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./src/popup/settings/theme.js");
/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./warning */ "./src/popup/settings/warning.js");
/* harmony import */ var _inputs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inputs */ "./src/popup/settings/inputs.js");
/* harmony import */ var _toggles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toggles */ "./src/popup/settings/toggles.js");










const loadPreferences = () => {
  (0,_activation_checkbox__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_menus__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_namespace_checkbox__WEBPACK_IMPORTED_MODULE_2__.default)();
  (0,_report_checkbox__WEBPACK_IMPORTED_MODULE_3__.default)();
  (0,_setting_order__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,_theme__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,_toggles__WEBPACK_IMPORTED_MODULE_8__.toggles)();
  (0,_inputs__WEBPACK_IMPORTED_MODULE_7__.inputs)();
  (0,_warning__WEBPACK_IMPORTED_MODULE_6__.default)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPreferences);


/***/ }),

/***/ "./src/popup/settings/menus.js":
/*!*************************************!*\
  !*** ./src/popup/settings/menus.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const menuDefaults = [
  { name: 'field', value: 'gene' },
  { name: 'species', value: _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultSpecies },
  { name: 'theme', value: 'light' },
];

const menus = () => {
  menuDefaults.forEach((menu) => {
    const currMenu = menu.name;
    chrome.storage.local.get(currMenu, (storage) => {
      const value = storage[currMenu] || menu.value;
      document.getElementById(currMenu).value = value;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menus);


/***/ }),

/***/ "./src/popup/settings/namespace-checkbox.js":
/*!**************************************************!*\
  !*** ./src/popup/settings/namespace-checkbox.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const namespaceCheckbox = () => {
  chrome.storage.local.get('go_namespace', (storage) => {
    const namespace = storage.go_namespace || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultGoNamespace;
    _config__WEBPACK_IMPORTED_MODULE_0__.default.goNamespaces.forEach((option) => {
      const checked = option === namespace;
      document.getElementById(`go_namespace_${option}`).checked = checked;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (namespaceCheckbox);


/***/ }),

/***/ "./src/popup/settings/report-checkbox.js":
/*!***********************************************!*\
  !*** ./src/popup/settings/report-checkbox.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const reportCheckbox = () => {
  const options = ['detailed', 'tooltip'];
  chrome.storage.local.get('report', (storage) => {
    const report = storage.report || 'detailed';
    options.forEach((option) => {
      const checked = option === report;
      document.getElementById(option).checked = checked;
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportCheckbox);


/***/ }),

/***/ "./src/popup/settings/setting-order.js":
/*!*********************************************!*\
  !*** ./src/popup/settings/setting-order.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setElementOrder": () => (/* binding */ setElementOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _utils_confirm_setting_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/confirm-setting-order */ "./src/utils/confirm-setting-order.js");
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");




const setElementOrder = (storage) => {
  const confirmed = (0,_utils_confirm_setting_order__WEBPACK_IMPORTED_MODULE_1__.default)(storage.setting_order, _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultSettingOrder);
  const container = document.getElementById('settings_drop_container');
  confirmed.order.forEach((setting) => {
    container.appendChild(document.getElementById(`drag_${setting}`));
  });

  if (confirmed.shouldUpdate) {
    (0,_helpers_message__WEBPACK_IMPORTED_MODULE_2__.updateTab)('updateSetting', 'setting_order', confirmed.order);
  }
};

const settingOrder = () => {
  chrome.storage.local.get('setting_order', setElementOrder);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingOrder);


/***/ }),

/***/ "./src/popup/settings/theme.js":
/*!*************************************!*\
  !*** ./src/popup/settings/theme.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");


const theme = () => {
  chrome.storage.local.get('theme', (storage) => {
    const value = storage.theme || _config__WEBPACK_IMPORTED_MODULE_0__.default.theme;
    document.querySelector('body').classList.add(`theme_${value}`);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ "./src/popup/settings/toggles.js":
/*!***************************************!*\
  !*** ./src/popup/settings/toggles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTransitionDuration": () => (/* binding */ setTransitionDuration),
/* harmony export */   "setChecked": () => (/* binding */ setChecked),
/* harmony export */   "toggles": () => (/* binding */ toggles)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/storage */ "./src/popup/helpers/storage.js");



/* setTransitionDuration gets the parent node for a toggle and then
** changes the transition duration on the adjacent label so that
** it will only transition after loading */
const setTransitionDuration = (el) => {
  const label = el.parentNode.querySelector('label');
  window.setTimeout(() => {
    label.style.transitionDuration = '0.2s';
  }, 50);
};

const setChecked = (toggle, storageValue, undefIsChecked, updateElement) => {
  let checked;
  if (storageValue === undefined && undefIsChecked) {
    checked = true;
  } else {
    checked = Boolean(storageValue);
  }
  const toggleEl = document.getElementById(toggle);
  toggleEl.checked = checked;
  updateElement(toggleEl);
};

const toggles = () => {
  _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultCheckedOptions.forEach((toggle) => {
    (0,_helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default)(toggle, setChecked, true, setTransitionDuration);
  });
  _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultUncheckedOptions.forEach((toggle) => {
    (0,_helpers_storage__WEBPACK_IMPORTED_MODULE_1__.default)(toggle, setChecked, false, setTransitionDuration);
  });
};


/***/ }),

/***/ "./src/popup/settings/warning.js":
/*!***************************************!*\
  !*** ./src/popup/settings/warning.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/message */ "./src/popup/helpers/message.js");


const warning = () => {
  (0,_helpers_message__WEBPACK_IMPORTED_MODULE_0__.activeTab)('ping').then((response) => {
    let disabled = false;
    let display = 'none';
    if (!response) {
      disabled = true;
      display = 'flex';
    }
    document.getElementById('button_search').disabled = disabled;
    document.getElementById('input_search').disabled = disabled;
    document.querySelector('.warning').style.display = display;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ }),

/***/ "./src/utils/confirm-setting-order.js":
/*!********************************************!*\
  !*** ./src/utils/confirm-setting-order.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* Need to ensure that the elements listed in the user's stored settings
** are still available and see if there are any new settings that have
** been added that are not in the stored order (append these to end).
** Update stored settings and tab settings if there is a descrepency. */
const confirmSettingOrder = (userSettings, defaultSettings) => {
  if (!userSettings || userSettings.length === 0) {
    return {
      order: defaultSettings,
      shouldUpdate: true,
    };
  }

  const missing = [...defaultSettings];
  let order = [];
  const storedSettings = [...userSettings];
  for (let i = 0; i < storedSettings.length; i += 1) {
    const setting = storedSettings[i];
    const missingIndex = missing.indexOf(setting);
    if (missingIndex > -1) {
      missing.splice(missingIndex, 1);
      order.push(setting);
      storedSettings.splice(i, 1);
      i -= 1;
    }
  }

  // Append any missing settings
  if (missing.length > 0) {
    order = [...order, ...missing];
  }

  return {
    order,
    shouldUpdate: missing.length > 0 || storedSettings.length > 0,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (confirmSettingOrder);


/***/ }),

/***/ "../database/config.js":
/*!*****************************!*\
  !*** ../database/config.js ***!
  \*****************************/
/***/ ((module) => {

const config = {
  compartmentsThreshold: 5,
  fields: [
    'accession',
    'comment',
    'dbReference',
    'gene',
    'organism',
    'protein',
    'sequence',
  ],
  proteomicsDBSpecies: [9606],
  speciesID: {
    3702: 'Arabidopsis thaliana',
    6239: 'Caenorhabditis elegans',
    7955: 'Danio rerio',
    44689: 'Dictyostelium discoideum',
    7227: 'Drosophila melanogaster',
    9031: 'Gallus gallus',
    9606: 'Homo sapiens',
    10090: 'Mus musculus',
    83333: 'Escherichia coli (K12)',
    99287: 'Salmonella Typhimurium (LT2)',
    559292: 'Saccharomyces cerevisiae',
    284812: 'Schizosaccharomyces pombe',
    8355: 'Xenopus laevis',
  },
};

module.exports = config;


/***/ }),

/***/ "../database/files/essentiality-tissues.js":
/*!*************************************************!*\
  !*** ../database/files/essentiality-tissues.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tissues = {
  'Salmonella Typhimurium (LT2)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Gallus gallus': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Xenopus laevis': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Danio rerio': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Dictyostelium discoideum': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Schizosaccharomyces pombe': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Escherichia coli (K12)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Caenorhabditis elegans': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Saccharomyces cerevisiae': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Drosophila melanogaster': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Arabidopsis thaliana': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Mus musculus': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Homo sapiens': {
    cells: [
      '143B',
      '21NT',
      '22RV1',
      '2313287',
      '253J',
      '42MGBA',
      '5637',
      '59M',
      '639V',
      '647V',
      '697',
      '769P',
      '786O',
      '8305C',
      '8MGBA',
      '93T449',
      '94T778',
      '9505BIK',
      '95T1000',
      'A172',
      'A2058',
      'A253',
      'A2780',
      'A375',
      'A375SKINCJ1',
      'A375SKINCJ2',
      'A375SKINCJ3',
      'A388',
      'A3KAW',
      'A427',
      'A431',
      'A549',
      'A673',
      'ABC1',
      'ACCMESO1',
      'ACH-002315',
      'AGS',
      'AM38',
      'AML193',
      'AMO1',
      'ANGMCSS',
      'ARH77',
      'ASH3',
      'ASPC1',
      'AU565',
      'BB30HNC',
      'BC3C',
      'BE2M17',
      'BECKER',
      'BFTC905',
      'BFTC909',
      'BHY',
      'BICR10',
      'BICR16',
      'BICR22',
      'BICR31',
      'BICR56',
      'BICR6',
      'BICR78',
      'BIN67',
      'BL70',
      'BLUE1',
      'BOKU',
      'BPH1',
      'BT12',
      'BT16',
      'BT549',
      'BXPC3',
      'C10',
      'C2BBE1',
      'C32',
      'C33A',
      'C4I',
      'C4II',
      'C75',
      'C80',
      'C8166',
      'C84',
      'C99',
      'CA922',
      'CAKI1',
      'CAKI2',
      'CAL120',
      'CAL12T',
      'CAL27',
      'CAL29',
      'CAL33',
      'CAL51',
      'CAL62',
      'CAL72',
      'CAL78',
      'CALU1',
      'CALU6',
      'CAMA1',
      'CAOV3',
      'CAOV4',
      'CAPAN1',
      'CAS1',
      'CASKI',
      'CCFSTTG1',
      'CCK81',
      'CCLFPEDS0001T',
      'CCLFPEDS0003T',
      'CCLFPEDS0008T',
      'CCLFUPGI0005T',
      'CCLP1',
      'CCSW1',
      'CFPAC1',
      'CH157MN',
      'CHAGOK1',
      'CHLA06ATRT',
      'CHLA15',
      'CHLA266',
      'CHLA57',
      'CHP212',
      'CI',
      'CII',
      'CJM',
      'CL11',
      'CME1',
      'COGAR359',
      'COGE352',
      'COGN278',
      'COGN305',
      'COLO201',
      'COLO205',
      'COLO320',
      'COLO678',
      'COLO679',
      'COLO680N',
      'COLO684',
      'COLO699',
      'COLO792',
      'COLO800',
      'COLO824',
      'CORL105',
      'CORL23',
      'CORL279',
      'CORL311',
      'CORL47',
      'COV318',
      'COV362',
      'COV413A',
      'COV434',
      'COV504',
      'COV644',
      'CW9019',
      'D283MED',
      'D341',
      'D423MG',
      'D425',
      'D458',
      'D502MG',
      'D542MG',
      'DANG',
      'DAOY',
      'DB',
      'DBTRG05MG',
      'DEL',
      'DETROIT562',
      'DIFI',
      'DKMG',
      'DLD1',
      'DMS53',
      'DOK',
      'DOTC24510',
      'DOV13',
      'DU145',
      'DU4475',
      'EBC1',
      'ECC2',
      'ECC4',
      'ECGI10',
      'EFE184',
      'EFM19',
      'EFO21',
      'EFO27',
      'EGI1',
      'EJM',
      'EKVX',
      'EM2',
      'EMTOKA',
      'EN',
      'EOL1',
      'EPLC272H',
      'ES2',
      'ES4',
      'ES5',
      'ES8',
      'ESO26',
      'ESO51',
      'ESS1',
      'EVSAT',
      'EW1',
      'EW16',
      'EW22',
      'EW7',
      'EW8',
      'EWS502',
      'F36P',
      'F5',
      'FADU',
      'FARAGE',
      'FLO1',
      'FTC133',
      'FU97',
      'G292CLONEA141B1',
      'G401',
      'G402',
      'G415',
      'GAMG',
      'GB1',
      'GCIY',
      'GCT',
      'GI1',
      'GIMEN',
      'GP5D',
      'GSS',
      'GSU',
      'H103',
      'H157',
      'H3118',
      'H357',
      'H376',
      'H4',
      'H413',
      'HA1E',
      'HARA',
      'HB1119',
      'HCA1',
      'HCC1143',
      'HCC1187',
      'HCC1359',
      'HCC1395',
      'HCC1419',
      'HCC1428',
      'HCC15',
      'HCC1806',
      'HCC1937',
      'HCC1954',
      'HCC202',
      'HCC2429',
      'HCC2450',
      'HCC2935',
      'HCC2998',
      'HCC366',
      'HCC38',
      'HCC44',
      'HCC461',
      'HCC515',
      'HCC56',
      'HCC70',
      'HCC78',
      'HCC827',
      'HCC827GR5',
      'HCC95',
      'HCE4',
      'HCS2',
      'HCT116',
      'HCT15',
      'HDMYZ',
      'HEC1',
      'HEC116',
      'HEC1B',
      'HEC251',
      'HEC265',
      'HEC50B',
      'HEC59',
      'HEC6',
      'HEL',
      'HEL9217',
      'HEPG2',
      'HEY',
      'HEYA8',
      'HG3',
      'HGC27',
      'HKA1',
      'HKGZCC',
      'HLF',
      'HMC18',
      'HMY1',
      'HO1U1',
      'HOKUG',
      'HOP62',
      'HOTHC',
      'HOUAI',
      'HPAFII',
      'HS294T',
      'HS578T',
      'HS683',
      'HS695T',
      'HS729',
      'HS746T',
      'HS766T',
      'HS852T',
      'HS936T',
      'HS939T',
      'HS944T',
      'HSB2',
      'HSC1',
      'HSC2',
      'HSC3',
      'HSC39',
      'HSC4',
      'HSC5',
      'HSOS1',
      'HT',
      'HT1080',
      'HT115',
      'HT1197',
      'HT1376',
      'HT144',
      'HT144SKINFV1',
      'HT144SKINFV2',
      'HT144SKINFV3',
      'HT29',
      'HT3',
      'HT55',
      'HTMMT',
      'HUCCT1',
      'HUH1',
      'HUH6',
      'HUH7',
      'HUNS1',
      'HUO9',
      'HUPT3',
      'HUPT4',
      'ICC10',
      'ICC106',
      'ICC108',
      'ICC12',
      'ICC137',
      'ICC15',
      'ICC2',
      'ICC3',
      'ICC8',
      'ICC9',
      'IGR1',
      'IGR39',
      'IGROV1',
      'IM9',
      'IM95',
      'IMR32',
      'INA6',
      'IPC298',
      'ISHIKAWAHERAKLIO02ER',
      'ISTMEL1',
      'ISTMES2',
      'JAR',
      'JEG3',
      'JHC7',
      'JHH1',
      'JHH2',
      'JHH4',
      'JHH5',
      'JHH6',
      'JHH7',
      'JHOC5',
      'JHOM1',
      'JHOS2',
      'JHOS4',
      'JHU011',
      'JHU022',
      'JHU029',
      'JHUEM1',
      'JHUEM7',
      'JIMT1',
      'JJN3',
      'JL1',
      'JM1',
      'JMSU1',
      'JMURTK2',
      'JOPACA1',
      'JR',
      'JURKAT',
      'JURLMK1',
      'K029AX',
      'K562',
      'KALS1',
      'KARPAS299',
      'KARPAS422',
      'KASUMI1',
      'KATOIII',
      'KCL22',
      'KD',
      'KE39',
      'KE97',
      'KELLY',
      'KIJK',
      'KINGS1',
      'KKU100',
      'KKU213',
      'KLE',
      'KM12',
      'KMBC2',
      'KMCH1',
      'KML1',
      'KMM1',
      'KMRC1',
      'KMRC20',
      'KMS11',
      'KMS18',
      'KMS20',
      'KMS26',
      'KMS27',
      'KMS34',
      'KNS42',
      'KNS60',
      'KNS62',
      'KO52',
      'KON',
      'KOSC2CL343',
      'KP1N',
      'KP2',
      'KP3',
      'KP4',
      'KPL1',
      'KPNYN',
      'KPNYS',
      'KU1919',
      'KU812',
      'KURAMOCHI',
      'KYAE1',
      'KYM1',
      'KYO1',
      'KYSE140',
      'KYSE150',
      'KYSE180',
      'KYSE220',
      'KYSE270',
      'KYSE30',
      'KYSE410',
      'KYSE450',
      'KYSE510',
      'KYSE520',
      'KYSE70',
      'L1236',
      'L33',
      'L363',
      'L428',
      'LAN2',
      'LB1047RCC',
      'LB771HNC',
      'LC1SQ',
      'LCLC103H',
      'LCLC97TM1',
      'LI7',
      'LK2',
      'LMSU',
      'LN18',
      'LN229',
      'LN235',
      'LN319',
      'LN340',
      'LN382',
      'LN428',
      'LN443',
      'LN464',
      'LNCAPCLONEFGC',
      'LNZ308',
      'LNZTA3WT4',
      'LOUNH91',
      'LOVO',
      'LP1',
      'LPS141',
      'LPS27',
      'LPS510',
      'LPS6',
      'LPS853',
      'LS',
      'LS1034',
      'LS123',
      'LS180',
      'LS411N',
      'LS513',
      'LU135',
      'LU65',
      'LU99',
      'LUDLU1',
      'LXF289',
      'M040416',
      'M059K',
      'M07E',
      'MALME3M',
      'MB1',
      'MC116',
      'MCAS',
      'MCC13',
      'MCC142',
      'MCC26',
      'MCF7',
      'MCIXC',
      'MDAMB157',
      'MDAMB231',
      'MDAMB361',
      'MDAMB415',
      'MDAMB435S',
      'MDAMB436',
      'MDAMB453',
      'MDAMB468',
      'MDST8',
      'MEC1',
      'MEL202',
      'MEL285',
      'MEL290',
      'MELHO',
      'MELJUSO',
      'MERO14',
      'MERO25',
      'MERO82',
      'MFE280',
      'MFE296',
      'MFE319',
      'MFM223',
      'MHHES1',
      'MHHNB11',
      'MIAPACA2',
      'MKN28',
      'MKN45',
      'MKN74',
      'MM127',
      'MM1610113',
      'MM1S',
      'MM253',
      'MM370',
      'MM383',
      'MM386',
      'MM426',
      'MM485',
      'MOGGUVW',
      'MOLM13',
      'MOLM14',
      'MONOMAC1',
      'MORCPR',
      'MPP89',
      'MSTO211H',
      'MUGCHOR1',
      'MUTZ8',
      'MV411',
      'MYLA',
      'NALM16',
      'NALM6',
      'NB1',
      'NB10',
      'NB13',
      'NB1643',
      'NB17',
      'NB4',
      'NB5',
      'NB6',
      'NB69',
      'NB7',
      'NCIH1048',
      'NCIH1092',
      'NCIH1155',
      'NCIH1299',
      'NCIH1339',
      'NCIH1355',
      'NCIH1373',
      'NCIH1437',
      'NCIH1568',
      'NCIH1573',
      'NCIH1581',
      'NCIH1648',
      'NCIH1650',
      'NCIH1666',
      'NCIH1693',
      'NCIH1694',
      'NCIH1703',
      'NCIH1755',
      'NCIH1792',
      'NCIH1793',
      'NCIH1869',
      'NCIH1915',
      'NCIH1944',
      'NCIH1975',
      'NCIH1993',
      'NCIH2004RT',
      'NCIH2009',
      'NCIH2023',
      'NCIH2030',
      'NCIH2052',
      'NCIH2087',
      'NCIH209',
      'NCIH211',
      'NCIH2110',
      'NCIH2122',
      'NCIH2126',
      'NCIH2170',
      'NCIH2172',
      'NCIH226',
      'NCIH2286',
      'NCIH2291',
      'NCIH23',
      'NCIH2452',
      'NCIH28',
      'NCIH2882',
      'NCIH2887',
      'NCIH292',
      'NCIH3122',
      'NCIH322',
      'NCIH358',
      'NCIH441',
      'NCIH446',
      'NCIH460',
      'NCIH520',
      'NCIH522',
      'NCIH526',
      'NCIH647',
      'NCIH650',
      'NCIH661',
      'NCIH716',
      'NCIH727',
      'NCIH747',
      'NCIH82',
      'NCIH838',
      'NCIH841',
      'NCIN87',
      'NCO2',
      'NGP',
      'NH12',
      'NIHOVCAR3',
      'NMCG1',
      'NO10',
      'NO11',
      'NOMO1',
      'NOZ',
      'NP2',
      'NP3',
      'NP5',
      'NP8',
      'NUGC3',
      'OACM51',
      'OAW28',
      'OAW42',
      'OC314',
      'OC316',
      'OCIAML2',
      'OCIAML3',
      'OCIC4P',
      'OCIC5X',
      'OCILY18',
      'OCILY19',
      'OCIM2',
      'OCIMY5',
      'OCIMY7',
      'OCUBM',
      'OCUG1',
      'OCUM1',
      'OE21',
      'OE33',
      'OMM1',
      'OMM25',
      'ONCODG1',
      'ONDA7',
      'ONDA8',
      'ONDA9',
      'ONS76',
      'OPM2',
      'OS252',
      'OSC19',
      'OSC20',
      'OSRC2',
      'OUMS23',
      'OV7',
      'OV90',
      'OVCA420',
      'OVCAR5',
      'OVCAR8',
      'OVISE',
      'OVK18',
      'OVMANA',
      'OVMIU',
      'OVTOKO',
      'P30OHK',
      'P31FUJ',
      'P4E6',
      'PA1',
      'PACADD119',
      'PACADD137',
      'PACADD161',
      'PACADD165',
      'PACADD188',
      'PANC0203',
      'PANC0327',
      'PANC0403',
      'PANC0504',
      'PANC0813',
      'PANC1',
      'PANC1005',
      'PATU8902',
      'PATU8988S',
      'PATU8988T',
      'PC14',
      'PCI15A',
      'PCI30',
      'PCI38',
      'PCI4B',
      'PCI6A',
      'PEA1',
      'PECAPJ15',
      'PECAPJ34CLONEC12',
      'PECAPJ41CLONED2',
      'PECAPJ49',
      'PEO1',
      'PEO4',
      'PF382',
      'PFSK1',
      'PGA1',
      'PK1',
      'PK45H',
      'PL4',
      'PLCPRF5',
      'PSN1',
      'R256',
      'R262',
      'RAJI',
      'RBE',
      'RCC10RGB',
      'RCCFG2',
      'RCM1',
      'RD',
      'RDES',
      'REH',
      'RERFGC1B',
      'RERFLCAD1',
      'RERFLCAD2',
      'RERFLCAI',
      'RERFLCSQ1',
      'RH18DM',
      'RH28',
      'RH30',
      'RH4',
      'RHJT',
      'RKN',
      'RKO',
      'RL',
      'RL952',
      'RMGI',
      'RMUGS',
      'ROS50',
      'RPE1SS48',
      'RPE1SS51',
      'RPE1SS6',
      'RPE1SS77',
      'RPMI7951',
      'RPMI8226',
      'RT112',
      'RT11284',
      'RVH421',
      'S117',
      'SAOS2',
      'SAS',
      'SCABER',
      'SCC25',
      'SCC4',
      'SCC9',
      'SCCOHT1',
      'SCH',
      'SCLC22H',
      'SCMCRM2',
      'SCS214',
      'SEKI',
      'SEM',
      'SEMK2',
      'SF126',
      'SF172',
      'SF268',
      'SF295',
      'SF539',
      'SF767',
      'SG231',
      'SH10TC',
      'SH4',
      'SHI1',
      'SHP77',
      'SIHA',
      'SIMA',
      'SISO',
      'SJSA1',
      'SKBR3',
      'SKES1',
      'SKGI',
      'SKGII',
      'SKGT2',
      'SKGT4',
      'SKHEP1',
      'SKMEL19',
      'SKMEL2',
      'SKMEL24',
      'SKMEL30',
      'SKMES1',
      'SKMG1',
      'SKMM2',
      'SKN',
      'SKN3',
      'SKNAS',
      'SKNBE2',
      'SKNDZ',
      'SKNEP1',
      'SKNFI',
      'SKNMC',
      'SKNSH',
      'SKOV3',
      'SKPNDW',
      'SKRC20',
      'SKRC31',
      'SKUT1',
      'SLR20',
      'SLR23',
      'SLR24',
      'SLR26',
      'SMSCTR',
      'SMZ1',
      'SNB75',
      'SNGM',
      'SNU1',
      'SNU1033',
      'SNU1041',
      'SNU1066',
      'SNU1076',
      'SNU1077',
      'SNU1079',
      'SNU1105',
      'SNU1196',
      'SNU1544',
      'SNU16',
      'SNU182',
      'SNU201',
      'SNU213',
      'SNU216',
      'SNU308',
      'SNU349',
      'SNU387',
      'SNU398',
      'SNU410',
      'SNU423',
      'SNU449',
      'SNU46',
      'SNU475',
      'SNU478',
      'SNU5',
      'SNU503',
      'SNU601',
      'SNU61',
      'SNU620',
      'SNU626',
      'SNU638',
      'SNU668',
      'SNU685',
      'SNU719',
      'SNU738',
      'SNU761',
      'SNU8',
      'SNU81',
      'SNU840',
      'SNU869',
      'SNU886',
      'SNUC1',
      'SNUC4',
      'SNUC5',
      'SSP25',
      'SU8686',
      'SUDHL10',
      'SUDHL4',
      'SUDHL5',
      'SUDHL8',
      'SUIT2',
      'SUM149PT',
      'SUM159PT',
      'SUM229PE',
      'SUM52PE',
      'SUPM2',
      'SUPT1',
      'SUSA',
      'SW1088',
      'SW1271',
      'SW1463',
      'SW1573',
      'SW1990',
      'SW403',
      'SW48',
      'SW579',
      'SW620',
      'SW626',
      'SW756',
      'SW837',
      'SW948',
      'SW982',
      'SYO1',
      'T24',
      'T3M4',
      'T3M5',
      'T47D',
      'T84',
      'T98G',
      'TC106',
      'TC138',
      'TC205',
      'TC32',
      'TC71',
      'TCCPAN2',
      'TCCSUP',
      'TDOTT',
      'TE1',
      'TE10',
      'TE11',
      'TE4',
      'TE5',
      'TE6',
      'TE8',
      'TE9',
      'TEN',
      'TF1',
      'TFK1',
      'TGBC52TKB',
      'TGW',
      'THP1',
      'TM31',
      'TM87',
      'TMK1',
      'TO14',
      'TOV112D',
      'TOV21G',
      'TT1TKB',
      'TTC442',
      'TTC549',
      'TTC642',
      'TUHR10TKB',
      'TUHR14TKB',
      'TUHR4TKB',
      'TYKNU',
      'U118MG',
      'U251MG',
      'U2904',
      'U2OS',
      'U343',
      'U87MG',
      'U937',
      'UACC257',
      'UACC62',
      'UACC62SKINCJ1',
      'UACC893',
      'UCH2',
      'UHO1',
      'UMCHOR1',
      'UMRC3',
      'UMUC1',
      'UMUC10',
      'UMUC11',
      'UMUC13',
      'UMUC14',
      'UMUC16',
      'UMUC3',
      'UMUC5',
      'UMUC6',
      'UMUC7',
      'UMUC9',
      'UOK101',
      'UPCISCC026',
      'UPCISCC040',
      'UPCISCC116',
      'UPCISCC131',
      'UPCISCC152',
      'UPCISCC154',
      'UW228',
      'UWB1289',
      'VAESBJ',
      'VCAP',
      'VMCUB1',
      'VMRCLCD',
      'VMRCRCW',
      'WERIRB1',
      'WM115',
      'WM1799',
      'WM2664',
      'WM3211',
      'WM793',
      'WM88',
      'WM983B',
      'Y79',
      'YAMATO',
      'YAPC',
      'YD15',
      'YD38',
      'YD8',
      'YH13',
      'YKG1',
      'YSCCC',
      'ZR751',
    ],
    tissues: [
    ],
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tissues);


/***/ }),

/***/ "../database/files/protein-tissues.js":
/*!********************************************!*\
  !*** ../database/files/protein-tissues.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tissues = {
  'Salmonella Typhimurium (LT2)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Gallus gallus': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Xenopus laevis': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Danio rerio': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Dictyostelium discoideum': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Schizosaccharomyces pombe': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Escherichia coli (K12)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Caenorhabditis elegans': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Saccharomyces cerevisiae': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Drosophila melanogaster': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Arabidopsis thaliana': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Mus musculus': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Homo sapiens': {
    cells: [
      '786O',
      'A-375',
      'A-498',
      'A-549',
      'ACHN',
      'BT-549',
      'C10',
      'C106',
      'C125-PM',
      'C32',
      'C70',
      'C75',
      'C80',
      'C84',
      'C99',
      'Caki-1',
      'CAL-27',
      'CC07',
      'CC20',
      'CCK-81',
      'CCRF-CEM',
      'CoCM-1',
      'Colo 320DM',
      'Colo 741',
      'Colo-205',
      'cycling crypt base columnar',
      'DU-145',
      'EKVX',
      'GaMG',
      'GP2d',
      'HCA-46',
      'HCC-1143',
      'HCC-1599',
      'HCC-1937',
      'HCC-202',
      'HCC-2218',
      'HCC-2998',
      'HCT-15',
      'HDC-111',
      'HDC-114',
      'HDC-135',
      'HDC-142',
      'HDC-143',
      'HDC-54',
      'HDC-57',
      'HDC-73',
      'HDC-8',
      'HDC-82',
      'HDC-9',
      'HEK-293',
      'HeLa',
      'Hep-G2',
      'HES-3',
      'HFE-145',
      'HL-60',
      'HMELonza',
      'HMEpC',
      'HMT-3522',
      'HOP-62',
      'HOP-92',
      'HRA-19',
      'Hs-578T',
      'HT-29',
      'HT55',
      'HTC-116',
      'IGROV-1',
      'JURKAT',
      'K-562',
      'KM-12',
      'LNCaP',
      'LOX-IMVI',
      'LS1034',
      'LS123',
      'LS411',
      'LS513',
      'M14',
      'MALME-3M',
      'MCF-10A',
      'MCF-7',
      'MCF-7/adr',
      'MDA-MB-231',
      'MDA-MB-435',
      'MDA-MB-453',
      'MFM-223',
      'Mixed',
      'MO3_13',
      'MOLT-4',
      'NCI-H226',
      'NCI-H23',
      'NCI-H322M',
      'NCI-H460',
      'NCI-H522',
      'NCI-H548',
      'NCI-H747',
      'non-small cell lung cancer',
      'OVCAR-3',
      'OVCAR-4',
      'OVCAR-5',
      'OVCAR-8',
      'OVCAR-8/ADR',
      'OXCO-1',
      'OXCO-3',
      'PC-3',
      'PC/JW',
      'RCC 786-O',
      'RCM-1',
      'RKO',
      'RPMI-8226',
      'RXF-393',
      'SF-268',
      'SF-295',
      'SF-539',
      'SK-CO-1',
      'SK-MEL-2',
      'SK-MEL-28',
      'SK-MEL-5',
      'SK-N-BE(2)',
      'SKOV-3',
      'SN-12C',
      'SNB-19',
      'SNB-75',
      'SNU-C2B',
      'SR',
      'SW-480',
      'SW-620',
      'SW837',
      'T-47D',
      'TK-10',
      'U-251 MG',
      'U031',
      'U2-OS',
      'UACC-257',
      'UACC-62',
      'UO-31',
      'VACO 4A',
    ],
    tissues: [
      'adipocyte',
      'adrenal gland',
      'amniocyte',
      'arachnoid cyst',
      'B-lymphocyte',
      'blood platelet',
      'bone',
      'bone marrow stromal',
      'brain',
      'breast',
      'cardia',
      'cerebral cortex',
      'cervical mucosa',
      'colon',
      'colon muscle',
      'colonic epithelial',
      'cytotoxic T-lymphocyte',
      'esophagus',
      'gall bladder',
      'gut',
      'hair follicle',
      'heart',
      'helper T-lymphocyte',
      'ileum epithelial',
      'kidney',
      'liver',
      'lung',
      'lymph node',
      'mesenchymal stem',
      'monocyte',
      'myometrium',
      'nasopharynx',
      'natural killer',
      'oral epithelium',
      'osteosarcoma',
      'ovary',
      'pancreas',
      'pancreatic islet',
      'placenta',
      'prefrontal cortex',
      'prostate gland',
      'rectum',
      'renal cell carcinoma',
      'retina',
      'salivary gland',
      'seminal vesicle',
      'skin',
      'spermatozoon',
      'spinal cord',
      'spleen',
      'stomach',
      'testis',
      'thyroid gland',
      'tonsil',
      'urinary bladder',
      'uterine cervix',
      'uterus',
      'vitreous humor',
    ],
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tissues);


/***/ }),

/***/ "../database/files/rna-tissues.js":
/*!****************************************!*\
  !*** ../database/files/rna-tissues.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const tissues = {
  'Salmonella Typhimurium (LT2)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Gallus gallus': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Xenopus laevis': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Danio rerio': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Dictyostelium discoideum': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Schizosaccharomyces pombe': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Escherichia coli (K12)': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Caenorhabditis elegans': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Saccharomyces cerevisiae': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Drosophila melanogaster': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Arabidopsis thaliana': {
    cells: [
    ],
    tissues: [
    ],
  },
  'Mus musculus': {
    cells: [
    ],
    tissues: [
    ],
  },
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
      'GAMG',
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
      'hTERT-RPE1',
      'HUVEC TERT2',
      'JURKAT',
      'K-562',
      'Karpas-707',
      'LHCN-M2',
      'MCF7',
      'MOLT-4',
      'NB-4',
      'NTERA-2',
      'OE19',
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
      'SuSa',
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
      'B-cells',
      'bone marrow',
      'breast',
      'cerebral cortex',
      'cervix, uterine',
      'colon',
      'dendritic cells',
      'duodenum',
      'endometrium',
      'epididymis',
      'esophagus',
      'fallopian tube',
      'gallbladder',
      'granulocytes',
      'heart muscle',
      'kidney',
      'liver',
      'lung',
      'lymph node',
      'monocytes',
      'NK-cells',
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
      'T-cells',
      'testis',
      'thyroid gland',
      'tonsil',
      'urinary bladder',
    ],
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tissues);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/popup/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listeners_bind_listeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/bind-listeners */ "./src/popup/listeners/bind-listeners.js");
/* harmony import */ var _display_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display/display */ "./src/popup/display/display.js");
/* harmony import */ var _settings_load_preferences__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/load-preferences */ "./src/popup/settings/load-preferences.js");
/* harmony import */ var _populate_populate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./populate/populate */ "./src/popup/populate/populate.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");







document.addEventListener('DOMContentLoaded', () => {
  // Populate menus.
  (0,_populate_populate__WEBPACK_IMPORTED_MODULE_3__.default)();

  // Get user preferences on load.
  (0,_settings_load_preferences__WEBPACK_IMPORTED_MODULE_2__.default)();

  // Update displayed elements.
  (0,_display_display__WEBPACK_IMPORTED_MODULE_1__.default)();

  // Bind event handlers.
  (0,_listeners_bind_listeners__WEBPACK_IMPORTED_MODULE_0__.default)();
});

})();

/******/ })()
;
//# sourceMappingURL=popup.js.map