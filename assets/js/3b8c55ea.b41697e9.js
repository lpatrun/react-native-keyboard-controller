"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(d,".").concat(m)]||u[m]||s[m]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9803:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Adding a library to the project",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/react-native-keyboard-controller/docs/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/react-native-keyboard-controller/docs/category/guides"}},d={},p=[{value:"Adding a library to the project",id:"adding-a-library-to-the-project",level:2},{value:"Linking",id:"linking",level:3},{value:"Expo",id:"expo",level:3},{value:"Adding provider",id:"adding-provider",level:2}],c={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"adding-a-library-to-the-project"},"Adding a library to the project"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-keyboard-controller")," package in your React Native project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-keyboard-controller\n# or with npm\n# npm install react-native-keyboard-controller --save\n")),(0,a.kt)("h3",{id:"linking"},"Linking"),(0,a.kt)("p",null,"This package supports ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"autolinking"),"."),(0,a.kt)("admonition",{title:"Pods update",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Don't forget to re-install ",(0,a.kt)("inlineCode",{parentName:"p"},"pods")," after adding the package and don't forget to re-assemble ",(0,a.kt)("inlineCode",{parentName:"p"},"android")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ios")," applications, since this library contains native code.")),(0,a.kt)("h3",{id:"expo"},"Expo"),(0,a.kt)("p",null,"This library has native code, so it does not work with ",(0,a.kt)("em",{parentName:"p"},"Expo Go")," but you can easily install it using a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.expo.dev/development/getting-started/"},"custom dev client"),"."),(0,a.kt)("h2",{id:"adding-provider"},"Adding provider"),(0,a.kt)("p",null,"In order to use it you'll need to wrap your app with ",(0,a.kt)("inlineCode",{parentName:"p"},"KeyboardProvider")," component. "),(0,a.kt)("admonition",{title:"Why it's needed?",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are bothered why it's needed, you can read more about it in ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/recipes/platform-differences"},"architecture")," deep dive to understand all aspects of how this library works.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { KeyboardProvider } from 'react-native-keyboard-controller';\n\nexport default function App() {\n  return (\n    <KeyboardProvider>\n      // your code here\n    </KeyboardProvider>\n  );\n}\n")),(0,a.kt)("p",null,"Congratulations! \ud83c\udf89 You've just finished installation process. Go to the ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/guides/first-animation"},"next section")," to get more insights of what you can do using this library. \ud83d\ude0e"))}s.isMDXComponent=!0}}]);