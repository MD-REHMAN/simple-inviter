(this["webpackJsonpsimple-inviter"]=this["webpackJsonpsimple-inviter"]||[]).push([[0],{16:function(e,t,a){e.exports=a(29)},21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),o=(a(21),a(22),a(2)),l=a(1),s=a(4),u=a(3),m=function(e){var t=e.url,a=e.method,n=e.data;return fetch(t,{method:a,mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})},b=function(e){console.log(e.status+" "+e.statusText)},d=Object(u.b)(null,(function(e){return{login:function(t){return e(function(e){return function(t,a){console.log("data sent- ",JSON.stringify(e)),m("http//:test.kruntummy.com/apii/login/").then((function(e){return e.ok?t({type:"LOGIN_SUCCESS"}):b(e),t({type:"LOGIN_SUCCESS"}),e.json()})).then((function(e){console.log("API DATA -",e)}))}}(t))}}}))((function(e){var t=Object(n.useState)({userName:"",password:""}),a=Object(s.a)(t,2),r=a[0],i=a[1],u=Object(n.useState)({userName:"",password:""}),m=Object(s.a)(u,2),b=m[0],d=m[1],p=function(e){i(Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},e.target.name,e.target.value))),d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},e.target.name,"")))},O=function(){return Object.keys(r).map((function(e){return!(r[t=e]?"password"===t&&r[t].length<8&&(d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},t,"Atlest 8 characters"))),1):(d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},t,"It cannot be empty"))),1));var t})).reduce((function(e,t){return e&&t}))&&e.login(r),!0};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("div",{className:"input-element"},c.a.createElement("input",{type:"text",name:"userName",className:"username "+(b.userName&&"has-error"),placeholder:"Username",onChange:function(e){p(e)},value:r.userName}),c.a.createElement("span",{className:"errorMessage"},b.userName)),c.a.createElement("div",{className:"input-element"},c.a.createElement("input",{type:"password",name:"password",className:"password "+(b.password&&"has-error"),placeholder:"Password",onChange:function(e){return p(e)},value:r.password}),c.a.createElement("span",{className:"errorMessage"},b.password)),c.a.createElement("button",{onClick:function(){return O()}},"Login")))})),p=a(15),O=Object(u.b)(null,(function(e){return{sendInvite:function(t){return e(function(e){return function(t,a){console.log("data sent- ",JSON.stringify(e)),m("http://test.kruntummy.com/apii/accounts/send_invitation/").then((function(e){return 200===e.status?t({type:"INVITE_SENT"}):b(e),e.json()})).then((function(e){console.log("API DATA -",e)}))}}(t))}}}))((function(e){var t=Object(n.useState)({email:"",mobile:""}),a=Object(s.a)(t,2),r=a[0],i=a[1],u=Object(n.useState)({email:"",mobile:""}),m=Object(s.a)(u,2),b=m[0],d=m[1],O=Object(n.useState)([]),f=Object(s.a)(O,2),j=f[0],v=f[1],g=j.map((function(e,t){return c.a.createElement("div",{className:"list-item"},c.a.createElement("span",{className:"eamil"},"Email: ",e.email),c.a.createElement("span",{className:"mobile"},"Mobile: ",e.mobile),c.a.createElement("button",{onClick:function(){return N(t)}},"Remove"))})),E=function(e){i(Object(l.a)(Object(l.a)({},r),{},Object(o.a)({},e.target.name,e.target.value))),d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},e.target.name,"")))},h=function(){return Object.keys(r).map((function(e){return!(r[t=e]?"mobile"===t&&10!==r[t].length?(d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},t,"Mobile should only contain 10 digit"))),1):"email"===t&&!r[t].includes("@")&&(d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},t,"Invalid email"))),1):(d(Object(l.a)(Object(l.a)({},b),{},Object(o.a)({},t,"It cannot be empty"))),1));var t})).reduce((function(e,t){return e&&t}))},N=function(e){var t=j.filter((function(t,a){return a!==e}));v(t)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"invite-wrapper"},c.a.createElement("div",null,c.a.createElement("div",{className:"inviter-adder"},c.a.createElement("div",{className:"input-element"},c.a.createElement("input",{type:"text",name:"email",className:"email "+(b.email&&"has-error"),placeholder:"Email",onChange:function(e){E(e)},value:r.email}),c.a.createElement("span",{className:"errorMessage"},b.email)),c.a.createElement("div",{className:"input-element"},c.a.createElement("input",{type:"text",name:"mobile",className:"movile "+(b.mobile&&"has-error"),placeholder:"Mobile Number",onChange:function(e){E(e)},value:r.mobile}),c.a.createElement("span",{className:"errorMessage"},b.mobile)),c.a.createElement("button",{onClick:function(){return function(){if(!h())return!1;v([].concat(Object(p.a)(j),[Object(l.a)(Object(l.a)({},r),{},{index:j.length})])),i({email:"",mobile:""})}()}},"Add")),c.a.createElement("div",{className:"invitee-list"},g)),c.a.createElement("button",{onClick:function(){return function(){var t=j.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{index:t})}));e.sendInvite(t),v([])}()}},"Send Invite")))}));var f=Object(u.b)((function(e){return{main:e}}))((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"background-main"}),c.a.createElement("div",{className:"background-shine obtuse"}),c.a.createElement("div",{className:"background-shine acute"}),c.a.createElement("main",null,function(){switch(e.main.activeView){case"login":return c.a.createElement(d,null);case"invite":return c.a.createElement(O,null);default:return c.a.createElement(d,null)}}()))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(6),v={activeView:"login"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("LOGIN_SUCCESS"),Object(l.a)(Object(l.a)({},e),{},{activeView:"invite"});default:return e}},E=a(14),h=Object(j.c)(g,Object(j.a)(E.a));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:h},c.a.createElement(f,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.065d98f7.chunk.js.map