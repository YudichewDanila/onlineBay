(() => {
var exports = {};
exports.id = 877;
exports.ids = [877,405];
exports.modules = {

/***/ 6833:
/***/ ((module) => {

// Exports
module.exports = {
	"ShopCart": "ShopCart_ShopCart__Eo2uo",
	"MainInfoBlock": "ShopCart_MainInfoBlock__ww92m",
	"ShopCart_image": "ShopCart_ShopCart_image__yZH8U",
	"ShopCart_InfoBlock": "ShopCart_ShopCart_InfoBlock__t5ONw",
	"DopInfoBlock": "ShopCart_DopInfoBlock__X_hSe",
	"ShopCart_PriceBlock": "ShopCart_ShopCart_PriceBlock__iXqrW",
	"CountSelector": "ShopCart_CountSelector__fpJYD",
	"ShopCart_SummBlock": "ShopCart_ShopCart_SummBlock__B1VoG",
	"wrupperEnterOrders": "ShopCart_wrupperEnterOrders__m8r09",
	"priceBlock": "ShopCart_priceBlock__p_5Hv",
	"enterOrders": "ShopCart_enterOrders__zbtI9",
	"ShopCartModule": "ShopCart_ShopCartModule__StZZB",
	"onDelete": "ShopCart_onDelete__evRAc",
	"headerPointer": "ShopCart_headerPointer__u7c0c"
};


/***/ }),

/***/ 230:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ deleteRequest)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const urlbase = "http://localhost:3001/";
async function deleteRequest(atrebut) {
    let result = null;
    const config = {
        headers: {
            "Access-Control-Allow-Credentials": true
        },
        withCredentials: true,
        crossDomain: true
    };
    await axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](urlbase + atrebut, config).then((response)=>{
        result = response;
    }).catch(function(error) {
        result = error;
    });
    return result;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6037:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6833);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ShopCartOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9220);
/* harmony import */ var _ShopCartEnterOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(283);
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(927);
/* harmony import */ var _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6618);
/* harmony import */ var _store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98);
/* harmony import */ var _store_redusers_ShopPoints__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1159);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ShopCartOne__WEBPACK_IMPORTED_MODULE_2__, _ShopCartEnterOrder__WEBPACK_IMPORTED_MODULE_3__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__]);
([_ShopCartOne__WEBPACK_IMPORTED_MODULE_2__, _ShopCartEnterOrder__WEBPACK_IMPORTED_MODULE_3__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ShopCartModule = ()=>{
    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    let shopingCart = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.ShopCartSlice);
    const { User , AuthBoll  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)((state)=>state.UserReducers);
    let fullPrice = 0;
    shopingCart.shopCart.map((item)=>{
        fullPrice += item.IdProducts.PriceProducts * item.CountProduct;
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (AuthBoll) {
            (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A)("order-shopingcart", `${User.shopingCart}`).then((data)=>dispatch(_store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_6__/* .ShopCartSlice.actions.cheked */ .Z.actions.cheked(data)));
            (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A)("point-orders").then((data)=>dispatch(_store_redusers_ShopPoints__WEBPACK_IMPORTED_MODULE_7__/* .ShopPointSlice.actions.cheked */ .A.actions.cheked(data)));
        }
    }, [
        AuthBoll,
        shopingCart.isLoading
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ShopCartModule),
                children: !shopingCart.isLoading ? shopingCart.shopCart.map((Cart)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShopCartOne__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        props: Cart
                    }, Cart.id)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Загрузка..."
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_8___default().headerPointer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Оформление заказа:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: "Пункт выдачи:"
                    })
                ]
            }),
            shopingCart.shopCart.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ShopCartEnterOrder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                props: User,
                fullPrice: fullPrice
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "В корзине нет товаров"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCartModule);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6833);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(927);
/* harmony import */ var _api_server_postRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9660);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_server_postRequest__WEBPACK_IMPORTED_MODULE_3__]);
_api_server_postRequest__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ShopCartEnterOrder = ({ props , fullPrice  })=>{
    const shopingPoints = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.ShopPointSlice);
    const shopingCart = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.ShopCartSlice);
    const [selectPoint, setSelectPoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    console.log(fullPrice);
    async function onCreateOrder() {
        const result = await (0,_api_server_postRequest__WEBPACK_IMPORTED_MODULE_3__/* .postRequest */ .j)("order-product", {
            IdShopingCart: props.shopingCart,
            IdPointOrders: Number(selectPoint),
            StatusOrder: false,
            shopingCart: shopingCart.shopCart,
            FullPrice: fullPrice
        });
        console.log(result.data.confirmation.confirmation_url);
        window.location = result.data.confirmation.confirmation_url;
    }
    console.log(selectPoint);
    console.log(props);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrupperEnterOrders),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                value: selectPoint,
                onChange: (e)=>{
                    setSelectPoint(e.target.value);
                },
                children: shopingPoints.shopPoint.map((point)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", {
                        value: point.id,
                        children: [
                            point.country,
                            " ",
                            point.city,
                            " ",
                            point.street,
                            " ",
                            point.numberHouse
                        ]
                    }, point.id))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4___default().priceBlock),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                        children: [
                            "Итого: ",
                            fullPrice,
                            " руб"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>onCreateOrder(),
                        className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_4___default().enterOrders),
                        children: "Заказать"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(ShopCartEnterOrder));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6833);
