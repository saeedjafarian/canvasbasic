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

/***/ "./src/basic.js":
/*!**********************!*\
  !*** ./src/basic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"context\": () => (/* binding */ context)\n/* harmony export */ });\n/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape.js */ \"./src/shape.js\");\n\r\n\r\nconst canvas = document.querySelector(\"#canvas\");\r\ncanvas.width = innerWidth;\r\ncanvas.height = innerHeight;\r\nconst context = canvas.getContext(\"2d\");\r\n\r\n// resize\r\naddEventListener(\"resize\", function () {\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n});\r\n\r\nlet circle = new _shape_js__WEBPACK_IMPORTED_MODULE_0__.Circle(innerWidth/2, innerHeight/2, 20, 'red');\r\n // Animate\r\n function animate() {\r\n    requestAnimationFrame(animate);\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n    circle.update();\r\n  }\r\n  animate();\r\n\r\n\n\n//# sourceURL=webpack://canvasbasic/./src/basic.js?");

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": () => (/* binding */ Circle),\n/* harmony export */   \"Rectangle\": () => (/* binding */ Rectangle)\n/* harmony export */ });\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ \"./src/basic.js\");\n\r\n//Create Circle\r\n  class Circle {\r\n    constructor(x, y, radius, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.radius = radius;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.beginPath();\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = this.color;\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fill();\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.closePath();\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\r\n//Create Rectangle\r\n  class Rectangle {\r\n    constructor(x, y, width, height, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.width = width;\r\n      this.height = height;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = this.color;\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://canvasbasic/./src/shape.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/basic.js");
/******/ 	
/******/ })()
;