/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/content/helpers/add-nodes.js":
/*!******************************************!*\
  !*** ./src/content/helpers/add-nodes.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNode": () => (/* binding */ addNode),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const svgTags = {
  circle: true,
  path: true,
  rect: true,
  svg: true,
};

const createElement = tag => (
  svgTags[tag] ? document.createElementNS('http://www.w3.org/2000/svg', tag) : document.createElement(tag)
);

const addNode = (parent, node) => {
  if (node) {
    const { tag, ...attributes } = node;
    if (tag) {
      const element = createElement(tag);
      Object.entries(attributes).forEach(([attribute, content]) => {
        switch (attribute) {
          case 'children':
            content.forEach((child) => { addNode(element, child); });
            break;
          case 'textContent':
            element.textContent = content;
            break;
          default:
            element.setAttribute(attribute, content);
            break;
        }
      });
      parent.appendChild(element);
    }
  }
};

const addNodes = (parent, nodes) => {
  nodes.forEach((node) => {
    addNode(parent, node);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNodes);


/***/ }),

/***/ "./src/content/helpers/go-url.js":
/*!***************************************!*\
  !*** ./src/content/helpers/go-url.js ***!
  \***************************************/
/***/ ((module) => {

const goURL = (report, settings) => {
  const base = 'http://amigo.geneontology.org/amigo/gene_product/';
  switch (settings.species) {
    case 'Arabidopsis thaliana':
      if (report.tair) {
        return `${base}TAIR:${report.tair}`;
      }
      break;
    case 'Caenorhabditis elegans':
      if (report.wormbase) {
        return `${base}WB:${report.wormbase}`;
      }
      break;
    case 'Danio rerio':
      if (report.zfin) {
        return `${base}ZFIN:${report.zfin}`;
      }
      break;
    case 'Dictyostelium discoideum':
      if (report.dictybase) {
        return `${base}dictyBase:${report.dictybase}`;
      }
      break;
    case 'Drosophila melanogaster':
      if (report.flybase) {
        return `${base}FB:${report.flybase}`;
      }
      break;
    case 'Mus musculus':
      if (report.mgi) {
        return `${base}MGI:${report.mgi}`;
      }
      break;
    case 'Saccharomyces cerevisiae':
      if (report.sgd) {
        return `${base}SGD:${report.sgd}`;
      }
      break;
    case 'Schizosaccharomyces pombe':
      if (report.pombase) {
        return `${base}PomBase:${report.pombase}`;
      }
      break;
    default:
      if (
        report.uniprot
        && report.uniprot.length > 0
      ) {
        return `${base}UniProtKB:${report.uniprot[0]}`;
      }
  }
  return '';
};

module.exports = goURL;


/***/ }),

/***/ "./src/content/helpers/link-svg.js":
/*!*****************************************!*\
  !*** ./src/content/helpers/link-svg.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const linkSVG = {
  height: 10,
  tag: 'svg',
  viewBox: '0 0 512 512',
  width: 10,
  children: [
    {
      tag: 'path',
      d: `M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2
      67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7
      0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721
      1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96
      28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757
      0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567
      3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482
      152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2
      67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521
      17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239
      11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639
      0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087
      13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446
      27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z`,
    },
  ],
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkSVG);


/***/ }),

/***/ "./src/content/helpers/remove-all-children.js":
/*!****************************************************!*\
  !*** ./src/content/helpers/remove-all-children.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeAllChildren = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeAllChildren);


/***/ }),

/***/ "./src/content/helpers/round.js":
/*!**************************************!*\
  !*** ./src/content/helpers/round.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const round = (value, precision = 2) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (round);


/***/ }),

/***/ "./src/content/helpers/sort-array.js":
/*!*******************************************!*\
  !*** ./src/content/helpers/sort-array.js ***!
  \*******************************************/
/***/ ((module) => {

const sortArray = {
  alphabeticalByKey: (arr, key, dir = 'asc') => {
    if (dir === 'asc') {
      return arr.sort((a, b) => a[key].localeCompare(b[key]));
    }
    return arr.sort((a, b) => b[key].localeCompare(a[key]));
  },
  lengthByKey: (arr, key, dir = 'asc') => {
    if (dir === 'asc') {
      return arr.sort((a, b) => a[key].length - b[key].length);
    }
    return arr.sort((a, b) => b[key].length - a[key].length);
  },
};

module.exports = sortArray;


/***/ }),

/***/ "./src/content/helpers/tooltip-position.js":
/*!*************************************************!*\
  !*** ./src/content/helpers/tooltip-position.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");


const tooltipPosition = (event, tooltip, previousPosition) => {
  let x;
  let y;
  if (previousPosition) {
    x = previousPosition.left.replace('px', '');
    y = previousPosition.top.replace('px', '');
  } else if (event) {
    const divHeight = tooltip.offsetHeight;
    const divWidth = tooltip.offsetWidth;
    const scrollOffset = window.innerWidth > document.documentElement.clientWidth ? 15 : 0;
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    if (event.clientX < 5) {
      x = 5;
    } else if (event.clientX + divWidth > viewportWidth - 5) {
      x = viewportWidth - divWidth - scrollOffset - 5;
    } else {
      x = event.clientX;
    }
    if (event.clientY - divHeight < 5) {
      y = 5;
    } else if (event.clientY > viewportHeight - 5) {
      y = viewportHeight - divHeight - 5;
    } else {
      y = event.clientY - divHeight;
    }
  } else {
    const el = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('tooltip');
    x = el.getBoundingClientRect().left;
    y = el.getBoundingClientRect().top;
  }
  return { x, y };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipPosition);


/***/ }),

/***/ "./src/content/helpers/update-tissues.js":
/*!***********************************************!*\
  !*** ./src/content/helpers/update-tissues.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./src/config.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");



const updateTissues = ({ key, species, tissueID }) => {
  const tissueData = _config__WEBPACK_IMPORTED_MODULE_0__.default.tissues[tissueID][species];
  const defaultTissues = [];
  if (
    _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues[tissueID][species]
    && _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues[tissueID][species].length > 0
  ) {
    defaultTissues.push(..._config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues[tissueID][species]);
  } else if (tissueData) {
    if (tissueData.cells && tissueData.cells.length > 0) {
      defaultTissues.push(tissueData.cells[0]);
    }
    if (tissueData.tissues && tissueData.tissues.length > 0) {
      defaultTissues.push(tissueData.tissues[0]);
    }
  }

  chrome.storage.local.set({ [key]: defaultTissues });
  _state__WEBPACK_IMPORTED_MODULE_1__.default.updateSetting(key, defaultTissues);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTissues);


/***/ }),

/***/ "./src/content/listeners/activate.js":
/*!*******************************************!*\
  !*** ./src/content/listeners/activate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../retrieve/retrieve */ "./src/content/retrieve/retrieve.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");



function mousedown() {
  _state__WEBPACK_IMPORTED_MODULE_1__.default.updateMdTime();
}

const activateListener = (activate) => {
  if (activate === 'disable') {
    document.body.removeEventListener('dblclick', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
    document.body.removeEventListener('mousedown', mousedown);
    document.body.removeEventListener('mouseup', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
  } else if (activate === 'drag') {
    document.body.removeEventListener('dblclick', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
    document.body.addEventListener('mousedown', mousedown);
    document.body.addEventListener('mouseup', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
  } else {
    document.body.addEventListener('dblclick', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
    document.body.removeEventListener('mousedown', mousedown);
    document.body.removeEventListener('mouseup', _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activateListener);


/***/ }),

/***/ "./src/content/listeners/back.js":
/*!***************************************!*\
  !*** ./src/content/listeners/back.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeBackListener": () => (/* binding */ removeBackListener),
/* harmony export */   "addBackListener": () => (/* binding */ addBackListener)
/* harmony export */ });
/* harmony import */ var _templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/panel/panel */ "./src/content/templates/panel/panel.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");



const backReport = () => {
  _state__WEBPACK_IMPORTED_MODULE_1__.default.removeReport();
  (0,_templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__.default)();
};

const removeBackListener = () => {
  const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.getElementById('back');
  if (el) {
    el.removeEventListener('click', backReport);
  }
};

const addBackListener = () => {
  const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.getElementById('back');
  if (el) {
    el.addEventListener('click', backReport);
  }
};


/***/ }),

/***/ "./src/content/listeners/click-outside.js":
/*!************************************************!*\
  !*** ./src/content/listeners/click-outside.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isVisible = elem => (
  !!elem
  && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length)
);

const isClickInside = (parent, event) => {
  const elements = event.composedPath();
  return elements.some(element => (
    element
    && element.querySelector
    && element.querySelector('.close-on-click-outside') !== null
  ));
};

const clickOutside = (element, func) => {
  function outsideClickListener(event) {
    if (!isClickInside(element, event) && isVisible(element)) {
      removeClickListener();
      if (func) {
        func();
      }
    }
  }

  function removeClickListener() {
    document.removeEventListener('click', outsideClickListener);
  }

  document.addEventListener('click', outsideClickListener);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clickOutside);


/***/ }),

/***/ "./src/content/listeners/close.js":
/*!****************************************!*\
  !*** ./src/content/listeners/close.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeCloseListener": () => (/* binding */ removeCloseListener),
/* harmony export */   "addCloseListener": () => (/* binding */ addCloseListener)
/* harmony export */ });
/* harmony import */ var _click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./click-outside */ "./src/content/listeners/click-outside.js");
/* harmony import */ var _remove_remove_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove/remove-panel */ "./src/content/remove/remove-panel.js");
/* harmony import */ var _remove_remove_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remove/remove-tooltip */ "./src/content/remove/remove-tooltip.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/content/state.js");





let method;

const removeCloseListener = () => {
  const button = _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.getElementById('close');
  if (button) {
    button.removeEventListener('click', method);
  }
};

const addCloseListener = () => {
  method = _state__WEBPACK_IMPORTED_MODULE_3__.default.settings.report === 'detailed' ? _remove_remove_panel__WEBPACK_IMPORTED_MODULE_1__.default : _remove_remove_tooltip__WEBPACK_IMPORTED_MODULE_2__.default;
  const button = _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.getElementById('close');
  if (button) {
    button.addEventListener('click', method);
  }

  const el = _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('.close-on-click-outside');
  if (el) {
    (0,_click_outside__WEBPACK_IMPORTED_MODULE_0__.default)(el, method);
  }
};


/***/ }),

/***/ "./src/content/listeners/drag.js":
/*!***************************************!*\
  !*** ./src/content/listeners/drag.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeDragListener": () => (/* binding */ removeDragListener),
/* harmony export */   "addDragListener": () => (/* binding */ addDragListener)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* eslint no-param-reassign: 0 */


let button;
let panel;
let x;

const rightPosition = () => (
  document.documentElement.clientWidth - panel.getBoundingClientRect().right
);

const mouseMove = (event) => {
  const delta = x - event.clientX;
  x = event.clientX;
  const right = rightPosition();
  const position = `${right + delta}px`;
  const css = `left: auto; right: ${position}`;
  panel.style.cssText += `;${css}`;
  _state__WEBPACK_IMPORTED_MODULE_0__.default.updateStyle('right', position);
};

const mouseUp = () => {
  button.style.cursor = 'cursor';
  panel.style.cursor = 'auto';
  panel.style.userSelect = 'auto';
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  _state__WEBPACK_IMPORTED_MODULE_0__.default.updateStyle('left', '');
  button.style.cursor = 'ew-resize';
  const css = `cursor: ew-resize; left: auto; right: ${rightPosition()}px`;
  panel.style.cssText += `;${css}`;
  panel.style.userSelect = 'none';
  x = event.clientX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

const removeDragListener = () => {
  button = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('drag');
  if (button) {
    button.removeEventListener('mousedown', mouseDown);
  }
};

const addDragListener = () => {
  button = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('drag');
  if (button) {
    panel = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('panel');
    button.addEventListener('mousedown', mouseDown);
  }
};


/***/ }),

/***/ "./src/content/listeners/go.js":
/*!*************************************!*\
  !*** ./src/content/listeners/go.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeGoListener": () => (/* binding */ removeGoListener),
/* harmony export */   "addGoListener": () => (/* binding */ addGoListener)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");


function goSelector() {
  const selectedType = this.dataset.type;
  const namespaces = ['bp', 'cc', 'mf'];
  namespaces.forEach((namespace) => {
    if (namespace === selectedType) {
      _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById(`go-button-${namespace}`).classList.add('active');
      _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById(`go-terms-${namespace}`).style.display = 'block';
    } else {
      _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById(`go-button-${namespace}`).classList.remove('active');
      _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById(`go-terms-${namespace}`).style.display = 'none';
    }
  });
};

const removeGoListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('go-buttons')) {
    _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.go-button').forEach((el) => {
      el.removeEventListener('click', goSelector);
    });
  }
};

const addGoListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('go-buttons')) {
    _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.go-button').forEach((el) => {
      el.addEventListener('click', goSelector);
    });
  }
};


/***/ }),

/***/ "./src/content/listeners/interactor-sort.js":
/*!**************************************************!*\
  !*** ./src/content/listeners/interactor-sort.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeInteractorSortListener": () => (/* binding */ removeInteractorSortListener),
/* harmony export */   "addInteractorSortListener": () => (/* binding */ addInteractorSortListener)
/* harmony export */ });
/* harmony import */ var _templates_assets_sort_down__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/assets/sort-down */ "./src/content/templates/assets/sort-down.js");
/* harmony import */ var _templates_assets_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/assets/sort */ "./src/content/templates/assets/sort.js");
/* harmony import */ var _templates_assets_sort_up__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/assets/sort-up */ "./src/content/templates/assets/sort-up.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* harmony import */ var _helpers_sort_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/sort-array */ "./src/content/helpers/sort-array.js");
/* harmony import */ var _helpers_sort_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_sort_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _interactor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interactor */ "./src/content/listeners/interactor.js");
/* harmony import */ var _templates_panel_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/panel/interactor */ "./src/content/templates/panel/interactor.js");








const switchSortDirection = prevDirection => (
  prevDirection === 'asc' ? 'des' : 'asc'
);

const sortInteractions = (field, defaultDirection, sortMethod) => {
  // Remove table row listeners.
  (0,_interactor__WEBPACK_IMPORTED_MODULE_5__.removeInteractorListener)();

  // Sort interactor list and update table.
  const sortDir = _state__WEBPACK_IMPORTED_MODULE_3__.default.settings.interactorSortKey === field
    ? switchSortDirection(_state__WEBPACK_IMPORTED_MODULE_3__.default.settings.interactorSortDirection) : defaultDirection;
  const sorted = sortMethod(_state__WEBPACK_IMPORTED_MODULE_3__.default.latestReport().interactors, field, sortDir);
  (0,_templates_panel_interactor__WEBPACK_IMPORTED_MODULE_6__.updateRows)(_state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_tbody'), sorted);

  // Add back table row listeners.
  (0,_interactor__WEBPACK_IMPORTED_MODULE_5__.addInteractorListener)();

  // Change sort icons.
  ['biogrid', 'gene', 'intact'].forEach((buttonField) => {
    const button = _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector(`#interactor_${buttonField}`);
    if (buttonField === field) {
      if (sortDir === 'asc') {
        (0,_templates_assets_sort_up__WEBPACK_IMPORTED_MODULE_2__.default)(button);
      } else {
        (0,_templates_assets_sort_down__WEBPACK_IMPORTED_MODULE_0__.default)(button);
      }
    } else {
      (0,_templates_assets_sort__WEBPACK_IMPORTED_MODULE_1__.default)(button);
    }
  });
  // Update sort state.
  _state__WEBPACK_IMPORTED_MODULE_3__.default.updateSetting('interactorSortKey', field);
  _state__WEBPACK_IMPORTED_MODULE_3__.default.updateSetting('interactorSortDirection', sortDir);
};

const biogridSort = () => {
  sortInteractions('biogrid', 'des', (_helpers_sort_array__WEBPACK_IMPORTED_MODULE_4___default().lengthByKey));
};

const geneSort = () => {
  sortInteractions('gene', 'asc', (_helpers_sort_array__WEBPACK_IMPORTED_MODULE_4___default().alphabeticalByKey));
};

const intactSort = () => {
  sortInteractions('intact', 'des', (_helpers_sort_array__WEBPACK_IMPORTED_MODULE_4___default().lengthByKey));
};

const removeInteractorSortListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('.interactor-table')) {
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_biogrid').removeEventListener('click', biogridSort);
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_gene').removeEventListener('click', geneSort);
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_intact').removeEventListener('click', intactSort);
  }
};

const addInteractorSortListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('.interactor-table')) {
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_biogrid').addEventListener('click', biogridSort);
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_gene').addEventListener('click', geneSort);
    _state__WEBPACK_IMPORTED_MODULE_3__.default.shadowRoot.querySelector('#interactor_intact').addEventListener('click', intactSort);
  }
};


