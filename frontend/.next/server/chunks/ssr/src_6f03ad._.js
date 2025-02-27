module.exports = {

"[project]/src/shared/API_ROUTE.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "API_ROUTE": (()=>API_ROUTE)
});
const API_ROUTE = {
    login: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/login/",
    register: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/register/",
    validate: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/validate/",
    logout: "http://ec2-34-224-60-168.compute-1.amazonaws.com:8000/api/logout/"
};
}}),
"[project]/src/services/auth.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUserName": (()=>getUserName),
    "login": (()=>login),
    "logout": (()=>logout),
    "register": (()=>register),
    "validate": (()=>validate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$API_ROUTE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/shared/API_ROUTE.ts [app-ssr] (ecmascript)");
;
async function login(data) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$API_ROUTE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTE"].login, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: String(data.get("email")),
            password: String(data.get("password"))
        })
    });
}
async function register(data) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$API_ROUTE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTE"].register, {
        body: data
    });
}
async function validate(token) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$API_ROUTE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTE"].validate, {
        method: "GET",
        headers: {
            "Authorization": "Token " + token,
            'Content-Type': 'application/json'
        },
        redirect: "follow"
    });
}
async function logout(token) {
    return fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$API_ROUTE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_ROUTE"].logout, {
        method: "POST",
        headers: {
            "Authorization": "Token " + token,
            'Content-Type': 'application/json'
        },
        redirect: "follow"
    }).then(()=>{
        // Rediriger vers la landing page
        localStorage.removeItem("token");
        window.location.href = "/";
    }).catch((error)=>console.error("Erreur lors de la déconnexion :", error));
}
async function getUserName() {
    let token = localStorage.getItem("token");
    if (token) {
        let res = await validate(token);
        if (res.ok) {
            let json = await res.json();
            return json.user.username;
        // need to add some management for error
        }
    } else {
        return "";
    }
}
}}),
"[project]/src/app/(layout-app)/userPage/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>UserPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/services/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function UserPage() {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])();
    // set the username with validation with the access token
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setStateUser();
    });
    async function setStateUser() {
        let user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserName"])();
        console.log("USERNAME FOUND : ", user);
        setUsername(user);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "user-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: [
                    "Bienvenue ",
                    username
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(layout-app)/userPage/page.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "btn-container-user",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/videoConference",
                        className: "btn-container-user btn",
                        children: "Lancer un call"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(layout-app)/userPage/page.tsx",
                        lineNumber: 39,
                        columnNumber: 15
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/joinRoom",
                        className: "btn-container-user btn",
                        children: "Rejoindre un call"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(layout-app)/userPage/page.tsx",
                        lineNumber: 40,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(layout-app)/userPage/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(layout-app)/userPage/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/(layout-app)/userPage/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=src_6f03ad._.js.map