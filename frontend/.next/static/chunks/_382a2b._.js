(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_382a2b._.js", {

"[project]/src/app/videoConference/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>VideoConference)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JitsiMeeting$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript) <export default as JitsiMeeting>");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function VideoConference() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // handle change of url
    let listOfRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    let roomId = String(Math.floor(Math.random() * 1000000));
    // useEffect(()=>{
    //  setRoomId(String(Math.floor( Math.random()* 1000000)));},[]) 
    //useEffect(()=>{setDefaultAutoSelectFamilyAttemptTimeout})
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JitsiMeeting$3e$__["JitsiMeeting"], {
        domain: "localhost:8443",
        roomName: roomId,
        configOverwrite: {
            startWithAudioMuted: true,
            disableModeratorIndicator: true,
            startScreenSharing: true,
            enableEmailInStats: false,
            lobby: {
                autoKnock: true,
                enableChat: true
            }
        },
        interfaceConfigOverwrite: {
            DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
            TOOLBAR_BUTTONS: [
                'microphone',
                'camera',
                'closedcaptions',
                'desktop',
                'fullscreen',
                'fodeviceselection',
                'hangup',
                'profile',
                'chat',
                'recording',
                'settings',
                'raisehand',
                'videoquality',
                'invite',
                'help',
                'mute-everyone'
            ]
        },
        userInfo: {
            displayName: 'displayName',
            email: "email"
        },
        onApiReady: (api)=>{
            api.on('participantRoleChanged', (event)=>{
                if (event.role === 'moderator') {
                    api.executeCommand('toggleLobby', true);
                }
            });
            //go back to user page when the conference is ended
            api.on('videoConferenceLeft', ()=>{
                router.push("/userPage");
            });
        },
        getIFrameRef: (iframeRef)=>{
            iframeRef.style.height = '400px';
        }
    }, void 0, false, {
        fileName: "[project]/src/app/videoConference/page.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
_s(VideoConference, "UWq7VFijaHUjOcVlnm7Y8abuQIY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = VideoConference;
var _c;
__turbopack_refresh__.register(_c, "VideoConference");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/videoConference/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/constants/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DEFAULT_DOMAIN": (()=>DEFAULT_DOMAIN),
    "JAAS_PROD_DOMAIN": (()=>JAAS_PROD_DOMAIN),
    "JAAS_STAGING_DOMAIN": (()=>JAAS_STAGING_DOMAIN)
});
const DEFAULT_DOMAIN = 'meet.jit.si';
const JAAS_STAGING_DOMAIN = 'stage.8x8.vc';
const JAAS_PROD_DOMAIN = '8x8.vc';
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/init.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchExternalApi": (()=>fetchExternalApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/constants/index.js [app-client] (ecmascript)");
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
;
const loadExternalApi = (domain, release, appId)=>__awaiter(void 0, void 0, void 0, function*() {
        return new Promise((resolve, reject)=>{
            if (window.JitsiMeetExternalAPI) {
                return resolve(window.JitsiMeetExternalAPI);
            }
            const script = document.createElement('script');
            const releaseParam = release ? `?release=${release}` : '';
            const appIdPath = appId ? `${appId}/` : '';
            script.async = true;
            script.src = `https://${domain}/${appIdPath}external_api.js${releaseParam}`;
            script.onload = ()=>resolve(window.JitsiMeetExternalAPI);
            script.onerror = ()=>reject(new Error(`Script load error: ${script.src}`));
            document.head.appendChild(script);
        });
    });