/***/ }),

/***/ "./src/content/listeners/interactor.js":
/*!*********************************************!*\
  !*** ./src/content/listeners/interactor.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeInteractorListener": () => (/* binding */ removeInteractorListener),
/* harmony export */   "addInteractorListener": () => (/* binding */ addInteractorListener)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* eslint no-param-reassign: 0 */



function toggleList() {
  const { gene } = this.dataset;
  const lists = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll(`.interactor-list-${gene}`);
  const value = !lists[0].style.display || lists[0].style.display === 'none'
    ? 'inline-block' : 'none';
  lists.forEach((list) => {
    list.style.display = value;
  });
}

const removeInteractorListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.interactor-list-toggle').length > 0) {
    _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.interactor-list-toggle').forEach((el) => {
      el.removeEventListener('click', toggleList);
    });
  }
};

const addInteractorListener = () => {
  if (_state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.interactor-list-toggle').length > 0) {
    _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.querySelectorAll('.interactor-list-toggle').forEach((el) => {
      el.addEventListener('click', toggleList);
    });
  }
};


/***/ }),

/***/ "./src/content/listeners/messages.js":
/*!*******************************************!*\
  !*** ./src/content/listeners/messages.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _activate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activate */ "./src/content/listeners/activate.js");
/* harmony import */ var _remove_remove_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../remove/remove-panel */ "./src/content/remove/remove-panel.js");
/* harmony import */ var _remove_remove_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../remove/remove-tooltip */ "./src/content/remove/remove-tooltip.js");
/* harmony import */ var _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../retrieve/retrieve */ "./src/content/retrieve/retrieve.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./src/content/state.js");






const messages = () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, setting, value } = request;
    if (action === 'ping') {
      sendResponse(true);
    } else if (action === 'updateSetting') {
      _state__WEBPACK_IMPORTED_MODULE_4__.default.updateSetting(setting, value);
      if (setting === 'activate') {
        (0,_activate__WEBPACK_IMPORTED_MODULE_0__.default)(value);
      } else if (setting === 'report') {
        (0,_remove_remove_panel__WEBPACK_IMPORTED_MODULE_1__.default)();
        (0,_remove_remove_tooltip__WEBPACK_IMPORTED_MODULE_2__.default)();
      }
    } else if (action === 'search') {
      _state__WEBPACK_IMPORTED_MODULE_4__.default.updateStyle('left', '5px');
      (0,_retrieve_retrieve__WEBPACK_IMPORTED_MODULE_3__.default)(null, setting, true);
    }
    return true;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);


/***/ }),

/***/ "./src/content/listeners/resize.js":
/*!*****************************************!*\
  !*** ./src/content/listeners/resize.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeResizeListener": () => (/* binding */ removeResizeListener),
/* harmony export */   "addResizeListener": () => (/* binding */ addResizeListener)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");


let button;
let panel;
let x;

const mouseMove = (event) => {
  const delta = x - event.clientX;
  x = event.clientX;
  const width = `${panel.offsetWidth + delta}px`;
  panel.style.width = width;
  _state__WEBPACK_IMPORTED_MODULE_0__.default.updateStyle('width', width);
};

const mouseUp = () => {
  document.removeEventListener('mousemove', mouseMove);
  document.removeEventListener('mouseup', mouseUp);
};

const mouseDown = (event) => {
  x = event.clientX;
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
};

const removeResizeListener = () => {
  button = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('resize');
  if (button) {
    button.removeEventListener('mousedown', mouseDown);
  }
};

const addResizeListener = () => {
  button = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('resize');
  if (button) {
    panel = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('panel');
    button.addEventListener('mousedown', mouseDown);
  }
};


/***/ }),

/***/ "./src/content/listeners/select.js":
/*!*****************************************!*\
  !*** ./src/content/listeners/select.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectChange": () => (/* binding */ selectChange),
/* harmony export */   "removeSelectListener": () => (/* binding */ removeSelectListener),
/* harmony export */   "addSelectListener": () => (/* binding */ addSelectListener)
/* harmony export */ });
/* harmony import */ var _templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/panel/panel */ "./src/content/templates/panel/panel.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* harmony import */ var _templates_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../templates/tooltip/tooltip */ "./src/content/templates/tooltip/tooltip.js");




function selectChange() {
  const index = this.options[this.selectedIndex].value;
  _state__WEBPACK_IMPORTED_MODULE_1__.default.setActiveReport(index);
  if (_state__WEBPACK_IMPORTED_MODULE_1__.default.settings.report === 'detailed') {
    (0,_templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__.default)(Number(index));
  } else {
    (0,_templates_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_2__.default)(undefined, undefined, Number(index));
  }
}

const removeSelectListener = () => {
  const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.querySelector('.slim-select-style');
  if (el) {
    el.removeEventListener('change', selectChange);
  }
};

const addSelectListener = (results) => {
  if (results && results.length > 1) {
    const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.querySelector('.slim-select-style');
    el.addEventListener('change', selectChange);
  }
};


/***/ }),

/***/ "./src/content/listeners/species-change.js":
/*!*************************************************!*\
  !*** ./src/content/listeners/species-change.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "speciesChange": () => (/* binding */ speciesChange),
/* harmony export */   "removeSpeciesListener": () => (/* binding */ removeSpeciesListener),
/* harmony export */   "addSpeciesListener": () => (/* binding */ addSpeciesListener)
/* harmony export */ });
/* harmony import */ var _retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../retrieve/retrieve */ "./src/content/retrieve/retrieve.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* harmony import */ var _helpers_update_tissues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/update-tissues */ "./src/content/helpers/update-tissues.js");




function speciesChange() {
  const newSpecies = this.options[this.selectedIndex].value;
  chrome.storage.local.set({ species: newSpecies });
  _state__WEBPACK_IMPORTED_MODULE_1__.default.updateSetting('species', newSpecies);
  (0,_helpers_update_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    key: 'essentiality_tissues',
    species: newSpecies,
    tissueID: 'essentiality',
  });
  (0,_helpers_update_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    key: 'protein_expression_tissues',
    species: newSpecies,
    tissueID: 'protein',
  });
  (0,_helpers_update_tissues__WEBPACK_IMPORTED_MODULE_2__.default)({
    key: 'rna_expression_tissues',
    species: newSpecies,
    tissueID: 'rna',
  });
  (0,_retrieve_retrieve__WEBPACK_IMPORTED_MODULE_0__.default)({}, _state__WEBPACK_IMPORTED_MODULE_1__.default.searchTerm, true);
}

const removeSpeciesListener = () => {
  const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.querySelector('#species_select');
  if (el) {
    el.removeEventListener('change', speciesChange);
  }
};

const addSpeciesListener = () => {
  const el = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.querySelector('#species_select');
  if (el) {
    el.addEventListener('change', speciesChange);
  }
};


/***/ }),

/***/ "./src/content/listeners/tooltip-scroll.js":
/*!*************************************************!*\
  !*** ./src/content/listeners/tooltip-scroll.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTooltipScrollListener": () => (/* binding */ removeTooltipScrollListener),
/* harmony export */   "addTooltipScrollListener": () => (/* binding */ addTooltipScrollListener)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/content/state.js");


const position = { x: 0, y: 0 };

const scroll = () => {
  const deltaX = window.pageXOffset - position.x;
  const deltaY = window.pageYOffset - position.y;
  const tooltip = _state__WEBPACK_IMPORTED_MODULE_0__.default.shadowRoot.getElementById('tooltip');
  tooltip.style.left = `${tooltip.offsetLeft - deltaX}px`;
  tooltip.style.top = `${tooltip.offsetTop - deltaY}px`;
  position.x = window.pageXOffset;
  position.y = window.pageYOffset;
};

const removeTooltipScrollListener = () => {
  window.removeEventListener('scroll', scroll);
};

const addTooltipScrollListener = () => {
  position.x = window.pageXOffset;
  position.y = window.pageYOffset;
  window.addEventListener('scroll', scroll);
};


/***/ }),

/***/ "./src/content/remove/remove-panel.js":
/*!********************************************!*\
  !*** ./src/content/remove/remove-panel.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transitions_fade_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transitions/fade-out */ "./src/content/transitions/fade-out.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* harmony import */ var _listeners_back__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/back */ "./src/content/listeners/back.js");
/* harmony import */ var _listeners_close__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners/close */ "./src/content/listeners/close.js");
/* harmony import */ var _listeners_drag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners/drag */ "./src/content/listeners/drag.js");
/* harmony import */ var _listeners_go__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../listeners/go */ "./src/content/listeners/go.js");
/* harmony import */ var _listeners_interactor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../listeners/interactor */ "./src/content/listeners/interactor.js");
/* harmony import */ var _listeners_interactor_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../listeners/interactor-sort */ "./src/content/listeners/interactor-sort.js");
/* harmony import */ var _listeners_resize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../listeners/resize */ "./src/content/listeners/resize.js");
/* harmony import */ var _listeners_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../listeners/select */ "./src/content/listeners/select.js");
/* harmony import */ var _listeners_species_change__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../listeners/species-change */ "./src/content/listeners/species-change.js");












const removePanel = () => {
  const panel = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.getElementById('panel');
  if (panel) {
    _state__WEBPACK_IMPORTED_MODULE_1__.default.clearReports();
    _state__WEBPACK_IMPORTED_MODULE_1__.default.updateStyle('left', '');
    window.onscroll = null;
    (0,_listeners_close__WEBPACK_IMPORTED_MODULE_3__.removeCloseListener)();
    (0,_listeners_back__WEBPACK_IMPORTED_MODULE_2__.removeBackListener)();
    (0,_listeners_drag__WEBPACK_IMPORTED_MODULE_4__.removeDragListener)();
    (0,_listeners_go__WEBPACK_IMPORTED_MODULE_5__.removeGoListener)();
    (0,_listeners_interactor__WEBPACK_IMPORTED_MODULE_6__.removeInteractorListener)();
    (0,_listeners_interactor_sort__WEBPACK_IMPORTED_MODULE_7__.removeInteractorSortListener)();
    (0,_listeners_resize__WEBPACK_IMPORTED_MODULE_8__.removeResizeListener)();
    (0,_listeners_select__WEBPACK_IMPORTED_MODULE_9__.removeSelectListener)();
    (0,_listeners_species_change__WEBPACK_IMPORTED_MODULE_10__.removeSpeciesListener)();
    (0,_transitions_fade_out__WEBPACK_IMPORTED_MODULE_0__.default)(panel, _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removePanel);


/***/ }),

/***/ "./src/content/remove/remove-tooltip.js":
/*!**********************************************!*\
  !*** ./src/content/remove/remove-tooltip.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _transitions_fade_out__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transitions/fade-out */ "./src/content/transitions/fade-out.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ "./src/content/state.js");
/* harmony import */ var _listeners_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listeners/close */ "./src/content/listeners/close.js");
/* harmony import */ var _listeners_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../listeners/select */ "./src/content/listeners/select.js");
/* harmony import */ var _listeners_tooltip_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../listeners/tooltip-scroll */ "./src/content/listeners/tooltip-scroll.js");






const removeTooltip = () => {
  const tooltip = _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot.getElementById('tooltip');
  if (tooltip) {
    _state__WEBPACK_IMPORTED_MODULE_1__.default.clearReports();
    (0,_listeners_close__WEBPACK_IMPORTED_MODULE_2__.removeCloseListener)();
    (0,_listeners_select__WEBPACK_IMPORTED_MODULE_3__.removeSelectListener)();
    (0,_listeners_tooltip_scroll__WEBPACK_IMPORTED_MODULE_4__.removeTooltipScrollListener)();
    (0,_transitions_fade_out__WEBPACK_IMPORTED_MODULE_0__.default)(tooltip, _state__WEBPACK_IMPORTED_MODULE_1__.default.shadowRoot);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeTooltip);


/***/ }),

/***/ "./src/content/retrieve/fetch.js":
/*!***************************************!*\
  !*** ./src/content/retrieve/fetch.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _http_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-promise */ "./src/content/retrieve/http-promise.js");
/* harmony import */ var _show_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-report */ "./src/content/retrieve/show-report.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/content/state.js");




const fetch = (species, field, searchTerm, event) => {
  const route = `/${species.replace(' ', '-')}/${field}/${searchTerm}`;
  _state__WEBPACK_IMPORTED_MODULE_2__.default.setSearchTerm(searchTerm);
  (0,_http_promise__WEBPACK_IMPORTED_MODULE_0__.default)(route)
    .then((data) => {
      _state__WEBPACK_IMPORTED_MODULE_2__.default.addReport(data);
      (0,_show_report__WEBPACK_IMPORTED_MODULE_1__.default)(event, _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.report);
    })
    .catch(() => {
      (0,_show_report__WEBPACK_IMPORTED_MODULE_1__.default)(event, _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.report, true);
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetch);


/***/ }),

/***/ "./src/content/retrieve/http-promise.js":
/*!**********************************************!*\
  !*** ./src/content/retrieve/http-promise.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const http = route => (
  new Promise((resolve, reject) => {
    chrome.runtime.sendMessage({
      action: 'xhttp',
      method: 'GET',
      route,
    }, (response) => {
      if (response.status === 200) {
        resolve(response.result);
      } else {
        reject();
      }
    });
  })
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (http);


/***/ }),

/***/ "./src/content/retrieve/retrieve.js":
/*!******************************************!*\
  !*** ./src/content/retrieve/retrieve.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/content/retrieve/fetch.js");
/* harmony import */ var _select_gene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-gene */ "./src/content/retrieve/select-gene.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "./src/content/state.js");




const shouldActivate = (e, activate, ctrl) => (
  activate
  || !ctrl
  || (ctrl && e.ctrlKey)
  || (ctrl && e.metaKey)
);

const retrieveInfo = (event, text, activate) => {
  const gene = (0,_select_gene__WEBPACK_IMPORTED_MODULE_1__.default)(event, text);
  if (gene && shouldActivate(event, activate, _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.ctrl)) {
    const field = _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.auto ? 'auto' : _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.field;
    if (_state__WEBPACK_IMPORTED_MODULE_2__.default.settings.activate === 'click') {
      (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_2__.default.settings.species, field, gene, event);
    } else if (
      _state__WEBPACK_IMPORTED_MODULE_2__.default.settings.activate === 'drag'
      && _state__WEBPACK_IMPORTED_MODULE_2__.default.mdTime
      && Date.now() - _state__WEBPACK_IMPORTED_MODULE_2__.default.mdTime > 500
    ) {
      (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_2__.default.settings.species, field, gene, event);
      _state__WEBPACK_IMPORTED_MODULE_2__.default.clearMdTime();
    }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (retrieveInfo);


/***/ }),

/***/ "./src/content/retrieve/select-gene.js":
/*!*********************************************!*\
  !*** ./src/content/retrieve/select-gene.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const selectGene = (event, text) => {
  if (text) {
    return text;
  } if (window.getSelection().toString()) {
    return window.getSelection().toString().trim();
  } if (
    event
    && event.target
    && (
      event.target.nodeName === 'INPUT'
      || event.target.nodeName === 'TEXTAREA'
    )
  ) {
    const { target } = event;
    return target.value.substring(target.selectionStart, target.selectionEnd);
  }
  return '';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectGene);


/***/ }),

/***/ "./src/content/retrieve/show-report.js":
/*!*********************************************!*\
  !*** ./src/content/retrieve/show-report.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/panel/panel */ "./src/content/templates/panel/panel.js");
/* harmony import */ var _templates_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../templates/tooltip/tooltip */ "./src/content/templates/tooltip/tooltip.js");



const showReport = (event, reportType, error) => {
  if (reportType === 'detailed') {
    (0,_templates_panel_panel__WEBPACK_IMPORTED_MODULE_0__.default)(0, error);
  } else {
    (0,_templates_tooltip_tooltip__WEBPACK_IMPORTED_MODULE_1__.default)(event, error);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showReport);


/***/ }),

/***/ "./src/content/state.js":
/*!******************************!*\
  !*** ./src/content/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultFalseToggleState": () => (/* binding */ defaultFalseToggleState),
