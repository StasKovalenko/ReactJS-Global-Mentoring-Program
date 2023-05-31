"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/ErrorBoundary/ErrorBoundary.js":
/*!***************************************************!*\
  !*** ./components/ErrorBoundary/ErrorBoundary.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: false\n    };\n  }\n\n  static getDerivedStateFromError() {\n    // Update state so the next render will show the fallback UI.\n    return {\n      hasError: true\n    };\n  }\n\n  componentDidCatch(error, errorInfo) {\n    // You can also log the error to an error reporting service\n    console.error(error, errorInfo);\n  }\n\n  render() {\n    if (this.state.hasError) {\n      // You can render any custom fallback UI\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"Something went wrong.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Please try again later.\"));\n    }\n\n    return this.props.children;\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNRSxhQUFOLFNBQTRCRCw0Q0FBNUIsQ0FBc0M7RUFDcENFLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0lBQ2pCLE1BQU1BLEtBQU47SUFDQSxLQUFLQyxLQUFMLEdBQWE7TUFBRUMsUUFBUSxFQUFFO0lBQVosQ0FBYjtFQUNEOztFQUU4QixPQUF4QkMsd0JBQXdCLEdBQUc7SUFDaEM7SUFDQSxPQUFPO01BQUVELFFBQVEsRUFBRTtJQUFaLENBQVA7RUFDRDs7RUFFREUsaUJBQWlCLENBQUNDLEtBQUQsRUFBUUMsU0FBUixFQUFtQjtJQUNsQztJQUNBQyxPQUFPLENBQUNGLEtBQVIsQ0FBY0EsS0FBZCxFQUFxQkMsU0FBckI7RUFDRDs7RUFFREUsTUFBTSxHQUFHO0lBQ1AsSUFBSSxLQUFLUCxLQUFMLENBQVdDLFFBQWYsRUFBeUI7TUFDdkI7TUFDQSxvQkFDRSxxRkFDRSx1RUFBSSx1QkFBSixDQURGLGVBRUUsc0VBQUcseUJBQUgsQ0FGRixDQURGO0lBTUQ7O0lBRUQsT0FBTyxLQUFLRixLQUFMLENBQVdTLFFBQWxCO0VBQ0Q7O0FBNUJtQzs7QUErQnRDLGlFQUFlWCxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnkuanM/YmM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcigpIHtcclxuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cclxuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XHJcbiAgICAvLyBZb3UgY2FuIGFsc28gbG9nIHRoZSBlcnJvciB0byBhbiBlcnJvciByZXBvcnRpbmcgc2VydmljZVxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvciwgZXJyb3JJbmZvKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XHJcbiAgICAgIC8vIFlvdSBjYW4gcmVuZGVyIGFueSBjdXN0b20gZmFsbGJhY2sgVUlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxPlNvbWV0aGluZyB3ZW50IHdyb25nLjwvaDE+XHJcbiAgICAgICAgICA8cD5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnk7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkVycm9yQm91bmRhcnkiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiZXJyb3IiLCJlcnJvckluZm8iLCJjb25zb2xlIiwicmVuZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ErrorBoundary/ErrorBoundary.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ErrorBoundary/ErrorBoundary */ \"./components/ErrorBoundary/ErrorBoundary.js\");\n\n\n\nfunction MyApp(_ref) {\n  let {\n    Component,\n    pageProps\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, pageProps));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNFLEtBQVQsT0FBeUM7RUFBQSxJQUExQjtJQUFFQyxTQUFGO0lBQWFDO0VBQWIsQ0FBMEI7RUFDdkMsb0JBQ0UsMkRBQUMsK0VBQUQscUJBQ0UsMkRBQUMsU0FBRCxFQUFlQSxTQUFmLENBREYsQ0FERjtBQUtEOztBQUVELGlFQUFlRixLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnknO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0Vycm9yQm91bmRhcnk+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRXJyb3JCb3VuZGFyeSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=!":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=! ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ private_next_pages_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-pages/_app */ \"./pages/_app.js\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in private_next_pages_app__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => private_next_pages_app__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n        // Next.js Route Loader\n        \n        \n    //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci5qcz9wYWdlPSUyRl9hcHAmYWJzb2x1dGVQYWdlUGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfYXBwJnByZWZlcnJlZFJlZ2lvbj0hLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0EsUUFBK0M7QUFDL0MsUUFBeUQ7QUFDekQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvPzc4OTUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIC8vIE5leHQuanMgUm91dGUgTG9hZGVyXG4gICAgICAgIGV4cG9ydCAqIGZyb20gXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcFwiXG4gICAgICAgIGV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIlxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=!\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app&preferredRegion=!"));
module.exports = __webpack_exports__;

})();