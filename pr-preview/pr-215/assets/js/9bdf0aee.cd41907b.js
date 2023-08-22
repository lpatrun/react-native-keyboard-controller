"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4623],{7162:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"interactive-keyboard","metadata":{"permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/interactive-keyboard","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2023-04-10-interactive-keyboard/index.mdx","source":"@site/blog/2023-04-10-interactive-keyboard/index.mdx","title":"Interactive keyboard support","description":"I\'m excited to announce that the upcoming release of react-native-keyboard-controller, version 1.5.0, will include a new feature that allows users to control the position of the keyboard on the screen via gestures. This new interactive keyboard feature will make it easier for users to interact with the keyboard in a more natural and intuitive way, improving the overall user experience of your React Native app.","date":"2023-04-10T00:00:00.000Z","formattedDate":"April 10, 2023","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/keyboard"},{"label":"interactive","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/interactive"},{"label":"android","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/android"},{"label":"ios","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/ios"}],"readingTime":1.02,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"interactive-keyboard","title":"Interactive keyboard support","authors":["kirill"],"tags":["react-native","keyboard","interactive","android","ios"],"keywords":["react-native-keyboard-controller","interactive keyboard","swipe to dismiss keyboard","control keyboard position via gesture"]},"nextItem":{"title":"Version 1.4.0 with new hook","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/new-hook"}},"content":"I\'m excited to announce that the upcoming release of `react-native-keyboard-controller`, version `1.5.0`, will include a new feature that allows users to control the position of the keyboard on the screen via gestures. This new interactive keyboard feature will make it easier for users to interact with the keyboard in a more natural and intuitive way, improving the overall user experience of your React Native app.\\n\\nimport Lottie from \'lottie-react\';\\nimport lottie from \'../../src/components/HomepageFeatures/interactive.lottie.json\';\\n\\n<div style={{ display: \'flex\', justifyContent: \'center\', marginBottom: 20 }}>\\n<Lottie animationData={lottie} style={{ width: 400, height: 400 }} loop />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\nThe interactive keyboard feature is customizable on Android \ud83e\udd16, allowing developers to define how the gesture controls the keyboard position and how the view should be animated when the keyboard is moved. This new feature is particularly useful for chat and other apps that require precise control over the position of the keyboard. The addition of this new interactive keyboard feature will further enhance the library\'s capabilities and provide a more natural and intuitive user experience.\\n\\nStay tuned for more updates and be sure to check out our documentation for more information on how to use this new feature in your React Native app.\\n\\nThank you for choosing `react-native-keyboard-controller`! \ud83d\ude0a"},{"id":"new-hook","metadata":{"permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/new-hook","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-10-15-new-hook/index.md","source":"@site/blog/2022-10-15-new-hook/index.md","title":"Version 1.4.0 with new hook","description":"New 1.4.0 release enhance API and adds new useKeyboardHandler hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for height and progress values (before it was not possible and it was a restriction of the library).","date":"2022-10-15T00:00:00.000Z","formattedDate":"October 15, 2022","tags":[{"label":"new hook","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/new-hook"},{"label":"iOS","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/i-os"},{"label":"intermediate values","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/intermediate-values"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"new-hook","title":"Version 1.4.0 with new hook","authors":["kirill"],"tags":["new hook","iOS","intermediate values"],"keyword":["react-native-keyboard-controller","new hook","useKeyboardHandler","low-level","keyboard lifecycle"]},"prevItem":{"title":"Interactive keyboard support","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/interactive-keyboard"},"nextItem":{"title":"Version 1.2.0 with new architecture support","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/fabric"}},"content":"New 1.4.0 release enhance API and adds new `useKeyboardHandler` hook. While keeping no breaking changes this release (via new hook) adds an ability to have intermediate values on iOS for `height` and `progress` values (before it was not possible and it was a restriction of the library).\\n\\nAlso this hooks allow to track keyboard lifecycle and it\'s better suit for complex animations \ud83d\ude0e\\n\\nCheck out the new documentation for this hook, upgrade library version to `1.4.0` and start using it today!"},{"id":"fabric","metadata":{"permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/fabric","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-09-22-fabric/index.md","source":"@site/blog/2022-09-22-fabric/index.md","title":"Version 1.2.0 with new architecture support","description":"I\'m glad to announce, that new upcoming release 1.2.0 brings a support for new react native architecture \ud83d\ude0e","date":"2022-09-22T00:00:00.000Z","formattedDate":"September 22, 2022","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/react-native"},{"label":"release","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/release"},{"label":"new architecture","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/new-architecture"},{"label":"fabric","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/fabric"},{"label":"turbo modules","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/turbo-modules"}],"readingTime":0.86,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"fabric","title":"Version 1.2.0 with new architecture support","authors":["kirill"],"tags":["react-native","release","new architecture","fabric","turbo modules"],"keywords":["react-native-keyboard-controller","react-native","fabric","new architecture","support"]},"prevItem":{"title":"Version 1.4.0 with new hook","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/new-hook"},"nextItem":{"title":"React Native meets smooth keyboard animations","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/welcome"}},"content":"I\'m glad to announce, that new upcoming release `1.2.0` brings a support for new react native architecture \ud83d\ude0e\\n\\nFortunately this library is backward compatible with old architecture and will be compiled conditionally depending on which architecture you are using. So don\'t be afraid of updating it to the latest version - it doesn\'t have any breaking changes!\\n\\n![react native logo](./react-native.png)\\n\\n\x3c!--truncate--\x3e\\n\\nThe decision to add support for a new architecture (to prioritize a new architecture adoption over other features) was made in order to understand all peculiarities of the new architecture and to discover its possibilities. Hopefully such knowledge can help add new features for the library in the future.\\n\\nObviously, the migration process will take some time for other libraries, so future versions of this library will still support two architectures. When most other open source libraries will be migrated to the new architecture and the new architecture becomes the standard in the react native ecosystem, then support for the old architecture will be removed.\\n\\nStay tuned for future updates! \ud83d\ude0a"},{"id":"welcome","metadata":{"permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/welcome","editUrl":"https://github.com/kirillzyusko/react-native-keyboard-controller/tree/main/docs/blog/2022-06-22-welcome/index.mdx","source":"@site/blog/2022-06-22-welcome/index.mdx","title":"React Native meets smooth keyboard animations","description":"Many flagship applications that are written natively (such as Telegram, Instagram, etc.) use the full power of platform-specific native APIs (iOS, Android) to make transitions between opening/closing the keyboard animated and smooth.","date":"2022-06-22T00:00:00.000Z","formattedDate":"June 22, 2022","tags":[{"label":"react-native","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/react-native"},{"label":"keyboard","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/keyboard"},{"label":"animation","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/tags/animation"}],"readingTime":1.19,"hasTruncateMarker":true,"authors":[{"name":"Kirill Zyusko","title":"Library author","url":"https://github.com/kirillzyusko","imageURL":"https://github.com/kirillzyusko.png","key":"kirill"}],"frontMatter":{"slug":"welcome","title":"React Native meets smooth keyboard animations","authors":["kirill"],"tags":["react-native","keyboard","animation"],"keywords":["react-native-keyboard-controller","react-native","keyboard","animation"]},"prevItem":{"title":"Version 1.2.0 with new architecture support","permalink":"/react-native-keyboard-controller/pr-preview/pr-215/blog/fabric"}},"content":"Many flagship applications that are written natively (such as `Telegram`, `Instagram`, etc.) use the full power of platform-specific native APIs (`iOS`, `Android`) to make transitions between opening/closing the keyboard animated and smooth.\\n\\nUnfortunately, in `react-native` this aspect was given little attention and all `react-native` applications were suffering because of that - animations were rough, you couldn\'t write cross-platform code because some keyboard events were not available, etc. But with the advent of this library, everything changes... \ud83d\ude0e\\n\\nimport Lottie from \'lottie-react\';\\nimport lottie from \'../../src/components/HomepageFeatures/transform.lottie.json\';\\n\\n<div style={{ display: \'flex\', justifyContent: \'center\', marginBottom: 20 }}>\\n<Lottie animationData={lottie} style={{ width: 400, height: 400 }} loop />\\n</div>\\n\\n\x3c!--truncate--\x3e\\n\\nThe purpose of this library was utilizing all power of native API and at the same time provide a universal way in `react-native` to deal with it (allowing to use some platforms advanced technics if needed). Thus this library allows you to track each keyboard frame movement, and create corresponding reactions (move elements accordingly).\\n\\nThe first release of this library brings missing `keyboardWillShow`/`keyboardWillHide` events on `Android` making `events` module fully cross-platform as well as adding a way to use `Animated.Value` for managing keyboard frames.\\n\\nIn further releases the API will be enhanced:\\n- support will be added for interactive keyboard dismissing (on Android)\\n- the library will be rewritten to new `Fabric` architecture\\n- maybe some components, such as `KeyboardAvoidingView`/`KeyboardAwareScrollView` will be available here with better performance and animations.\\n\\nStay tuned! \ud83d\ude0a"}]}')}}]);