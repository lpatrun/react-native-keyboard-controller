"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7411],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),y=a,b=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return t?n.createElement(b,l(l({ref:r},p),{},{components:t})):n.createElement(b,l({ref:r},p))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5062:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={},l="KeyboardEvents",i={unversionedId:"api/keyboard-events",id:"version-1.0.0/api/keyboard-events",title:"KeyboardEvents",description:"This library exposes 4 events which are available on all platforms:",source:"@site/versioned_docs/version-1.0.0/api/keyboard-events.md",sourceDirName:"api",slug:"/api/keyboard-events",permalink:"/react-native-keyboard-controller/docs/1.0.0/api/keyboard-events",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.0/api/keyboard-events.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KeyboardController",permalink:"/react-native-keyboard-controller/docs/1.0.0/api/keyboard-controller"},next:{title:"KeyboardProvider",permalink:"/react-native-keyboard-controller/docs/1.0.0/api/keyboard-provider"}},c={},s=[{value:"Example",id:"example",level:2}],p={toc:s};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"keyboardevents"},"KeyboardEvents"),(0,a.kt)("p",null,"This library exposes 4 events which are available on all platforms:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"keyboardWillShow"),(0,a.kt)("li",{parentName:"ul"},"keyboardWillHide"),(0,a.kt)("li",{parentName:"ul"},"keyboardDidShow"),(0,a.kt)("li",{parentName:"ul"},"keyboardDidHide")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { KeyboardEvents } from "react-native-keyboard-controller";\n\nuseEffect(() => {\n  const show = KeyboardEvents.addListener("keyboardWillShow", (e) => {\n    // place your code here\n  });\n\n  return () => {\n    show.remove();\n  };\n}, []);\n')),(0,a.kt)("p",null,"Also have a look on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app for more comprehensive usage."))}d.isMDXComponent=!0}}]);