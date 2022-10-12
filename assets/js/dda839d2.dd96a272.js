"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="First animation",s={unversionedId:"guides/first-animation",id:"guides/first-animation",title:"First animation",description:"To build your first animation you will need to use two hooks: useKeyboardAnimation or useReanimatedKeyboardAnimation.",source:"@site/docs/guides/first-animation.md",sourceDirName:"guides",slug:"/guides/first-animation",permalink:"/react-native-keyboard-controller/docs/next/guides/first-animation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guides/first-animation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/react-native-keyboard-controller/docs/next/category/guides"},next:{title:"Building own hook",permalink:"/react-native-keyboard-controller/docs/next/guides/building-own-hook"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"first-animation"},"First animation"),(0,a.kt)("p",null,"To build your first animation you will need to use two hooks: ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/next/api/hooks/use-keyboard-animation"},"useKeyboardAnimation")," or ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/next/api/hooks/use-reanimated-keyboard-animation"},"useReanimatedKeyboardAnimation"),"."),(0,a.kt)("p",null,"Both of them return an object with two properties: ",(0,a.kt)("inlineCode",{parentName:"p"},"progress")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"height")," (depends on the hook used, values will be ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.Value")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Reanimated.SharedValue"),")."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useKeyboardAnimation")," returns Animated values with enabled ",(0,a.kt)("strong",{parentName:"p"},"Native Driver")," (",(0,a.kt)("inlineCode",{parentName:"p"},"useNativeDriver: true"),"). Thus some properties can not be animated, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"height"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"backgroundColor"),", etc.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"useReanimatedKeyboardAnimation")," works only with ",(0,a.kt)("inlineCode",{parentName:"p"},"ShareValues"),", i.e. it is not compatible with Reanimated v1 API.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To see how to use these hooks let's consider example below (for more comprehensive usage you may find an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/example"},"example")," app useful):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Animated, StyleSheet, TextInput, View } from 'react-native';\nimport { useKeyboardAnimation } from 'react-native-keyboard-controller';\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'flex-end',\n  },\n  box: {\n    width: 60,\n    height: 60,\n    marginVertical: 20,\n  },\n  row: {\n    flexDirection: 'row',\n  },\n});\n\nexport default function KeyboardAnimation() {\n  // 1. we need to use hook to get an access to animated values\n  const { height, progress } = useKeyboardAnimation();\n\n  const scale = progress.interpolate({\n    inputRange: [0, 1],\n    outputRange: [1, 2],\n  });\n\n  return (\n    <View style={styles.container}>\n      <View style={styles.row}>\n        <Animated.View\n          style={{\n            width: 50,\n            height: 50,\n            backgroundColor: '#17fc03',\n            borderRadius: 15,\n            // 2. we can apply any transformations we want\n            transform: [{ translateY: height }, { scale }],\n          }}\n        />\n      </View>\n      <TextInput\n        style={{\n          width: '100%',\n          marginTop: 50,\n          height: 50,\n          backgroundColor: 'yellow',\n        }}\n      />\n    </View>\n  );\n}\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you are going to use these Animated values in class components (i.e. without hooks) - you can easily ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/next/api/hooks/use-keyboard-animation"},"do")," it. Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/cf27eb00877db34b860a04cf52a026110e44b4b3/src/animated.tsx#L46-L51"},"source")," code - this hook simply changes ",(0,a.kt)("inlineCode",{parentName:"p"},"softInputMode")," and consumes ",(0,a.kt)("inlineCode",{parentName:"p"},"Context"),". Also you may read ",(0,a.kt)("a",{parentName:"p",href:"/react-native-keyboard-controller/docs/next/recipes/architecture"},"architecture")," deep dive to understand more about how this library works.")))}d.isMDXComponent=!0}}]);