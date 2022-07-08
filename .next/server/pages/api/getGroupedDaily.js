"use strict";
(() => {
var exports = {};
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getGroupedDaily": () => (/* binding */ getGroupedDaily)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./utils/convert-date.ts
const convertDate = date => {
  return date.toISOString().split('T')[0];
};
;// CONCATENATED MODULE: ./pages/api/getGroupedDaily/index.tsx


const getGroupedDaily = async date => {
  const today = new Date();
  let apiDate = new Date(today);

  if (date.toDateString === today.toDateString) {
    apiDate.setDate(today.getDate() - 2);
  } else {
    apiDate = date;
  }

  const response = await external_axios_default().get(`https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/${convertDate(apiDate)}?adjusted=true&apiKey=${"VHji623lE6N6Hdvitzn0TTh0NCzNDpI3"}`);
  return response;
};

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(965));
module.exports = __webpack_exports__;

})();