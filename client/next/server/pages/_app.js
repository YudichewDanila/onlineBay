(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/globals.scss
var globals = __webpack_require__(6961);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/redusers/Manifacturs.ts

const initialState = {
    manifacturs: [],
    isLoading: false,
    error: ""
};
const ManifactursSlice = (0,toolkit_.createSlice)({
    name: "ManifactursSlice",
    initialState,
    reducers: {
        cheked (state, action) {
            state.manifacturs = action.payload;
        }
    }
});
/* harmony default export */ const Manifacturs = (ManifactursSlice.reducer);

// EXTERNAL MODULE: ./src/store/redusers/ModalWindowLogin.ts
var ModalWindowLogin = __webpack_require__(126);
// EXTERNAL MODULE: ./src/store/redusers/User.ts
var User = __webpack_require__(4434);
// EXTERNAL MODULE: ./src/store/redusers/ShopCart.ts
var ShopCart = __webpack_require__(98);
// EXTERNAL MODULE: ./src/store/redusers/ShopPoints.ts
var ShopPoints = __webpack_require__(1159);
// EXTERNAL MODULE: ./src/store/redusers/Serches.ts
var Serches = __webpack_require__(8376);
;// CONCATENATED MODULE: ./src/store/index.ts







const rootReducer = (0,toolkit_.combineReducers)({
    manifacturs: Manifacturs,
    ModalWindowLogin: ModalWindowLogin/* default */.Z,
    UserReducers: User/* default */.Z,
    ShopCartSlice: ShopCart/* default */.C,
    ShopPointSlice: ShopPoints/* default */.Z,
    Serches: Serches/* default */.Z
});
const setupStore = ()=>{
    return (0,toolkit_.configureStore)({
        reducer: rootReducer
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx




const store = setupStore();
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 1159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ ShopPointSlice),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    shopPoint: [],
    isLoading: false
};
const ShopPointSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ShopPointSlice",
    initialState,
    reducers: {
        cheked (state, action) {
            state.shopPoint = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopPointSlice.reducer);


/***/ }),

/***/ 6961:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [912], () => (__webpack_exec__(7447)));
module.exports = __webpack_exports__;

})();