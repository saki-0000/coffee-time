(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6],{340:function(e,t,n){"use strict";n.r(t);n(227);var r=n(111),c=(n(68),n(391)),l=function(){var e=Object(r.d)(180),time=Object(r.a)((function(){return e.value}));return{measureTime:function(){var t=setInterval((function(){e.value--,0===time.value&&clearInterval(t)}),1e3)},time:time,formatTime:function(time){return Object(c.a)(new Date(0,0,0,0,0,time),"mm:ss")}}},o=Object(r.b)({props:{second:{type:Number,default:180}},emits:["change"],setup:function(e,t){var n=l(),c=n.measureTime,time=n.time,o=n.formatTime,m=Object(r.d)(!1);Object(r.f)((function(){t.emit("change",time.value)}));return{disabled:m,time:time,onClick:function(){m.value=!0,c()},formatTime:o}}}),m=n(79),f=n(112),v=n.n(f),d=n(394),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{id:"startButton",disabled:e.disabled},on:{click:e.onClick}},[e._t("default",(function(){return[e._v("スタート")]}))],2),e._v(" "),n("span",{attrs:{id:"displayTime"}},[e._v("\n    "+e._s(e.formatTime(e.time))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:d.a})},349:function(e,t,n){"use strict";n.r(t);var r=n(111),c=n(340),l={getLabel:function(time){return 180===time?"コーヒーを淹れる":time<180&&time>120?"1湯目...":time<=120&&time>60?"2湯目...":time<=60&&time>0?"3湯目...":0===time?"Have a Good Time!":void 0}}.getLabel,o=Object(r.b)({components:{Timer:c.default},setup:function(){var time=Object(r.d)(180),label=Object(r.a)((function(){return l(time.value)}));return{time:time,label:label}}}),m=n(79),component=Object(m.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("Timer",{on:{change:function(t){e.time=t}}},[e._v(e._s(e.label))])}),[],!1,null,null,null);t.default=component.exports}}]);