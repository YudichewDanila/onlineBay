(() => {
var exports = {};
exports.id = 304;
exports.ids = [304,405];
exports.modules = {

/***/ 2820:
/***/ ((module) => {

// Exports
module.exports = {
	"paginetionsBlock": "PaginationsButton_paginetionsBlock__nLrhC"
};


/***/ }),

/***/ 4870:
/***/ ((module) => {

// Exports
module.exports = {
	"cartProducts": "Product_cartProducts__l6siG",
	"cartProductImg": "Product_cartProductImg__dkVi5",
	"cartProducts_Info": "Product_cartProducts_Info__fp4yK",
	"cartProducts_TextName": "Product_cartProducts_TextName__bkAyg",
	"cartProducts_Price": "Product_cartProducts_Price__d_m4T",
	"cartProducts_Bays": "Product_cartProducts_Bays__QjR_H",
	"cartProducts_CountSelector": "Product_cartProducts_CountSelector__xvLVU",
	"cartProducts_BayButton": "Product_cartProducts_BayButton__Ufa32",
	"cartProducts_BayButtonActive": "Product_cartProducts_BayButtonActive__WKOWI"
};


/***/ }),

/***/ 5887:
/***/ ((module) => {

// Exports
module.exports = {
	"sideBurBox": "SideBurProducts_sideBurBox__9vSoN",
	"sideBurFilter": "SideBurProducts_sideBurFilter__9ZhyC",
	"FilterPrice_Inputs": "SideBurProducts_FilterPrice_Inputs__Jx2Qj",
	"sideBurFilter_ApplyFilterBtn": "SideBurProducts_sideBurFilter_ApplyFilterBtn__lRymh"
};


/***/ }),

/***/ 2046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaginationsButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2820);
/* harmony import */ var _PaginationsButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PaginationsButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function paginationsButtons(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [paginationsColection, setPaginationsColection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const paginationsButtonsCount = Math.ceil(props.data / props.take);
    const paginationsColectionCount = Math.ceil(paginationsButtonsCount / 10);
    const paginationsButtons = [];
    function onNextColection() {
        if (paginationsColection < paginationsColectionCount) {
            setPaginationsColection(paginationsColection + 1);
        } else {
            setPaginationsColection(0);
        }
    }
    let increment = 1;
    for(let i = 1; i <= paginationsColectionCount; i++){
        paginationsButtons.push([]);
    }
    for(let j = 0; j <= paginationsColectionCount; j++){
        while(increment <= paginationsButtonsCount && increment % 10){
            paginationsButtons[j].push(increment);
            increment = increment + 1;
        }
        if (increment <= paginationsButtonsCount) {
            paginationsButtons[j].push(increment);
        }
        increment = increment + 1;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_PaginationsButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().paginetionsBlock),
            children: [
                paginationsButtons[paginationsColection] && paginationsButtons[paginationsColection].map((button)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/products/${props.undercategory}?take=5&page=${button}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            children: button
                        })
                    }, button)),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: onNextColection,
                    children: "..."
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginationsButtons);


/***/ }),

/***/ 7678:
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
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4870);
/* harmony import */ var _Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Product_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_server_postRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9660);
/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(927);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_server_postRequest__WEBPACK_IMPORTED_MODULE_2__]);
_api_server_postRequest__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ProductCart = (products)=>{
    const [countProduct, setCountProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const { User , AuthBoll  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)((state)=>state.UserReducers);
    const [btnClick, setBtnClick] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function onFilter(e, state, setState, max) {
        setState(state = Number(e.target.value.replace(/[^0-9]/g, "").substring(0, 2)));
        if (e.target.value == "") {
            setCountProduct(1);
        }
        if (Number(e.target.value) > max) {
            setCountProduct(max);
        }
    }
    function onplusCount(max) {
        setCountProduct(countProduct + 1);
        if (countProduct + 1 >= max) {
            setCountProduct(max);
        }
    }
    function onminusCount() {
        setCountProduct(countProduct - 1);
        if (countProduct - 1 <= 0) {
            setCountProduct(1);
        }
    }
    function onAddProductShopCart(product) {
        if (AuthBoll) {
            (0,_api_server_postRequest__WEBPACK_IMPORTED_MODULE_2__/* .postRequest */ .j)("order-shopingcart", {
                IdShopingCart: User.shopingCart,
                IdProducts: product.id,
                CountProduct: countProduct
            });
            setBtnClick(true);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProductImg),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `/img/products/${products.products.ImgProducts}.webp`
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_Info),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_TextName),
                            children: products.products.NameProduct
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_Price),
                            children: products.products.PriceProducts
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            children: [
                                "В наличие: ",
                                products.products.CountProducts
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_Bays),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_CountSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: onminusCount,
                                    children: "-"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    value: countProduct,
                                    onChange: (e)=>onFilter(e, countProduct, setCountProduct, products.products.CountProducts)
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: ()=>onplusCount(products.products.CountProducts),
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>onAddProductShopCart(products.products),
                            className: !btnClick ? (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_BayButton) : (_Product_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cartProducts_BayButtonActive),
                            children: !btnClick ? "В корзину" : "Товар в корзине"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCart);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SideBurProducts_SideBurProducts)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/SideBurProducts/SideBurProducts.module.scss
