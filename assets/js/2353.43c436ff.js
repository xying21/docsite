(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[2353],{3905:function(e,t,n){"use strict";n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return f},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){return function(t){var n=d(t.components);return r.createElement(e,l({},t,{components:n}))}},d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),f=a,y=s["".concat(o,".").concat(f)]||s[f]||p[f]||l;return n?r.createElement(y,c(c({ref:t},u),{},{components:n})):r.createElement(y,c({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},65913:function(e,t,n){"use strict";var r=n(20862).default,a=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.children,n=e.className,r=e.metastring,a=e.title,m=(0,y.useThemeConfig)().prism,g=(0,o.useState)(!1),v=g[0],k=g[1],j=(0,o.useState)(!1),O=j[0],E=j[1];(0,o.useEffect)((function(){E(!0)}),[]);var T=(0,y.parseCodeBlockTitle)(r)||a,P=(0,o.useRef)(null),C=[],x=(0,d.default)(),N=Array.isArray(t)?t.join(""):t;if(r&&h.test(r)){var B=r.match(h)[1];C=(0,s.default)(B).filter((function(e){return e>0}))}var w=null==n?void 0:n.split(" ").find((function(e){return e.startsWith("language-")})),S=null==w?void 0:w.replace(/language-/,"");!S&&m.defaultLanguage&&(S=m.defaultLanguage);var _=N.replace(/\n$/,"");if(0===C.length&&void 0!==S){for(var D,L="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return b(["js","jsBlock"]);case"jsx":case"tsx":return b(["js","jsBlock","jsx"]);case"html":return b(["js","jsBlock","html"]);case"python":case"py":return b(["python"]);default:return b()}}(S),A=N.replace(/\n$/,"").split("\n"),z=0;z<A.length;){var R=A[z],W=z+1,I=R.match(M);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=W+",";break;case"highlight-start":D=W;break;case"highlight-end":L+=D+"-"+(W-1)+","}A.splice(z,1)}else z+=1}C=(0,s.default)(L),_=A.join("\n")}var F=function(){(0,u.default)(_),k(!0),setTimeout((function(){return k(!1)}),2e3)};return o.default.createElement(i.default,(0,l.default)({},i.defaultProps,{key:String(O),theme:x,code:_,language:S}),(function(e){var t=e.className,r=e.style,a=e.tokens,i=e.getLineProps,u=e.getTokenProps;return o.default.createElement("div",{className:(0,c.default)(p.default.codeBlockContainer,null==n?void 0:n.replace(/language-[^ ]+/,""))},T&&o.default.createElement("div",{style:r,className:p.default.codeBlockTitle},T),o.default.createElement("div",{className:(0,c.default)(p.default.codeBlockContent,S)},o.default.createElement("pre",{tabIndex:0,className:(0,c.default)(t,p.default.codeBlock,"thin-scrollbar"),style:r},o.default.createElement("code",{className:p.default.codeBlockLines},a.map((function(e,t){1===e.length&&"\n"===e[0].content&&(e[0].content="");var n=i({line:e,key:t});return C.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.default.createElement("span",(0,l.default)({key:t},n),e.map((function(e,t){return o.default.createElement("span",(0,l.default)({key:t},u({token:e,key:t})))})),o.default.createElement("br",null))})))),o.default.createElement("button",{ref:P,type:"button","aria-label":(0,f.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.default)(p.default.copyButton,"clean-btn"),onClick:F},v?o.default.createElement(f.default,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.default.createElement(f.default,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))};var l=a(n(87462)),o=r(n(67294)),c=a(n(86010)),i=r(n(24544)),u=a(n(58206)),s=a(n(87594)),d=a(n(76617)),f=r(n(29052)),p=a(n(7165)),y=n(86700),h=/{([\d,-]+)}/,m=["js","jsBlock","jsx","python","html"],g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},v=["highlight-next-line","highlight-start","highlight-end"],b=function(e){void 0===e&&(e=m);var t=e.map((function(e){var t=g[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+v.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")}},28022:function(e,t,n){"use strict";var r=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=Object.assign({},e);return l.default.createElement(c.Details,(0,a.default)({},t,{className:(0,o.default)("alert alert--info",i.default.details,t.className)}))};var a=r(n(87462)),l=r(n(67294)),o=r(n(86010)),c=n(86700),i=r(n(31378))},96638:function(e,t,n){"use strict";var r=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MainHeading=void 0;var a=r(n(63366)),l=r(n(87462)),o=r(n(67294)),c=r(n(86010)),i=n(29052),u=n(86700);n(38133);var s=r(n(38867)),d=["id"],f=function(e){var t=Object.assign({},e);return o.default.createElement("header",null,o.default.createElement("h1",(0,l.default)({},t,{id:void 0}),t.children))};t.MainHeading=f;var p=function(e){return"h1"===e?f:(t=e,function(e){var n,r=e.id,f=(0,a.default)(e,d),p=(0,u.useThemeConfig)().navbar.hideOnScroll;return r?o.default.createElement(t,(0,l.default)({},f,{className:(0,c.default)("anchor",(n={},n[s.default.anchorWithHideOnScrollNavbar]=p,n[s.default.anchorWithStickyNavbar]=!p,n)),id:r}),f.children,o.default.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+r,title:(0,i.translate)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.default.createElement(t,f)});var t};t.default=p},73491:function(e,t,n){"use strict";var r=n(95318).default,a=n(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(87462)),o=r(n(63366)),c=a(n(67294)),i=r(n(35742)),u=r(n(33692)),s=r(n(65913)),d=r(n(96638)),f=r(n(28022));n(78869);var p=["mdxType","originalType"];var y={head:function(e){var t=c.default.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,a=(r.mdxType,r.originalType,(0,o.default)(r,p));return c.default.createElement(e.props.originalType,a)}return e}(e)}));return c.default.createElement(i.default,e,t)},code:function(e){var t=e.children;return(0,c.isValidElement)(t)?t:t.includes("\n")?c.default.createElement(s.default,e):c.default.createElement("code",e)},a:function(e){return c.default.createElement(u.default,e)},pre:function(e){var t,n=e.children;return(0,c.isValidElement)(n)&&(0,c.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:c.default.createElement(s.default,(0,c.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=c.default.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=c.default.createElement(c.default.Fragment,null,t.filter((function(e){return e!==n})));return c.default.createElement(f.default,(0,l.default)({},e,{summary:n}),r)},h1:(0,d.default)("h1"),h2:(0,d.default)("h2"),h3:(0,d.default)("h3"),h4:(0,d.default)("h4"),h5:(0,d.default)("h5"),h6:(0,d.default)("h6")};t.default=y},76617:function(e,t,n){"use strict";var r=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(87552)),l=r(n(85350)),o=n(86700),c=function(){var e=(0,o.useThemeConfig)().prism,t=(0,l.default)().isDarkTheme,n=e.theme||a.default,r=e.darkTheme||n;return t?r:n};t.default=c},38133:function(e,t,n){"use strict";n.r(t)},78869:function(e,t,n){"use strict";n.r(t)},7165:function(e,t,n){"use strict";n.r(t),t.default={codeBlockContainer:"codeBlockContainer_J+bg",codeBlockContent:"codeBlockContent_csEI",codeBlockTitle:"codeBlockTitle_oQzk",codeBlock:"codeBlock_rtdJ",copyButton:"copyButton_M3SB",codeBlockLines:"codeBlockLines_1zSZ"}},31378:function(e,t,n){"use strict";n.r(t),t.default={details:"details_h+cY"}},38867:function(e,t,n){"use strict";n.r(t),t.default={anchorWithStickyNavbar:"anchorWithStickyNavbar_y2LR",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_3ly5"}},87594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},24544:function(e,t,n){"use strict";n.r(t),n.d(t,{Prism:function(){return r.default},default:function(){return h},defaultProps:function(){return o}});var r=n(87410),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},l=n(67294),o={Prism:r.default,theme:a};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var u=/\r\n|\r|\n/,s=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=i({},n,{backgroundColor:null}),a};function p(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var y=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,l=i({},p(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==a&&(l.style=void 0!==l.style?i({},l.style,a):a),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return l[n[0]];var o=r?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,l=e.token,o=i({},p(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==a&&(o.style=void 0!==o.style?i({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),c(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var l=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=r[o]++)<a[o];){var f=void 0,p=t[o],y=n[o][l];if("string"==typeof y?(p=o>0?p:["plain"],f=y):(p=d(p,y.type),y.alias&&(p=d(p,y.alias)),f=y.content),"string"==typeof f){var h=f.split(u),m=h.length;c.push({types:p,content:h[0]});for(var g=1;g<m;g++)s(c),i.push(c=[]),c.push({types:p,content:h[g]})}else o++,t.push(p),n.push(f),r.push(0),a.push(f.length)}o--,t.pop(),n.pop(),r.pop(),a.pop()}return s(c),i}(void 0!==o?this.tokenize(t,r,o,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),h=y},87552:function(e,t,n){"use strict";n.r(t);t.default={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]}},58206:function(e,t,n){"use strict";function r(e,{target:t=document.body}={}){const n=document.createElement("textarea"),r=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const a=document.getSelection();let l=!1;a.rangeCount>0&&(l=a.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}return n.remove(),l&&(a.removeAllRanges(),a.addRange(l)),r&&r.focus(),o}n.r(t),n.d(t,{default:function(){return r}})}}]);