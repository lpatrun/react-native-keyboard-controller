"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2317],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=o,f=u["".concat(c,".").concat(y)]||u[y]||s[y]||a;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8728:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={},l="KeyboardController",i={unversionedId:"api/keyboard-controller",id:"version-1.0.0/api/keyboard-controller",title:"KeyboardController",description:"KeyboardController is an object which has two functions:",source:"@site/versioned_docs/version-1.0.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-264/docs/1.0.0/api/keyboard-controller",draft:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.0.0/api/keyboard-controller.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/pr-preview/pr-264/docs/1.0.0/api/keyboard-controller-view"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-264/docs/1.0.0/api/keyboard-events"}},c={},p=[{value:"Example",id:"example",level:2}],d={toc:p};function s(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboardcontroller"},"KeyboardController"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"KeyboardController")," is an object which has two functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setInputMode")," - used to change ",(0,o.kt)("inlineCode",{parentName:"li"},"windowSoftInputMode")," in runtime;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setDefaultMode")," - used to restore default ",(0,o.kt)("inlineCode",{parentName:"li"},"windowSoftInputMode")," (which is declared in ",(0,o.kt)("inlineCode",{parentName:"li"},"AndroidManifest.xml"),");")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  KeyboardController,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nexport const useResizeMode = () => {\n  useEffect(() => {\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE\n    );\n\n    return () => KeyboardController.setDefaultMode();\n  }, []);\n};\n')))}s.isMDXComponent=!0}}]);