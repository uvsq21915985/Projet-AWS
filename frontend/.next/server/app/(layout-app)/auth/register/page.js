(()=>{var e={};e.id=853,e.ids=[853],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},3813:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>l});var n=r(260),s=r(8203),o=r(5155),a=r.n(o),i=r(7292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);r.d(t,d);let l=["",{children:["(layout-app)",{children:["auth",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5030)),"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\register\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,4724)),"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"]}],c=["C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\register\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/(layout-app)/auth/register/page",pathname:"/auth/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4111:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},2359:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},7244:(e,t,r)=>{Promise.resolve().then(r.bind(r,4898))},796:(e,t,r)=>{Promise.resolve().then(r.bind(r,2558))},3802:(e,t,r)=>{Promise.resolve().then(r.bind(r,5030))},6850:(e,t,r)=>{Promise.resolve().then(r.bind(r,2946))},2946:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5512),s=r(8531),o=r.n(s);r(6381);var a=r(8009),i=r(1840),d=r(9334);function l(){let e=(0,d.useRouter)(),[t,r]=(0,a.useState)(!1),[s,l]=(0,a.useState)(""),[c,u]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[h,g]=(0,a.useState)(null),f=async n=>{n.preventDefault();let s=new FormData(n.currentTarget);if(console.log("RESPONSEFORM",s),console.log("email :",s.get("email")),console.log("username :",s.get("username")),console.log("password :",s.get("password")),!t){r(!0);try{console.log("Registration Starting");let t=await (0,i.kz)(s);if(console.log("RESPONSE",t),console.log("RESPONSE IS OK :",t.ok),t.ok)console.log("IN RES OK"),console.log("The user has been registered"),e.push("/auth/login");else{let e=await t.json(),r=Object.values(e).flat(),n=r.join(", ");console.log("RES IS OK BUT ! "+r),g("Erreur lors de l'inscription : "+n)}}catch(e){console.log("LOGIN EROOR",e),setTimeout(()=>g(null),1500),g("mot de passe ou email erron\xe9 !")}r(!1)}};return(0,n.jsx)("div",{className:"auth container",children:(0,n.jsxs)("div",{className:"auth-wrapper",children:[(0,n.jsx)("h1",{children:"S'inscrire"}),(0,n.jsx)("p",{children:"S'inscrire pour passer des appels d'une autre maniere"}),h&&(0,n.jsx)("p",{className:"message msg-error text-center",children:h}),(0,n.jsxs)("form",{onSubmit:f,method:"post",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"username",className:"form-label",children:"Nom d'utilisateur"}),(0,n.jsx)("div",{className:"form-input",children:(0,n.jsx)("input",{type:"text",name:"username",required:!0,value:c,onChange:e=>u(e.target.value),id:"username",autoComplete:"false",placeholder:"ex: mymeet"})})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email"}),(0,n.jsx)("div",{className:"form-input",children:(0,n.jsx)("input",{type:"email",name:"email",required:!0,value:s,onChange:e=>l(e.target.value),id:"email",autoComplete:"false",placeholder:"ex: mymeet@gmail.com"})})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"password",className:"form-label",children:"Mot de passe"}),(0,n.jsx)("div",{className:"form-input",children:(0,n.jsx)("input",{type:"password",required:!0,value:p,onChange:e=>m(e.target.value),name:"password",autoComplete:"false",id:"password",placeholder:"votre mot de passe"})})]}),(0,n.jsx)("button",{className:"btn btn-main jc-c ai-c "+(t?"disable":""),type:"submit",children:t?"Loading...":"S'inscrire"}),(0,n.jsxs)(o(),{href:"/auth/login",children:["Deja membre ? ",(0,n.jsx)("span",{className:"clr_main",children:"se connecter"})]})]})]})})}},2558:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5512),s=r(8531),o=r.n(s),a=r(8009),i=r(9334),d=r(1840);function l(){let[e,t]=(0,a.useState)(!1),[r,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),m=(0,i.useRouter)(),h=async()=>{try{if((await (0,d.Gm)()).ok)await (0,d.Ux)(),window.dispatchEvent(new Event("authChange")),m.push("/auth/login");else throw Error}catch(e){console.error("Error during logout:",e)}};return(0,n.jsx)("header",{className:"container",children:(0,n.jsxs)("div",{className:"header_wrapper",children:[(0,n.jsxs)(o(),{href:"/",children:[" ",(0,n.jsxs)("div",{className:"logo",children:["My",(0,n.jsx)("span",{children:"Meet"})]})]}),(0,n.jsxs)("nav",{className:e?"active":"",children:[(0,n.jsx)(o(),{href:"/about",children:"A propos"}),(0,n.jsx)(o(),{href:"/team",children:"Notre \xe9quipe"}),r&&(0,n.jsx)("button",{onClick:h,className:"btn btn-logout",children:"Se d\xe9connecter"}),!r&&(0,n.jsx)(o(),{href:"/auth/login",className:"btn btn-main",children:"Nous rejoindre"}),r&&(0,n.jsx)(o(),{href:"/dashboard",className:"btn btn-main",children:"Mon compte"})]}),(0,n.jsxs)("div",{className:"nav-btn d-sm",onClick:()=>t(!e),children:[(0,n.jsx)("span",{}),(0,n.jsx)("span",{}),(0,n.jsx)("span",{})]})]})})}r(4659)},1840:(e,t,r)=>{"use strict";r.d(t,{$Q:()=>j,Eq:()=>m,$l:()=>f,iW:()=>y,Ve:()=>h,wz:()=>c,lS:()=>g,T2:()=>o,Ux:()=>a,kz:()=>l,f3:()=>p,TK:()=>u,Gm:()=>i});let n={register:"https://authdjango.myddns.me/api/register/",refreshJWT:"https://authdjango.myddns.me/api/refresh/",validateJWT:"https://authdjango.myddns.me/api/validate/",loginJWT:"https://authdjango.myddns.me/api/login/",logoutJWT:"https://authdjango.myddns.me/api/logout/",updateUser:"https://authdjango.myddns.me/api/update_user/",updatePassword:"https://authdjango.myddns.me/api/update_password/",create_reunion:"https://authdjango.myddns.me/api/create_reunion/",get_reunions:"https://authdjango.myddns.me/api/get_reunions/",end_reunion:"https://authdjango.myddns.me/api/end_reunion/",create_room:"https://authdjango.myddns.me/api/create_room/",check_room:"https://authdjango.myddns.me/api/check_room/",delete_room:"https://authdjango.myddns.me/api/delete_room/"};async function s(e,t){let r=await fetch(e,t);if(401===r.status||403==r.status)try{console.log("tthe validate JWT return 401");let r=await d();if(console.log("the refresh token is ",r),r.ok)return fetch(e,t);console.log("error refresh token failed")}catch(e){}return r}async function o(e){return fetch(n.loginJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("email")),password:String(e.get("password"))})})}async function a(){try{return await fetch(n.logoutJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}catch(e){console.error("Error during logout:",e)}}async function i(){return await s(n.validateJWT,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function d(){return await fetch(n.refreshJWT,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"}})}async function l(e){return fetch(n.register,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function c(){let e=await i();return e.ok?(await e.json()).user:""}async function u(e){return await s(n.updateUser,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:String(e.get("username")),email:String(e.get("email")),password:String(e.get("password"))})})}async function p(e){return await s(n.updatePassword,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({oldpassword:String(e.get("password")),newpassword:String(e.get("newpassword"))})})}async function m(e,t,r){return await s(n.create_reunion,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,begin_time:new Date(t).toISOString(),num_participants:r})})}async function h(e,t,r){return await s(n.end_reunion,{method:"PUT",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_id:e,end_time:new Date(t).toISOString(),num_participants:r})})}async function g(){return await s(n.get_reunions,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})}async function f(e){try{let t=await s(n.create_room,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({schedule_time:new Date(e).toISOString()})});if(t.ok)return(await t.json()).name;return""}catch(e){return""}}async function y(e){return await s(n.delete_room+e+"/",{method:"DELETE",credentials:"include",headers:{"Content-Type":"application/json"}})}async function j(e){return(await s(n.check_room+e+"/",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}})).ok}},5030:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Desktop\\\\Projet-AWS-3\\\\frontend\\\\src\\\\app\\\\(layout-app)\\\\auth\\\\register\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\app\\(layout-app)\\auth\\register\\page.tsx","default")},4724:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>l});var n=r(2740),s=r(5455),o=r.n(s),a=r(8819),i=r.n(a);r(1135);var d=r(4898);let l={title:"MyMeet",description:"Generated by create next app"};function c({children:e}){return(0,n.jsx)("html",{lang:"fr",children:(0,n.jsxs)("body",{className:`${o().variable} ${i().variable}`,children:[(0,n.jsx)(d.default,{}),e]})})}},4898:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\33685\\\\Desktop\\\\Projet-AWS-3\\\\frontend\\\\src\\\\components\\\\Header.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\33685\\Desktop\\Projet-AWS-3\\frontend\\src\\components\\Header.tsx","default")},6381:()=>{},1135:()=>{},4659:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[403,570],()=>r(3813));module.exports=n})();