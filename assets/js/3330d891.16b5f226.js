"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[6430],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9358:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Format comments",m={unversionedId:"rules/common/format-comment",id:"rules/common/format-comment",title:"Format comments",description:"Configurable",source:"@site/docs/rules/common/format-comment.md",sourceDirName:"rules/common",slug:"/rules/common/format-comment",permalink:"/docs/rules/common/format-comment",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/format-comment.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Double literal format",permalink:"/docs/rules/common/double-literal-format"},next:{title:"Member ordering extended",permalink:"/docs/rules/common/member-ordering-extended"}},s={},u=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"format-comments"},"Format comments"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"format-comment"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Style"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Prefer format comments like sentences."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ignored-patterns")," configuration, if you want to ignore comments that match the given regular expressions."),(0,a.kt)("h3",{id:"config-example"},"Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - format-comment:\n        ignored-patterns:\n          - ^ cSpell.*  # Ignores all the comments that start with 'cSpell' (for example: '// cSpell:disable-next-line').\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// prefer format comments like sentences // LINT\nclass Test {\n  /// with start space with dot. // LINT\n  Test() {\n    // with start space with dot. // LINT\n  }\n\n  /// With start space without dot // LINT\n  function() {\n    //Without start space without dot // LINT\n  }\n}\n/* prefer format comments \nlike sentences */ // LINT\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"// Prefer format comments like sentences.\nclass Test {\n  /// With start space with dot.\n  Test() {\n    // With start space with dot.\n  }\n\n  /// With start space without dot.\n  function() {\n    // Without start space without dot.\n  }\n}\n/* Prefer format comments \nlike sentences. */ \n")))}d.isMDXComponent=!0}}]);