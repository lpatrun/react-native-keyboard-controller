"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5380],{3905:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>s,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=i(5893),n=i(1151);const a={sidebar_position:3,keywords:["react-native-keyboard-controller","interactive keyboard","dismiss keyboard via gesture","control keyboard position"]},t="Interactive Keyboard",d={id:"guides/interactive-keyboard",title:"Interactive Keyboard",description:"This guide focuses on adding an ability to dismiss keyboard interactively. Below you can see a step by step guide which will explain how different pieces of the code work together.",source:"@site/versioned_docs/version-1.7.0/guides/interactive-keyboard.md",sourceDirName:"guides",slug:"/guides/interactive-keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/guides/interactive-keyboard",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.7.0/guides/interactive-keyboard.md",tags:[],version:"1.7.0",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["react-native-keyboard-controller","interactive keyboard","dismiss keyboard via gesture","control keyboard position"]},sidebar:"tutorialSidebar",previous:{title:"Building own hook",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/guides/building-own-hook"},next:{title:"Compatibility",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/guides/compatibility"}},s={},l=[{value:"Android",id:"android",level:2},{value:"Start point",id:"start-point",level:3},{value:"Adding <code>KeyboardGestureArea</code>",id:"adding-keyboardgesturearea",level:3},{value:"Reacting on keyboard movement",id:"reacting-on-keyboard-movement",level:3},{value:"iOS",id:"ios",level:2},{value:"Full examples",id:"full-examples",level:2}];function c(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h1,{id:"interactive-keyboard",children:"Interactive Keyboard"}),"\n",(0,r.jsx)(o.p,{children:"This guide focuses on adding an ability to dismiss keyboard interactively. Below you can see a step by step guide which will explain how different pieces of the code work together."}),"\n",(0,r.jsx)(o.h2,{id:"android",children:"Android"}),"\n",(0,r.jsx)(o.h3,{id:"start-point",children:"Start point"}),"\n",(0,r.jsx)(o.p,{children:"First of all let's consider a simple example and layout for typical chat application. Of course in real-application layout will be much more complex, but since it's a guide we will consider an over-simplified example to get a main idea."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"<ScrollView>\n  <Messages />\n</ScrollView>\n"})}),"\n",(0,r.jsxs)(o.h3,{id:"adding-keyboardgesturearea",children:["Adding ",(0,r.jsx)(o.code,{children:"KeyboardGestureArea"})]}),"\n",(0,r.jsxs)(o.p,{children:["To make interactive dismissing work on Android we need to add ",(0,r.jsx)(o.code,{children:"KeyboardGestureArea"})," view. This view will track all gestures and will control the keyboard positioning. To customize the way how the keyboard will be dismissed you can specify ",(0,r.jsx)(o.code,{children:"interpolator"})," ",(0,r.jsx)(o.a,{href:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/api/keyboard-gesture-area#interpolator",children:"prop"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["In order to recognize all gestures on a ",(0,r.jsx)(o.code,{children:"ScrollView"})," we need to wrap a ",(0,r.jsx)(o.code,{children:"ScrollView"})," within ",(0,r.jsx)(o.code,{children:"KeyboardGestureArea"}),":"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'// add-new-code\n<KeyboardGestureArea interpolator="ios">\n  <ScrollView>\n    <Messages />\n  </ScrollView>\n// add-new-code\n</KeyboardGestureArea>\n'})}),"\n",(0,r.jsx)(o.h3,{id:"reacting-on-keyboard-movement",children:"Reacting on keyboard movement"}),"\n",(0,r.jsxs)(o.p,{children:["Basically ",(0,r.jsx)(o.code,{children:"useKeyboardAnimation"}),"/",(0,r.jsx)(o.code,{children:"useReanimatedKeyboardAnimation"})," will update animated values as keyboard moves. But if you want to differ plain keyboard movements (when it shows/hides because of ",(0,r.jsx)(o.code,{children:"TextInput"})," gets focused/unfocused) and interactive keyboard movement, then you can use ",(0,r.jsx)(o.code,{children:"useKeyboardHandler"})," hook and specify ",(0,r.jsx)(o.a,{href:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/api/hooks/use-keyboard-handler/#oninteractive",children:(0,r.jsx)(o.code,{children:"onInteractive"})})," handler as shown below:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:"useKeyboardHandler(\n  {\n    onInteractive: (e) => {\n      'worklet';\n      // your handler for interactive keyboard movement\n    }\n  },\n  []\n);\n"})}),"\n",(0,r.jsx)(o.h2,{id:"ios",children:"iOS"}),"\n",(0,r.jsxs)(o.p,{children:["The interactive keyboard dismissing works well out-of-box in ",(0,r.jsx)(o.code,{children:"react-native"})," using ",(0,r.jsx)(o.code,{children:"InputAccessoryView"}),". However if you are not satisfied with the usage of ",(0,r.jsx)(o.code,{children:"InputAccessoryView"})," - you can try to utilize the functionality of this library."]}),"\n",(0,r.jsxs)(o.p,{children:["For that you'll need to follow a pattern from above and add ",(0,r.jsx)(o.a,{href:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.7.0/api/hooks/use-keyboard-handler/#oninteractive",children:(0,r.jsx)(o.code,{children:"onInteractive"})})," handler if you are using ",(0,r.jsx)(o.code,{children:"useKeyboardHandler"})," hook. If you are using ",(0,r.jsx)(o.code,{children:"useKeyboardAnimation"})," or ",(0,r.jsx)(o.code,{children:"useReanimatedKeyboardAnimation"})," hooks then no extra actions are required - these hooks will update its values automatically, when keyboard gets moved because of interactive dismissal."]}),"\n",(0,r.jsx)(o.h2,{id:"full-examples",children:"Full examples"}),"\n",(0,r.jsxs)(o.p,{children:["To see full examples of interactive keyboard handling you may have a look on corresponding ",(0,r.jsx)(o.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/main/example/src/screens/Examples/InteractiveKeyboard/index.tsx",children:"android"})," and ",(0,r.jsx)(o.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/blob/main/example/src/screens/Examples/InteractiveKeyboardIOS/index.tsx",children:"ios"})," example apps."]})]})}function u(e={}){const{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,o,i)=>{i.d(o,{Z:()=>d,a:()=>t});var r=i(7294);const n={},a=r.createContext(n);function t(e){const o=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);