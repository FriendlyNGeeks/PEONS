(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{71:function(e,t){},74:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(42),c=a.n(o),r=a(44),s=a(1),m=a(9),i=a(10),u=a(12),d=a(11),p=function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)},E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Home.js => Home Route mounted"),console.log("Home.js => ","http://192.168.0.41"),window.settings={SERVER_IP:"http://192.168.0.41",SERVER_PORT:"7000",USER:Object({NODE_ENV:"production",PUBLIC_URL:"http://192.168.0.41",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_NODE_ENV:"production",REACT_APP_SERVER_IP:"http://192.168.0.41",REACT_APP_SERVER_PORT:"7000"}).REACT_APP_USER},p("/frontend/js/socket.js")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"mt-4"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Controlled Running Text"),l.a.createElement("b",null,"Raspberry Pi + Express.js + Socket.io"),l.a.createElement("div",{id:"output"},l.a.createElement("marquee",{id:"text",scrollamount:"13",style:{fontSize:250}},"Raspberry Pi Running Text")))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("React Modal Component mounted")}},{key:"render",value:function(){return l.a.createElement("div",{className:"modal fade",id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-lg modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Settings"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-quote-right"}))),l.a.createElement("input",{id:"message",className:"form-control form-control-lg",type:"text",placeholder:"Write text here...",onfocusout:"typingStop()"}))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-paint-brush"}))),l.a.createElement("input",{id:"txtcolor",type:"color",className:"form-control form-control-lg",value:"#FFFFFF"})))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-font"}))),l.a.createElement("select",{id:"font",className:"form-control form-control-lg"},l.a.createElement("option",{value:"Anonymous Pro"},"Anonymous Pro"),l.a.createElement("option",{value:"Bangers"},"Bangers"),l.a.createElement("option",{value:"Black Ops One"},"Black Ops One"),l.a.createElement("option",{value:"Caesar Dressing"},"Caesar Dressing"),l.a.createElement("option",{value:"Faster One"},"Faster One"),l.a.createElement("option",{value:"Fredoka One"},"Fredoka One"),l.a.createElement("option",{value:"Lobster"},"Lobster"),l.a.createElement("option",{value:"Pacifico"},"Pacifico")))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-tachometer-alt"}))),l.a.createElement("select",{id:"speed",className:"form-control form-control-lg"},l.a.createElement("option",{value:"18"},"Medium"),l.a.createElement("option",{value:"5"},"Slow"),l.a.createElement("option",{value:"32"},"Fast")))),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("div",{className:"input-group mb-2"},l.a.createElement("div",{className:"input-group-prepend"},l.a.createElement("div",{className:"input-group-text"},l.a.createElement("i",{className:"fas fa-paint-roller"}))),l.a.createElement("input",{id:"bgcolor",type:"color",className:"form-control form-control-lg",value:"#000000"})))),l.a.createElement("div",{id:"feedback"})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{id:"send",type:"button",className:"btn btn-success"},l.a.createElement("i",{className:"fas fa-check-circle"}),"\xa0 Apply")))))}}]),a}(n.Component),b=a(46),f=a(43),N=a.n(f),g=(a(74),N()("http://192.168.0.41:7000"));var y=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){g.on("connectionAdmin",(function(e){o(e)})),g.on("connectionMade",(function(e,t){o(e)})),g.on("connectionLost",(function(e,t){o(e)}))})),l.a.createElement("div",{id:"clientTable"},l.a.createElement("h2",null,"Client Table | Active Clients: ",a.length),l.a.createElement("ul",null,a.map((function(e,t){return l.a.createElement("li",{key:e.Username},"Client: ",e.Username," Section: ",e.Section," IPv4: ",e.Client_IP)}))))},h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Admin.js => Admin Route mounted"),console.log("Admin.js => server @ http://192.168.0.41"),window.settings={SERVER_IP:"http://192.168.0.41",SERVER_PORT:"7000",adminCalls:0},document.title="PEONS | Admin Dashboard",p("/backend/js/socket-admin.js")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"mt-4"},l.a.createElement("i",{className:"iconify","data-icon":"logos-raspberry-pi","data-inline":"true"}),"Notify | Admin Dashboard"),l.a.createElement("b",null,"Raspberry Pi + Express.js + Socket.io"),l.a.createElement("br",null),l.a.createElement("button",{type:"button",className:"mt-3 btn-sm btn btn-success","data-toggle":"modal","data-target":"#exampleModalCenter"},l.a.createElement("i",{className:"fas fa-cog"}),"\xa0 Settings"),l.a.createElement("button",{type:"button",id:"resetAll",className:"mt-3 btn-sm btn btn-success"},"RESET ALL"),l.a.createElement(v,null),l.a.createElement(y,null),l.a.createElement("div",{id:"output"},l.a.createElement("marquee",{id:"text",scrollamount:"13",style:{fontSize:250}},"Raspberry Pi Running Text ","http://192.168.0.41")))}}]),a}(n.Component),R=function(){return l.a.createElement(r.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:E}),l.a.createElement(s.a,{path:"/admin*",component:h})))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null)),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.ea9cf6a7.chunk.js.map