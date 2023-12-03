/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/MomcakePro-Bold.woff */ \"./src/font/MomcakePro-Bold.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/CocoGothic-Regular.woff */ \"./src/font/CocoGothic-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Momcake\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');\n  font-weight: 800;\n}\n\n@font-face {\n  font-family: \"Coco-Gothic\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n}\n\nbody {\n  background-image: linear-gradient(45deg,#000000, #06203a);\n  \n  color: white;\n  font-family: \"Coco-Gothic\";\n}\n\n#head {\n  margin: 5%;\n  padding-bottom: 20px;\n  \n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  \n  border-bottom: 3px solid #fefefedc;\n}\n\n#navtabs {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n#navtabs button {\n  border: none;\n  background: none;\n  \n  border-bottom: 2px #eaf2cd ;\n  border-bottom-style: none;\n  padding: 5px;\n  \n  font-family: 'Coco-Gothic';\n  color: white;\n  font-size: 1rem;\n}\n\n#head #restaurant-name {\n  font-size: 3rem;\n}\n\n.tabHead, #restaurant-name {\n  color: #cdf2ec;\n  font-family: \"Momcake\";\n}\n\n.tabHead {\n  \n  align-self: center;\n  font-size: 2rem;\n}\n\nsection {\n  margin: 5%;\n  padding: 15px;\n  \n  background-color: #00000033;\n  border-radius: 15px;\n}\n\n#home {\n  padding-top: 5px;\n  \n  display: none;\n  flex-direction: column;\n  \n  gap: 0.6rem;\n  \n  font-size: 0.7rem;\n}\n\n#home .para span {\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n#home .image {\n  align-self: center;\n  width: 70%;\n}\n\n#menu {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n}\n\n.menu-item{\n  padding: 10px;\n  \n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(3, auto-fill);\n  \n  gap: 10px;\n}\n\n\n.menu-item .item-img{\n  border-radius: 10px;\n  width: 100%;\n}\n\n.menu-item .item-img[data = 'left']{\n  grid-column: 1/2;\n  grid-row: 1/4;\n}\n\n.menu-item .item-img[data = 'right']{\n  justify-self: end;\n  grid-column: 2/3;\n  grid-row: 1/4;\n}\n\n.menu-item .item-name {\n  color: #eaf2cd;\n  font-size: 1.2rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n}\n\n.menu-item .item-info {\n  font-size: 0.7rem;\n}\n\n.menu-item .item-price {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n#contact {\n  padding-bottom: 30px;\n  \n  display: none;\n  flex-direction: column;\n  align-items: center;\n  \n  gap: 20px;\n}\n\n#contact .about {\n  padding: 10px;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  \n  font-size: 0.7rem;\n  text-align: center;\n}\n\n.times {\n  width: 80%;\n  \n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  \n  font-size: 0.75rem;\n}\n\n.times .t-slot {\n  display: flex;\n}\n\n.t-slot span {\n  width: 100%;\n  text-align: center;\n}\n\n.contacts {\n  padding: 5px;\n  \n  display: grid;\n  grid-auto-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr;\n  justify-items: center;\n  \n  column-gap: 2rem;\n  row-gap: 0.8rem;\n}\n\n.contacts > span {\n  width: 100%;\n  \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n\n.contacts .c-call {\n  grid-column: 1/3;\n}\n\n.contacts .c-email {\n  grid-column: 3/5;\n}\n\n.contacts .c-social {\n  width: 2.2em;\n}\n\n@media only screen and (min-width: 768px){\n  #home {\n    padding: 80px;\n    padding-top: 30px;\n  }\n  \n  .items {\n    padding: 10px;\n    \n    display: grid;\n    grid-template-columns: repeat(2, 30%);\n    grid-auto-rows: 1fr;\n    justify-content: center;\n    \n    gap: 80px;\n  }\n  \n  .menu-item {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr repeat(3, 0.1fr);\n    width: 100%;\n  }\n  \n  .menu-item .item-img[data = 'left']{\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n  \n  .menu-item .item-img[data = 'right']{\n    grid-column: 1/2;\n    grid-row: 1/2;\n  }\n  \n  #contact .about {\n    font-size: 0.4rem;\n  }\n  \n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project-restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project-restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project-restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _png_call_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./png/call.png */ \"./src/png/call.png\");\n/* harmony import */ var _png_email_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./png/email.png */ \"./src/png/email.png\");\n/* harmony import */ var _png_facebook_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./png/facebook.png */ \"./src/png/facebook.png\");\n/* harmony import */ var _png_instagram_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./png/instagram.png */ \"./src/png/instagram.png\");\n/* harmony import */ var _png_twitter_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./png/twitter.png */ \"./src/png/twitter.png\");\n/* harmony import */ var _png_linkedin_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./png/linkedin.png */ \"./src/png/linkedin.png\");\n\n\n\n\n\n\n\n\nconst timeslots = [\n  {\n    days: 'Monday - Thursday',\n    time: '08:00 - 21:00',\n  },\n  {\n    days: 'Friday',\n    time: '08:00 - 20:00',\n  },\n  {\n    days: 'Saturday & Sunday',\n    time: '08:00 - 20:00',\n  },\n  {\n    days: 'Public Holidays',\n    time: '08:00 - 19:00',\n  },\n]\n\nfunction contact(a){\n  const header = document.createElement('span');\n        header.setAttribute('class', 'tabHead');\n        header.textContent = \"About Us\";\n        \n  const about = document.createElement('span');\n        about.setAttribute('class', 'about');\n        about.innerHTML = `\n        <p>\n      \"Since its inception in 2015, 'Savor Haven' has been a vibrant culinary haven nestled in the heart of our community. Co-founded by Chef Mia Rodriguez and Restaurateur Max Bennett, our restaurant was born from a shared vision to create a dining experience that marries innovation with tradition. Through the years, we've evolved into a cherished destination, drawing inspiration from local produce and global flavors to craft a menu that delights the senses.\n        </p>\n      <p>\n      At 'Savor Haven,' we prioritize quality and sustainability, sourcing fresh, seasonal ingredients from trusted local farmers and artisans. Our commitment to excellence extends beyond the kitchen—our warm and attentive staff ensures each guest feels welcomed and valued. We pride ourselves on creating an inviting atmosphere where friends and families gather to share moments, savor exceptional cuisine, and create lasting memories.\n      </p>\n      <p>\n      Driven by our passion for culinary artistry and community, 'Savor Haven' continues to be a place where every dish tells a story, and every visit leaves a lasting impression. Join us on this gastronomic journey where tradition meets innovation, and every bite is an invitation to indulge in the finest flavors.\"\n      </p>\n      `;\n        \n  const header2 = document.createElement('span');\n        header2.setAttribute('class', 'tabHead');\n        header2.textContent = \"Contact\";\n        \n  const times = document.createElement('div');\n        times.setAttribute('class', 'times');\n        \n    for(let t of timeslots){\n      \n      const timeslot = document.createElement('div');\n            timeslot.setAttribute('class', 't-slot');\n      \n        const day = document.createElement('span');\n              day.classList.add('day')\n        const time = document.createElement('span')\n              time.classList.add('time')\n        \n              day.textContent = t.days;\n              time.textContent = t.time;\n              \n      timeslot.appendChild(day);\n      timeslot.appendChild(time);\n      times.appendChild(timeslot);\n      \n    }\n    \n  const contacts = document.createElement('div');\n        contacts.setAttribute('class', 'contacts');\n        \n    const call = document.createElement('span');\n          call.setAttribute('class', 'c-call');\n          call.innerHTML = `\n          <img class=\"c-social\" src='${_png_call_png__WEBPACK_IMPORTED_MODULE_0__}'/> \n          <span>Call</span>`\n          \n    const email = document.createElement('span');\n          email.setAttribute('class', 'c-email');\n          email.innerHTML = `\n          <img class=\"c-social\" src='${_png_email_png__WEBPACK_IMPORTED_MODULE_1__}'/> \n          <span>Email</span>`\n          \n          \n    const fb = new Image();\n          fb.src = _png_facebook_png__WEBPACK_IMPORTED_MODULE_2__;\n          fb.setAttribute('class', 'c-social');\n    const insta = new Image();\n          insta.src = _png_instagram_png__WEBPACK_IMPORTED_MODULE_3__;\n          insta.setAttribute('class', 'c-social');\n    const twitter = new Image();\n          twitter.src = _png_twitter_png__WEBPACK_IMPORTED_MODULE_4__;\n          twitter.setAttribute('class', 'c-social');\n    const linkedin = new Image();\n          linkedin.src = _png_linkedin_png__WEBPACK_IMPORTED_MODULE_5__;\n          linkedin.setAttribute('class', 'c-social');\n    \n  contacts.appendChild(call);\n  contacts.appendChild(email);\n  contacts.appendChild(fb);\n  contacts.appendChild(insta);\n  contacts.appendChild(twitter);\n  contacts.appendChild(linkedin);\n  \n  a.appendChild(header);\n  a.appendChild(about);\n  a.appendChild(header2);\n  a.appendChild(times);\n  a.appendChild(contacts);\n          \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://project-restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_images_table_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-images/table.jpg */ \"./src/home-images/table.jpg\");\n/* harmony import */ var _home_images_waitress_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-images/waitress.jpg */ \"./src/home-images/waitress.jpg\");\n\n\n\nfunction home(a) {\n  const header = document.createElement('span');\n        header.setAttribute('class', 'tabHead');\n        header.textContent = 'Home'\n        \n  const intro = document.createElement('p');\n        intro.setAttribute('class', 'para');\n        intro.innerHTML = `\n        <span >Welcome to \"Savor Haven\"</span> \n        <br/> Where culinary artistry meets a welcoming ambiance. \n        <br/> Nestled in the heart of the city, our restaurant offers a fusion of flavors crafted from locally sourced ingredients and inspired by global cuisine.`;\n        \n  const table = new Image();\n        table.src = _home_images_table_jpg__WEBPACK_IMPORTED_MODULE_0__;\n        table.setAttribute('class', 'image');\n        \n  const para2 = document.createElement('p');\n        para2.setAttribute('class', 'para');\n        para2.textContent = \"Step into an inviting space adorned with warm hues and contemporary design, where each detail, from the flickering candlelight to the soothing background music, is curated to elevate your dining experience.\";\n  \n  const waitress = new Image();\n        waitress.src = _home_images_waitress_jpg__WEBPACK_IMPORTED_MODULE_1__;\n        waitress.setAttribute('class', 'image');\n        \n  const para3 = document.createElement('p');\n        para3.setAttribute('class', 'para');\n        para3.textContent = `Our menu is a symphony of delectable options, catering to diverse palates and dietary preferences, ensuring an unforgettable culinary journey. Whether you're seeking an intimate dinner for two or a celebration with loved ones, our attentive staff is dedicated to providing impeccable service, making every visit to \"Savor Haven\" a feast for the senses and a cherished memory.`\n    \n    a.appendChild(header);\n    a.appendChild(intro);\n    a.appendChild(table);\n    a.appendChild(para2);\n    a.appendChild(waitress);\n    a.appendChild(para3);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://project-restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst restaurantPage = document.getElementById('restaurant-page');\n\nconst createHeader = (() => {\n  const header = document.createElement('header');\n        header.setAttribute('id', 'head');\n  \n  //HEAD\n  const restaurantName = document.createElement('span');\n        restaurantName.setAttribute('id', 'restaurant-name');\n        restaurantName.textContent = 'SAVOUR HAVEN';\n  \n  //TABS\n  const navtabs = document.createElement('div');\n        navtabs.setAttribute('id', 'navtabs');\n        \n    const homeTab = document.createElement('button');\n    const menuTab = document.createElement('button');\n    const contactTab = document.createElement('button');\n    \n          homeTab.setAttribute('name', 'home');\n          menuTab.setAttribute('name', 'menu');\n          contactTab.setAttribute('name', 'contact');\n    \n    homeTab.textContent = \"Home\";\n    menuTab.textContent = \"Menu\";\n    contactTab.textContent = \"Contact\";\n    \n    homeTab.style = \"border-bottom-style: solid\";\n  \n  navtabs.appendChild(homeTab);\n  navtabs.appendChild(menuTab);\n  navtabs.appendChild(contactTab);\n  \n  header.appendChild(restaurantName);\n  header.appendChild(navtabs);\n  \n  restaurantPage.appendChild(header)\n})()\nfunction createHome(){\n  const hometab = document.createElement('section');\n        hometab.setAttribute('id', 'home');\n  \n  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(hometab);\n  restaurantPage.appendChild(hometab);\n  \n  hometab.style.display = 'flex';\n}\nfunction createMenu(){\n  \n  const menutab = document.createElement('section');\n        menutab.setAttribute('id', 'menu');\n  \n  (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(menutab);\n  restaurantPage.appendChild(menutab)\n  \n  menutab.style.display = \"flex\";\n}\nfunction createContact(){\n  \n  const contacttab = document.createElement('section');\n        contacttab.setAttribute('id', 'contact');\n        \n  (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(contacttab)\n  restaurantPage.appendChild(contacttab)\n  \n  contacttab.style.display = \"flex\";\n}\n\nconst tabs = document.querySelectorAll('#navtabs button');\nlet currentTab = 'home';\n  \nfunction removeChild(){\n  restaurantPage.removeChild(restaurantPage.children[1])\n}\nfunction checkCurrentTab(b){\n    switch (b){\n      case 'home': \n        tabs[0].style = \"border-bottom-style: solid;\";\n        tabs[2].style = \"border-bottom-style: none;\";\n        tabs[1].style = \"border-bottom-style: none;\";\n        createHome();\n        break;\n      case 'menu':\n        tabs[1].style = \"border-bottom-style: solid;\";\n        tabs[0].style = \"border-bottom-style: none;\";\n        tabs[2].style = \"border-bottom-style: none;\";\n        createMenu();\n        break;\n      case 'contact':\n        tabs[2].style = \"border-bottom-style: solid;\";\n        tabs[1].style = \"border-bottom-style: none;\";\n        tabs[0].style = \"border-bottom-style: none;\";\n        createContact();\n        break;\n      default:\n      return false\n    }\n}\n\nconst switchTabs = (() =>{\n  \ncreateHome()\n\n    tabs.forEach((tab) =>{\n      tab.addEventListener('click', () =>{\n        removeChild(),\n        currentTab = tab.name,\n        checkCurrentTab(currentTab)\n        })\n      })\n})()\n\n\n//# sourceURL=webpack://project-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _item_images_item1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-images/item1.jpeg */ \"./src/item-images/item1.jpeg\");\n/* harmony import */ var _item_images_item2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item-images/item2.jpeg */ \"./src/item-images/item2.jpeg\");\n/* harmony import */ var _item_images_item3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-images/item3.jpeg */ \"./src/item-images/item3.jpeg\");\n/* harmony import */ var _item_images_item4_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-images/item4.jpeg */ \"./src/item-images/item4.jpeg\");\n/* harmony import */ var _item_images_item5_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item-images/item5.jpeg */ \"./src/item-images/item5.jpeg\");\n/* harmony import */ var _item_images_item6_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./item-images/item6.jpeg */ \"./src/item-images/item6.jpeg\");\n/* harmony import */ var _item_images_item7_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-images/item7.jpeg */ \"./src/item-images/item7.jpeg\");\n/* harmony import */ var _item_images_item8_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./item-images/item8.jpeg */ \"./src/item-images/item8.jpeg\");\n\n\n\n\n\n\n\n\n\n\n// Menu item objects\nconst menuItems = [\n  {\n    picsrc: _item_images_item1_jpeg__WEBPACK_IMPORTED_MODULE_0__,\n    name: \"Seared Scallops with Citrus Risotto\",\n    info: \"Pan-seared jumbo scallops served atop creamy citrus-infused risotto, garnished with fresh herbs.\",\n    price: \"R215\",\n    side: \"left\"\n  },\n  {\n    picsrc: _item_images_item2_jpeg__WEBPACK_IMPORTED_MODULE_1__,\n    name: \"Miso-Glazed Chilean Sea Bass\",\n    info: \"Grilled Chilean sea bass glazed with savory miso, accompanied by a medley of roasted seasonal vegetables.\",\n    price: \"R104\",\n    side: \"right\"\n  },\n  {\n    picsrc: _item_images_item3_jpeg__WEBPACK_IMPORTED_MODULE_2__,\n    name: \"Truffle Mushroom Ravioli\",\n    info: \"Handcrafted ravioli stuffed with wild mushrooms and drizzled with a luxurious truffle-infused cream sauce, finished with shaved parmesan.\",\n    price: \"R99\",\n    side: \"left\"\n  },\n  {\n    picsrc: _item_images_item4_jpeg__WEBPACK_IMPORTED_MODULE_3__,\n    name: \"Moroccan Spiced Lamb Tagine\",\n    info: \"Tender braised lamb infused with Moroccan spices, served with couscous and a medley of roasted vegetables.\",\n    price: \"R129\",\n    side: \"right\"\n  },\n  {\n    picsrc: _item_images_item5_jpeg__WEBPACK_IMPORTED_MODULE_4__,\n    name: \"Szechuan Crispy Tofu Stir-Fry\",\n    info: \"Crispy tofu cubes tossed in a zesty Szechuan sauce with colorful bell peppers, snow peas, and served over fragrant jasmine rice.\",\n    price: \"R164\",\n    side: \"left\"\n  },\n  {\n    picsrc: _item_images_item6_jpeg__WEBPACK_IMPORTED_MODULE_5__,\n    name: \"Prime Ribeye Steak\",\n    info: \"A succulent grilled ribeye steak seasoned to perfection, accompanied by garlic mashed potatoes and sauteed spinach.\",\n    price: \"R225\",\n    side: \"right\"\n  },\n  {\n    picsrc: _item_images_item7_jpeg__WEBPACK_IMPORTED_MODULE_6__,\n    name: \"Gourmet Veggie Pizza\",\n    info: \"A thin-crust pizza topped with a vibrant assortment of roasted vegetables, artisanal cheeses, and a drizzle of balsamic glaze.\",\n    price: \"R169\",\n    side: \"left\"\n  },\n  {\n    picsrc: _item_images_item8_jpeg__WEBPACK_IMPORTED_MODULE_7__,\n    name: \"Decadent Chocolate Lava Cake\",\n    info: \"A rich, warm chocolate cake with a molten center, paired with a scoop of vanilla bean ice cream and a raspberry coulis.\",\n    price: \"R108\",\n    side: \"right\"\n  }\n];\n\n\n\nfunction menu(a){\n  const header = document.createElement('span');\n        header.setAttribute('class', 'tabHead');\n        header.textContent = 'Menu';\n        \n  a.appendChild(header)\n  \n  const items = document.createElement('div');\n        items.setAttribute('class', 'items')\n  \n  for(let i of menuItems){\n    \n    const item = document.createElement('div');\n          item.setAttribute('class', 'menu-item');\n          \n      const itemImg = document.createElement('img');\n            itemImg.setAttribute('class', 'item-img');\n            itemImg.src = i.picsrc;\n            itemImg.setAttribute('data', `${i.side}`);\n            \n      const itemName = document.createElement('span');\n            itemName.setAttribute('class','item-name');\n            itemName.textContent = i.name;\n    \n      const itemInfo = document.createElement('span');\n            itemInfo.setAttribute('class','item-info');\n            itemInfo.textContent = i.info;\n    \n      const itemPrice = document.createElement('span');\n            itemPrice.setAttribute('class','item-price');\n            itemPrice.textContent = i.price;\n    \n    item.appendChild(itemImg)\n    item.appendChild(itemName)\n    item.appendChild(itemInfo)\n    item.appendChild(itemPrice)\n    items.appendChild(item)\n  }\n  \n  a.appendChild(items)\n  \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack://project-restaurantpage/./src/menu.js?");

