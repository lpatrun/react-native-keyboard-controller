"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6314],{9099:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=r(5893),t=r(1151);const d={sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},a="KeyboardController",i={id:"api/keyboard-controller",title:"KeyboardController",description:"KeyboardController is an object which has two functions:",source:"@site/versioned_docs/version-1.6.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.6.0/api/keyboard-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.6.0/api/keyboard-controller.md",tags:[],version:"1.6.0",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:["react-native-keyboard-controller","KeyboardController","module","windowSoftInputMode","adjustResize","adjustPan"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardGestureArea",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.6.0/api/keyboard-gesture-area"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.6.0/api/keyboard-events"}},s={},l=[{value:"Example",id:"example",level:2}];function c(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"keyboardcontroller",children:"KeyboardController"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"KeyboardController"})," is an object which has two functions:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"setInputMode"})," - used to change ",(0,n.jsx)(o.code,{children:"windowSoftInputMode"})," in runtime;"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"setDefaultMode"})," - used to restore default ",(0,n.jsx)(o.code,{children:"windowSoftInputMode"})," (which is declared in ",(0,n.jsx)(o.code,{children:"AndroidManifest.xml"}),");"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:'import {\n  KeyboardController,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nexport const useResizeMode = () => {\n  useEffect(() => {\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE\n    );\n\n    return () => KeyboardController.setDefaultMode();\n  }, []);\n};\n'})})]})}function u(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,o,r)=>{r.d(o,{Z:()=>i,a:()=>a});var n=r(7294);const t={},d=n.createContext(t);function a(e){const o=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(d.Provider,{value:o},e.children)}}}]);