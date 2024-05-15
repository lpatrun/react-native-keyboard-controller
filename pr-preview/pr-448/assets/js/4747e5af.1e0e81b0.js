"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3199],{21854:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=o(85893),t=o(11151);const a={slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},s=void 0,i={permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/set-enabled",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-09-28-set-enabled/index.md",source:"@site/blog/2023-09-28-set-enabled/index.md",title:"New setEnabled method",description:"I'm thrilled to announce the release of react-native-keyboard-controller version 1.8.0. With this latest release, I introduce the useKeyboardController hook and setEnabled method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly.",date:"2023-09-28T00:00:00.000Z",formattedDate:"September 28, 2023",tags:[{label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/tags/react-native"},{label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/tags/keyboard"},{label:"setEnabled",permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/tags/set-enabled"}],readingTime:2.27,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"set-enabled",title:"New setEnabled method",authors:["kirill"],tags:["react-native","keyboard","setEnabled"],keywords:["react-native-keyboard-controller","keyboard","setEnabled"]},unlisted:!1,prevItem:{title:"New release, new features, achieved milestones",permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/new-features-achieved-milestones"},nextItem:{title:"Introducing KeyboardAvoidingView - Elevating Your React Native UI Experience",permalink:"/react-native-keyboard-controller/pr-preview/pr-448/blog/components"}},l={authorsImageUrls:[void 0]},d=[{value:"What&#39;s New in Version 1.8.0: The <code>setEnabled</code> Hook",id:"whats-new-in-version-180-the-setenabled-hook",level:2},{value:"How to Use <code>setEnabled</code>",id:"how-to-use-setenabled",level:3},{value:"Use Cases for <code>setEnabled</code>",id:"use-cases-for-setenabled",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["I'm thrilled to announce the release of ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," version ",(0,r.jsx)(n.code,{children:"1.8.0"}),". With this latest release, I introduce the ",(0,r.jsx)(n.code,{children:"useKeyboardController"})," hook and ",(0,r.jsx)(n.code,{children:"setEnabled"})," method, which allows for a gradual integration of the library into your project, enabling you to disable the module on specific screens as needed. This flexible feature ensures that your app's keyboard behavior remains seamless and user-friendly."]}),"\n",(0,r.jsxs)(n.h2,{id:"whats-new-in-version-180-the-setenabled-hook",children:["What's New in Version 1.8.0: The ",(0,r.jsx)(n.code,{children:"setEnabled"})," Hook"]}),"\n",(0,r.jsxs)(n.p,{children:["The star feature of ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," version ",(0,r.jsx)(n.code,{children:"1.8.0"})," is the introduction of the ",(0,r.jsx)(n.code,{children:"setEnabled"})," method. This method provides developers with granular control over when and where the library's keyboard management should be active."]}),"\n",(0,r.jsxs)(n.h3,{id:"how-to-use-setenabled",children:["How to Use ",(0,r.jsx)(n.code,{children:"setEnabled"})]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"setEnabled"})," method is incredibly straightforward. Here's a quick example of how to integrate it into your React Native project:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { useKeyboardController } from "react-native-keyboard-controller";\n\nconst { enabled, setEnabled } = useKeyboardController();\n\n// if you want to know whether is module active at the moment\nconsole.log(enabled);\n\n// disable keyboard controller on a specific screen\nsetEnabled(false);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["In this example, we're importing the ",(0,r.jsx)(n.code,{children:"useKeyboardController"})," hook from the ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," library. This hook returns ",(0,r.jsx)(n.code,{children:"setEnabled"})," method (which you can use to disable keyboard management for a specific screen) and ",(0,r.jsx)(n.code,{children:"enabled"})," variable (indicating whether the module is active now or not)."]}),"\n",(0,r.jsxs)(n.p,{children:["When you disable the module using ",(0,r.jsx)(n.code,{children:"setEnabled(false)"}),", the screen will fallback to the default ",(0,r.jsx)(n.code,{children:"Android"})," behavior, automatically resizing based on ",(0,r.jsx)(n.code,{children:"AndroidManifest"})," preferences (",(0,r.jsx)(n.code,{children:"android:windowSoftInputMode"}),"). This level of control allows you to tailor the keyboard experience to your app's unique needs on a per-screen basis."]}),"\n",(0,r.jsxs)(n.h3,{id:"use-cases-for-setenabled",children:["Use Cases for ",(0,r.jsx)(n.code,{children:"setEnabled"})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"setEnabled"})," method is incredibly versatile and can be employed in various scenarios:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Forms"}),": Disable keyboard management on screens with simple forms that don't require custom keyboard management."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Chat Interfaces"}),": Keep keyboard management enabled for chat screens, ensuring smooth and consistent user experiences during messaging interactions."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Gradual Integration"}),": Tailor keyboard functionality on specific pages where you require precise control over how the keyboard behaves, while leaving other screens unaffected by these adjustments."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," continues to evolve, making it an essential tool for React Native developers who want to provide exceptional user experiences in their mobile apps."]}),"\n",(0,r.jsxs)(n.p,{children:["With the introduction of the ",(0,r.jsx)(n.code,{children:"setEnabled"})," method in version ",(0,r.jsx)(n.code,{children:"1.8.0"}),", you now have even more control over keyboard behavior, ensuring that your app feels polished and responsive \ud83d\ude0e"]}),"\n",(0,r.jsxs)(n.p,{children:["To get started with the latest version, check out the ",(0,r.jsx)(n.a,{href:"../",children:"official documentation"})," and explore the new possibilities that the ",(0,r.jsx)(n.code,{children:"setEnabled"})," method offers."]}),"\n",(0,r.jsxs)(n.p,{children:["Upgrade your React Native project today and take your keyboard management to the next level with ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," version ",(0,r.jsx)(n.code,{children:"1.8.0"}),"!"]}),"\n",(0,r.jsxs)(n.p,{children:["Stay tuned for future updates and releases as I continue to enhance the ",(0,r.jsx)(n.code,{children:"react-native-keyboard-controller"})," library. Follow me on ",(0,r.jsx)(n.a,{href:"https://twitter.com/ziusko",children:"Twitter"})," and ",(0,r.jsx)(n.a,{href:"https://github.com/kirillzyusko",children:"GitHub"})," for updates. Thank you for your support! \ud83d\ude0a"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>s});var r=o(67294);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);