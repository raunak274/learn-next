"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 2018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fuser_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fuser_js_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/user.js
var user_namespaceObject = {};
__webpack_require__.r(user_namespaceObject);
__webpack_require__.d(user_namespaceObject, {
  "default": () => (user)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: ./pages/api/user.js
/* harmony default export */ const user = ((req, res)=>{
    if (req.method == "POST") {
        const { body } = req;
        const { id } = req.query;
        console.log(body, id);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify({
            status: true,
            id: id,
            name: body.name
        }));
    } else if (req.method == "GET") {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify({
            status: true,
            data: "some data in get"
        }));
    } else {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify({
            status: true,
            data: "some data in else"
        }));
    }
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fuser&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fuser.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fuser_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fuser_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(user_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(user_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/user",
        pathname: "/api/user",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: user_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(2018)));
module.exports = __webpack_exports__;

})();