exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 89:
/***/ ((module) => {

// Exports
module.exports = {
	"bottomBlock": "Footer_bottomBlock__CJapO",
	"bottomBlock_Catalog": "Footer_bottomBlock_Catalog__HF8Y2",
	"col_md_6": "Footer_col_md_6__Zrc8l",
	"ok_list": "Footer_ok_list__ugHt3",
	"column_2": "Footer_column_2__7OwoY",
	"footer_info": "Footer_footer_info__wkGUg",
	"contactBlock": "Footer_contactBlock__h_a8V",
	"contactBlock_Form": "Footer_contactBlock_Form__hMTwu",
	"terms-block": "Footer_terms-block__FgG1j",
	"col-md-6": "Footer_col-md-6__WP1c9",
	"ok-list": "Footer_ok-list__PrOMF",
	"-column-2": "Footer_-column-2__UEw1G",
	"footer": "Footer_footer__Q5T55",
	"terms_block": "Footer_terms_block__m2UpF",
	"terms_agree": "Footer_terms_agree__Azzpu"
};


/***/ }),

/***/ 5511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Footer = (categorys)=>{
    const ulClass = (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().ok_list) + " " + (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().column_2) + " " + (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().clearfix);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contactBlock),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().contactBlock_Form),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Хочешь узнавать про акции и скидки первым?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "Имя"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                placeholder: "E-Mail"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                children: "Хочу много скидок"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().terms_block),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().terms_of_use),
                                "data-target": "terms_btn_subscribe"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().terms_agree),
                                children: "Я согласен с условиями"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottomBlock),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bottomBlock_Catalog),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().col_md_6),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Каталог"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    className: ulClass,
                                    children: categorys.categorys.map((category)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: category.NameCategory
                                        }, category.id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().footer_info),
                            children: [
                                "Данный сайт является учебным проектом.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Сайт разработчика: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://webdaer.github.io/",
                                    children: "https://webdaer.github.io/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Дизайн данного сайта взят с платформы beseller.by ."
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;