/* harmony export */   "defaultTrueToggleState": () => (/* binding */ defaultTrueToggleState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/config.js");
/* harmony import */ var _utils_confirm_setting_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/confirm-setting-order */ "./src/utils/confirm-setting-order.js");



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
        || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultInputs.essentiality_codependencies,
      essentiality_tissues: storage.essentiality_tissues || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues.essentiality[species],
      description: defaultTrueToggleState(storage.description),
      domain: defaultTrueToggleState(storage.domain),
      field: storage.field || 'gene',
      go: defaultTrueToggleState(storage.go),
      go_namespace: storage.go_namespace || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultGoNamespace,
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
      setting_order: (0,_utils_confirm_setting_order__WEBPACK_IMPORTED_MODULE_1__.default)(storage.setting_order, _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultSettingOrder).order,
      report: storage.report || 'detailed',
      protein_expression: defaultTrueToggleState(storage.protein_expression),
      protein_expression_tissues: storage.protein_expression_tissues
        || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues.protein[species],
      rna_expression: defaultTrueToggleState(storage.rna_expression),
      rna_expression_tissues: storage.rna_expression_tissues || _config__WEBPACK_IMPORTED_MODULE_0__.default.defaultTissues.rna[species],
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new State());


/***/ }),

/***/ "./src/content/style/animation.js":
/*!****************************************!*\
  !*** ./src/content/style/animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
  .panel_animate-fade {
    animation: fadein 0.4s forwards;
  }
  .panel_animate-show {
    opacity: 1;
  }
  .panel_animate-fadeout {
    animation: fadeout 0.4s forwards;
  }
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const animationStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (animationStyleNode);


/***/ }),

/***/ "./src/content/style/button.js":
/*!*************************************!*\
  !*** ./src/content/style/button.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
  .action-button {
    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    position: absolute;
    top: 2px;
    visibility: hidden;
  }
  .action-button:focus {
    outline: 0;
  }
  #back {
    right: 56px;
  }
  #close {
    right: 10px;
  }
  #drag {
    right: 33px;
  }
  #resize {
    bottom: -4px;
    cursor: ew-resize;
    left: -7px;
    right: auto;
    top: auto;
  }
  #resize svg path {
    fill: var(--primary);
  }
`;

const buttonStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonStyleNode);


/***/ }),

/***/ "./src/content/style/link.js":
/*!***********************************!*\
  !*** ./src/content/style/link.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
  a {
    box-sizing: border-box;
    color: var(--primary);
    text-decoration: none;
  }
  a:link,
  a:visited {
    cursor: pointer;
    border-bottom: none;
  }
  a:hover,
  a:active,
  a:focus {
    outline: none;
    text-decoration: underline dotted;
  }
`;

const linkStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkStyleNode);


/***/ }),

/***/ "./src/content/style/panel.js":
/*!************************************!*\
  !*** ./src/content/style/panel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/content/style/animation.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/content/style/button.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./src/content/style/link.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./src/content/style/select.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/content/style/theme.js");






const style = `
#panel {
  background-color: var(--background);
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 14px;
  line-height: 1.3em;
  max-height: calc(100vh - 10px);
  min-width: 300px;
  padding: 5px 0px 5px 8px;
  position: fixed;
  right: 5px;
  top: 5px;
  text-align: left;
  width: calc(25vw);
  z-index: 2147483647;
}
#panel:hover .action-button {
  visibility: visible;
}

section h1 {
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
section h1::after {
  content: ':';
  margin-right: 3px;
}
section h2 {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
select:focus {
  box-shadow: 0px 0px 1px var(--primary);
  outline: none;
}
table {
  border-collapse: collapse;
  font-size: 14px;
  width: 100%;
}
thead tr {
  background-color: var(--primary);
  color: var(--text-contrast);
}
tbody tr {
  color: var(--text);
}
th {
  padding: 2px 0;
  text-align: center;
}
th:first-of-type {
  border-top-left-radius: 2px;
}
th:last-of-type {
  border-top-right-radius: 2px;
}
td {
  padding: 2px;
}
tbody tr:nth-child(even) {
  background-color: var(--primary-1);
}
li {
  margin: 2px 0;
}

.details-header {
  border-bottom: 1px solid #d0d0d0;
  display: inline-block;
  margin-bottom: 5px;
  padding: 4px 0 3px 0;
}
.details-header h1 {
  color: var(--heading);
}
.details-header a {
  display: inline-block;
  margin: 0 2px;
}
.details-description {
  margin-top: 0px;
  margin-bottom: 8px;
}

.gene {
  align-items: center;
  display: flex;
  margin-top: 5px;
}
.gene,
.gene h1 {
  font-size: 16px;
  margin-right: 5px;
}

.gene-info__details {
  padding-bottom: 5px;
}

.links_comma > a:not(:last-of-type)::after  {
  content: ', ';
  display: inline;
}

.none {
  text-align: center;
}

.panel__inner {
  box-sizing: border-box;
  max-height: calc(100vh - 25px);
  overflow-x: none;
  overflow-y: auto;
  padding-right: 8px;
}
.panel__inner > section:not(:last-of-type) {
  border-bottom: 2px groove #e6e6e6;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.panel__inner::-webkit-scrollbar {
  width: 8px;
}
.panel__inner::-webkit-scrollbar-thumb {
  border-radius: 20px;
}
.panel__inner::-webkit-scrollbar-track {
  border-radius: 20px;
}
.panel__inner::-webkit-scrollbar-thumb {
  background: var(--thumb);
}
.panel__inner::-webkit-scrollbar-track {
  background: var(--track);
}

.warning {
  background-color: var(--alert);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  padding: 5px;
}

@media (max-width: 309) {
  .panel {
    min-width: calc(1vw - 10px);
    width: calc(1vw - 10px);
  }
}
`;

const panelStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

const styles = [
  _theme__WEBPACK_IMPORTED_MODULE_4__.default,
  _animation__WEBPACK_IMPORTED_MODULE_0__.default,
  _button__WEBPACK_IMPORTED_MODULE_1__.default,
  _link__WEBPACK_IMPORTED_MODULE_2__.default,
  _select__WEBPACK_IMPORTED_MODULE_3__.default,
  panelStyleNode,
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./src/content/style/select.js":
/*!*************************************!*\
  !*** ./src/content/style/select.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
  .ss-main {
    position: relative;
    display: inline-block;
    user-select: none;
    color: #666666;
    width: 100%;
  }

  .ss-main .ss-single-selected {
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 30px;
    padding: 6px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    box-sizing: border-box;
    transition: background-color .3s;
  }

  .ss-main .ss-single-selected.ss-disabled {
    background-color: #dcdee2;
    cursor: not-allowed;
  }

  .ss-main .ss-single-selected.ss-open-above {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .ss-main .ss-single-selected.ss-open-below {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .ss-main .ss-single-selected .placeholder {
    display: flex;
    flex: 1 1 100%;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    width: calc(100% - 30px);
    line-height: 1em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .ss-main .ss-single-selected .placeholder * {
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: auto;
  }

  .ss-main .ss-single-selected .placeholder .ss-disabled {
    cursor: pointer;
    color: #8a8a8a;
  }

  .ss-main .ss-single-selected .ss-deselect {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    margin: 0 6px 0 6px;
    font-weight: bold;
  }

  .ss-main .ss-single-selected .ss-deselect.ss-hide {
    display: none;
  }

  .ss-main .ss-single-selected .ss-arrow {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 0 1 auto;
    margin: 0 6px 0 6px;
  }

  .ss-main .ss-single-selected .ss-arrow span {
    border: solid #666666;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transition: transform .2s, margin .2s;
  }

  .ss-main .ss-single-selected .ss-arrow span.arrow-up {
    transform: rotate(-135deg);
    margin: 3px 0 0 0;
  }

  .ss-main .ss-single-selected .ss-arrow span.arrow-down {
    transform: rotate(45deg);
    margin: -3px 0 0 0;
  }

  .ss-main .ss-multi-selected {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    min-height: 30px;
    width: 100%;
    padding: 0 0 0 3px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    box-sizing: border-box;
    transition: background-color .3s;
  }

  .ss-main .ss-multi-selected.ss-disabled {
    background-color: #dcdee2;
    cursor: not-allowed;
  }

  .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {
    color: #666666;
  }

  .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {
    cursor: not-allowed;
  }

  .ss-main .ss-multi-selected.ss-open-above {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .ss-main .ss-multi-selected.ss-open-below {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .ss-main .ss-multi-selected .ss-values {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    flex: 1 1 100%;
    width: calc(100% - 30px);
  }

  .ss-main .ss-multi-selected .ss-values .ss-disabled {
    display: flex;
    padding: 4px 5px;
    margin: 2px 0px;
    line-height: 1em;
    align-items: center;
    width: 100%;
    color: #8a8a8a;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @keyframes scaleIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes scaleOut {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  .ss-main .ss-multi-selected .ss-values .ss-value {
    display: flex;
    user-select: none;
    align-items: center;
    font-size: 12px;
    padding: 3px 5px;
    margin: 3px 5px 3px 0px;
    color: #ffffff;
    background-color: #5897fb;
    border-radius: 4px;
    animation-name: scaleIn;
    animation-duration: .2s;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  }

  .ss-main .ss-multi-selected .ss-values .ss-value.ss-out {
    animation-name: scaleOut;
    animation-duration: .2s;
    animation-timing-function: ease-out;
  }

  .ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {
    margin: 0 0 0 5px;
    cursor: pointer;
  }

  .ss-main .ss-multi-selected .ss-add {
    display: flex;
    flex: 0 1 3px;
    margin: 9px 12px 0 5px;
  }

  .ss-main .ss-multi-selected .ss-add .ss-plus {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #666666;
    position: relative;
    height: 10px;
    width: 2px;
    transition: transform .2s;
  }

  .ss-main .ss-multi-selected .ss-add .ss-plus:after {
    background: #666666;
    content: "";
    position: absolute;
    height: 2px;
    width: 10px;
    left: -4px;
    top: 4px;
  }

  .ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {
    transform: rotate(45deg);
  }

  .ss-main .ss-content {
    position: absolute;
    width: 100%;
    margin: -1px 0 0 0;
    box-sizing: border-box;
    border: solid 1px #dcdee2;
    z-index: 1010;
    background-color: #ffffff;
    transform-origin: center top;
    transition: transform .2s, opacity .2s;
    opacity: 0;
    transform: scaleY(0);
  }

  .ss-main .ss-content.ss-open {
    display: block;
    opacity: 1;
    transform: scaleY(1);
  }

  .ss-main .ss-content .ss-search {
    display: flex;
    flex-direction: row;
    padding: 8px 8px 6px 8px;
  }

  .ss-main .ss-content .ss-search.ss-hide {
    height: 0px;
    opacity: 0;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }

  .ss-main .ss-content .ss-search.ss-hide input {
    height: 0px;
    opacity: 0;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }

  .ss-main .ss-content .ss-search input {
    display: inline-flex;
    font-size: inherit;
    line-height: inherit;
    flex: 1 1 auto;
    width: 100%;
    min-width: 0px;
    height: 30px;
    padding: 6px 8px;
    margin: 0;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -webkit-appearance: textfield;
  }

  .ss-main .ss-content .ss-search input::placeholder {
    color: #bdbdbd;
    vertical-align: middle;
  }

  .ss-main .ss-content .ss-search input:focus {
    box-shadow: 0 0 5px #5897fb;
  }

  .ss-main .ss-content .ss-search .ss-addable {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    flex: 0 0 30px;
    height: 30px;
    margin: 0 0 0 8px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .ss-main .ss-content .ss-addable {
    padding-top: 0px;
  }

  .ss-main .ss-content .ss-list {
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    text-align: left;
  }

  .ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label {
    padding: 6px 10px 6px 10px;
    font-weight: bold;
  }

  .ss-main .ss-content .ss-list .ss-optgroup .ss-option {
    padding: 6px 6px 6px 25px;
  }

  .ss-main .ss-content .ss-list .ss-option {
    padding: 6px 10px 6px 10px;
    cursor: pointer;
    user-select: none;
  }

  .ss-main .ss-content .ss-list .ss-option * {
    display: inline-block;
  }

  .ss-main .ss-content .ss-list .ss-option:hover, .ss-main .ss-content .ss-list .ss-option.ss-highlighted {
    color: #ffffff;
    background-color: #5897fb;
  }

  .ss-main .ss-content .ss-list .ss-option.ss-disabled {
    cursor: default;
    color: #bdbdbd;
    background-color: #ffffff;
  }

  .ss-main .ss-content .ss-list .ss-option.ss-hide {
    display: none;
  }

  .ss-main .ss-content .ss-list .ss-option .ss-search-highlight {
    background-color: #fff70062;
  }
`;

const selectStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectStyleNode);


/***/ }),

/***/ "./src/content/style/theme.js":
/*!************************************!*\
  !*** ./src/content/style/theme.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = `
  aside.theme_dark {
    --alert: #4f5663;
    --background: #323639;
    --heading: #E68173;
    --primary: #7FA782;
    --primary-1: #445054;
    --text: rgba(255, 255, 255, 0.7);
    --text-contrast: #1F3C1D;
    --thumb: #999;
    --track: #bfbfbf;
    --warning: #F4887E;
  }
  aside.theme_light {
    --alert: #e3e5e8;
    --background: #fafafa;
    --heading: #BD4A42;
    --primary: #658170;
    --primary-1: #e2e9e5;
    --text: #333333;
    --text-contrast: #f5f5f5;
    --thumb: #ccc;
    --track: #eee;
    --warning: #F44336;
  }
`;

const themeStyleNode = {
  tag: 'style',
  textContent: theme,
  type: 'text/css',
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themeStyleNode);


/***/ }),

/***/ "./src/content/style/tooltip.js":
/*!**************************************!*\
  !*** ./src/content/style/tooltip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animation */ "./src/content/style/animation.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./src/content/style/button.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link */ "./src/content/style/link.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select */ "./src/content/style/select.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme */ "./src/content/style/theme.js");






const style = `
  #tooltip {
    background-color: var(--background);
    border-radius: 3px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    color: var(--text);
    display: inline-block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 14px;
    height: auto;
    max-width: 300px;
    padding: 5px 10px 5px 10px;
    position: fixed;
    width: auto;
    z-index: 2147483647;
  }
  #tooltip:hover .action-button {
    visibility: visible;
  }
  #tooltip #close {
    right: -5px;
  }
  
  header {
    padding: 0 20px;
    text-align: center;
  }
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  section a {
    margin: 5px;
  }
`;

const tooltipStyleNode = {
  tag: 'style',
  textContent: style,
  type: 'text/css',
};

const styles = [
  _theme__WEBPACK_IMPORTED_MODULE_4__.default,
  _animation__WEBPACK_IMPORTED_MODULE_0__.default,
  _button__WEBPACK_IMPORTED_MODULE_1__.default,
  _link__WEBPACK_IMPORTED_MODULE_2__.default,
  _select__WEBPACK_IMPORTED_MODULE_3__.default,
  tooltipStyleNode,
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./src/content/templates/assets/sort-down.js":
/*!***************************************************!*\
  !*** ./src/content/templates/assets/sort-down.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createSortDownIcon = (button) => {
  button.firstChild.remove();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M43.302,409.357h418.36c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.243,16.523-59.59,0
  L13.419,481.428C-13.124,454.885,5.685,409.357,43.302,409.357z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSortDownIcon);


/***/ }),

/***/ "./src/content/templates/assets/sort-up.js":
/*!*************************************************!*\
  !*** ./src/content/templates/assets/sort-up.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortUpIcon": () => (/* binding */ sortUpIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sortUpIcon = {
  height: 12,
  tag: 'svg',
  viewBox: '0 0 503 700',
  children: [
    {
      tag: 'path',
      d: `M461.662,293.643H43.303c-37.617,0-56.426-45.527-29.883-72.07L222.6,12.393c16.523-16.523,43.242-16.523,59.59,0
      l209.18,209.18C518.088,248.115,499.279,293.643,461.662,293.643z`,
    },
  ],
};

const createSortUpIcon = (button) => {
  button.firstChild.remove();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M461.662,293.643H43.303c-37.617,0-56.426-45.527-29.883-72.07L222.6,12.393c16.523-16.523,43.242-16.523,59.59,0
  l209.18,209.18C518.088,248.115,499.279,293.643,461.662,293.643z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSortUpIcon);


/***/ }),

/***/ "./src/content/templates/assets/sort.js":
/*!**********************************************!*\
  !*** ./src/content/templates/assets/sort.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sortIcon": () => (/* binding */ sortIcon),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const sortIcon = {
  height: 12,
  tag: 'svg',
  viewBox: '0 0 503 700',
  children: [
    {
      tag: 'path',
      d: `M43.303,407.143h418.359c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.242,16.523-59.59,0
      L13.42,479.213C-13.123,452.67,5.686,407.143,43.303,407.143z M491.545,222.572l-209.18-209.18
      c-16.523-16.523-43.242-16.523-59.59,0L13.42,222.572c-26.543,26.543-7.734,72.07,29.883,72.07h418.359
      C499.279,294.643,518.088,249.115,491.545,222.572z`,
    },
  ],
};

