(function(){function c(b,a){return b.text=a}function d(b,a){return b.type=a}
var h="data",l="push",m="length",n=".",aa="ArrowDown",ba="ArrowLeft",ca="ArrowRight",da="ArrowUp",p="ShiftLeft",q="ShiftRight",ea="The number of switcher key spec is less than the number of switcher keys in the keyset.",fa="The number of switcher key spec is more than the number of switcher keys in the keyset.",r="be.compact.qwerty",ga="compactkbd-k-",ha="compactkbd-k-key-",s="compactkbd-qwerty",ia="inputview-arrow-key ",t="inputview-backspace-icon",ja="inputview-down-key",u="inputview-enter-icon",
v="inputview-globe-icon",w="inputview-hide-keyboard-icon",ka="inputview-left-key",la="inputview-right-key",x="inputview-shift-icon",ma="inputview-up-key",y="more symbols layout",z="number and symbol layout";function A(b){for(var a=[],e={},f=0;f<b[h][m];f++){var k=b[h][f];k==B&&(k.toKeyset=b.id.split(n)[0]);var g;g=k;g.id=k.id?k.id:ha+f;g.type||d(g,22);var k={},H=void 0;for(H in g)k[H]=g[H];g={spec:k};a[l](g);e[g.spec.id]=ga+f}return{keyList:a,mapping:e,layout:b.layout}}
function C(b,a){for(var e=0,f=0;f<b[m];f++)if(b[f]==D){if(e>=a[m]){console.error(ea);return}var k=a[e++],g;for(g in b[f])k[g]=b[f][g];b[f]=k}e<a[m]-1&&console.error(fa)}function E(b,a,e,f){F.splice.apply(b,na(arguments,1))}function na(b,a,e){return 2>=arguments[m]?F.slice.call(b,a):F.slice.call(b,a,e)}function G(b){var a={toState:1,iconCssClass:x,type:5};a.id=b?p:q;a.supportSticky=!1;return I(a)}
function J(b){var a={iconCssClass:ia};0==b?(a.id=da,a.iconCssClass+=ma,d(a,15)):1==b?(a.id=aa,a.iconCssClass+=ja,d(a,16)):2==b?(a.id=ba,a.iconCssClass+=ka,d(a,17)):3==b&&(a.id=ca,a.iconCssClass+=la,d(a,18));return I(a)}function I(b){var a={},e;for(e in b)a[e]=b[e];return{spec:a}};var K={iconCssClass:t,type:13,id:"Backspace"},L={iconCssClass:u,type:12,id:"Enter"},M={iconCssClass:w,type:19,id:"HideKeyboard"},N={name:" ",type:11,id:"Space"},D={type:21},B={type:26,name:"\u22ee",id:"Menu"};var F=Array.prototype;for(var oa=[["\u00b2","\u00b3","\u00ac","\u00ac"],["&","1","|","\u00a1"],["\u00e9","2","@","\u215b"],['"',"3","#","\u00a3"],["'","4","\u00bc","$"],["(","5","\u00bd","\u215c"],["\u00a7","6","^","\u215d"],["\u00e8","7","{","\u215e"],["!","8","[","\u2122"],["\u00e7","9","{","\u00b1"],["\u00e0","0","}","\u00b0"],[")","\u00b0","\\","\u00bf"],["-","_","\u0327","\u0328"],["a","A","@","\u03a9"],["z","Z","\u0142","\u0141"],["e","E","\u20ac","\u00a2"],["r","R","\u00b6","\u00ae"],["t","T","\u0167","\u0166"],
["y","Y","\u2190","\u00a5"],["u","U","\u2193","\u2191"],["i","I","\u2192","\u0131"],["o","O","\u0153","\u0152"],["p","P","\u00fe","\u00de"],["\u0302","\u0308","[","\u030a"],["$","*","]","\u0304"],["q","Q","\u00e6","\u00c6"],["s","S","\u00df","\u00a7"],["d","D","\u00f0","\u00d0"],["f","F","\u0111","\u00aa"],["g","G","\u014b","\u014a"],["h","H","\u0127","\u0126"],["j","J","\u0309","\u031b"],["k","K","\u0138","&"],["l","L","\u0142","\u0141"],["m","M","\u0301","\u030b"],["\u00f9","%","\u0301","\u030c"],
["\u00b5","\u00a3","\u0300","\u0306"],["<",">","\\","\\"],["w","W","\u00ab","<"],["x","X","\u00bb",">"],["c","C","\u00a2","\u00a9"],["v","V","\u201c","\u2018"],["b","B","\u201d","\u2019"],["n","N"],[",","?","\u0327","\u00ba"],[";",n,"\x00","\u00d7"],[":","/","\u00b7","\u00f7"],["=","+","\u0303","\u0307"],[" "," "]],O=[],pa={},qa=[222,49,50,51,52,53,54,55,56,57,48,219,189,65,90,69,82,84,89,85,73,79,80,221,186,81,83,68,70,71,72,74,75,76,77,192,220,226,87,88,67,86,66,78,188,190,191,187,32],ra="Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote Backslash IntlBackslash KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash".split(" "),
P=0;P<oa[m]-1;P++){var Q={};Q.id=ra[P];d(Q,6);Q.characters=oa[P];Q.keyCode=qa[P];var R=I(Q);O[l](R)}E(O,13,0,I({iconCssClass:t,type:13,id:"Backspace"}));E(O,14,0,I({iconCssClass:"inputview-tab-icon",type:14,id:"Tab"}));E(O,27,0,I({toState:4,name:"caps lock",type:5,id:"OsLeft"}));E(O,40,0,I({iconCssClass:u,type:12,id:"Enter"}));E(O,41,0,G(!0));O[l](G(!1));O[l](I({iconCssClass:v,type:27,id:"Globe"}));O[l](I({name:"\u22ee",toKeyset:r,type:26,id:"Menu"}));O[l](I({toState:8,name:"ctrl",type:5,id:"ControlLeft"}));
O[l](I({toState:16,name:"alt",type:5,id:"AltLeft"}));O[l](I({name:" ",type:11,id:"Space"}));O[l](I({toState:2,name:"alt gr",type:5,id:"AltRight"}));O[l](J(2));O[l](J(3));O[l](I({iconCssClass:w,type:19,id:"HideKeyboard"}));for(P=0;P<O[m];P++)R=O[P],pa[R.spec.id]="102kbd-k-"+P;var S=[];S.keyList=O;S.mapping=pa;S.layout="102kbd";S.hasAltGrKey=!0;S.hasCompactKeyboard=!0;S.showMenuKey=!0;S.id="be";google.ime.chrome.inputview.onConfigLoaded(S);
var T={id:r,layout:s},U=[{text:"q",hintText:"1"},{text:"w",hintText:"2"},{text:"e",hintText:"3",moreKeys:["\u00e8","\u00e9","\u00ea","\u00eb","\u0113"]},{text:"r",hintText:"4"},{text:"t",hintText:"5"},{text:"y",hintText:"6"},{text:"u",hintText:"7",moreKeys:["\u00fb","\u00fc","\u00f9","\u00fa","\u016b"]},{text:"i",hintText:"8",moreKeys:["\u00ee","\u00ef","\u00ed","\u012b","\u00ec"]},{text:"o",hintText:"9",moreKeys:"\u00f4\u00f6\u00f2\u00f3\u0153\u00f8\u014d\u00f5".split("")},{text:"p",hintText:"0"},
K,{text:"a",marginLeftPercent:.33,moreKeys:"\u00e0\u00e1\u00e2\u00e4\u00e6\u00e3\u00e5\u0101".split("")},{text:"s",moreKeys:["\u00df"]},{text:"d"},{text:"f"},{text:"g"},{text:"h"},{text:"j"},{text:"k"},{text:"l"},L,{toState:1,iconCssClass:x,type:5,id:p,supportSticky:!0},{text:"z"},{text:"x"},{text:"c",moreKeys:["\u00e7"]},{text:"v"},{text:"b"},{text:"n",moreKeys:["\u00f1"]},{text:"m"},{text:"!",moreKeys:["\u00a1"]},{text:"?",moreKeys:["\u00bf"]},{toState:1,iconCssClass:x,type:5,id:q,supportSticky:!0},
D,{iconCssClass:v,type:27,id:"Globe"},B,{text:"/",isGrey:!0},N,{text:",",isGrey:!0},{text:n,isGrey:!0,moreKeys:"#!\\?-:'@".split("")},M];U[2].moreKeys="\u0117\u00e8\u0119\u00e9\u00ea\u00eb\u0113".split("");U[5].moreKeys=["\u0133"];U[7].moreKeys="\u00ee\u00ef\u012f\u0133\u00ed\u012b\u00ec".split("");U[12].moreKeys=void 0;U[24].moreKeys=void 0;U[27].moreKeys=["\u00f1","\u0144"];T.data=U;
var V={id:"be.compact.symbol",layout:s},W=[{text:"1",moreKeys:["\u00b9","\u00bd","\u2153","\u00bc","\u215b"]},{text:"2",moreKeys:["\u00b2","\u2154"]},{text:"3",moreKeys:["\u00b3","\u00be","\u215c"]},{text:"4",moreKeys:["\u2074"]},{text:"5",moreKeys:["\u215d"]},{text:"6"},{text:"7",moreKeys:["\u215e"]},{text:"8"},{text:"9"},{text:"0",moreKeys:["\u207f","\u2205"]},K,{text:"@",marginLeftPercent:.33},{text:"#"},{text:"$",moreKeys:["\u00a2","\u00a3","\u20ac","\u00a5","\u20b1"]},{text:"%",moreKeys:["\u2030"]},
{text:"&"},{text:"-",moreKeys:["_","\u2013","\u2014","\u00b7"]},{text:"+",moreKeys:["\u00b1"]},{text:"(",moreKeys:["{","<","["]},{text:")",moreKeys:["}",">","]"]},L,D,{text:"\\"},{text:"="},{text:"*",moreKeys:["\u2020","\u2021","\u2605"]},{text:'"',moreKeys:["\u201c","\u201e","\u201d","\u00ab","\u00bb"]},{text:"'",moreKeys:["\u2018","\u201a","\u2019","\u2039","\u203a"]},{text:":"},{text:";"},{text:"!",moreKeys:["\u00a1"]},{text:"?",moreKeys:["\u00bf"]},D,D,{text:"_",isGrey:!0},B,{text:"/",isGrey:!0},
N,{text:",",isGrey:!0},{text:n,isGrey:!0,moreKeys:["\u2026"]},M];W[13]={text:"\u00a3",moreKeys:["\u00a2","$","\u20ac","\u00a5","\u20b1"]};W[13]={text:"\u20ac",moreKeys:["\u00a2","$","\u00a3","\u00a5","\u20b1"]};V.data=W;
var X={id:"be.compact.more",layout:s},Y=[{text:"~"},{text:"`"},{text:"|"},{text:"\u2022",moreKeys:["\u266a","\u2665","\u2660","\u2666","\u2663"]},{text:"\u23b7"},{text:"\u03c0",moreKeys:["\u03a0"]},{text:"\u00f7"},{text:"\u00d7"},{text:"\u00b6",moreKeys:["\u00a7"]},{text:"\u0394"},K,{text:"\u00a3",marginLeftPercent:.33},{text:"\u00a2"},{text:"\u20ac"},{text:"\u00a5"},{text:"^",moreKeys:["\u2191","\u2193","\u2190","\u2192"]},{text:"\u00b0",moreKeys:["\u2032","\u2033"]},{text:"=",moreKeys:["\u2260",
"\u2248","\u221e"]},{text:"{"},{text:"}"},L,D,{text:"\\"},{text:"\u00a9"},{text:"\u00ae"},{text:"\u2122"},{text:"\u2105"},{text:"["},{text:"]"},{text:"\u00a1"},{text:"\u00bf"},D,D,{text:"<",isGrey:!0,moreKeys:["\u2039","\u2264","\u00ab"]},B,{text:">",isGrey:!0,moreKeys:["\u203a","\u2265","\u00bb"]},N,{text:",",isGrey:!0},{text:n,isGrey:!0,moreKeys:["\u2026"]},M];c(Y[11],"\u20ac");c(Y[12],"\u00a5");c(Y[13],"$");Y[13].moreKeys=["\u00a2"];c(Y[14],"\u00a2");c(Y[11],"\u00a3");X.data=Y;var Z=google.ime.chrome.inputview.onConfigLoaded;
C(T[h],[{name:"?123",toKeyset:V.id,toKeysetName:z}]);var $=A(T);$.id=T.id;$.showMenuKey=!0;Z($);C(V[h],[{name:"~[<",toKeyset:X.id,toKeysetName:y},{name:"~[<",toKeyset:X.id,toKeysetName:y},{name:"abc",toKeyset:T.id,toKeysetName:"main layout"}]);$=A(V);$.id=V.id;$.showMenuKey=!1;Z($);C(X[h],[{name:"?123",toKeyset:V.id,toKeysetName:z},{name:"?123",toKeyset:V.id,toKeysetName:z},{name:"abc",toKeyset:T.id,toKeysetName:"main layout"}]);$=A(X);$.id=X.id;$.showMenuKey=!1;Z($);})();