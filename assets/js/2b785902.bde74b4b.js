"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[1381],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return m},useMDXComponents:function(){return f},withMDXComponents:function(){return s}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){return function(t){var n=f(t.components);return r.createElement(e,i({},t,{components:n}))}},f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=f(n),d=o,v=s["".concat(u,".").concat(d)]||s[d]||p[d]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=v;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},22286:function(e,t,n){var r=n(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLinksCollector=t.createStatefulLinksCollector=t.ProvideLinksCollector=void 0;var o=r(n(67294));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var i=(0,o.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,o.useContext)(i)};t.ProvideLinksCollector=function(e){var t=e.children,n=e.linksCollector;return o.default.createElement(i.Provider,{value:n},t)}},33692:function(e,t,n){var r=n(95318).default,o=n(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(63366)),u=o(n(67294)),a=n(73727),l=r(n(52263)),c=r(n(13919)),s=r(n(10412)),f=n(22286),d=n(44996),p=n(18780),v=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var m=function(e){var t,n,r=e.isNavLink,o=e.to,m=e.href,b=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,O=void 0===g||g,k=(0,i.default)(e,v),w=(0,l.default)().siteConfig,P=w.trailingSlash,j=w.baseUrl,C=(0,d.useBaseUrlUtils)().withBaseUrl,x=(0,f.useLinksCollector)(),_=o||m,L=(0,c.default)(_),N=null==_?void 0:_.replace("pathname://",""),M=void 0!==N?(n=N,O&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;M&&L&&(M=(0,p.applyTrailingSlash)(M,{trailingSlash:P,baseUrl:j}));var U=(0,u.useRef)(!1),E=r?a.NavLink:a.Link,S=s.default.canUseIntersectionObserver,D=(0,u.useRef)();(0,u.useEffect)((function(){return!S&&L&&null!=M&&window.docusaurus.prefetch(M),function(){S&&D.current&&D.current.disconnect()}}),[D,M,S,L]);var T=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,B=!M||!L||T;return M&&L&&!T&&!h&&x.collectLink(M),B?u.default.createElement("a",Object.assign({href:M},_&&!L&&{target:"_blank",rel:"noopener noreferrer"},k)):u.default.createElement(E,Object.assign({},k,{onMouseEnter:function(){U.current||null==M||(window.docusaurus.preload(M),U.current=!0)},innerRef:function(e){var t,n;S&&e&&L&&(t=e,n=function(){null!=M&&window.docusaurus.prefetch(M)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),n())}))})),D.current.observe(t))},to:M||""},r&&{isActive:y,activeClassName:b}))};t.default=m},13919:function(e,t){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0!==e&&!n(e)},t.hasProtocol=n},44996:function(e,t,n){var r=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===t&&(t={});return(0,u().withBaseUrl)(e,t)},t.useBaseUrlUtils=u;var o=r(n(52263)),i=n(13919);function u(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,u=o.forcePrependBaseUrl,a=void 0!==u&&u,l=o.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.hasProtocol)(n))return n;if(a)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(r,n,e,t)}}}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,u)}},18780:function(e,t,n){var r=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},94733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),u=(n(44996),n(33692),["components"]),a={id:"tools",title:"Introduction",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"tools",id:"tools",isDocsHomePage:!1,title:"Introduction",description:"- ckb-indexer",source:"@site/docs/tools.md",sourceDirName:".",slug:"/tools",permalink:"/docsite/docs/tools",editUrl:"https://github.com/xying21/docsite/docs/tools.md",tags:[],version:"current",lastUpdatedAt:1635215500,formattedLastUpdatedAt:"10/26/2021",frontMatter:{id:"tools",title:"Introduction",sidebar_label:"Introduction"}},s=[],f={toc:s};function d(e){var t=e.components,n=(0,o.default)(e,u);return(0,i.mdx)("wrapper",(0,r.default)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"ckb-indexer"),(0,i.mdx)("li",{parentName:"ul"},"ckb-cli"),(0,i.mdx)("li",{parentName:"ul"},"Capsule"),(0,i.mdx)("li",{parentName:"ul"},"Tippy"),(0,i.mdx)("li",{parentName:"ul"},"Mercury "),(0,i.mdx)("li",{parentName:"ul"},"CKB SDK"),(0,i.mdx)("li",{parentName:"ul"},"Lumos"),(0,i.mdx)("li",{parentName:"ul"},"Polyjuice"),(0,i.mdx)("li",{parentName:"ul"},"Godwoken"),(0,i.mdx)("li",{parentName:"ul"},"Forcebridge")))}d.isMDXComponent=!0}}]);