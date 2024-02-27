"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2317],{2395:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(5893),t=r(1151);const l={},d="KeyboardController",i={id:"api/keyboard-controller",title:"KeyboardController",description:"KeyboardController is an object which has two functions:",source:"@site/versioned_docs/version-1.0.0/api/keyboard-controller.md",sourceDirName:"api",slug:"/api/keyboard-controller",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.0.0/api/keyboard-controller",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.0.0/api/keyboard-controller.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.0.0/api/keyboard-controller-view"},next:{title:"KeyboardEvents",permalink:"/react-native-keyboard-controller/pr-preview/pr-265/docs/1.0.0/api/keyboard-events"}},s={},c=[{value:"Example",id:"example",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"keyboardcontroller",children:"KeyboardController"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"KeyboardController"})," is an object which has two functions:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"setInputMode"})," - used to change ",(0,n.jsx)(o.code,{children:"windowSoftInputMode"})," in runtime;"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"setDefaultMode"})," - used to restore default ",(0,n.jsx)(o.code,{children:"windowSoftInputMode"})," (which is declared in ",(0,n.jsx)(o.code,{children:"AndroidManifest.xml"}),");"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ts",children:'import {\n  KeyboardController,\n  AndroidSoftInputModes,\n} from "react-native-keyboard-controller";\n\nexport const useResizeMode = () => {\n  useEffect(() => {\n    KeyboardController.setInputMode(\n      AndroidSoftInputModes.SOFT_INPUT_ADJUST_RESIZE,\n    );\n\n    return () => KeyboardController.setDefaultMode();\n  }, []);\n};\n'})})]})}function p(e={}){const{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,o,r)=>{r.d(o,{Z:()=>i,a:()=>d});var n=r(7294);const t={},l=n.createContext(t);function d(e){const o=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(l.Provider,{value:o},e.children)}}}]);