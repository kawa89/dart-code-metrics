"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[3928],{3905:function(e,r,n){n.d(r,{Zo:function(){return m},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},m=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?t.createElement(f,a(a({ref:r},m),{},{components:n})):t.createElement(f,a({ref:r},m))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6114:function(e,r,n){n.r(r),n.d(r,{assets:function(){return m},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},c="Prefer commenting analyzer ignores",s={unversionedId:"rules/common/prefer-commenting-analyzer-ignores",id:"rules/common/prefer-commenting-analyzer-ignores",title:"Prefer commenting analyzer ignores",description:"Rule id",source:"@site/docs/rules/common/prefer-commenting-analyzer-ignores.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-commenting-analyzer-ignores",permalink:"/docs/rules/common/prefer-commenting-analyzer-ignores",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-commenting-analyzer-ignores.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer async await",permalink:"/docs/rules/common/prefer-async-await"},next:{title:"Prefer conditional expressions",permalink:"/docs/rules/common/prefer-conditional-expressions"}},m={},u=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],p={toc:u};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-commenting-analyzer-ignores"},"Prefer commenting analyzer ignores"),(0,i.kt)("h2",{id:"rule-id"},"Rule id"),(0,i.kt)("p",null,"prefer-commenting-analyzer-ignores"),(0,i.kt)("h2",{id:"severity"},"Severity"),(0,i.kt)("p",null,"Warning"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Warns when ",(0,i.kt)("inlineCode",{parentName:"p"},"// ignore:")," comments are left without any additional description why this ignore is applied."),(0,i.kt)("p",null,"This rule doesn't trigger on global ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore_for_file:")," comments."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// ignore: deprecated_member_use\nfinal map = Map(); // LINT\n\n// ignore: deprecated_member_use, long-method\nfinal set = Set(); // LINT\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"// Ignored for some reasons\n// ignore: deprecated_member_use\nfinal list = List();\n\n// ignore: deprecated_member_use same line ignore\nfinal queue = Queue();\n\n// ignore: deprecated_member_use, long-method multiple same line ignore\nfinal linkedList = LinkedList();\n")))}d.isMDXComponent=!0}}]);