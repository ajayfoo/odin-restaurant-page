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

/***/ "./src/aboutSetup.js":
/*!***************************!*\
  !*** ./src/aboutSetup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewAboutContent: () => (/* binding */ getNewAboutContent)\n/* harmony export */ });\nconst getNewAboutContent = () => {\n    const aboutContent = document.createElement('div');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'About';\n    const p = document.createElement('p');\n    p.textContent = 'This is the about page';\n    aboutContent.append(h1, p);\n    return aboutContent;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/aboutSetup.js?");

/***/ }),

/***/ "./src/contactSetup.js":
/*!*****************************!*\
  !*** ./src/contactSetup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewContactContent: () => (/* binding */ getNewContactContent)\n/* harmony export */ });\nconst getNewContactContent = () => {\n    const contactContent = document.createElement('div');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Contact';\n    const p = document.createElement('p');\n    p.textContent = 'This is the contact page';\n    contactContent.append(h1, p);\n    return contactContent;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/contactSetup.js?");

/***/ }),

/***/ "./src/homeSetup.js":
/*!**************************!*\
  !*** ./src/homeSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewHomeContent: () => (/* binding */ getNewHomeContent)\n/* harmony export */ });\nconst getNewHomeContent = () => {\n    const homeContent = document.createElement('div');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Magnificent Restaurant';\n    const img = document.createElement('img');\n    img.src = \"images/hero.jpg\";\n    img.alt = \"interior of the restaurant\";\n    const h2 = document.createElement('h2');\n    h2.textContent = \"What's special about us?\"\n    const p = document.createElement('p');\n    p.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente praesentium reprehenderit ab quo\n            perspiciatis deleniti earum ratione! Recusandae hic reiciendis accusantium consequuntur, repellendus\n            obcaecati possimus cumque praesentium sequi modi velit asperiores eligendi odit ullam.`;\n    homeContent.append(h1, img, h2, p);\n    return homeContent;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/homeSetup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeSetup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeSetup */ \"./src/homeSetup.js\");\n/* harmony import */ var _menuSetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuSetup */ \"./src/menuSetup.js\");\n/* harmony import */ var _contactSetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactSetup */ \"./src/contactSetup.js\");\n/* harmony import */ var _aboutSetup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutSetup */ \"./src/aboutSetup.js\");\n\n\n\n\n\nconst navBar = document.querySelector('body>header>nav');\nconst content = document.getElementById('content');\nconst homeContent = (0,_homeSetup__WEBPACK_IMPORTED_MODULE_0__.getNewHomeContent)();\nconst menuContent = (0,_menuSetup__WEBPACK_IMPORTED_MODULE_1__.getNewMenuContent)();\nconst contactContent = (0,_contactSetup__WEBPACK_IMPORTED_MODULE_2__.getNewContactContent)();\nconst aboutContent = (0,_aboutSetup__WEBPACK_IMPORTED_MODULE_3__.getNewAboutContent)();\n\nconst getContentFor = (tabText) => {\n    switch (tabText.toLowerCase()) {\n        case 'menu': return menuContent;\n        case 'contact': return contactContent;\n        case 'about': return aboutContent;\n        default: return homeContent;\n    }\n};\n\nconst setupEventListenersForTabs = () => {\n    for (const btn of navBar.children) {\n        btn.addEventListener('click', () => {\n            const newContentItem = getContentFor(btn.textContent);\n            content.replaceChildren(newContentItem);\n        });\n    }\n}\n\ncontent.replaceChildren(homeContent);\nsetupEventListenersForTabs();\n\n//# sourceURL=webpack://top-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menuSetup.js":
/*!**************************!*\
  !*** ./src/menuSetup.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getNewMenuContent: () => (/* binding */ getNewMenuContent)\n/* harmony export */ });\nconst getNewMenuContent = () => {\n    const menuContent = document.createElement('div');\n    const h1 = document.createElement('h1');\n    h1.textContent = 'Menu';\n    const p = document.createElement('p');\n    p.textContent = 'This is the menu page';\n    menuContent.append(h1, p);\n    return menuContent;\n};\n\n\n\n//# sourceURL=webpack://top-restaurant-page/./src/menuSetup.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;