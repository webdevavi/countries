webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ \"./components/Navbar.tsx\");\n/* harmony import */ var _components_Screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Screen */ \"./components/Screen.tsx\");\n\n\n\nvar _jsxFileName = \"/home/devavi/projects/countries/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Home = function Home(_ref) {\n  _s();\n\n  var _this = this;\n\n  var countries = _ref.countries;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Screen__WEBPACK_IMPORTED_MODULE_4__[\"Screen\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Countries\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"Navbar\"], {\n      title: \"Countries\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      className: \"flex flex-wrap gap-4 p-4 pt-20\",\n      children: countries.map(function (country) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"flex-1 min-w-full sm:min-w-max max-w-full p-4 bg-blue-200 rounded-xl flex gap-2 hover:bg-blue-300 hover:shadow-md focus:outline-none focus:bg-blue-300 focus:shadow-2xl transform hover:scale-105\",\n          title: country.name,\n          onClick: function onClick() {\n            return router.push(\"/\".concat(country.alpha2Code));\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"aside\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: country.flag,\n              alt: country.name,\n              className: \"w-10\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n            className: \"flex flex-col items-start\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              className: \"font-bold text-blue-900\",\n              children: country.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 15\n            }, _this), country.capital && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: [\"Capital -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: country.capital\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 17\n            }, _this), country.population ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n              children: [\"Population -\", \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                className: \"text-blue-800\",\n                children: new Intl.NumberFormat().format(country.population)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)]\n        }, country.alpha2Code, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n};\n\n_s(Home, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsImNvdW50cmllcyIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcCIsImNvdW50cnkiLCJuYW1lIiwicHVzaCIsImFscGhhMkNvZGUiLCJmbGFnIiwiY2FwaXRhbCIsInBvcHVsYXRpb24iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBUUEsSUFBTUEsSUFBeUIsR0FBRyxTQUE1QkEsSUFBNEIsT0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFDekQsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFLHFFQUFDLHlEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLHlEQUFEO0FBQVEsV0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBS0U7QUFBUyxlQUFTLEVBQUMsZ0NBQW5CO0FBQUEsZ0JBQ0dGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQUNDLE9BQUQ7QUFBQSw0QkFDYjtBQUVFLG1CQUFTLEVBQUMsbU1BRlo7QUFHRSxlQUFLLEVBQUVBLE9BQU8sQ0FBQ0MsSUFIakI7QUFJRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1KLE1BQU0sQ0FBQ0ssSUFBUCxZQUFnQkYsT0FBTyxDQUFDRyxVQUF4QixFQUFOO0FBQUEsV0FKWDtBQUFBLGtDQU1FO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFFSCxPQUFPLENBQUNJLElBQWxCO0FBQXdCLGlCQUFHLEVBQUVKLE9BQU8sQ0FBQ0MsSUFBckM7QUFBMkMsdUJBQVMsRUFBQztBQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQVNFO0FBQVMscUJBQVMsRUFBQywyQkFBbkI7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMseUJBQWQ7QUFBQSx3QkFBeUNELE9BQU8sQ0FBQ0M7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVHRCxPQUFPLENBQUNLLE9BQVIsaUJBQ0M7QUFBQSxzQ0FDWSxHQURaLGVBRUU7QUFBTSx5QkFBUyxFQUFDLGVBQWhCO0FBQUEsMEJBQWlDTCxPQUFPLENBQUNLO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhKLEVBUUdMLE9BQU8sQ0FBQ00sVUFBUixnQkFDQztBQUFBLHlDQUNlLEdBRGYsZUFFRTtBQUFNLHlCQUFTLEVBQUMsZUFBaEI7QUFBQSwwQkFDRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsR0FBd0JDLE1BQXhCLENBQStCVCxPQUFPLENBQUNNLFVBQXZDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZ0JBUUMsdUpBaEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURjtBQUFBLFdBQ09OLE9BQU8sQ0FBQ0csVUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURhO0FBQUEsT0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRCxDQTVDRDs7R0FBTVIsSTtVQUNXRyxxRDs7O0tBRFhILEk7O0FBdURTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFN0YXRpY1Byb3BzLCBHZXRTdGF0aWNQcm9wc1Jlc3VsdCwgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCB7IFNjcmVlbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1NjcmVlblwiO1xuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gXCIuLi9tb2RlbHMvY291bnRyeS9jb3VudHJ5XCI7XG5pbXBvcnQgeyBnZXRBbGxDb3VudHJpZXMgfSBmcm9tIFwiLi4vdXRpbHMvZ2V0QWxsQ291bnRyaWVzXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBjb3VudHJpZXM6IEFycmF5PENvdW50cnk+O1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZTxIb21lUHJvcHM+ID0gZnVuY3Rpb24gKHsgY291bnRyaWVzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2NyZWVuPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db3VudHJpZXM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhciB0aXRsZT1cIkNvdW50cmllc1wiIC8+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtNCBwLTQgcHQtMjBcIj5cbiAgICAgICAge2NvdW50cmllcy5tYXAoKGNvdW50cnkpID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBrZXk9e2NvdW50cnkuYWxwaGEyQ29kZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBtaW4tdy1mdWxsIHNtOm1pbi13LW1heCBtYXgtdy1mdWxsIHAtNCBiZy1ibHVlLTIwMCByb3VuZGVkLXhsIGZsZXggZ2FwLTIgaG92ZXI6YmctYmx1ZS0zMDAgaG92ZXI6c2hhZG93LW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy1ibHVlLTMwMCBmb2N1czpzaGFkb3ctMnhsIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDVcIlxuICAgICAgICAgICAgdGl0bGU9e2NvdW50cnkubmFtZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvJHtjb3VudHJ5LmFscGhhMkNvZGV9YCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFzaWRlPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y291bnRyeS5mbGFnfSBhbHQ9e2NvdW50cnkubmFtZX0gY2xhc3NOYW1lPVwidy0xMFwiIC8+XG4gICAgICAgICAgICA8L2FzaWRlPlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmx1ZS05MDBcIj57Y291bnRyeS5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIHtjb3VudHJ5LmNhcGl0YWwgJiYgKFxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIENhcGl0YWwgLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDBcIj57Y291bnRyeS5jYXBpdGFsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7Y291bnRyeS5wb3B1bGF0aW9uID8gKFxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIFBvcHVsYXRpb24gLXtcIiBcIn1cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBJbnRsLk51bWJlckZvcm1hdCgpLmZvcm1hdChjb3VudHJ5LnBvcHVsYXRpb24pfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9TY3JlZW4+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzPEhvbWVQcm9wcz4gPSBhc3luYyAoKTogUHJvbWlzZTxcbiAgR2V0U3RhdGljUHJvcHNSZXN1bHQ8SG9tZVByb3BzPlxuPiA9PiB7XG4gIGNvbnN0IGNvdW50cmllcyA9IGF3YWl0IGdldEFsbENvdW50cmllcygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNvdW50cmllcyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})