const createSortIcon = (button) => {
  button.firstChild.remove();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 503 700');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', `M43.303,407.143h418.359c37.617,0,56.426,45.527,29.883,72.07l-209.18,209.18c-16.523,16.523-43.242,16.523-59.59,0
  L13.42,479.213C-13.123,452.67,5.686,407.143,43.303,407.143z M491.545,222.572l-209.18-209.18
  c-16.523-16.523-43.242-16.523-59.59,0L13.42,222.572c-26.543,26.543-7.734,72.07,29.883,72.07h418.359
  C499.279,294.643,518.088,249.115,491.545,222.572z`);

  svg.appendChild(path);

  button.appendChild(svg);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSortIcon);


/***/ }),

/***/ "./src/content/templates/back-button.js":
/*!**********************************************!*\
  !*** ./src/content/templates/back-button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const backButton = (target, reports) => {
  if (reports > 1) {
    const button = document.createElement('button');
    button.className = 'action-button';
    button.id = 'back';
    button.type = 'button';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '20');
    svg.setAttribute('width', '20');
    svg.setAttribute('viewBox', '0 0 512 512');

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('fill', '#FAFAFA');
    circle.setAttribute('cx', 256);
    circle.setAttribute('cy', 256);
    circle.setAttribute('r', 160);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('fill', '#1976D2');
    path.setAttribute('d', `M256,504C119,504,8,393,8,256S119,8,256,8s248,111,248,248S393,504,256,504z M372,212H256v-70.9
    c0-10.7-13-16.1-20.5-8.5L121.2,247.5c-4.7,4.7-4.7,12.2,0,16.9L235.5,379.3c7.6,7.601,20.5,2.2,20.5-8.5V300h116
    c6.6,0,12-5.4,12-12v-64C384,217.4,378.6,212,372,212z`);

    svg.appendChild(circle);
    svg.appendChild(path);

    button.appendChild(svg);

    target.appendChild(button);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (backButton);


/***/ }),

/***/ "./src/content/templates/close-button.js":
/*!***********************************************!*\
  !*** ./src/content/templates/close-button.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const closeButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'close';
  button.type = 'button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');
  svg.setAttribute('viewBox', '0 0 512 512');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('fill', '#FAFAFA');
  circle.setAttribute('cx', 256);
  circle.setAttribute('cy', 256);
  circle.setAttribute('r', 160);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', '#F44336');
  path.setAttribute('d', `M256,8C119,8,8,119,8,256s111,248,248,248s248-111,248-248S393,8,256,8z M377.6,321.1
  c4.7,4.7,4.7,12.301,0,17L338,377.6c-4.7,4.7-12.3,4.7-17,0L256,312l-65.1,65.6c-4.7,4.7-12.3,4.7-17,0L134.4,338
  c-4.7-4.7-4.7-12.3,0-17l65.6-65l-65.6-65.1c-4.7-4.7-4.7-12.3,0-17l39.6-39.6c4.7-4.7,12.3-4.7,17,0l65,65.7l65.1-65.6
  c4.7-4.7,12.301-4.7,17,0L377.7,174c4.7,4.7,4.7,12.3,0,17L312,256L377.6,321.1z`);

  svg.appendChild(circle);
  svg.appendChild(path);

  button.appendChild(svg);

  target.appendChild(button);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (closeButton);


/***/ }),

/***/ "./src/content/templates/drag-button.js":
/*!**********************************************!*\
  !*** ./src/content/templates/drag-button.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const dragButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'drag';
  button.type = 'button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');
  svg.setAttribute('viewBox', '0 0 512 512');

  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('fill', '#FAFAFA');
  circle.setAttribute('cx', 256);
  circle.setAttribute('cy', 256);
  circle.setAttribute('r', 175);

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill', '#9E9E9E');
  path.setAttribute('d', `M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z
   M421.332,269.871l-57.148,70.344c-10.041,12.358-27.208,3.604-27.208-13.869v-37.65H175.024v37.65
  c0,17.473-17.167,26.229-27.207,13.869l-57.149-70.344c-6.225-7.661-6.225-20.082,0-27.742l57.149-70.344
  c10.041-12.357,27.207-3.606,27.207,13.873v37.647h161.952v-37.647c0-17.479,17.168-26.23,27.208-13.872l57.148,70.345
  C427.556,249.791,427.556,262.21,421.332,269.871z`);

  svg.appendChild(circle);
  svg.appendChild(path);

  button.appendChild(svg);

  target.appendChild(button);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragButton);


/***/ }),

/***/ "./src/content/templates/gene.js":
/*!***************************************!*\
  !*** ./src/content/templates/gene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
.slim-select-style {
  display: inline-block;
  max-width: 250px;
  min-width: 100px;
  width: 50%;
}
.slim-select-style > option {
  padding: 0;
}`;

const createGeneElement = (result, reportIndex, fullname = false) => {
  const report = result[0];
  if (result.length === 1) {
    return {
      tag: 'header',
      textContent: fullname ? report.fullname : report.gene,
    };
  }

  return {
    tag: 'header',
    children: [
      { tag: 'style', textContent: style },
      {
        class: 'slim-select-style',
        tag: 'select',
        children: result.map((gene, index) => {
          const displayName = fullname ? gene.fullname : gene.gene;
          const synonyms = gene.synonyms.length === 0 ? 'none' : gene.synonyms.join(', ');
          const option = {
            tag: 'option',
            textContent: displayName,
            title: `Synonyms: (${synonyms})`,
            value: index,
          };
          if (index === reportIndex) {
            option.selected = true;
          }
          return option;
        }),
      },
    ],
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGeneElement);


/***/ }),

/***/ "./src/content/templates/no-result/link.js":
/*!*************************************************!*\
  !*** ./src/content/templates/no-result/link.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getGeneralLinks": () => (/* binding */ getGeneralLinks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const formatLinkNode = (href, text) => ({
  children: [
    {
      href,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: text,
    },
  ],
  tag: 'li',
});


const getGeneralLinks = term => ([
  formatLinkNode(
    `https://ensembl.org/Multi/Search/Results?q=${term}`,
    'Ensembl',
  ),
  formatLinkNode(
    `http://www.google.com/search?q=${term}`,
    'Google',
  ),
  formatLinkNode(
    `https://www.ncbi.nlm.nih.gov/search/all/?term=${term}`,
    'NCBI',
  ),
  formatLinkNode(
    `https://www.uniprot.org/uniprot/?query=${term}&sort=score`,
    'UniProt',
  ),
]);

const createLinkList = (term, settings) => {
  const links = [...getGeneralLinks(term)];
  if (settings.species === 'Arabidopsis thaliana') {
    links.push(
      formatLinkNode(
        `https://www.arabidopsis.org/servlets/Search?type=general&search_action=detail&method=1&show_obsolete=F&name=${term}&sub_type=gene&SEARCH_EXACT=4&SEARCH_CONTAINS=1`,
        'TAIR',
      ),
    );
  }
  if (settings.species === 'Caenorhabditis elegans') {
    links.push(
      formatLinkNode(
        `https://wormbase.org/search/gene/${term}`,
        'WormBase',
      ),
    );
  }
  if (settings.species === 'Danio rerio') {
    links.push(
      formatLinkNode(
        `https://zfin.org/search?q=${term}`,
        'ZFIN',
      ),
    );
  }
  if (settings.species === 'Dictyostelium discoideum') {
    links.push(
      formatLinkNode(
        `http://dictybase.org/db/cgi-bin/search/search.pl?query=${term}*&submit=Search+All`,
        'dictyBase',
      ),
    );
  }
  if (settings.species === 'Escherichia coli (K12)') {
    links.push(
      formatLinkNode(
        `https://ecocyc.org/ECOLI/search-query?type=GENE&gname=${term}`,
        'EcoCyc',
      ),
    );
  }
  if (settings.species === 'Homo sapiens') {
    links.push(
      formatLinkNode(
        `https://www.nextprot.org/proteins/search?query=${term}`,
        'neXtProt',
      ),
    );
  }
  if (settings.species === 'Mus musculus') {
    links.push(
      formatLinkNode(
        `http://www.informatics.jax.org/searchtool/Search.do?query=${term}*`,
        'MGI',
      ),
    );
  }
  if (settings.species === 'Saccharomyces cerevisiae') {
    links.push(
      formatLinkNode(
        `https://www.yeastgenome.org/search?q=${term}`,
        'SGD',
      ),
    );
  }
  if (settings.species === 'Xenopus laevis') {
    links.push(
      formatLinkNode(
        `http://www.xenbase.org/gene/searchGene.do?method=search&searchIn=3&searchValue=${term}&searchType=0`,
        'Xenbase',
      ),
    );
  }

  return {
    children: links,
    tag: 'ul',
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLinkList);


/***/ }),

/***/ "./src/content/templates/no-result/panel.js":
/*!**************************************************!*\
  !*** ./src/content/templates/no-result/panel.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./src/content/templates/no-result/link.js");
/* harmony import */ var _species__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./species */ "./src/content/templates/no-result/species.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../position */ "./src/content/templates/position.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");





const style = `
.ctrl-notification {
  border-top: 1px solid #d0d0d0;
  font-size: 0.9em;
  padding-top: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
.ctrl-notification strong {
  color: var(--warning);
  display: block;
  margin-bottom: 5px;
}
.no-result {
  margin: 0;
}
.panel_small {
  min-width: unset;
  width: auto;
}
.panel_small h1 {
  font-size: 1em;
  margin-right: 10px;
}
.panel_small ul {
  margin: 10px 10px 5px 0;
}
.panel_small .action-button:not(#resize) {
  visibility: visible;
}
.panel_small #back {
  right: 46px;
}
.panel_small #close {
  right: 0px;
}
.panel_small #drag {
  right: 23px;
}
.panel_small #resize {
  display: none;
}
.panel_small .no-result {
  width: calc(100% - 60px);
}
.slim-select-style {
  max-width: calc(100% - 15px);
}
.slim-select-style > option {
  padding: 0;
}
.species-notification {
  margin: 5px 10px 5px 0;
}`;

const addControlNotification = show => (
  show
    ? {
      class: 'ctrl-notification',
      tag: 'div',
      children: [
        {
          tag: 'strong',
          textContent: '"CTRL/⌘ required" not enabled',
        },
        {
          tag: 'p',
          textContent: `If you are double-clicking for purposes other than activating GIX, you
          can further control its activation by toggling the "CTRL/⌘ required" option.
          This will require the control (Linux/Windows) or command (Mac) key be pressed
          while double-clicking to trigger activation.`,
        },
      ],
    }
    : null
);

const noResult = (error = false, stateStyle, fadeClass) => {
  const positionStyle = (0,_position__WEBPACK_IMPORTED_MODULE_2__.default)(stateStyle, false);
  const aside = {
    class: `panel_small theme_${_state__WEBPACK_IMPORTED_MODULE_3__.default.settings.theme} close-on-click-outside ${fadeClass}`,
    id: 'panel',
    style: positionStyle,
    tag: 'aside',
  };

  if (error) {
    aside.children = [{
      class: 'no-result',
      tag: 'p',
      children: [
        { tag: 'span', textContent: 'An error occured. Please use our ' },
        {
          href: 'https://github.com/knightjdr/gene-info/issues',
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: 'issue tracker',
        },
        { tag: 'span', textContent: ' to report bugs.' },
      ],
    }];
  } else {
    aside.children = [
      {
        class: 'no-result',
        tag: 'h1',
        textContent: 'No search result',
      },
      {
        class: 'species-notification',
        tag: 'p',
        textContent: 'Your currently selected species is:',
      },
      (0,_species__WEBPACK_IMPORTED_MODULE_1__.default)(_state__WEBPACK_IMPORTED_MODULE_3__.default.settings.species),
      {
        tag: 'h1',
        textContent: 'Search at:',
      },
      (0,_link__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_3__.default.searchTerm, _state__WEBPACK_IMPORTED_MODULE_3__.default.settings),
      addControlNotification(!_state__WEBPACK_IMPORTED_MODULE_3__.default.settings.ctrl),
    ];
  }

  return [
    {
      tag: 'style',
      textContent: style,
    },
    aside,
  ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (noResult);


/***/ }),

/***/ "./src/content/templates/no-result/species.js":
/*!****************************************************!*\
  !*** ./src/content/templates/no-result/species.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./src/config.js");


const createSelectNode = selected => ({
  children: _config__WEBPACK_IMPORTED_MODULE_0__.default.species.map((specie) => {
    const option = {
      tag: 'option',
      textContent: specie,
      value: specie,
    };
    if (specie === selected) {
      option.selected = true;
    }
    return option;
  }),
  class: 'slim-select-style',
  id: 'species_select',
  tag: 'select',
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createSelectNode);


/***/ }),

/***/ "./src/content/templates/no-result/tooltip.js":
/*!****************************************************!*\
  !*** ./src/content/templates/no-result/tooltip.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./src/content/templates/no-result/link.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");



const style = `
.no-result {
  margin: 0;
}
#tooltip h1 {
  font-size: 1em;
}
#tooltip ul {
  margin: 10px 0 5px 0;
}`;

const createNoResultTooltipNodes = (error, fadeClass = '') => {
  const aside = {
    class: `theme_${_state__WEBPACK_IMPORTED_MODULE_1__.default.settings.theme} close-on-click-outside ${fadeClass}`,
    id: 'tooltip',
    tag: 'aside',
  };

  if (error) {
    aside.children = [
      { tag: 'header', textContent: 'An error occured' },
      {
        children: [
          { tag: 'span', textConent: 'Please use our ' },
          {
            href: 'https://github.com/knightjdr/gene-info/issues',
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: 'issue tracker',
          },
          { tag: 'span', textConent: ' to report bugs.' },
        ],
        class: 'no-result',
        tag: 'p',
      },
    ];
  } else {
    aside.children = [
      { tag: 'header', textContent: 'No search result' },
      { tag: 'h1', textContent: 'Search at:' },
      (0,_link__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_1__.default.searchTerm, _state__WEBPACK_IMPORTED_MODULE_1__.default.settings),
    ];
  }

  return [
    {
      tag: 'style',
      textContent: style,
    },
    aside,
  ];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNoResultTooltipNodes);


/***/ }),

/***/ "./src/content/templates/panel/basic.js":
/*!**********************************************!*\
  !*** ./src/content/templates/panel/basic.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/round */ "./src/content/helpers/round.js");


const style = `
.alternative-names > ul {
  margin: 0;
  padding-left: 30px;
}
.basic > div {
  margin-top: 5px;
}
.right {
  float: right;
}`;

const createBasicElement = (report, settings) => {
  const nodes = [];

  if (settings.basic) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      children: [],
      class: 'basic',
      tag: 'section',
    };

    if (report.synonyms && report.synonyms.length > 0) {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Synonyms' },
          { tag: 'span', textContent: report.synonyms.join(', ') },
        ],
      });
    }

    if (report.fullname) {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Name' },
          { tag: 'span', textContent: report.fullname },
        ],
      });
    }

    if (report.alternativeNames && report.alternativeNames.length > 0) {
      section.children.push({
        class: 'alternative-names',
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Alternative Names' },
          {
            tag: 'ul',
            children: report.alternativeNames.map(name => ({
              tag: 'li',
              textContent: name,
            })),
          },
        ],
      });
    }

    if (report.length) {
      const mw = report.mw ? (0,_helpers_round__WEBPACK_IMPORTED_MODULE_0__.default)(report.mw / 1000) : '-';
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Length' },
          { tag: 'span', textContent: `${report.length}aa` },
          {
            class: 'right',
            tag: 'span',
            children: [
              { tag: 'h1', textContent: 'MW' },
              { tag: 'span', textContent: `${mw}kDa` },
            ],
          },
        ],
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBasicElement);


/***/ }),

/***/ "./src/content/templates/panel/create-nodes.js":
/*!*****************************************************!*\
  !*** ./src/content/templates/panel/create-nodes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ "./src/content/templates/panel/basic.js");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description */ "./src/content/templates/panel/description.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain */ "./src/content/templates/panel/domain.js");
/* harmony import */ var _essentiality_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./essentiality/element */ "./src/content/templates/panel/essentiality/element.js");
/* harmony import */ var _expression_expression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expression/expression */ "./src/content/templates/panel/expression/expression.js");
/* harmony import */ var _gene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gene */ "./src/content/templates/gene.js");
/* harmony import */ var _go__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./go */ "./src/content/templates/panel/go.js");
/* harmony import */ var _interactor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactor */ "./src/content/templates/panel/interactor.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link */ "./src/content/templates/panel/link.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./localization */ "./src/content/templates/panel/localization.js");
/* harmony import */ var _pathway__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pathway */ "./src/content/templates/panel/pathway.js");
/* harmony import */ var _pathology__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pathology */ "./src/content/templates/panel/pathology.js");
/* harmony import */ var _position__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../position */ "./src/content/templates/position.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");