/* harmony import */ var _ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(927);
/* harmony import */ var _store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98);
/* harmony import */ var _api_server_deleteRequest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_server_deleteRequest__WEBPACK_IMPORTED_MODULE_4__]);
_api_server_deleteRequest__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ShopCartOne = ({ props  })=>{
    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    console.log(props);
    function deleteProduct(id) {
        (0,_api_server_deleteRequest__WEBPACK_IMPORTED_MODULE_4__/* .deleteRequest */ .J)(`order-shopingcart/${id}_${props.IdShopingCart.id}`).then((data)=>dispatch(_store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_3__/* .ShopCartSlice.actions.cheked */ .Z.actions.cheked(data.data)));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ShopCart),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().MainInfoBlock),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ShopCart_image),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: `/img/products/${props.IdProducts.ImgProducts}.webp`
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ShopCart_InfoBlock),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: props.IdProducts.NameProduct
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Всего товаров: ",
                                        props.IdProducts.CountProducts
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Цена: ",
                                        props.IdProducts.PriceProducts
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().DopInfoBlock),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ShopCart_PriceBlock),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Колличество: ",
                                        props.CountProduct
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().CountSelector),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                dispatch(_store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_3__/* .ShopCartSlice.actions.plusCount */ .Z.actions.plusCount({
                                                    id: props.id,
                                                    countProducts: props.CountProduct - 1,
                                                    maxCount: props.IdProducts.CountProducts
                                                }));
                                            },
                                            children: "-"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                dispatch(_store_redusers_ShopCart__WEBPACK_IMPORTED_MODULE_3__/* .ShopCartSlice.actions.plusCount */ .Z.actions.plusCount({
                                                    id: props.id,
                                                    countProducts: props.CountProduct + 1,
                                                    maxCount: props.IdProducts.CountProducts
                                                }));
                                            },
                                            children: "+"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ShopCart_SummBlock),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                children: [
                                    "Cумма: ",
                                    props.IdProducts.PriceProducts * props.CountProduct
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>deleteProduct(props.id),
                            className: (_ShopCart_module_scss__WEBPACK_IMPORTED_MODULE_5___default().onDelete)
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCartOne);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9826:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCart),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1587);
/* harmony import */ var _components_MainNuvbur_MainNuvbur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6569);
/* harmony import */ var _components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6037);
/* harmony import */ var _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_4__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_4__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function getStaticProps() {
    const categorys = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A)("categorys");
    const underCategorys = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_5__/* .getRequest */ .A)("undercategorys");
    return {
        props: {
            categorys,
            underCategorys
        }
    };
}
function ShopCart(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                categorys: props.categorys,
                undercategorys: props.underCategorys
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MainNuvbur_MainNuvbur__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                categorys: props.categorys,
                undercategorys: props.underCategorys
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ShopCart_ShopCart__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [142,912,221], () => (__webpack_exec__(9826)));
module.exports = __webpack_exports__;

})();