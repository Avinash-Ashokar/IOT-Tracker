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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_avinash_Music_Projects_Industry_IOT_Tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_avinash_Music_Projects_Industry_IOT_Tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_avinash_Music_Projects_Industry_IOT_Tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/table */ \"./components/table.js\");\n/* harmony import */ var _components_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/box */ \"./components/box.js\");\n/* harmony import */ var _components_component_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/component-list */ \"./components/component-list.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), id = ref[0], setId = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), resdata = ref1[0], setResdata = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), choice = ref2[0], setChoice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), place = ref3[0], setPlace = ref3[1];\n    var chosen_one = \"\";\n    var pl = \"\";\n    if (choice != \"\" && id != \"\") {\n        chosen_one = resdata[id][choice][\"History\"];\n        pl = resdata[id][choice][\"Curr_loc\"];\n    }\n    var API_URL = \"https://ap-south-1.aws.data.mongodb-api.com/app/application-2-ysiep/endpoint/iot\";\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var fetch_data = setInterval(_asyncToGenerator(_home_avinash_Music_Projects_Industry_IOT_Tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return _home_avinash_Music_Projects_Industry_IOT_Tracker_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_6___default()(API_URL);\n                    case 2:\n                        data = _ctx.sent.data;\n                        setResdata(data[1]);\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        })), 1000);\n        return function() {\n            return clearInterval(fetch_data);\n        };\n    }, [\n        resdata\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n        h: \"87vh\",\n        templateRows: \"repeat(2, 1fr)\",\n        templateColumns: \"repeat(6, 1fr)\",\n        gap: 4,\n        m: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.GridItem, {\n                rowSpan: 2,\n                colSpan: 2,\n                bg: \"papayawhip\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_component_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    id: id,\n                    setId: setId,\n                    resdata: resdata,\n                    setChoice: setChoice,\n                    setPlace: setPlace,\n                    choice: choice\n                }, void 0, false, {\n                    fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.GridItem, {\n                colSpan: 4,\n                bg: \"papayawhip\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_box__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    place: pl\n                }, void 0, false, {\n                    fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.GridItem, {\n                colSpan: 4\n            }, void 0, false, {\n                fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/avinash/Music/Projects/Industry/IOT-Tracker/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"rzv/AeflDBBzZJEApj/kefT1+AA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsIEdyaWRJdGVtIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBNeVRhYmxlIGZyb20gXCIuLi9jb21wb25lbnRzL3RhYmxlXCI7XG5pbXBvcnQgTXlCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvYm94XCI7XG5pbXBvcnQgQ29tcG9uZW50TGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnQtbGlzdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzZGF0YSwgc2V0UmVzZGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW2Nob2ljZSwgc2V0Q2hvaWNlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFtwbGFjZSwgc2V0UGxhY2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdmFyIGNob3Nlbl9vbmUgPSBcIlwiO1xuICB2YXIgcGwgPSBcIlwiO1xuXG4gIGlmIChjaG9pY2UgIT0gXCJcIiAmJiBpZCAhPSBcIlwiKSB7XG4gICAgY2hvc2VuX29uZSA9IHJlc2RhdGFbaWRdW2Nob2ljZV1bXCJIaXN0b3J5XCJdO1xuICAgIHBsID0gcmVzZGF0YVtpZF1bY2hvaWNlXVtcIkN1cnJfbG9jXCJdO1xuICB9XG5cbiAgY29uc3QgQVBJX1VSTCA9XG4gICAgXCJodHRwczovL2FwLXNvdXRoLTEuYXdzLmRhdGEubW9uZ29kYi1hcGkuY29tL2FwcC9hcHBsaWNhdGlvbi0yLXlzaWVwL2VuZHBvaW50L2lvdFwiO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hfZGF0YSA9IHNldEludGVydmFsKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MoQVBJX1VSTCk7XG4gICAgICBzZXRSZXNkYXRhKGRhdGFbMV0pO1xuICAgIH0sIDEwMDApO1xuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGZldGNoX2RhdGEpO1xuICB9LCBbcmVzZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPEdyaWRcbiAgICAgIGg9XCI4N3ZoXCJcbiAgICAgIHRlbXBsYXRlUm93cz1cInJlcGVhdCgyLCAxZnIpXCJcbiAgICAgIHRlbXBsYXRlQ29sdW1ucz1cInJlcGVhdCg2LCAxZnIpXCJcbiAgICAgIGdhcD17NH1cbiAgICAgIG09ezN9XG4gICAgPlxuICAgICAgPEdyaWRJdGVtIHJvd1NwYW49ezJ9IGNvbFNwYW49ezJ9IGJnPVwicGFwYXlhd2hpcFwiPlxuICAgICAgICA8Q29tcG9uZW50TGlzdFxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICBzZXRJZD17c2V0SWR9XG4gICAgICAgICAgcmVzZGF0YT17cmVzZGF0YX1cbiAgICAgICAgICBzZXRDaG9pY2U9e3NldENob2ljZX1cbiAgICAgICAgICBzZXRQbGFjZT17c2V0UGxhY2V9XG4gICAgICAgICAgY2hvaWNlPXtjaG9pY2V9XG4gICAgICAgIC8+XG4gICAgICA8L0dyaWRJdGVtPlxuICAgICAgPEdyaWRJdGVtIGNvbFNwYW49ezR9IGJnPVwicGFwYXlhd2hpcFwiPlxuICAgICAgICA8TXlCb3ggcGxhY2U9e3BsfSAvPlxuICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIDxHcmlkSXRlbSBjb2xTcGFuPXs0fT5cbiAgICAgICAgey8qIDxNeVRhYmxlIGNob3Nlbl9vbmU9e2Nob3Nlbl9vbmV9IC8+ICovfVxuICAgICAgPC9HcmlkSXRlbT5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiR3JpZCIsIkdyaWRJdGVtIiwiTXlUYWJsZSIsIk15Qm94IiwiQ29tcG9uZW50TGlzdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJIb21lIiwiaWQiLCJzZXRJZCIsInJlc2RhdGEiLCJzZXRSZXNkYXRhIiwiY2hvaWNlIiwic2V0Q2hvaWNlIiwicGxhY2UiLCJzZXRQbGFjZSIsImNob3Nlbl9vbmUiLCJwbCIsIkFQSV9VUkwiLCJmZXRjaF9kYXRhIiwic2V0SW50ZXJ2YWwiLCJkYXRhIiwiY2xlYXJJbnRlcnZhbCIsImgiLCJ0ZW1wbGF0ZVJvd3MiLCJ0ZW1wbGF0ZUNvbHVtbnMiLCJnYXAiLCJtIiwicm93U3BhbiIsImNvbFNwYW4iLCJiZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});