let scriptPromise;
const fetchExternalApi = (domain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DOMAIN"], release, appId)=>{
    if (scriptPromise) {
        return scriptPromise;
    }
    scriptPromise = loadExternalApi(domain, release, appId);
    return scriptPromise;
};
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/utils/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateComponentId": (()=>generateComponentId),
    "getAppId": (()=>getAppId),
    "getJaaSDomain": (()=>getJaaSDomain),
    "getRoomName": (()=>getRoomName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/constants/index.js [app-client] (ecmascript)");
;
const getRoomName = (roomName, tenant)=>{
    if (tenant) {
        return `${tenant}/${roomName}`;
    }
    return roomName;
};
const getAppId = (roomName)=>{
    const roomParts = roomName.split('/');
    if (roomParts.length <= 1) {
        return;
    }
    return roomParts[0];
};
const getJaaSDomain = (useStaging)=>{
    if (useStaging) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JAAS_STAGING_DOMAIN"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JAAS_PROD_DOMAIN"];
};
let instancesCounter = 0;
const generateComponentId = (prefix)=>`${prefix}-${instancesCounter++}`;
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/constants/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/init.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/utils/index.js [app-client] (ecmascript)");
;
;
;
;
;
/**
 * Returns the JitsiMeeting Component with access to a custom External API
 * to be used as-it-is in React projects
 *
 * @param {IJitsiMeetingProps} props the component's props
 * @returns {ReactElement} the `JitsiMeeting` Component
 * @example
  ```js
    <JitsiMeeting
        domain='meet.jit.si'
        roomName: 'TestingJitsiMeetingComponent'
        spinner={CustomSpinner}
        onApiReady={(externalApi) => console.log(externalApi)}
    />
  ```
 */ const JitsiMeeting = ({ domain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$constants$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DOMAIN"], roomName, configOverwrite, interfaceConfigOverwrite, jwt, invitees, devices, userInfo, release, lang, spinner: Spinner, onApiReady, onReadyToClose, getIFrameRef })=>{
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [apiLoaded, setApiLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const externalApi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const meetingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const componentId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "JitsiMeeting.useMemo[componentId]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateComponentId"])('jitsiMeeting')
    }["JitsiMeeting.useMemo[componentId]"], [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateComponentId"]
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JitsiMeeting.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$init$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchExternalApi"])(domain, release, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAppId"])(roomName)).then({
                "JitsiMeeting.useEffect": (api)=>{
                    externalApi.current = api;
                    setApiLoaded(true);
                }
            }["JitsiMeeting.useEffect"]).catch({
                "JitsiMeeting.useEffect": (e)=>console.error(e.message)
            }["JitsiMeeting.useEffect"]);
        }
    }["JitsiMeeting.useEffect"], []);
    const loadIFrame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JitsiMeeting.useCallback[loadIFrame]": (JitsiMeetExternalAPI)=>{
            apiRef.current = new JitsiMeetExternalAPI(domain, {
                roomName,
                configOverwrite,
                interfaceConfigOverwrite,
                jwt,
                invitees,
                devices,
                userInfo,
                release,
                lang,
                parentNode: meetingRef.current
            });
            setLoading(false);
            if (apiRef.current) {
                typeof onApiReady === 'function' && onApiReady(apiRef.current);
                apiRef.current.on('readyToClose', {
                    "JitsiMeeting.useCallback[loadIFrame]": ()=>{
                        typeof onReadyToClose === 'function' && onReadyToClose();
                    }
                }["JitsiMeeting.useCallback[loadIFrame]"]);
                if (meetingRef.current && typeof getIFrameRef === 'function') {
                    getIFrameRef(meetingRef.current);
                }
            }
        }
    }["JitsiMeeting.useCallback[loadIFrame]"], [
        apiRef,
        meetingRef,
        onApiReady,
        onReadyToClose,
        getIFrameRef,
        domain,
        roomName,
        configOverwrite,
        interfaceConfigOverwrite,
        jwt,
        invitees,
        devices,
        userInfo,
        release,
        lang
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JitsiMeeting.useEffect": ()=>{
            if (apiLoaded && !apiRef.current) {
                if (externalApi.current) {
                    loadIFrame(externalApi.current);
                }
            }
        }
    }["JitsiMeeting.useEffect"], [
        apiLoaded,
        loadIFrame
    ]);
    const renderLoadingSpinner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "JitsiMeeting.useCallback[renderLoadingSpinner]": ()=>{
            if (!Spinner) {
                return null;
            }
            if (!loading || apiRef.current) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Spinner, {}, void 0);
        }
    }["JitsiMeeting.useCallback[renderLoadingSpinner]"], [
        Spinner,
        apiRef.current
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderLoadingSpinner(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                id: componentId,
                ref: meetingRef
            }, componentId)
        ]
    }, void 0);
};
const __TURBOPACK__default__export__ = JitsiMeeting;
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript) <export default as JitsiMeeting>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "JitsiMeeting": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/components/JaaSMeeting.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JitsiMeeting$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript) <export default as JitsiMeeting>");
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};
;
;
;
/**
 * Returns the JaaSMeeting Component with access to the 8x8.vc External API
 * to be used as-it-is in React projects
 *
 * @param {IJaaSMeetingProps} props the component's props
 * @returns {ReactElement} the `JaaSMeeting` Component
 * @example
  ```js
      <JaaSMeeting
        roomName: 'TestingJaaSMeetingComponent'
        appId='exampleAppId'
        spinner={CustomSpinner}
        onApiReady={(externalApi) => console.log(externalApi)}
      />
  ```
 */ const JaaSMeeting = (_a)=>{
    var { appId, roomName, useStaging, release } = _a, rest = __rest(_a, [
        "appId",
        "roomName",
        "useStaging",
        "release"
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__JitsiMeeting$3e$__["JitsiMeeting"], Object.assign({
        domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getJaaSDomain"])(useStaging),
        roomName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRoomName"])(roomName, appId),
        release: release
    }, rest), void 0);
};
const __TURBOPACK__default__export__ = JaaSMeeting;
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/components/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/components/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JitsiMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/JitsiMeeting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$JaaSMeeting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/JaaSMeeting.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/index.js [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
}}),
"[project]/node_modules/@jitsi/react-sdk/lib/index.js [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$components$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/components/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$jitsi$2f$react$2d$sdk$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@jitsi/react-sdk/lib/index.js [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_382a2b._.js.map