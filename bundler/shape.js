/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/shape.js":
/*!**********************!*\
  !*** ./src/shape.js ***!
  \**********************/
/***/ (() => {

eval("//Create Circle\r\n  class Circle {\r\n    constructor(x, y, radius, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.radius = radius;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      context.beginPath();\r\n      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n      context.fillStyle = this.color;\r\n      context.fill();\r\n      context.closePath();\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\r\n//Create Rectangle\r\n  class Rectangle {\r\n    constructor(x, y, width, height, color) {\r\n      this.x = x;\r\n      this.y = y;\r\n      this.width = width;\r\n      this.height = height;\r\n      this.color = color;\r\n    }\r\n    draw() {\r\n      context.fillStyle = this.color;\r\n      context.fillRect(this.x, this.y, this.width, this.height);\r\n    }\r\n    update() {\r\n      this.draw();\r\n    }\r\n  }\n\n//# sourceURL=webpack://canvasbasic/./src/shape.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/shape.js"]();
/******/ 	
/******/ })()
;