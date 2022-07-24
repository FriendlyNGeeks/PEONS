(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{87:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(47),a=n.n(o),i=n(50),r=n(2),l=n(16),j=n(17),d=n(19),b=n(18),u=n(0);var m=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"mt-4",children:[Object(u.jsx)("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Notify | Admin Dashboard"]}),Object(u.jsx)("b",{children:"Raspberry Pi + Express.js + Socket.io"}),Object(u.jsx)("br",{}),Object(u.jsxs)("button",{type:"button",className:"mt-3 btn-sm btn btn-success","data-toggle":"modal","data-target":"#exampleModalCenter",children:[Object(u.jsx)("i",{className:"fas fa-cog"}),"\xa0 Settings"]}),Object(u.jsx)("button",{type:"button",id:"resetAll",className:"mt-3 btn-sm btn btn-success",children:"RESET ALL"})]})};var p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"mt-4",children:[Object(u.jsx)("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Controlled Running Text"]}),Object(u.jsx)("b",{children:"Raspberry Pi + Express.js + Socket.io"}),Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"PLEASE CHECK URL"})})]})};var O=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h1",{className:"mt-4",children:[Object(u.jsx)("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Controlled Running Text"]}),Object(u.jsx)("b",{children:"Raspberry Pi + Express.js + Socket.io"})]})},x=n(3),h=n(48),f=n.n(h),g=(n(87),{reactComponentName:"clientTable"}),v=f()(window.location.host+":80",{query:g});var N=function(){var e=Object(c.useState)([]),t=Object(x.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(null),a=Object(x.a)(o,2),i=a[0],r=a[1];return Object(c.useEffect)((function(){v.on("connectionAdmin",(function(e,t){s(e),r(t)})),v.on("connectionMade",(function(e,t){s(e)})),v.on("connectionLost",(function(e,t){s(e)}))})),Object(u.jsxs)("div",{id:"clientTable",children:[Object(u.jsxs)("span",{children:["Server listening @ ",i]}),Object(u.jsxs)("h2",{children:["Client Table | Active Clients: ",n.length]}),Object(u.jsx)("ul",{children:n.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)("a",{target:"_blank",href:"http://"+e.Client_IP,rel:"noreferrer",children:["Client: ",e.Username," Section: ",e.Section," IPv4: ",e.Client_IP]})},e.Username)}))})]})};var y=function(){var e=Object(c.useState)(0),t=Object(x.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(0),a=Object(x.a)(o,2),i=a[0],r=a[1],l=Object(c.useState)(60),j=Object(x.a)(l,2),d=j[0],b=j[1],m=1e3*(60*n*60+60*i+d),p=function(){},O={width:"66.33px",flex:"none"};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"col-sm-4 col-sm-offset-4",children:Object(u.jsxs)("div",{className:"input-group mb-1 number-spinner",children:[Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseLeave:p,onMouseUp:p,onMouseDown:function(e){},children:"-"})}),Object(u.jsx)("input",{id:"durationHR",type:"text",className:"form-control text-center",value:n,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseLeave:p,onMouseUp:p,onMouseDown:function(e){},children:"+"})}),Object(u.jsx)("div",{className:"input-group-text m-auto text-center",style:O,children:"hours"})]})}),Object(u.jsx)("div",{className:"col-sm-4 col-sm-offset-4",children:Object(u.jsxs)("div",{className:"input-group mb-2 number-spinner",children:[Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseDown:function(){i-1>=0&&r((function(e){return e-1}))},children:"-"})}),Object(u.jsx)("input",{id:"durationMIN",type:"text",className:"form-control text-center",value:i,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseDown:function(){i+1<=60&&r((function(e){return e+1}))},children:"+"})}),Object(u.jsxs)("div",{className:"input-group-text m-auto text-center",style:O,children:["mins",m]})]})}),Object(u.jsx)("div",{className:"col-sm-4 col-sm-offset-4",children:Object(u.jsxs)("div",{className:"input-group mb-3 number-spinner",children:[Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseDown:function(){d-1>=0&&b((function(e){return e-1}))},children:"-"})}),Object(u.jsx)("input",{id:"durationSEC",type:"text",className:"form-control text-center",max:"60",value:d,onChange:function(e){return b(e.target.value)}}),Object(u.jsx)("span",{class:"input-group-btn",children:Object(u.jsx)("button",{type:"button",className:"btn btn-light",onMouseDown:function(){d+1<=60&&b((function(e){return e+1}))},children:"+"})}),Object(u.jsx)("div",{className:"input-group-text m-auto text-center",style:O,children:"secs"})]})})]})},S=n(49),C=n.n(S),E={reactComponentName:"marquee"},R=io(window.location.host+":80",{query:E});var w=function(){var e=Object(c.useState)(["PEONS Notification Text"]),t=Object(x.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(["Anonymous Pro"]),a=Object(x.a)(o,2),i=a[0],r=a[1],l=Object(c.useState)([0,0,0]),j=Object(x.a)(l,2),d=j[0],b=j[1],m=Object(c.useState)([255,255,255]),p=Object(x.a)(m,2),O=p[0],h=p[1],f=Object(c.useState)([null]),g=Object(x.a)(f,2),v=g[0],N=g[1],y=Object(c.useState)([100]),S=Object(x.a)(y,2),E=S[0],w=S[1],M=Object(c.useState)(["0"]),k=Object(c.useState)(["false"]);return Object(c.useEffect)((function(){R.on("chat",(function(e){s(e.message),r(e.font),b(e.txtcolor),N(e.bgcolor),h(e.bgcolor),w(e.speed)}))})),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(C.a,{speed:E,gradient:k[0],gradientColor:O,gradientWidth:M[0],children:v?Object(u.jsx)("div",{style:{width:"100%",backgroundColor:"rgb("+v[0]+","+v[1]+","+v[2]+")"},children:Object(u.jsx)("div",{id:"text",style:{padding:"0 200px",fontSize:250,fontFamily:i,color:"rgb("+d[0]+","+d[1]+","+d[2]+")"},children:n})}):Object(u.jsx)("div",{style:{width:"100%",backgroundColor:"none"},children:Object(u.jsx)("div",{id:"text",style:{padding:"0 200px",fontSize:250,fontFamily:i,color:"rgb("+d[0]+","+d[1]+","+d[2]+")"},children:n})})})})};var M=function(){var e=Object(c.useState)("#FFFFFF"),t=Object(x.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)("#000000"),a=Object(x.a)(o,2),i=a[0],r=a[1],l=Object(c.useState)("0"),j=Object(x.a)(l,2);return j[0],j[1],Object(u.jsx)("div",{className:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsxs)("h5",{className:"modal-title",id:"exampleModalLongTitle",children:[Object(u.jsx)("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Settings"]}),Object(u.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsxs)("div",{className:"input-group mb-2",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("div",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fas fa-quote-right"})})}),Object(u.jsx)("input",{id:"message",className:"form-control form-control-lg",type:"text",placeholder:"Write text here...",onfocusout:"typingStop()"})]})}),Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsxs)("div",{className:"input-group mb-2",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("div",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fas fa-paint-brush"})})}),Object(u.jsx)("input",{id:"txtcolor",type:"color",className:"form-control form-control-lg",value:n,onChange:function(e){return s(e.target.value)}})]})})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-5",children:Object(u.jsxs)("div",{className:"input-group mb-2",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("div",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fas fa-font"})})}),Object(u.jsxs)("select",{id:"font",className:"form-control form-control-lg",children:[Object(u.jsx)("option",{value:"Anonymous Pro",children:"Anonymous Pro"}),Object(u.jsx)("option",{value:"Bangers",children:"Bangers"}),Object(u.jsx)("option",{value:"Black Ops One",children:"Black Ops One"}),Object(u.jsx)("option",{value:"Caesar Dressing",children:"Caesar Dressing"}),Object(u.jsx)("option",{value:"Faster One",children:"Faster One"}),Object(u.jsx)("option",{value:"Fredoka One",children:"Fredoka One"}),Object(u.jsx)("option",{value:"Lobster",children:"Lobster"}),Object(u.jsx)("option",{value:"Pacifico",children:"Pacifico"})]})]})}),Object(u.jsx)("div",{className:"col-sm-4",children:Object(u.jsxs)("div",{className:"input-group mb-2",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("div",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fas fa-tachometer-alt"})})}),Object(u.jsxs)("select",{id:"speed",className:"form-control form-control-lg",children:[Object(u.jsx)("option",{value:"100",children:"Medium"}),Object(u.jsx)("option",{value:"50",children:"Slow"}),Object(u.jsx)("option",{value:"200",children:"Fast"})]})]})}),Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsxs)("div",{className:"input-group mb-2",children:[Object(u.jsx)("div",{className:"input-group-prepend",children:Object(u.jsx)("div",{className:"input-group-text",children:Object(u.jsx)("i",{className:"fas fa-paint-roller"})})}),Object(u.jsx)("input",{id:"bgcolor",type:"color",className:"form-control form-control-lg",value:i,onChange:function(e){return r(e.target.value)}})]})})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(y,{})}),Object(u.jsx)("div",{id:"feedback"})]}),Object(u.jsx)("div",{className:"modal-footer",children:Object(u.jsxs)("button",{id:"send",type:"button",className:"btn btn-success",children:[Object(u.jsx)("i",{className:"fas fa-check-circle"}),"\xa0 Apply"]})})]})})})},k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("Home.js => Home Route mounted"),console.log("Home.js => ","http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80"}}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(p,{})})}}]),n}(c.Component),F=function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)},P=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("Monitor.js => Monitor Route mounted"),console.log("Monitor.js => ","http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80"},F("/frontend/js/socket.js")}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(w,{})]})}}]),n}(c.Component),A=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){console.log("Admin.js => Admin Route mounted"),console.log("Admin.js => server @ http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80",adminCalls:0},document.title="PEONS | Admin Dashboard",F("/backend/js/socket-admin.js")}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{}),Object(u.jsx)(M,{}),Object(u.jsx)(N,{}),Object(u.jsx)(w,{})]})}}]),n}(c.Component),D=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:k}),Object(u.jsx)(r.a,{path:"/monitor*",component:P}),Object(u.jsx)(r.a,{path:"/admin*",component:A})]})})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.b6cce614.chunk.js.map