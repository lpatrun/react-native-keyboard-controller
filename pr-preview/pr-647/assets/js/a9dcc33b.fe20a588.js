"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3775],{42873:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"1.0.0","label":"1.0.0-1.3.0","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.0.0","isLast":false,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Installation","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/installation","docId":"installation","unlisted":false},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"First animation","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/guides/first-animation","docId":"guides/first-animation","unlisted":false},{"type":"link","label":"Building own hook","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/guides/building-own-hook","docId":"guides/building-own-hook","unlisted":false},{"type":"link","label":"Compatibility","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/guides/compatibility","docId":"guides/compatibility","unlisted":false}],"href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/category/guides"},{"type":"category","label":"Recipes","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Architecture","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/recipes/architecture","docId":"recipes/architecture","unlisted":false},{"type":"link","label":"Platforms capabilities and limitations","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/recipes/platform-differences","docId":"recipes/platform-differences","unlisted":false}],"href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/category/recipes"},{"type":"category","label":"API Reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"Hooks","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"useKeyboardAnimation","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/hooks/use-keyboard-animation","docId":"api/hooks/use-keyboard-animation","unlisted":false},{"type":"link","label":"useReanimatedKeyboardAnimation","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/hooks/use-reanimated-keyboard-animation","docId":"api/hooks/use-reanimated-keyboard-animation","unlisted":false}]},{"type":"link","label":"KeyboardControllerView","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/keyboard-controller-view","docId":"api/keyboard-controller-view","unlisted":false},{"type":"link","label":"KeyboardController","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/keyboard-controller","docId":"api/keyboard-controller","unlisted":false},{"type":"link","label":"KeyboardEvents","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/keyboard-events","docId":"api/keyboard-events","unlisted":false},{"type":"link","label":"KeyboardProvider","href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/api/keyboard-provider","docId":"api/keyboard-provider","unlisted":false}],"href":"/react-native-keyboard-controller/pr-preview/pr-647/docs/1.0.0/category/api-reference"}]},"docs":{"api/hooks/use-keyboard-animation":{"id":"api/hooks/use-keyboard-animation","title":"useKeyboardAnimation","description":"useKeyboardAnimation is a hook which gives access to two animated values:","sidebar":"tutorialSidebar"},"api/hooks/use-reanimated-keyboard-animation":{"id":"api/hooks/use-reanimated-keyboard-animation","title":"useReanimatedKeyboardAnimation","description":"useReanimatedKeyboardAnimation is a hook which gives access to two reanimated values:","sidebar":"tutorialSidebar"},"api/keyboard-controller":{"id":"api/keyboard-controller","title":"KeyboardController","description":"KeyboardController is an object which has two functions:","sidebar":"tutorialSidebar"},"api/keyboard-controller-view":{"id":"api/keyboard-controller-view","title":"KeyboardControllerView","description":"A plain react-native View with some additional methods and props. Used internally in KeyboardProvider","sidebar":"tutorialSidebar"},"api/keyboard-events":{"id":"api/keyboard-events","title":"KeyboardEvents","description":"This library exposes 4 events which are available on all platforms:","sidebar":"tutorialSidebar"},"api/keyboard-provider":{"id":"api/keyboard-provider","title":"KeyboardProvider","description":"KeyboardProvider should wrap your app. Under the hood it works with KeyboardControllerView to receive events during keyboard movements, maps these events to Animated/Reanimated values and store them in context.","sidebar":"tutorialSidebar"},"guides/building-own-hook":{"id":"guides/building-own-hook","title":"Building own hook","description":"Default hooks may not perfectly fit in your app, because it changes/restores softInputMode on mount/unmount of the component where it\'s used. Though in deep stacks sometimes it may be important to have different softInputMode per screen, but by default react-navigation keeps previous screens mounted, so if you are using default useKeyboardAnimation hook, then all following screens will have softInputMode=adjustResize.","sidebar":"tutorialSidebar"},"guides/compatibility":{"id":"guides/compatibility","title":"Compatibility","description":"react-native","sidebar":"tutorialSidebar"},"guides/first-animation":{"id":"guides/first-animation","title":"First animation","description":"To build your first animation you will need to use two hooks: useKeyboardAnimation or useReanimatedKeyboardAnimation.","sidebar":"tutorialSidebar"},"installation":{"id":"installation","title":"Installation","description":"Adding a library to the project","sidebar":"tutorialSidebar"},"recipes/architecture":{"id":"recipes/architecture","title":"Architecture","description":"This library requires to wrap an app with KeyboardProvider component. It\'s needed because it stores animated values in context.","sidebar":"tutorialSidebar"},"recipes/platform-differences":{"id":"recipes/platform-differences","title":"Platforms capabilities and limitations","description":"This library relies on WindowInsetsCompat API on Android and keyboard listeners (NotificationCenter) on iOS.","sidebar":"tutorialSidebar"}}}}')}}]);