const sections = {
  basic: _basic__WEBPACK_IMPORTED_MODULE_0__.default,
  description: _description__WEBPACK_IMPORTED_MODULE_1__.default,
  domain: _domain__WEBPACK_IMPORTED_MODULE_2__.default,
  essentiality: _essentiality_element__WEBPACK_IMPORTED_MODULE_3__.default,
  expression: _expression_expression__WEBPACK_IMPORTED_MODULE_4__.default,
  go: _go__WEBPACK_IMPORTED_MODULE_6__.default,
  interactors: _interactor__WEBPACK_IMPORTED_MODULE_7__.default,
  links: _link__WEBPACK_IMPORTED_MODULE_8__.default,
  localization: _localization__WEBPACK_IMPORTED_MODULE_9__.default,
  pathology: _pathology__WEBPACK_IMPORTED_MODULE_11__.default,
  pathway: _pathway__WEBPACK_IMPORTED_MODULE_10__.default,
};

const reportDetails = (result, reportIndex, stateStyle, fadeClass) => {
  const positionStyle = (0,_position__WEBPACK_IMPORTED_MODULE_12__.default)(stateStyle);

  const aside = {
    class: `theme_${_state__WEBPACK_IMPORTED_MODULE_13__.default.settings.theme} ${fadeClass}`,
    id: 'panel',
    style: positionStyle,
    tag: 'aside',
    children: [
      {
        class: 'panel__inner',
        tag: 'div',
        children: [
          {
            class: 'gene',
            tag: 'section',
            children: [
              { tag: 'h1', textContent: 'Gene' },
              (0,_gene__WEBPACK_IMPORTED_MODULE_5__.default)(result, reportIndex),
            ],
          },
          ...(
            _state__WEBPACK_IMPORTED_MODULE_13__.default.settings.setting_order.map(section => (
              sections[section](result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_13__.default.settings)
            ))
          ).flat(),
        ],
      },
    ],
  };

  return aside;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reportDetails);


/***/ }),

/***/ "./src/content/templates/panel/description.js":
/*!****************************************************!*\
  !*** ./src/content/templates/panel/description.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
.description p {
  display: inline;
  margin: 0;
}`;

const createDescriptionElement = (report, settings) => {
  const nodes = [];

  if (settings.description && report.description) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'description',
      tag: 'section',
      children: [
        { tag: 'h1', textContent: 'Description' },
        { tag: 'p', textContent: report.description },
      ],
    };

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDescriptionElement);


/***/ }),

/***/ "./src/content/templates/panel/domain.js":
/*!***********************************************!*\
  !*** ./src/content/templates/panel/domain.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const style = `
.domain-table {
  margin-top: 5px;
}
.domain-table th:first-child {
  width: 35%;
}
.domain-table th:last-child {
  width: 65%;
}
.domain-table td {
  text-align: center;
}`;

const createDomainLink = domain => (
  domain.pfam
    ? {
      href: `http://pfam.xfam.org/family/${domain.pfam}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: domain.name,
    }
    : { tag: 'span', textContent: domain.name }
);

const createDomainElement = (report, settings) => {
  const nodes = [];

  if (settings.domain || settings.region) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];
    let { domains } = report;
    let heading;
    let warning;
    if (settings.domain && settings.region) {
      heading = 'DOMAINS & REGIONS';
      warning = 'no annotated domains or regions';
    } else if (settings.domain) {
      heading = 'DOMAINS';
      domains = domains.filter(domain => domain.type === 'domain');
      warning = 'no annotated domains';
    } else if (settings.region) {
      heading = 'REGIONS';
      domains = domains.filter(domain => domain.type === 'region');
      warning = 'no annotated regions';
    }

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: heading },
            {
              href: `http://pfam.xfam.org/protein/${accession}`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'Pfam',
            },
          ],
        },
      ],
    };

    if (domains && domains.length > 0) {
      section.children.push({
        class: 'domain-table',
        tag: 'table',
        children: [
          {
            tag: 'thead',
            children: [
              {
                tag: 'tr',
                children: [
                  { tag: 'td', textContent: 'Start - End' },
                  { tag: 'td', textContent: 'Name' },
                ],
              },
            ],
          },
          {
            tag: 'tbody',
            children: domains.map(domain => ({
              tag: 'tr',
              children: [
                {
                  tag: 'td',
                  textContent: `${domain.start}-${domain.end}`,
                },
                {
                  tag: 'td',
                  children: [
                    createDomainLink(domain),
                  ],
                },
              ],
            })),
          },
        ],
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: warning,
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomainElement);


/***/ }),

/***/ "./src/content/templates/panel/essentiality/create-cell-table.js":
/*!***********************************************************************!*\
  !*** ./src/content/templates/panel/essentiality/create-cell-table.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getRequestedCellLines = (availableCellLines, requestedCells) => (
  requestedCells.map(cell => ({
    cell,
    value: availableCellLines[cell] || '-',
  }))
);

const isCellDataAvailable = essentiality => (
  essentiality
  && essentiality.cells
  && Object.keys(essentiality.cells).length > 0
);

const createCellTable = (report, settings) => {
  const { essentiality } = report;
  const { essentiality_tissues: requestedCellLines } = settings;

  if (!isCellDataAvailable(essentiality)) {
    return [
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell data available',
      },
    ];
  }

  const noCells = Object.keys(essentiality.cells).length;
  const requestedCellData = getRequestedCellLines(essentiality.cells, requestedCellLines);

  const nodes = [];

  nodes.push({
    class: 'essentiality__stats',
    tag: 'div',
    children: [
      {
        tag: 'span',
        textContent: 'No. cell lines:',
      },
      {
        tag: 'span',
        textContent: noCells,
      },
      {
        tag: 'span',
        textContent: 'Median:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.median,
      },
      {
        tag: 'span',
        textContent: 'Mean:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.mean,
      },
      {
        tag: 'span',
        textContent: 'SD:',
      },
      {
        tag: 'span',
        textContent: essentiality.stats.sd,
      },
    ],
  });

  if (requestedCellLines.length <= 0) {
    nodes.push(
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no cell lines selected',
      },
    );
  } else {
    nodes.push({
      class: 'essentiality__table',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'Cell' },
                { tag: 'td', textContent: 'CERES' },
              ],
            },
          ],
        },
        {
          tag: 'tbody',
          children: requestedCellData.map(datum => ({
            tag: 'tr',
            children: [
              {
                tag: 'td',
                textContent: datum.cell,
              },
              {
                tag: 'td',
                textContent: datum.value,
              },
            ],
          })),
        },
      ],
    });
  }


  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCellTable);


/***/ }),

/***/ "./src/content/templates/panel/essentiality/create-co-dependency-table.js":
/*!********************************************************************************!*\
  !*** ./src/content/templates/panel/essentiality/create-co-dependency-table.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const isCoDependencyDataAvailable = essentiality => (
  essentiality
  && essentiality.coDependencies
  && essentiality.coDependencies.length > 0
);

const createCoDependencyTable = (report, settings) => {
  const { essentiality } = report;
  const { essentiality_codependencies: noRequestedCoDependencies } = settings;

  if (noRequestedCoDependencies <= 0) {
    return [];
  }

  const nodes = [];
  nodes.push({
    class: 'essentiality__codependencies',
    tag: 'h2',
    textContent: 'Co-dependencies',
  });

  if (!isCoDependencyDataAvailable(essentiality)) {
    nodes.push(
      {
        class: 'warning',
        tag: 'div',
        textContent: 'no co-dependency data available',
      },
    );
  } else {
    const topCoDependencies = essentiality.coDependencies.slice(0, noRequestedCoDependencies);

    nodes.push({
      class: 'essentiality__table',
      tag: 'table',
      children: [
        {
          tag: 'thead',
          children: [
            {
              tag: 'tr',
              children: [
                { tag: 'td', textContent: 'Gene' },
                { tag: 'td', textContent: 'Pearson' },
              ],
            },
          ],
        },
        {
          tag: 'tbody',
          children: topCoDependencies.map(([gene, value]) => ({
            tag: 'tr',
            children: [
              {
                tag: 'td',
                textContent: gene,
              },
              {
                tag: 'td',
                textContent: value,
              },
            ],
          })),
        },
      ],
    });
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCoDependencyTable);


/***/ }),

/***/ "./src/content/templates/panel/essentiality/create-heading.js":
/*!********************************************************************!*\
  !*** ./src/content/templates/panel/essentiality/create-heading.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createHeading = (report) => {
  const { essentiality, gene } = report;

  const nodes = [];

  const linkSymbol = essentiality.sourceSymbol || gene;
  nodes.push({
    class: 'details-header',
    tag: 'div',
    children: [
      { tag: 'h1', textContent: 'ESSENTIALITY' },
      {
        class: 'essentiality__link',
        href: `https://depmap.org/portal/gene/${linkSymbol}?tab=overview`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'DepMap',
      },
    ],
  });

  nodes.push({
    class: 'details-description',
    tag: 'p',
    children: [
      {
        href: 'https://depmap.org/portal/',
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'DepMap',
      },
      {
        tag: 'span',
        textContent: ` is a cell dependency map that includes genome-scale
        CRISPR–Cas9 essentiality screens across cancer cell lines. The CERES score
        is an estimate of gene dependency with scores of 0 and -1 representing the median for
        nonessential genes and common core essential genes, respectively.`,
      },
    ],
  });

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeading);


/***/ }),

/***/ "./src/content/templates/panel/essentiality/element.js":
/*!*************************************************************!*\
  !*** ./src/content/templates/panel/essentiality/element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _create_cell_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cell-table */ "./src/content/templates/panel/essentiality/create-cell-table.js");
/* harmony import */ var _create_co_dependency_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-co-dependency-table */ "./src/content/templates/panel/essentiality/create-co-dependency-table.js");
/* harmony import */ var _create_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-heading */ "./src/content/templates/panel/essentiality/create-heading.js");





const style = `
.essentiality__codependencies {
  margin-top: 10px;
}

.essentiality__link svg {
  fill: var(--primary);
}
.essentiality__link:focus svg,
.essentiality__link:hover svg {
  fill: var(--text);
}
.essentiality__stats {
  display: grid;
  gap: 4px;
  grid-template-columns: auto 1fr auto 1fr;
  margin: 5px 0;
}
.essentiality__stats > :nth-child(odd) {
  font-weight: bold;
  justify-self: end;
}
.essentiality__table {
  margin-top: 5px;
}
.essentiality__table td {
  text-align: center;
}`;

const shouldShowData = (settings, essentialityTissues) => {
  const { essentiality: essentialityRequested, species } = settings;
  return (
    essentialityRequested
    && essentialityTissues[species]
    && essentialityTissues[species].cells.length > 0
  );
};

const element = (report, settings) => {
  const nodes = [];

  if (shouldShowData(settings, _config__WEBPACK_IMPORTED_MODULE_0__.default.tissues.essentiality)) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details',
      tag: 'section',
      children: (0,_create_heading__WEBPACK_IMPORTED_MODULE_3__.default)(report),
    };

    section.children.push(...(0,_create_cell_table__WEBPACK_IMPORTED_MODULE_1__.default)(report, settings));
    section.children.push(...(0,_create_co_dependency_table__WEBPACK_IMPORTED_MODULE_2__.default)(report, settings));

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);


/***/ }),

/***/ "./src/content/templates/panel/expression/expression.js":
/*!**************************************************************!*\
  !*** ./src/content/templates/panel/expression/expression.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config */ "./src/config.js");
/* harmony import */ var _protein_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protein/element */ "./src/content/templates/panel/expression/protein/element.js");
/* harmony import */ var _rna_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rna/element */ "./src/content/templates/panel/expression/rna/element.js");




const shouldShowData = (showExpression, species, data) => (
  showExpression
  && data[species]
  && (
    data[species].cells.length > 0
    || data[species].tissues.length > 0
  )
);

const style = `
.expression h1::after {
  content: '';
}
.expression h2 {
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.expression h2::after {
  content: ':';
  margin-right: 3px;
}
.expression p {
  margin: 5px 0 10px 0;
}
.expression p.expression__help {
  margin-top: 0;
}
.expression__section {
  margin-top: 5px;
}
.expression__section:not(:nth-of-type(+2)) {
  border-top: 1px solid #d0d0d0;
  margin-top: 6px;
  padding-top: 10px;
}
.expression__table th:first-child {
  width: 40%px;
}
.expression__table th:not(:first-child) {
  width: 30%;
}
.expression__table td:not(:first-child) {
  text-align: center;
}
.expression__table-protein {
  margin-bottom: 10px;
}`;

const expressionElement = (report, settings) => {
  const nodes = [];

  const showProteinData = shouldShowData(settings.protein_expression, settings.species, _config__WEBPACK_IMPORTED_MODULE_0__.default.tissues.protein);
  const showRNAData = shouldShowData(settings.rna_expression, settings.species, _config__WEBPACK_IMPORTED_MODULE_0__.default.tissues.rna);

  if (showProteinData || showRNAData) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'expression',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'EXPRESSION' },
          ],
        },
        {
          class: 'expression__help',
          tag: 'p',
          textContent: `Expression values are binned into qualitative
          levels: no expression (none), low, medium or high.`,
        },
      ],
    };

    section.children.push((0,_protein_element__WEBPACK_IMPORTED_MODULE_1__.default)(report, settings, showProteinData));
    section.children.push((0,_rna_element__WEBPACK_IMPORTED_MODULE_2__.default)(report, settings, showRNAData));

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (expressionElement);


/***/ }),

/***/ "./src/content/templates/panel/expression/has-data.js":
/*!************************************************************!*\
  !*** ./src/content/templates/panel/expression/has-data.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hasData = expression => (
  Boolean(expression
  && (
    expression.cells
    || expression.tissues
  ))
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hasData);


/***/ }),

/***/ "./src/content/templates/panel/expression/protein/create-link.js":
/*!***********************************************************************!*\
  !*** ./src/content/templates/panel/expression/protein/create-link.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createLink = accession => (
  accession
    ? {
      href: `https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${accession}/expression`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'Proteomics DB',
    }
    : {}
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLink);


/***/ }),

/***/ "./src/content/templates/panel/expression/protein/create-table.js":
/*!************************************************************************!*\
  !*** ./src/content/templates/panel/expression/protein/create-table.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fill_table_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill-table-row */ "./src/content/templates/panel/expression/protein/fill-table-row.js");


const createBody = (report, tissues) => (
  tissues.map(tissue => (
    (0,_fill_table_row__WEBPACK_IMPORTED_MODULE_0__.default)(tissue, report['protein-expression'])
  ))
);

const createTable = (report, tissues) => ([
  {
    class: 'details-description',
    tag: 'p',
    children: [
      { tag: 'span', textContent: 'Protein expression values are reported as the log' },
      { tag: 'sub', textContent: 10 },
      { tag: 'span', textContent: ' normalized MS1 iBAQ intensity.' },
    ],
  },
  {
    class: 'expression__table expression__table-protein',
    tag: 'table',
    children: [
      {
        tag: 'thead',
        children: [
          {
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'Intensity' },
              { tag: 'th', textContent: 'Level' },
            ],
          },
        ],
      },
      {
        tag: 'tbody',
        children: createBody(report, tissues),
      },
    ],
  },
]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTable);


/***/ }),

/***/ "./src/content/templates/panel/expression/protein/element.js":
/*!*******************************************************************!*\
  !*** ./src/content/templates/panel/expression/protein/element.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-link */ "./src/content/templates/panel/expression/protein/create-link.js");
/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-table */ "./src/content/templates/panel/expression/protein/create-table.js");
/* harmony import */ var _has_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../has-data */ "./src/content/templates/panel/expression/has-data.js");
/* eslint indent: 0 */




const element = (report, settings, showData) => {
  let node = {};

  if (showData) {
    const accession = report.proteomicsdb;
    const tissuesSelected = settings.protein_expression_tissues && settings.protein_expression_tissues.length > 0;
    const dataAvailable = (0,_has_data__WEBPACK_IMPORTED_MODULE_2__.default)(report['protein-expression']);

    node = {
      class: 'expression__section',
      tag: 'div',
      children: [
        { tag: 'h2', textContent: 'Protein' },
        (0,_create_link__WEBPACK_IMPORTED_MODULE_0__.default)(accession),
      ],
    };

    if (!tissuesSelected) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no tissues selected',
      });
    }

    if (tissuesSelected && dataAvailable) {
      node.children.push(...(0,_create_table__WEBPACK_IMPORTED_MODULE_1__.default)(report, settings.protein_expression_tissues));
    }

    if (tissuesSelected && !dataAvailable) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no protein expression data',
      });
    }
  }

  return node;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);


/***/ }),

