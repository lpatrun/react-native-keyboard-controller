"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[300],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8825:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"welcome",title:"React Native meets smooth keyboard animations",authors:["kirill"],tags:["react-native","keyboard","animation"]},c=void 0,u={permalink:"/react-native-keyboard-controller/blog/welcome",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-05-25-welcome/index.md",source:"@site/blog/2022-05-25-welcome/index.md",title:"React Native meets smooth keyboard animations",description:"If you have ever worked with keyboard in react-native, you will probably have noticed that it is a little bit pain.",date:"2022-05-25T00:00:00.000Z",formattedDate:"May 25, 2022",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/blog/tags/keyboard"},{label:"animation",permalink:"/react-native-keyboard-controller/blog/tags/animation"}],readingTime:.485,truncated:!1,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"welcome",title:"React Native meets smooth keyboard animations",authors:["kirill"],tags:["react-native","keyboard","animation"]}},s={authorsImageUrls:[void 0]},m=[],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you have ever worked with keyboard in react-native, you will probably have noticed that it is a little bit pain."),(0,o.kt)("p",null,"Already exists tens of libraries called to solve a particular problem and all of them are trying to solve it in a different way. Though, if we can try to have a look from a different angle we can clearly understand a simple rule - if we could have an access to animated movement, then we could do much more and better, than current libraries allow us to do and moreover it will be more smooth."))}d.isMDXComponent=!0}}]);