"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_MainSection_index_tsx";
exports.ids = ["components_MainSection_index_tsx"];
exports.modules = {

/***/ "./components/GraphContainer/index.tsx":
/*!*********************************************!*\
  !*** ./components/GraphContainer/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GraphContainer\": () => (/* binding */ GraphContainer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-plotly.js */ \"react-plotly.js\");\n/* harmony import */ var react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_plotly_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useAggregate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useAggregate */ \"./hooks/useAggregate.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./components/GraphContainer/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/matioka/Desktop/Finance/polygon-app/components/GraphContainer/index.tsx\";\n\n\n\n\n\nconst GraphContainer = () => {\n  const {\n    aggregate\n  } = (0,_hooks_useAggregate__WEBPACK_IMPORTED_MODULE_2__.useAggregate)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.InnerSection, {\n      id: \"graph-container\",\n      children: aggregate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_plotly_js__WEBPACK_IMPORTED_MODULE_1___default()), {\n        data: [{\n          x: aggregate.dates,\n          close: aggregate.close,\n          high: aggregate.high,\n          low: aggregate.low,\n          open: aggregate.open,\n          type: 'ohlc',\n          xaxis: 'x',\n          yaxis: 'y',\n          increasing: {\n            line: {\n              color: '#002e5c '\n            }\n          },\n          decreasing: {\n            line: {\n              color: '#7F7F7F'\n            }\n          }\n        }],\n        layout: {\n          dragmode: 'zoom',\n          showlegend: false,\n          xaxis: {\n            autorange: true,\n            title: aggregate.name + ' OHLC Chart',\n            rangeselector: {\n              x: 0,\n              y: 1.2,\n              xanchor: 'left',\n              font: {\n                size: 12\n              },\n              buttons: [{\n                step: 'month',\n                stepmode: 'backward',\n                count: 1,\n                label: '1 month'\n              }, {\n                step: 'month',\n                stepmode: 'backward',\n                count: 6,\n                label: '6 months'\n              }, {\n                step: 'all',\n                label: 'All dates'\n              }]\n            }\n          },\n          yaxis: {\n            autorange: true\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 10\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyYXBoQ29udGFpbmVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBSU8sTUFBTUssY0FBYyxHQUFHLE1BQW1CO0VBQy9DLE1BQU07SUFBRUM7RUFBRixJQUFnQkosaUVBQVksRUFBbEM7RUFFQSxvQkFDRSw4REFBQyw4Q0FBRDtJQUFBLHVCQUNFLDhEQUFDLGlEQUFEO01BQWMsRUFBRSxFQUFDLGlCQUFqQjtNQUFBLFVBQ0dJLFNBQVMsaUJBQ1QsOERBQUMsd0RBQUQ7UUFDQyxJQUFJLEVBQUUsQ0FDTjtVQUFFQyxDQUFDLEVBQUVELFNBQVMsQ0FBQ0UsS0FBZjtVQUNFQyxLQUFLLEVBQUVILFNBQVMsQ0FBQ0csS0FEbkI7VUFFRUMsSUFBSSxFQUFFSixTQUFTLENBQUNJLElBRmxCO1VBR0VDLEdBQUcsRUFBRUwsU0FBUyxDQUFDSyxHQUhqQjtVQUlFQyxJQUFJLEVBQUVOLFNBQVMsQ0FBQ00sSUFKbEI7VUFLRUMsSUFBSSxFQUFFLE1BTFI7VUFNRUMsS0FBSyxFQUFFLEdBTlQ7VUFPRUMsS0FBSyxFQUFFLEdBUFQ7VUFRRUMsVUFBVSxFQUFFO1lBQUNDLElBQUksRUFBRTtjQUFDQyxLQUFLLEVBQUU7WUFBUjtVQUFQLENBUmQ7VUFTRUMsVUFBVSxFQUFFO1lBQUNGLElBQUksRUFBRTtjQUFDQyxLQUFLLEVBQUU7WUFBUjtVQUFQO1FBVGQsQ0FETSxDQURQO1FBYUMsTUFBTSxFQUFJO1VBQ1JFLFFBQVEsRUFBRSxNQURGO1VBRVJDLFVBQVUsRUFBRSxLQUZKO1VBR1JQLEtBQUssRUFBRTtZQUNQUSxTQUFTLEVBQUUsSUFESjtZQUVQQyxLQUFLLEVBQUVqQixTQUFTLENBQUNrQixJQUFWLEdBQWlCLGFBRmpCO1lBR05DLGFBQWEsRUFBRTtjQUNWbEIsQ0FBQyxFQUFFLENBRE87Y0FFVm1CLENBQUMsRUFBRSxHQUZPO2NBR1ZDLE9BQU8sRUFBRSxNQUhDO2NBSVZDLElBQUksRUFBRTtnQkFBQ0MsSUFBSSxFQUFDO2NBQU4sQ0FKSTtjQUtWQyxPQUFPLEVBQUUsQ0FBQztnQkFDTkMsSUFBSSxFQUFFLE9BREE7Z0JBRU5DLFFBQVEsRUFBRSxVQUZKO2dCQUdOQyxLQUFLLEVBQUUsQ0FIRDtnQkFJTkMsS0FBSyxFQUFFO2NBSkQsQ0FBRCxFQUtOO2dCQUNDSCxJQUFJLEVBQUUsT0FEUDtnQkFFQ0MsUUFBUSxFQUFFLFVBRlg7Z0JBR0NDLEtBQUssRUFBRSxDQUhSO2dCQUlDQyxLQUFLLEVBQUU7Y0FKUixDQUxNLEVBVU47Z0JBQ0NILElBQUksRUFBRSxLQURQO2dCQUVDRyxLQUFLLEVBQUU7Y0FGUixDQVZNO1lBTEM7VUFIVCxDQUhDO1VBMkJSbkIsS0FBSyxFQUFFO1lBQ0xPLFNBQVMsRUFBRTtVQUROO1FBM0JDO01BYlg7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUZIO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUFzREQsQ0F6RE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYXBoQ29udGFpbmVyL2luZGV4LnRzeD83ODU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGxvdCBmcm9tICdyZWFjdC1wbG90bHkuanMnO1xuaW1wb3J0IHsgdXNlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlQWdncmVnYXRlJztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBJbm5lclNlY3Rpb24gfSBmcm9tICcuL3N0eWxlcyc7XG5cblxuXG5leHBvcnQgY29uc3QgR3JhcGhDb250YWluZXIgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICBjb25zdCB7IGFnZ3JlZ2F0ZSB9ID0gdXNlQWdncmVnYXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPElubmVyU2VjdGlvbiBpZD1cImdyYXBoLWNvbnRhaW5lclwiPlxuICAgICAgICB7YWdncmVnYXRlICYmIFxuICAgICAgICAgPFBsb3RcbiAgICAgICAgICBkYXRhPXtbXG4gICAgICAgICAgeyB4OiBhZ2dyZWdhdGUuZGF0ZXMsXG4gICAgICAgICAgICBjbG9zZTogYWdncmVnYXRlLmNsb3NlLFxuICAgICAgICAgICAgaGlnaDogYWdncmVnYXRlLmhpZ2gsXG4gICAgICAgICAgICBsb3c6IGFnZ3JlZ2F0ZS5sb3csXG4gICAgICAgICAgICBvcGVuOiBhZ2dyZWdhdGUub3BlbixcbiAgICAgICAgICAgIHR5cGU6ICdvaGxjJyxcbiAgICAgICAgICAgIHhheGlzOiAneCcsXG4gICAgICAgICAgICB5YXhpczogJ3knLFxuICAgICAgICAgICAgaW5jcmVhc2luZzoge2xpbmU6IHtjb2xvcjogJyMwMDJlNWMgJ319LFxuICAgICAgICAgICAgZGVjcmVhc2luZzoge2xpbmU6IHtjb2xvcjogJyM3RjdGN0YnfX0sIFxuICAgICAgICAgIH1dfVxuICAgICAgICAgIGxheW91dCA9IHt7XG4gICAgICAgICAgICBkcmFnbW9kZTogJ3pvb20nLFxuICAgICAgICAgICAgc2hvd2xlZ2VuZDogZmFsc2UsXG4gICAgICAgICAgICB4YXhpczoge1xuICAgICAgICAgICAgYXV0b3JhbmdlOiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6IGFnZ3JlZ2F0ZS5uYW1lICsgJyBPSExDIENoYXJ0JyxcbiAgICAgICAgICAgICByYW5nZXNlbGVjdG9yOiB7XG4gICAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgICAgeTogMS4yLFxuICAgICAgICAgICAgICAgICAgeGFuY2hvcjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgZm9udDoge3NpemU6MTJ9LFxuICAgICAgICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBtb2RlOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnMSBtb250aCdcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAnbW9udGgnLFxuICAgICAgICAgICAgICAgICAgICAgIHN0ZXBtb2RlOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiA2LFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnNiBtb250aHMnXG4gICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RlcDogJ2FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBbGwgZGF0ZXMnXG4gICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB5YXhpczoge1xuICAgICAgICAgICAgICBhdXRvcmFuZ2U6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgICBcblxuICAgICAgIC8+fVxuICAgICAgPC9Jbm5lclNlY3Rpb24+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQbG90IiwidXNlQWdncmVnYXRlIiwiQ29udGFpbmVyIiwiSW5uZXJTZWN0aW9uIiwiR3JhcGhDb250YWluZXIiLCJhZ2dyZWdhdGUiLCJ4IiwiZGF0ZXMiLCJjbG9zZSIsImhpZ2giLCJsb3ciLCJvcGVuIiwidHlwZSIsInhheGlzIiwieWF4aXMiLCJpbmNyZWFzaW5nIiwibGluZSIsImNvbG9yIiwiZGVjcmVhc2luZyIsImRyYWdtb2RlIiwic2hvd2xlZ2VuZCIsImF1dG9yYW5nZSIsInRpdGxlIiwibmFtZSIsInJhbmdlc2VsZWN0b3IiLCJ5IiwieGFuY2hvciIsImZvbnQiLCJzaXplIiwiYnV0dG9ucyIsInN0ZXAiLCJzdGVwbW9kZSIsImNvdW50IiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GraphContainer/index.tsx\n");

