(function(){function b(c,a){return c.type=a}var d="push",e="ArrowDown",f="ArrowLeft",g="ArrowRight",k="ArrowUp",l="ShiftLeft",m="ShiftRight",n="inputview-arrow-key ",p="inputview-down-key",q="inputview-left-key",r="inputview-right-key",s="inputview-shift-icon",t="inputview-up-key";function u(c,a,h,J){v.splice.apply(c,w(arguments,1))}function w(c,a,h){return 2>=arguments.length?v.slice.call(c,a):v.slice.call(c,a,h)}
function x(c){var a={toState:1,iconCssClass:s,type:5};a.id=c?l:m;a.supportSticky=!1;return y(a)}function z(c){var a={iconCssClass:n};0==c?(a.id=k,a.iconCssClass+=t,b(a,15)):1==c?(a.id=e,a.iconCssClass+=p,b(a,16)):2==c?(a.id=f,a.iconCssClass+=q,b(a,17)):3==c&&(a.id=g,a.iconCssClass+=r,b(a,18));return y(a)}function y(c){var a={},h;for(h in c)a[h]=c[h];return{spec:a}};var v=Array.prototype;for(var A=[["\u201e","\u201c","\u201e","~"],["1","!","'","\x00"],["2","@","\u201e","\x00"],["3","#","\u201c","\x00"],["4","$","\u2116","\x00"],["5","%","\u20ac","\x00"],["6","^"],["7","&","\u00a7","\x00"],["8","*","\u00b0","\x00"],["9","("],["0",")"],["-","_","\u2014","\x00"],["=","+","\u2013","\x00"],["\u10e5","Q"],["\u10ec","\u10ed"],["\u10d4","E","\u10f1","\x00"],["\u10e0","\u10e6","\u00ae","\x00"],["\u10e2","\u10d7"],["\u10e7","Y","\u10f8","\x00"],["\u10e3","U"],["\u10d8","I","\u10f2","\x00"],
["\u10dd","O"],["\u10de","P"],["[","{"],["]","}"],["\\","|","~","~"],["\u10d0","A","\u10fa","\x00"],["\u10e1","\u10e8"],["\u10d3","D"],["\u10e4","F","\u10f6","\x00"],["\u10d2","G","\u10f9","\x00"],["\u10f0","H","\u10f5","\x00"],["\u10ef","\u10df","\u10f7","\x00"],["\u10d9","K"],["\u10da","L"],[";",":"],["'",'"'],["\u10d6","\u10eb"],["\u10ee","X","\u10f4","\x00"],["\u10ea","\u10e9","\u00a9","\x00"],["\u10d5","V","\u10f3","\x00"],["\u10d1","B"],["\u10dc","N","\u10fc","\x00"],["\u10db","M"],[",","<",
"\u00ab","\x00"],[".",">","\u00bb","\x00"],["/","?","\u10fb","\x00"],[" "," "]],B=[],C={},D=[192,49,50,51,52,53,54,55,56,57,48,189,187,81,87,69,82,84,89,85,73,79,80,219,221,220,65,83,68,70,71,72,74,75,76,186,222,90,88,67,86,66,78,77,188,190,191,32],E="Backquote Digit1 Digit2 Digit3 Digit4 Digit5 Digit6 Digit7 Digit8 Digit9 Digit0 Minus Equal KeyQ KeyW KeyE KeyR KeyT KeyY KeyU KeyI KeyO KeyP BracketLeft BracketRight Backslash KeyA KeyS KeyD KeyF KeyG KeyH KeyJ KeyK KeyL Semicolon Quote KeyZ KeyX KeyC KeyV KeyB KeyN KeyM Comma Period Slash".split(" "),
F=0;F<A.length-1;F++){var G={};G.id=E[F];b(G,6);G.characters=A[F];G.keyCode=D[F];var H=y(G);B[d](H)}u(B,13,0,y({iconCssClass:"inputview-backspace-icon",type:13,id:"Backspace"}));u(B,14,0,y({iconCssClass:"inputview-tab-icon",type:14,id:"Tab"}));u(B,28,0,y({toState:4,name:"caps lock",type:5,id:"OsLeft"}));u(B,40,0,y({iconCssClass:"inputview-enter-icon",type:12,id:"Enter"}));u(B,41,0,x(!0));B[d](x(!1));B[d](y({iconCssClass:"inputview-globe-icon",type:27,id:"Globe"}));
B[d](y({name:"\u22ee",toKeyset:void 0,type:26,id:"Menu"}));B[d](y({toState:8,name:"ctrl",type:5,id:"ControlLeft"}));B[d](y({toState:16,name:"alt",type:5,id:"AltLeft"}));B[d](y({name:" ",type:11,id:"Space"}));B[d](y({toState:2,name:"alt gr",type:5,id:"AltRight"}));B[d](z(2));B[d](z(3));B[d](y({iconCssClass:"inputview-hide-keyboard-icon",type:19,id:"HideKeyboard"}));for(F=0;F<B.length;F++)H=B[F],C[H.spec.id]="101kbd-k-"+F;var I=[];I.keyList=B;I.mapping=C;I.layout="101kbd";I.hasAltGrKey=!0;
I.hasCompactKeyboard=!1;I.showMenuKey=!0;I.id="ge";google.ime.chrome.inputview.onConfigLoaded(I);})();