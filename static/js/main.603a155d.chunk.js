(this["webpackJsonpsimple-inviter"]=this["webpackJsonpsimple-inviter"]||[]).push([[0],{16:function(e,t,n){e.exports=n(29)},21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),i=n.n(o),r=(n(21),n(22),n(3)),l=n(1),u=n(6),s=n(2),m=function(e){var t=e.url,n=e.method,a=e.data;return fetch(t,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})},d=function(e){console.log(e.statusText)},f=Object(s.b)(null,(function(e){return{login:function(t){return e(function(e){return function(t,n){console.log("data sent- ",JSON.stringify(e)),m("http//:test.kruntummy.com/apii/login/").then((function(e){return console.log("response",e),e.ok?t({type:"LOGIN_SUCCESS"}):d(e),e.json()})).then((function(e){console.log("API DATA -",e)}))}}(t))}}}))((function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),o=n[0],i=n[1],s=function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(r.a)({},e.target.name,e.target.value)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("input",{type:"text",name:"userName",className:"userName",placeholder:"Username",onChange:function(e){s(e)},value:o.userName}),c.a.createElement("input",{type:"password",name:"password",className:"password",placeholder:"Password",onChange:function(e){return s(e)},value:o.password}),c.a.createElement("button",{onClick:function(){return e.login(o)}},"Login")))})),v=n(15),b=Object(s.b)(null,(function(e){return{sendInvite:function(t){return e(function(e){return function(t,n){console.log("data sent- ",JSON.stringify(e)),m("http://test.kruntummy.com/apii/accounts/send_invitation/").then((function(e){return console.log("response",e),200===e.status?t({type:"INVITE_SENT"}):d(e),e.json()})).then((function(e){console.log("API DATA invite -",e)}))}}(t))}}}))((function(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),o=n[0],i=n[1],s=Object(a.useState)([]),m=Object(u.a)(s,2),d=m[0],f=m[1],b=d.map((function(e,t){return c.a.createElement("div",{className:"list-item"},c.a.createElement("span",{className:"eamil"},"Emai: ",e.email),c.a.createElement("span",{className:"mobile"},"Mobile: ",e.mobile),c.a.createElement("button",{onClick:function(){return g(t)}},"Remove"))})),p=function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(r.a)({},e.target.name,e.target.value)))},g=function(e){var t=d.filter((function(t,n){return n!==e}));f(t)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"invite-wrapper"},c.a.createElement("div",null,c.a.createElement("div",{className:"inviter-adder"},c.a.createElement("input",{type:"text",name:"email",className:"email",placeholder:"Email",onChange:function(e){p(e)},value:o.email}),c.a.createElement("input",{type:"text",name:"mobile",className:"mobile",placeholder:"Mobile Number",onChange:function(e){p(e)},value:o.mobile}),c.a.createElement("button",{onClick:function(){return f([].concat(Object(v.a)(d),[Object(l.a)(Object(l.a)({},o),{},{index:d.length})])),void i({})}},"Add")),c.a.createElement("div",{className:"invitee-list"},b)),c.a.createElement("button",{onClick:function(){return function(){var t=d.map((function(e,t){return Object(l.a)(Object(l.a)({},e),{},{index:t})}));e.sendInvite(t),f([])}()}},"Send Invite")))}));var p=Object(s.b)((function(e){return{main:e}}))((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"background-main"}),c.a.createElement("div",{className:"background-shine obtuse"}),c.a.createElement("div",{className:"background-shine acute"}),c.a.createElement("main",null,function(){switch(e.main.activeView){case"login":return c.a.createElement(f,null);case"invite":return c.a.createElement(b,null);default:return c.a.createElement(f,null)}}()))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=n(5),E={activeView:"login"},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("LOGIN_SUCCESS"),Object(l.a)(Object(l.a)({},e),{},{activeView:"invite"});default:return e}},O=n(14),j=Object(g.c)(h,Object(g.a)(O.a));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:j},c.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.603a155d.chunk.js.map