/***/ "./src/content/templates/panel/expression/protein/fill-table-row.js":
/*!**************************************************************************!*\
  !*** ./src/content/templates/panel/expression/protein/fill-table-row.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const fillTableRow = (tissue, data) => {
  const datum = (data.cells && data.cells[tissue]) || (data.tissues && data.tissues[tissue]);
  const { intensity, level } = datum || { intensity: '-', level: 'none' };
  return {
    tag: 'tr',
    children: [
      { tag: 'td', textContent: tissue },
      { tag: 'td', textContent: intensity },
      { tag: 'td', textContent: level },
    ],
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillTableRow);


/***/ }),

/***/ "./src/content/templates/panel/expression/rna/create-link.js":
/*!*******************************************************************!*\
  !*** ./src/content/templates/panel/expression/rna/create-link.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createLink = accession => (
  accession
    ? {
      href: `https://www.proteinatlas.org/${accession}/tissue`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'Protein Atlas',
    }
    : {}
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLink);


/***/ }),

/***/ "./src/content/templates/panel/expression/rna/create-table.js":
/*!********************************************************************!*\
  !*** ./src/content/templates/panel/expression/rna/create-table.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fill_table_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fill-table-row */ "./src/content/templates/panel/expression/rna/fill-table-row.js");


const createBody = (report, tissues) => (
  tissues.map(tissue => (
    (0,_fill_table_row__WEBPACK_IMPORTED_MODULE_0__.default)(tissue, report['rna-expression'])
  ))
);

const createTable = (report, tissues) => ([
  {
    class: 'details-description',
    tag: 'p',
    children: [
      { tag: 'span', textContent: 'RNA expression values are reported as transcripts per million (TPM). See ' },
      {
        href: 'https://www.proteinatlas.org/about/assays+annotation',
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'HPA RNA-seq data',
      },
      { tag: 'span', textContent: ' for more.' },
    ],
  },
  {
    class: 'expression__table',
    tag: 'table',
    children: [
      {
        tag: 'thead',
        children: [
          {
            tag: 'tr',
            children: [
              { tag: 'th', textContent: 'Tissue' },
              { tag: 'th', textContent: 'TPM' },
              { tag: 'th', textContent: 'Level' },
            ],
          },
        ],
      },
      {
        tag: 'tbody',
        children: createBody(report, tissues),
      },
    ],
  },
]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTable);


/***/ }),

/***/ "./src/content/templates/panel/expression/rna/element.js":
/*!***************************************************************!*\
  !*** ./src/content/templates/panel/expression/rna/element.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-link */ "./src/content/templates/panel/expression/rna/create-link.js");
/* harmony import */ var _create_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-table */ "./src/content/templates/panel/expression/rna/create-table.js");
/* harmony import */ var _has_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../has-data */ "./src/content/templates/panel/expression/has-data.js");
/* eslint indent: 0 */




const element = (report, settings, showData) => {
  let node = {};

  if (showData) {
    const accession = report['ensembl-gene'][0];
    const tissuesSelected = settings.rna_expression_tissues && settings.rna_expression_tissues.length > 0;
    const dataAvailable = (0,_has_data__WEBPACK_IMPORTED_MODULE_2__.default)(report['rna-expression']);

    node = {
      class: 'expression__section',
      tag: 'div',
      children: [
        { tag: 'h2', textContent: 'RNA' },
        (0,_create_link__WEBPACK_IMPORTED_MODULE_0__.default)(accession),
      ],
    };

    if (!tissuesSelected) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no tissues selected',
      });
    }

    if (tissuesSelected && dataAvailable) {
      node.children.push(...(0,_create_table__WEBPACK_IMPORTED_MODULE_1__.default)(report, settings.rna_expression_tissues));
    }

    if (tissuesSelected && !dataAvailable) {
      node.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no RNA expression data',
      });
    }
  }

  return node;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (element);


/***/ }),

/***/ "./src/content/templates/panel/expression/rna/fill-table-row.js":
/*!**********************************************************************!*\
  !*** ./src/content/templates/panel/expression/rna/fill-table-row.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defineLevel": () => (/* binding */ defineLevel),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../config */ "./src/config.js");


const thresholds = _config__WEBPACK_IMPORTED_MODULE_0__.default.expressionThresholds;

const defineLevel = (value) => {
  if (
    value === '-'
    || value < thresholds.none[1]
  ) {
    return 'none';
  } if (
    value >= thresholds.low[0]
    && value < thresholds.low[1]
  ) {
    return 'low';
  } if (
    value >= thresholds.medium[0]
    && value < thresholds.medium[1]
  ) {
    return 'medium';
  }
  return 'high';
};

const fillTableRow = (tissue, data) => {
  let tpm = (data.cells && data.cells[tissue]) || (data.tissues && data.tissues[tissue]);
  tpm = tpm || '-';
  return {
    tag: 'tr',
    children: [
      { tag: 'td', textContent: tissue },
      { tag: 'td', textContent: tpm },
      { tag: 'td', textContent: defineLevel(tpm) },
    ],
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillTableRow);


/***/ }),

/***/ "./src/content/templates/panel/go.js":
/*!*******************************************!*\
  !*** ./src/content/templates/panel/go.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_go_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/go-url */ "./src/content/helpers/go-url.js");
/* harmony import */ var _helpers_go_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_go_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_link_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/link-svg */ "./src/content/helpers/link-svg.js");



const style = `
#go-buttons {
  display: flex;
  margin: 5px 0;
}
.go-button {
  background-color: var(--primary-1);
  border: 1px solid var(--primary);
  border-radius: 2px;
  color: var(--text);
  cursor: pointer;
  flex-grow: 1;
  font-size: 14px;
  margin: 0px 2px 0px 2px;
  text-align: center;
}
.go-button.active {
  background-color: var(--primary);
  color: var(--text-contrast);
}
.go-button:focus {
  background-color: var(--primary);
  color: var(--text-contrast);
  outline: none;
}
.go-terms {
  padding: 0 5px;
}
.go-terms ul {
  margin: 5px 0 8px 0;
  padding-left: 20px;
}
.go-terms a svg {
  fill: var(--primary);
}
.go-terms a:focus svg,
.go-terms a:hover svg {
  fill: var(--text);
}
.go-term {
  margin-right: 5px;
}`;

const createGoElement = (report, settings) => {
  const nodes = [];

  if (settings.go) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'GO TERMS' },
          ],
        },
      ],
    };

    const url = _helpers_go_url__WEBPACK_IMPORTED_MODULE_0___default()(report, settings);
    if (url) {
      section.children[0].children.push({
        href: url,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'AmiGO',
      });
    }

    section.children.push({
      id: 'go-buttons',
      tag: 'div',
      children: ['bp', 'cc', 'mf'].map((namespace) => {
        const currentClass = namespace === settings.go_namespace
          ? 'go-button active'
          : 'go-button';
        return {
          class: currentClass,
          'data-type': namespace,
          id: `go-button-${namespace}`,
          tag: 'button',
          textContent: namespace.toUpperCase(),
          type: 'button',
        };
      }),
    });

    section.children.push(
      ...['bp', 'cc', 'mf'].map((namespace) => {
        const firstCharacter = namespace.charAt(1);
        const terms = report.go[firstCharacter];
        const element = {
          children: [],
          class: 'go-terms',
          id: `go-terms-${namespace}`,
          style: `display: ${namespace === settings.go_namespace ? 'block' : 'none'}`,
          tag: 'div',
        };

        if (terms && terms.length > 0) {
          element.children.push({
            tag: 'ul',
            children: terms.map(term => ({
              tag: 'li',
              children: [
                { tag: 'span', class: 'go-term', textContent: term.term },
                {
                  href: `http://amigo.geneontology.org/amigo/term/GO:${term.id}`,
                  rel: 'noopener noreferrer',
                  tag: 'a',
                  target: '_blank',
                  children: [_helpers_link_svg__WEBPACK_IMPORTED_MODULE_1__.default],
                },
              ],
            })),
          });
        } else {
          element.children.push({
            class: 'warning',
            tag: 'div',
            textContent: 'no terms',
          });
        }

        return element;
      }),
    );

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGoElement);


/***/ }),

/***/ "./src/content/templates/panel/interactor.js":
/*!***************************************************!*\
  !*** ./src/content/templates/panel/interactor.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateRows": () => (/* binding */ updateRows),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/add-nodes */ "./src/content/helpers/add-nodes.js");
/* harmony import */ var _helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/remove-all-children */ "./src/content/helpers/remove-all-children.js");
/* harmony import */ var _assets_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sort */ "./src/content/templates/assets/sort.js");
/* harmony import */ var _assets_sort_up__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sort-up */ "./src/content/templates/assets/sort-up.js");





const createRowNode = (interactors) => {
  const nodes = [];

  interactors.forEach((interactor) => {
    const tr = {
      tag: 'tr',
      children: [
        { tag: 'td', textContent: interactor.gene },
        {
          class: 'interactor-list-toggle',
          'data-gene': interactor.gene,
          tag: 'td',
          children: [
            { tag: 'div', textContent: interactor.biogrid.length },
            {
              class: `interactor__method-list interactor-list-${interactor.gene}`,
              tag: 'ul',
              children: interactor.biogrid.map(method => ({
                tag: 'li',
                textContent: `∙ ${method}`,
              })),
            },
          ],
        },
        {
          class: 'interactor-list-toggle',
          'data-gene': interactor.gene,
          tag: 'td',
          children: [
            { tag: 'div', textContent: interactor.intact.length },
            {
              class: `interactor__method-list interactor-list-${interactor.gene}`,
              tag: 'ul',
              children: interactor.intact.map(method => ({
                tag: 'li',
                textContent: `∙ ${method}`,
              })),
            },
          ],
        },
      ],
    };

    nodes.push(tr);
  });

  return nodes;
};

const updateRows = (tbody, interactors) => {
  (0,_helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_1__.default)(tbody);
  (0,_helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__.default)(tbody, createRowNode(interactors));
};

const style = `
.interactor .links {
  display: inline-flex;
}
.interactor .links a:not(:first-child) {
  margin-left: 4px;
}
.interactor-table {
  table-layout: fixed;
}
.interactor-table__col_fixed {
  width: 100px;
}
.interactor-table th button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: auto;
  padding: 2px;
}
.interactor-table th button:focus {
  outline: none;
}
.interactor-table th svg path {
  fill: var(--text-contrast);
}
.interactor-table td:not(:first-child) {
  cursor: pointer;
  text-align: center;
  vertical-align: top;
}
.interactor__method-list {
  border-top: 1px dotted #d0d0d0;
  display: none;
  font-size: 0.8em;
  list-style: none;
  margin: 0;
  padding-left: 0;
  text-align: left;
  width: auto;
  word-break: break-word;
}
.interactor__method-list li {
  margin: 0;
}`;

const createInteractorElement = (report, settings) => {
  const nodes = [];
  if (settings.interactors) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const links = [];
    if (report.biogrid) {
      links.push({
        href: `https://thebiogrid.org/${report.biogrid}`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'BioGRID',
      });
    }
    links.push({
      href: `https://www.ebi.ac.uk/intact/query/${accession}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'IntAct',
    });

    const section = {
      class: 'details interactor',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'INTERACTORS' },
            { tag: 'span', class: 'links_comma', children: links },
          ],
        },
      ],
    };

    if (report.interactors && report.interactors.length > 0) {
      section.children.push({
        class: 'details-description',
        tag: 'p',
        textContent: `The values in the table indicate the number of different methods
        that have been used to detect the interaction partner (target) as
        reported by each database. Click on a table cell to view the list
        of methods.`,
      });
      section.children.push({
        class: 'interactor-table',
        tag: 'table',
        children: [
          {
            tag: 'colgroup',
            children: [
              {
                class: 'interactor-table__col_fixed',
                tag: 'col',
              },
              {
                class: 'interactor-table__col_dynamic',
                tag: 'col',
              },
              {
                class: 'interactor-table__col_dynamic',
                tag: 'col',
              },
            ],
          },
          {
            tag: 'thead',
            children: [
              {
                tag: 'tr',
                children: [
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'Target',
                      },
                      {
                        children: [_assets_sort_up__WEBPACK_IMPORTED_MODULE_3__.sortUpIcon],
                        id: 'interactor_gene',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'BioGRID',
                      },
                      {
                        children: [_assets_sort__WEBPACK_IMPORTED_MODULE_2__.sortIcon],
                        id: 'interactor_biogrid',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                  {
                    tag: 'th',
                    children: [
                      {
                        tag: 'span',
                        textContent: 'IntAct',
                      },
                      {
                        children: [_assets_sort__WEBPACK_IMPORTED_MODULE_2__.sortIcon],
                        id: 'interactor_intact',
                        tag: 'button',
                        type: 'button',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            children: createRowNode(report.interactors),
            id: 'interactor_tbody',
            tag: 'tbody',
          },
        ],
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no known interactors',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInteractorElement);


/***/ }),

/***/ "./src/content/templates/panel/link.js":
/*!*********************************************!*\
  !*** ./src/content/templates/panel/link.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGeneralLinks": () => (/* binding */ createGeneralLinks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createGeneralLinks = (report) => {
  const links = [];
  if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
    const accession = report['ensembl-gene'][0];
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'Ensembl' },
        {
          href: `https://ensembl.org/Gene/Summary?g=${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        },
      ],
    });
  }
  if (report.geneid) {
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'NCBI' },
        {
          href: `https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: report.geneid,
        },
      ],
    });
  }
  if (report.uniprot && report.uniprot.length > 0) {
    const accession = report.uniprot[0];
    links.push({
      tag: 'div',
      children: [
        { tag: 'h1', textContent: 'UniProt' },
        {
          href: `https://www.uniprot.org/uniprot/${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        },
      ],
    });
  }
  return links;
};

const style = `
.links > div {
  margin-top: 5px;
}`;

const createLinkElement = (report, settings) => {
  const nodes = [];

  if (settings.links) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'links',
      tag: 'section',
      children: createGeneralLinks(report),
    };

    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'TAIR' },
          {
            href: `https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.tair,
          },
        ],
      });
    }
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'WormBase' },
          {
            href: `https://wormbase.org/species/c_elegans/gene/${report.wormbase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.wormbase,
          },
        ],
      });
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'ZFIN' },
          {
            href: `https://zfin.org/${report.zfin}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.zfin,
          },
        ],
      });
    }
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'dictyBase' },
          {
            href: `http://dictybase.org/gene/${report.dictybase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.dictybase,
          },
        ],
      });
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'FlyBase' },
          {
            href: `https://flybase.org/reports/${report.flybase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.flybase,
          },
        ],
      });
    }
    if (report.biocyc && settings.species === 'Escherichia coli (K12)') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'EcoCyc' },
          {
            href: `https://ecocyc.org/gene?orgid=ECOLI&id=${report.biocyc}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.biocyc,
          },
        ],
      });
    }
    if (report.uniprot
      && report.uniprot.length > 0
      && settings.species === 'Homo sapiens'
    ) {
      const accession = report.uniprot[0];
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'neXtProt' },
          {
            href: `https://www.nextprot.org/entry/NX_${accession}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: `NX_${accession}`,
          },
        ],
      });
    }
    if (report.mgi && settings.species === 'Mus musculus') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'MGI' },
          {
            href: `http://www.informatics.jax.org/marker/${report.mgi}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.mgi,
          },
        ],
      });
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'SGD' },
          {
            href: `https://www.yeastgenome.org/locus/${report.sgd}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.sgd,
          },
        ],
      });
    }
    if (report.pombase && settings.species === 'Schizosaccharomyces pombe') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'PomBase' },
          {
            href: `https://www.pombase.org/gene/${report.pombase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.pombase,
          },
        ],
      });
    }
    if (report.xenbase && settings.species === 'Xenopus laevis') {
      section.children.push({
        tag: 'div',
        children: [
          { tag: 'h1', textContent: 'Xenbase' },
          {
            href: `http://www.xenbase.org/gene/showgene.do?method=display&geneId=${report.xenbase}`,
            rel: 'noopener noreferrer',
            tag: 'a',
            target: '_blank',
            textContent: report.xenbase,
          },
        ],
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLinkElement);


/***/ }),

