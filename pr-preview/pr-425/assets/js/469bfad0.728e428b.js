"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1937],{5793:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>j,frontMatter:()=>d,metadata:()=>t,onEndCode:()=>x,onInteractiveCode:()=>u,onMoveCode:()=>v,onStartCode:()=>h,toc:()=>c});var i=o(5893),r=o(1151),s=o(9286);const d={keywords:["react-native-keyboard-controller","useKeyboardHandler","onStart","onMove","onInteractive","onEnd","react-native-reanimated","worklet","react hook"]},a="useKeyboardHandler",t={id:"api/hooks/keyboard/use-keyboard-handler/index",title:"useKeyboardHandler",description:"useKeyboardHandler is a hook that offers low-level but more powerful API in comparison to useKeyboardAnimation. Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation.",source:"@site/versioned_docs/version-1.9.0/api/hooks/keyboard/use-keyboard-handler/index.mdx",sourceDirName:"api/hooks/keyboard/use-keyboard-handler",slug:"/api/hooks/keyboard/use-keyboard-handler/",permalink:"/react-native-keyboard-controller/pr-preview/pr-425/docs/1.9.0/api/hooks/keyboard/use-keyboard-handler/",draft:!1,unlisted:!1,editUrl:"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/versioned_docs/version-1.9.0/api/hooks/keyboard/use-keyboard-handler/index.mdx",tags:[],version:"1.9.0",frontMatter:{keywords:["react-native-keyboard-controller","useKeyboardHandler","onStart","onMove","onInteractive","onEnd","react-native-reanimated","worklet","react hook"]},sidebar:"tutorialSidebar",previous:{title:"useKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-425/docs/1.9.0/api/hooks/keyboard/use-keyboard-animation"},next:{title:"useReanimatedKeyboardAnimation",permalink:"/react-native-keyboard-controller/pr-preview/pr-425/docs/1.9.0/api/hooks/keyboard/use-reanimated-keyboard-animation"}},l={},c=[{value:"Example",id:"example",level:2},{value:"Event structure",id:"event-structure",level:3},{value:"Handlers",id:"handlers",level:3},{value:"<code>onStart</code>",id:"onstart",level:4},{value:"<code>onMove</code>",id:"onmove",level:4},{value:"<code>onInteractive</code>",id:"oninteractive",level:4},{value:"<code>onEnd</code>",id:"onend",level:4}],h=(0,i.jsx)(s.Z,{language:"ts",children:"useKeyboardHandler(\n  {\n    onStart: (e) => {\n      'worklet';\n      const willKeyboardAppear = e.progress === 1;\n    }\n  },\n  []\n);"}),v=(0,i.jsx)(s.Z,{language:"ts",children:"useKeyboardHandler(\n  {\n    onMove: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"}),u=(0,i.jsx)(s.Z,{language:"ts",children:"useKeyboardHandler(\n  {\n    onInteractive: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"}),x=(0,i.jsx)(s.Z,{language:"ts",children:"useKeyboardHandler(\n  {\n    onEnd: (e) => {\n      'worklet';\n      progress.value = e.progress;\n      height.value = e.height;\n    }\n  },\n  []\n);"});function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"usekeyboardhandler",children:"useKeyboardHandler"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"useKeyboardHandler"})," is a hook that offers low-level but more powerful API in comparison to ",(0,i.jsx)(n.code,{children:"useKeyboardAnimation"}),". Using this hook you are getting an access to keyboard lifecycle events and you can easily determine the moment of the beginning animation, the end of the animation and get keyboard position in every frame of the animation."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'useKeyboardHandler(\n  {\n    onStart: (e) => {\n      "worklet";\n    },\n    onMove: (e) => {\n      "worklet";\n    },\n    onInteractive: (e) => {\n      "worklet";\n    },\n    onEnd: (e) => {\n      "worklet";\n    },\n  },\n  [],\n);\n'})}),"\n",(0,i.jsxs)(n.admonition,{title:"Worklet directives",type:"caution",children:[(0,i.jsxs)(n.p,{children:["Don't forget to add ",(0,i.jsx)(n.code,{children:"worklet"})," directive to all ",(0,i.jsx)(n.code,{children:"onStart"}),"/",(0,i.jsx)(n.code,{children:"onMove"}),"/",(0,i.jsx)(n.code,{children:"onInteractive"}),"/",(0,i.jsx)(n.code,{children:"onEnd"})," handlers. Otherwise your code will throw exception."]}),(0,i.jsxs)(n.p,{children:["These handlers are not workletized by default, since it's not a part of ",(0,i.jsx)(n.code,{children:"reanimated"})," package."]})]}),"\n",(0,i.jsxs)(n.admonition,{title:"Unlock 120 FPS on iOS",type:"info",children:[(0,i.jsxs)(n.p,{children:["Since ",(0,i.jsx)(n.code,{children:"onMove"})," handler on iOS is based on ",(0,i.jsx)(n.code,{children:"CADisplayLink"})," usage - you may need to add following content in ",(0,i.jsx)(n.code,{children:"Info.plist"})," if you want to have your animations running at 120 FPS on devices with ProMotion displays:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-diff",children:"+\t<key>CADisableMinimumFrameDurationOnPhone</key>\n+\t<true/>\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"event-structure",children:"Event structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"height"})," - height of the keyboard;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"progress"})," - a value between ",(0,i.jsx)(n.code,{children:"0"})," (closed) and ",(0,i.jsx)(n.code,{children:"1"})," (opened) indicating relative keyboard position;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"duration"})," - duration of the animation;"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"})," - tag of the focused ",(0,i.jsx)(n.code,{children:"TextInput"})," (or ",(0,i.jsx)(n.code,{children:"-1"})," if the tag is not found)."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"handlers",children:"Handlers"}),"\n",(0,i.jsx)(n.h4,{id:"onstart",children:(0,i.jsx)(n.code,{children:"onStart"})}),"\n","\n",(0,i.jsxs)("div",{className:"grid",children:[(0,i.jsxs)("div",{className:"description-block",children:[(0,i.jsxs)(n.p,{children:["This function is called before the keyboard movement starts."," ","\n",(0,i.jsx)("code",{children:"height"})," and ",(0,i.jsx)("code",{children:"progress"})," values will have"," ","\n",(0,i.jsx)("b",{children:"destination"}),' values, i. e. if keyboard was closed but will appear -\nthese values will have a values like "keyboard is already opened"\n(',(0,i.jsx)("code",{children:"progress"})," will be equal to ",(0,i.jsx)("code",{children:"1"})," and"," ","\n",(0,i.jsx)("code",{children:"height"})," will have non-zero value)."]}),(0,i.jsx)("div",{className:"desktop",children:h})]}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:o(4712).Z})})]}),"\n",(0,i.jsx)("div",{className:"mobile",children:h}),"\n",(0,i.jsx)(n.h4,{id:"onmove",children:(0,i.jsx)(n.code,{children:"onMove"})}),"\n","\n",(0,i.jsxs)("div",{className:"grid",children:[(0,i.jsxs)("div",{className:"description-block",children:[(0,i.jsx)(n.p,{children:"This function will be called every frame when the keyboard changes its\nposition."}),(0,i.jsx)("div",{className:"desktop",children:v})]}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:o(76).Z})})]}),"\n",(0,i.jsx)("div",{className:"mobile",children:v}),"\n",(0,i.jsxs)(n.admonition,{title:"Not precise values",type:"info",children:[(0,i.jsx)(n.p,{children:"There is no corresponding events in iOS for this hook. So values will not be perfectly synchronized with the keyboard."}),(0,i.jsx)(n.p,{children:"The same is applied to Android < 11 - these OS versions don't have API for getting keyboard positions during an animation."})]}),"\n",(0,i.jsx)(n.h4,{id:"oninteractive",children:(0,i.jsx)(n.code,{children:"onInteractive"})}),"\n","\n",(0,i.jsxs)("div",{className:"grid",children:[(0,i.jsxs)("div",{className:"description-block",children:[(0,i.jsx)(n.p,{children:"This function will be called every frame when user changes position of the\nkeyboard by the drag."}),(0,i.jsx)("span",{children:(0,i.jsxs)(n.p,{children:["If finger is released and keyboard animates to its final destination, then\nthe standard ",(0,i.jsx)("code",{children:"onStart"}),"/",(0,i.jsx)("code",{children:"onMove"}),"/",(0,i.jsx)("code",{children:"onEnd"})," ","\nlifecycles will be triggered."]})}),(0,i.jsx)("div",{className:"desktop",children:u})]}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:o(7343).Z})})]}),"\n",(0,i.jsx)("div",{className:"mobile",children:u}),"\n",(0,i.jsxs)(n.admonition,{title:"Event availability",type:"info",children:[(0,i.jsxs)(n.p,{children:["This event is available only on Android >= 11. To receive it you need to use ",(0,i.jsx)(n.a,{href:"./../../keyboard-gesture-area",children:"KeyboardGestureArea"}),"."]}),(0,i.jsxs)(n.p,{children:["On iOS you need to specify ",(0,i.jsx)(n.code,{children:'keyboardDismissMode="interactive"'})," on your ",(0,i.jsx)(n.code,{children:"ScrollView"}),"."]})]}),"\n",(0,i.jsx)(n.h4,{id:"onend",children:(0,i.jsx)(n.code,{children:"onEnd"})}),"\n","\n",(0,i.jsxs)("div",{className:"grid",children:[(0,i.jsxs)("div",{className:"description-block",children:[(0,i.jsxs)(n.p,{children:["This function will be called when the keyboard has completed its movement.\nThe event will contain ",(0,i.jsx)("b",{children:"current"})," keyboard metrics."]}),(0,i.jsx)("div",{className:"desktop",children:x})]}),(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:o(6485).Z})})]}),"\n",(0,i.jsx)("div",{className:"mobile",children:x})]})}function j(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},6485:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/end-51c1da133c9105d1711f5472ef02f7dc.png"},7343:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/interactive-5613a4e3be3e96ff53479d7d9ab342c4.png"},76:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/move-67a142f62e5e7286e45c5e964d03b862.png"},4712:(e,n,o)=>{o.d(n,{Z:()=>i});const i=o.p+"assets/images/start-43926ae4afe7279da4f2fdd3d25603c6.png"}}]);