/***/ }),

/***/ "./components/GraphContainer/styles.ts":
/*!*********************************************!*\
  !*** ./components/GraphContainer/styles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"InnerSection\": () => (/* binding */ InnerSection)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-10yyptv-0\"\n})([\"margin:32px;border:1px solid black;border-radius:20px;min-height:350px;background:#f4f4f4;\"]);\nconst InnerSection = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n  displayName: \"styles__InnerSection\",\n  componentId: \"sc-10yyptv-1\"\n})([\"margin:16px;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyYXBoQ29udGFpbmVyL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFTyxNQUFNQyxTQUFTLEdBQUdELHVFQUFIO0VBQUE7RUFBQTtBQUFBLGtHQUFmO0FBUUEsTUFBTUcsWUFBWSxHQUFHSCx1RUFBSDtFQUFBO0VBQUE7QUFBQSxvQkFBbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dyYXBoQ29udGFpbmVyL3N0eWxlcy50cz8wMjNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW46IDMycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuYDtcblxuZXhwb3J0IGNvbnN0IElubmVyU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAxNnB4O1xuYDsiXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiZGl2IiwiSW5uZXJTZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GraphContainer/styles.ts\n");

/***/ }),

/***/ "./components/MainSection/index.tsx":
/*!******************************************!*\
  !*** ./components/MainSection/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainSection\": () => (/* binding */ MainSection),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GraphContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GraphContainer */ \"./components/GraphContainer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./components/MainSection/styles.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/matioka/Desktop/Finance/polygon-app/components/MainSection/index.tsx\";\n\n\n\n\nconst MainSection = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_GraphContainer__WEBPACK_IMPORTED_MODULE_1__.GraphContainer, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainSection);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5TZWN0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRU8sTUFBTUcsV0FBVyxHQUFHLE1BQW1CO0VBRTVDLG9CQUNFLDhEQUFDLDhDQUFEO0lBQUEsdUJBQ0UsOERBQUMsMkRBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQTtFQURGO0lBQUE7SUFBQTtJQUFBO0VBQUEsYUFERjtBQUtELENBUE07QUFTUCxpRUFBZUEsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24vaW5kZXgudHN4PzBkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgR3JhcGhDb250YWluZXIgfSBmcm9tICcuLi9HcmFwaENvbnRhaW5lcic7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL3N0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBNYWluU2VjdGlvbiA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEdyYXBoQ29udGFpbmVyIC8+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5TZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkdyYXBoQ29udGFpbmVyIiwiQ29udGFpbmVyIiwiTWFpblNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MainSection/index.tsx\n");

/***/ }),

/***/ "./components/MainSection/styles.ts":
/*!******************************************!*\
  !*** ./components/MainSection/styles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().section.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1926xex-0\"\n})([\"width:80%;\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5TZWN0aW9uL3N0eWxlcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1DLFNBQVMsR0FBR0QsMkVBQUg7RUFBQTtFQUFBO0FBQUEsa0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01haW5TZWN0aW9uL3N0eWxlcy50cz9mMjdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gICAgd2lkdGg6IDgwJTtcbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwic2VjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MainSection/styles.ts\n");

/***/ })

};
;