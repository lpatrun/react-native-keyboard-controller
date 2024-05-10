"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2255],{6575:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=n(5893),r=n(1151);const i={sidebar_position:2,keywords:["react-native-keyboard-controller","react-native keyboard","react hook"]},s="Building own hook",d={id:"guides/building-own-hook",title:"Building own hook",description:"Default hooks may not perfectly fit in your app, because it changes/restores softInputMode on mount/unmount of the component where it's used.",source:"@site/docs/guides/building-own-hook.md",sourceDirName:"guides",slug:"/guides/building-own-hook",permalink:"/react-native-keyboard-controller/pr-preview/pr-437/docs/next/guides/building-own-hook",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/docs/guides/building-own-hook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["react-native-keyboard-controller","react-native keyboard","react hook"]},sidebar:"tutorialSidebar",previous:{title:"First animation",permalink:"/react-native-keyboard-controller/pr-preview/pr-437/docs/next/guides/first-animation"},next:{title:"Interactive Keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-437/docs/next/guides/interactive-keyboard"}},a={},c=[];function l(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"building-own-hook",children:"Building own hook"}),"\n",(0,t.jsxs)(o.p,{children:["Default hooks may not perfectly fit in your app, because it changes/restores ",(0,t.jsx)(o.code,{children:"softInputMode"})," on mount/unmount of the component where it's used."]}),"\n",(0,t.jsxs)(o.admonition,{type:"info",children:[(0,t.jsxs)(o.p,{children:["This is ",(0,t.jsx)(o.code,{children:"useResizeMode"})," hook behavior - it changes ",(0,t.jsx)(o.code,{children:"softInputMode"})," on mount to ",(0,t.jsx)(o.code,{children:"adjustResize"})," and to default ",(0,t.jsx)(o.code,{children:"softInput"})," on unmount. You may want to ",(0,t.jsx)(o.a,{href:"/react-native-keyboard-controller/pr-preview/pr-437/docs/next/recipes/platform-differences#android",children:"read"})," why it's crucial to change ",(0,t.jsx)(o.code,{children:"softInputMode"})," to ",(0,t.jsx)(o.code,{children:"adjustResize"})," before using this library."]}),(0,t.jsxs)(o.p,{children:["If you have ",(0,t.jsx)(o.code,{children:'android:windowSoftInputMode="adjustResize"'})," declared in ",(0,t.jsx)(o.code,{children:"AndroidManifest.xml"})," - then you can skip this step at all and forget about changing ",(0,t.jsx)(o.code,{children:"softInputMode"})," in runtime (however you still may want to create your own version of hook without calls to ",(0,t.jsx)(o.code,{children:"KeyboardController.*"}),") \ud83d\ude0e."]})]}),"\n",(0,t.jsxs)(o.p,{children:["Sometimes in deep stacks it may be important to have different ",(0,t.jsx)(o.code,{children:"softInputMode"})," per screen, but by default ",(0,t.jsx)(o.code,{children:"react-navigation"})," keeps previous screens mounted, so if you are using default ",(0,t.jsx)(o.code,{children:"useKeyboardAnimation"})," hook, then all following screens will have ",(0,t.jsx)(o.code,{children:"softInputMode=adjustResize"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"To prevent such behavior you can write own hook based on primitives from this library. The implementation may look like:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-ts",children:'import { useContext, useCallback } from "react";\nimport { useFocusEffect } from "@react-navigation/native";\nimport {\n  KeyboardController,\n  AndroidSoftInputModes,\n  useKeyboardContext,\n} from "react-native-keyboard-controller";\n\nfunction useKeyboardAnimation() {\n  useFocusEffect(\n    useCallback(() => {\n      KeyboardController.setInputMode(\n        AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,\n      );\n\n      return () => KeyboardController.setDefaultMode();\n    }, []),\n  );\n\n  const context = useKeyboardContext();\n\n  return context.animated;\n}\n'})}),"\n",(0,t.jsxs)(o.p,{children:["In this case when screen becomes invisible hook will restore default ",(0,t.jsx)(o.code,{children:"softInputMode"}),", and ",(0,t.jsx)(o.code,{children:"softInputMode"})," will be set to ",(0,t.jsx)(o.code,{children:"adjustResize"})," only on the screen where it's used."]})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>d,a:()=>s});var t=n(7294);const r={},i=t.createContext(r);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);