/***/ }),

/***/ "./src/font/CocoGothic-Regular.woff":
/*!******************************************!*\
  !*** ./src/font/CocoGothic-Regular.woff ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9bb41a94aa3a07de0fdc.woff\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/font/CocoGothic-Regular.woff?");

/***/ }),

/***/ "./src/font/MomcakePro-Bold.woff":
/*!***************************************!*\
  !*** ./src/font/MomcakePro-Bold.woff ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b919e82cb9ea005bd07c.woff\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/font/MomcakePro-Bold.woff?");

/***/ }),

/***/ "./src/home-images/table.jpg":
/*!***********************************!*\
  !*** ./src/home-images/table.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"67922ab6174198daa177.jpg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/home-images/table.jpg?");

/***/ }),

/***/ "./src/home-images/waitress.jpg":
/*!**************************************!*\
  !*** ./src/home-images/waitress.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1d1baf31c0cd56fbd1a9.jpg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/home-images/waitress.jpg?");

/***/ }),

/***/ "./src/item-images/item1.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item1.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb09f5f51f96e6ee656a.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item1.jpeg?");

/***/ }),

/***/ "./src/item-images/item2.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"08026a8dfc8c070dd275.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item2.jpeg?");

/***/ }),

/***/ "./src/item-images/item3.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item3.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"13d3065834cb074527f8.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item3.jpeg?");

