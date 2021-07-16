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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"context\": () => (/* binding */ context)\n/* harmony export */ });\n/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape.js */ \"./src/shape.js\");\n/* harmony import */ var _geometric_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometric-functions.js */ \"./src/geometric-functions.js\");\n\r\n\r\n\r\nconst canvas = document.querySelector(\"#canvas\");\r\ncanvas.width = innerWidth;\r\ncanvas.height = innerHeight;\r\nconst context = canvas.getContext(\"2d\");\r\n\r\n// resize\r\naddEventListener(\"resize\", function () {\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n});\r\nlet mouse = {\r\n  x: 0,\r\n  y: 0,\r\n}\r\naddEventListener(\"mousemove\", function (event) {\r\n  mouse.x = event.clientX;\r\n  mouse.y = event.clientY;\r\n  if((0,_geometric_functions_js__WEBPACK_IMPORTED_MODULE_1__.distance)(mouse.x, mouse.y, circle.x, circle.y) <= 30){\r\n    console.log(\"Collision\");\r\n    circle.color = \"black\";\r\n  } else {\r\n    circle.color = \"red\";\r\n  }\r\n});\r\nlet circle = new _shape_js__WEBPACK_IMPORTED_MODULE_0__.Circle(innerWidth/2, innerHeight/2, 30, \"red\");\r\n // Animate\r\n function animate() {\r\n    requestAnimationFrame(animate);\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n    circle.update();\r\n  }\r\n  animate();\r\n\r\n\n\n//# sourceURL=webpack://canvasbasic/./src/basic.js?");

/***/ }),

/***/ "./src/geometric-functions.js":
/*!************************************!*\
  !*** ./src/geometric-functions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomArbitrary\": () => (/* binding */ getRandomArbitrary),\n/* harmony export */   \"distance\": () => (/* binding */ distance)\n/* harmony export */ });\n//random\r\nfunction getRandomArbitrary(min, max) {\r\n    return Math.random() * (max - min) + min;\r\n  }\r\n//distance\r\n  function distance(x1, y1, x2, y2) {\r\n    let x = x1 - x2;\r\n    let y = y1 - y2;\r\n  \r\n    let d = Math.sqrt(x * x + y * y);\r\n  \r\n    // d is the distance\r\n    return d;\r\n  }\r\n  \n\n//# sourceURL=webpack://canvasbasic/./src/geometric-functions.js?");

/***/ }),

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Circle\": () => (/* binding */ Circle),\n/* harmony export */   \"Rectangle\": () => (/* binding */ Rectangle)\n/* harmony export */ });\n/* harmony import */ var _basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic */ \"./src/basic.js\");\n\r\n\r\n//Create Circle\r\n  class Circle {\r\n    constructor(x, y, radius, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.radius = radius;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.beginPath();\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = this.color;\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fill();\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.closePath();\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\r\n//Create Rectangle\r\n  class Rectangle {\r\n    constructor(x, y, width, height, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.width = width;\r\n      this.height = height;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillStyle = this.color;\r\n      _basic__WEBPACK_IMPORTED_MODULE_0__.context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://canvasbasic/./src/shape.js?");

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