/***/ "./src/content/templates/panel/localization.js":
/*!*****************************************************!*\
  !*** ./src/content/templates/panel/localization.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./src/config.js");


const createHpaList = list => ({
  tag: 'ul',
  children: list.map(item => ({ tag: 'li', textContent: item })),
});

const createHpaRows = (data) => {
  const rows = [];
  if (data.enhanced) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Enhanced' },
        { tag: 'td', children: [createHpaList(data.enhanced)] },
      ],
    });
  }
  if (data.supported) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Supported' },
        { tag: 'td', children: [createHpaList(data.supported)] },
      ],
    });
  }
  if (data.approved) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Approved' },
        { tag: 'td', children: [createHpaList(data.approved)] },
      ],
    });
  }
  if (data.uncertain) {
    rows.push({
      tag: 'tr',
      children: [
        { tag: 'td', textContent: 'Uncertain' },
        { tag: 'td', children: [createHpaList(data.uncertain)] },
      ],
    });
  }
  return rows;
};

const style = `
.localization h1::after {
  content: '';
}
.localization h2 {
  display: inline;
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.localization h2::after {
  content: ':';
  margin-right: 3px;
}
.localization p {
  margin: 8px 0;
}
.localization table {
  margin-bottom: 10px;
}
.localization table ul {
  margin: 4px 0;
  padding-left: 20px;
}
.localization ul {
  margin-bottom: 8px;
  margin-top: 5px;
}
.localization__section {
  margin-top: 5px;
}
.localization__section:not(:nth-of-type(+2)) {
  border-top: 1px solid #d0d0d0;
  margin-top: 6px;
  padding-top: 6px;
}`;

const createLocalizationElement = (report, settings) => {
  const nodes = [];

  if (
    settings.localization
    && (
      settings.localization_compartments
      || settings.localization_hpa
      || settings.localization_uniprot
    )
  ) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const section = {
      class: 'details localization',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'LOCALIZATION' },
          ],
        },
      ],
    };

    if (
      settings.localization_hpa
      && settings.species === 'Homo sapiens'
    ) {
      const ensembl = report['ensembl-gene'][0];
      const fieldNumber = Object.keys(report.localization.hpa).length;

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'Protein Atlas' },
        ],
      };

      if (report.localization.hpa && fieldNumber > 0) {
        element.children.push({
          href: `https://www.proteinatlas.org/${ensembl}/cell`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: ensembl,
        });
        element.children.push({
          tag: 'p',
          children: [
            {
              tag: 'span',
              textContent: `The Human Protein Atlas annotates localizations based on
              the supporting evidence. From best to worst the reliability
              scores are: "Enhanced", "Supported", "Approved" and "Uncertain". 
              See `,
            },
            {
              href: 'https://www.proteinatlas.org/about/assays+annotation',
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'IF - Reliability score',
            },
            { tag: 'span', textContent: ' for more.' },
          ],
        });
        element.children.push({
          tag: 'table',
          children: [
            {
              tag: 'thead',
              children: [
                {
                  tag: 'tr',
                  children: [
                    { tag: 'th', textContent: 'Score' },
                    { tag: 'th', textContent: 'Localization' },
                  ],
                },
              ],
            },
            {
              children: createHpaRows(report.localization.hpa),
              tag: 'tbody',
            },
          ],
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    if (settings.localization_uniprot) {
      const accession = report.uniprot[0];

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'UniProt' },
        ],
      };

      if (report.localization.uniprot && report.localization.uniprot.length > 0) {
        element.children.push({
          href: `https://www.uniprot.org/uniprot/${accession}#subcellular_location`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        });
        element.children.push({
          tag: 'ul',
          children: report.localization.uniprot.map(localization => ({
            tag: 'li',
            textContent: localization,
          })),
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    if (settings.localization_compartments && _config__WEBPACK_IMPORTED_MODULE_0__.default.compartmentSpecies.includes(settings.species)) {
      const { accession } = report.localization.compartments;
      const speciesID = _config__WEBPACK_IMPORTED_MODULE_0__.default.speciesID[settings.species];

      const element = {
        class: 'localization__section',
        tag: 'div',
        children: [
          { tag: 'h2', textContent: 'Compartments' },
        ],
      };

      if (
        report.localization.compartments
        && report.localization.compartments.terms
        && report.localization.compartments.terms.length > 0
      ) {
        element.children.push({
          href: `https://compartments.jensenlab.org/Entity?figures=subcell_cell_%&knowledge=10&textmining=10&experiments=10&predictions=10&type1=${speciesID}&type2=-22&id1=${accession}`,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: accession,
        });
        element.children.push({
          tag: 'ul',
          children: report.localization.compartments.terms.map(localization => ({
            tag: 'li',
            textContent: localization,
          })),
        });
      } else {
        element.children.push({
          class: 'none',
          tag: 'span',
          textContent: 'no data',
        });
      }

      section.children.push(element);
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLocalizationElement);


/***/ }),

/***/ "./src/content/templates/panel/panel.js":
/*!**********************************************!*\
  !*** ./src/content/templates/panel/panel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/add-nodes */ "./src/content/helpers/add-nodes.js");
/* harmony import */ var _back_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../back-button */ "./src/content/templates/back-button.js");
/* harmony import */ var _close_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../close-button */ "./src/content/templates/close-button.js");
/* harmony import */ var _create_nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-nodes */ "./src/content/templates/panel/create-nodes.js");
/* harmony import */ var _drag_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../drag-button */ "./src/content/templates/drag-button.js");
/* harmony import */ var _no_result_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../no-result/panel */ "./src/content/templates/no-result/panel.js");
/* harmony import */ var _style_panel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../style/panel */ "./src/content/style/panel.js");
/* harmony import */ var _helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/remove-all-children */ "./src/content/helpers/remove-all-children.js");
/* harmony import */ var _resize_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resize-button */ "./src/content/templates/panel/resize-button.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select */ "./src/content/templates/select.js");
/* harmony import */ var _listeners_back__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../listeners/back */ "./src/content/listeners/back.js");
/* harmony import */ var _listeners_close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../listeners/close */ "./src/content/listeners/close.js");
/* harmony import */ var _listeners_drag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../listeners/drag */ "./src/content/listeners/drag.js");
/* harmony import */ var _listeners_go__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../listeners/go */ "./src/content/listeners/go.js");
/* harmony import */ var _listeners_interactor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../listeners/interactor */ "./src/content/listeners/interactor.js");
/* harmony import */ var _listeners_interactor_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../listeners/interactor-sort */ "./src/content/listeners/interactor-sort.js");
/* harmony import */ var _listeners_resize__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../listeners/resize */ "./src/content/listeners/resize.js");
/* harmony import */ var _listeners_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../listeners/select */ "./src/content/listeners/select.js");
/* harmony import */ var _listeners_species_change__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../listeners/species-change */ "./src/content/listeners/species-change.js");





















const createPanel = (reportIndex = 0, error) => {
  const result = _state__WEBPACK_IMPORTED_MODULE_9__.default.results[_state__WEBPACK_IMPORTED_MODULE_9__.default.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
  ** be recreated. Otherwise create element. */
  let fadeClass = 'panel_animate-fade';
  if (_state__WEBPACK_IMPORTED_MODULE_9__.default.shadowRoot.getElementById('panel')) {
    (0,_listeners_back__WEBPACK_IMPORTED_MODULE_11__.removeBackListener)();
    (0,_listeners_close__WEBPACK_IMPORTED_MODULE_12__.removeCloseListener)();
    (0,_listeners_drag__WEBPACK_IMPORTED_MODULE_13__.removeDragListener)();
    (0,_listeners_go__WEBPACK_IMPORTED_MODULE_14__.removeGoListener)();
    (0,_listeners_interactor__WEBPACK_IMPORTED_MODULE_15__.removeInteractorListener)();
    (0,_listeners_interactor_sort__WEBPACK_IMPORTED_MODULE_16__.removeInteractorSortListener)();
    (0,_listeners_resize__WEBPACK_IMPORTED_MODULE_17__.removeResizeListener)();
    (0,_listeners_select__WEBPACK_IMPORTED_MODULE_18__.removeSelectListener)();
    (0,_helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_7__.default)(_state__WEBPACK_IMPORTED_MODULE_9__.default.shadowRoot);
    fadeClass = 'panel_animate-show';
  }

  // Get class, html and style to apply
  const nodes = error || result.length < 1
    ? (0,_no_result_panel__WEBPACK_IMPORTED_MODULE_5__.default)(error, _state__WEBPACK_IMPORTED_MODULE_9__.default.style, fadeClass)
    : [(0,_create_nodes__WEBPACK_IMPORTED_MODULE_3__.default)(result, reportIndex, _state__WEBPACK_IMPORTED_MODULE_9__.default.style, fadeClass)];
  (0,_helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_9__.default.shadowRoot, [..._style_panel__WEBPACK_IMPORTED_MODULE_6__.default, ...nodes]);

  const panel = _state__WEBPACK_IMPORTED_MODULE_9__.default.shadowRoot.getElementById('panel');
  // Reset state, add element, close button, listeners and fade in.
  _state__WEBPACK_IMPORTED_MODULE_9__.default.reset();
  (0,_back_button__WEBPACK_IMPORTED_MODULE_1__.default)(panel, _state__WEBPACK_IMPORTED_MODULE_9__.default.results.length);
  (0,_close_button__WEBPACK_IMPORTED_MODULE_2__.default)(panel);
  (0,_drag_button__WEBPACK_IMPORTED_MODULE_4__.default)(panel);
  (0,_resize_button__WEBPACK_IMPORTED_MODULE_8__.default)(panel);
  (0,_select__WEBPACK_IMPORTED_MODULE_10__.default)(_state__WEBPACK_IMPORTED_MODULE_9__.default.shadowRoot);
  (0,_listeners_back__WEBPACK_IMPORTED_MODULE_11__.addBackListener)();
  (0,_listeners_close__WEBPACK_IMPORTED_MODULE_12__.addCloseListener)();
  (0,_listeners_drag__WEBPACK_IMPORTED_MODULE_13__.addDragListener)();
  (0,_listeners_go__WEBPACK_IMPORTED_MODULE_14__.addGoListener)();
  (0,_listeners_interactor__WEBPACK_IMPORTED_MODULE_15__.addInteractorListener)();
  (0,_listeners_interactor_sort__WEBPACK_IMPORTED_MODULE_16__.addInteractorSortListener)();
  (0,_listeners_resize__WEBPACK_IMPORTED_MODULE_17__.addResizeListener)();
  (0,_listeners_select__WEBPACK_IMPORTED_MODULE_18__.addSelectListener)(result);
  (0,_listeners_species_change__WEBPACK_IMPORTED_MODULE_19__.addSpeciesListener)();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPanel);


/***/ }),

/***/ "./src/content/templates/panel/pathology.js":
/*!**************************************************!*\
  !*** ./src/content/templates/panel/pathology.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiseaseElement": () => (/* binding */ createDiseaseElement),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint indent: 0 */

const createDiseaseElement = (path) => {
  const links = [];
  if (path.mim) {
    links.push({
      href: `http://www.omim.org/entry/${path.mim}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: `OMIM: ${path.mim}`,
    });
  }
  if (path.uniprotID) {
    links.push({
      href: `https://www.uniprot.org/diseases/${path.uniprotID}`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: `UniProt: ${path.uniprotID}`,
    });
  }

  const element = {
    class: 'pathology-condition',
    tag: 'div',
    children: [],
  };

  if (path.name) {
    element.children.push({
      tag: 'h2',
      textContent: path.name,
    });
  }
  if (links.length > 0) {
    element.children.push({
      children: links,
      class: 'links links_comma',
      tag: 'span',
    });
  }
  element.children.push({
    tag: 'p',
    textContent: path.description,
  });

  return element;
};

const style = `
.pathology h2 {
  font-size: 14px;
  font-style: italic;
  font-weight: normal;
  margin: 0;
  margin-bottom: 1px;
}
.pathology p {
  margin: 5px 0 0 0;
}
.pathology .links {
  display: inline-flex;
}
.pathology .links a:not(:first-child) {
  margin-left: 4px;
}
.pathology-condition:not(:last-child) {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 8px;
  padding-bottom: 8px;
}`;

const createPathologyElement = (report, settings) => {
  const nodes = [];

  if (settings.pathology) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const links = [];
    if (report.mim) {
      links.push({
        href: `https://www.omim.org/entry/${report.mim}`,
        rel: 'noopener noreferrer',
        tag: 'a',
        target: '_blank',
        textContent: 'OMIM',
      });
    }
    links.push({
      href: `https://www.uniprot.org/uniprot/${accession}#pathology_and_biotech`,
      rel: 'noopener noreferrer',
      tag: 'a',
      target: '_blank',
      textContent: 'UniProt - pathology',
    });

    const section = {
      class: 'details pathology',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'PATHOLOGY' },
            {
              children: links,
              class: 'links links_comma',
              tag: 'span',
            },
          ],
        },
      ],
    };

    if (report.pathology && report.pathology.length > 0) {
      section.children.push(...report.pathology.map(createDiseaseElement));
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no pathology data',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPathologyElement);


/***/ }),

/***/ "./src/content/templates/panel/pathway.js":
/*!************************************************!*\
  !*** ./src/content/templates/panel/pathway.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_link_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/link-svg */ "./src/content/helpers/link-svg.js");
/* eslint indent: 0 */


const style = `
.pathway {
  margin: 5px 0 8px 0;
  padding-left: 30px;
}
.pathway a svg {
  fill: var(--primary);
}
.pathway a:focus svg,
.pathway a:hover svg {
  fill: var(--text);
}
.pathway a {
  margin-left: 5px;
}
`;

const createPathwayElement = (report, settings) => {
  const nodes = [];

  if (settings.pathway) {
    nodes.push({
      tag: 'style',
      textContent: style,
      type: 'text/css',
    });

    const accession = report.uniprot[0];

    const section = {
      class: 'details',
      tag: 'section',
      children: [
        {
          class: 'details-header',
          tag: 'div',
          children: [
            { tag: 'h1', textContent: 'PATHWAYS' },
            {
              href: `https://www.uniprot.org/uniprot/${accession}#section_x-ref_pathway`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
              textContent: 'UniProt - pathway',
            },
          ],
        },
      ],
    };

    if (report.pathway && report.pathway.length > 0) {
      section.children.push({
        class: 'pathway',
        tag: 'ul',
        children: report.pathway.map(term => ({
          tag: 'li',
          children: [
            { tag: 'span', textContent: term.term },
            {
              children: [_helpers_link_svg__WEBPACK_IMPORTED_MODULE_0__.default],
              href: `https://reactome.org/PathwayBrowser/#${term.id}&FLG=${accession}`,
              rel: 'noopener noreferrer',
              tag: 'a',
              target: '_blank',
            },
          ],
        })),
      });
    } else {
      section.children.push({
        class: 'warning',
        tag: 'div',
        textContent: 'no Reactome data',
      });
    }

    nodes.push(section);
  }

  return nodes;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPathwayElement);


/***/ }),

/***/ "./src/content/templates/panel/resize-button.js":
/*!******************************************************!*\
  !*** ./src/content/templates/panel/resize-button.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const resizeButton = (target) => {
  const button = document.createElement('button');
  button.className = 'action-button';
  button.id = 'resize';
  button.type = 'button';

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', '20');
  svg.setAttribute('width', '20');
  svg.setAttribute('viewBox', '0 0 512 501.16');

  const pathA = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathA.setAttribute('d', `M341.611,374.104c29.971,0,54.281,24.311,54.281,54.279c0,29.971-24.311,54.281-54.281,54.281
  c-30.001,0-54.312-24.311-54.312-54.281C287.3,398.414,311.61,374.104,341.611,374.104z`);

  const pathB = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathB.setAttribute('d', `M205.864,238.355c29.986,0,54.281,24.311,54.281,54.28c0,30.002-24.295,54.312-54.281,54.312
  c-29.985,0-54.28-24.311-54.28-54.312C151.583,262.666,175.878,238.355,205.864,238.355z`);

  const pathC = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathC.setAttribute('d', `M205.864,374.104c29.986,0,54.281,24.311,54.281,54.279c0,29.971-24.295,54.281-54.281,54.281
  c-29.985,0-54.28-24.311-54.28-54.281C151.583,398.414,175.878,374.104,205.864,374.104z`);

  const pathD = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathD.setAttribute('d', `M70.116,102.623c29.986,0,54.296,24.294,54.296,54.28c0,29.97-24.31,54.281-54.296,54.281
  c-29.97,0-54.28-24.311-54.28-54.281C15.836,126.917,40.146,102.623,70.116,102.623z`);

  const pathE = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathE.setAttribute('d', `M70.116,238.355c29.986,0,54.296,24.311,54.296,54.28c0,30.002-24.31,54.312-54.296,54.312
  c-29.97,0-54.28-24.311-54.28-54.312C15.836,262.666,40.146,238.355,70.116,238.355z`);

  const pathF = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathF.setAttribute('d', `M70.116,374.104c29.986,0,54.296,24.311,54.296,54.279c0,29.971-24.31,54.281-54.296,54.281
  c-29.97,0-54.28-24.311-54.28-54.281C15.836,398.414,40.146,374.104,70.116,374.104z`);

  svg.appendChild(pathA);
  svg.appendChild(pathB);
  svg.appendChild(pathC);
  svg.appendChild(pathD);
  svg.appendChild(pathE);
  svg.appendChild(pathF);

  button.appendChild(svg);

  target.appendChild(button);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resizeButton);


/***/ }),

