(function(e){function n(n){for(var o,l,u=n[0],i=n[1],c=n[2],v=0,f=[];v<u.length;v++)l=u[v],r[l]&&f.push(r[l][0]),r[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(n);while(f.length)f.shift()();return t.push.apply(t,c||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],o=!0,u=1;u<a.length;u++){var i=a[u];0!==r[i]&&(o=!1)}o&&(t.splice(n--,1),e=l(l.s=a[0]))}return e}var o={},r={app:0},t=[];function l(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=o,l.d=function(e,n,a){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(a,o,function(n){return e[n]}.bind(null,o));return a},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/vuejv/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=n,u=u.slice();for(var c=0;c<u.length;c++)n(u[c]);var s=i;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"034f":function(e,n,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},"0f60":function(e,n,a){"use strict";var o=a("ad46"),r=a.n(o);r.a},4064:function(e,n,a){"use strict";var o=a("b99b"),r=a.n(o);r.a},"414e":function(e,n,a){},"56d7":function(e,n,a){"use strict";a.r(n);a("14c6"),a("08c1"),a("4842"),a("d9fc");var o=a("2b0e"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{attrs:{id:"app"}},[a("a",{attrs:{href:"https://github.com/jprando/vuejv"}},[e._v("projeto no github")]),a("jv")],1)},t=[],l=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("jv-board",{on:{jogar:e.jogarPartida},model:{value:e.posicoes,callback:function(n){e.posicoes=n},expression:"posicoes"}}),a("div",{staticClass:"options"},[a("button",{staticClass:"reset",on:{click:e.reiniciar}},[e._v("reiniciar")]),a("div",[a("h1",[e._v("\n        JOGADOR\n        "+e._s(e.vezDe)+"\n        "),a("h1",{directives:[{name:"show",rawName:"v-show",value:e.alguemGanhou,expression:"alguemGanhou"}]},[e._v("GANHOU")])])])])],1)},u=[],i=a("db0c"),c=a.n(i),s=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"board"},[a("div",{staticClass:"row"},[a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A1,callback:function(n){e.$set(e.value,"A1",n)},expression:"value.A1"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B1,callback:function(n){e.$set(e.value,"B1",n)},expression:"value.B1"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C1,callback:function(n){e.$set(e.value,"C1",n)},expression:"value.C1"}})],1),a("div",{staticClass:"row"},[a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A2,callback:function(n){e.$set(e.value,"A2",n)},expression:"value.A2"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B2,callback:function(n){e.$set(e.value,"B2",n)},expression:"value.B2"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C2,callback:function(n){e.$set(e.value,"C2",n)},expression:"value.C2"}})],1),a("div",{staticClass:"row"},[a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.A3,callback:function(n){e.$set(e.value,"A3",n)},expression:"value.A3"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.B3,callback:function(n){e.$set(e.value,"B3",n)},expression:"value.B3"}}),a("jv-cell",{on:{jogar:e.jogarPartida},model:{value:e.value.C3,callback:function(n){e.$set(e.value,"C3",n)},expression:"value.C3"}})],1)])},v=[],f=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("button",{staticClass:"cell",class:{ganhou:e.value.ganhou},attrs:{disabled:e.value.exibir},on:{click:e.jogar}},[e._v(" "+e._s(e.value.exibir)+"\n")])},p=[],d={name:"jvCell",props:["value"],methods:{jogar:function(){this.$emit("jogar",this.value)}}},g=d,j=(a("0f60"),a("2877")),b=Object(j["a"])(g,f,p,!1,null,null,null),h=b.exports,m={name:"jvBoard",components:{jvCell:h},props:["value"],methods:{jogarPartida:function(e){this.$emit("jogar",e)}}},x=m,C=(a("c592"),Object(j["a"])(x,s,v,!1,null,null,null)),_=C.exports,O=a("e814"),P=a.n(O),w=[448,56,7,292,146,73,273,84],$=function(e){return function(n){return n==e?1:0}},k=function(e,n){return e.map(n).join("")},y=function(e){return function(n){return(n&e)==n}},A=function(e,n){return w.some(y(P()(k(n,$(e)),2)))&&e},B=function(e){return A("X",e)||A("O",e)},G=B,D={name:"jv",components:{jvBoard:_},data:function(){return{vezDe:"X",alguemGanhou:!1,posicoes:{A1:{exibir:null,ganhou:!1},A2:{exibir:null,ganhou:!1},A3:{exibir:null,ganhou:!1},B1:{exibir:null,ganhou:!1},B2:{exibir:null,ganhou:!1},B3:{exibir:null,ganhou:!1},C1:{exibir:null,ganhou:!1},C2:{exibir:null,ganhou:!1},C3:{exibir:null,ganhou:!1}}}},computed:{jogada:function(){var e=function(e){return e.exibir},n=function(n){return c()(n).map(e)};return n(this.posicoes)}},methods:{jogarPartida:function(e){console.log("jogar partida");var n=this.vezDe,a=!this.alguemGanhou;if(a){var o=this;e.exibir=n;var r=G(o.jogada);console.log(r&&"".concat(r," ganhou")||"ninguem ganhou"),o.alguemGanhou=r==n,o.alguemGanhou||(o.vezDe="X"===n?"O":"X")}},reiniciar:function(){console.clear(),console.log("reiniciar");var e=this;for(var n in e.posicoes){var a=e.posicoes[n];a.exibir=null,a.ganhou=!1}e.alguemGanhou=!1}}},S=D,z=(a("4064"),Object(j["a"])(S,l,u,!1,null,null,null)),E=z.exports,M={name:"app",components:{jv:E}},X=M,J=(a("034f"),Object(j["a"])(X,r,t,!1,null,null,null)),T=J.exports;o["a"].config.productionTip=!1,new o["a"]({name:"WebApp",render:function(e){return e(T)}}).$mount("#app")},"64a9":function(e,n,a){},ad46:function(e,n,a){},b99b:function(e,n,a){},c592:function(e,n,a){"use strict";var o=a("414e"),r=a.n(o);r.a}});