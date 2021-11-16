"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[3780],{3905:function(e,t,l){l.r(t),l.d(t,{MDXContext:function(){return o},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return p},withMDXComponents:function(){return d}});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},a.apply(this,arguments)}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function u(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o=n.createContext({}),d=function(e){return function(t){var l=p(t.components);return n.createElement(e,a({},t,{components:l}))}},p=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):u(u({},t),e)),l},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},C=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(l),m=r,C=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return l?n.createElement(C,u(u({ref:t},o),{},{components:l})):n.createElement(C,u({ref:t},o))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,i=new Array(a);i[0]=C;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var o=2;o<a;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}C.displayName="MDXCreateElement"},22286:function(e,t,l){var n=l(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLinksCollector=t.createStatefulLinksCollector=t.ProvideLinksCollector=void 0;var r=n(l(67294));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var a=(0,r.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,r.useContext)(a)};t.ProvideLinksCollector=function(e){var t=e.children,l=e.linksCollector;return r.default.createElement(a.Provider,{value:l},t)}},33692:function(e,t,l){var n=l(95318).default,r=l(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(63366)),i=r(l(67294)),u=l(73727),c=n(l(52263)),o=n(l(13919)),d=n(l(10412)),p=l(22286),m=l(44996),s=l(18780),C=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,l,n=e.isNavLink,r=e.to,f=e.href,x=e.activeClassName,v=e.isActive,h=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,y=void 0===b||b,g=(0,a.default)(e,C),B=(0,c.default)().siteConfig,K=B.trailingSlash,N=B.baseUrl,k=(0,m.useBaseUrlUtils)().withBaseUrl,O=(0,p.useLinksCollector)(),P=r||f,w=(0,o.default)(P),M=null==P?void 0:P.replace("pathname://",""),j=void 0!==M?(l=M,y&&function(e){return e.startsWith("/")}(l)?k(l):l):void 0;j&&w&&(j=(0,s.applyTrailingSlash)(j,{trailingSlash:K,baseUrl:N}));var U=(0,i.useRef)(!1),S=n?u.NavLink:u.Link,T=d.default.canUseIntersectionObserver,_=(0,i.useRef)();(0,i.useEffect)((function(){return!T&&w&&null!=j&&window.docusaurus.prefetch(j),function(){T&&_.current&&_.current.disconnect()}}),[_,j,T,w]);var V=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,L=!j||!w||V;return j&&w&&!V&&!h&&O.collectLink(j),L?i.default.createElement("a",Object.assign({href:j},P&&!w&&{target:"_blank",rel:"noopener noreferrer"},g)):i.default.createElement(S,Object.assign({},g,{onMouseEnter:function(){U.current||null==j||(window.docusaurus.preload(j),U.current=!0)},innerRef:function(e){var t,l;T&&e&&w&&(t=e,l=function(){null!=j&&window.docusaurus.prefetch(j)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),l())}))})),_.current.observe(t))},to:j||""},n&&{isActive:v,activeClassName:x}))};t.default=f},13919:function(e,t){function l(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0!==e&&!l(e)},t.hasProtocol=l},44996:function(e,t,l){var n=l(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===t&&(t={});return(0,i().withBaseUrl)(e,t)},t.useBaseUrlUtils=i;var r=n(l(52263)),a=l(13919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,l=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,l,n){var r=void 0===n?{}:n,i=r.forcePrependBaseUrl,u=void 0!==i&&i,c=r.absolute,o=void 0!==c&&c;if(!l)return l;if(l.startsWith("#"))return l;if((0,a.hasProtocol)(l))return l;if(u)return t+l;var d=l.startsWith(t)?l:t+l.replace(/^\//,"");return o?e+d:d}(n,l,e,t)}}}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var l=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===l)return e;var r,a=e.split(/[#?]/)[0],i="/"===a||a===n?a:(r=a,l?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(a,i)}},18780:function(e,t,l){var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=l(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var a=l(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},11631:function(e,t,l){l.r(t),l.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return C}});var n=l(87462),r=l(63366),a=(l(67294),l(3905)),i=l(44996),u=l(33692),c=["components"],o={id:"programming-model",title:"CKB Programming Model",sidebar_label:"CKB Programming Model"},d=void 0,p={unversionedId:"basics/programming-model",id:"basics/programming-model",isDocsHomePage:!1,title:"CKB Programming Model",description:"Nervos CKB \u662f\u4e00\u4e2a\u4ee5\u72b6\u6001\u4e3a\u4e2d\u5fc3\u7684 Layer 1 \u5e95\u5c42\u67b6\u6784\uff0c\u5176\u4e2d\u4ea4\u6613\u8868\u793a\u72b6\u6001\u7684\u66f4\u6539\u548c\u8fc1\u79fb\u3002CKB \u63d0\u4f9b\u4e86\u4e00\u79cd\u72ec\u7279\u7684\u57fa\u4e8e CKB VM \u548c Cell \u6a21\u578b\u7684\u6709\u72b6\u6001\u7684\u56fe\u7075\u5b8c\u5907\u7f16\u7a0b\u6a21\u578b\u3002 \u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u4ecb\u7ecd\uff1a",source:"@site/docs/basics/programming-model.md",sourceDirName:"basics",slug:"/basics/programming-model",permalink:"/docsite/docs/basics/programming-model",editUrl:"https://github.com/xying21/docsite/docs/basics/programming-model.md",tags:[],version:"current",lastUpdatedAt:1635849413,formattedLastUpdatedAt:"11/2/2021",frontMatter:{id:"programming-model",title:"CKB Programming Model",sidebar_label:"CKB Programming Model"},sidebar:"sidebar1",previous:{title:"Nervos CKB",permalink:"/docsite/docs/basics/nervosckb"},next:{title:"CKB Data Structure",permalink:"/docsite/docs/basics/data-structure"}},m=[{value:"CKB \u7f16\u7a0b\u6a21\u578b",id:"ckb-\u7f16\u7a0b\u6a21\u578b",children:[],level:2},{value:"Cell \u6a21\u578b\uff1a\u901a\u7528\u5316\u7684 UTXO \u6a21\u578b",id:"cell-\u6a21\u578b\u901a\u7528\u5316\u7684-utxo-\u6a21\u578b",children:[{value:"UTXO",id:"utxo",children:[],level:3},{value:"Cell",id:"cell",children:[],level:3}],level:2},{value:"CKB \u4ea4\u6613\uff1a\u72b6\u6001\u751f\u6210",id:"ckb-\u4ea4\u6613\u72b6\u6001\u751f\u6210",children:[{value:"\u811a\u672c",id:"\u811a\u672c",children:[],level:3},{value:"\u9501\u5b9a\u811a\u672c <code>lock script</code>",id:"\u9501\u5b9a\u811a\u672c-lock-script",children:[],level:3},{value:"\u7c7b\u578b\u811a\u672c <code>type script</code>",id:"\u7c7b\u578b\u811a\u672c-type-script",children:[],level:3}],level:2},{value:"CKB VM\uff1a\u72b6\u6001\u9a8c\u8bc1\u5668",id:"ckb-vm\u72b6\u6001\u9a8c\u8bc1\u5668",children:[],level:2}],s={toc:m};function C(e){var t=e.components,l=(0,r.default)(e,c);return(0,a.mdx)("wrapper",(0,n.default)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Nervos CKB \u662f\u4e00\u4e2a\u4ee5\u72b6\u6001\u4e3a\u4e2d\u5fc3\u7684 Layer 1 \u5e95\u5c42\u67b6\u6784\uff0c\u5176\u4e2d\u4ea4\u6613\u8868\u793a\u72b6\u6001\u7684\u66f4\u6539\u548c\u8fc1\u79fb\u3002CKB \u63d0\u4f9b\u4e86\u4e00\u79cd\u72ec\u7279\u7684\u57fa\u4e8e CKB VM \u548c Cell \u6a21\u578b\u7684\u6709\u72b6\u6001\u7684\u56fe\u7075\u5b8c\u5907\u7f16\u7a0b\u6a21\u578b\u3002 \u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4f1a\u4ecb\u7ecd\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"CKB \u7684\u7f16\u7a0b\u6a21\u578b",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Cell \u6a21\u578b\uff1a\u901a\u7528\u5316\u7684 UTXO \u6a21\u578b"))),(0,a.mdx)("li",{parentName:"ul"},"CKB \u7684\u4ea4\u6613\uff1a\u72b6\u6001\u751f\u6210"),(0,a.mdx)("li",{parentName:"ul"},"CKB VM\uff1a\u72b6\u6001\u9a8c\u8bc1")),(0,a.mdx)("p",null,"\u671f\u671b\u901a\u8fc7\u672c\u6587\uff0c\u5927\u5bb6\u80fd\u591f\u5bf9 CKB \u7684\u7f16\u7a0b\u6a21\u578b\u6709\u4e2a\u57fa\u672c\u4e86\u89e3\uff0c\u63d0\u524d\u8bf4\u660e\u4e00\u4e0b\u6587\u7ae0\u7b80\u5316\u4e86\u8bb8\u591a\u7ec6\u8282\uff0c\u975e\u5e38\u5efa\u8bae\u60f3\u8981\u4e86\u89e3\u66f4\u591a\u7684\u670b\u53cb\u8bbf\u95ee\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://talk.nervos.org/t/ckb-cell/1562"},"\u7406\u89e3 CKB \u7684 cell \u6a21\u578b")),(0,a.mdx)("li",{parentName:"ul"},"RFC\uff1aNervos CKB \u52a0\u5bc6\u7ecf\u6d4e\u5171\u540c\u77e5\u8bc6\u5e93\uff1b"),(0,a.mdx)("li",{parentName:"ul"},"RFC\uff1aCKB \u4ea4\u6613\u7ed3\u6784"),(0,a.mdx)("li",{parentName:"ul"},"CKB \u6838\u5fc3\u5f00\u53d1\u8005 xuejie \u7f16\u5199\u7684",(0,a.mdx)("a",{parentName:"li",href:"https://xuejie.space/"},"\u5f00\u53d1\u6587\u6863"),".")),(0,a.mdx)("h2",{id:"ckb-\u7f16\u7a0b\u6a21\u578b"},"CKB \u7f16\u7a0b\u6a21\u578b"),(0,a.mdx)("p",null,"\u7f16\u7a0b\u6a21\u578b\u5f25\u5408\u4e86\u5e95\u5c42\u786c\u4ef6\u4f53\u7cfb\u7ed3\u6784\u4e0e\u5e94\u7528\u7a0b\u5e8f\u53ef\u7528\u7684\u8f6f\u4ef6\u652f\u6301\u5c42\u4e4b\u95f4\u7684\u9e3f\u6c9f\u3002\u5177\u4f53\u6765\u8bf4\uff0c\u7f16\u7a0b\u6a21\u578b\u662f\u5e95\u5c42\u8ba1\u7b97\u673a\u7cfb\u7edf\u7684\u62bd\u8c61\u5316\uff0c\u5b83\u5141\u8bb8\u7b97\u6cd5\u548c\u6570\u636e\u7ed3\u6784\u7684\u8868\u8fbe\u3002\u5982\u679c\u60a8\u60f3\u8981\u5728 CKB \u4e0a\u8fdb\u884c\u5f00\u53d1\uff0c\u90a3\u4e48\u60a8\u9996\u5148\u5e94\u8be5\u8981\u7406\u89e3\u5b83\u7684\u7f16\u7a0b\u6a21\u578b\u3002CKB \u4e2d\u7684\u72b6\u6001\u662f\u4e00\u7b49\u516c\u6c11\uff08First-Class Citizen\uff09\uff0c\u72b6\u6001\u5305\u542b\u5728\u4ea4\u6613\u548c\u533a\u5757\u4e2d\uff0c\u5b83\u4eec\u76f4\u63a5\u540c\u6b65\u5728\u8282\u70b9\u4e4b\u95f4\u3002CKB \u7684\u7f16\u7a0b\u6a21\u578b\u7531\u4e09\u90e8\u5206\u7ec4\u6210\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"\u72b6\u6001\u751f\u6210\uff08\u94fe\u4e0b\uff09"),(0,a.mdx)("li",{parentName:"ul"},"\u72b6\u6001\u5b58\u50a8\uff08Cell \u6a21\u578b\uff09"),(0,a.mdx)("li",{parentName:"ul"},"\u72b6\u6001\u9a8c\u8bc1\uff08CKB VM\uff09")),(0,a.mdx)("p",null,"\u5728\u8fd9\u4e2a\u6a21\u578b\u4e2d\uff0c\u53bb\u4e2d\u5fc3\u5316\u7684\u5e94\u7528\u903b\u8f91\u88ab\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff08\u751f\u6210\u548c\u9a8c\u8bc1\uff09\uff0c\u5206\u522b\u5728\u4e0d\u540c\u7684\u5730\u65b9\u8fd0\u884c\u3002\u72b6\u6001\u751f\u6210\u53d1\u751f\u5728\u5ba2\u6237\u7aef\u7684\u94fe\u4e0b\uff0c\u65b0\u7684\u72b6\u6001\u88ab\u6253\u5305\u6210\u4ea4\u6613\u5e76\u5e7f\u64ad\u5230\u6574\u4e2a\u7f51\u7edc\uff1b\u72b6\u6001\u9a8c\u8bc1\u53d1\u751f\u5728\u94fe\u4e0a\uff0c\u5b83\u4f1a\u786e\u4fdd\u72b6\u6001\u8f6c\u6362\u7684\u6709\u6548\u6027\u5e76\u521b\u5efa\u4e00\u4e2a\u53bb\u4fe1\u4efb\u7684\u7cfb\u7edf\uff08trustless system\uff09\u3002"),(0,a.mdx)("p",null,"CKB \u4ea4\u6613\u7684 inputs \u5305\u62ec\u5bf9\u4e4b\u524d outputs\u7684\u5f15\u7528\uff0c\u4ee5\u53ca\u80fd\u591f\u89e3\u9501\u5b83\u4eec\u7684\u8bc1\u660e\u3002\u5ba2\u6237\u7aef\u5c06\u751f\u6210\u7684\u65b0\u72b6\u6001\u4f5c\u4e3a\u4ea4\u6613 outputs\uff0c\u5728 CKB \u4e2d\u79f0\u4e3a cell\u3002\u56e0\u6b64\uff0ccell \u548c\u4ea4\u6613\u8f93\u51fa\u7684\u8868\u8ff0\u662f\u53ef\u4ee5\u4e92\u6362\u7684\u3002",(0,a.mdx)("strong",{parentName:"p"},"Cell \u662f CKB \u4e2d\u7684\u4e3b\u8981\u72b6\u6001\u5b58\u50a8\u5355\u5143\uff0c\u8d44\u4ea7\u6240\u6709\u6743\u5f52\u7528\u6237\u6240\u6709\uff0c\u5e76\u4e14\u5fc5\u987b\u9075\u5faa\u811a\u672c\u6307\u5b9a\u7684\u76f8\u5173\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u3002")),(0,a.mdx)("p",null,"\u6211\u4eec\u5728 CKB VM \u4e2d\u6267\u884c\u811a\u672c\uff08\u540e\u6587\u5c06\u505a\u5177\u4f53\u4ecb\u7ecd\uff09\u5e76\u9a8c\u8bc1\u4ea4\u6613\u8f93\u5165\u4e2d\u5305\u542b\u7684\u8bc1\u660e\uff0c\u4ee5\u786e\u4fdd\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u5f15\u7528\u7684 cell\uff0c\u5e76\u4e14\u5728\u6307\u5b9a\u7684\u5e94\u7528\u7a0b\u5e8f\u903b\u8f91\u4e0b\u72b6\u6001\u8f6c\u6362\u662f\u6709\u6548\u7684\u3002\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\uff0c\u7f51\u7edc\u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u53ef\u4ee5\u9a8c\u8bc1\u65b0\u72b6\u6001\u662f\u6709\u6548\u7684\uff0c\u5e76\u4fdd\u7559\u8fd9\u4e9b\u72b6\u6001\u3002"),(0,a.mdx)("h2",{id:"cell-\u6a21\u578b\u901a\u7528\u5316\u7684-utxo-\u6a21\u578b"},"Cell \u6a21\u578b\uff1a\u901a\u7528\u5316\u7684 UTXO \u6a21\u578b"),(0,a.mdx)("h3",{id:"utxo"},"UTXO"),(0,a.mdx)("p",null,"Bitcoin \u628a\u6574\u4e2a\u8d26\u672c\u5206\u5272\u4fdd\u5b58\u5728\u4e86\u4e00\u4e2a\u4e2a UTXO \u91cc\u9762\uff0cUTXO \u662f\u672a\u82b1\u8d39\u4ea4\u6613\u8f93\u51fa\uff08Unspent Transaction Output\uff09\u7684\u7b80\u5199\uff0c\u5b83\u88ab\u9501\u5b9a\u5728\u7279\u5b9a\u7684\u6240\u6709\u8005\u624b\u4e2d\uff0c\u8bb0\u5f55\u5728\u533a\u5757\u94fe\u4e0a\uff0c\u5e76\u88ab\u6574\u4e2a\u7f51\u7edc\u8bc6\u522b\u4e3a\u8d27\u5e01\u5355\u4f4d\u3002\u5b83\u7684\u6570\u636e\u7ed3\u6784\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u5305\u542b\u4e24\u4e2a\u5b57\u6bb5\uff1a"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"class TxOut\n    {\n    public:\n        Amount Value;\n        Script scriptPubKey;\n    ...\n    }\n")),(0,a.mdx)("p",null,"\u6bcf\u4e00\u4e2a TxOut \u4ee3\u8868\u4e86\u4e00\u4e2a\u786c\u5e01\u5e76\u4e14\u6709\u81ea\u5df1\u7684\u547d\u540d\uff0c\u8fd9\u662f\u7531 Value \u5b9a\u4e49\u7684\uff0cscriptPubKey \u662f\u4e00\u6bb5\u8868\u793a\u8fd9\u4e2a\u786c\u5e01\u7684\u6240\u6709\u8005\u662f\u8c01\u7684\u811a\u672c\uff08\u901a\u5e38\u5305\u542b\u4e86\u6240\u6709\u8005\u7684\u516c\u94a5\uff09\uff0c\u53ea\u6709\u80fd\u63d0\u4f9b\u6b63\u786e\u7684\u53c2\u6570\u4f7f\u8fd9\u4e2a\u811a\u672c\u8fd0\u884c\u6210\u529f\u7684\u4eba\uff0c\u624d\u80fd\u628a\u8fd9\u4e2a\u786c\u5e01\u300c\u8f6c\u8ba9\u300d\u7ed9\u53e6\u5916\u4e00\u4e2a\u4eba\u3002"),(0,a.mdx)("p",null,"\u4e3a\u4ec0\u4e48\u8981\u7ed9\u300c\u8f6c\u8ba9\u300d\u6253\u5f15\u53f7\uff1f\u56e0\u4e3a\u5728\u8f6c\u8ba9\u7684\u65f6\u5019\uff0c\u5e76\u4e0d\u662f\u7b80\u5355\u7684\u628a\u786c\u5e01\u4e2d\u7684scriptPubKey\u4fee\u6539\u6216\u662f\u66ff\u6362\u6389\uff0c\u800c\u662f\u4f1a\u9500\u6bc1\u548c\u521b\u9020\u65b0\u7684\u786c\u5e01\uff08\u6bd5\u7adf\u5728\u6570\u5b57\u7684\u4e16\u754c\u4e2d\u9500\u6bc1\u548c\u521b\u9020\u865a\u62df\u786c\u5e01\u7684\u6210\u672c\u5f88\u4f4e\uff09\u3002\u6bcf\u4e00\u4e2a Bitcoin \u4ea4\u6613\uff0c\u90fd\u4f1a\u9500\u6bc1\u4e00\u6279\u786c\u5e01\uff0c\u540c\u65f6\u53c8\u521b\u9020\u4e00\u6279\u786c\u5e01\uff0c\u65b0\u521b\u9020\u7684\u786c\u5e01\u4f1a\u6709\u65b0\u7684\u9762\u503c\u548c\u65b0\u7684\u6240\u6709\u8005\uff0c\u4f46\u662f\u88ab\u9500\u6bc1\u7684\u603b\u9762\u503c\u603b\u662f\u5927\u4e8e\u7b49\u4e8e\u65b0\u521b\u9020\u7684\u603b\u9762\u503c\uff0c\u4ee5\u4fdd\u8bc1\u6ca1\u6709\u4eba\u53ef\u4ee5\u968f\u610f\u589e\u53d1\u3002\u4ea4\u6613\u8868\u793a\u7684\u662f\u8d26\u672c\u72b6\u6001\u7684\u53d8\u5316\u3002"),(0,a.mdx)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u6a21\u578b\u7684\u7279\u70b9\u662f\uff1a"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"\u786c\u5e01\uff08\u8d44\u4ea7\uff09\u662f\u7b2c\u4e00\u6027\u7684\uff1b"),(0,a.mdx)("li",{parentName:"ol"},"\u6240\u6709\u8005\u662f\u786c\u5e01\u7684\u5c5e\u6027\uff0c\u6bcf\u4e00\u679a\u786c\u5e01\u6709\u4e14\u4ec5\u6709\u4e00\u4e2a\u6240\u6709\u8005\uff1b"),(0,a.mdx)("li",{parentName:"ol"},"\u786c\u5e01\u4e0d\u65ad\u7684\u88ab\u9500\u6bc1\u548c\u521b\u5efa\uff1b")),(0,a.mdx)("p",null,"\u662f\u4e0d\u662f\u5f88\u7b80\u5355\uff1f\u5982\u679c\u4f60\u89c9\u5f97\u81ea\u5df1\u5df2\u7ecf\u7406\u89e3\u4e86 Bitcoin \u548c UTXO\uff0c\u606d\u559c\u4f60\uff0c\u4f60\u4e5f\u5df2\u7ecf\u7406\u89e3\u4e86 CKB \u548c Cell\uff01"),(0,a.mdx)("h3",{id:"cell"},"Cell"),(0,a.mdx)("p",null,"Layer 1 \u7684\u5173\u6ce8\u91cd\u70b9\u5728\u72b6\u6001\uff0c\u4ee5 Layer 1 \u4e3a\u8bbe\u8ba1\u76ee\u6807\u7684 CKB \u8bbe\u8ba1\u7684\u5173\u6ce8\u70b9\u5f88\u81ea\u7136\u5c31\u662f\u72b6\u6001\u3002CKB \u60f3\u8981\u9a8c\u8bc1\u548c\u957f\u4e45\u4fdd\u5b58\u7684\u72b6\u6001\uff0c\u4e0d\u4ec5\u4ec5\u662f\u50cf\u5728\u6bd4\u7279\u5e01\u4e2d\u90a3\u6837\u7b80\u5355\u7684\u6570\u5b57\uff08Value)\uff0c\u800c\u662f\u4efb\u4f55\u4eba\u4eec\u8ba4\u4e3a\u6709\u4ef7\u503c\u7684\u3001\u7ecf\u8fc7\u5171\u8bc6\u7684\u6570\u636e\u3002Bitcoin \u7684\u4ea4\u6613\u8f93\u51fa\u7ed3\u6784\u6ee1\u8db3\u4e0d\u4e86\u8fd9\u4e2a\u9700\u6c42\uff0c\u4f46\u662f\u5b83\u5df2\u7ecf\u7ed9\u4e86\u6211\u4eec\u8db3\u591f\u7684\u542f\u53d1\uff1a\u53ea\u9700\u8981\u5c06 Value \u4e00\u822c\u5316\uff0c\u628a\u5b83\u4ece\u4e00\u4e2a\u5b58\u653e\u6574\u6570\u7684\u7a7a\u95f4\u53d8\u6210\u4e00\u4e2a\u53ef\u4ee5\u5b58\u653e\u4efb\u610f\u6570\u636e\u7684\u7a7a\u95f4\uff0c\u6211\u4eec\u5c31\u5f97\u5230\u4e86\u4e00\u4e2a\u66f4\u52a0\u4e00\u822c\u5316\u7684\u300cValue\u300d\u6216\u8005\u53eb Cell\uff1a"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"pub struct CellOutput {\n    pub capacity: Capacity,\n    pub data: Vec<u8>,\n    pub lock: Script,\n    pub type_: Option<Script>,\n}\n")),(0,a.mdx)("p",null,"\u5728 Cell \u91cc\u9762\uff0cValue \u53d8\u6210\u4e86 capacity \u548c data \u4e24\u4e2a\u5b57\u6bb5\uff0c\u8fd9\u4e24\u4e2a\u5b57\u6bb5\u5171\u540c\u8868\u793a\u4e00\u5757\u5b58\u50a8\u7a7a\u95f4\uff0ccapacity \u4e0d\u4ec5\u4ec5\u53ea\u662f\u5b58\u50a8 Token \u7684\u6570\u91cf\uff0c\u4e5f\u80fd\u8868\u793a cell \u53ef\u4ee5\u5b58\u50a8\u6570\u636e\u6570\u91cf\u7684\u9650\u5236\uff0c\u8fd9\u5c31\u662f\u540d\u5b57\u7684\u7531\u6765\uff0c\u5b83\u662f cell \u80fd\u591f\u5b58\u50a8\u7684\u5bb9\u91cf\u9650\u5236\uff0cdata \u5219\u662f\u4fdd\u5b58\u72b6\u6001\u7684\u5730\u65b9\uff0c\u53ef\u4ee5\u5199\u5165\u4efb\u610f\u7684\u4e00\u6bb5\u5b57\u8282\u3002\u5728\u5de5\u7a0b\u5b9e\u73b0\u4e0a\uff0c\u6570\u636e\u7ed3\u6784\u4e2d cell \u7684 data \u8c03\u6574\u4e3a outputs_data \u5982\u679c\u60a8\u60f3\u4e86\u89e3 Cell \u7684\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u8003 RFC\uff1a",(0,a.mdx)(u.default,{to:(0,i.default)("/docs/basics/data-structure"),mdxType:"Link"},"CKB Data Structure"),"."),(0,a.mdx)("p",null,"Cell \u6a21\u578b\u8fd8\u5f15\u5165\u4e86 lock script \u7684\u6982\u5ff5\uff0c\u8868\u793a\u8fd9\u5757\u5171\u8bc6\u7a7a\u95f4\u7684\u6240\u6709\u8005\u662f\u8c01\uff0c\u4e0e scriptPubKey  \u7c7b\u4f3c \uff0c\u53ea\u6709\u80fd\u63d0\u4f9b\u53c2\u6570\uff08\u4f8b\u5982\u7b7e\u540d\uff09\u4f7f\u5f97 lock script \u6210\u529f\u6267\u884c\u7684\u4eba\uff0c\u624d\u80fd\u300c\u66f4\u65b0\u300d\u8fd9\u4e2a Cell \u4e2d\u7684\u72b6\u6001\u3002\u5728\u4ea4\u6613\u4e2d\uff0c\u6574\u4e2a CellOutput \u5360\u7528\u7684\u5b57\u8282\u6570\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e\u4ea4\u6613\u8f93\u5165 cell \u7684 capacity \u603b\u548c\u3002"),(0,a.mdx)("p",null,"CKB \u4e2d\u5b58\u5728\u7740\u8bb8\u8bb8\u591a\u591a\u7684 Cell\uff0c\u6240\u6709\u8fd9\u4e9b Cell \u7684\u96c6\u5408\u5f62\u6210\u4e86 CKB \u5b8c\u6574\u7684\u5f53\u524d\u72b6\u6001\uff0c\u5728 CKB \u7684\u5f53\u524d\u72b6\u6001\u4e2d\u5b58\u50a8\u7684\u4e0d\u518d\u4ec5\u4ec5\u662f\u67d0\u4e00\u79cd\u6570\u5b57\u8d27\u5e01\uff0c\u8fd8\u5b58\u50a8\u4efb\u610f\u7684\u5171\u540c\u77e5\u8bc6\uff08\u5bf9\u4e8e\u521b\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u903b\u8f91\uff0c\u6211\u4eec\u5c06\u5728\u540e\u9762\u4ecb\u7ecd type script\uff09\u3002"),(0,a.mdx)("p",null,"\u5728 CKB \u4e2d\uff0c\u4ea4\u6613\u4f9d\u7136\u8868\u793a\u72b6\u6001\u7684\u53d8\u5316/\u8fc1\u79fb\u3002\u72b6\u6001\u7684\u53d8\u5316\uff0c\u6216\u8005\u8bf4 Cell \u5185\u5bb9\u7684\u300c\u66f4\u65b0\u300d\u5b9e\u9645\u4e0a\u4e5f\u662f\u901a\u8fc7\u9500\u6bc1\u548c\u521b\u5efa\u6765\u5b8c\u6210\u7684\uff08\u5e76\u4e0d\u662f\u771f\u7684\u53bb\u4fee\u6539\u539f\u6709 Cell \u4e2d\u7684\u5185\u5bb9\uff09\u3002\u6bcf\u4e00\u7b14\u4ea4\u6613\u5b9e\u9645\u4e0a\u90fd\u4f1a\u9500\u6bc1\u4e00\u6279 Cell\uff0c\u540c\u65f6\u521b\u5efa\u4e00\u6279\u65b0\u7684 Cell\u3002\u65b0\u521b\u9020\u7684 Cell \u4f1a\u6709\u65b0\u7684\u6240\u6709\u8005\uff0c\u4e5f\u4f1a\u5b58\u653e\u65b0\u7684\u6570\u636e\uff0c\u4f46\u662f\u88ab\u9500\u6bc1\u7684 capacity \u603b\u548c\u603b\u662f\u5927\u4e8e\u7b49\u4e8e\u65b0\u521b\u5efa\u7684 capacity \u603b\u548c\uff0c\u7531\u6b64\u4fdd\u8bc1\u6ca1\u6709\u4eba\u53ef\u4ee5\u968f\u4fbf\u589e\u53d1 capacity\u3002"),(0,a.mdx)("p",null,"capacity \u662f CKB \u7f51\u7edc\u4e2d\u7684\u539f\u751f\u8d44\u4ea7\uff0c\u62e5\u6709 capacity \u7b49\u4e8e\u62e5\u6709\u76f8\u5e94\u6570\u91cf\u7684\u5171\u8bc6\u72b6\u6001\u7a7a\u95f4\uff0ccapacity \u53ea\u80fd\u6309\u7167\u9884\u5148\u5b9a\u4e49\u7684\u56fa\u5b9a\u516c\u5f0f\u53d1\u884c\uff1a",(0,a.mdx)("a",{parentName:"p",href:"https://docs.nervos.org/basic-concepts/economics-of-ckb.html#ckbyte-issuance-schedule"},"CKB Issuance Schedule"),"\u3002Cell \u7684\u9500\u6bc1\u53ea\u662f\u628a\u5b83\u6807\u8bb0\u4e3a\u300c\u5df2\u9500\u6bc1\u300d\uff0c\u7c7b\u4f3c Bitcoin \u7684 UTXO \u4ece\u672a\u82b1\u8d39\u53d8\u4e3a\u5df2\u82b1\u8d39\uff0c\u5e76\u4e0d\u662f\u4ece\u533a\u5757\u94fe\u4e0a\u5220\u6389\u3002\u6bcf\u4e00\u4e2a Cell \u53ea\u80fd\u88ab\u9500\u6bc1\u4e00\u6b21\uff0c\u5c31\u50cf\u6bcf\u4e00\u4e2a UTXO \u53ea\u80fd\u88ab\u82b1\u8d39\u4e00\u6b21\u3002"),(0,a.mdx)("p",null,"\u8fd9\u6837\u4e00\u4e2a\u6a21\u578b\u7684\u7279\u70b9\u662f\uff1a"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"\u72b6\u6001\u662f\u7b2c\u4e00\u6027\u7684\uff1b"),(0,a.mdx)("li",{parentName:"ol"},"\u6240\u6709\u8005\u662f\u72b6\u6001\u7684\u5c5e\u6027\uff0c\u6bcf\u4e00\u4efd\u72b6\u6001\u53ea\u6709\u4e00\u4e2a\u6240\u6709\u8005\uff1b"),(0,a.mdx)("li",{parentName:"ol"},"\u72b6\u6001\u4e0d\u65ad\u7684\u88ab\u9500\u6bc1\u548c\u521b\u5efa\uff1b")),(0,a.mdx)("p",null,"\u6240\u4ee5\u8bf4\uff0cCell \u662f UTXO \u7684\u4e00\u822c\u5316\uff08generalized\uff09\u7248\u672c\u3002"),(0,a.mdx)("h2",{id:"ckb-\u4ea4\u6613\u72b6\u6001\u751f\u6210"},"CKB \u4ea4\u6613\uff1a\u72b6\u6001\u751f\u6210"),(0,a.mdx)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0cCKB \u4ea4\u6613\u88ab\u5206\u4e3a\u4e24\u4e2a\u90e8\u5206\uff1a inputs \u548c outputs\u3002\u4ea4\u6613\u9500\u6bc1\u4e86 inputs \u4e2d\u7684 Cell\uff0c\u540c\u65f6\u521b\u5efa\u4e86\u5728 outputs \u4e2d\u7684 Cell\u3002\u4e00\u4e2a\u53ef\u7528\uff08Live\uff09\u7684 Cell \u4f1a\u4ee5\u8f93\u51fa\u800c\u975e\u8f93\u5165\u7684\u5f62\u5f0f\u51fa\u73b0\u3002\u4e00\u4e2a\u88ab\u9500\u6bc1\uff08Dead\uff09\u7684 Cell \u4ee3\u8868\u5b83\u662f\u4ee5\u8f93\u5165\u7684\u5f62\u5f0f\u5728\u5176\u5b83\u8f83\u65e9\u7684\u4ea4\u6613\u4e2d\u88ab\u4f7f\u7528\u8fc7\u3002\u4e00\u4e2a\u4ea4\u6613\u53ea\u80fd\u4ee5\u53ef\u7528\u7684 Cell \u4f5c\u4e3a\u8f93\u5165\uff0c\u56e0\u6b64\u751f\u6210\u4ea4\u6613\u7684\u7b2c\u4e00\u6b65\u662f\u6536\u96c6\u53ef\u7528\u7684 Cell\u3002"),(0,a.mdx)("img",{src:(0,i.default)("img/model-transaction.png"),width:"50%"}),(0,a.mdx)("p",null,"\u60a8\u4f1a\u53d1\u73b0\u8fd9\u6837\u7684\u7ed3\u6784\u7c7b\u4f3c\u4e8e\u6bd4\u7279\u5e01\uff0c\u4f46\u7f3a\u5c11\u7528\u4e8e\u4fdd\u62a4\u4ea4\u6613\u8f93\u51fa\u6240\u6709\u6743\u7684\u9501\u5b9a\u811a\u672c\u3002CKB \u786e\u5b9e\u6709\u8fd9\u4e2a\u7279\u6027\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u5173\u6ce8\u4e00\u4e0b cell \u6570\u636e\u7ed3\u6784\u4e2d\u7684\u4e24\u4e2a\u5b9e\u4f53\uff1a",(0,a.mdx)("inlineCode",{parentName:"p"},"lock")," \u548c ",(0,a.mdx)("inlineCode",{parentName:"p"},"type"),"\u3002"),(0,a.mdx)("h3",{id:"\u811a\u672c"},"\u811a\u672c"),(0,a.mdx)("p",null,"\u6211\u4eec\u5728\u4e0a\u9762\u4ecb\u7ecd\u4e86 cell \u7684\u6570\u636e\u7ed3\u6784\uff0c\u5982\u60a8\u6240\u89c1\uff0cCell \u4e2d\u6709\u4e24\u4e2a\u5b57\u6bb5\u7684\u7c7b\u578b\u662f Script\u3002CKB VM \u4f1a\u8fd0\u884c\u6240\u6709\u8f93\u5165 Cell \u4e2d\u7684 lock \u811a\u672c\uff0c\u5e76\u4e14\u8fd8\u4f1a\u8fd0\u884c\u6240\u6709\u8f93\u5165\u548c\u8f93\u51fa Cell \u4e2d\u7684 type \u811a\u672c\u3002\u8be5\u811a\u672c\u4e0d\u76f4\u63a5\u5305\u542b\u4ee3\u7801\uff0c\u8bf7\u53c2\u9605\u4e0b\u9762\u7684\u811a\u672c\u7ed3\u6784\u3002"),(0,a.mdx)("img",{src:(0,i.default)("img/model-script.png"),width:"50%"}),(0,a.mdx)("p",null,"\u5f53 CKB-VM \u9700\u8981\u8fd0\u884c\u4e00\u4e2a\u811a\u672c\u65f6\uff0c\u5b83\u5fc5\u987b\u8981\u5148\u627e\u5230\u5b83\u7684\u4ee3\u7801\u3002\u5b57\u6bb5 code_hash \u548c hash_type \u5c31\u662f\u7528\u6765\u67e5\u770b\u4ee3\u7801\u7684\u3002\u5728 CKB \u4e2d\uff0c\u811a\u672c\u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u6210 RISC-V \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u8fd9\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u662f\u4ee5\u6570\u636e\u7684\u5f62\u5f0f\u5b58\u50a8\u5728 Cell \u4e2d\u7684\u3002\u5f53 hash_type \u662f\u300cData\u300d\u65f6\uff0c\u811a\u672c\u4f1a\u88ab\u5b9a\u4f4d\u5728\u4e00\u4e2a\u6570\u636e\u54c8\u5e0c\u548c\u811a\u672c\u7684 code_hash \u76f8\u7b49\u7684 Cell \u4e2d\u3002\u987e\u540d\u601d\u4e49\uff0cCell \u6570\u636e\u54c8\u5e0c\u662f\u4ece Cell \u7684\u6570\u636e\u4e2d\u7b97\u51fa\u6765\u7684\u3002\u5728\u4ea4\u6613\u4e2d\u7684\u8303\u56f4\u6709\u9650\u3002"),(0,a.mdx)("p",null,"\u5982\u679c\u4f60\u60f3\u5728 CKB \u4e2d\u4f7f\u7528\u811a\u672c\uff0c\u90a3\u4e48\u5e94\u8be5\u9075\u5faa\u4ee3\u7801\u5b9a\u4f4d\u7684\u89c4\u5219\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"\u628a\u4f60\u7684\u4ee3\u7801\u7f16\u8bd1\u6210 RISC-V \u4e8c\u8fdb\u5236\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u5728\u5efa\u6784\u7cfb\u7edf Cell \u4ee3\u7801\u7684\u4ed3\u5e93\u4e2d\u627e\u5230\u4e00\u4e9b\u6848\u4f8b\uff1a\n",(0,a.mdx)("em",{parentName:"li"},(0,a.mdx)("a",{parentName:"em",href:"https://github.com/nervosnetwork/ckb-system-scripts"},"https://github.com/nervosnetwork/ckb-system-scripts"))),(0,a.mdx)("li",{parentName:"ul"},"\u901a\u8fc7\u4e00\u7b14\u4ea4\u6613\uff0c\u521b\u5efa\u4e00\u4e2a\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f5c\u4e3a\u6570\u636e\u7684 cell\uff0c\u5e76\u5c06\u4ea4\u6613\u53d1\u5230\u94fe\u4e0a\u3002"),(0,a.mdx)("li",{parentName:"ul"},"\u5efa\u6784\u4e00\u4e2a\u811a\u672c\u7ed3\u6784\uff0c\u5176 hash_type \u662f\u300cData\u300d\uff0ccode_hash \u53ea\u662f\n\u6784\u5efa\u4e8c\u8fdb\u5236\u6587\u4ef6\u7684\u54c8\u5e0c"),(0,a.mdx)("li",{parentName:"ul"},"\u4f7f\u7528\u811a\u672c\u4f5c\u4e3a Cell \u4e2d\u7684\u4e00\u79cd\u5f62\u6001\u6216\u9501\u5b9a\u811a\u672c\u3002")),(0,a.mdx)("p",null,"\u73b0\u5728\u60a8\u5df2\u7ecf\u5bf9 CKB \u4e2d\u7684\u811a\u672c\u6709\u4e86\u57fa\u672c\u7684\u4e86\u89e3\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u5728\u4ea4\u6613\u4e2d\u4f7f\u7528\u811a\u672c\u6765\u9501\u5b9a cell\uff0c\u5e76\u5728 cell \u4e0a\u5efa\u7acb\u667a\u80fd\u5408\u7ea6\u3002"),(0,a.mdx)("h3",{id:"\u9501\u5b9a\u811a\u672c-lock-script"},"\u9501\u5b9a\u811a\u672c ",(0,a.mdx)("inlineCode",{parentName:"h3"},"lock script")),(0,a.mdx)("p",null,"\u6bcf\u4e2a Cell \u90fd\u6709\u4e00\u4e2a\u9501\u5b9a\u811a\u672c\u3002\u5f53\u4ea4\u6613\u4e2d\u7684 Cell \u88ab\u4ee5\u8f93\u5165\u7684\u5f62\u5f0f\u4f7f\u7528\u65f6\uff0c\u9501\u5b9a\u811a\u672c\u5fc5\u987b\u6267\u884c\u3002\u4ea4\u6613\u53ea\u6709\u5728\u6240\u6709\u7684\u8f93\u5165\u4e2d\u9501\u5b9a\u811a\u672c\u90fd\u6b63\u5e38\uff08\u6267\u884c\u5e76\uff09\u9000\u51fa\u65f6\uff08\u6ca1\u6709\u4f8b\u5916\uff09\u624d\u6709\u6548\u3002\u56e0\u4e3a\u811a\u672c\u5728\u8f93\u5165\u4e0a\u8fd0\u884c\uff0c\u6240\u4ee5\u5b83\u53ef\u4ee5\u626e\u6f14\u9501\u7684\u89d2\u8272\u6765\u63a7\u5236\u8c01\u53ef\u4ee5\u89e3\u9501\u6216\u8005\u9500\u6bc1 Cell\uff0c\u4ee5\u53ca\u82b1\u8d39\u50a8\u5b58\u5728 Cell \u4e2d\u7684\u5bb9\u91cf\u3002"),(0,a.mdx)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u603b\u662f\u53ef\u4ee5\u6b63\u5e38\uff08\u6267\u884c\u5e76\uff09\u9000\u51fa\u7684\u9501\u811a\u672c\u7684\u4ee3\u7801\u793a\u4f8b\u3002\u5982\u679c\u4f7f\u7528\u8fd9\u6bb5\u4ee3\u7801\u4f5c\u4e3a\u9501\u811a\u672c\uff0c\u90a3\u4e48\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u9500\u6bc1\u8fd9\u4e2a Cell\u3002"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"int main(int argc, char *argv[]) {\n  return 0;\n}\n")),(0,a.mdx)("p",null,"\u6700\u4e3b\u6d41\u7684\u9501\u5b9a\u6570\u5b57\u8d44\u4ea7\u7684\u65b9\u5f0f\u662f\u7528\u975e\u5bf9\u79f0\u52a0\u5bc6\u521b\u5efa\u7684\u6570\u5b57\u7b7e\u540d\u3002"),(0,a.mdx)("p",null,"\u8fd9\u4e2a\u7b7e\u540d\u6f14\u7b97\u6cd5\u6709\u4e24\u4e2a\u8981\u6c42\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Cell \u5fc5\u987b\u8981\u5305\u542b\u516c\u94a5\u7684\u4fe1\u606f\uff0c\u6240\u4ee5\u53ea\u6709\u771f\u6b63\u7684\u79c1\u94a5\u53ef\u4ee5\u521b\u5efa\u6709\u6548\u7684\u7b7e\u540d\uff1b"),(0,a.mdx)("li",{parentName:"ul"},"\u4ea4\u6613\u5fc5\u987b\u5305\u542b\u7b7e\u540d\uff0c\u800c\u4e14\u901a\u5e38\u4ee5\u6574\u4e2a\u4ea4\u6613\u4f5c\u4e3a\u6d88\u606f\u53bb\u7b7e\u540d\u3002")),(0,a.mdx)("h3",{id:"\u7c7b\u578b\u811a\u672c-type-script"},"\u7c7b\u578b\u811a\u672c ",(0,a.mdx)("inlineCode",{parentName:"h3"},"type script")),(0,a.mdx)("p",null,"\u7c7b\u578b\u811a\u672c\u548c\u9501\u5b9a\u811a\u672c\u5f88\u76f8\u4f3c\uff0c\u4f46\u6709\u4e24\u70b9\u4e0d\u540c\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"\u7c7b\u578b\u811a\u672c\u662f\u53ef\u9009\u7684\uff1b"),(0,a.mdx)("li",{parentName:"ul"},"\u5728\u4efb\u4e00\u4ea4\u6613\u4e2d\uff0cCKB \u5fc5\u987b\u5728\u8f93\u5165\u548c\u8f93\u51fa\u7aef\u90fd\u8fd0\u884c\u7c7b\u578b\u811a\u672c\u3002")),(0,a.mdx)("p",null,"\u867d\u7136\u6211\u4eec\u53ea\u80fd\u5728 Cell \u4e2d\u7ef4\u6301\u4e00\u79cd\u811a\u672c\uff0c\u4f46\u6211\u4eec\u4e0d\u4f1a\u60f3\u8981\u5728\u4e00\u4e2a\u5355\u4e00\u7684\u811a\u672c\u4e2d\u6270\u4e71\uff08\u811a\u672c\uff09\u4e0d\u540c\u7684\u804c\u8d23\u3002\u9501\u5b9a\u811a\u672c\u53ea\u4e3a\u8f93\u51fa\u6267\u884c\uff0c\u6240\u4ee5\u4ed6\u7684\u9996\u8981\u4efb\u52a1\u662f\u4fdd\u62a4 Cell\u3002\u53ea\u6709\u6240\u6709\u8005\u53ef\u4ee5\u4ee5\u8f93\u5165\u7684\u5f62\u5f0f\u4f7f\u7528 Cell\uff0c\u4ee5\u53ca\u82b1\u8d39\u50a8\u5b58\u4e8e\u5176\u4e2d\u7684\u901a\u8bc1\u3002"),(0,a.mdx)("p",null,"\u7c7b\u578b\u811a\u672c\u7684\u76ee\u7684\u662f\u5728 Cell \u4e0a\u5efa\u7acb\u5408\u7ea6\u3002\u5f53\u4f60\u5f97\u5230\u4e00\u4e2a\u7279\u6b8a\u7c7b\u578b\u7684\u5408\u7ea6\u65f6\uff0c\u4f60\u53ef\u4ee5\u786e\u5b9a Cell \u5df2\u7ecf\u5728\u7279\u5b9a\u4ee3\u7801\u4e2d\u901a\u8fc7\u9a8c\u8bc1\u3002\u540c\u65f6\u8fd9\u4e2a\u4ee3\u7801\u4e5f\u4f1a\u5728 Cell \u88ab\u9500\u6bc1\u65f6\u88ab\u6267\u884c\u3002\u5178\u578b\u7684\u7c7b\u578b\u811a\u672c\u573a\u666f\u662f\u7528\u6237\u81ea\u5b9a\u4e49 Token\uff0c\u8fd9\u79cd\u7c7b\u578b\u811a\u672c\u5fc5\u987b\u5728\u8f93\u51fa\u4e0a\u8fd0\u884c\uff0c\u6240\u4ee5\u901a\u8bc1\u7684\u53d1\u884c\u5fc5\u987b\u88ab\u6388\u6743\u3002"),(0,a.mdx)("p",null,"\u5728\u8f93\u5165\u4e0a\u8fd0\u884c\u7c7b\u578b\u811a\u672c\u5bf9\u5408\u7ea6\u800c\u8a00\u975e\u5e38\u91cd\u8981\uff0c\u4f8b\u5982\u4e00\u4e2a\u8ba9\u7528\u6237\u53ef\u4ee5\u5728\u7ebf\u4e0b\u62b5\u62bc CKB \u6765\u79df\u7528\u8d44\u4ea7\u7684\u5408\u7ea6\uff0c\u5982\u679c\u8fd9\u4e2a\u7c7b\u578b\u811a\u672c\u6ca1\u6709\u5728\u8f93\u5165\u4e0a\u8fd0\u884c\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u4e0d\u53d7\u6743\u9650\u7684\u60c5\u51b5\u4e0b\u4ece\u5408\u7ea6\u4e2d\u53d6\u56de CKB\uff0c\u53ea\u9700\u9500\u6bc1\u8fd9\u4e2a Cell \u5e76\u5c06\u5bb9\u91cf\u8f6c\u79fb\u5230\u4e00\u4e2a\u6ca1\u6709\u7c7b\u578b\u811a\u672c\u7684\u65b0 Cell \u4e0a\u5373\u53ef\u3002"),(0,a.mdx)("p",null,"\u8fd9\u4e2a\u8fd0\u884c\u7c7b\u578b\u811a\u672c\u7684\u6b65\u9aa4\u548c\u9501\u5b9a\u811a\u672c\u4e5f\u5f88\u76f8\u4f3c\uff0c\u9664\u4e86\uff1a"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"\u6ca1\u6709\u7c7b\u578b\u811a\u672c\u7684 Cell \u4f1a\u88ab\u5ffd\u7565"),(0,a.mdx)("li",{parentName:"ol"},"\u811a\u672c\u7fa4\u7ec4\u5305\u542b\u8f93\u5165\u4e0e\u8f93\u51fa")),(0,a.mdx)("h2",{id:"ckb-vm\u72b6\u6001\u9a8c\u8bc1\u5668"},"CKB VM\uff1a\u72b6\u6001\u9a8c\u8bc1\u5668"),(0,a.mdx)("p",null,"CKB \u4f7f\u7528\u7684\u662f ",(0,a.mdx)("a",{parentName:"p",href:"https://riscv.org/"},"RISC-V")," ISA \u6765\u5b9e\u73b0 VM \u5c42\uff0cCKB VM \u7528\u4e8e\u6267\u884c\u4e00\u7cfb\u5217\u9a8c\u8bc1\u89c4\u5219\uff0c\u901a\u8fc7\u6267\u884c type script \u548c lock script \u6765\u786e\u5b9a\u4ea4\u6613\u7684\u8f93\u5165\u548c\u8f93\u51fa\u662f\u5426\u6709\u6548\u3002\u89c4\u5219\u603b\u7ed3\u5982\u4e0b\uff1a"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"\u5728 Input Cell \u4e2d\u7684 lock \u811a\u672c\u4f1a\u88ab\u6536\u96c6\u548c\u53bb\u91cd\uff0c\u6bcf\u4e2a\u5355\u72ec\u7684 lock \u811a\u672c\u4f1a\u88ab\u6267\u884c\u4e00\u6b21\uff0c\u5e76\u4e14\u53ea\u6267\u884c\u4e00\u6b21\u3002"),(0,a.mdx)("li",{parentName:"ul"},"Input \u548c Output Cell \u4e2d\u7684 type \u811a\u672c\uff08\u5982\u679c\u5b58\u5728\u7684\u8bdd\uff09\u4f1a\u88ab\u6536\u96c6\u5728\u4e00\u8d77\u5e76\u53bb\u91cd\uff0c\u6bcf\u4e2a\u5355\u72ec\u7684 type \u811a\u672c\u90fd\u4f1a\u88ab\u6267\u884c\u4e00\u6b21\uff0c\u5e76\u4e14\u53ea\u6267\u884c\u4e00\u6b21\u3002"),(0,a.mdx)("li",{parentName:"ul"},"\u4efb\u4f55\u811a\u672c\u5931\u8d25\uff0c\u5219\u6574\u4e2a\u4ea4\u6613\u9a8c\u8bc1\u5931\u8d25\u3002")),(0,a.mdx)("p",null,"CKB \u901a\u8fc7\u52a8\u6001\u94fe\u63a5\u5e93\u7684\u65b9\u5f0f\uff0c\u4f9d\u8d56 syscall \u6765\u5b9e\u73b0\u94fe\u4e0a\u8fd0\u7b97\u6240\u9700\u7684\u5176\u4ed6\u529f\u80fd\uff0c\u6bd4\u5982\u8bfb\u53d6 Cell \u7684\u5185\u5bb9\uff0c\u6216\u662f\u5176\u4ed6\u4e0e block \u76f8\u5173\u7684\u666e\u901a\u8fd0\u7b97\u53ca\u52a0\u5bc6\u8fd0\u7b97\u3002\u4efb\u4f55\u652f\u6301 RV64I \u7684\u7f16\u8bd1\u5668\uff08\u5982 ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/riscv/riscv-gcc"},"riscv-gcc"),"\uff0c",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/lowRISC/riscv-llvm"},"riscv-llvm"),"\uff0c",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/rust-embedded/wg/issues/218"},"Rust"),"\uff09\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5747\u53ef\u4ee5\u4f5c\u4e3a CKB VM \u4e2d\u7684 script \u6765\u8fd0\u884c\u3002"),(0,a.mdx)("p",null,"CKB \u6838\u5fc3\u53ea\u5b9a\u4e49\u4e86\u5e95\u5c42\u7684\u865a\u62df\u673a\u6a21\u578b\uff0c\u7406\u8bba\u4e0a\u4efb\u4f55\u63d0\u4f9b\u4e86 RISC-V \u540e\u7aef\u7684\u8bed\u8a00\u5747\u53ef\u4ee5\u7528\u6765\u5f00\u53d1 CKB \u5408\u7ea6:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"CKB \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u6807\u51c6\u7684 riscv-gcc\u3001riscv-llvm\uff0c\u751a\u81f3\u66f4\u9ad8\u7ea7\u7684 gcc/llvm \u4ee5 C/C++ \u8bed\u8a00\u6765\u8fdb\u884c\u5f00\u53d1\u3002\u7f16\u8bd1\u540e\u7684\u53ef\u6267\u884c\u6587\u4ef6\u53ef\u4ee5\u76f4\u63a5\u4f5c\u4e3a CKB \u7684\u5408\u7ea6\u6765\u4f7f\u7528"),(0,a.mdx)("li",{parentName:"ul"},"\u4e0e\u6b64\u76f8\u5e94\u7684\uff0c\u53ef\u4ee5\u5c06 C \u5b9e\u73b0\u7684 Bitcoin \u4ee5\u53ca Ethereum VM \u7f16\u8bd1\u6210 RISC-V \u4e8c\u8fdb\u5236\u4ee3\u7801\uff0c\u4fdd\u5b58\u5728\u516c\u5171 Cell \u4e2d\uff0c\u7136\u540e\u5728\u5408\u7ea6\u4e2d\u5f15\u7528\u516c\u5171 Cell \u6765\u8fd0\u884c Bitcoin \u6216\u8005 Ethereum \u7684\u5408\u7ea6"),(0,a.mdx)("li",{parentName:"ul"},"\u5176\u4ed6\u7684\u9ad8\u7ea7\u8bed\u8a00 VM \u5982 ",(0,a.mdx)("a",{parentName:"li",href:"http://duktape.org/"},"duktape")," \u53ca ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/mruby/mruby"},"mruby")," \u5728\u7f16\u8bd1\u540e\uff0c\u4e5f\u53ef\u4ee5\u7528\u6765\u76f8\u5e94\u7684\u8fd0\u884c JavaScript \u6216\u8005 Ruby \u7f16\u5199\u7684\u5408\u7ea6"),(0,a.mdx)("li",{parentName:"ul"},"\u76f8\u5e94\u7684\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,a.mdx)("a",{parentName:"li",href:"https://github.com/riscv-rust/rust"},"Rust")," \u4f5c\u4e3a\u5b9e\u73b0\u8bed\u8a00\u6765\u7f16\u5199\u5408\u7ea6")),(0,a.mdx)("p",null,"\u90a3\u4e48\u4ee5\u4e0a\u5c31\u662f CKB \u7f16\u7a0b\u6a21\u578b\u7684\u6982\u89c8\uff0c\u603b\u800c\u8a00\u4e4b\uff0c\u4e0e\u5176\u4ed6\u516c\u94fe\u4e0d\u540c\uff0cCKB \u7684\u72b6\u6001\u751f\u6210\u548c\u72b6\u6001\u9a8c\u8bc1\u8fdb\u884c\u4e86\u5206\u79bb\uff0c\u5404\u81ea\u7684\u7075\u6d3b\u6027\u548c\u6269\u5c55\u6027\u90fd\u5f97\u5230\u4e86\u63d0\u9ad8\u3002\u6570\u636e\u5904\u7406\u7684\u65b9\u5f0f\u66f4\u7075\u6d3b\uff0c\u5de5\u5177\u66f4\u591a\u6837\u3002"))}C.isMDXComponent=!0}}]);