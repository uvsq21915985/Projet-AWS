(()=>{var e={};e.id=505,e.ids=[505],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},2010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var r=n(260),s=n(8203),o=n(5155),a=n.n(o),i=n(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);n.d(t,d);let l=["",{children:["(layout-app)",{children:["auth",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.bind(n,5714)),"C:\\Users\\33685\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\login\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,4724)),"C:\\Users\\33685\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"]}]},{"not-found":[()=>Promise.resolve().then(n.t.bind(n,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(n.t.bind(n,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(n.t.bind(n,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["C:\\Users\\33685\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\login\\page.tsx"],u={require:n,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(layout-app)/auth/login/page",pathname:"/auth/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4215:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,3219,23)),Promise.resolve().then(n.t.bind(n,4863,23)),Promise.resolve().then(n.t.bind(n,5155,23)),Promise.resolve().then(n.t.bind(n,802,23)),Promise.resolve().then(n.t.bind(n,9350,23)),Promise.resolve().then(n.t.bind(n,8530,23)),Promise.resolve().then(n.t.bind(n,8921,23))},7183:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,6959,23)),Promise.resolve().then(n.t.bind(n,3875,23)),Promise.resolve().then(n.t.bind(n,8903,23)),Promise.resolve().then(n.t.bind(n,7174,23)),Promise.resolve().then(n.t.bind(n,4178,23)),Promise.resolve().then(n.t.bind(n,7190,23)),Promise.resolve().then(n.t.bind(n,1365,23))},8026:(e,t,n)=>{Promise.resolve().then(n.bind(n,4898))},2306:(e,t,n)=>{Promise.resolve().then(n.bind(n,2558))},9728:(e,t,n)=>{Promise.resolve().then(n.bind(n,5714))},9456:(e,t,n)=>{Promise.resolve().then(n.bind(n,6))},6:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var r=n(5512),s=n(8531),o=n.n(s);n(5937);var a=n(8009),i=n(1840),d=n(9334);function l(){let e=(0,d.useRouter)(),[t,n]=(0,a.useState)(!1),[s,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[p,h]=(0,a.useState)(null),m=async r=>{r.preventDefault();let s=new FormData(r.currentTarget);if(console.log("RESPONSEFORM",s),console.log("email :",s.get("email")),console.log("password :",s.get("password")),t){console.log("PENDING");return}n(!0);try{console.log("LOGIN STARTING");let t=await (0,i.T2)(s);console.log("RESPONSE",t),console.log("RESPONSE IS OK :",t.ok),t.ok&&e.push("/userPage")}catch(e){console.log("LOGIN ERROR",e),setTimeout(()=>h(null),1500),h("mot de passe ou email erron\xe9 !")}n(!1)};return(0,r.jsx)("div",{className:"auth container",children:(0,r.jsxs)("div",{className:"auth-wrapper",children:[(0,r.jsx)("h1",{children:"Connexion"}),(0,r.jsx)("p",{children:"Se connecter pour passer des appels d'une autre maniere"}),p&&(0,r.jsx)("p",{className:"message msg-error text-center",children:p}),(0,r.jsxs)("form",{onSubmit:m,children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),(0,r.jsx)("div",{className:"form-input",children:(0,r.jsx)("input",{type:"email",required:!0,value:s,onChange:e=>l(e.target.value),name:"email",id:"email",autoComplete:"false",placeholder:"ex: mymeet@gmail.com"})})]}),(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),(0,r.jsx)("div",{className:"form-input",children:(0,r.jsx)("input",{type:"password",required:!0,value:c,onChange:e=>u(e.target.value),name:"password",autoComplete:"false",id:"password",placeholder:"votre mot de passe"})})]}),(0,r.jsx)("button",{className:"btn btn-main jc-c ai-c "+(t?"disable":""),type:"submit",children:t?"Loading...":"Se connecter"}),(0,r.jsxs)(o(),{href:"/auth/register",children:["Pas encore membre ? ",(0,r.jsx)("span",{className:"clr_main",children:"s'inscrire"})]})]})]})})}},2558:(e,t,n)=>{"use strict";n.d(t,{default:()=>l});var r=n(5512),s=n(8531),o=n.n(s),a=n(8009),i=n(9334),d=n(1840);function l(){let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),h=(0,i.useRouter)(),m=async()=>{try{if((await (0,d.Gm)()).ok)await (0,d.Ux)(),window.dispatchEvent(new Event("authChange")),h.push("/auth/login");else throw Error}catch(e){console.error("Error during logout:",e)}};return(0,r.jsx)("header",{className:"container",children:(0,r.jsxs)("div",{className:"header_wrapper",children:[(0,r.jsxs)(o(),{href:"/",children:[" ",(0,r.jsxs)("div",{className:"logo",children:["My",(0,r.jsx)("span",{children:"Meet"})]})]}),(0,r.jsxs)("nav",{className:e?"active":"",children:[(0,r.jsx)(o(),{href:"/about",children:"A propos"}),(0,r.jsx)(o(),{href:"/team",children:"Notre \xe9quipe"}),n&&(0,r.jsx)("button",{onClick:m,className:"btn btn-logout",children:"Se d\xe9connecter"}),!n&&(0,r.jsx)(o(),{href:"/auth/login",className:"btn btn-main",children:"Nous rejoindre"}),n&&(0,r.jsx)(o(),{href:"/dashboard",className:"btn btn-main",children:"Mon compte"})]}),(0,r.jsxs)("div",{className:"nav-btn d-sm",onClick:()=>t(!e),children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})]})})}n(4659)},1840:(e,t,n)=>{"use strict";n.d(t,{$Q:()=>j,Eq:()=>h,$l:()=>f,iW:()=>y,Ve:()=>m,wz:()=>c,lS:()=>g,T2:()=>o,Ux:()=>a,kz:()=>l,f3:()=>p,TK:()=>u,Gm:()=>i});let r={register:"https://authdjango.myddns.me/api/register/",refreshJWT:"https://authdjango.myddns.me/api/refresh/",validateJWT:"https://authdjango.myddns.me/api/validate/",loginJWT:"https://authdjango.myddns.me/api/login/",logoutJWT:"https://authdjango.myddns.me/api/logout/",updateUser:"https://authdjango.myddns.me/api/update_user/",updatePassword:"https://authdjango.myddns.me/api/update_password/",create_reunion:"https://authdjango.myddns.me/api/create_reunion/",get_reunions:"https://authdjango.myddns.me/api/get_reunions/",end_reunion:"https://authdjango.myddns.me/api/end_reunion/",create_room:"https://authdjango.myddns.me/api/create_room/",check_room:"https://authdjango.myddns.me/api/check_room/",delete_room:"https://authdjango.myddns.me/api/delete_room/"};async function s(e,t){let n=await fetch(e,t);if(401===n.status||403==n.status)try{console.log("tthe validate JWT return 401");let n=await d();if(console.log("the refresh token is ",n),n.ok)return fetch(e,t);console.log("error refresh token failed")}catch(e){}return n}async function o(e){return fetch(r.loginJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("email")),password:String(e.get("password"))})})}async function a(){try{return await fetch(r.logoutJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){console.error("Error during logout:",e)}}async function i(){return await s(r.validateJWT,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function d(){return await fetch(r.refreshJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}async function l(e){return fetch(r.register,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function c(){let e=await i();return e.ok?(await e.json()).user:""}async function u(e){return await s(r.updateUser,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function p(e){return await s(r.updatePassword,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({oldpassword:String(e.get("password")),newpassword:String(e.get("newpassword"))})})}async function h(e,t,n){return await s(r.create_reunion,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,begin_time:new Date(t).toISOString(),num_participants:n})})}async function m(e,t,n){return await s(r.end_reunion,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,end_time:new Date(t).toISOString(),num_participants:n})})}async function g(){return await s(r.get_reunions,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function f(e){try{let t=await s(r.create_room,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_time:new Date(e).toISOString()})});if(t.ok)return(await t.json()).name;return""}catch(e){return""}}async function y(e){return await s(r.delete_room+e+"/",{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}})}async function j(e){return(await s(r.check_room+e+"/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})).ok}},5714:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Projet-AWS-3\\\\frontend\\\\src\\\\app\\\\(layout-app)\\\\auth\\\\login\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\login\\page.tsx","default")},4724:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c,metadata:()=>l});var r=n(2740),s=n(5455),o=n.n(s),a=n(8819),i=n.n(a);n(1135);var d=n(4898);let l={title:"MyMeet",description:"Generated by create next app"};function c({children:e}){return(0,r.jsx)("html",{lang:"fr",children:(0,r.jsxs)("body",{className:`${o().variable} ${i().variable}`,children:[(0,r.jsx)(d.default,{}),e]})})}},4898:(e,t,n)=>{"use strict";n.d(t,{default:()=>r});let r=(0,n(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Projet-AWS-3\\\\frontend\\\\src\\\\components\\\\Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Projet-AWS-3\\frontend\\src\\components\\Header.tsx","default")},5937:()=>{},1135:()=>{},4659:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[403,570],()=>n(2010));module.exports=r})();