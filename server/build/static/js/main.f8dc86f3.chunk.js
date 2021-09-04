(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{71:function(e,t){},74:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(43),c=a.n(r),o=a(45),s=a(1),m=a(10),i=a(11),u=a(13),p=a(12);var d=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"mt-4"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Notify | Admin Dashboard"),l.a.createElement("b",null,"Raspberry Pi + Express.js + Socket.io"),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"mt-3 btn-sm btn btn-success","data-toggle":"modal","data-target":"#exampleModalCenter"},l.a.createElement("i",{className:"fas fa-cog"}),"\xa0 Settings"),l.a.createElement("button",{type:"button",id:"resetAll",className:"mt-3 btn-sm btn btn-success"},"RESET ALL"))};var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"mt-4"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Controlled Running Text"),l.a.createElement("b",null,"Raspberry Pi + Express.js + Socket.io"),l.a.createElement("div",null,l.a.createElement("h1",null,"PLEASE CHECK URL")))};var b=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"mt-4"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Controlled Running Text"),l.a.createElement("b",null,"Raspberry Pi + Express.js + Socket.io"))},f=a(6),v=a(44),g=a.n(v),N=(a(74),g()("http://peons.local:80"));var h=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(f.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){N.on("connectionAdmin",(function(e,t){r(e),m(t)})),N.on("connectionMade",(function(e,t){r(e)})),N.on("connectionLost",(function(e,t){r(e)}))})),l.a.createElement("div",{id:"clientTable"},l.a.createElement("span",null,"Server listening @ ",s),l.a.createElement("h2",null,"Client Table | Active Clients: ",a.length),l.a.createElement("ul",null,a.map((function(e,t){return l.a.createElement("li",{key:e.Username},l.a.createElement("a",{target:"_blank",href:"http://"+e.Client_IP,rel:"noreferrer"},"Client: ",e.Username," Section: ",e.Section," IPv4: ",e.Client_IP))}))))};var y=function(){var e=Object(n.useState)(null),t=Object(f.a)(e,2);return t[0],t[1],l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"output"},l.a.createElement("marquee",{id:"text",scrollamount:"13",style:{fontSize:250}},"Raspberry Pi Running Text ","http://peons.local")))};var j=function(){var e=Object(n.useState)("#FFFFFF"),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("#000000"),o=Object(f.a)(c,2),s=o[0],m=o[1];return l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Settings"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-quote-right"}))),l.a.createElement("input",{id:"message",className:"form-control form-control-lg",type:"text",placeholder:"Write text here...",onfocusout:"typingStop()"}))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-paint-brush"}))),l.a.createElement("input",{id:"txtcolor",type:"color",className:"form-control form-control-lg",value:a,onChange:function(e){return r(e.target.value)}})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-font"}))),l.a.createElement("select",{id:"font",className:"form-control form-control-lg"},l.a.createElement("option",{value:"Anonymous Pro"},"Anonymous Pro"),l.a.createElement("option",{value:"Bangers"},"Bangers"),l.a.createElement("option",{value:"Black Ops One"},"Black Ops One"),l.a.createElement("option",{value:"Caesar Dressing"},"Caesar Dressing"),l.a.createElement("option",{value:"Faster One"},"Faster One"),l.a.createElement("option",{value:"Fredoka One"},"Fredoka One"),l.a.createElement("option",{value:"Lobster"},"Lobster"),l.a.createElement("option",{value:"Pacifico"},"Pacifico")))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-tachometer-alt"}))),l.a.createElement("select",{id:"speed",className:"form-control form-control-lg"},l.a.createElement("option",{value:"18"},"Medium"),l.a.createElement("option",{value:"5"},"Slow"),l.a.createElement("option",{value:"32"},"Fast")))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-paint-roller"}))),l.a.createElement("input",{id:"bgcolor",type:"color",className:"form-control form-control-lg",value:s,onChange:function(e){return m(e.target.value)}})))),l.a.createElement("div",{id:"feedback"})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{id:"send",type:"button",className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-check-circle"}),"\xa0 Apply")))))},O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Home.js => Home Route mounted"),console.log("Home.js => ","http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80"}}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null))}}]),a}(n.Component),R=function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)},S=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Monitor.js => Monitor Route mounted"),console.log("Monitor.js => ","http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80"},R("/frontend/js/socket.js")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(y,null))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Admin.js => Admin Route mounted"),console.log("Admin.js => server @ http://peons.local"),window.settings={SERVER_IP:"http://peons.local",SERVER_PORT:"80",adminCalls:0},document.title="PEONS | Admin Dashboard",R("/backend/js/socket-admin.js")}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,null),l.a.createElement(j,null),l.a.createElement(h,null),l.a.createElement(y,null))}}]),a}(n.Component),C=function(){return l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:O}),l.a.createElement(s.a,{path:"/monitor*",component:S}),l.a.createElement(s.a,{path:"/admin*",component:k})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.f8dc86f3.chunk.js.map