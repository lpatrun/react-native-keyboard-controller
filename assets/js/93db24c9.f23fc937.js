"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[944],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1971:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:2},c="Platforms capabilities and limitations",s={unversionedId:"recipes/platform-differences",id:"recipes/platform-differences",title:"Platforms capabilities and limitations",description:"This library relies on WindowInsetsCompat API on Android and keyboard listeners (NotificationCenter) on iOS.",source:"@site/docs/recipes/platform-differences.md",sourceDirName:"recipes",slug:"/recipes/platform-differences",permalink:"/react-native-keyboard-controller/docs/recipes/platform-differences",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/recipes/platform-differences.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/react-native-keyboard-controller/docs/recipes/architecture"},next:{title:"API Reference",permalink:"/react-native-keyboard-controller/docs/category/api-reference"}},d={},p=[{value:"Android",id:"android",level:2},{value:"iOS",id:"ios",level:2}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"platforms-capabilities-and-limitations"},"Platforms capabilities and limitations"),(0,i.kt)("p",null,"This library relies on ",(0,i.kt)("inlineCode",{parentName:"p"},"WindowInsetsCompat")," API on ",(0,i.kt)("inlineCode",{parentName:"p"},"Android")," and keyboard listeners (",(0,i.kt)("inlineCode",{parentName:"p"},"NotificationCenter"),") on iOS."),(0,i.kt)("p",null,"Since two platforms are totally different (see below for more details) the purpose of this API is to provide a common API for both platforms, which will work in the same way on both platforms, but at the same time give an access to all power of the platform features."),(0,i.kt)("h2",{id:"android"},"Android"),(0,i.kt)("p",null,"To track each keyboard frame in Android you need to perform 3 steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enter ",(0,i.kt)("a",{parentName:"li",href:"https://developer.android.com/training/gestures/edge-to-edge"},"edge-to-edge")," mode (",(0,i.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView")," already does it for you, and ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyboardProvider")," uses ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView"),", so once you've wrapped your app in ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyboardProvider")," - you've completed this step \ud83c\udf89)."),(0,i.kt)("li",{parentName:"ul"},"change ",(0,i.kt)("inlineCode",{parentName:"li"},"android:windowSoftInputMode")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"adjustResize")," (this library exposes ",(0,i.kt)("a",{parentName:"li",href:"/react-native-keyboard-controller/docs/api/keyboard-controller"},"KeyboardController")," and you can change it in runtime - default hooks changes soft input mode on mount and restore default behavior on unmount, but you can control it as you wish (change mode on focus/unfocus screen etc.));"),(0,i.kt)("li",{parentName:"ul"},"setup ",(0,i.kt)("inlineCode",{parentName:"li"},"WindowInsetsAnimationCallback")," and track keyboard frames. ",(0,i.kt)("inlineCode",{parentName:"li"},"KeyboardControllerView")," maps events from this callback and forward them in ",(0,i.kt)("inlineCode",{parentName:"li"},"onKeyboardMove")," callback on JS side.")),(0,i.kt)("h2",{id:"ios"},"iOS"))}f.isMDXComponent=!0}}]);