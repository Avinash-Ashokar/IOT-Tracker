"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/component-name-list.js":
/*!*******************************************!*\
  !*** ./components/component-name-list.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ComponentNameList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n\n\nfunction ComponentNameList(param) {\n    var components = param.components, setId = param.setId;\n    var _this = this;\n    var style = {\n        marginTop: \"30px\",\n        marginLeft: \"20px\"\n    };\n    var divStyle = {\n        padding: \"10px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        children: [\n            components.map(function(component) {\n                return component != \"arg1\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    w: \"100%\",\n                    style: divStyle,\n                    onClick: function() {\n                        return setId(component);\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        color: \"tomato\",\n                        children: [\n                            \"\\uD83E\\uDDF0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                children: [\n                                    \" \",\n                                    component\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/components/component-name-list.js\",\n                                lineNumber: 24,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/components/component-name-list.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, _this)\n                }, component, false, {\n                    fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/components/component-name-list.js\",\n                    lineNumber: 16,\n                    columnNumber: 11\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                    fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/components/component-name-list.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this);\n            }),\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/components/component-name-list.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_c = ComponentNameList;\nvar _c;\n$RefreshReg$(_c, \"ComponentNameList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbXBvbmVudC1uYW1lLWxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXNEO0FBRXZDLFNBQVNHLGlCQUFpQixDQUFDLEtBQXFCLEVBQUU7UUFBckJDLFVBQVUsR0FBWixLQUFxQixDQUFuQkEsVUFBVSxFQUFFQyxLQUFLLEdBQW5CLEtBQXFCLENBQVBBLEtBQUs7O0lBQzNELElBQU1DLEtBQUssR0FBRztRQUNaQyxTQUFTLEVBQUUsTUFBTTtRQUNqQkMsVUFBVSxFQUFFLE1BQU07S0FDbkI7SUFDRCxJQUFNQyxRQUFRLEdBQUc7UUFDZkMsT0FBTyxFQUFFLE1BQU07S0FDaEI7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDTCxLQUFLLEVBQUVBLEtBQUs7O1lBQ2RGLFVBQVUsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLFNBQVM7dUJBQ3hCQSxTQUFTLElBQUksTUFBTSxpQkFDakIsOERBQUNaLGlEQUFHO29CQUNGYSxDQUFDLEVBQUMsTUFBTTtvQkFDUlIsS0FBSyxFQUFFRyxRQUFRO29CQUVmTSxPQUFPLEVBQUU7K0JBQU1WLEtBQUssQ0FBQ1EsU0FBUyxDQUFDO3FCQUFBOzhCQUUvQiw0RUFBQ2IscURBQU87d0JBQUNnQixLQUFLLEVBQUMsUUFBUTs7NEJBQUMsY0FFdEI7MENBQUEsOERBQUNkLGtEQUFJOztvQ0FBQyxHQUFDO29DQUFDVyxTQUFTOzs7Ozs7cUNBQVE7Ozs7Ozs2QkFDakI7bUJBTkxBLFNBQVM7Ozs7eUJBT1YsaUJBRU4sOERBQUNJLElBQUU7Ozs7eUJBQU07YUFDVixDQUNGO1lBQUUsR0FBRzs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0FBOUJ1QmQsS0FBQUEsaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tcG9uZW50LW5hbWUtbGlzdC5qcz84N2FhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRpbmcsIEJveCwgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudE5hbWVMaXN0KHsgY29tcG9uZW50cywgc2V0SWQgfSkge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Ub3A6IFwiMzBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMjBweFwiLFxuICB9O1xuICBjb25zdCBkaXZTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjb21wb25lbnRzLm1hcCgoY29tcG9uZW50KSA9PlxuICAgICAgICBjb21wb25lbnQgIT0gXCJhcmcxXCIgPyAoXG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgc3R5bGU9e2RpdlN0eWxlfVxuICAgICAgICAgICAga2V5PXtjb21wb25lbnR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJZChjb21wb25lbnQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxIZWFkaW5nIGNvbG9yPVwidG9tYXRvXCI+XG4gICAgICAgICAgICAgIPCfp7BcbiAgICAgICAgICAgICAgPExpbms+IHtjb21wb25lbnR9PC9MaW5rPlxuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxoMT48L2gxPlxuICAgICAgICApXG4gICAgICApfXtcIiBcIn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkaW5nIiwiQm94IiwiTGluayIsIkNvbXBvbmVudE5hbWVMaXN0IiwiY29tcG9uZW50cyIsInNldElkIiwic3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiZGl2U3R5bGUiLCJwYWRkaW5nIiwiZGl2IiwibWFwIiwiY29tcG9uZW50IiwidyIsIm9uQ2xpY2siLCJjb2xvciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/component-name-list.js\n");

/***/ })

});