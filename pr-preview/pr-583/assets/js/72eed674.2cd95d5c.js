"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8501],{2284:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(74848),a=t(28453);const r={keywords:["react-native","react native","react-native-keyboard-controller","useFocusedInputHandler","onTextChanged","onChangeText","input interceptor","react-native-reanimated","worklet","react hook"]},s="useFocusedInputHandler",i={id:"api/hooks/input/use-focused-input-handler",title:"useFocusedInputHandler",description:"useFocusedInputHandler is a hook that allows to intercept events from a focused TextInput.",source:"@site/versioned_docs/version-1.11.0/api/hooks/input/use-focused-input-handler.md",sourceDirName:"api/hooks/input",slug:"/api/hooks/input/use-focused-input-handler",permalink:"/react-native-keyboard-controller/pr-preview/pr-583/docs/1.11.0/api/hooks/input/use-focused-input-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.11.0/api/hooks/input/use-focused-input-handler.md",tags:[],version:"1.11.0",frontMatter:{keywords:["react-native","react native","react-native-keyboard-controller","useFocusedInputHandler","onTextChanged","onChangeText","input interceptor","react-native-reanimated","worklet","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-583/docs/1.11.0/api/hooks/keyboard/use-reanimated-keyboard-animation"},next:{title:"useReanimatedFocusedInput",permalink:"/react-native-keyboard-controller/pr-preview/pr-583/docs/1.11.0/api/hooks/input/use-reanimated-focused-input"}},c={},d=[{value:"Example",id:"example",level:2},{value:"Handlers",id:"handlers",level:2},{value:"<code>onChangeText</code>",id:"onchangetext",level:3},{value:"Known issues",id:"known-issues",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usefocusedinputhandler",children:"useFocusedInputHandler"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"useFocusedInputHandler"})," is a hook that allows to intercept events from a focused ",(0,o.jsx)(n.code,{children:"TextInput"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'useFocusedInputHandler(\n  {\n    onChangeText: ({ text }) => {\n      "worklet";\n    },\n  },\n  [],\n);\n'})}),"\n",(0,o.jsx)(n.h2,{id:"handlers",children:"Handlers"}),"\n",(0,o.jsx)(n.h3,{id:"onchangetext",children:(0,o.jsx)(n.code,{children:"onChangeText"})}),"\n",(0,o.jsxs)(n.p,{children:["Fires an event whenever user changes text in focused ",(0,o.jsx)(n.code,{children:"TextInput"})," (i. e. adds or deletes symbols). Event has following structure:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"type FocusedInputTextChangedEvent = {\n  text: string;\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["This handler can be handy when you need to have an access to what user typed on a global level (i. e. when you don't have a direct access to your ",(0,o.jsx)(n.code,{children:"TextInput"}),"), for example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["you develop a generic component for any kind of avoidance focused inputs (i. e. ",(0,o.jsx)(n.code,{children:"AwareScrollView"}),") that doesn't have an access to child ",(0,o.jsx)(n.code,{children:"TextInputs"})," by design;"]}),"\n",(0,o.jsx)(n.li,{children:"you track user activity on the screen and if there is no activity for certain period of time then you do a certain action (logout for example). If you want to reset timer when user interacts with a keyboard - usage of this hook can be a good choice."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"known-issues",children:"Known issues"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"https://github.com/react-native-text-input-mask/react-native-text-input-mask/pull/305",children:"react-native-text-input-mask#305"}),": ",(0,o.jsx)(n.code,{children:"onChangeText"})," handler ignores an input from ",(0,o.jsx)(n.code,{children:"react-native-text-input-mask"})," on ",(0,o.jsx)(n.code,{children:"iOS"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var o=t(96540);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);