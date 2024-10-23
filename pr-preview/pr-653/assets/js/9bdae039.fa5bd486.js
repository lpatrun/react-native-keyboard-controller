"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{56097:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=o(74848),n=o(28453),s=o(69026),a=o(75030);const i={slug:"release-1-13",title:"A new 1.13 release \ud83d\ude0e",authors:["kirill"],tags:["react-native","keyboard","modal","translucent status bar","offset"],keywords:["react-native-keyboard-controller","keyboard","modal","status bar translucent","keyboard gesture area offset"]},l=void 0,d={permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/release-1-13",editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2024-08-16-release-1-13/index.mdx",source:"@site/blog/2024-08-16-release-1-13/index.mdx",title:"A new 1.13 release \ud83d\ude0e",description:"I'm excited to announce the latest release, version 1.13.0, of react-native-keyboard-controller! \ud83c\udf89",date:"2024-08-16T00:00:00.000Z",tags:[{inline:!0,label:"react-native",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/tags/react-native"},{inline:!0,label:"keyboard",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/tags/keyboard"},{inline:!0,label:"modal",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/tags/modal"},{inline:!0,label:"translucent status bar",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/tags/translucent-status-bar"},{inline:!0,label:"offset",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/tags/offset"}],readingTime:5.275,hasTruncateMarker:!0,authors:[{name:"Kirill Zyusko",title:"Library author",url:"https://github.com/kirillzyusko",imageURL:"https://github.com/kirillzyusko.png",key:"kirill"}],frontMatter:{slug:"release-1-13",title:"A new 1.13 release \ud83d\ude0e",authors:["kirill"],tags:["react-native","keyboard","modal","translucent status bar","offset"],keywords:["react-native-keyboard-controller","keyboard","modal","status bar translucent","keyboard gesture area offset"]},unlisted:!1,prevItem:{title:"New OverKeyboardView component",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/over-keyboard-view"},nextItem:{title:"Announcing upcoming release \ud83d\udce3",permalink:"/react-native-keyboard-controller/pr-preview/pr-653/blog/release-1-12"}},c={authorsImageUrls:[void 0]},h=[{value:"Key features",id:"key-features",level:2},{value:"<code>Modal</code> support on Android",id:"modal-support-on-android",level:3},{value:"Support for <code>StatusBar.translucent</code>",id:"support-for-statusbartranslucent",level:3},{value:"New <code>offset</code> prop for <code>KeyboardGestureArea</code>",id:"new-offset-prop-for-keyboardgesturearea",level:3},{value:"<code>react-native@0.75</code> support",id:"react-native075-support",level:3},{value:"An ability to prevent default actions in <code>KeyboardToolbar</code>",id:"an-ability-to-prevent-default-actions-in-keyboardtoolbar",level:3},{value:"Synchronous <code>worklet</code> handler mount",id:"synchronous-worklet-handler-mount",level:3},{value:"Other bug fixes and improvements",id:"other-bug-fixes-and-improvements",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",i:"i",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["I'm excited to announce the latest release, version ",(0,r.jsx)(t.code,{children:"1.13.0"}),", of react-native-keyboard-controller! \ud83c\udf89"]}),"\n",(0,r.jsxs)(t.p,{children:["This update brings significant improvements and new features to enhance the way your React Native apps handle keyboard interactions. With better support for ",(0,r.jsx)(t.code,{children:"Modal"})," components, dynamic ",(0,r.jsx)(t.code,{children:"StatusBar"})," translucency, and new customization options for ",(0,r.jsx)(t.code,{children:"KeyboardGestureArea"}),"s, this release is designed to make your development process smoother and your app's user experience more seamless. \ud83d\ude80"]}),"\n","\n",(0,r.jsx)(t.h2,{id:"key-features",children:"Key features"}),"\n",(0,r.jsxs)(t.h3,{id:"modal-support-on-android",children:[(0,r.jsx)(t.code,{children:"Modal"})," support on Android"]}),"\n",(0,r.jsxs)(t.p,{children:["Starting from the very first version of this library it was impossible to use the functionality of this library inside the ",(0,r.jsx)(t.code,{children:"Modal"}),". It was caused by next factors:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["the ",(0,r.jsx)(t.code,{children:"Modal"})," window lives in its own view hierarchy;"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"react-native"})," set ",(0,r.jsx)(t.code,{children:"adjustResize"})," mode to ",(0,r.jsx)(t.code,{children:"window"})," of the ",(0,r.jsx)(t.code,{children:"Modal"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["As a result whenever you try to use ",(0,r.jsx)(t.code,{children:"react-native-keyboard-controller"})," inside the ",(0,r.jsx)(t.code,{children:"Modal"})," you will get a default behavior (but sometimes even mixed behavior, i. e. hooks will report keyboard height and ",(0,r.jsx)(t.code,{children:"Modal"})," content will be automatically resized)."]}),"\n",(0,r.jsx)(t.p,{children:"As a temporary workaround people simply disabled the module (to fallback to a fully default behavior):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useKeyboardController } from "react-native-keyboard-controller";\n\n// ... somewhere in your modal screen ...\n\nconst { enabled, setEnabled } = useKeyboardController();\n\nuseEffect(() => {\n  setEnabled(false);\n}, []);\n'})}),"\n",(0,r.jsx)(t.p,{children:"While it was working approach it still had some downsides, such as inconsistent keyboard handling/animations across the app."}),"\n",(0,r.jsxs)(t.p,{children:["With the new release it's not a problem anymore - now you can use all hooks and components inside the ",(0,r.jsx)(t.code,{children:"Modal"})," without additional hassle and it will just work out of the box:"]}),"\n",(0,r.jsx)(s.A,{src:"/video/modal-integration-demo.mp4",width:30}),"\n",(0,r.jsxs)(t.h3,{id:"support-for-statusbartranslucent",children:["Support for ",(0,r.jsx)(t.code,{children:"StatusBar.translucent"})]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"StatusBar"})," integration was always a problematic because ",(0,r.jsx)(t.code,{children:"react-native"})," uses deprecated methods that eventually breaks keyboard events. This module exports its own ",(0,r.jsx)(t.code,{children:"StatusBarManagerCompat"})," module and uses this module automatically to handle ",(0,r.jsx)(t.code,{children:"StatusBar"})," changes."]}),"\n",(0,r.jsxs)(t.p,{children:["The problem was in the fact that ",(0,r.jsx)(t.code,{children:"StatusBarManagerCompat"})," module didn't react on ",(0,r.jsx)(t.code,{children:"translucent"})," prop changes. Now it's not the case and you can disable/enable ",(0,r.jsx)(t.code,{children:"translucent"})," property dynamically."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["You may think that ",(0,r.jsx)(t.code,{children:"statusBarTranslucent"})," prop on ",(0,r.jsx)(t.code,{children:"KeyboardProvider"})," is not needed anymore, but I would recommend to keep it - it'll help to layout ",(0,r.jsx)(t.code,{children:"KeyboardProvider"})," properly in one frame without frame jumps."]})}),"\n",(0,r.jsxs)(t.h3,{id:"new-offset-prop-for-keyboardgesturearea",children:["New ",(0,r.jsx)(t.code,{children:"offset"})," prop for ",(0,r.jsx)(t.code,{children:"KeyboardGestureArea"})]}),"\n",(0,r.jsxs)(t.p,{children:["Starting from this release I'm adding more customization to interactive keyboard handling. On ",(0,r.jsx)(t.code,{children:"Android"})," now you can add ",(0,r.jsx)(t.code,{children:"offset"})," property (which can be equal to your ",(0,r.jsx)(t.code,{children:"TextInput"})," height) to your ",(0,r.jsx)(t.code,{children:"KeyboardGestureArea"})," component - it'll allow you to extend the keyboard area and start dismiss gesture starting from the ",(0,r.jsx)(t.code,{children:"TextInput"})," top border and not from the keyboard itself."]}),"\n","\n",(0,r.jsx)(a.A,{left:(0,r.jsx)(s.A,{src:"/video/keyboard-gesture-area-without-offset.mp4",width:65}),right:(0,r.jsx)(s.A,{src:"/video/keyboard-gesture-area-with-offset.mp4",width:65}),leftText:(0,r.jsx)(t.i,{children:"The keyboard movement starts only when you cross the top border of the keyboard"}),rightText:(0,r.jsxs)(t.i,{children:["The keyboard movement starts only when you cross the top border of your"," ",(0,r.jsx)(t.code,{children:"TextInput"})]})}),"\n",(0,r.jsxs)(t.h3,{id:"react-native075-support",children:[(0,r.jsx)(t.code,{children:"react-native@0.75"})," support"]}),"\n",(0,r.jsxs)(t.p,{children:["This release brings support for ",(0,r.jsx)(t.code,{children:"react-native@0.75"}),". Even though ",(0,r.jsx)(t.code,{children:"1.12.x"})," should be also compatible with ",(0,r.jsx)(t.code,{children:"react-native@0.75"})," I still would recommend you to update this library to ",(0,r.jsx)(t.code,{children:"1.13.0"})," if you are running your project on ",(0,r.jsx)(t.code,{children:"react-native@0.75"})," (especially if you are using new architecture)."]}),"\n",(0,r.jsxs)(t.h3,{id:"an-ability-to-prevent-default-actions-in-keyboardtoolbar",children:["An ability to prevent default actions in ",(0,r.jsx)(t.code,{children:"KeyboardToolbar"})]}),"\n",(0,r.jsxs)(t.p,{children:["Starting from ",(0,r.jsx)(t.code,{children:"1.12.0"})," you had an ability to customize the behavior of ",(0,r.jsx)(t.code,{children:"KeyboardToolbar"})," buttons - you could run additional actions (add haptic feedback, for example). However before it wasn't possible to prevent default actions from happening, i. e. if you pressed next button, then focus would move to the next input."]}),"\n",(0,r.jsxs)(t.p,{children:["With this release you can prevent default actions from happening by calling ",(0,r.jsx)(t.code,{children:"e.preventDefault()"})," in ",(0,r.jsx)(t.code,{children:"onNextCallback"}),", ",(0,r.jsx)(t.code,{children:"onPrevCallback"}),", and ",(0,r.jsx)(t.code,{children:"onDoneCallback"})," callbacks."]}),"\n",(0,r.jsxs)(t.p,{children:["I think it's a great addition to the existing functionality, because sometimes you may need to have this. For example, if you have a custom input between two ",(0,r.jsx)(t.code,{children:"TextInput"}),"s (let's say a calendar picker) and when you press the next button (while you have a focus on the first input) - most likely you want to open a calendar picker. But with default behavior you will skip a calendar picker and will instantly move to the second input. Using new functionality you can call ",(0,r.jsx)(t.code,{children:"e.preventDefault()"})," conditionally and perform your own action to achieve your custom requirements!"]}),"\n",(0,r.jsxs)(t.h3,{id:"synchronous-worklet-handler-mount",children:["Synchronous ",(0,r.jsx)(t.code,{children:"worklet"})," handler mount"]}),"\n",(0,r.jsxs)(t.p,{children:["Hooks such as ",(0,r.jsx)(t.code,{children:"useKeyboardHandler"})," or ",(0,r.jsx)(t.code,{children:"useFocusedInputHandler"})," were mounting ",(0,r.jsx)(t.code,{children:"worklet"})," handlers asynchronously. In most of the cases it wasn't a problem, but if the keyboard performs an animation and ",(0,r.jsx)(t.code,{children:"worklet"})," handler is not attached yet, then you will get a broken layout - keyboard will overlap elements etc."]}),"\n",(0,r.jsxs)(t.p,{children:["This release fixes this issue by mounting ",(0,r.jsx)(t.code,{children:"worklet"})," handlers synchronously so it's not a problem anymore! \ud83d\ude0a"]}),"\n",(0,r.jsx)(t.h3,{id:"other-bug-fixes-and-improvements",children:"Other bug fixes and improvements"}),"\n",(0,r.jsx)(t.p,{children:"Among all other improvements this release also includes a bunch of fixes, such as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["proper ",(0,r.jsx)(t.code,{children:"ref"})," de-allocation for ",(0,r.jsx)(t.code,{children:"KeyboardAwareScrollView"}),";"]}),"\n",(0,r.jsxs)(t.li,{children:["better accessibility labels for ",(0,r.jsx)(t.code,{children:"KeyboardToolbar"}),";"]}),"\n",(0,r.jsxs)(t.li,{children:["incorrect ",(0,r.jsx)(t.code,{children:"height"}),"/",(0,r.jsx)(t.code,{children:"progress"})," values in ",(0,r.jsx)(t.code,{children:"onEnd"}),"/",(0,r.jsx)(t.code,{children:"didShow"})," events on iOS when keyboard appearance has two stages (i. e. you are using ",(0,r.jsx)(t.code,{children:"secureTextEntry"})," prop on ",(0,r.jsx)(t.code,{children:"TextInput"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Also this release aims to improve the stability of this library - I added a bunch of ",(0,r.jsx)(t.strong,{children:"e2e"})," tests and added scripts for running them on more devices. If before I used only ",(0,r.jsx)(t.strong,{children:"iOS 17"})," simulator and ",(0,r.jsx)(t.strong,{children:"Android 9"})," emulator, now I'm using ",(0,r.jsx)(t.strong,{children:"iOS 16/17/18"})," (yes, I'm testing on ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"beta"})})," iOS releases too \ud83d\ude0e) simulators and ",(0,r.jsx)(t.strong,{children:"Android 9/12"})," emulators."]}),"\n",(0,r.jsx)(t.p,{children:"I hope such setup can help to catch bugs on as early stage as possible. But I'm not going to stop here - I'm also planning to add more tests, more runtimes (Android 15 is planned) and improve the stability of this library even more."}),"\n",(0,r.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,r.jsxs)(t.p,{children:["The new ",(0,r.jsx)(t.code,{children:"1.13.0"})," release is just a better revision of the ",(0,r.jsx)(t.code,{children:"1.12.0"})," release. But since it brings quite a lot of new features and improvements I decided to publish it as a separate release. \ud83d\udc40"]}),"\n",(0,r.jsx)(t.p,{children:"I'm planning to continuously improve this library and add more features. The ultimate goal is to fix all the bugs and implement all requested features. \ud83d\ude0e"}),"\n",(0,r.jsxs)(t.p,{children:["If you have a pain-points when you have to deal with keyboard in ",(0,r.jsx)(t.code,{children:"react-native"})," applications, please feel free to contribute to the project by submitting issues or pull requests on GitHub. Let's continue to make ",(0,r.jsx)(t.code,{children:"react-native-keyboard-controller"})," an essential tool for developers building high-quality mobile applications! \ud83d\udcaa"]}),"\n",(0,r.jsxs)(t.p,{children:["To stay tuned follow me on ",(0,r.jsx)(t.a,{href:"https://twitter.com/ziusko",children:"Twitter"})," and ",(0,r.jsx)(t.a,{href:"https://github.com/kirillzyusko",children:"GitHub"})," for updates. Thank you for your support! \ud83d\ude0a"]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},75030:(e,t,o)=>{o.d(t,{A:()=>i});o(96540);var r=o(74848);const n={border:"none"},s={...n,maxWidth:400,textAlign:"center"},a={...n,backgroundColor:"#00000000"};function i(e){let{left:t,leftText:o,right:i,rightText:l}=e;return(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{style:n,children:[(0,r.jsx)("td",{style:n,children:t}),(0,r.jsx)("td",{style:n,children:i})]}),(0,r.jsxs)("tr",{style:a,children:[(0,r.jsx)("td",{style:s,children:o}),(0,r.jsx)("td",{style:s,children:l})]})]})})}},69026:(e,t,o)=>{o.d(t,{A:()=>s});var r=o(86025),n=(o(96540),o(74848));function s(e){let{src:t,width:o=100,...s}=e;const a=(0,r.Ay)(t);return(0,n.jsx)("div",{className:"center video",children:(0,n.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,height:"100%",src:a,width:`${o}%`,...s})})}},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var r=o(96540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);