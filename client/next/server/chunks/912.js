"use strict";
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "p": () => (/* binding */ ModalWindowLogin)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    modalShow: false
};
const ModalWindowLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ModalWindowLogin",
    initialState,
    reducers: {
        cheked (state) {
            state.modalShow = !state.modalShow;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalWindowLogin.reducer);


/***/ }),

/***/ 8376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SerchSlice),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    products: [],
    isLoading: false
};
const SerchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "SerchSlice",
    initialState,
    reducers: {
        cheked (state, action) {
            state.products = action.payload;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SerchSlice.reducer);


/***/ }),

/***/ 98:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Z": () => (/* binding */ ShopCartSlice)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    shopCart: [],
    isLoading: false
};
const ShopCartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ShopCartSlice",
    initialState,
    reducers: {
        cheked (state, action) {
            state.isLoading = true;
            state.shopCart = action.payload;
            state.isLoading = false;
        },
        isLoad (state) {
            state.isLoading = true;
        },
        plusCount (state, action) {
            state.shopCart = state.shopCart.map((item)=>{
                if (item.id == action.payload.id) {
                    if (action.payload.countProducts <= 1) {
                        return {
                            ...item,
                            CountProduct: 1
                        };
                    }
                    if (action.payload.countProducts >= action.payload.maxCount) {
                        return {
                            ...item,
                            CountProduct: action.payload.maxCount
                        };
                    }
                    return {
                        ...item,
                        CountProduct: action.payload.countProducts
                    };
                }
                return item;
            });
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCartSlice.reducer);


/***/ }),

/***/ 4434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ UserReducers),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    User: null,
    AuthBoll: false
};
const UserReducers = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "UserReducers",
    initialState,
    reducers: {
        cheked (state, action) {
            state.User = action.payload;
            state.AuthBoll = true;
        }
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserReducers.reducer);


/***/ })

};
;