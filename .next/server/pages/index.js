"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,359];
exports.modules = {

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "IndexPage": () => (/* binding */ IndexPage),
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/AppContainer/styles.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-14e3mvd-0"
})(["font-family:'Roboto',sans-serif;margin:0;padding:0;width:100%;height:100%;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/AppContainer/index.tsx





const AppContainer = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Polygon App"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        type: "image/png",
        href: "https://www.iconpacks.net/icons/1/free-bar-chart-icon-676-thumb.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
                html, * {
                    margin: 0;
                }
            `
      })]
    }), children]
  });
};
;// CONCATENATED MODULE: ./components/HeaderIcon/styles.ts

const chartlines = (0,external_styled_components_.keyframes)(["0%{transform:scaleY(1);}32%{transform:scaleY(1.15)}79%{transform:scaleY(.9)}100%{transform:scaleY(1)}"]);
const styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-54jrya-0"
})([".chart-icon{width:30px;margin-right:24px;margin-top:5px;margin-left:24px;}.chart-scale{stroke:#173753;}.chart-line{stroke:#427AA1;transform-origin:bottom;}.chart-line:first-child{animation:2.4s cubic-bezier(.49,.86,.59,.95) infinite ", ";}.chart-line:nth-child(2){animation:2.4s cubic-bezier(.49,.86,.59,.95) infinite reverse ", ";}.chart-line:nth-child(3){animation:2.4s cubic-bezier(.49,.86,.59,.95) infinite reverse ", ";}.chart-line:nth-child(4){animation:2.4s cubic-bezier(.49,.86,.59,.95) infinite ", ";}"], chartlines, chartlines, chartlines, chartlines);
;// CONCATENATED MODULE: ./components/HeaderIcon/index.tsx




const HeaderIcon = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      className: "chart-icon",
      version: "1.1",
      baseProfile: "full",
      viewBox: "0 0 100 100",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "22.5",
        y1: "91",
        x2: "22.5",
        y2: "62",
        strokeWidth: "10",
        strokeLinecap: "butt",
        className: "chart-line"
      }), /*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "42.5",
        y1: "91",
        x2: "42.5",
        y2: "37",
        strokeWidth: "10",
        strokeLinecap: "butt",
        className: "chart-line"
      }), /*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "62.5",
        y1: "91",
        x2: "62.5",
        y2: "46",
        strokeWidth: "10",
        strokeLinecap: "butt",
        className: "chart-line"
      }), /*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "82.5",
        y1: "91",
        x2: "82.5",
        y2: "23",
        strokeWidth: "10",
        strokeLinecap: "butt",
        className: "chart-line"
      }), /*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "5",
        y1: "95",
        x2: "5",
        y2: "5",
        strokeWidth: "5",
        className: "chart-scale"
      }), /*#__PURE__*/jsx_runtime_.jsx("line", {
        x1: "2.5",
        y1: "95",
        x2: "100",
        y2: "95",
        strokeWidth: "5",
        className: "chart-scale"
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Header/styles.ts

const HeaderContainer = external_styled_components_default().header.withConfig({
  displayName: "styles__HeaderContainer",
  componentId: "sc-1bh73bj-0"
})(["background-color:lightBlue;padding:10px;height:50px;display:flex;align-items:center;h1{color:#173753;}"]);
;// CONCATENATED MODULE: ./components/Header/index.tsx





const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderIcon, {}), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: "Polygon App"
    })]
  });
};
;// CONCATENATED MODULE: external "react-calendar"
const external_react_calendar_namespaceObject = require("react-calendar");
;// CONCATENATED MODULE: ./components/Sidebar/styles.ts


const Sidebar_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1m6aqsh-0"
})(["margin-top:32px;margin-right:16px;"]);
const InputController = external_styled_components_default().div.withConfig({
  displayName: "styles__InputController",
  componentId: "sc-1m6aqsh-1"
})(["display:flex;"]);
const CalendarComponent = external_styled_components_default()(external_react_calendar_namespaceObject.Calendar).withConfig({
  displayName: "styles__CalendarComponent",
  componentId: "sc-1m6aqsh-2"
})(["visibility:", ";display:", ";position:", ";"], props => props.hidden ? 'visible' : 'hidden', props => props.hidden ? 'block' : 'none', props => props.hidden ? 'fixed' : 'none');
const TickerButton = external_styled_components_default().button.withConfig({
  displayName: "styles__TickerButton",
  componentId: "sc-1m6aqsh-3"
})(["border:none;border-radius:5px;color:#f2f2f2;background:#427AA1;margin:0 8px;font-weight:bold;"]);
;// CONCATENATED MODULE: ./components/Loader/styles.ts

const Loader_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-aefosx-0"
})(["max-width:50px;margin:0 auto;margin-top:32px;"]);
;// CONCATENATED MODULE: ./components/Loader/index.tsx




const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Loader_styles_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      version: "1.1",
      id: "L1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 100 100",
      enableBackground: "new 0 0 100 100",
      xmlSpace: "preserve",
      children: [/*#__PURE__*/jsx_runtime_.jsx("circle", {
        fill: "none",
        stroke: "#000",
        strokeWidth: "6",
        strokeMiterlimit: "15",
        strokeDasharray: "14.2472,14.2472",
        cx: "50",
        cy: "50",
        r: "47",
        children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "5s",
          from: "0 50 50",
          to: "360 50 50",
          repeatCount: "indefinite"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("circle", {
        fill: "none",
        stroke: "#000",
        strokeWidth: "1",
        strokeMiterlimit: "10",
        strokeDasharray: "10,10",
        cx: "50",
        cy: "50",
        r: "39",
        children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          type: "rotate",
          dur: "5s",
          from: "0 50 50",
          to: "-360 50 50",
          repeatCount: "indefinite"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
        fill: "#000",
        children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "30",
          y: "35",
          width: "5",
          height: "30",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.1"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "40",
          y: "35",
          width: "5",
          height: "30",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.2"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "50",
          y: "35",
          width: "5",
          height: "30",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.3"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "60",
          y: "35",
          width: "5",
          height: "30",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.4"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
          x: "70",
          y: "35",
          width: "5",
          height: "30",
          children: /*#__PURE__*/jsx_runtime_.jsx("animateTransform", {
            attributeName: "transform",
            dur: "1s",
            type: "translate",
            values: "0 5 ; 0 -5; 0 5",
            repeatCount: "indefinite",
            begin: "0.5"
          })
        })]
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/StockList/styles.ts

const StockList_styles_Container = external_styled_components_default().div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-153bfyu-0"
})(["min-height:250px;"]);
const Items = external_styled_components_default().div.withConfig({
  displayName: "styles__Items",
  componentId: "sc-153bfyu-1"
})(["display:flex;flex-direction:column;overflow-y:scroll;max-height:350px;"]);
const ItemList = external_styled_components_default().div.withConfig({
  displayName: "styles__ItemList",
  componentId: "sc-153bfyu-2"
})(["display:flex;gap:16px;color:#020202;font-size:14px;padding:2px 8px;background-color:#f2f2f2;&:nth-child(1){margin-top:8px;color:black;background-color:#818181;}color:", ";"], props => props.positive ? 'green' : 'red');
const TickerText = external_styled_components_default().strong.withConfig({
  displayName: "styles__TickerText",
  componentId: "sc-153bfyu-3"
})(["width:45px;"]);
const HText = external_styled_components_default().p.withConfig({
  displayName: "styles__HText",
  componentId: "sc-153bfyu-4"
})(["width:98px;"]);
const LText = external_styled_components_default().p.withConfig({
  displayName: "styles__LText",
  componentId: "sc-153bfyu-5"
})(["width:98px;"]);
;// CONCATENATED MODULE: ./components/StockList/index.tsx




const StockList = ({
  stockList
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(StockList_styles_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Items, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemList, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TickerText, {
          children: "Ticker"
        }), /*#__PURE__*/jsx_runtime_.jsx(HText, {
          children: "Highest Price"
        }), /*#__PURE__*/jsx_runtime_.jsx(LText, {
          children: "Lowest Price"
        })]
      }), stockList && stockList.map(element => /*#__PURE__*/(0,jsx_runtime_.jsxs)(ItemList, {
        positive: element.highestPrice > element.lowestPrice,
        children: [/*#__PURE__*/jsx_runtime_.jsx(TickerText, {
          children: element.name
        }), /*#__PURE__*/jsx_runtime_.jsx(HText, {
          children: element.highestPrice
        }), /*#__PURE__*/jsx_runtime_.jsx(LText, {
          children: element.lowestPrice
        })]
      }, element.name))]
    })
  });
};
;// CONCATENATED MODULE: ./components/TickerList/index.tsx
 // import { Container } from './styles';




const TickerList = ({
  stockList,
  tickerRef
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
      ref: tickerRef,
      list: "tickerList",
      placeholder: "Search ticker"
    }), /*#__PURE__*/jsx_runtime_.jsx("datalist", {
      id: "tickerList",
      children: stockList && stockList.map(stock => {
        return /*#__PURE__*/jsx_runtime_.jsx("option", {
          value: stock.name
        }, stock.name);
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/react-calendar/dist/Calendar.css
var Calendar = __webpack_require__(434);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
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
;// CONCATENATED MODULE: ./components/Sidebar/index.tsx










const Sidebar = ({
  graphContainerRef
}) => {
  const {
    0: stocks,
    1: setStocks
  } = (0,external_react_.useState)([]);
  const {
    0: calendar,
    1: setCalendar
  } = (0,external_react_.useState)(false);
  const {
    0: chosenDate,
    1: setChosenDate
  } = (0,external_react_.useState)(new Date());
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const tickerRef = (0,external_react_.useRef)(null);
  const generateChart = (0,external_react_.useCallback)(value => {
    console.log(value);
    console.log(tickerRef.current.value);
    console.log(graphContainerRef);
  }, []);
  (0,external_react_.useEffect)(() => {
    setStocks([]);
    setLoading(true);
    getGroupedDaily(chosenDate).then(response => {
      const stocksList = response.data.results;

      for (let i = 0; i < response.data.results.length; i++) {
        setStocks(stocks => [...stocks, {
          name: stocksList[i].T,
          highestPrice: stocksList[i].h,
          lowestPrice: stocksList[i].l,
          openPrice: stocksList[i].n,
          transactions: stocksList[i].n
        }]);

        if (i === 100) {
          break;
        }
      }
    }).finally(() => setLoading(false));
  }, [chosenDate]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Sidebar_styles_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(InputController, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TickerList, {
        tickerRef: tickerRef,
        stockList: stocks
      }), /*#__PURE__*/jsx_runtime_.jsx(TickerButton, {
        onClick: generateChart,
        children: "generate chart"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => setCalendar(!calendar),
        children: /*#__PURE__*/jsx_runtime_.jsx(bs_namespaceObject.BsCalendar3, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(CalendarComponent, {
        onChange: value => {
          setChosenDate(value);
          setCalendar(!calendar);
        },
        hidden: calendar
      })]
    }), loading ? /*#__PURE__*/jsx_runtime_.jsx(Loader, {}) : /*#__PURE__*/jsx_runtime_.jsx(StockList, {
      stockList: stocks
    })]
  });
};
// EXTERNAL MODULE: ./pages/styles.ts
var styles = __webpack_require__(152);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(860);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./pages/index.tsx








const MainSection = dynamic_default()(() => __webpack_require__.e(/* import() */ 434).then(__webpack_require__.bind(__webpack_require__, 912)), {
  ssr: false,
  loadableGenerated: {
    modules: ["index.tsx -> " + '../components/MainSection']
  }
});
const IndexPage = () => {
  const graphContainerRef = (0,external_react_.useRef)(null);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(styles.Main, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MainSection, {
        graphContainerRef: graphContainerRef
      }), /*#__PURE__*/jsx_runtime_.jsx(Sidebar, {
        graphContainerRef: graphContainerRef
      })]
    })]
  });
};
/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Main = styled_components__WEBPACK_IMPORTED_MODULE_0___default().main.withConfig({
  displayName: "styles__Main",
  componentId: "sc-117ov3f-0"
})(["display:flex;"]);

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [806], () => (__webpack_exec__(745)));
module.exports = __webpack_exports__;

})();