/***/ "./src/content/templates/position.js":
/*!*******************************************!*\
  !*** ./src/content/templates/position.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const position = (stateStyle, panel = true) => {
  let style = '';
  if (stateStyle.right) {
    style += `left: auto;right: ${stateStyle.right};`;
  } else if (stateStyle.left) {
    style += `left: ${stateStyle.left};right: auto;`;
  }
  if (panel && stateStyle.width) {
    style += `width: ${stateStyle.width};`;
  }
  return style;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (position);


/***/ }),

/***/ "./src/content/templates/select.js":
/*!*****************************************!*\
  !*** ./src/content/templates/select.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slim-select */ "./node_modules/slim-select/dist/slimselect.min.js");
/* harmony import */ var slim_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slim_select__WEBPACK_IMPORTED_MODULE_0__);


const select = (shadowRoot) => {
  const el = shadowRoot.querySelector('select.slim-select-style');
  if (el) {
    new (slim_select__WEBPACK_IMPORTED_MODULE_0___default())({
      select: el,
      showSearch: false,
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (select);


/***/ }),

/***/ "./src/content/templates/tooltip/create-nodes.js":
/*!*******************************************************!*\
  !*** ./src/content/templates/tooltip/create-nodes.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gene */ "./src/content/templates/gene.js");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain */ "./src/content/templates/tooltip/domain.js");
/* harmony import */ var _essentiality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./essentiality */ "./src/content/templates/tooltip/essentiality.js");
/* harmony import */ var _interactor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactor */ "./src/content/templates/tooltip/interactor.js");
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./link */ "./src/content/templates/tooltip/link.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localization */ "./src/content/templates/tooltip/localization.js");
/* harmony import */ var _go__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./go */ "./src/content/templates/tooltip/go.js");
/* harmony import */ var _hpa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hpa */ "./src/content/templates/tooltip/hpa.js");
/* harmony import */ var _pathology__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pathology */ "./src/content/templates/tooltip/pathology.js");
/* harmony import */ var _proteomics_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proteomics-db */ "./src/content/templates/tooltip/proteomics-db.js");
/* harmony import */ var _helpers_sort_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../helpers/sort-array */ "./src/content/helpers/sort-array.js");
/* harmony import */ var _helpers_sort_array__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_helpers_sort_array__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");













const tooltipDetails = (result, reportIndex, fadeClass = '') => {
  const links = [
    ...(0,_link__WEBPACK_IMPORTED_MODULE_4__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_domain__WEBPACK_IMPORTED_MODULE_1__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_essentiality__WEBPACK_IMPORTED_MODULE_2__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_go__WEBPACK_IMPORTED_MODULE_6__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_localization__WEBPACK_IMPORTED_MODULE_5__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_hpa__WEBPACK_IMPORTED_MODULE_7__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_interactor__WEBPACK_IMPORTED_MODULE_3__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_pathology__WEBPACK_IMPORTED_MODULE_8__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
    ...(0,_proteomics_db__WEBPACK_IMPORTED_MODULE_9__.default)(result[reportIndex], _state__WEBPACK_IMPORTED_MODULE_11__.default.settings),
  ];
  const sorted = _helpers_sort_array__WEBPACK_IMPORTED_MODULE_10___default().alphabeticalByKey(links, 'database');

  return {
    class: `theme_${_state__WEBPACK_IMPORTED_MODULE_11__.default.settings.theme} ${fadeClass} close-on-click-outside`,
    id: 'tooltip',
    tag: 'aside',
    children: [
      (0,_gene__WEBPACK_IMPORTED_MODULE_0__.default)(result, reportIndex),
      {
        tag: 'section',
        children: sorted.map(link => ({
          href: link.href,
          rel: 'noopener noreferrer',
          tag: 'a',
          target: '_blank',
          textContent: link.database,
        })),
      },
    ],
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tooltipDetails);


/***/ }),

/***/ "./src/content/templates/tooltip/domain.js":
/*!*************************************************!*\
  !*** ./src/content/templates/tooltip/domain.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domainElement = (report, settings) => {
  const links = [];
  if (settings.domain || settings.region) {
    const accession = report.uniprot[0];
    links.push({
      database: 'Pfam',
      href: `http://pfam.xfam.org/protein/${accession}`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domainElement);


/***/ }),

/***/ "./src/content/templates/tooltip/essentiality.js":
/*!*******************************************************!*\
  !*** ./src/content/templates/tooltip/essentiality.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const essentialityElement = (report, settings) => {
  const links = [];
  if (
    settings.species === 'Homo sapiens'
    && settings.essentiality
    && report.essentiality.cells
    && Object.keys(report.essentiality.cells).length
  ) {
    links.push({
      database: 'DepMap',
      href: `https://depmap.org/portal/gene/${report.essentiality.sourceSymbol || report.gene}?tab=overview`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (essentialityElement);


/***/ }),

/***/ "./src/content/templates/tooltip/go.js":
/*!*********************************************!*\
  !*** ./src/content/templates/tooltip/go.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_go_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/go-url */ "./src/content/helpers/go-url.js");
/* harmony import */ var _helpers_go_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_go_url__WEBPACK_IMPORTED_MODULE_0__);


const goElement = (report, settings) => {
  const links = [];
  if (settings.go) {
    const url = _helpers_go_url__WEBPACK_IMPORTED_MODULE_0___default()(report, settings);
    if (url) {
      links.push({
        database: 'AmiGO',
        href: url,
      });
    }
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (goElement);


/***/ }),

/***/ "./src/content/templates/tooltip/hpa.js":
/*!**********************************************!*\
  !*** ./src/content/templates/tooltip/hpa.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const hpaElement = (report, settings) => {
  const links = [];
  if (
    settings.species === 'Homo sapiens'
    && report['ensembl-gene'][0]
    && (
      settings.rna_expression
      || (
        settings.localization
        && settings.localization_hpa
      )
    )
  ) {
    links.push({
      database: 'Protein Atlas',
      href: `https://www.proteinatlas.org/${report['ensembl-gene'][0]}/cell`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hpaElement);


/***/ }),

/***/ "./src/content/templates/tooltip/interactor.js":
/*!*****************************************************!*\
  !*** ./src/content/templates/tooltip/interactor.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const interactorElement = (report, settings) => {
  const links = [];
  if (
    settings.interactors
    && report.biogrid
  ) {
    links.push({
      database: 'BioGRID',
      href: `https://thebiogrid.org/${report.biogrid}`,
    });
  }
  if (settings.interactors) {
    const accession = report.uniprot[0];
    links.push({
      database: 'IntAct',
      href: `https://www.ebi.ac.uk/intact/query/${accession}`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactorElement);


/***/ }),

/***/ "./src/content/templates/tooltip/link.js":
/*!***********************************************!*\
  !*** ./src/content/templates/tooltip/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allSpeciesLinks": () => (/* binding */ allSpeciesLinks),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const allSpeciesLinks = (report) => {
  const links = [];
  if (report['ensembl-gene'] && report['ensembl-gene'].length > 0) {
    const accession = report['ensembl-gene'][0];
    links.push({
      database: 'Ensembl',
      href: `https://ensembl.org/Gene/Summary?g=${accession}`,
    });
  }
  if (report.geneid) {
    links.push({
      database: 'NCBI',
      href: `https://www.ncbi.nlm.nih.gov/gene/?term=${report.geneid}`,
    });
  }
  if (report.uniprot && report.uniprot.length > 0) {
    const accession = report.uniprot[0];
    links.push({
      database: 'UniProt',
      href: `https://www.uniprot.org/uniprot/${accession}`,
    });
  }
  return links;
};

const linkElement = (report, settings) => {
  const links = [];
  if (settings.links) {
    links.push(...allSpeciesLinks(report));
    if (report.tair && settings.species === 'Arabidopsis thaliana') {
      links.push({
        database: 'TAIR',
        href: `https://www.arabidopsis.org/servlets/TairObject?accession=${report.tair}`,
      });
    }
    if (report.wormbase && settings.species === 'Caenorhabditis elegans') {
      links.push({
        database: 'WormBase',
        href: `https://wormbase.org/species/c_elegans/gene/${report.wormbase}`,
      });
    }
    if (report.zfin && settings.species === 'Danio rerio') {
      links.push({
        database: 'ZFIN',
        href: `https://zfin.org/${report.zfin}`,
      });
    }
    if (report.dictybase && settings.species === 'Dictyostelium discoideum') {
      links.push({
        database: 'dictyBase',
        href: `http://dictybase.org/gene/${report.dictybase}`,
      });
    }
    if (report.flybase && settings.species === 'Drosophila melanogaster') {
      links.push({
        database: 'FlyBase',
        href: `https://flybase.org/reports/${report.flybase}`,
      });
    }
    if (report.biocyc && settings.species === 'Escherichia coli (K12)') {
      links.push({
        database: 'EcoCyc',
        href: `https://ecocyc.org/gene?orgid=ECOLI&id=${report.biocyc}`,
      });
    }
    if (
      report.uniprot
      && report.uniprot.length > 0
      && settings.species === 'Homo sapiens'
    ) {
      const accession = report.uniprot[0];
      links.push({
        database: 'neXtProt',
        href: `https://www.nextprot.org/entry/NX_${accession}`,
      });
    }
    if (report.mgi && settings.species === 'Mus musculus') {
      links.push({
        database: 'MGI',
        href: `http://www.informatics.jax.org/marker/${report.mgi}`,
      });
    }
    if (report.sgd && settings.species === 'Saccharomyces cerevisiae') {
      links.push({
        database: 'SGD',
        href: `https://www.yeastgenome.org/locus/${report.sgd}`,
      });
    }
    if (report.pombase && settings.species === 'Schizosaccharomyces pombe') {
      links.push({
        database: 'PomBase',
        href: `https://www.pombase.org/gene/${report.pombase}`,
      });
    }
    if (report.xenbase && settings.species === 'Xenopus laevis') {
      links.push({
        database: 'Xenbase',
        href: `http://www.xenbase.org/gene/showgene.do?method=display&geneId=${report.xenbase}`,
      });
    }
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (linkElement);


/***/ }),

/***/ "./src/content/templates/tooltip/localization.js":
/*!*******************************************************!*\
  !*** ./src/content/templates/tooltip/localization.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./src/config.js");


const localizationElement = (report, settings) => {
  const links = [];
  if (
    settings.localization
    && _config__WEBPACK_IMPORTED_MODULE_0__.default.compartmentSpecies.includes(settings.species)
    && settings.localization_compartments
  ) {
    const { accession } = report.localization.compartments;
    const speciesID = _config__WEBPACK_IMPORTED_MODULE_0__.default.speciesID[settings.species];
    links.push({
      database: 'Compartments',
      href: `https://compartments.jensenlab.org/Entity?figures=subcell_cell_%&knowledge=10&textmining=10&experiments=10&predictions=10&type1=${speciesID}&type2=-22&id1=${accession}`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localizationElement);


/***/ }),

/***/ "./src/content/templates/tooltip/pathology.js":
/*!****************************************************!*\
  !*** ./src/content/templates/tooltip/pathology.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pathologyElement = (report, settings) => {
  const links = [];
  if (settings.pathology && report.mim) {
    links.push({
      database: 'OMIM',
      href: `https://www.omim.org/entry/${report.mim}`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathologyElement);


/***/ }),

/***/ "./src/content/templates/tooltip/proteomics-db.js":
/*!********************************************************!*\
  !*** ./src/content/templates/tooltip/proteomics-db.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const proteomicsDBElement = (report, settings) => {
  const links = [];
  if (
    settings.protein_expression
    && report.proteomicsdb
  ) {
    links.push({
      database: 'Proteomics DB',
      href: `https://www.proteomicsdb.org/proteomicsdb/#protein/proteinDetails/${report.proteomicsdb}/summary`,
    });
  }
  return links;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (proteomicsDBElement);


/***/ }),

/***/ "./src/content/templates/tooltip/tooltip.js":
/*!**************************************************!*\
  !*** ./src/content/templates/tooltip/tooltip.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/add-nodes */ "./src/content/helpers/add-nodes.js");
/* harmony import */ var _close_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../close-button */ "./src/content/templates/close-button.js");
/* harmony import */ var _create_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-nodes */ "./src/content/templates/tooltip/create-nodes.js");
/* harmony import */ var _no_result_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../no-result/tooltip */ "./src/content/templates/no-result/tooltip.js");
/* harmony import */ var _helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/remove-all-children */ "./src/content/helpers/remove-all-children.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state */ "./src/content/state.js");
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../select */ "./src/content/templates/select.js");
/* harmony import */ var _helpers_tooltip_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../helpers/tooltip-position */ "./src/content/helpers/tooltip-position.js");
/* harmony import */ var _style_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../style/tooltip */ "./src/content/style/tooltip.js");
/* harmony import */ var _listeners_close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../listeners/close */ "./src/content/listeners/close.js");
/* harmony import */ var _listeners_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../listeners/select */ "./src/content/listeners/select.js");
/* harmony import */ var _listeners_tooltip_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../listeners/tooltip-scroll */ "./src/content/listeners/tooltip-scroll.js");














const createTooltip = (event, error, reportIndex = 0) => {
  const result = _state__WEBPACK_IMPORTED_MODULE_5__.default.results[_state__WEBPACK_IMPORTED_MODULE_5__.default.results.length - 1];

  /* Use target element if it already exists, but remove listeners as they will
   ** be recreated. */
  let fadeClass = 'panel_animate-fade';
  let position;
  let tooltip;
  if (_state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot.getElementById('tooltip')) {
    tooltip = _state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot.getElementById('tooltip');
    if (reportIndex > 0) {
      position = {
        left: tooltip.style.left,
        top: tooltip.style.top,
      };
    }
    (0,_listeners_close__WEBPACK_IMPORTED_MODULE_9__.removeCloseListener)();
    (0,_listeners_select__WEBPACK_IMPORTED_MODULE_10__.removeSelectListener)();
    (0,_listeners_tooltip_scroll__WEBPACK_IMPORTED_MODULE_11__.removeTooltipScrollListener)();
    (0,_helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_4__.default)(_state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot);
    fadeClass = 'panel_animate-show';
  }

  // Create content.
  const nodes = error || result.length < 1
    ? (0,_no_result_tooltip__WEBPACK_IMPORTED_MODULE_3__.default)(error, fadeClass)
    : [(0,_create_nodes__WEBPACK_IMPORTED_MODULE_2__.default)(result, reportIndex, fadeClass)];
  (0,_helpers_add_nodes__WEBPACK_IMPORTED_MODULE_0__.default)(_state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot, [..._style_tooltip__WEBPACK_IMPORTED_MODULE_8__.default, ...nodes]);

  // Attach listeners
  tooltip = _state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot.getElementById('tooltip');
  (0,_close_button__WEBPACK_IMPORTED_MODULE_1__.default)(tooltip);
  (0,_select__WEBPACK_IMPORTED_MODULE_6__.default)(_state__WEBPACK_IMPORTED_MODULE_5__.default.shadowRoot);
  (0,_listeners_close__WEBPACK_IMPORTED_MODULE_9__.addCloseListener)();
  (0,_listeners_select__WEBPACK_IMPORTED_MODULE_10__.addSelectListener)(result);
  (0,_listeners_tooltip_scroll__WEBPACK_IMPORTED_MODULE_11__.addTooltipScrollListener)();

  // Set position, using previous position if the tooltip is already visible.
  position = (0,_helpers_tooltip_position__WEBPACK_IMPORTED_MODULE_7__.default)(event, tooltip, position);
  tooltip.style.left = `${position.x}px`;
  tooltip.style.top = `${position.y}px`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTooltip);


/***/ }),

/***/ "./src/content/transitions/fade-out.js":
/*!*********************************************!*\
  !*** ./src/content/transitions/fade-out.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/remove-all-children */ "./src/content/helpers/remove-all-children.js");


const fadeOut = (el, shadowRoot) => {
  el.classList.add('panel_animate-fadeout');
  window.setTimeout(() => {
    (0,_helpers_remove_all_children__WEBPACK_IMPORTED_MODULE_0__.default)(shadowRoot);
  }, 400);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fadeOut);


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
/*!******************************!*\
  !*** ./src/content/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _listeners_activate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listeners/activate */ "./src/content/listeners/activate.js");
/* harmony import */ var _listeners_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners/messages */ "./src/content/listeners/messages.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/content/state.js");




_state__WEBPACK_IMPORTED_MODULE_2__.default.createShadow();

// Initialize state and listeners
chrome.storage.local.get(null, (storage) => {
  _state__WEBPACK_IMPORTED_MODULE_2__.default.init(storage);
  (0,_listeners_activate__WEBPACK_IMPORTED_MODULE_0__.default)(storage.activate);
  (0,_listeners_messages__WEBPACK_IMPORTED_MODULE_1__.default)();
});

})();

/******/ })()
;
//# sourceMappingURL=content.js.map