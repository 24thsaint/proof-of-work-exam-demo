(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},122:function(e,t){},124:function(e,t){},157:function(e,t){},158:function(e,t){},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(94),o=a.n(r),l=(a(100),a(13)),i=a.n(l),s=a(29),u=a(14),m=a(23),d=a.n(m),p=a(47),f=a.n(p);a(200);var v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),l=Object(u.a)(o,2),m=l[0],p=l[1],v=Object(n.useState)(""),b=Object(u.a)(v,2),E=b[0],g=b[1],w=Object(n.useState)(""),h=Object(u.a)(w,2),k=h[0],j=h[1],y=Object(n.useState)("0x000"),C=Object(u.a)(y,2),O=C[0],S=C[1],x=Object(n.useState)(!1),N=Object(u.a)(x,2),I=N[0],B=N[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("name"),t=window.localStorage.getItem("id");e&&t&&(r(e),p(t)),Object(s.a)(i.a.mark((function a(){var n;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.get("".concat("","/config"));case 2:return n=a.sent,S(n.data.difficulty),a.next=6,d.a.post("".concat("","/login"),{name:e,id:t});case 6:case"end":return a.stop()}}),a)})))()}),[]);var D=function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat("","/login"),{name:a});case 2:t=e.sent,window.localStorage.setItem("id",t.data.id),window.localStorage.setItem("name",a),p(t.data.id);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return m?c.a.createElement("div",{className:"app"},c.a.createElement("div",null,"Welcome, ",c.a.createElement("h2",null,a)),c.a.createElement("div",null,"Student ID: ",c.a.createElement("h2",null,m.substring(2))),c.a.createElement("div",null,"Connected to server with difficulty: ",c.a.createElement("b",null,O)),c.a.createElement("hr",null),c.a.createElement("div",{className:"top-margin"},c.a.createElement("input",{type:"radio",id:"A",name:"answer",value:"A",onClick:function(){j("A")}}),c.a.createElement("label",{for:"A"},"A")),c.a.createElement("div",{className:"top-margin"},c.a.createElement("input",{type:"radio",id:"B",name:"answer",value:"B",onClick:function(){j("B")}}),c.a.createElement("label",{for:"B"},"B")),c.a.createElement("div",{className:"top-margin"},c.a.createElement("input",{type:"radio",id:"C",name:"answer",value:"C",onClick:function(){j("C")}}),c.a.createElement("label",{for:"C"},"C")),c.a.createElement("div",{className:"top-margin"},c.a.createElement("input",{type:"radio",id:"D",name:"answer",value:"D",onClick:function(){j("D")}}),c.a.createElement("label",{for:"D"},"D")),c.a.createElement("div",{className:"top-margin"},c.a.createElement("button",{onClick:function(){!function(){var e=(new Date).toUTCString(),t=f()(e+k+a+m),n=0,c=setInterval(Object(s.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="0x"+f()(n+t).toString(),g(a),!a.startsWith(O)){e.next=17;break}return window.clearInterval(c),e.prev=4,e.next=7,d.a.post("".concat("","/attempt"),{id:m,hash:a,answer:k});case 7:e.sent,document.body.style="background-color: lime",alert("Congratulations!"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),document.body.style="background-color: red",alert(e.t0.response.data.response);case 16:B(!0);case 17:n+=1;case 18:case"end":return e.stop()}}),e,null,[[4,12]])}))),1)}()}},"Submit")),c.a.createElement("hr",null),E?c.a.createElement("div",{id:"hash",className:"top-margin"},"Proof of Work: ",c.a.createElement("h3",null,E)):null,I?c.a.createElement("div",{className:"top-margin"},c.a.createElement("button",{onClick:function(){document.body.style="background-color: white",B(!1),g("")}},"Reset")):null):c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",{type:"text",onChange:function(e){r(e.target.value)}})),c.a.createElement("div",{className:"top-margin"},c.a.createElement("button",{onClick:function(){D()}},"Submit Name"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(201)}},[[95,1,2]]]);
//# sourceMappingURL=main.c038f4fe.chunk.js.map