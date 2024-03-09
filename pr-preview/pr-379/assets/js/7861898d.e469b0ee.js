"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7443],{2433:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=o(5893),t=o(1151);const a={sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},i="KeyboardProvider",d={id:"api/keyboard-provider",title:"KeyboardProvider",description:"KeyboardProvider should wrap your app. Underhood it works with KeyboardControllerView to receive events during keyboard movements, maps these events to Animated/Reanimated values and store them in context.",source:"@site/versioned_docs/version-1.10.0/api/keyboard-provider.md",sourceDirName:"api",slug:"/api/keyboard-provider",permalink:"/react-native-keyboard-controller/pr-preview/pr-379/docs/1.10.0/api/keyboard-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.10.0/api/keyboard-provider.md",tags:[],version:"1.10.0",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["react-native-keyboard-controller","KeyboardProvider"]},sidebar:"tutorialSidebar",previous:{title:"KeyboardStickyView",permalink:"/react-native-keyboard-controller/pr-preview/pr-379/docs/1.10.0/api/components/keyboard-sticky-view/"},next:{title:"KeyboardControllerView",permalink:"/react-native-keyboard-controller/pr-preview/pr-379/docs/1.10.0/api/keyboard-controller-view"}},s={},l=[{value:"Props",id:"props",level:2},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",level:3},{value:"<code>navigationBarTranslucent</code>",id:"navigationbartranslucent",level:3},{value:"<code>enabled</code>",id:"enabled",level:3},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"keyboardprovider",children:"KeyboardProvider"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"KeyboardProvider"})," should wrap your app. Underhood it works with ",(0,n.jsx)(r.code,{children:"KeyboardControllerView"})," to receive events during keyboard movements, maps these events to ",(0,n.jsx)(r.code,{children:"Animated"}),"/",(0,n.jsx)(r.code,{children:"Reanimated"})," values and store them in ",(0,n.jsx)(r.code,{children:"context"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(r.h3,{id:"statusbartranslucent",children:(0,n.jsx)(r.code,{children:"statusBarTranslucent"})}),"\n",(0,n.jsxs)(r.p,{children:["A boolean prop to indicate whether ",(0,n.jsx)(r.code,{children:"StatusBar"})," should be translucent on ",(0,n.jsx)(r.code,{children:"Android"})," or not."]}),"\n",(0,n.jsx)(r.admonition,{title:"Important defaults",type:"caution",children:(0,n.jsxs)(r.p,{children:["By default this library stretches to full screen (",(0,n.jsx)(r.code,{children:"edge-to-edge"})," mode) and status bar becomes translucent. But the library tries to use standard RN app behavior and automatically applies padding from top to look like a standard RN app. If you use ",(0,n.jsx)(r.code,{children:"translucent"})," prop for ",(0,n.jsx)(r.code,{children:"StatusBar"})," component - it will not work anymore. You'll need to specify it on provider level. For more info ",(0,n.jsx)(r.a,{href:"https://github.com/kirillzyusko/react-native-keyboard-controller/pull/30",children:"see"})," this PR."]})}),"\n",(0,n.jsx)(r.h3,{id:"navigationbartranslucent",children:(0,n.jsx)(r.code,{children:"navigationBarTranslucent"})}),"\n",(0,n.jsxs)(r.p,{children:["A boolean prop to indicate whether ",(0,n.jsx)(r.a,{href:"https://m2.material.io/design/platform-guidance/android-bars.html#android-navigation-bar",children:"NavigationBar"})," should be translucent on ",(0,n.jsx)(r.code,{children:"Android"})," or not."]}),"\n",(0,n.jsx)(r.h3,{id:"enabled",children:(0,n.jsx)(r.code,{children:"enabled"})}),"\n",(0,n.jsxs)(r.p,{children:["A boolean prop indicating whether the module is enabled. It indicate only initial state, i. e. if you try to change this prop after component mount it will not have any effect. To change the property in runtime use ",(0,n.jsx)(r.a,{href:"/react-native-keyboard-controller/pr-preview/pr-379/docs/1.10.0/api/hooks/module/use-keyboard-controller",children:"useKeyboardController"})," hook and ",(0,n.jsx)(r.code,{children:"setEnabled"})," method. Defaults to ",(0,n.jsx)(r.code,{children:"true"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Could be useful to set it to ",(0,n.jsx)(r.code,{children:"false"})," if you want to activate the module only on specific screens."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-tsx",children:'import { KeyboardProvider } from "react-native-keyboard-controller";\n\nconst App = () => {\n  return (\n    <KeyboardProvider>\n      {/* The other components in your tree */}\n    </KeyboardProvider>\n  );\n};\n'})})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,r,o)=>{o.d(r,{Z:()=>d,a:()=>i});var n=o(7294);const t={},a=n.createContext(t);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);