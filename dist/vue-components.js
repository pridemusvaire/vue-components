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
	
	var _Panel = __webpack_require__(50);
	
	var Panel = _interopRequireWildcard(_Panel);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	module.exports = {
	    Alert: Alert,
	    Breadcrumb: Breadcrumb,
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
	  console.warn("[vue-loader] src/components/Alert/Alert.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Alert/Alert.vue"
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
	exports.push([module.id, ".Alert {\n  border-radius: 0.375rem;\n  border: 1px solid #000;\n  display: block;\n  margin-top: 1rem;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n}\n.Alert:first-child {\n  margin-top: 0;\n}\n.Alert--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.Alert--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.Alert--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.Alert--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.Alert--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/src/components/Alert/Alert.styl","/./src/components/Alert/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Alert.styl"],"names":[],"mappings":"AAGA;ECYE,wBAAA;EDVA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,mBAAA;CEFD;AFGC;EACE,cAAA;CEDH;ADNC;EDSE,uBAAA;EACA,mBAAA;CEAH;ADVC;EDYE,uBAAA;EACA,mBAAA;CECH;ADdC;EDeE,0BAAA;EACA,sBAAA;CEEH;ADlBC;EDkBE,0BAAA;EACA,sBAAA;CEGH;ADtBC;EDqBE,0BAAA;EACA,sBAAA;CEIH","file":"Alert.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../assets/stylus/settings/variables.styl\"\n\n.Alert // alert\n  border-radius-all()\n  border: 1px solid $black\n  display: block\n  margin-top: 1rem\n  overflow: hidden\n  padding: 1rem\n  position: relative\n  &:first-child\n    margin-top: 0\n  +variant(primary) // alert--primary\n    background-color: $primary\n    border-color: $primary\n  +variant(success) // alert--success\n    background-color: $success_light\n    border-color: $success\n  +variant(danger) // alert--danger\n    background-color: $danger_light\n    border-color: $danger\n  +variant(warning) // alert--warning\n    background-color: $warning_light\n    border-color: $warning\n  +variant(info) // alert--info\n    background-color: $info_light\n    border-color: $info","has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n",".Alert {\n  border-radius: 0.375rem;\n  border: 1px solid #000;\n  display: block;\n  margin-top: 1rem;\n  overflow: hidden;\n  padding: 1rem;\n  position: relative;\n}\n.Alert:first-child {\n  margin-top: 0;\n}\n.Alert--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.Alert--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.Alert--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.Alert--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.Alert--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	         * The close button of the alert
	         */
	        closeButton: {
	            type: Object,
	            required: false
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
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
	         * whether there is a timer or not
	         *
	         * @returns {boolean}
	         */
	
	        hasTimer: function hasTimer() {
	            return !!this.timer;
	        },
	
	
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
	            return !!this.closeButton;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the breadcrumbs
	         *
	         * @returns {Array} The corrected class names
	         */
	        alertClass: function alertClass() {
	            return _CSSUtil2.default.blockClasses(this.block, this.variants);
	        }
	    },
	    methods: {
	
	        /**
	         * Method used to dismiss the alert.
	         * It will destroy the vm and clean it up.
	         */
	
	        dismissAlert: function dismissAlert() {
	            this.$destroy(true);
	        },
	
	
	        /**
	         * Method used to start the timer.
	         * When the timer is complete, it will dismiss the alert.
	         */
	        startTimer: function startTimer() {
	            setTimeout(this.dismissAlert, 5000);
	        }
	    },
	
	    ready: function ready() {
	        if (this.hasTimer) {
	            this.startTimer();
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
	    contextualTypes: ['danger', 'info', 'primary', 'success', 'warning'],
	
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
	  console.warn("[vue-loader] src/components/Alert/CloseButton/CloseButton.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Alert/CloseButton/CloseButton.vue"
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
	exports.push([module.id, ".Alert__close-button {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.Alert__close-button--primary {\n  color: #fff;\n}\n.Alert__close-button--success {\n  color: #080;\n}\n.Alert__close-button--danger {\n  color: #870000;\n}\n.Alert__close-button--warning {\n  color: #cca558;\n}\n.Alert__close-button--info {\n  color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/CloseButton/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/CloseButton/src/components/Alert/CloseButton/CloseButton.styl","/./src/components/Alert/CloseButton/CloseButton.styl"],"names":[],"mappings":"AACE;ECIE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;CCHH;AFHC;ECQI,YAAA;CCFL;AFNC;ECUI,YAAA;CCDL;AFTC;ECYI,eAAA;CCAL;AFZC;ECcI,eAAA;CCCL;AFfC;ECgBI,eAAA;CCEL","file":"CloseButton.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../../assets/stylus/settings/variables.styl\"\n\n.Alert\n  +has(close-button) // Alert__close-button\n    cursor: pointer\n    font-size: 1.5rem\n    font-weight: 600\n    line-height: 2rem\n    position: absolute\n    right: 1rem\n    top: .75rem\n    +variant(primary) // Alert__close-button--primary\n      color: $white\n    +variant(success) // Alert__close-button--success\n      color: $success_dark\n    +variant(danger) // Alert__close-button--danger\n      color: $danger_dark\n    +variant(warning) // Alert__close-button--warning\n      color: $warning_dark\n    +variant(info) // Alert__close-button--info\n      color: $info_dark",".Alert__close-button {\n  cursor: pointer;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 2rem;\n  position: absolute;\n  right: 1rem;\n  top: 0.75rem;\n}\n.Alert__close-button--primary {\n  color: #fff;\n}\n.Alert__close-button--success {\n  color: #080;\n}\n.Alert__close-button--danger {\n  color: #870000;\n}\n.Alert__close-button--warning {\n  color: #cca558;\n}\n.Alert__close-button--info {\n  color: #5a93cc;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	         * The function to close the alert
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
	    }
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<span\n        :class=\"closeButtonClass\"\n        @click.prevent=\"closeFunction\">\n\t\t&times;\n</span>";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Alert/Message/Message.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Alert/Message/Message.vue"
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
	exports.push([module.id, ".Alert__message--primary {\n  color: #fff;\n}\n.Alert__message--success {\n  color: #080;\n}\n.Alert__message--danger {\n  color: #870000;\n}\n.Alert__message--warning {\n  color: #cca558;\n}\n.Alert__message--info {\n  color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Message/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Message/src/components/Alert/Message/Message.styl","/./src/components/Alert/Message/Message.styl"],"names":[],"mappings":"AAKE;ECCI,YAAA;CCJL;AFGC;ECGI,YAAA;CCHL;AFAC;ECKI,eAAA;CCFL;AFHC;ECOI,eAAA;CCDL;AFNC;ECSI,eAAA;CCAL","file":"Message.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../../assets/stylus/settings/variables.styl\"\n\n.Alert\n  +has(message) // Alert__message\n    +variant(primary) // Alert__message--primary\n      color: $white\n    +variant(success) // Alert__message--success\n      color: $success_dark\n    +variant(danger) // Alert__message--danger\n      color: $danger_dark\n    +variant(warning) // Alert__message--warning\n      color: $warning_dark\n    +variant(info) // Alert__message--info\n      color: $info_dark",".Alert__message--primary {\n  color: #fff;\n}\n.Alert__message--success {\n  color: #080;\n}\n.Alert__message--danger {\n  color: #870000;\n}\n.Alert__message--warning {\n  color: #cca558;\n}\n.Alert__message--info {\n  color: #5a93cc;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<span\n        :class=\"messageClass\">\n\t\t{{content}}\n</span>";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Alert/Timer/Timer.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Alert/Timer/Timer.vue"
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
	exports.push([module.id, ".Alert__timer {\n  height: 0.25rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  -webkit-animation: timer 5000ms infinite linear;\n          animation: timer 5000ms infinite linear;\n}\n.Alert__timer--primary {\n  background: #0af;\n}\n.Alert__timer--success {\n  background: #5c5;\n}\n.Alert__timer--danger {\n  background: #cc5656;\n}\n.Alert__timer--warning {\n  background: #cca558;\n}\n.Alert__timer--info {\n  background: #5a93cc;\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Timer/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Timer/src/components/Alert/Timer/Timer.styl","/./src/components/Alert/Timer/Timer.styl"],"names":[],"mappings":"AACE;ECaE,gBAAA;EACA,QAAA;EACA,mBAAA;EACA,OAAA;EACA,YAAA;EACA,gDAAA;UAAA,wCAAA;CCZH;AFFC;ECgBI,iBAAA;CCXL;AFLC;ECkBI,iBAAA;CCVL;AFRC;ECoBI,oBAAA;CCTL;AFXC;ECsBI,oBAAA;CCRL;AFdC;ECwBI,oBAAA;CCPL;ADnBe;EACd;IACE,YAAA;GC6BD;ED3BD;IACE,SAAA;GC6BD;CACF;ADnCe;EACd;IACE,YAAA;GC6CD;ED3CD;IACE,SAAA;GC6CD;CACF","file":"Timer.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../../assets/stylus/settings/variables.styl\"\n\n@keyframes timer {\n  0% {\n    width: 100%\n  }\n  100% {\n    width: 0\n  }\n}\n\n.Alert\n  +has(timer) // alert__timer\n    height: .25rem\n    left: 0\n    position: absolute\n    top: 0\n    width: 100%\n    animation: timer 5000ms infinite linear\n    +variant(primary) // alert__timer--primary\n      background: $primary\n    +variant(success) // alert__timer--success\n      background: $success\n    +variant(danger) // alert__timer--danger\n      background: $danger\n    +variant(warning) // alert__timer--warning\n      background: $warning\n    +variant(info) // alert__timer--info\n      background: $info",".Alert__timer {\n  height: 0.25rem;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  animation: timer 5000ms infinite linear;\n}\n.Alert__timer--primary {\n  background: #0af;\n}\n.Alert__timer--success {\n  background: #5c5;\n}\n.Alert__timer--danger {\n  background: #cc5656;\n}\n.Alert__timer--warning {\n  background: #cca558;\n}\n.Alert__timer--info {\n  background: #5a93cc;\n}\n@-moz-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-webkit-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-o-keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes timer {\n  0% {\n    width: 100%;\n  }\n  100% {\n    width: 0;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	            element: 'timer'
	        };
	    },
	
	
	    props: {
	        /**
	         * The message variants
	         */
	        variants: {
	            type: Array,
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
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
	  console.warn("[vue-loader] src/components/Alert/Title/Title.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Alert/Title/Title.vue"
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
	exports.push([module.id, ".Alert__title {\n  font-weight: 600;\n}\n.Alert__title--primary {\n  color: #fff;\n}\n.Alert__title--success {\n  color: #080;\n}\n.Alert__title--danger {\n  color: #870000;\n}\n.Alert__title--warning {\n  color: #cca558;\n}\n.Alert__title--info {\n  color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Alert/Title/src/assets/stylus/mixins/mixins.styl","/./src/components/Alert/Title/src/components/Alert/Title/Title.styl","/./src/components/Alert/Title/Title.styl"],"names":[],"mappings":"AACE;ECIE,iBAAA;CCHH;AFGC;ECEI,YAAA;CCFL;AFAC;ECII,YAAA;CCDL;AFHC;ECMI,eAAA;CCAL;AFNC;ECQI,eAAA;CCCL;AFTC;ECUI,eAAA;CCEL","file":"Title.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","@import \"./../../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../../assets/stylus/settings/variables.styl\"\n\n.Alert\n  +has(title) // Alert__title\n    font-weight: 600\n    +variant(primary) // Alert__title--primary\n      color: $white\n    +variant(success) // Alert__title--success\n      color: $success_dark\n    +variant(danger) // Alert__title--danger\n      color: $danger_dark\n    +variant(warning) // Alert__title--warning\n      color: $warning_dark\n    +variant(info) // Alert__title--info\n      color: $info_dark",".Alert__title {\n  font-weight: 600;\n}\n.Alert__title--primary {\n  color: #fff;\n}\n.Alert__title--success {\n  color: #080;\n}\n.Alert__title--danger {\n  color: #870000;\n}\n.Alert__title--warning {\n  color: #cca558;\n}\n.Alert__title--info {\n  color: #5a93cc;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
	    }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<span :class=\"titleClass\">\n\t\t{{content}}\n</span>";

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"alertClass\">\n\n    <alert-timer\n            v-if=\"hasTimer\"\n            :variants=\"timer.variants\"\n    ></alert-timer>\n\n    <alert-title\n            v-if=\"hasTitle\"\n            :variants=\"title.variants\"\n            :content=\"title.content\"\n    ></alert-title>\n\n    <alert-message\n            v-if=\"hasMessage\"\n            :variants=\"message.variants\"\n            :content=\"message.content\"\n    ></alert-message>\n\n    <alert-close-button\n            v-if=\"hasCloseButton\"\n            :variants=\"closeButton.variants\"\n            :close-function=\"dismissAlert\"\n    ></alert-close-button>\n\n</div>";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Breadcrumb.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Breadcrumb/Breadcrumb.vue"
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
	exports.push([module.id, ".Breadcrumb {\n  display: block;\n  list-style: none;\n  margin: 0;\n  margin-bottom: 1rem;\n  padding: 0;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/src/components/Breadcrumb/Breadcrumb.styl","/./src/components/Breadcrumb/Breadcrumb.styl"],"names":[],"mappings":"AAIA;EACE,eAAA;EACA,iBAAA;EACA,UAAA;EACA,oBAAA;EACA,WAAA;CCHD","file":"Breadcrumb.styl","sourcesContent":["// Imports\n@import \"./../../assets/stylus/settings/variables.styl\"\n@import \"./../../assets/stylus/mixins/mixins.styl\"\n\n.Breadcrumb\n  display: block\n  list-style: none\n  margin: 0\n  margin-bottom: 1rem\n  padding: 0",".Breadcrumb {\n  display: block;\n  list-style: none;\n  margin: 0;\n  margin-bottom: 1rem;\n  padding: 0;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	            return _CSSUtil2.default.blockClasses(this.block, this.variants);
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
	  console.warn("[vue-loader] src/components/Breadcrumb/Item/Item.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Breadcrumb/Item/Item.vue"
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
	exports.push([module.id, ".Breadcrumb__item {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__item:after {\n  content: '\\F238';\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-weight: 100;\n  vertical-align: middle;\n}\n.Breadcrumb__item:last-child:after {\n  display: none;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Item/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Item/src/components/Breadcrumb/Item/Item.styl","/./src/components/Breadcrumb/Item/Item.styl"],"names":[],"mappings":"AACE;ECKE,sBAAA;EACA,uBAAA;CCJH;ADKG;EACE,iBAAA;EACA,sBAAA;EACA,0DAAA;EACA,iBAAA;EACA,uBAAA;CCHL;ADIG;EACE,cAAA;CCFL","file":"Item.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","// Imports\n@import \"./../../../assets/stylus/settings/variables.styl\"\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\n\n.Breadcrumb\n  +has(item)\n    display: inline-block\n    vertical-align: middle\n    &:after\n      content: '\\f238'\n      display: inline-block\n      font: normal normal normal 24px / 1 \"Material Design Icons\"\n      font-weight: 100\n      vertical-align: middle\n    &:last-child:after\n      display: none",".Breadcrumb__item {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Breadcrumb__item:after {\n  content: '\\f238';\n  display: inline-block;\n  font: normal normal normal 24px/1 \"Material Design Icons\";\n  font-weight: 100;\n  vertical-align: middle;\n}\n.Breadcrumb__item:last-child:after {\n  display: none;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	         * The breadcrumb content
	         */
	        content: {
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
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
	  console.warn("[vue-loader] src/components/Breadcrumb/Content/Content.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Breadcrumb/Content/Content.vue"
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
	exports.push([module.id, ".Breadcrumb__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Content/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Content/src/components/Breadcrumb/Content/Content.styl","/./src/components/Breadcrumb/Content/Content.styl"],"names":[],"mappings":"AACE;ECKE,sBAAA;EACA,uBAAA;CCJH","file":"Content.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","// Imports\n@import \"./../../../assets/stylus/settings/variables.styl\"\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\n\n.Breadcrumb\n  +has(content)\n    display: inline-block\n    vertical-align: middle",".Breadcrumb__content {\n  display: inline-block;\n  vertical-align: middle;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	        text: {
	            type: String,
	            required: true
	        },
	
	        /**
	         * The variant styling
	         */
	        variants: {
	            type: Array,
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
	    }
	};

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"contentClass\">\n    {{text}}\n</div>";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(44)
	__vue_script__ = __webpack_require__(46)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Breadcrumb/Link/Link.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Breadcrumb/Link/Link.vue"
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
	exports.push([module.id, ".Breadcrumb__link {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  color: #192226;\n  display: inline-block;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.Breadcrumb__link:hover {\n  -webkit-transition: all 100ms ease-in-out;\n  transition: all 100ms ease-in-out;\n  color: #0af;\n}\n", "", {"version":3,"sources":["/./src/components/Breadcrumb/Link/src/assets/stylus/mixins/mixins.styl","/./src/components/Breadcrumb/Link/src/components/Breadcrumb/Link/Link.styl","/./src/components/Breadcrumb/Link/Link.styl"],"names":[],"mappings":"AACE;EAQA,0CAAA;EAAA,kCAAA;ECFE,eAAA;EACA,sBAAA;EACA,sBAAA;EACA,uBAAA;CCJH;ADKG;EDFF,0CAAA;EAAA,kCAAA;ECII,YAAA;CCHL","file":"Link.styl","sourcesContent":["has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n","// Imports\n@import \"./../../../assets/stylus/settings/variables.styl\"\n@import \"./../../../assets/stylus/mixins/mixins.styl\"\n\n.Breadcrumb\n  +has(link)\n    transition(100ms)\n    color: $dark_gray\n    display: inline-block\n    text-decoration: none\n    vertical-align: middle\n    &:hover\n      transition(100ms)\n      color: $primary",".Breadcrumb__link {\n  transition: all 100ms ease-in-out;\n  color: #192226;\n  display: inline-block;\n  text-decoration: none;\n  vertical-align: middle;\n}\n.Breadcrumb__link:hover {\n  transition: all 100ms ease-in-out;\n  color: #0af;\n}\n"],"sourceRoot":"webpack://"}]);
	
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
	
	var _Content2 = _interopRequireDefault(_Content);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    data: function data() {
	        return {
	            element: 'link'
	        };
	    },
	
	
	    props: {
	        /**
	         * The content
	         */
	        content: {
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
	        }
	    },
	
	    components: {
	        /**
	         * The breadcrumb content component
	         */
	        BreadcrumbContent: _Content2.default
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
	            if (!this.variants) {
	                this.variants = this.$parent.variants;
	            }
	
	            return _CSSUtil2.default.elementClasses(this.block, this.element, this.variants);
	        }
	    }
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = "<a\n        :class=\"linkClass\"\n        :href=\"to\"\n>\n    <breadcrumb-content\n            :text=\"content.text\"\n            :variants=\"content.variants\"\n    ></breadcrumb-content>\n</a>";

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"itemClass\">\n    <breadcrumb-link\n            v-if=\"hasLink\"\n            :content=\"content\"\n            :to=\"link.to\"\n            :variants=\"link.variants\"\n    >\n    </breadcrumb-link>\n\n    <breadcrumb-content\n            v-else\n            :text=\"content.text\"\n            :variants=\"content.variants\"\n    ></breadcrumb-content>\n</div>";

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "<ul :class=\"breadcrumbClass\">\n    <breadcrumb-item\n            v-for=\"item in items\"\n            :content=\"item.content\"\n            :link=\"item.link\"\n            :variants=\"item.variants\"\n    ></breadcrumb-item>\n</ul>";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(51)
	__vue_script__ = __webpack_require__(53)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Panel/Panel.vue: named exports in *.vue files are ignored.")}
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
	  var id = "/Users/p.c.vanmeijgaard/Projects/vivid-web/vue-components/src/components/Panel/Panel.vue"
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
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".panel {\n  display: block;\n}\n.panel__header {\n  border-radius: 0.375rem 0.375rem 0 0;\n  background-color: #eee;\n  border: 1px solid #aaa;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.panel__header--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.panel__header--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.panel__header--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.panel__header--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.panel__header--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.panel__title--primary {\n  color: #fff;\n}\n.panel__title--success {\n  color: #080;\n}\n.panel__title--danger {\n  color: #870000;\n}\n.panel__title--warning {\n  color: #cca558;\n}\n.panel__title--info {\n  color: #5a93cc;\n}\n.panel__body {\n  border: 1px solid #aaa;\n  padding: 0.75rem 1rem;\n}\n.panel__body--primary {\n  border-color: #0af;\n}\n.panel__body--success {\n  border-color: #5c5;\n}\n.panel__body--danger {\n  border-color: #cc5656;\n}\n.panel__body--warning {\n  border-color: #cca558;\n}\n.panel__body--info {\n  border-color: #5a93cc;\n}\n.panel__body--no-border-radius-top {\n  border-radius: 0 0 0.375rem 0.375rem;\n}\n.panel__body--no-border-radius-bottom {\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.panel__body--border-radius {\n  border-radius: 0.375rem;\n}\n.panel__footer {\n  border-radius: 0 0 0.375rem 0.375rem;\n  background-color: #f2f2f2;\n  border: 1px solid #aaa;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n.panel__footer--primary {\n  border-color: #0af;\n}\n.panel__footer--success {\n  border-color: #5c5;\n}\n.panel__footer--danger {\n  border-color: #cc5656;\n}\n.panel__footer--warning {\n  border-color: #cca558;\n}\n.panel__footer--info {\n  border-color: #5a93cc;\n}\n", "", {"version":3,"sources":["/./src/components/Panel/src/components/Panel/Panel.styl","/./src/components/Panel/Panel.styl","/./src/components/Panel/src/assets/stylus/mixins/mixins.styl"],"names":[],"mappings":"AAGA;EACE,eAAA;CCFD;ACDC;EAiBA,qCAAA;EFVE,uBAAA;EACA,uBAAA;EACA,oBAAA;EACA,sBAAA;CCFH;ACJC;EFQI,uBAAA;EACA,mBAAA;CCDL;ACRC;EFWI,uBAAA;EACA,mBAAA;CCAL;ACZC;EFcI,0BAAA;EACA,sBAAA;CCCL;AChBC;EFiBI,0BAAA;EACA,sBAAA;CCEL;ACpBC;EFoBI,0BAAA;EACA,sBAAA;CCGL;AC5BC;EF4BE,gBAAA;EACA,iBAAA;EACA,UAAA;EACA,WAAA;CCGH;AC9BC;EF6BI,YAAA;CCIL;ACjCC;EF+BI,YAAA;CCKL;ACpCC;EFiCI,eAAA;CCML;ACvCC;EFmCI,eAAA;CCOL;AC1CC;EFqCI,eAAA;CCQL;ACjDC;EF4CE,uBAAA;EACA,sBAAA;CCQH;ACjDC;EF2CI,mBAAA;CCSL;ACpDC;EF6CI,mBAAA;CCUL;ACvDC;EF+CI,sBAAA;CCWL;AC1DC;EFiDI,sBAAA;CCYL;AC7DC;EFmDI,sBAAA;CCaL;AChEC;EAmBA,qCAAA;CDgDD;ACnEC;EAaA,qCAAA;CDyDD;ACtEC;EAUA,wBAAA;CD+DD;AC7EC;EAuBA,qCAAA;EF0CE,0BAAA;EACA,uBAAA;EACA,iBAAA;EACA,sBAAA;CCgBH;AChFC;EFkEI,mBAAA;CCiBL;ACnFC;EFoEI,mBAAA;CCkBL;ACtFC;EFsEI,sBAAA;CCmBL;ACzFC;EFwEI,sBAAA;CCoBL;AC5FC;EF0EI,sBAAA;CCqBL","file":"Panel.styl","sourcesContent":["@import \"./../../assets/stylus/mixins/mixins.styl\"\n@import \"./../../assets/stylus/settings/variables.styl\"\n\n.panel // panel\n  display: block\n\n  +has(header) // panel__header\n    border-radius-top()\n    background-color: #eee\n    border: 1px solid #aaa\n    border-bottom: none\n    padding: .75rem 1rem\n    +variant(primary) // panel__header--primary\n      background-color: #0af\n      border-color: #0af\n    +variant(success) // panel__header--success\n      background-color: #efe\n      border-color: #5c5\n    +variant(danger) // panel__header--danger\n      background-color: #fff0f0\n      border-color: #cc5656\n    +variant(warning) // panel__header--warning\n      background-color: #fffbf2\n      border-color: #cca558\n    +variant(info) // panel__header--info\n      background-color: #f2f9ff\n      border-color: #5a93cc\n\n  +has(title) // panel__title\n    font-size: 1rem\n    font-weight: 400\n    margin: 0\n    padding: 0\n    +variant(primary) // panel__title--primary\n      color: #fff\n    +variant(success) // panel__title--success\n      color: #080\n    +variant(danger) // panel__title--danger\n      color: #870000\n    +variant(warning) // panel__title--warning\n      color: #cca558\n    +variant(info) // panel__title--info\n      color: #5a93cc\n\n  +has(body) // panel__body\n    border: 1px solid #aaa\n    padding: .75rem 1rem\n    +variant(primary) // panel__body--primary\n      border-color: #0af\n    +variant(success) // panel__body--success\n      border-color: #5c5\n    +variant(danger) // panel__body--danger\n      border-color: #cc5656\n    +variant(warning) // panel__body--warning\n      border-color: #cca558\n    +variant(info) // panel__body--info\n      border-color: #5a93cc\n    +variant(no-border-radius-top) // panel__body--no-border-radius-top\n      border-radius-bottom()\n    +variant(no-border-radius-bottom) // panel__body--no-border-radius-bottom\n      border-radius-top()\n    +variant(border-radius) // panel__body--border-radius\n      border-radius-all()\n\n  +has(footer) // panel__footer\n    border-radius-bottom()\n    background-color: #f2f2f2\n    border: 1px solid #aaa\n    border-top: none\n    padding: .75rem 1rem\n    +variant(primary) // panel__footer--primary\n      border-color: #0af\n    +variant(success) // panel__footer--success\n      border-color: #5c5\n    +variant(danger) // panel__footer--danger\n      border-color: #cc5656\n    +variant(warning) // panel__footer--warning\n      border-color: #cca558\n    +variant(info) // panel__footer--info\n      border-color: #5a93cc",".panel {\n  display: block;\n}\n.panel__header {\n  border-radius: 0.375rem 0.375rem 0 0;\n  background-color: #eee;\n  border: 1px solid #aaa;\n  border-bottom: none;\n  padding: 0.75rem 1rem;\n}\n.panel__header--primary {\n  background-color: #0af;\n  border-color: #0af;\n}\n.panel__header--success {\n  background-color: #efe;\n  border-color: #5c5;\n}\n.panel__header--danger {\n  background-color: #fff0f0;\n  border-color: #cc5656;\n}\n.panel__header--warning {\n  background-color: #fffbf2;\n  border-color: #cca558;\n}\n.panel__header--info {\n  background-color: #f2f9ff;\n  border-color: #5a93cc;\n}\n.panel__title {\n  font-size: 1rem;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n}\n.panel__title--primary {\n  color: #fff;\n}\n.panel__title--success {\n  color: #080;\n}\n.panel__title--danger {\n  color: #870000;\n}\n.panel__title--warning {\n  color: #cca558;\n}\n.panel__title--info {\n  color: #5a93cc;\n}\n.panel__body {\n  border: 1px solid #aaa;\n  padding: 0.75rem 1rem;\n}\n.panel__body--primary {\n  border-color: #0af;\n}\n.panel__body--success {\n  border-color: #5c5;\n}\n.panel__body--danger {\n  border-color: #cc5656;\n}\n.panel__body--warning {\n  border-color: #cca558;\n}\n.panel__body--info {\n  border-color: #5a93cc;\n}\n.panel__body--no-border-radius-top {\n  border-radius: 0 0 0.375rem 0.375rem;\n}\n.panel__body--no-border-radius-bottom {\n  border-radius: 0.375rem 0.375rem 0 0;\n}\n.panel__body--border-radius {\n  border-radius: 0.375rem;\n}\n.panel__footer {\n  border-radius: 0 0 0.375rem 0.375rem;\n  background-color: #f2f2f2;\n  border: 1px solid #aaa;\n  border-top: none;\n  padding: 0.75rem 1rem;\n}\n.panel__footer--primary {\n  border-color: #0af;\n}\n.panel__footer--success {\n  border-color: #5c5;\n}\n.panel__footer--danger {\n  border-color: #cc5656;\n}\n.panel__footer--warning {\n  border-color: #cca558;\n}\n.panel__footer--info {\n  border-color: #5a93cc;\n}\n","has($name)\n  / &{$element_separator}{$name}\n    {block}\n\nvariant($name)\n  / &{$modifier_separator}{$name}\n    {block}\n\ntransition($time)\n  transition: all $time ease-in-out\n\nborder-radius-none()\n  border-radius: 0\n\nborder-radius-all()\n  border-radius: $border_radius\n\nborder-radius-top()\n  border-radius: $border_radius $border_radius 0 0\n\nborder-radius-right()\n  border-radius: 0 $border_radius $border_radius 0\n\nborder-radius-bottom()\n  border-radius: 0 0 $border_radius $border_radius\n\nborder-radius-left()\n  border-radius: $border_radius 0 0 $border_radius\n"],"sourceRoot":"webpack://"}]);
	
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
	            block: 'panel'
	        };
	    },
	
	
	    props: ['style', 'header', 'title', 'body', 'footer', 'hasHeader', 'hasBody', 'hasFooter'],
	    components: {},
	    computed: {
	
	        /**
	         * Computed property which will output the
	         * corrected style for the header
	         *
	         * @returns {string} The corrected style
	         */
	
	        headerStyle: function headerStyle() {
	            if (this.header) {
	                return this.header.style || this.style;
	            }
	
	            return this.style;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected style for the title
	         *
	         * @returns {string} The corrected style
	         */
	        titleStyle: function titleStyle() {
	            if (this.title) {
	                return this.title.style || this.style;
	            }
	
	            return this.style;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected style for the body
	         *
	         * @returns {string} The corrected style
	         */
	        bodyStyle: function bodyStyle() {
	            if (this.body) {
	                return this.body.style || this.style;
	            }
	
	            return this.style;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected style for the footer
	         *
	         * @returns {string} The corrected style
	         */
	        footerStyle: function footerStyle() {
	            if (this.footer) {
	                return this.footer.style || this.style;
	            }
	
	            return this.style;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the panel
	         *
	         * @returns {Array} The corrected class name
	         */
	        panelClass: function panelClass() {
	            var classNames = [];
	            var contextualClass = _CSSUtil2.default.contextualClass(this.block, this.style);
	
	            classNames.push(this.block);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the header
	         *
	         * @returns {Array} The corrected class name
	         */
	        headerClass: function headerClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'header');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.headerStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the title
	         *
	         * @returns {Array} The corrected class name
	         */
	        titleClass: function titleClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'title');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.titleStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the body
	         *
	         * @returns {Array} The corrected class name
	         */
	        bodyClass: function bodyClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'body');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.bodyStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            if (!this.hasFooter && !this.hasHeader) {
	                classNames.push(_CSSUtil2.default.variant(element, 'border-radius'));
	            } else if (!this.hasFooter) {
	                classNames.push(_CSSUtil2.default.variant(element, 'no-border-radius-top'));
	            } else if (!this.hasHeader) {
	                classNames.push(_CSSUtil2.default.variant(element, 'no-border-radius-bottom'));
	            }
	
	            return classNames;
	        },
	
	
	        /**
	         * Computed property which will output the
	         * corrected class names for the header
	         *
	         * @returns {Array} The corrected class name
	         */
	        footerClass: function footerClass() {
	            var classNames = [];
	            var element = _CSSUtil2.default.has(this.block, 'footer');
	            var contextualClass = _CSSUtil2.default.contextualClass(element, this.footerStyle);
	
	            classNames.push(element);
	
	            if (contextualClass) {
	                classNames.push(contextualClass);
	            }
	
	            return classNames;
	        }
	    }
	};

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<div :class=\"panelClass\">\n\n    <div :class=\"headerClass\" v-if=\"hasHeader\">\n        <h4 :class=\"titleClass\">\n            <slot name=\"title\"></slot>\n        </h4>\n    </div>\n\n    <div :class=\"bodyClass\" v-if=\"hasBody\">\n        <slot name=\"body\"></slot>\n    </div>\n\n    <div :class=\"footerClass\" v-if=\"hasFooter\">\n        <slot name=\"footer\"></slot>\n    </div>\n\n</div>";

/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue-components.js.map