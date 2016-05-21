(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueComponents"] = factory();
	else
		root["VueComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Alert = __webpack_require__(1);
	
	var Alert = _interopRequireWildcard(_Alert);
	
	var _Breadcrumb = __webpack_require__(30);
	
	var Breadcrumb = _interopRequireWildcard(_Breadcrumb);
	
	var _Button = __webpack_require__(50);
	
	var Button = _interopRequireWildcard(_Button);
	
	var _Dropdown = __webpack_require__(55);
	
	var Dropdown = _interopRequireWildcard(_Dropdown);
	
	var _Label = __webpack_require__(70);
	
	var Label = _interopRequireWildcard(_Label);
	
	var _Panel = __webpack_require__(75);
	
	var Panel = _interopRequireWildcard(_Panel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	module.exports = {
	    Alert: Alert,
	    Breadcrumb: Breadcrumb,
	    Button: Button,
	    Dropdown: Dropdown,
	    Label: Label,
	    Panel: Panel
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Alert\\Alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Alert\\Alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Alert.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Alert.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Alert {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  display: block;\n  font-weight: 300;\n  margin-top: 1rem;\n  padding: 1rem;\n}\n.Alert:first-child {\n  margin-top: 0;\n}\n.Alert--primary {\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.Alert--success {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n.Alert--danger {\n  background-color: #f44336;\n  border-color: #f44336;\n}\n.Alert--warning {\n  background-color: #ff9800;\n  border-color: #ff9800;\n}\n.Alert--info {\n  background-color: #03a9f4;\n  border-color: #03a9f4;\n}\n.Alert--dark {\n  color: #fff;\n  background-color: #37474f;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/src/components/Alert/Alert.styl","/./src/components/Alert/Alert.styl","/./src/components/Alert/src/assets/stylus/mixins/mixins.styl"],"names":[],"mappings":"AAGA;EACE,mBAAA;EACA,uBAAA;EACA,mEAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;CCFD;ADGC;EACE,cAAA;CCDH;ACNC;EFSE,0BAAA;EACA,sBAAA;CCAH;ACVC;EFYE,0BAAA;EACA,sBAAA;CCCH;ACdC;EFeE,0BAAA;EACA,sBAAA;CCEH;AClBC;EFkBE,0BAAA;EACA,sBAAA;CCGH;ACtBC;EFqBE,0BAAA;EACA,sBAAA;CCIH;AC1BC;EFwBE,YAAA;EACA,0BAAA;CCKH","file":"Alert.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n\r\n.Alert // Alert\r\n  position: relative\r\n  background-color: $white\r\n  box-shadow: $box_shadow_normal\r\n  display: block\r\n  font-weight: 300\r\n  margin-top: 1rem\r\n  padding: 1rem\r\n  &:first-child\r\n    margin-top: 0\r\n  +variant(primary) // Alert--primary\r\n    background-color: $primary\r\n    border-color: $primary\r\n  +variant(success) // Alert--success\r\n    background-color: $success\r\n    border-color: $success\r\n  +variant(danger) // Alert--danger\r\n    background-color: $danger\r\n    border-color: $danger\r\n  +variant(warning) // Alert--warning\r\n    background-color: $warning\r\n    border-color: $warning\r\n  +variant(info) // Alert--info\r\n    background-color: $info\r\n    border-color: $info\r\n  +variant(dark) // Alert--dark\r\n    color: $white\r\n    background-color: $gray",".Alert {\n  position: relative;\n  background-color: #fff;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  display: block;\n  font-weight: 300;\n  margin-top: 1rem;\n  padding: 1rem;\n}\n.Alert:first-child {\n  margin-top: 0;\n}\n.Alert--primary {\n  background-color: #2196f3;\n  border-color: #2196f3;\n}\n.Alert--success {\n  background-color: #4caf50;\n  border-color: #4caf50;\n}\n.Alert--danger {\n  background-color: #f44336;\n  border-color: #f44336;\n}\n.Alert--warning {\n  background-color: #ff9800;\n  border-color: #ff9800;\n}\n.Alert--info {\n  background-color: #03a9f4;\n  border-color: #03a9f4;\n}\n.Alert--dark {\n  color: #fff;\n  background-color: #37474f;\n}\n","has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _CloseButton = __webpack_require__(9);
	
	var AlertCloseButton = _interopRequireWildcard(_CloseButton);
	
	var _Message = __webpack_require__(14);
	
	var AlertMessage = _interopRequireWildcard(_Message);
	
	var _Timer = __webpack_require__(19);
	
	var AlertTimer = _interopRequireWildcard(_Timer);
	
	var _Title = __webpack_require__(24);
	
	var AlertTitle = _interopRequireWildcard(_Title);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'Alert'
	        };
	    },
	
	
	    props: {
	        /**
	         * The close button of the alert
	         */
	        closeButton: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The timer of the alert
	         */
	        timer: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The title of the alert
	         */
	        title: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The message of the alert
	         */
	        message: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The alert dismiss button
	         */
	        AlertCloseButton: AlertCloseButton,
	
	        /**
	         * The alert message
	         */
	        AlertMessage: AlertMessage,
	
	        /**
	         * The alert timer
	         */
	        AlertTimer: AlertTimer,
	
	        /**
	         * The alert timer
	         */
	        AlertTitle: AlertTitle
	    },
	
	    computed: {
	        /**
	         * Computed property which will output
	         * whether there is a title or not
	         *
	         * @returns {boolean} If there is a title
	         */
	
	        hasTitle: function hasTitle() {
	            return !!this.title;
	        },
	
	
	        /**
	         * Computed property which will output
	         * whether there is a message or not
	         *
	         * @returns {boolean} If there is a message
	         */
	        hasMessage: function hasMessage() {
	            return !!this.message;
	        },
	
	
	        /**
	         * Computed property which will output
	         * whether there is a close button or not
	         *
	         * @returns {boolean} If there is a close button
	         */
	        hasCloseButton: function hasCloseButton() {
	            if (!this.closeButton) {
	                return false;
	            }
	
	            return !!this.closeButton.enabled;
	        },
	
	
	        /**
	         * Computed property which will output
	         * whether there is a timer or not
	         *
	         * @returns {boolean} If there is a timer
	         */
	        hasTimer: function hasTimer() {
	            if (!this.timer) {
	                return false;
	            }
	
	            return this.timer.enabled;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the breadcrumbs
	         *
	         * @returns {Array} The corrected class names
	         */
	        alertClass: function alertClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        },
	
	
	        /**
	         * If the alerts can be closed
	         *
	         * @returns {boolean}
	         */
	        isClosable: function isClosable() {
	            return !!(this.hasTimer || this.hasCloseButton);
	        }
	    },
	
	    methods: {
	        /**
	         * Method used to close the alert.
	         * It will destroy the vm and clean it up.
	         */
	
	        closeAlert: function closeAlert() {
	            this.$destroy(true);
	        }
	    },
	
	    ready: function ready() {
	        // Check if the alert can be closed
	        if (!this.isClosable) {
	            console.warn('Warning: Cannot close the alert!');
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _config = __webpack_require__(8);
	
	var Config = _interopRequireWildcard(_config);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = {
	
	    /**
	     * The allowed contextual types
	     */
	    contextualTypes: ['danger', 'info', 'primary', 'success', 'warning', 'dark'],
	
	    /**
	     * The element separator
	     */
	    elementSeparator: function elementSeparator() {
	        if (Config.element_separator) {
	            return Config.element_separator;
	        }
	
	        return '__';
	    },
	
	
	    /**
	     * The modifier separator
	     */
	    modifierSeparator: function modifierSeparator() {
	        if (Config.modifier_separator) {
	            return Config.modifier_separator;
	        }
	
	        return '--';
	    },
	
	
	    /**
	     * Method which will return the corrected contextual class
	     *
	     * @param element The given element
	     * @param classType The given class type
	     * @returns {string} The corrected contextual class
	     */
	    contextualClass: function contextualClass(element, classType) {
	        var contextualClass;
	
	        if (classType && this.contextualTypes.indexOf(classType.toLowerCase()) !== -1) {
	            contextualClass = this.variant(element, classType);
	        }
	
	        return contextualClass;
	    },
	
	
	    /**
	     * Method which transform an element to a BEM-element
	     *
	     * @param block The name of the block
	     * @param element The name of the element
	     * @returns {string} The corrected class
	     */
	    has: function has(block, element) {
	        return block + this.elementSeparator() + element;
	    },
	
	
	    /**
	     * Method which transforms an item to a BEM-modifier
	     *
	     * @param item The name of the item
	     * @param variant The name of the variant
	     * @returns {string} The corrected class
	     */
	    variant: function variant(item, _variant) {
	        return item + this.modifierSeparator() + _variant;
	    },
	
	
	    /**
	     * Method which will transform an item to an array of BEM-modifiers
	     *
	     * @param item The name of the item
	     * @param variants The array variants
	     */
	    variants: function variants(item, _variants) {
	        var _this = this;
	
	        var tempArray = [];
	
	        _variants.forEach(function (variant) {
	            tempArray.push(_this.variant(item, variant));
	        });
	
	        return tempArray;
	    },
	
	
	    /**
	     *
	     * @param block
	     * @param variants
	     * @returns {Array}
	     */
	    blockClasses: function blockClasses(block, variants) {
	        var classNames = [];
	        var modifiers = [];
	
	        classNames.push(block);
	
	        if (variants) {
	            modifiers = this.variants(block, variants);
	            classNames = classNames.concat(modifiers);
	        }
	
	        return classNames;
	    },
	
	
	    /**
	     *
	     * @param block
	     * @param element
	     * @param variants
	     * @returns {Array}
	     */
	    elementClasses: function elementClasses(block, element, variants) {
	        var classNames = [];
	        var modifiers = [];
	        var elementClass = this.has(block, element);
	
	        classNames.push(elementClass);
	
	        if (variants) {
	            modifiers = this.variants(elementClass, variants);
	            classNames = classNames.concat(modifiers);
	        }
	
	        return classNames;
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
		"element_separator": "__",
		"modifier_separator": "--"
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Alert\\CloseButton\\CloseButton.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Alert\\CloseButton\\CloseButton.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./CloseButton.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./CloseButton.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Alert__close-button {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.Alert__close-button--primary {\n  color: #fff;\n}\n.Alert__close-button--success {\n  color: #fff;\n}\n.Alert__close-button--danger {\n  color: #fff;\n}\n.Alert__close-button--warning {\n  color: #fff;\n}\n.Alert__close-button--info {\n  color: #fff;\n}\n.Alert__close-button--dark {\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/CloseButton/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/CloseButton/src/components/Alert/CloseButton/CloseButton.styl","/./src/components/Alert/CloseButton/CloseButton.styl"],"names":[],"mappings":"AACE;ECIE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;CCHH;AFHC;ECQI,YAAA;CCFL;AFNC;ECUI,YAAA;CCDL;AFTC;ECYI,YAAA;CCAL;AFZC;ECcI,YAAA;CCCL;AFfC;ECgBI,YAAA;CCEL;AFlBC;ECkBI,YAAA;CCGL","file":"CloseButton.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Alert\r\n  +has(close-button) // Alert__close-button\r\n    cursor: pointer\r\n    font-size: 1.5rem\r\n    font-weight: 600\r\n    line-height: 2rem\r\n    position: absolute\r\n    right: 1rem\r\n    top: .75rem\r\n    +variant(primary) // Alert__close-button--primary\r\n      color: $white\r\n    +variant(success) // Alert__close-button--success\r\n      color: $white\r\n    +variant(danger) // Alert__close-button--danger\r\n      color: $white\r\n    +variant(warning) // Alert__close-button--warning\r\n      color: $white\r\n    +variant(info) // Alert__close-button--info\r\n      color: $white\r\n    +variant(dark) // Alert__close-button--dark\r\n      color: $white",".Alert__close-button {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.Alert__close-button--primary {\n  color: #fff;\n}\n.Alert__close-button--success {\n  color: #fff;\n}\n.Alert__close-button--danger {\n  color: #fff;\n}\n.Alert__close-button--warning {\n  color: #fff;\n}\n.Alert__close-button--info {\n  color: #fff;\n}\n.Alert__close-button--dark {\n  color: #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'close-button'
	        };
	    },
	
	
	    props: {
	        /**
	         * The function to close the notification
	         */
	        closeFunction: {
	            type: Function,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the close button
	         *
	         * @returns {Array} The corrected class names
	         */
	        closeButtonClass: function closeButtonClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<span\r\n        :class=\"closeButtonClass\"\r\n        @click.prevent=\"closeFunction\">\r\n\t\t&times;\r\n</span>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Alert\\Message\\Message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Alert\\Message\\Message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Message.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Message.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Alert__message {\n  display: block;\n}\n.Alert__message--primary {\n  color: #fff;\n}\n.Alert__message--success {\n  color: #fff;\n}\n.Alert__message--danger {\n  color: #fff;\n}\n.Alert__message--warning {\n  color: #fff;\n}\n.Alert__message--info {\n  color: #fff;\n}\n.Alert__message--dark {\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Message/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Message/src/components/Alert/Message/Message.styl","/./src/components/Alert/Message/Message.styl"],"names":[],"mappings":"AACE;ECIE,eAAA;CCHH;AFGC;ECEI,YAAA;CCFL;AFAC;ECII,YAAA;CCDL;AFHC;ECMI,YAAA;CCAL;AFNC;ECQI,YAAA;CCCL;AFTC;ECUI,YAAA;CCEL;AFZC;ECYI,YAAA;CCGL","file":"Message.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Alert\r\n  +has(message) // Alert__message\r\n    display: block\r\n    +variant(primary) // Alert__message--primary\r\n      color: $white\r\n    +variant(success) // Alert__message--success\r\n      color: $white\r\n    +variant(danger) // Alert__message--danger\r\n      color: $white\r\n    +variant(warning) // Alert__message--warning\r\n      color: $white\r\n    +variant(info) // Alert__message--info\r\n      color: $white\r\n    +variant(dark) // notification__message--dark\r\n      color: $white",".Alert__message {\n  display: block;\n}\n.Alert__message--primary {\n  color: #fff;\n}\n.Alert__message--success {\n  color: #fff;\n}\n.Alert__message--danger {\n  color: #fff;\n}\n.Alert__message--warning {\n  color: #fff;\n}\n.Alert__message--info {\n  color: #fff;\n}\n.Alert__message--dark {\n  color: #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'message'
	        };
	    },
	
	
	    props: {
	        /**
	         * The message content
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The message variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the message
	         *
	         * @returns {Array} The corrected class names
	         */
	        messageClass: function messageClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<span\r\n        :class=\"messageClass\">\r\n\t\t{{content}}\r\n</span>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Alert\\Timer\\Timer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Alert\\Timer\\Timer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Timer.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Timer.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Alert__timer {\n  -webkit-animation: timer 5000ms infinite linear;\n          animation: timer 5000ms infinite linear;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.25rem;\n}\n.Alert__timer--primary {\n  background: #0d47a1;\n}\n.Alert__timer--success {\n  background: #1b5e20;\n}\n.Alert__timer--danger {\n  background: #b71c1c;\n}\n.Alert__timer--warning {\n  background: #b36b00;\n}\n.Alert__timer--info {\n  background: #01579b;\n}\n.Alert__timer--dark {\n  background: #fff;\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Timer/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Timer/src/components/Alert/Timer/Timer.styl","/./src/components/Alert/Timer/Timer.styl"],"names":[],"mappings":"AACE;ECaE,gDAAA;UAAA,wCAAA;EACA,mBAAA;EACA,OAAA;EACA,QAAA;EACA,gBAAA;CCZH;AFDC;ECeI,oBAAA;CCXL;AFJC;ECiBI,oBAAA;CCVL;AFPC;ECmBI,oBAAA;CCTL;AFVC;ECqBI,oBAAA;CCRL;AFbC;ECuBI,oBAAA;CCPL;AFhBC;ECyBI,iBAAA;CCNL;ADrBe;EACd;IACE,YAAA;GC+BD;ED7BD;IACE,SAAA;GC+BD;CACF;ADrCe;EACd;IACE,YAAA;GC+CD;ED7CD;IACE,SAAA;GC+CD;CACF","file":"Timer.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n@keyframes timer {\r\n  0% {\r\n    width: 100%\r\n  }\r\n  100% {\r\n    width: 0\r\n  }\r\n}\r\n\r\n.Alert\r\n  +has(timer) // Alert__timer\r\n    animation: timer 5000ms infinite linear\r\n    position: absolute\r\n    top: 0\r\n    left: 0\r\n    height: .25rem\r\n    +variant(primary) // Alert__timer--primary\r\n      background: $primary_dark\r\n    +variant(success) // Alert__timer--success\r\n      background: $success_dark\r\n    +variant(danger) // Alert__timer--danger\r\n      background: $danger_dark\r\n    +variant(warning) // Alert__timer--warning\r\n      background: $warning_dark\r\n    +variant(info) // Alert__timer--info\r\n      background: $info_dark\r\n    +variant(dark) // Alert__timer--dark\r\n      background: $white",".Alert__timer {\n  animation: timer 5000ms infinite linear;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.25rem;\n}\n.Alert__timer--primary {\n  background: #0d47a1;\n}\n.Alert__timer--success {\n  background: #1b5e20;\n}\n.Alert__timer--danger {\n  background: #b71c1c;\n}\n.Alert__timer--warning {\n  background: #b36b00;\n}\n.Alert__timer--info {\n  background: #01579b;\n}\n.Alert__timer--dark {\n  background: #fff;\n}\n@-moz-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-o-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'timer',
	            timer: null
	        };
	    },
	
	
	    props: {
	        /**
	         * The function to close the notification
	         */
	        closeFunction: {
	            type: Function,
	            required: true
	        },
	
	        /**
	         * The message variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the timer
	         *
	         * @returns {Array} The corrected class names
	         */
	        timerClass: function timerClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    },
	
	    methods: {
	        /**
	         * Method used to start the timer
	         */
	
	        startTimer: function startTimer() {
	            this.timer = setTimeout(this.closeFunction, 5000);
	        }
	    },
	
	    ready: function ready() {
	        this.startTimer();
	    }
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"timerClass\"></div>";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(25)
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Alert\\Title\\Title.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Alert\\Title\\Title.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Title.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Title.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Alert__title {\n  display: block;\n  font-size: 1.125rem;\n  font-weight: 400;\n  margin: 0 0 0.5rem 0;\n  padding: 0;\n}\n.Alert__title--primary {\n  color: #fff;\n}\n.Alert__title--success {\n  color: #fff;\n}\n.Alert__title--danger {\n  color: #fff;\n}\n.Alert__title--warning {\n  color: #fff;\n}\n.Alert__title--info {\n  color: #fff;\n}\n.Alert__title--dark {\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Title/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Title/src/components/Alert/Title/Title.styl","/./src/components/Alert/Title/Title.styl"],"names":[],"mappings":"AACE;ECIE,eAAA;EACA,oBAAA;EACA,iBAAA;EACA,qBAAA;EACA,WAAA;CCHH;AFDC;ECMI,YAAA;CCFL;AFJC;ECQI,YAAA;CCDL;AFPC;ECUI,YAAA;CCAL;AFVC;ECYI,YAAA;CCCL;AFbC;ECcI,YAAA;CCEL;AFhBC;ECgBI,YAAA;CCGL","file":"Title.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Alert\r\n  +has(title) // Alert__title\r\n    display: block\r\n    font-size: 1.125rem\r\n    font-weight: 400\r\n    margin: 0 0 0.5rem 0\r\n    padding: 0\r\n    +variant(primary) // Alert__title--primary\r\n      color: $white\r\n    +variant(success) // Alert__title--success\r\n      color: $white\r\n    +variant(danger) // Alert__title--danger\r\n      color: $white\r\n    +variant(warning) // Alert__title--warning\r\n      color: $white\r\n    +variant(info) // Alert__title--info\r\n      color: $white\r\n    +variant(dark) // Alert__title--dark\r\n      color: $white",".Alert__title {\n  display: block;\n  font-size: 1.125rem;\n  font-weight: 400;\n  margin: 0 0 0.5rem 0;\n  padding: 0;\n}\n.Alert__title--primary {\n  color: #fff;\n}\n.Alert__title--success {\n  color: #fff;\n}\n.Alert__title--danger {\n  color: #fff;\n}\n.Alert__title--warning {\n  color: #fff;\n}\n.Alert__title--info {\n  color: #fff;\n}\n.Alert__title--dark {\n  color: #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'title'
	        };
	    },
	
	
	    props: {
	        /**
	         * The message content
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The message variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the title
	         *
	         * @returns {Array} The corrected class names
	         */
	        titleClass: function titleClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"titleClass\">\r\n\t\t{{content}}\r\n</span>";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"alertClass\">\r\n\r\n    <alert-timer\r\n            v-if=\"hasTimer\"\r\n            :variants=\"timer.variants\"\r\n            :contextual-style=\"timer.contextualStyle\"\r\n            :close-function=\"closeAlert\"\r\n    ></alert-timer>\r\n\r\n    <alert-title\r\n            v-if=\"hasTitle\"\r\n            :variants=\"title.variants\"\r\n            :contextual-style=\"title.contextualStyle\"\r\n            :content=\"title.content\"\r\n    ></alert-title>\r\n\r\n    <alert-message\r\n            v-if=\"hasMessage\"\r\n            :variants=\"message.variants\"\r\n            :contextual-style=\"message.contextualStyle\"\r\n            :content=\"message.content\"\r\n    ></alert-message>\r\n\r\n    <alert-close-button\r\n            v-if=\"hasCloseButton\"\r\n            :variants=\"closeButton.variants\"\r\n            :contextual-style=\"closeButton.contextualStyle\"\r\n            :close-function=\"closeAlert\"\r\n    ></alert-close-button>\r\n\r\n</div>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Breadcrumb\\Breadcrumb.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(49)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Breadcrumb\\Breadcrumb.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Breadcrumb.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Breadcrumb.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Breadcrumb {\n  display: block;\n  list-style: none;\n  margin: 0;\n  margin-bottom: 1rem;\n  padding: 0;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/src/components/Breadcrumb/Breadcrumb.styl","/./src/components/Breadcrumb/Breadcrumb.styl"],"names":[],"mappings":"AAIA;EACE,eAAA;EACA,iBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;CCHD","file":"Breadcrumb.styl","sourcesContent":["// Imports\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Breadcrumb // Breadcrumb\r\n  display: block\r\n  list-style: none\r\n  margin: 0\r\n  margin-bottom: 1rem\r\n  padding: 0",".Breadcrumb {\n  display: block;\n  list-style: none;\n  margin: 0;\n  margin-bottom: 1rem;\n  padding: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Item = __webpack_require__(34);
	
	var BreadcrumbItem = _interopRequireWildcard(_Item);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'Breadcrumb'
	        };
	    },
	
	
	    props: {
	        /**
	         * The breadcrumb items
	         */
	        items: {
	            type: Array,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The displayed breadcrumb item
	         */
	        BreadcrumbItem: BreadcrumbItem
	    },
	
	    computed: {
	        /**
	         * Computed property which will output the
	         * corrected class names for the breadcrumbs
	         *
	         * @returns {Array} The corrected class names
	         */
	
	        breadcrumbClass: function breadcrumbClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(35)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Breadcrumb\\Item\\Item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(48)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Breadcrumb\\Item\\Item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Item.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Item.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Breadcrumb__item {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__item:after {\n  content: '\\F238';\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-weight: 100;\n  vertical-align: middle;\n}\n.Breadcrumb__item:last-child:after {\n  display: none;\n}\n.Breadcrumb__item--primary {\n  color: #2196f3;\n}\n.Breadcrumb__item--success {\n  color: #4caf50;\n}\n.Breadcrumb__item--danger {\n  color: #f44336;\n}\n.Breadcrumb__item--warning {\n  color: #ff9800;\n}\n.Breadcrumb__item--info {\n  color: #03a9f4;\n}\n.Breadcrumb__item--dark {\n  color: #37474f;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Item/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Item/src/components/Breadcrumb/Item/Item.styl","/./src/components/Breadcrumb/Item/Item.styl"],"names":[],"mappings":"AACE;ECKE,sBAAA;EACA,uBAAA;CCJH;ADKG;EACE,iBAAA;EACA,sBAAA;EACA,0DAAA;EACA,iBAAA;EACA,uBAAA;CCHL;ADIG;EACE,cAAA;CCFL;AFRC;ECYI,eAAA;CCDL;AFXC;ECcI,eAAA;CCAL;AFdC;ECgBI,eAAA;CCCL;AFjBC;ECkBI,eAAA;CCEL;AFpBC;ECoBI,eAAA;CCGL;AFvBC;ECsBI,eAAA;CCIL","file":"Item.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Breadcrumb\r\n  +has(item)\r\n    display: inline-block\r\n    vertical-align: middle\r\n    &:after\r\n      content: '\\f238'\r\n      display: inline-block\r\n      font: normal normal normal 24px / 1 \"Material Design Icons\"\r\n      font-weight: 100\r\n      vertical-align: middle\r\n    &:last-child:after\r\n      display: none\r\n    +variant(primary) // Breadcrumb__item--primary\r\n      color: $primary\r\n    +variant(success) // Breadcrumb__item--success\r\n      color: $success\r\n    +variant(danger) // Breadcrumb__item--danger \r\n      color: $danger\r\n    +variant(warning) // Breadcrumb__item--warning\r\n      color: $warning\r\n    +variant(info) // Breadcrumb__item--info\r\n      color: $info\r\n    +variant(dark) // Breadcrumb__item--dark\r\n      color: $gray",".Breadcrumb__item {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__item:after {\n  content: '\\f238';\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-weight: 100;\n  vertical-align: middle;\n}\n.Breadcrumb__item:last-child:after {\n  display: none;\n}\n.Breadcrumb__item--primary {\n  color: #2196f3;\n}\n.Breadcrumb__item--success {\n  color: #4caf50;\n}\n.Breadcrumb__item--danger {\n  color: #f44336;\n}\n.Breadcrumb__item--warning {\n  color: #ff9800;\n}\n.Breadcrumb__item--info {\n  color: #03a9f4;\n}\n.Breadcrumb__item--dark {\n  color: #37474f;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Content = __webpack_require__(38);
	
	var BreadcrumbContent = _interopRequireWildcard(_Content);
	
	var _Link = __webpack_require__(43);
	
	var BreadcrumbLink = _interopRequireWildcard(_Link);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'item'
	        };
	    },
	
	
	    props: {
	        /**
	         * The breadcrumb body
	         */
	        body: {
	            type: Object,
	            required: true
	        },
	
	        /**
	         * The linked page
	         */
	        link: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The component for the breadcrumb content
	         */
	        BreadcrumbContent: BreadcrumbContent,
	
	        /**
	         * The component for the breadcrumb link
	         */
	        BreadcrumbLink: BreadcrumbLink
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * whether the item has a link or not
	         */
	        hasLink: function hasLink() {
	            return !!this.link;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the item
	         *
	         * @returns {Array} The corrected class names
	         */
	        itemClass: function itemClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(39)
	__vue_script__ = __webpack_require__(41)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Breadcrumb\\Content\\Content.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(42)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Breadcrumb\\Content\\Content.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Content.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Content.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Breadcrumb__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__content--primary {\n  color: #2196f3;\n}\n.Breadcrumb__content--success {\n  color: #4caf50;\n}\n.Breadcrumb__content--danger {\n  color: #f44336;\n}\n.Breadcrumb__content--warning {\n  color: #ff9800;\n}\n.Breadcrumb__content--info {\n  color: #03a9f4;\n}\n.Breadcrumb__content--dark {\n  color: #37474f;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Content/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Content/src/components/Breadcrumb/Content/Content.styl","/./src/components/Breadcrumb/Content/Content.styl"],"names":[],"mappings":"AACE;ECKE,sBAAA;EACA,uBAAA;CCJH;AFEC;ECII,eAAA;CCHL;AFDC;ECMI,eAAA;CCFL;AFJC;ECQI,eAAA;CCDL;AFPC;ECUI,eAAA;CCAL;AFVC;ECYI,eAAA;CCCL;AFbC;ECcI,eAAA;CCEL","file":"Content.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Breadcrumb\r\n  +has(content)\r\n    display: inline-block\r\n    vertical-align: middle\r\n    +variant(primary) // Breadcrumb__content--primary\r\n      color: $primary\r\n    +variant(success) // Breadcrumb__content--success\r\n      color: $success\r\n    +variant(danger) // Breadcrumb__content--danger \r\n      color: $danger\r\n    +variant(warning) // Breadcrumb__content--warning\r\n      color: $warning\r\n    +variant(info) // Breadcrumb__content--info\r\n      color: $info\r\n    +variant(dark) // Breadcrumb__content--dark\r\n      color: $gray",".Breadcrumb__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__content--primary {\n  color: #2196f3;\n}\n.Breadcrumb__content--success {\n  color: #4caf50;\n}\n.Breadcrumb__content--danger {\n  color: #f44336;\n}\n.Breadcrumb__content--warning {\n  color: #ff9800;\n}\n.Breadcrumb__content--info {\n  color: #03a9f4;\n}\n.Breadcrumb__content--dark {\n  color: #37474f;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'content'
	        };
	    },
	
	
	    props: {
	        /**
	         * The text to be displayed
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the content
	         *
	         * @returns {Array} The corrected class names
	         */
	        contentClass: function contentClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"contentClass\">\r\n    {{content}}\r\n</div>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Breadcrumb\\Link\\Link.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Breadcrumb\\Link\\Link.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(45);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Link.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Link.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Breadcrumb__link {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  color: #263238;\n  display: inline-block;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.Breadcrumb__link:hover {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  color: #2196f3;\n}\n.Breadcrumb__link--primary {\n  color: #2196f3;\n}\n.Breadcrumb__link--success {\n  color: #4caf50;\n}\n.Breadcrumb__link--danger {\n  color: #f44336;\n}\n.Breadcrumb__link--warning {\n  color: #ff9800;\n}\n.Breadcrumb__link--info {\n  color: #03a9f4;\n}\n.Breadcrumb__link--dark {\n  color: #37474f;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Link/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Link/src/components/Breadcrumb/Link/Link.styl","/./src/components/Breadcrumb/Link/Link.styl"],"names":[],"mappings":"AACE;EAQA,0CAAA;EAAA,kCAAA;ECFE,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,uBAAA;CCJH;ADKG;EDFF,0CAAA;EAAA,kCAAA;ECII,eAAA;CCHL;AFLC;ECUI,eAAA;CCFL;AFRC;ECYI,eAAA;CCDL;AFXC;ECcI,eAAA;CCAL;AFdC;ECgBI,eAAA;CCCL;AFjBC;ECkBI,eAAA;CCEL;AFpBC;ECoBI,eAAA;CCGL","file":"Link.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Breadcrumb\r\n  +has(link) // Breadcrumb__link\r\n    transition(100ms)\r\n    color: $dark_gray\r\n    display: inline-block\r\n    text-decoration: none\r\n    vertical-align: middle\r\n    &:hover\r\n      transition(100ms)\r\n      color: $primary\r\n    +variant(primary) // Breadcrumb__link--primary\r\n      color: $primary\r\n    +variant(success) // Breadcrumb__link--success\r\n      color: $success\r\n    +variant(danger) // Breadcrumb__link--danger\r\n      color: $danger\r\n    +variant(warning) // Breadcrumb__link--warning\r\n      color: $warning\r\n    +variant(info) // Breadcrumb__link--info\r\n      color: $info\r\n    +variant(dark) // Breadcrumb__link--dark\r\n      color: $gray",".Breadcrumb__link {\n  transition: all 100ms ease-in-out;\n  color: #263238;\n  display: inline-block;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.Breadcrumb__link:hover {\n  transition: all 100ms ease-in-out;\n  color: #2196f3;\n}\n.Breadcrumb__link--primary {\n  color: #2196f3;\n}\n.Breadcrumb__link--success {\n  color: #4caf50;\n}\n.Breadcrumb__link--danger {\n  color: #f44336;\n}\n.Breadcrumb__link--warning {\n  color: #ff9800;\n}\n.Breadcrumb__link--info {\n  color: #03a9f4;\n}\n.Breadcrumb__link--dark {\n  color: #37474f;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Content = __webpack_require__(38);
	
	var BreadcrumbContent = _interopRequireWildcard(_Content);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'link'
	        };
	    },
	
	
	    props: {
	        /**
	         * The body
	         */
	        body: {
	            type: Object,
	            required: true
	        },
	
	        /**
	         * The route
	         */
	        to: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The breadcrumb content component
	         */
	        BreadcrumbContent: BreadcrumbContent
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the link
	         *
	         * @returns {Array} The corrected class names
	         */
	        linkClass: function linkClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<a\r\n        :class=\"linkClass\"\r\n        :href=\"to\"\r\n>\r\n    <breadcrumb-content\r\n            :content=\"body.content\"\r\n            :variants=\"body.variants\"\r\n            :contextual-style=\"body.contextualStyle\"\r\n    ></breadcrumb-content>\r\n</a>";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"itemClass\">\r\n    <breadcrumb-link\r\n            v-if=\"hasLink\"\r\n            :body=\"body\"\r\n            :to=\"link.to\"\r\n            :variants=\"link.variants\"\r\n            :contextual-style=\"link.contextualStyle\"\r\n    ></breadcrumb-link>\r\n\r\n    <breadcrumb-content\r\n            v-else\r\n            :content=\"body.content\"\r\n            :variants=\"body.variants\"\r\n            :contextual-style=\"body.contextualStyle\"\r\n    ></breadcrumb-content>\r\n</div>";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"breadcrumbClass\">\r\n    <breadcrumb-item\r\n            v-for=\"item in items\"\r\n            :body=\"item.body\"\r\n            :link=\"item.link\"\r\n            :variants=\"item.variants\"\r\n            :contextual-style=\"item.contextualStyle\"\r\n    ></breadcrumb-item>\r\n</ul>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Button\\Button.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(54)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Button\\Button.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(52);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Button.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Button.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Button {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  color: #000;\n  display: inline-block;\n  font-weight: 400;\n  margin: 0;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  position: relative;\n}\n.Button:hover {\n  cursor: pointer;\n}\n.Button--primary {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Button--primary:hover {\n  background-color: #1e88e5;\n}\n.Button--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Button--success:hover {\n  background-color: #43a047;\n}\n.Button--danger {\n  background-color: #f44336;\n  color: #fff;\n}\n.Button--danger:hover {\n  background-color: #e53935;\n}\n.Button--warning {\n  background-color: #ff9800;\n  color: #fff;\n}\n.Button--warning:hover {\n  background-color: #fb8c00;\n}\n.Button--info {\n  background-color: #03a9f4;\n  color: #fff;\n}\n.Button--info:hover {\n  background-color: #039be5;\n}\n.Button--dark {\n  background-color: #37474f;\n  color: #fff;\n}\n.Button--dark:hover {\n  background-color: #263238;\n}\n.Button--block {\n  display: block;\n  text-align: center;\n}\n.Button--dropdown {\n  z-index: 999;\n}\n", "", {"version":3,"sources":["/./src/components/Button/src/components/Button/Button.styl","/./src/components/Button/src/assets/stylus/mixins/mixins.styl","/./src/components/Button/Button.styl"],"names":[],"mappings":"AAIA;ECKE,0CAAA;EAAA,kCAAA;EDHA,mEAAA;EACA,YAAA;EACA,sBAAA;EACA,iBAAA;EACA,UAAA;EACA,sBAAA;EACA,sBAAA;EACA,mBAAA;CEHD;AFIC;EACE,gBAAA;CEFH;ADRC;EDaE,0BAAA;EACA,YAAA;CEFH;AFGG;EACE,0BAAA;CEDL;ADfC;EDkBE,0BAAA;EACA,YAAA;CEAH;AFCG;EACE,0BAAA;CECL;ADtBC;EDuBE,0BAAA;EACA,YAAA;CEEH;AFDG;EACE,0BAAA;CEGL;AD7BC;ED4BE,0BAAA;EACA,YAAA;CEIH;AFHG;EACE,0BAAA;CEKL;ADpCC;EDiCE,0BAAA;EACA,YAAA;CEMH;AFLG;EACE,0BAAA;CEOL;AD3CC;EDsCE,0BAAA;EACA,YAAA;CEQH;AFPG;EACE,0BAAA;CESL;ADlDC;ED2CE,eAAA;EACA,mBAAA;CEUH;ADtDC;ED8CE,aAAA;CEWH","file":"Button.styl","sourcesContent":["// Imports\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Button // Button\r\n  transition(100ms)\r\n  box-shadow: $box_shadow_minimum\r\n  color: $black\r\n  display: inline-block\r\n  font-weight: 400\r\n  margin: 0\r\n  padding: .75rem 1rem\r\n  text-decoration: none\r\n  position: relative\r\n  &:hover\r\n    cursor: pointer\r\n\r\n  +variant(primary) // Button--primary\r\n    background-color: $primary\r\n    color: $white\r\n    &:hover\r\n      background-color: $primary_600\r\n  +variant(success) // Button--success\r\n    background-color: $success\r\n    color: $white\r\n    &:hover\r\n      background-color: $success_600\r\n  +variant(danger) // Button--danger\r\n    background-color: $danger\r\n    color: $white\r\n    &:hover\r\n      background-color: $danger_600\r\n  +variant(warning) // Button--warning\r\n    background-color: $warning\r\n    color: $white\r\n    &:hover\r\n      background-color: $warning_600\r\n  +variant(info) // Button--info\r\n    background-color: $info\r\n    color: $white\r\n    &:hover\r\n      background-color: $info_600\r\n  +variant(dark) // Button--dark\r\n    background-color: $gray\r\n    color: $white\r\n    &:hover\r\n      background-color: $dark_gray\r\n  +variant('block') // Button--block\r\n    display: block\r\n    text-align: center\r\n  +variant('dropdown')\r\n    z-index: 999","has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n",".Button {\n  transition: all 100ms ease-in-out;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  color: #000;\n  display: inline-block;\n  font-weight: 400;\n  margin: 0;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  position: relative;\n}\n.Button:hover {\n  cursor: pointer;\n}\n.Button--primary {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Button--primary:hover {\n  background-color: #1e88e5;\n}\n.Button--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Button--success:hover {\n  background-color: #43a047;\n}\n.Button--danger {\n  background-color: #f44336;\n  color: #fff;\n}\n.Button--danger:hover {\n  background-color: #e53935;\n}\n.Button--warning {\n  background-color: #ff9800;\n  color: #fff;\n}\n.Button--warning:hover {\n  background-color: #fb8c00;\n}\n.Button--info {\n  background-color: #03a9f4;\n  color: #fff;\n}\n.Button--info:hover {\n  background-color: #039be5;\n}\n.Button--dark {\n  background-color: #37474f;\n  color: #fff;\n}\n.Button--dark:hover {\n  background-color: #263238;\n}\n.Button--block {\n  display: block;\n  text-align: center;\n}\n.Button--dropdown {\n  z-index: 999;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'Button'
	        };
	    },
	
	
	    props: {
	        /**
	         * The content displayed inside the button
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The button link
	         */
	        link: {
	            type: Object,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * Computed property which will output if
	         * the button has a link
	         *
	         * @returns {boolean}
	         */
	
	        hasLink: function hasLink() {
	            return !!this.link.to && !this.link.action;
	        },
	
	
	        /**
	         * Computed property which will output if
	         * the button has an action
	         *
	         * @returns {boolean}
	         */
	        hasAction: function hasAction() {
	            return !!this.link.action && !this.link.to;
	        },
	
	
	        /**
	         * Computed property which will check if
	         * the button is valid
	         *
	         * @returns {boolean}
	         */
	        isValid: function isValid() {
	            return !(!this.hasAction && !this.hasLink);
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the button
	         *
	         * @returns {Array} The corrected class names
	         */
	        buttonClass: function buttonClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        }
	    },
	
	    created: function created() {
	        // Check if the button is valid
	        if (!this.isValid) {
	            console.warn('Warning: The button contains an action and a link. It cannot have both!');
	        }
	    }
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<a\r\n        v-if=\"hasLink\"\r\n        :class=\"buttonClass\"\r\n        :href=\"link.to\"\r\n>\r\n    {{content}}\r\n</a>\r\n\r\n<a\r\n        v-if=\"hasAction\"\r\n        :class=\"buttonClass\"\r\n        @click.prevent=\"link.action\"\r\n>\r\n    {{content}}\r\n</a>";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(56)
	__vue_script__ = __webpack_require__(58)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Dropdown\\Dropdown.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(69)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Dropdown\\Dropdown.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(57);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Dropdown.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Dropdown.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Dropdown {\n  display: inline-block;\n  position: relative;\n}\n.Dropdown--block {\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/components/Dropdown/src/components/Dropdown/Dropdown.styl","/./src/components/Dropdown/Dropdown.styl","/./src/components/Dropdown/src/assets/stylus/mixins/mixins.styl"],"names":[],"mappings":"AAIA;EACE,sBAAA;EACA,mBAAA;CCHD;ACEC;EFGE,eAAA;CCFH","file":"Dropdown.styl","sourcesContent":["// Imports\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Dropdown // Dropdown\r\n  display: inline-block\r\n  position: relative\r\n  +variant('block')\r\n    display: block",".Dropdown {\n  display: inline-block;\n  position: relative;\n}\n.Dropdown--block {\n  display: block;\n}\n","has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Button = __webpack_require__(50);
	
	var Button = _interopRequireWildcard(_Button);
	
	var _Menu = __webpack_require__(59);
	
	var DropdownMenu = _interopRequireWildcard(_Menu);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        var _this = this;
	
	        return {
	            block: 'Dropdown',
	            button: {
	                variants: ['block', 'dropdown'],
	                link: {
	                    action: function action() {
	                        _this.toggle();
	                    }
	                }
	            },
	            isCollapsed: false
	        };
	    },
	
	
	    props: {
	        /**
	         * The title of the dropdown
	         */
	        title: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The content displayed inside the button
	         */
	        items: {
	            type: Array,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        VButton: Button,
	
	        /**
	         * The dropdown menu
	         */
	        DropdownMenu: DropdownMenu
	    },
	
	    computed: {
	        /**
	         * Computed property which will output the
	         * corrected class names for the label
	         *
	         * @returns {Array} The corrected class names
	         */
	
	        dropdownClass: function dropdownClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        }
	    },
	
	    methods: {
	        toggle: function toggle() {
	            this.isCollapsed = !this.isCollapsed;
	        }
	    }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(60)
	__vue_script__ = __webpack_require__(62)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Dropdown\\Menu\\Menu.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(68)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Dropdown\\Menu\\Menu.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(61);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Menu.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Menu.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Dropdown__menu {\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  padding: 0;\n  margin: 0.5rem 0 0 0;\n  font-weight: 300;\n  z-index: 0;\n}\n.Dropdown__menu--expand-enter {\n  -webkit-animation: fadeInDown 0.5s ease;\n          animation: fadeInDown 0.5s ease;\n}\n.Dropdown__menu--expand-leave {\n  -webkit-animation: fadeOutUp 0.5s ease;\n          animation: fadeOutUp 0.5s ease;\n}\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3.1875rem, 0);\n            transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3.1875rem, 0);\n            transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3.1875rem, 0);\n            transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -3.1875rem, 0);\n            transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n", "", {"version":3,"sources":["/./src/components/Dropdown/Menu/src/assets/stylus/mixins/mixins.styl","/./src/components/Dropdown/Menu/src/components/Dropdown/Menu/Menu.styl","/./src/components/Dropdown/Menu/Menu.styl"],"names":[],"mappings":"AACE;EC4BE,uBAAA;EACA,mEAAA;EACA,WAAA;EACA,qBAAA;EACA,iBAAA;EACA,WAAA;CC3BH;AFFC;EC+BI,wCAAA;UAAA,gCAAA;CC1BL;AFLC;ECiCI,uCAAA;UAAA,+BAAA;CCzBL;ADToB;EACnB;IACE,WAAA;IACA,iDAAA;YAAA,yCAAA;GCqBD;EDlBD;IACE,WAAA;IACA,wBAAA;YAAA,gBAAA;GCoBD;CACF;AD7BoB;EACnB;IACE,WAAA;IACA,iDAAA;YAAA,yCAAA;GCyCD;EDtCD;IACE,WAAA;IACA,wBAAA;YAAA,gBAAA;GCwCD;CACF;ADrCmB;EAClB;IACE,WAAA;GCgDD;ED7CD;IACE,WAAA;IACA,iDAAA;YAAA,yCAAA;GC+CD;CACF;ADvDmB;EAClB;IACE,WAAA;GCkED;ED/DD;IACE,WAAA;IACA,iDAAA;YAAA,yCAAA;GCiED;CACF","file":"Menu.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0\r\n    transform: translate3d(0, -3.1875rem, 0)\r\n  }\r\n\r\n  to {\r\n    opacity: 1\r\n    transform: none\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1\r\n  }\r\n\r\n  to {\r\n    opacity: 0\r\n    transform: translate3d(0, -3.1875rem, 0)\r\n  }\r\n}\r\n\r\n.Dropdown // Dropdown\r\n  +has(menu) // Dropdown__menu\r\n    background-color: $white\r\n    box-shadow: $box_shadow_minimum\r\n    padding: 0\r\n    margin: .5rem 0 0 0\r\n    font-weight: 300\r\n    z-index: 0\r\n    +variant('expand-enter')\r\n      animation: fadeInDown .5s ease\r\n    +variant('expand-leave')\r\n      animation: fadeOutUp .5s ease",".Dropdown__menu {\n  background-color: #fff;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  padding: 0;\n  margin: 0.5rem 0 0 0;\n  font-weight: 300;\n  z-index: 0;\n}\n.Dropdown__menu--expand-enter {\n  animation: fadeInDown 0.5s ease;\n}\n.Dropdown__menu--expand-leave {\n  animation: fadeOutUp 0.5s ease;\n}\n@-moz-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-o-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@-moz-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n@-webkit-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n@-o-keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n    transform: translate3d(0, -3.1875rem, 0);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Item = __webpack_require__(63);
	
	var DropdownItem = _interopRequireWildcard(_Item);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'menu'
	        };
	    },
	
	
	    props: {
	
	        /**
	         * The items
	         */
	        items: {
	            type: Array,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        DropdownItem: DropdownItem
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the menu
	         *
	         * @returns {Array} The corrected class names
	         */
	        menuClass: function menuClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(64)
	__vue_script__ = __webpack_require__(66)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Dropdown\\Item\\Item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Dropdown\\Item\\Item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Item.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Item.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Dropdown__item {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  text-decoration: none;\n  list-style: none;\n  padding: 0.5rem 1rem;\n  margin: 0;\n}\n.Dropdown__item:hover {\n  background-color: #eceff1;\n}\n", "", {"version":3,"sources":["/./src/components/Dropdown/Item/src/assets/stylus/mixins/mixins.styl","/./src/components/Dropdown/Item/src/components/Dropdown/Item/Item.styl","/./src/components/Dropdown/Item/Item.styl"],"names":[],"mappings":"AACE;EAQA,0CAAA;EAAA,kCAAA;ECFE,sBAAA;EACA,iBAAA;EACA,qBAAA;EACA,UAAA;CCJH;ADKG;EACE,0BAAA;CCHL","file":"Item.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Dropdown // Dropdown\r\n  +has(item) // Dropdown__item\r\n    transition(100ms)\r\n    text-decoration: none\r\n    list-style: none\r\n    padding: .5rem 1rem\r\n    margin: 0\r\n    &:hover\r\n      background-color: $light_gray",".Dropdown__item {\n  transition: all 100ms ease-in-out;\n  text-decoration: none;\n  list-style: none;\n  padding: 0.5rem 1rem;\n  margin: 0;\n}\n.Dropdown__item:hover {\n  background-color: #eceff1;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'item'
	        };
	    },
	
	
	    props: {
	        /**
	         * The content to be displayed
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the item
	         *
	         * @returns {Array} The corrected class names
	         */
	        itemClass: function itemClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "<li :class=\"itemClass\">\r\n    {{content}}\r\n</li>";

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"menuClass\">\r\n    <dropdown-item\r\n        v-for=\"item in items\"\r\n        :content=\"item.content\"\r\n    ></dropdown-item>\r\n</ul>";

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"dropdownClass\">\r\n    <v-button\r\n            :content=\"title\"\r\n            :link=\"button.link\"\r\n            :contextual-style=\"contextualStyle\"\r\n            :variants=\"button.variants\"\r\n    ></v-button>\r\n\r\n    <dropdown-menu\r\n            v-if=\"isCollapsed\"\r\n            transition=\"Dropdown__menu--expand\"\r\n            :items=\"items\"\r\n            :contextual-style=\"contextualStyle\"\r\n            :variants=\"variants\"\r\n    ></dropdown-menu>\r\n</div>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(71)
	__vue_script__ = __webpack_require__(73)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Label\\Label.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(74)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Label\\Label.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Label.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Label.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Label {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  color: #000;\n  display: inline-block;\n  font-size: 0.875rem;\n  font-weight: 300;\n  margin: 0;\n  padding: 0.25rem;\n  text-decoration: none;\n}\n.Label--primary {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Label--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Label--danger {\n  background-color: #f44336;\n  color: #fff;\n}\n.Label--warning {\n  background-color: #ff9800;\n  color: #fff;\n}\n.Label--info {\n  background-color: #03a9f4;\n  color: #fff;\n}\n.Label--dark {\n  background-color: #37474f;\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Label/src/components/Label/Label.styl","/./src/components/Label/src/assets/stylus/mixins/mixins.styl","/./src/components/Label/Label.styl"],"names":[],"mappings":"AAIA;ECKE,0CAAA;EAAA,kCAAA;EDHA,YAAA;EACA,sBAAA;EACA,oBAAA;EACA,iBAAA;EACA,UAAA;EACA,iBAAA;EACA,sBAAA;CEHD;ADJC;EDSE,0BAAA;EACA,YAAA;CEFH;ADRC;EDYE,0BAAA;EACA,YAAA;CEDH;ADZC;EDeE,0BAAA;EACA,YAAA;CEAH;ADhBC;EDkBE,0BAAA;EACA,YAAA;CECH;ADpBC;EDqBE,0BAAA;EACA,YAAA;CEEH;ADxBC;EDwBE,0BAAA;EACA,YAAA;CEGH","file":"Label.styl","sourcesContent":["// Imports\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n\r\n.Label // Label\r\n  transition(100ms)\r\n  color: $black\r\n  display: inline-block\r\n  font-size: .875rem\r\n  font-weight: 300\r\n  margin: 0\r\n  padding: .25rem\r\n  text-decoration: none\r\n  +variant(primary) // Label--primary\r\n    background-color: $primary\r\n    color: $white\r\n  +variant(success) // Label--success\r\n    background-color: $success\r\n    color: $white\r\n  +variant(danger) // Label--danger\r\n    background-color: $danger\r\n    color: $white\r\n  +variant(warning) // Label--warning\r\n    background-color: $warning\r\n    color: $white\r\n  +variant(info) // Label--info\r\n    background-color: $info\r\n    color: $white\r\n  +variant(dark) // Label--dark\r\n    background-color: $gray\r\n    color: $white","has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n",".Label {\n  transition: all 100ms ease-in-out;\n  color: #000;\n  display: inline-block;\n  font-size: 0.875rem;\n  font-weight: 300;\n  margin: 0;\n  padding: 0.25rem;\n  text-decoration: none;\n}\n.Label--primary {\n  background-color: #2196f3;\n  color: #fff;\n}\n.Label--success {\n  background-color: #4caf50;\n  color: #fff;\n}\n.Label--danger {\n  background-color: #f44336;\n  color: #fff;\n}\n.Label--warning {\n  background-color: #ff9800;\n  color: #fff;\n}\n.Label--info {\n  background-color: #03a9f4;\n  color: #fff;\n}\n.Label--dark {\n  background-color: #37474f;\n  color: #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'Label'
	        };
	    },
	
	
	    props: {
	        /**
	         * The content displayed inside the button
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * Computed property which will output the
	         * corrected class names for the label
	         *
	         * @returns {Array} The corrected class names
	         */
	
	        labelClass: function labelClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"labelClass\">\r\n    {{content}}\r\n</span>";

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(76)
	__vue_script__ = __webpack_require__(78)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Panel\\Panel.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(99)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Panel\\Panel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Panel.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/stylus-loader/index.js!./Panel.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Panel {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  display: block;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/src/components/Panel/Panel.styl","/./src/components/Panel/Panel.styl"],"names":[],"mappings":"AAGA;EACE,mEAAA;EACA,eAAA;CCFD","file":"Panel.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../assets/stylus/settings/variables.styl\"\r\n\r\n.Panel // Panel\r\n  box-shadow: $box_shadow_minimum\r\n  display: block\r\n",".Panel {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n  display: block;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Body = __webpack_require__(79);
	
	var PanelBody = _interopRequireWildcard(_Body);
	
	var _Footer = __webpack_require__(84);
	
	var PanelFooter = _interopRequireWildcard(_Footer);
	
	var _Header = __webpack_require__(89);
	
	var PanelHeader = _interopRequireWildcard(_Header);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            block: 'Panel'
	        };
	    },
	
	
	    props: {
	        /**
	         * The header of the panel
	         */
	        header: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The body of the panel
	         */
	        body: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The footer of the panel
	         */
	        footer: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The contextual style
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        },
	
	        /**
	         * The variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The body of the panel
	         */
	        PanelBody: PanelBody,
	
	        /**
	         * The footer of the panel
	         */
	        PanelFooter: PanelFooter,
	
	        /**
	         * The header of the panel
	         */
	        PanelHeader: PanelHeader
	    },
	    computed: {
	        /**
	         * Computed property which will check whether
	         * there is a header
	         *
	         * @returns {boolean}
	         */
	
	        hasHeader: function hasHeader() {
	            return !!this.header;
	        },
	
	
	        /**
	         * Computed property which will check whether
	         * there is a body
	         *
	         * @returns {boolean}
	         */
	        hasBody: function hasBody() {
	            if (!this.body) {
	                return false;
	            }
	
	            return this.body.enabled;
	        },
	
	
	        /**
	         * Computed property which will check whether
	         * there is a footer
	         *
	         * @returns {boolean}
	         */
	        hasFooter: function hasFooter() {
	            if (!this.footer) {
	                return false;
	            }
	
	            return this.footer.enabled;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the panel
	         *
	         * @returns {Array} The corrected class name
	         */
	        panelClass: function panelClass() {
	            var classes = _CSSUtil2.default.blockClasses(this.block, this.variants);
	            classes.push(_CSSUtil2.default.contextualClass(this.block, this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(80)
	__vue_script__ = __webpack_require__(82)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Panel\\Body\\Body.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(83)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Panel\\Body\\Body.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(81);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Body.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Body.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Panel__body {\n  padding: 0.75rem 1rem;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/Body/src/assets/stylus/mixins/mixins.styl","/./src/components/Panel/Body/src/components/Panel/Body/Body.styl","/./src/components/Panel/Body/Body.styl"],"names":[],"mappings":"AACE;ECKE,sBAAA;CCJH","file":"Body.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Panel\r\n  +has(body) // Panel__body\r\n    padding: .75rem 1rem",".Panel__body {\n  padding: 0.75rem 1rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'body'
	        };
	    },
	
	
	    props: {
	        /**
	         * The body variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the body
	         *
	         * @returns {Array} The corrected class names
	         */
	        bodyClass: function bodyClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"bodyClass\">\r\n    <slot name=\"body\"></slot>\r\n</div>";

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(85)
	__vue_script__ = __webpack_require__(87)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Panel\\Footer\\Footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(88)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Panel\\Footer\\Footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Footer.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Footer.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Panel__footer {\n  background-color: #f2f2f2;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/Footer/src/assets/stylus/mixins/mixins.styl","/./src/components/Panel/Footer/src/components/Panel/Footer/Footer.styl","/./src/components/Panel/Footer/Footer.styl"],"names":[],"mappings":"AACE;ECKE,0BAAA;EACA,iBAAA;EACA,sBAAA;CCJH","file":"Footer.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Panel\r\n  +has(footer) // Panel__footer\r\n    background-color: #f2f2f2\r\n    border-top: none\r\n    padding: .75rem 1rem",".Panel__footer {\n  background-color: #f2f2f2;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'footer'
	        };
	    },
	
	
	    props: {
	        /**
	         * The footer variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the footer
	         *
	         * @returns {Array} The corrected class names
	         */
	        footerClass: function footerClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"footerClass\">\r\n    <slot name=\"footer\"></slot>\r\n</div>";

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(90)
	__vue_script__ = __webpack_require__(92)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Panel\\Header\\Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(98)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Panel\\Header\\Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Header.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Header.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Panel__header {\n  background-color: #eee;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.Panel__header--primary {\n  background-color: #2196f3;\n}\n.Panel__header--success {\n  background-color: #4caf50;\n}\n.Panel__header--danger {\n  background-color: #f44336;\n}\n.Panel__header--warning {\n  background-color: #ff9800;\n}\n.Panel__header--info {\n  background-color: #03a9f4;\n}\n.Panel__header--dark {\n  background-color: #37474f;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/Header/src/assets/stylus/mixins/mixins.styl","/./src/components/Panel/Header/src/components/Panel/Header/Header.styl","/./src/components/Panel/Header/Header.styl"],"names":[],"mappings":"AACE;ECKE,uBAAA;EACA,oBAAA;EACA,sBAAA;CCJH;AFCC;ECKI,0BAAA;CCHL;AFFC;ECOI,0BAAA;CCFL;AFLC;ECSI,0BAAA;CCDL;AFRC;ECWI,0BAAA;CCAL;AFXC;ECaI,0BAAA;CCCL;AFdC;ECeI,0BAAA;CCEL","file":"Header.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Panel\r\n  +has(header) // Panel__header\r\n    background-color: #eee\r\n    border-bottom: none\r\n    padding: .75rem 1rem\r\n    +variant(primary) // Panel__header--primary\r\n      background-color: $primary\r\n    +variant(success) // Panel__header--success\r\n      background-color: $success\r\n    +variant(danger) // Panel__header--danger\r\n      background-color: $danger\r\n    +variant(warning) // Panel__header--warning\r\n      background-color: $warning\r\n    +variant(info) // Panel__header--info\r\n      background-color: $info\r\n    +variant(dark) // Panel__header--dark\r\n      background-color: $gray",".Panel__header {\n  background-color: #eee;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.Panel__header--primary {\n  background-color: #2196f3;\n}\n.Panel__header--success {\n  background-color: #4caf50;\n}\n.Panel__header--danger {\n  background-color: #f44336;\n}\n.Panel__header--warning {\n  background-color: #ff9800;\n}\n.Panel__header--info {\n  background-color: #03a9f4;\n}\n.Panel__header--dark {\n  background-color: #37474f;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	var _Title = __webpack_require__(93);
	
	var PanelTitle = _interopRequireWildcard(_Title);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'header'
	        };
	    },
	
	
	    props: {
	        /**
	         * The title
	         */
	        title: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The header variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    components: {
	        /**
	         * The title of the panel
	         */
	        PanelTitle: PanelTitle
	    },
	
	    computed: {
	        /**
	         * Computed property which will check whether
	         * there is a title
	         *
	         * @returns {boolean}
	         */
	
	        hasTitle: function hasTitle() {
	            return !!this.title;
	        },
	
	
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the header
	         *
	         * @returns {Array} The corrected class names
	         */
	        headerClass: function headerClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(94)
	__vue_script__ = __webpack_require__(96)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\components\\Panel\\Title\\Title.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(97)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\Projects\\sandbox\\vue-components-sandbox\\vendor\\vue-components\\src\\components\\Panel\\Title\\Title.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Title.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../node_modules/stylus-loader/index.js!./Title.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".Panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.Panel__title--primary {\n  color: #fff;\n}\n.Panel__title--success {\n  color: #fff;\n}\n.Panel__title--danger {\n  color: #fff;\n}\n.Panel__title--warning {\n  color: #fff;\n}\n.Panel__title--info {\n  color: #fff;\n}\n.Panel__title--dark {\n  color: #fff;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/Title/src/assets/stylus/mixins/mixins.styl","/./src/components/Panel/Title/src/components/Panel/Title/Title.styl","/./src/components/Panel/Title/Title.styl"],"names":[],"mappings":"AACE;ECKE,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;CCJH;AFAC;ECMI,YAAA;CCHL;AFHC;ECQI,YAAA;CCFL;AFNC;ECUI,YAAA;CCDL;AFTC;ECYI,YAAA;CCAL;AFZC;ECcI,YAAA;CCCL;AFfC;ECgBI,YAAA;CCEL","file":"Title.styl","sourcesContent":["has($name)\r\n  / &{$element_separator}{$name}\r\n    {block}\r\n\r\nvariant($name)\r\n  / &{$modifier_separator}{$name}\r\n    {block}\r\n\r\ntransition($time)\r\n  transition: all $time ease-in-out\r\n\r\nborder-radius-none()\r\n  border-radius: 0\r\n\r\nborder-radius-all()\r\n  border-radius: $border_radius\r\n\r\nborder-radius-top()\r\n  border-radius: $border_radius $border_radius 0 0\r\n\r\nborder-radius-right()\r\n  border-radius: 0 $border_radius $border_radius 0\r\n\r\nborder-radius-bottom()\r\n  border-radius: 0 0 $border_radius $border_radius\r\n\r\nborder-radius-left()\r\n  border-radius: $border_radius 0 0 $border_radius\r\n","// Imports\r\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\r\n@import \"./../../../assets/stylus/settings/variables.styl\"\r\n\r\n.Panel\r\n  +has(title) // Panel__title\r\n    font-size: 1rem\r\n    font-weight: 400\r\n    margin: 0\r\n    padding: 0\r\n    +variant(primary) // Panel__title--primary\r\n      color: $white\r\n    +variant(success) // Panel__title--success\r\n      color: $white\r\n    +variant(danger) // Panel__title--danger\r\n      color: $white\r\n    +variant(warning) // Panel__title--warning\r\n      color: $white\r\n    +variant(info) // Panel__title--info\r\n      color: $white\r\n    +variant(dark) // Panel__title--dark\r\n      color: $white",".Panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.Panel__title--primary {\n  color: #fff;\n}\n.Panel__title--success {\n  color: #fff;\n}\n.Panel__title--danger {\n  color: #fff;\n}\n.Panel__title--warning {\n  color: #fff;\n}\n.Panel__title--info {\n  color: #fff;\n}\n.Panel__title--dark {\n  color: #fff;\n}\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _CSSUtil = __webpack_require__(7);
	
	var _CSSUtil2 = _interopRequireDefault(_CSSUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'title'
	        };
	    },
	
	
	    props: {
	        /**
	         * The content for the title
	         */
	        content: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The title variants
	         */
	        variants: {
	            type: Array,
	            required: false
	        },
	
	        /**
	         * The contextual styling
	         */
	        contextualStyle: {
	            type: String,
	            required: false
	        }
	    },
	
	    computed: {
	        /**
	         * The block name from the parent
	         *
	         * @returns {string}
	         */
	
	        block: function block() {
	            return this.$parent.block;
	        },
	
	
	        /**
	         * Computed property which will output
	         * the corrected class names for the title
	         *
	         * @returns {Array} The corrected class names
	         */
	        titleClass: function titleClass() {
	            var classes = _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	
	            if (!this.contextualStyle) {
	                this.contextualStyle = this.$parent.contextualStyle;
	            }
	
	            classes.push(_CSSUtil2.default.contextualClass(_CSSUtil2.default.has(this.block, this.element), this.contextualStyle));
	
	            return classes;
	        }
	    }
	};

/***/ },
/* 97 */
/***/ function(module, exports) {

	module.exports = "<h4 :class=\"titleClass\">\r\n    {{content}}\r\n</h4>";

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"headerClass\">\r\n    <panel-title\r\n            v-if=\"hasTitle\"\r\n            :variants=\"title.variants\"\r\n            :contextual-style=\"title.contextualStyle\"\r\n            :content=\"title.content\"\r\n    ></panel-title>\r\n</div>";

/***/ },
/* 99 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"panelClass\">\r\n\r\n    <panel-header\r\n            v-if=\"hasHeader\"\r\n            :title=\"header.title\"\r\n            :variants=\"header.variants\"\r\n            :contextual-style=\"header.contextualStyle\"\r\n    ></panel-header>\r\n\r\n    <panel-body\r\n            v-if=\"hasBody\"\r\n            :variants=\"body.variants\"\r\n            :contextual-style=\"body.contextualStyle\"\r\n    >\r\n        <slot name=\"body\" slot=\"body\"></slot>\r\n    </panel-body>\r\n\r\n    <panel-footer\r\n            v-if=\"hasFooter\"\r\n            :variants=\"footer.variants\"\r\n            :contextual-style=\"footer.contextualStyle\"\r\n    >\r\n        <slot name=\"footer\" slot=\"footer\"></slot>\r\n    </panel-footer>\r\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-components.js.map