var m,p=this;
function r(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function s(a){return"array"==r(a)}function aa(a){var b=r(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function u(a){return a[ca]||(a[ca]=++da)}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function v(a,b,c){v=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return v.apply(null,arguments)}
function x(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c};function ga(){}function y(a,b){var c=localStorage.getItem(a);return void 0==c?b:JSON.parse(c)}function z(a,b){localStorage.setItem(a,JSON.stringify(b))};function ha(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ja(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var e=0;e<ia.length;e++)c=ia[e],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function ka(){this.a={U:"zhuyin-lt",W:"zhuyin-sk",V:"zhuyin-ps"}}x(ka,ga);function la(){this.u={an_ang:void 0,c_ch:void 0,en_eng:void 0,f_h:void 0,ian_iang:void 0,in_ing:void 0,k_g:void 0,l_n:void 0,r_l:void 0,s_sh:void 0,uan_uang:void 0,z_zh:void 0};this.a={C:"pinyin-fpe",D:"pinyin-ud",k:"pinyin-fe",o:"pinyin-tp",j:"pinyin-bp",l:"pinyin-il",n:"pinyin-is",m:"pinyin-ip"}}x(la,ga);function A(){this.r={};this.w()}A.P=function(){return A.I?A.I:A.I=new A};A.prototype.w=function(){this.r["zh-t-i0-pinyin"]=new la;this.r["zh-hant-t-i0-und"]=new ka};function B(){0!=ma&&(this.X=Error().stack,na[u(this)]=this)}var ma=0,na={};B.prototype.F=!1;B.prototype.p=function(){if(!this.F&&(this.F=!0,this.e(),0!=ma)){var a=u(this);delete na[a]}};B.prototype.e=function(){if(this.K)for(;this.K.length;)this.K.shift()()};function oa(a){if(!pa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(qa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ra,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(sa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ta,"&quot;"));return a}var qa=/&/g,ra=/</g,sa=/>/g,ta=/\"/g,pa=/[&<>\"]/;var C="closure_listenable_"+(1E6*Math.random()|0),ua=0;function va(a,b,c,d,f,e){this.h=a;this.L=b;this.src=c;this.type=d;this.capture=!!f;this.v=e;this.key=++ua;this.i=this.s=!1};var D,E,F,G;function wa(){return p.navigator?p.navigator.userAgent:null}G=F=E=D=!1;var H;if(H=wa()){var xa=p.navigator;D=0==H.indexOf("Opera");E=!D&&-1!=H.indexOf("MSIE");F=!D&&-1!=H.indexOf("WebKit");G=!D&&!F&&"Gecko"==xa.product}var ya=D,I=E,J=G,K=F,za=p.navigator,Aa=-1!=(za&&za.platform||"").indexOf("Mac");function Ba(){var a=p.document;return a?a.documentMode:void 0}var L;
a:{var M="",N;if(ya&&p.opera)var O=p.opera.version,M="function"==typeof O?O():O;else if(J?N=/rv\:([^\);]+)(\)|;)/:I?N=/MSIE\s+([^\);]+)(\)|;)/:K&&(N=/WebKit\/(\S+)/),N)var Ca=N.exec(wa()),M=Ca?Ca[1]:"";if(I){var Da=Ba();if(Da>parseFloat(M)){L=String(Da);break a}}L=M}var Ea={};
function P(a){var b;if(!(b=Ea[a])){b=0;for(var c=String(L).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=k.exec(g)||["","",""],q=l.exec(h)||["","",""];if(0==n[0].length&&0==q[0].length)break;b=((0==n[1].length?0:parseInt(n[1],10))<(0==q[1].length?0:parseInt(q[1],10))?-1:(0==n[1].length?0:parseInt(n[1],
10))>(0==q[1].length?0:parseInt(q[1],10))?1:0)||((0==n[2].length)<(0==q[2].length)?-1:(0==n[2].length)>(0==q[2].length)?1:0)||(n[2]<q[2]?-1:n[2]>q[2]?1:0)}while(0==b)}b=Ea[a]=0<=b}return b}var Fa=p.document,Ga=Fa&&I?Ba()||("CSS1Compat"==Fa.compatMode?parseInt(L,10):5):void 0;var Ha=!I||I&&9<=Ga,Ia=I&&!P("9");!K||P("528");J&&P("1.9b")||I&&P("8")||ya&&P("9.5")||K&&P("528");J&&!P("8")||I&&P("9");var Q=Array.prototype,Ja=Q.indexOf?function(a,b,c){return Q.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ka=Q.forEach?function(a,b,c){Q.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=t(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)};function La(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ma(a,b,c){return 2>=arguments.length?Q.slice.call(a,b):Q.slice.call(a,b,c)};function Na(a,b){this.type=a;this.currentTarget=this.target=b}m=Na.prototype;m.e=function(){};m.p=function(){};m.A=!1;m.defaultPrevented=!1;m.R=!0;m.preventDefault=function(){this.defaultPrevented=!0;this.R=!1};function Oa(a){Oa[" "](a);return a}Oa[" "]=function(){};function R(a,b){a&&Pa(this,a,b)}x(R,Na);m=R.prototype;m.target=null;m.relatedTarget=null;m.offsetX=0;m.offsetY=0;m.clientX=0;m.clientY=0;m.screenX=0;m.screenY=0;m.button=0;m.keyCode=0;m.charCode=0;m.ctrlKey=!1;m.altKey=!1;m.shiftKey=!1;m.metaKey=!1;m.Q=!1;m.G=null;
function Pa(a,b,c){var d=a.type=b.type;Na.call(a,d);a.target=b.target||b.srcElement;a.currentTarget=c;if(c=b.relatedTarget){if(J){var f;a:{try{Oa(c.nodeName);f=!0;break a}catch(e){}f=!1}f||(c=null)}}else"mouseover"==d?c=b.fromElement:"mouseout"==d&&(c=b.toElement);a.relatedTarget=c;a.offsetX=K||void 0!==b.offsetX?b.offsetX:b.layerX;a.offsetY=K||void 0!==b.offsetY?b.offsetY:b.layerY;a.clientX=void 0!==b.clientX?b.clientX:b.pageX;a.clientY=void 0!==b.clientY?b.clientY:b.pageY;a.screenX=b.screenX||0;
a.screenY=b.screenY||0;a.button=b.button;a.keyCode=b.keyCode||0;a.charCode=b.charCode||("keypress"==d?b.keyCode:0);a.ctrlKey=b.ctrlKey;a.altKey=b.altKey;a.shiftKey=b.shiftKey;a.metaKey=b.metaKey;a.Q=Aa?b.metaKey:b.ctrlKey;a.state=b.state;a.G=b;b.defaultPrevented&&a.preventDefault();delete a.A}m.preventDefault=function(){R.B.preventDefault.call(this);var a=this.G;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ia)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};
m.e=function(){};var Qa={},S={},T={},U={};function Ra(a,b,c,d,f){if(s(b)){for(var e=0;e<b.length;e++)Ra(a,b[e],c,d,f);return null}c=Sa(c);return a&&a[C]?Ta(a,b,c,d,f):Ua(a,b,c,!1,d,f)}
function Ua(a,b,c,d,f,e){if(!b)throw Error("Invalid event type");f=!!f;var g=S;b in g||(g[b]={c:0,d:0});g=g[b];f in g||(g[f]={c:0,d:0},g.c++);var g=g[f],h=u(a),k;g.d++;if(g[h]){k=g[h];for(var l=0;l<k.length;l++)if(g=k[l],g.h==c&&g.v==e){if(g.i)break;d||(k[l].s=!1);return k[l]}}else k=g[h]=[],g.c++;l=Va();g=new va(c,l,a,b,f,e);g.s=d;l.src=a;l.h=g;k.push(g);T[h]||(T[h]=[]);T[h].push(g);a.addEventListener?a.addEventListener(b,l,f):a.attachEvent(b in U?U[b]:U[b]="on"+b,l);return Qa[g.key]=g}
function Va(){var a=Wa,b=Ha?function(c){return a.call(b.src,b.h,c)}:function(c){c=a.call(b.src,b.h,c);if(!c)return c};return b}function Xa(a,b,c,d,f){if(s(b)){for(var e=0;e<b.length;e++)Xa(a,b[e],c,d,f);return null}c=Sa(c);return a&&a[C]?Ya(a,b,c,d,f):Ua(a,b,c,!0,d,f)}
function Za(a){if("number"==typeof a||!a||a.i)return!1;var b=a.src;if(b&&b[C])return b.$(a);var c=a.type,d=a.L,f=a.capture;b.removeEventListener?b.removeEventListener(c,d,f):b.detachEvent&&b.detachEvent(c in U?U[c]:U[c]="on"+c,d);b=u(b);if(T[b]){var d=T[b],e=Ja(d,a);0<=e&&Q.splice.call(d,e,1);0==d.length&&delete T[b]}a.i=!0;a.h=null;a.L=null;a.src=null;a.v=null;if(d=S[c][f][b])d.J=!0,$a(c,f,b,d);delete Qa[a.key];return!0}
function $a(a,b,c,d){if(!d.q&&d.J){for(var f=0,e=0;f<d.length;f++)d[f].i||(f!=e&&(d[e]=d[f]),e++);d.length=e;d.J=!1;0==e&&(delete S[a][b][c],S[a][b].c--,0==S[a][b].c&&(delete S[a][b],S[a].c--),0==S[a].c&&delete S[a])}}function ab(a,b,c,d,f){var e=1;b=u(b);if(a[b]){var g=--a.d,h=a[b];h.q?h.q++:h.q=1;try{for(var k=h.length,l=0;l<k;l++){var n=h[l];n&&!n.i&&(e&=!1!==bb(n,f))}}finally{a.d=Math.max(g,a.d),h.q--,$a(c,d,b,h)}}return Boolean(e)}
function bb(a,b){var c=a.h,d=a.v||a.src;a.s&&Za(a);return c.call(d,b)}
function Wa(a,b){if(a.i)return!0;var c=a.type,d=S;if(!(c in d))return!0;var d=d[c],f,e;if(!Ha){var g;if(!(g=b))a:{g=["window","event"];for(var h=p;f=g.shift();)if(null!=h[f])h=h[f];else{g=null;break a}g=h}f=g;g=!0 in d;h=!1 in d;if(g){if(0>f.keyCode||void 0!=f.returnValue)return!0;a:{var k=!1;if(0==f.keyCode)try{f.keyCode=-1;break a}catch(l){k=!0}if(k||void 0==f.returnValue)f.returnValue=!0}}k=new R;Pa(k,f,this);f=!0;try{if(g){for(var n=[],q=k.currentTarget;q;q=q.parentNode)n.push(q);e=d[!0];e.d=
e.c;for(var w=n.length-1;!k.A&&0<=w&&e.d;w--)k.currentTarget=n[w],f&=ab(e,n[w],c,!0,k);if(h)for(e=d[!1],e.d=e.c,w=0;!k.A&&w<n.length&&e.d;w++)k.currentTarget=n[w],f&=ab(e,n[w],c,!1,k)}else f=bb(a,k)}finally{n&&(n.length=0)}return f}c=new R(b,this);return f=bb(a,c)}var cb="__closure_events_fn_"+(1E9*Math.random()>>>0);function Sa(a){return"function"==r(a)?a:a[cb]||(a[cb]=function(b){return a.handleEvent(b)})};function V(a){B.call(this);this.H=a;this.a={}}x(V,B);var db=[];function Ta(a,b,c,d,f){s(c)||(db[0]=c,c=db);for(var e=0;e<c.length;e++){var g=Ra(b,c[e],d||a,f||!1,a.H||a);if(!g)break;a.a[g.key]=g}return a}function Ya(a,b,c,d,f,e){if(s(c))for(var g=0;g<c.length;g++)Ya(a,b,c[g],d,f,e);else b=Xa(b,c,d||a,f,e||a.H||a),a.a[b.key]=b;return a}V.prototype.e=function(){V.B.e.call(this);ha(this.a,Za);this.a={}};V.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};function eb(a,b){var c;c=a.className;c=t(c)&&c.match(/\S+/g)||[];for(var d=Ma(arguments,1),f=c.length+d.length,e=c,g=0;g<d.length;g++)0<=Ja(e,d[g])||e.push(d[g]);a.className=c.join(" ");return c.length==f};var fb=!I||I&&9<=Ga;!J&&!I||I&&I&&9<=Ga||J&&P("1.9.1");I&&P("9");function W(a){return t(a)?document.getElementById(a):a}function gb(a,b){ha(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in hb?a.setAttribute(hb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var hb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function X(a,b,c){var d=arguments,f=document,e=d[0],g=d[1];if(!fb&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',oa(g.name),'"');if(g.type){e.push(' type="',oa(g.type),'"');var h={};ja(h,g);delete h.type;g=h}e.push(">");e=e.join("")}e=f.createElement(e);g&&(t(g)?e.className=g:s(g)?eb.apply(null,[e].concat(g)):gb(e,g));2<d.length&&ib(f,e,d,2);return e}
function ib(a,b,c,d){function f(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var e=c[d];if(!aa(e)||ba(e)&&0<e.nodeType)f(e);else{var g;a:{if(e&&"number"==typeof e.length){if(ba(e)){g="function"==typeof e.item||"string"==typeof e.item;break a}if("function"==r(e)){g="function"==typeof e.item;break a}}g=!1}Ka(g?La(e):e,f)}}}function jb(a,b){ib(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments,1)};function Y(){this.t=new V(this);var a=A.P();this.b=a.r["zh-t-i0-pinyin"]?a.r["zh-t-i0-pinyin"]:null;this.w();Xa(window,"unload",v(this.p,this))}x(Y,B);
var Z={N:"chos_fuzzy_pinyin_selection",O:"chos_user_dict_selection",o:"chos_top_page_selection",j:"chos_bottom_page_selection",l:"chos_init_lang_selection",n:"chos_init_sbc_selection",m:"chos_init_punc_selection",M:"chos_fuzzy_expansion_"},kb=chrome.g.f("pinyin_setting_page"),lb=chrome.g.f("fuzzy_pinyin"),mb=chrome.g.f("user_dict"),nb=chrome.g.f("move_page_key_above"),ob=chrome.g.f("move_page_key_below"),pb=chrome.g.f("init_lang"),qb=chrome.g.f("init_sbc"),rb=chrome.g.f("init_punc");
Y.prototype.w=function(){var a=X("H2",{"class":"chos-title"});a.appendChild(document.createTextNode(String(kb)));var b=X("DIV",{"class":"chos-select-div"}),c=!!y(this.b.a.C,!1),d=$(this,"chos_fuzzy_pinyin_selection",lb,c);Ta(this.t,d,"change",v(this.T,this));var f=y(this.b.a.k,this.b.u),e=X("DIV",{"class":"chos-fuzzy-div"}),g=[X("DIV",{"class":"chos-fuzzy-div-left"}),X("DIV",{"class":"chos-fuzzy-div-right"})],h=0,k;for(k in f){var l=f[k];void 0==l&&(l=c);l=$(this,"chos_fuzzy_expansion_"+k,k.split("_").join(":"),
l&&c,!c);g[h].appendChild(l);h=(h+1)%2}jb(e,g);c=!!y(this.b.a.D,!0);c=$(this,"chos_user_dict_selection",mb,c);f=!!y(this.b.a.o,!0);f=$(this,"chos_top_page_selection",nb,f);g=!!y(this.b.a.j,!0);g=$(this,"chos_bottom_page_selection",ob,g);h=!!y(this.b.a.l,!0);h=$(this,"chos_init_lang_selection",pb,h);k=!!y(this.b.a.n,!1);k=$(this,"chos_init_sbc_selection",qb,k);l=!!y(this.b.a.m,!0);l=$(this,"chos_init_punc_selection",rb,l);b.appendChild(d);b.appendChild(e);b.appendChild(c);b.appendChild(f);b.appendChild(g);
b.appendChild(h);b.appendChild(k);b.appendChild(l);d=X("DIV",{"class":"chos-main"});d.appendChild(a);d.appendChild(b);document.body.appendChild(d)};function $(a,b,c,d,f){d=X("input",{type:"checkbox",id:b,checked:d,disabled:f});b=X("label",{"for":b});b.appendChild(document.createTextNode(String(c)));c=X("DIV",{"class":"chos-select-item"});c.appendChild(d);c.appendChild(b);Ta(a.t,d,"change",v(a.S,a));return c}
Y.prototype.T=function(){var a=W("chos_fuzzy_pinyin_selection").checked,b=y(this.b.a.k,this.b.u),c;for(c in b){var d=b[c];void 0==d&&(d=a);gb(W("chos_fuzzy_expansion_"+c),{checked:d&&a,disabled:!a})}};
Y.prototype.S=function(){var a=W(Z.N).checked;z(this.b.a.C,a);z(this.b.a.D,W(Z.O).checked);z(this.b.a.o,W(Z.o).checked);z(this.b.a.j,W(Z.j).checked);z(this.b.a.l,W(Z.l).checked);z(this.b.a.n,W(Z.n).checked);z(this.b.a.m,W(Z.m).checked);if(a){var a=y(this.b.a.k,this.b.u),b;for(b in a)a[b]=W(Z.M+b).checked;z(this.b.a.k,a)}chrome.Y.Z({update:"zh-t-i0-pinyin"})};Y.prototype.e=function(){var a=this.t;a&&"function"==typeof a.p&&a.p();Y.B.e.call(this)};new Y;