(function(e){function a(a){for(var o,l,u=a[0],i=a[1],s=a[2],v=0,p=[];v<u.length;v++)l=u[v],Object.prototype.hasOwnProperty.call(t,l)&&t[l]&&p.push(t[l][0]),t[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);c&&c(a);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,u=1;u<n.length;u++){var i=n[u];0!==t[i]&&(o=!1)}o&&(r.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},t={app:0},r=[];function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=a,u=u.slice();for(var s=0;s<u.length;s++)a(u[s]);var c=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"034f":function(e,a,n){"use strict";var o=n("64a9"),t=n.n(o);t.a},"0f60":function(e,a,n){"use strict";var o=n("ad46"),t=n.n(o);t.a},4064:function(e,a,n){"use strict";var o=n("b99b"),t=n.n(o);t.a},"414e":function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);var o=n("2b0e"),t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{attrs:{id:"app"}},[n("a",{attrs:{href:"https://github.com/jprando/vuejv"}},[e._v("projeto no github")]),n("jv")],1)},r=[],l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("jv-board",{on:{jogar:e.jogarPartida},model:{value:e.posicoes,callback:function(a){e.posicoes=a},expression:"posicoes"}}),n("div",{staticClass:"options"},[n("button",{staticClass:"reset",on:{click:e.reiniciar}},[e._v("reiniciar")]),n("div",{staticStyle:{"margin-bottom":"10px"}},[n("h1",[e._v("\n        JOGADOR\n        "+e._s(e.vezDe)+"\n        "),n("h1",{directives:[{name:"show",rawName:"v-show",value:e.alguemGanhou,expression:"alguemGanhou"}]},[e._v("GANHOU")])])])])],1)},u=[],i=(n("ac6a"),function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"board"},[n("div",{staticClass:"row"},[n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A1,callback:function(a){e.$set(e.value,"A1",a)},expression:"value.A1"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B1,callback:function(a){e.$set(e.value,"B1",a)},expression:"value.B1"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C1,callback:function(a){e.$set(e.value,"C1",a)},expression:"value.C1"}})],1),n("div",{staticClass:"row"},[n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A2,callback:function(a){e.$set(e.value,"A2",a)},expression:"value.A2"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B2,callback:function(a){e.$set(e.value,"B2",a)},expression:"value.B2"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C2,callback:function(a){e.$set(e.value,"C2",a)},expression:"value.C2"}})],1),n("div",{staticClass:"row"},[n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A3,callback:function(a){e.$set(e.value,"A3",a)},expression:"value.A3"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B3,callback:function(a){e.$set(e.value,"B3",a)},expression:"value.B3"}}),n("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C3,callback:function(a){e.$set(e.value,"C3",a)},expression:"value.C3"}})],1)])}),s=[],c=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("button",{staticClass:"cell",class:{ganhou:e.value.ganhou},attrs:{disabled:e.value.exibir},on:{click:e.jogar}},[e._v(" "+e._s(e.value.exibir)+"\n")])},v=[],p={name:"jvCell",props:["value"],methods:{jogar(){this.$emit("jogar",this.value)}}},f=p,d=(n("0f60"),n("2877")),g=Object(d["a"])(f,c,v,!1,null,null,null),h=g.exports,j={name:"jvBoard",components:{jvCell:h},props:["value"],methods:{jogarPartida(e){this.$emit("jogar",e)}}},b=j,m=(n("c592"),Object(d["a"])(b,i,s,!1,null,null,null)),x=m.exports,C={448:["A1","A2","A3"],56:["B1","B2","B3"],7:["C1","C2","C3"],292:["A1","B1","C1"],146:["A2","B2","C2"],73:["A3","B3","C3"],273:["A1","B2","C3"],84:["A3","B2","C1"]};const A=[448,56,7,292,146,73,273,84],B=e=>a=>a==e?1:0,O=(e,a)=>e.map(a).join``,_=e=>a=>(a&e)==a,P=e=>{const a=a=>parseInt(O(a,B(e)),2);return{ganhou:n=>({ganhou:A.some(_(a(n)))&&e,posicaoVitoria:A.filter(_(a(n))).map(e=>C[e])})}},y=e=>{const a=P`X`.ganhou(e);if(a.ganhou)return a;{const a=P`O`.ganhou(e);if(a)return a}};var w=y,$={name:"jv",components:{jvBoard:x},data(){return{vezDe:"X",alguemGanhou:!1,posicoes:{A1:{exibir:null,ganhou:!1},A2:{exibir:null,ganhou:!1},A3:{exibir:null,ganhou:!1},B1:{exibir:null,ganhou:!1},B2:{exibir:null,ganhou:!1},B3:{exibir:null,ganhou:!1},C1:{exibir:null,ganhou:!1},C2:{exibir:null,ganhou:!1},C3:{exibir:null,ganhou:!1}}}},computed:{jogada(){const e=e=>e.exibir,a=a=>Object.values(a).map(e);return a(this.posicoes)}},methods:{jogarPartida(e){let a=this.vezDe,n=!this.alguemGanhou;if(n){let o=this;e.exibir=a;const t=w(o.jogada);o.alguemGanhou=t.ganhou==a,o.alguemGanhou&&t.ganhou&&t.posicaoVitoria.forEach(e=>{e.forEach(e=>o.posicoes[e].ganhou=!0)}),n=!o.alguemGanhou,n&&(o.vezDe="X"===a?"O":"X")}},reiniciar(){const e=this;for(const a in e.posicoes){let n=e.posicoes[a];n.exibir=null,n.ganhou=!1}e.alguemGanhou=!1}}},k=$,G=(n("4064"),Object(d["a"])(k,l,u,!1,null,null,null)),E=G.exports,S={name:"app",components:{jv:E}},D=S,z=(n("034f"),Object(d["a"])(D,t,r,!1,null,null,null)),M=z.exports;o["a"].config.productionTip=!1,new o["a"]({name:"WebApp",render:e=>e(M)}).$mount("#app")},"64a9":function(e,a,n){},ad46:function(e,a,n){},b99b:function(e,a,n){},c592:function(e,a,n){"use strict";var o=n("414e"),t=n.n(o);t.a}});