/***/ }),

/***/ "./src/item-images/item4.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item4.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2ede80f55e6cfa0bc14.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item4.jpeg?");

/***/ }),

/***/ "./src/item-images/item5.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item5.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"627e6c680dfc38af8224.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item5.jpeg?");

/***/ }),

/***/ "./src/item-images/item6.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item6.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3cc4445b590165f81fa9.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item6.jpeg?");

/***/ }),

/***/ "./src/item-images/item7.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item7.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0405192b82647e5b0d79.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item7.jpeg?");

/***/ }),

/***/ "./src/item-images/item8.jpeg":
/*!************************************!*\
  !*** ./src/item-images/item8.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"307058d88a588b7b52b3.jpeg\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/item-images/item8.jpeg?");

/***/ }),

/***/ "./src/png/call.png":
/*!**************************!*\
  !*** ./src/png/call.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9814ad5f6233d82f6ab4.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/call.png?");

/***/ }),

/***/ "./src/png/email.png":
/*!***************************!*\
  !*** ./src/png/email.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e823b7c0c57adaf73bb.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/email.png?");

/***/ }),

/***/ "./src/png/facebook.png":
/*!******************************!*\
  !*** ./src/png/facebook.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eab6abeda6e455921dbc.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/facebook.png?");

/***/ }),

/***/ "./src/png/instagram.png":
/*!*******************************!*\
  !*** ./src/png/instagram.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0ca9606bdfbab539a366.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/instagram.png?");

/***/ }),

/***/ "./src/png/linkedin.png":
/*!******************************!*\
  !*** ./src/png/linkedin.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b39463c75aa0d0871746.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/linkedin.png?");

/***/ }),

/***/ "./src/png/twitter.png":
/*!*****************************!*\
  !*** ./src/png/twitter.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5538a6c11d3360181f52.png\";\n\n//# sourceURL=webpack://project-restaurantpage/./src/png/twitter.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;