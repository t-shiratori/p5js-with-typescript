/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5 */ \"./src/p5.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n/* harmony import */ var _stuff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stuff */ \"./src/stuff.ts\");\n\n\n\nvar world = function () {\n    var stuff;\n    var bgColor = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].color(30, 30, 30, 255);\n    _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].setup = function () {\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].createCanvas(_data__WEBPACK_IMPORTED_MODULE_1__[\"windowW\"], _data__WEBPACK_IMPORTED_MODULE_1__[\"windowH\"]);\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].background(bgColor);\n        stuff = new _stuff__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    };\n    _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].draw = function () {\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].clear();\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].background(bgColor);\n        stuff.randomWalk();\n        stuff.border();\n        stuff.update();\n        stuff.show();\n    };\n};\nworld();\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/*! exports provided: windowW, windowH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowW\", function() { return windowW; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windowH\", function() { return windowH; });\nvar windowW = window.innerWidth;\nvar windowH = window.innerHeight;\n\n\n//# sourceURL=webpack:///./src/data.ts?");

/***/ }),

/***/ "./src/p5.ts":
/*!*******************!*\
  !*** ./src/p5.ts ***!
  \*******************/
/*! exports provided: _p5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_p5\", function() { return _p5; });\nvar _p5 = new p5(function () { });\n\n\n//# sourceURL=webpack:///./src/p5.ts?");

/***/ }),

/***/ "./src/stuff.ts":
/*!**********************!*\
  !*** ./src/stuff.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./p5 */ \"./src/p5.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n\n\nvar Stuff = /** @class */ (function () {\n    function Stuff() {\n        this.radius = 20;\n        this.diameter = this.radius * 2;\n        this.phase_x = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].random(4);\n        this.phase_y = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].random(4);\n        this.pos = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].createVector(200, 200);\n        this.vel = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].createVector();\n        this.acc = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].createVector();\n    }\n    Stuff.prototype.applyForce = function (a) {\n        this.acc.add(a.copy());\n    };\n    Stuff.prototype.randomWalk = function () {\n        var acc = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].createVector();\n        this.phase_x += 0.005;\n        this.phase_y += 0.005;\n        acc.x = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].noise(this.phase_x) * 2;\n        acc.y = _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].noise(this.phase_y) * 2;\n        if (_p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].random(10) > 5) {\n            acc.x *= -1;\n        }\n        if (_p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].random(10) > 5) {\n            acc.y *= -1;\n        }\n        this.applyForce(acc);\n    };\n    Stuff.prototype.update = function () {\n        this.vel.add(this.acc);\n        this.vel.limit(10);\n        this.pos.add(this.vel);\n        this.acc.mult(0);\n    };\n    Stuff.prototype.show = function () {\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].noStroke();\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].fill(255);\n        _p5__WEBPACK_IMPORTED_MODULE_0__[\"_p5\"].ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);\n    };\n    Stuff.prototype.border = function () {\n        if (this.pos.x <= this.radius) {\n            this.pos.x = this.radius;\n            this.vel.x *= -0.5;\n        }\n        else if (this.pos.x >= _data__WEBPACK_IMPORTED_MODULE_1__[\"windowW\"] - this.radius) {\n            this.pos.x = _data__WEBPACK_IMPORTED_MODULE_1__[\"windowW\"] - this.radius;\n            this.vel.x *= -0.5;\n        }\n        if (this.pos.y <= this.radius) {\n            this.pos.y = this.radius;\n            this.vel.y *= -0.5;\n        }\n        else if (this.pos.y >= _data__WEBPACK_IMPORTED_MODULE_1__[\"windowH\"] - this.radius) {\n            this.pos.y = _data__WEBPACK_IMPORTED_MODULE_1__[\"windowH\"] - this.radius;\n            this.vel.y *= -0.5;\n        }\n    };\n    return Stuff;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Stuff);\n\n\n//# sourceURL=webpack:///./src/stuff.ts?");

/***/ })

/******/ });