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

/***/ "./src/basic.js":
/*!**********************!*\
  !*** ./src/basic.js ***!
  \**********************/
/***/ (() => {

eval("const canvas = document.querySelector(\"#canvas\");\r\ncanvas.width = innerWidth;\r\ncanvas.height = innerHeight;\r\nconst context = canvas.getContext(\"2d\");\r\nconsole.log(getRandomArbitrary(5, 100));\r\n\r\n// resize\r\naddEventListener(\"resize\", function () {\r\n  canvas.width = innerWidth;\r\n  canvas.height = innerHeight;\r\n  context.fillStyle = \"#0C1C2A\";\r\n  context.fillRect(0, 0, canvas.width, canvas.height);\r\n});\r\n\r\n // Animate\r\n function animate() {\r\n    requestAnimationFrame(animate);\r\n    context.clearRect(0, 0, canvas.width, canvas.height);\r\n  }\r\n  animate();\n\n//# sourceURL=webpack://canvasbasic/./src/basic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/basic.js"]();
/******/ 	
/******/ })()
;