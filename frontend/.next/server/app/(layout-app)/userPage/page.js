(()=>{var e={};e.id=513,e.ids=[513],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9225:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var r=n(260),s=n(8203),o=n(5155),a=n.n(o),i=n(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);n.d(t,d);let l=["",{children:["(layout-app)",{children:["userPage",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,754)),"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\userPage\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4724)),"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"]}]},{"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\userPage\\page.tsx"],u={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(layout-app)/userPage/page",pathname:"/userPage",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4111:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3219,23)),Promise.resolve().then(n.t.bind(n,4863,23)),Promise.resolve().then(n.t.bind(n,5155,23)),Promise.resolve().then(n.t.bind(n,802,23)),Promise.resolve().then(n.t.bind(n,9350,23)),Promise.resolve().then(n.t.bind(n,8530,23)),Promise.resolve().then(n.t.bind(n,8921,23))},2359:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6959,23)),Promise.resolve().then(n.t.bind(n,3875,23)),Promise.resolve().then(n.t.bind(n,8903,23)),Promise.resolve().then(n.t.bind(n,7174,23)),Promise.resolve().then(n.t.bind(n,4178,23)),Promise.resolve().then(n.t.bind(n,7190,23)),Promise.resolve().then(n.t.bind(n,1365,23))},7244:(e,t,n)=>{Promise.resolve().then(n.bind(n,4898))},796:(e,t,n)=>{Promise.resolve().then(n.bind(n,2558))},6397:(e,t,n)=>{Promise.resolve().then(n.bind(n,754))},7837:(e,t,n)=>{Promise.resolve().then(n.bind(n,3278))},3278:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i});var r=n(5512),s=n(8009);n(1840);var o=n(8531),a=n.n(o);function i(){let[e,t]=(0,s.useState)();return(0,r.jsxs)("div",{className:"user-container",children:[(0,r.jsxs)("div",{className:"dashboard-content",children:[(0,r.jsxs)("h2",{className:"welcome-text",children:["Bienvenue ",e]}),(0,r.jsxs)("p",{className:"info-text",children:["Restez connect\xe9s et \xe9changez sans limites avec ",(0,r.jsx)("span",{className:"brand",children:"MyMeet"}),"."]}),(0,r.jsxs)("div",{className:"btn-container",children:[(0,r.jsx)(a(),{href:"/videoConference",className:"btn-primary",children:"Lancer un call"}),(0,r.jsx)(a(),{href:"/joinRoom",className:"btn-secondary",children:"Rejoindre un call"})]})]}),(0,r.jsx)("img",{className:"logo-meet",src:"/vercel.svg",alt:"Logo Vercel"})]})}n(9077)},2558:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5512),s=n(8531),o=n.n(s),a=n(8009),i=n(9334),d=n(1840);function l(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),h=(0,i.useRouter)(),m=async()=>{try{if((await (0,d.Gm)()).ok)await (0,d.Ux)(),window.dispatchEvent(new Event("authChange")),h.push("/auth/login");else throw Error}catch(e){console.error("Error during logout:",e)}};return(0,r.jsx)("header",{className:"container",children:(0,r.jsxs)("div",{className:"header_wrapper",children:[(0,r.jsxs)(o(),{href:"/",children:[" ",(0,r.jsxs)("div",{className:"logo",children:["My",(0,r.jsx)("span",{children:"Meet"})]})]}),(0,r.jsxs)("nav",{className:e?"active":"",children:[(0,r.jsx)(o(),{href:"/about",children:"A propos"}),(0,r.jsx)(o(),{href:"/team",children:"Notre \xe9quipe"}),n&&(0,r.jsx)("button",{onClick:m,className:"btn btn-logout",children:"Se d\xe9connecter"}),!n&&(0,r.jsx)(o(),{href:"/auth/login",className:"btn btn-main",children:"Nous rejoindre"}),n&&(0,r.jsx)(o(),{href:"/dashboard",className:"btn btn-main",children:"Mon compte"})]}),(0,r.jsxs)("div",{className:"nav-btn d-sm",onClick:()=>t(!e),children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})]})})}n(4659)},1840:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>j,Eq:()=>h,$l:()=>f,iW:()=>y,Ve:()=>m,wz:()=>c,lS:()=>g,T2:()=>o,Ux:()=>a,kz:()=>l,f3:()=>p,TK:()=>u,Gm:()=>i});let r={register:"https://authdjango.myddns.me/api/register/",refreshJWT:"https://authdjango.myddns.me/api/refresh/",validateJWT:"https://authdjango.myddns.me/api/validate/",loginJWT:"https://authdjango.myddns.me/api/login/",logoutJWT:"https://authdjango.myddns.me/api/logout/",updateUser:"https://authdjango.myddns.me/api/update_user/",updatePassword:"https://authdjango.myddns.me/api/update_password/",create_reunion:"https://authdjango.myddns.me/api/create_reunion/",get_reunions:"https://authdjango.myddns.me/api/get_reunions/",end_reunion:"https://authdjango.myddns.me/api/end_reunion/",create_room:"https://authdjango.myddns.me/api/create_room/",check_room:"https://authdjango.myddns.me/api/check_room/",delete_room:"https://authdjango.myddns.me/api/delete_room/"};async function s(e,t){let n=await fetch(e,t);if(401===n.status||403==n.status)try{console.log("tthe validate JWT return 401");let n=await d();if(console.log("the refresh token is ",n),n.ok)return fetch(e,t);console.log("error refresh token failed")}catch(e){}return n}async function o(e){return fetch(r.loginJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("email")),password:String(e.get("password"))})})}async function a(){try{return await fetch(r.logoutJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){console.error("Error during logout:",e)}}async function i(){return await s(r.validateJWT,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function d(){return await fetch(r.refreshJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}async function l(e){return fetch(r.register,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function c(){let e=await i();return e.ok?(await e.json()).user:""}async function u(e){return await s(r.updateUser,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function p(e){return await s(r.updatePassword,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({oldpassword:String(e.get("password")),newpassword:String(e.get("newpassword"))})})}async function h(e,t,n){return await s(r.create_reunion,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,begin_time:new Date(t).toISOString(),num_participants:n})})}async function m(e,t,n){return await s(r.end_reunion,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,end_time:new Date(t).toISOString(),num_participants:n})})}async function g(){return await s(r.get_reunions,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function f(e){try{let t=await s(r.create_room,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_time:new Date(e).toISOString()})});if(t.ok)return(await t.json()).name;return""}catch(e){return""}}async function y(e){return await s(r.delete_room+e+"/",{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}})}async function j(e){return(await s(r.check_room+e+"/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})).ok}},4724:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c,metadata:()=>l});var r=n(2740),s=n(5455),o=n.n(s),a=n(8819),i=n.n(a);n(1135);var d=n(4898);let l={title:"MyMeet",description:"Generated by create next app"};function c({children:e}){return(0,r.jsx)("html",{lang:"fr",children:(0,r.jsxs)("body",{className:`${o().variable} ${i().variable}`,children:[(0,r.jsx)(d.default,{}),e]})})}},754:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Desktop\\\\Projet-AWS-3\\\\frontend\\\\src\\\\app\\\\(layout-app)\\\\userPage\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\userPage\\page.tsx","default")},4898:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Desktop\\\\Projet-AWS-3\\\\frontend\\\\src\\\\components\\\\Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\components\\Header.tsx","default")},9077:()=>{},1135:()=>{},4659:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[403,570],()=>n(9225));module.exports=r})();