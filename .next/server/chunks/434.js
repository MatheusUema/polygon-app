"use strict";
exports.id = 434;
exports.ids = [434];
exports.modules = {

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MainSection": () => (/* binding */ MainSection),
  "default": () => (/* binding */ components_MainSection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/GraphContainer/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-10yyptv-0"
})(["margin:32px;border:1px solid black;border-radius:20px;min-height:350px;background:#f4f4f4;"]);
const InnerSection = external_styled_components_default().div.withConfig({
  displayName: "styles__InnerSection",
  componentId: "sc-10yyptv-1"
})(["margin:16px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/GraphContainer/index.tsx



const GraphContainer = ({
  children,
  graphContainerRef
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(InnerSection, {
      ref: graphContainerRef,
      id: "graph-container",
      children: children
    })
  });
};
;// CONCATENATED MODULE: ./components/MainSection/styles.ts

const styles_Container = external_styled_components_default().section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1926xex-0"
})(["width:80%;"]);
;// CONCATENATED MODULE: ./components/MainSection/index.tsx




const MainSection = ({
  graphContainerRef
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(GraphContainer, {
      graphContainerRef: graphContainerRef
    })
  });
};
/* harmony default export */ const components_MainSection = (MainSection);

/***/ })

};
;