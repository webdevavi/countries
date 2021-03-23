webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Screen */ \"./components/Screen.tsx\");\n\n\n\nvar _jsxFileName = \"/home/devavi/projects/countries/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var countries = _ref.countries;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Screen__WEBPACK_IMPORTED_MODULE_4__[\"Screen\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Countries\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n      title: \"Countries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"flex flex-wrap gap-4 p-4 pt-20\",\n      children: countries.map(function (country) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: \"flex-1 min-w-full sm:min-w-max max-w-full p-4 bg-blue-200 rounded-xl flex gap-2 hover:bg-blue-300 hover:shadow-md focus:outline-none focus:bg-blue-300 focus:shadow-2xl transform hover:scale-105\",\n          title: country.name // onClick={() => router.push(`/${country.alpha2Code}`)}\n          ,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: country.flag,\n              alt: country.name,\n              className: \"w-10\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n            className: \"flex flex-col items-start\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              className: \"font-bold text-blue-900\",\n              children: country.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), country.capital && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: [\"Capital -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: country.capital\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, _this), country.population ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n              children: [\"Population -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: new Intl.NumberFormat().format(country.population)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)]\n        }, country.alpha2Code, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n};\n\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImNvdW50cmllcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcCIsImNvdW50cnkiLCJuYW1lIiwiZmxhZyIsImNhcGl0YWwiLCJwb3B1bGF0aW9uIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsImFscGhhMkNvZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFRQSxJQUFNQSxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixPQUF5QjtBQUFBOztBQUFBOztBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN6RCxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsc0JBQ0UscUVBQUMseURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUUscUVBQUMseURBQUQ7QUFBUSxXQUFLLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFTLGVBQVMsRUFBQyxnQ0FBbkI7QUFBQSxnQkFDR0YsU0FBUyxDQUFDRyxHQUFWLENBQWMsVUFBQ0MsT0FBRDtBQUFBLDRCQUNiO0FBRUUsbUJBQVMsRUFBQyxtTUFGWjtBQUdFLGVBQUssRUFBRUEsT0FBTyxDQUFDQyxJQUhqQixDQUlFO0FBSkY7QUFBQSxrQ0FNRTtBQUFBLG1DQUNFO0FBQUssaUJBQUcsRUFBRUQsT0FBTyxDQUFDRSxJQUFsQjtBQUF3QixpQkFBRyxFQUFFRixPQUFPLENBQUNDLElBQXJDO0FBQTJDLHVCQUFTLEVBQUM7QUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFTRTtBQUFTLHFCQUFTLEVBQUMsMkJBQW5CO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFDLHlCQUFkO0FBQUEsd0JBQXlDRCxPQUFPLENBQUNDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR0QsT0FBTyxDQUFDRyxPQUFSLGlCQUNDO0FBQUEsc0NBQ1ksR0FEWixlQUVFO0FBQU0seUJBQVMsRUFBQyxlQUFoQjtBQUFBLDBCQUFpQ0gsT0FBTyxDQUFDRztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFISixFQVFHSCxPQUFPLENBQUNJLFVBQVIsZ0JBQ0M7QUFBQSx5Q0FDZSxHQURmLGVBRUU7QUFBTSx5QkFBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQ0csSUFBSUMsSUFBSSxDQUFDQyxZQUFULEdBQXdCQyxNQUF4QixDQUErQlAsT0FBTyxDQUFDSSxVQUF2QztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGdCQVFDLHVKQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQSxXQUNPSixPQUFPLENBQUNRLFVBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYTtBQUFBLE9BQWQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5Q0QsQ0E1Q0Q7O0dBQU1iLEk7VUFDV0cscUQ7OztLQURYSCxJOztBQXVEU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcywgR2V0U3RhdGljUHJvcHNSZXN1bHQsIE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgeyBTY3JlZW4gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JlZW5cIjtcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vbW9kZWxzL2NvdW50cnkvY291bnRyeVwiO1xuaW1wb3J0IHsgZ2V0QWxsQ291bnRyaWVzIH0gZnJvbSBcIi4uL3V0aWxzL2dldEFsbENvdW50cmllc1wiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5Pjtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2U8SG9tZVByb3BzPiA9IGZ1bmN0aW9uICh7IGNvdW50cmllcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPFNjcmVlbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q291bnRyaWVzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxOYXZiYXIgdGl0bGU9XCJDb3VudHJpZXNcIiAvPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTQgcC00IHB0LTIwXCI+XG4gICAgICAgIHtjb3VudHJpZXMubWFwKChjb3VudHJ5KSA9PiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGtleT17Y291bnRyeS5hbHBoYTJDb2RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIG1pbi13LWZ1bGwgc206bWluLXctbWF4IG1heC13LWZ1bGwgcC00IGJnLWJsdWUtMjAwIHJvdW5kZWQteGwgZmxleCBnYXAtMiBob3ZlcjpiZy1ibHVlLTMwMCBob3ZlcjpzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWJsdWUtMzAwIGZvY3VzOnNoYWRvdy0yeGwgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTEwNVwiXG4gICAgICAgICAgICB0aXRsZT17Y291bnRyeS5uYW1lfVxuICAgICAgICAgICAgLy8gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8ke2NvdW50cnkuYWxwaGEyQ29kZX1gKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb3VudHJ5LmZsYWd9IGFsdD17Y291bnRyeS5uYW1lfSBjbGFzc05hbWU9XCJ3LTEwXCIgLz5cbiAgICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibHVlLTkwMFwiPntjb3VudHJ5Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAge2NvdW50cnkuY2FwaXRhbCAmJiAoXG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgQ2FwaXRhbCAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTgwMFwiPntjb3VudHJ5LmNhcGl0YWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtjb3VudHJ5LnBvcHVsYXRpb24gPyAoXG4gICAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgICAgUG9wdWxhdGlvbiAte1wiIFwifVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IEludGwuTnVtYmVyRm9ybWF0KCkuZm9ybWF0KGNvdW50cnkucG9wdWxhdGlvbil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8PjwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9TY3JlZW4+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPEhvbWVQcm9wcz4gPSBhc3luYyAoKTogUHJvbWlzZTxcbiAgR2V0U3RhdGljUHJvcHNSZXN1bHQ8SG9tZVByb3BzPlxuPiA9PiB7XG4gIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGdldEFsbENvdW50cmllcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNvdW50cmllcyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})