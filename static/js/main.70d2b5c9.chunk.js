(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),s=n.n(c),i=(n(4),n(2)),u=n(0);var l=function(e){return Object(u.jsx)("button",{className:e.className,onClick:e.onClick,disabled:e.disabled,children:e.children})};var o=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(i.a)(c,2),o=s[0],b=s[1],j=Object(r.useState)(0),m=Object(i.a)(j,2),d=m[0],O=m[1],v=Object(r.useCallback)((function(){if(n||o){var e=""===n?0:parseInt(n),t=""===o?0:parseInt(o);O(60*e+t),a(""),b("")}}),[o,n]);Object(r.useEffect)((function(){var e;return e=d>0&&setInterval((function(){return O(d-1)}),1e3),function(){return clearInterval(e)}}),[d]);var f=Object(r.useMemo)((function(){var e=Math.trunc(d/60);return e<10?"0"+e:e}),[d]),p=Object(r.useMemo)((function(){var e=d%60;return e<10?"0"+e:e}),[d]);return Object(u.jsxs)("div",{className:"timer",children:[Object(u.jsxs)("p",{className:"timer__display",children:[" ",f," : ",p," "]}),Object(u.jsx)("p",{children:" Enter the time: "}),Object(u.jsx)("input",{className:"timer__input",type:"number",placeholder:"mm",value:n,onChange:function(e){if(e.target.value>=0)return a(e.target.value)}}),Object(u.jsx)("input",{className:"timer__input",type:"number",placeholder:"ss",value:o,onChange:function(e){if(e.target.value>=0&&e.target.value<60)return b(e.target.value)}}),Object(u.jsx)(l,{className:"timer__button",onClick:v,disabled:d>0,children:"Start"}),Object(u.jsx)(l,{className:"timer__button",onClick:function(){O(0),a(""),b("")},children:"Reset"})]})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(o,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.70d2b5c9.chunk.js.map