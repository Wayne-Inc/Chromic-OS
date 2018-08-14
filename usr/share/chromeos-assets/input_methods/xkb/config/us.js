(function(){function c(b,a){return b.type=a}
var d="data",h="push",l="length",m=".",n="ArrowDown",p="ArrowLeft",aa="ArrowRight",ba="ArrowUp",q="ShiftLeft",r="ShiftRight",ca="The number of switcher key spec is less than the number of switcher keys in the keyset.",da="The number of switcher key spec is more than the number of switcher keys in the keyset.",ea="compactkbd-k-",fa="compactkbd-k-key-",s="compactkbd-qwerty",ga="inputview-arrow-key ",t="inputview-backspace-icon",ha="inputview-down-key",u="inputview-enter-icon",v="inputview-globe-icon",
w="inputview-hide-keyboard-icon",ia="inputview-left-key",ja="inputview-right-key",x="inputview-shift-icon",ka="inputview-up-key",y="more symbols layout",z="number and symbol layout",A="us.compact.qwerty";function B(b){for(var a=[],e={},f=0;f<b[d][l];f++){var k=b[d][f];k==C&&(k.toKeyset=b.id.split(m)[0]);var g;g=k;g.id=k.id?k.id:fa+f;g.type||c(g,22);var k={},E=void 0;for(E in g)k[E]=g[E];g={spec:k};a[h](g);e[g.spec.id]=ea+f}return{keyList:a,mapping:e,layout:b.layout}}
function D(b,a){for(var e=0,f=0;f<b[l];f++)if(b[f]==F){if(e>=a[l]){console.error(ca);return}var k=a[e++],g;for(g in b[f])k[g]=b[f][g];b[f]=k}e<a[l]-1&&console.error(da)}function G(b,a,e,f){H.splice.apply(b,la(arguments,1))}function la(b,a,e){return 2>=arguments[l]?H.slice.call(b,a):H.slice.call(b,a,e)}function I(b){var a={toState:1,iconCssClass:x,type:5};a.id=b?q:r;a.supportSticky=!1;return J(a)}
function K(b){var a={iconCssClass:ga};0==b?(a.id=ba,a.iconCssClass+=ka,c(a,15)):1==b?(a.id=n,a.iconCssClass+=ha,c(a,16)):2==b?(a.id=p,a.iconCssClass+=ia,c(a,17)):3==b&&(a.id=aa,a.iconCssClass+=ja,c(a,18));return J(a)}function J(b){var a={},e;for(e in b)a[e]=b[e];return{spec:a}};var L={iconCssClass:t,type:13,id:"Backspace"},M={iconCssClass:u,type:12,id:"Enter"},N={iconCssClass:w,type:19,id:"HideKeyboard"},O={name:" ",type:11,id:"Space"},F={type:21},C={type:26,name:"\u22ee",id:"Menu"};var H=Array.prototype;for(var P=[["`","~"],["1","!"],["2","@"],["3","#"],["4","$"],["5","%"],["6","^"],["7","&"],["8","*"],["9","("],["0",")"],["-","_"],["=","+"],["q","Q"],["w","W"],["e","E"],["r","R"],["t","T"],["y","Y"],["u","U"],["i","I"],["o","O"],["p","P"],["[","{"],["]","}"],["\\","|"],["a","A"],["s","S"],["d","D"],["f","F"],["g","G"],["h","H"],["j","J"],["k","K"],["l","L"],[";",":"],["'",'"'],["z","Z"],["x","X"],["c","C"],["v","V"],["b","B"],["n","N"],["m","M"],[",","<"],[m,">"],["/","?"],[" "," "]],Q=[],R={},
ma=[],na="Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash".split(" "),S=0;S<P[l]-1;S++){var T={};T.id=na[S];c(T,6);T.characters=P[S];T.keyCode=ma[S];var U=J(T);Q[h](U)}G(Q,13,0,J({iconCssClass:t,type:13,id:"Backspace"}));
G(Q,14,0,J({iconCssClass:"inputview-tab-icon",type:14,id:"Tab"}));G(Q,28,0,J({toState:4,name:"caps lock",type:5,id:"OsLeft"}));G(Q,40,0,J({iconCssClass:u,type:12,id:"Enter"}));G(Q,41,0,I(!0));Q[h](I(!1));Q[h](J({iconCssClass:v,type:27,id:"Globe"}));Q[h](J({name:"\u22ee",toKeyset:A,type:26,id:"Menu"}));Q[h](J({toState:8,name:"ctrl",type:5,id:"ControlLeft"}));Q[h](J({toState:16,name:"alt",type:5,id:"AltLeft"}));Q[h](J({name:" ",type:11,id:"Space"}));Q[h](J({toState:2,name:"alt gr",type:5,id:"AltRight"}));
Q[h](K(2));Q[h](K(3));Q[h](J({iconCssClass:w,type:19,id:"HideKeyboard"}));for(S=0;S<Q[l];S++)U=Q[S],R[U.spec.id]="101kbd-k-"+S;var V=[];V.keyList=Q;V.mapping=R;V.layout="101kbd";V.hasAltGrKey=!1;V.hasCompactKeyboard=!0;V.showMenuKey=!0;V.id="us";google.ime.chrome.inputview.onConfigLoaded(V);
var W={id:A,layout:s,data:[{text:"q",hintText:"1"},{text:"w",hintText:"2"},{text:"e",hintText:"3",moreKeys:["\u00e8","\u00e9","\u00ea","\u00eb","\u0113"]},{text:"r",hintText:"4"},{text:"t",hintText:"5"},{text:"y",hintText:"6"},{text:"u",hintText:"7",moreKeys:["\u00fb","\u00fc","\u00f9","\u00fa","\u016b"]},{text:"i",hintText:"8",moreKeys:["\u00ee","\u00ef","\u00ed","\u012b","\u00ec"]},{text:"o",hintText:"9",moreKeys:"\u00f4\u00f6\u00f2\u00f3\u0153\u00f8\u014d\u00f5".split("")},{text:"p",hintText:"0"},
L,{text:"a",marginLeftPercent:.33,moreKeys:"\u00e0\u00e1\u00e2\u00e4\u00e6\u00e3\u00e5\u0101".split("")},{text:"s",moreKeys:["\u00df"]},{text:"d"},{text:"f"},{text:"g"},{text:"h"},{text:"j"},{text:"k"},{text:"l"},M,{toState:1,iconCssClass:x,type:5,id:q,supportSticky:!0},{text:"z"},{text:"x"},{text:"c",moreKeys:["\u00e7"]},{text:"v"},{text:"b"},{text:"n",moreKeys:["\u00f1"]},{text:"m"},{text:"!",moreKeys:["\u00a1"]},{text:"?",moreKeys:["\u00bf"]},{toState:1,iconCssClass:x,type:5,id:r,supportSticky:!0},
F,{iconCssClass:v,type:27,id:"Globe"},C,{text:"/",isGrey:!0},O,{text:",",isGrey:!0},{text:m,isGrey:!0,moreKeys:"#!\\?-:'@".split("")},N]},X={id:"us.compact.symbol",layout:s,data:[{text:"1",moreKeys:["\u00b9","\u00bd","\u2153","\u00bc","\u215b"]},{text:"2",moreKeys:["\u00b2","\u2154"]},{text:"3",moreKeys:["\u00b3","\u00be","\u215c"]},{text:"4",moreKeys:["\u2074"]},{text:"5",moreKeys:["\u215d"]},{text:"6"},{text:"7",moreKeys:["\u215e"]},{text:"8"},{text:"9"},{text:"0",moreKeys:["\u207f","\u2205"]},
L,{text:"@",marginLeftPercent:.33},{text:"#"},{text:"$",moreKeys:["\u00a2","\u00a3","\u20ac","\u00a5","\u20b1"]},{text:"%",moreKeys:["\u2030"]},{text:"&"},{text:"-",moreKeys:["_","\u2013","\u2014","\u00b7"]},{text:"+",moreKeys:["\u00b1"]},{text:"(",moreKeys:["{","<","["]},{text:")",moreKeys:["}",">","]"]},M,F,{text:"\\"},{text:"="},{text:"*",moreKeys:["\u2020","\u2021","\u2605"]},{text:'"',moreKeys:["\u201c","\u201e","\u201d","\u00ab","\u00bb"]},{text:"'",moreKeys:["\u2018","\u201a","\u2019","\u2039",
"\u203a"]},{text:":"},{text:";"},{text:"!",moreKeys:["\u00a1"]},{text:"?",moreKeys:["\u00bf"]},F,F,{text:"_",isGrey:!0},C,{text:"/",isGrey:!0},O,{text:",",isGrey:!0},{text:m,isGrey:!0,moreKeys:["\u2026"]},N]},Y={id:"us.compact.more",layout:s,data:[{text:"~"},{text:"`"},{text:"|"},{text:"\u2022",moreKeys:["\u266a","\u2665","\u2660","\u2666","\u2663"]},{text:"\u23b7"},{text:"\u03c0",moreKeys:["\u03a0"]},{text:"\u00f7"},{text:"\u00d7"},{text:"\u00b6",moreKeys:["\u00a7"]},{text:"\u0394"},L,{text:"\u00a3",
marginLeftPercent:.33},{text:"\u00a2"},{text:"\u20ac"},{text:"\u00a5"},{text:"^",moreKeys:["\u2191","\u2193","\u2190","\u2192"]},{text:"\u00b0",moreKeys:["\u2032","\u2033"]},{text:"=",moreKeys:["\u2260","\u2248","\u221e"]},{text:"{"},{text:"}"},M,F,{text:"\\"},{text:"\u00a9"},{text:"\u00ae"},{text:"\u2122"},{text:"\u2105"},{text:"["},{text:"]"},{text:"\u00a1"},{text:"\u00bf"},F,F,{text:"<",isGrey:!0,moreKeys:["\u2039","\u2264","\u00ab"]},C,{text:">",isGrey:!0,moreKeys:["\u203a","\u2265","\u00bb"]},
O,{text:",",isGrey:!0},{text:m,isGrey:!0,moreKeys:["\u2026"]},N]},Z=google.ime.chrome.inputview.onConfigLoaded;D(W[d],[{name:"?123",toKeyset:X.id,toKeysetName:z}]);var $=B(W);$.id=W.id;$.showMenuKey=!0;Z($);D(X[d],[{name:"~[<",toKeyset:Y.id,toKeysetName:y},{name:"~[<",toKeyset:Y.id,toKeysetName:y},{name:"abc",toKeyset:W.id,toKeysetName:"main layout"}]);$=B(X);$.id=X.id;$.showMenuKey=!1;Z($);
D(Y[d],[{name:"?123",toKeyset:X.id,toKeysetName:z},{name:"?123",toKeyset:X.id,toKeysetName:z},{name:"abc",toKeyset:W.id,toKeysetName:"main layout"}]);$=B(Y);$.id=Y.id;$.showMenuKey=!1;Z($);})();