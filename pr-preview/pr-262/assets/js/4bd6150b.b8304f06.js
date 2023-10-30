"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[575],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),y=o,b=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8750:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6,keywords:["react-native-keyboard-controller","events","keyboardWillShow","keyboardWillHide","android","iOS","cross platform"]},i="KeyboardEvents",l={unversionedId:"api/keyboard-events",id:"version-1.5.0/api/keyboard-events",title:"KeyboardEvents",description:"This library exposes 4 events which are available on all platforms:",source:"@site/versioned_docs/version-1.5.0/api/keyboard-events.md",sourceDirName:"api",slug:"/api/keyboard-events",permalink:"/react-native-keyboard-controller/pr-preview/pr-262/docs/1.5.0/api/keyboard-events",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.5.0/api/keyboard-events.md",tags:[],version:"1.5.0",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["react-native-keyboard-controller","events","keyboardWillShow","keyboardWillHide","android","iOS","cross platform"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardController",permalink:"/react-native-keyboard-controller/pr-preview/pr-262/docs/1.5.0/api/keyboard-controller"}},s={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboardevents"},"KeyboardEvents"),(0,o.kt)("p",null,"This library exposes 4 events which are available on all platforms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keyboardWillShow"),(0,o.kt)("li",{parentName:"ul"},"keyboardWillHide"),(0,o.kt)("li",{parentName:"ul"},"keyboardDidShow"),(0,o.kt)("li",{parentName:"ul"},"keyboardDidHide")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { KeyboardEvents } from "react-native-keyboard-controller";\n\nuseEffect(() => {\n  const show = KeyboardEvents.addListener("keyboardWillShow", (e) => {\n    // place your code here\n  });\n\n  return () => {\n    show.remove();\n  };\n}, []);\n')),(0,o.kt)("p",null,"Also have a look on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."))}d.isMDXComponent=!0}}]);