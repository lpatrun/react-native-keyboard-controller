"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5006],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,b=u["".concat(s,".").concat(y)]||u[y]||d[y]||a;return t?n.createElement(b,l(l({ref:r},c),{},{components:t})):n.createElement(b,l({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5269:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={sidebar_position:6,keywords:["react-native-keyboard-controller","events","keyboardWillShow","keyboardWillHide","android","iOS","cross platform"]},l="KeyboardEvents",i={unversionedId:"api/keyboard-events",id:"api/keyboard-events",title:"KeyboardEvents",description:"This library exposes 4 events which are available on all platforms:",source:"@site/docs/api/keyboard-events.md",sourceDirName:"api",slug:"/api/keyboard-events",permalink:"/react-native-keyboard-controller/pr-preview/pr-262/docs/next/api/keyboard-events",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/api/keyboard-events.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,keywords:["react-native-keyboard-controller","events","keyboardWillShow","keyboardWillHide","android","iOS","cross platform"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardController",permalink:"/react-native-keyboard-controller/pr-preview/pr-262/docs/next/api/keyboard-controller"}},s={},p=[{value:"Event structure",id:"event-structure",level:2},{value:"Example",id:"example",level:2}],c={toc:p};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboardevents"},"KeyboardEvents"),(0,o.kt)("p",null,"This library exposes 4 events which are available on all platforms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"keyboardWillShow"),(0,o.kt)("li",{parentName:"ul"},"keyboardWillHide"),(0,o.kt)("li",{parentName:"ul"},"keyboardDidShow"),(0,o.kt)("li",{parentName:"ul"},"keyboardDidHide")),(0,o.kt)("h2",{id:"event-structure"},"Event structure"),(0,o.kt)("p",null,"All events have following properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type KeyboardEventData = {\n  height: number; // height of the keyboard\n  duration: number; // duration of the animation\n  timestamp: number; // timestamp of the event from native thread\n  target: number; // tag of the focused TextInput\n};\n")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { KeyboardEvents } from "react-native-keyboard-controller";\n\nuseEffect(() => {\n  const show = KeyboardEvents.addListener("keyboardWillShow", (e) => {\n    // place your code here\n  });\n\n  return () => {\n    show.remove();\n  };\n}, []);\n')),(0,o.kt)("p",null,"Also have a look on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."))}d.isMDXComponent=!0}}]);