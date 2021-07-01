(self["__LOADABLE_LOADED_CHUNKS__"] = self["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components_vendors"],{

/***/ "./src/client/components/CurrentTime/CurrentTime.js":
/*!**********************************************************!*\
  !*** ./src/client/components/CurrentTime/CurrentTime.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shared/Headline/Headline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function CurrentTime() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../shared/Headline/Headline'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, "Current date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, new Date().toDateString()));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentTime);

/***/ }),

/***/ "./src/client/components/CurrentTime/index.js":
/*!****************************************************!*\
  !*** ./src/client/components/CurrentTime/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
 // Countdown component is loaded by webpack only if user can see it. 
// It's not included in main bundle any more

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_loadable_component__WEBPACK_IMPORTED_MODULE_0__.default)({
  resolved: {},
  chunkName: function chunkName() {
    return "current_time";
  },
  isReady: function isReady(props) {
    var key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },
  importAsync: function importAsync() {
    return __webpack_require__.e(/*! import() | current_time */ "components_vendors").then(__webpack_require__.bind(__webpack_require__, /*! ./CurrentTime */ "./src/client/components/CurrentTime/CurrentTime.js"));
  },
  requireAsync: function requireAsync(props) {
    var _this = this;

    var key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(function (resolved) {
      _this.resolved[key] = true;
      return resolved;
    });
  },
  requireSync: function requireSync(props) {
    var id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },
  resolve: function resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./CurrentTime */ "./src/client/components/CurrentTime/CurrentTime.js");
    }

    return eval('require.resolve')("./CurrentTime");
  }
}, {
  ssr: true
}));

/***/ })

}]);
//# sourceMappingURL=components_vendors.0b8c2802a6adf65eacae.js.map