var SideBurProducts_module = __webpack_require__(5887);
var SideBurProducts_module_default = /*#__PURE__*/__webpack_require__.n(SideBurProducts_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/SideBurProducts/SideBurProductsFunctions.ts
function priceFilter({ fromValuePrice , setFromValuePrice , beforeValuePrice , setBeforeValuePrice  }) {
    if (fromValuePrice === "" || beforeValuePrice === "") {
        setFromValuePrice(0);
        setBeforeValuePrice(999999);
        return `0-999999`;
    }
    if (Number(fromValuePrice) <= Number(beforeValuePrice)) {
        return `${fromValuePrice}-${beforeValuePrice}`;
    } else if (Number(fromValuePrice) > Number(beforeValuePrice)) {
        setBeforeValuePrice(fromValuePrice);
        setFromValuePrice(0);
        return `0-${fromValuePrice}`;
    }
}
function ManifactursFilter(manifacturs) {
    let text = "";
    const filterManifactur = manifacturs.filter((manifacturs)=>manifacturs.checked == true);
    for(let i = 0; i < filterManifactur.length; i++){
        if (i < filterManifactur.length - 1) {
            text += filterManifactur[i].NameManufacturers + "-";
        } else {
            text += filterManifactur[i].NameManufacturers;
        }
    }
    return text;
}

;// CONCATENATED MODULE: ./src/components/SideBurProducts/modules/SideBurProductsManifacturs.tsx


const SideBurProductsManifacturs = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: props.manifacturs.map((manifactur, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        checked: manifactur.checked || "",
                        onChange: (e)=>{
                            const newManifacturs = Object.assign([], props.manifacturs);
                            newManifacturs[index].checked = e.target.checked;
                            props.setManifacturs(newManifacturs);
                        },
                        type: "checkbox"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: manifactur.NameManufacturers
                    })
                ]
            }, manifactur.id))
    });
};
/* harmony default export */ const modules_SideBurProductsManifacturs = (SideBurProductsManifacturs);
function dispatch(arg0) {
    throw new Error("Function not implemented.");
}

;// CONCATENATED MODULE: ./src/components/SideBurProducts/SideBurProducts.tsx






const SideBurProducts = (props)=>{
    (0,external_react_.useEffect)(()=>{
        props.manifacturs.map((manifactur)=>manifactur.checked = false);
    }, [
        props.manifacturs
    ]);
    const router = (0,router_.useRouter)();
    const [fromValuePrice, setFromValuePrice] = (0,external_react_.useState)("");
    const [beforeValuePrice, setBeforeValuePrice] = (0,external_react_.useState)("");
    const [manifacturs, setManifacturs] = (0,external_react_.useState)(props.manifacturs);
    function onFilter(e, state, setState) {
        setState(state = Number(e.target.value.replace(/[^0-9]/g, "").substring(0, 6)));
    }
    function onSubmitFilter() {
        const price = priceFilter({
            fromValuePrice,
            setFromValuePrice,
            beforeValuePrice,
            setBeforeValuePrice
        });
        const manifactur = ManifactursFilter(manifacturs);
        router.push(`/products/${props.undercategory}?take=100&page=1&price=${price}&manifacturs=${manifactur}`);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (SideBurProducts_module_default()).sideBurBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SideBurProducts_module_default()).sideBurFilter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Цена"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (SideBurProducts_module_default()).FilterPrice_Inputs,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "От",
                                        value: fromValuePrice,
                                        onChange: (e)=>onFilter(e, fromValuePrice, setFromValuePrice)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "До",
                                        value: beforeValuePrice,
                                        onChange: (e)=>onFilter(e, beforeValuePrice, setBeforeValuePrice)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (SideBurProducts_module_default()).sideBurFilter,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Производители"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(modules_SideBurProductsManifacturs, {
                                manifacturs: manifacturs,
                                setManifacturs: setManifacturs
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: onSubmitFilter,
                className: (SideBurProducts_module_default()).sideBurFilter_ApplyFilterBtn,
                children: "Применить фильтрацию"
            })
        ]
    });
};
/* harmony default export */ const SideBurProducts_SideBurProducts = (SideBurProducts);


/***/ }),

/***/ 677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Products),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1587);
/* harmony import */ var _components_MainNuvbur_MainNuvbur__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6569);
/* harmony import */ var _components_SideBurProducts_SideBurProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2889);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5511);
/* harmony import */ var _api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6618);
/* harmony import */ var _components_ProductsCart_ProductCart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7678);
/* harmony import */ var _components_PaginationsButton_PaginationsButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2046);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__, _components_ProductsCart_ProductCart__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__, _api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__, _components_ProductsCart_ProductCart__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const getServerSideProps = async (context)=>{
    const categorys = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__/* .getRequest */ .A)("categorys");
    const underCategorys = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__/* .getRequest */ .A)("undercategorys");
    const manifacturs = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__/* .getRequest */ .A)("manufacturers");
    const data = await (0,_api_server_getRequest__WEBPACK_IMPORTED_MODULE_6__/* .getRequest */ .A)(`products/category/?take=${context.query.take}&page=${context.query.page}&price=${context.query.price}&undercategory=${context.params.id}&manifacturs=${context.query.manifacturs}`);
    return {
        props: {
            data: data,
            categorys: categorys,
            underCategorys: underCategorys,
            take: context.query.take == undefined ? 5 : context.query.take,
            undercategory: context.params.id,
            manifacturs: manifacturs
        }
    };
};
function Products(props) {
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "ListProducts",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sideBurProducts",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SideBurProducts_SideBurProducts__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            manifacturs: props.manifacturs,
                            undercategory: props.undercategory
                        })
                    }),
                    props.data[0].length != 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "products",
                        children: [
                            props.data[0].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductsCart_ProductCart__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    products: props.data[0][index]
                                }, item.id)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PaginationsButton_PaginationsButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                data: props.data[1],
                                take: props.take,
                                undercategory: props.undercategory
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "notProductsText",
                        children: "Товары отсутствуют"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                categorys: props.categorys
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [142,912,221,511], () => (__webpack_exec__(677)));
module.exports = __webpack_exports__;

})();