"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[6899],{3905:function(e,t,a){a.r(t),a.d(t,{MDXContext:function(){return s},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){return function(t){var a=m(t.components);return n.createElement(e,l({},t,{components:a}))}},m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,f=c["".concat(d,".").concat(u)]||c[u]||p[u]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,d[1]=o;for(var s=2;s<l;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},22286:function(e,t,a){var n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLinksCollector=t.createStatefulLinksCollector=t.ProvideLinksCollector=void 0;var r=n(a(67294));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var l=(0,r.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,r.useContext)(l)};t.ProvideLinksCollector=function(e){var t=e.children,a=e.linksCollector;return r.default.createElement(l.Provider,{value:a},t)}},33692:function(e,t,a){var n=a(95318).default,r=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(63366)),d=r(a(67294)),o=a(73727),i=n(a(52263)),s=n(a(13919)),c=n(a(10412)),m=a(22286),u=a(44996),p=a(18780),f=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var h=function(e){var t,a,n=e.isNavLink,r=e.to,h=e.href,g=e.activeClassName,x=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,v=void 0===y||y,N=(0,l.default)(e,f),k=(0,i.default)().siteConfig,w=k.trailingSlash,_=k.baseUrl,C=(0,u.useBaseUrlUtils)().withBaseUrl,P=(0,m.useLinksCollector)(),O=r||h,j=(0,s.default)(O),T=null==O?void 0:O.replace("pathname://",""),B=void 0!==T?(a=T,v&&function(e){return e.startsWith("/")}(a)?C(a):a):void 0;B&&j&&(B=(0,p.applyTrailingSlash)(B,{trailingSlash:w,baseUrl:_}));var S=(0,d.useRef)(!1),A=n?o.NavLink:o.Link,E=c.default.canUseIntersectionObserver,M=(0,d.useRef)();(0,d.useEffect)((function(){return!E&&j&&null!=B&&window.docusaurus.prefetch(B),function(){E&&M.current&&M.current.disconnect()}}),[M,B,E,j]);var D=null!==(t=null==B?void 0:B.startsWith("#"))&&void 0!==t&&t,L=!B||!j||D;return B&&j&&!D&&!b&&P.collectLink(B),L?d.default.createElement("a",Object.assign({href:B},O&&!j&&{target:"_blank",rel:"noopener noreferrer"},N)):d.default.createElement(A,Object.assign({},N,{onMouseEnter:function(){S.current||null==B||(window.docusaurus.preload(B),S.current=!0)},innerRef:function(e){var t,a;E&&e&&j&&(t=e,a=function(){null!=B&&window.docusaurus.prefetch(B)},M.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),a())}))})),M.current.observe(t))},to:B||""},n&&{isActive:x,activeClassName:g}))};t.default=h},13919:function(e,t){function a(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0!==e&&!a(e)},t.hasProtocol=a},44996:function(e,t,a){var n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===t&&(t={});return(0,d().withBaseUrl)(e,t)},t.useBaseUrlUtils=d;var r=n(a(52263)),l=a(13919);function d(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var r=void 0===n?{}:n,d=r.forcePrependBaseUrl,o=void 0!==d&&d,i=r.absolute,s=void 0!==i&&i;if(!a)return a;if(a.startsWith("#"))return a;if((0,l.hasProtocol)(a))return a;if(o)return t+a;var c=a.startsWith(t)?a:t+a.replace(/^\//,"");return s?e+c:c}(n,a,e,t)}}}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var r,l=e.split(/[#?]/)[0],d="/"===l||l===n?l:(r=l,a?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(l,d)}},18780:function(e,t,a){var n=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=a(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(l).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},29301:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),d=(a(44996),a(33692),["components"]),o={id:"ckbaddress",title:"CKB Address"},i=void 0,s={unversionedId:"basics/ckbaddress",id:"basics/ckbaddress",isDocsHomePage:!1,title:"CKB Address",description:"CKB Address Format is an application level cell lock script display recommendation. The lock script consists of three key parameters, including code_hash, hash_type and args. CKB address packages lock script into a single line, verifiable, and human read friendly format.",source:"@site/docs/basics/ckbaddress.md",sourceDirName:"basics",slug:"/basics/ckbaddress",permalink:"/docsite/docs/basics/ckbaddress",editUrl:"https://github.com/xying21/docsite/docs/basics/ckbaddress.md",tags:[],version:"current",lastUpdatedAt:1635849413,formattedLastUpdatedAt:"11/2/2021",frontMatter:{id:"ckbaddress",title:"CKB Address"},sidebar:"sidebar1",previous:{title:"CKB Data Structure",permalink:"/docsite/docs/basics/data-structure"},next:{title:"CKB Accounts and Capacity",permalink:"/docsite/docs/basics/ckbaccount"}},c=[{value:"Data Structure",id:"data-structure",children:[{value:"Payload Format Types",id:"payload-format-types",children:[],level:3},{value:"Short Payload Format",id:"short-payload-format",children:[],level:3},{value:"Full Payload Format",id:"full-payload-format",children:[],level:3}],level:2},{value:"Wrap to Address",id:"wrap-to-address",children:[],level:2},{value:"Examples and Demo Code",id:"examples-and-demo-code",children:[],level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.default)(e,d);return(0,l.mdx)("wrapper",(0,n.default)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,(0,l.mdx)("em",{parentName:"p"},"CKB Address Format")," is an application level cell ",(0,l.mdx)("strong",{parentName:"p"},"lock script")," display recommendation. The lock script consists of three key parameters, including ",(0,l.mdx)("em",{parentName:"p"},"code_hash"),", ",(0,l.mdx)("em",{parentName:"p"},"hash_type")," and ",(0,l.mdx)("em",{parentName:"p"},"args"),". CKB address packages lock script into a single line, verifiable, and human read friendly format."),(0,l.mdx)("h2",{id:"data-structure"},"Data Structure"),(0,l.mdx)("h3",{id:"payload-format-types"},"Payload Format Types"),(0,l.mdx)("p",null,"To generate a CKB address, we firstly encode lock script to bytes array, name ",(0,l.mdx)("em",{parentName:"p"},"payload"),". And secondly, we wrap the payload into final address format."),(0,l.mdx)("p",null,"There are several methods to convert lock script into payload bytes array. We use 1 byte to identify the payload format."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"center"},"format type"),(0,l.mdx)("th",{parentName:"tr",align:null},"description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"center"},"0x01"),(0,l.mdx)("td",{parentName:"tr",align:null},"short version for locks with popular code_hash")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"center"},"0x02"),(0,l.mdx)("td",{parentName:"tr",align:null},'full version with hash_type = "Data"')),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"center"},"0x04"),(0,l.mdx)("td",{parentName:"tr",align:null},'full version with hash_type = "Type"')))),(0,l.mdx)("h3",{id:"short-payload-format"},"Short Payload Format"),(0,l.mdx)("p",null,"Short payload format is a compact format which identifies common used code_hash by 1 byte code_hash_index instead of 32 bytes code_hash."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-c"},"payload = 0x01 | code_hash_index | args\n")),(0,l.mdx)("p",null,"To translate payload to lock script, one can convert code_hash_index to code_hash and hash_type with the following ",(0,l.mdx)("em",{parentName:"p"},"popular code_hash table"),". And args as the args."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:"center"},"code_hash_index"),(0,l.mdx)("th",{parentName:"tr",align:null},"code_hash"),(0,l.mdx)("th",{parentName:"tr",align:"center"},"hash_type"),(0,l.mdx)("th",{parentName:"tr",align:null},"args"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"center"},"0x00"),(0,l.mdx)("td",{parentName:"tr",align:null},"SECP256K1 + blake160"),(0,l.mdx)("td",{parentName:"tr",align:"center"},"Type"),(0,l.mdx)("td",{parentName:"tr",align:null},"blake160(PK)*")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:"center"},"0x01"),(0,l.mdx)("td",{parentName:"tr",align:null},"SECP256K1 + multisig"),(0,l.mdx)("td",{parentName:"tr",align:"center"},"Type"),(0,l.mdx)("td",{parentName:"tr",align:null},"multisig script hash**")))),(0,l.mdx)("p",null,"*"," The blake160 here means the leading 20 bytes truncation of Blake2b hash result."),(0,l.mdx)("p",null,"*","*"," The ",(0,l.mdx)("em",{parentName:"p"},"multisig script hash")," is the 20 bytes blake160 hash of multisig script. The multisig script should be assembled in the following format:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"S | R | M | N | blake160(Pubkey1) | blake160(Pubkey2) | ...\n")),(0,l.mdx)("p",null,"Where S/R/M/N are four single byte unsigned integers, ranging from 0 to 255, and blake160(Pubkey1) it the first 160bit blake2b hash of SECP256K1 compressed public keys. S is format version, currently fixed to 0. M/N means the user must provide M of N signatures to unlock the cell. And R means the provided signatures at least match the first R items of the Pubkey list."),(0,l.mdx)("p",null,'For example, Alice, Bob, and Cipher collectively control a multisig locked cell. They define the unlock rule like "any two of us can unlock the cell, but Cipher must approve". The corresponding multisig script is:'),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"0 | 1 | 2 | 3 | Pk_Cipher_h | Pk_Alice_h | Pk_Bob_h\n")),(0,l.mdx)("h3",{id:"full-payload-format"},"Full Payload Format"),(0,l.mdx)("p",null,"Full payload format directly encodes all data field of lock script."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-c"},"payload = 0x02/0x04 | code_hash | args\n")),(0,l.mdx)("p",null,'The first byte identifies the lock script\'s hash_type, 0x02 for "Data", 0x04 for "Type".'),(0,l.mdx)("h2",{id:"wrap-to-address"},"Wrap to Address"),(0,l.mdx)("p",null,"We follow ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki"},"Bitcoin base32 address format (BIP-173)")," rules to wrap payload into address, which uses Bech32 encoding and a ",(0,l.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BCH_code"},"BCH checksum"),"."),(0,l.mdx)("p",null,"The original version of Bech32 allows at most 90 characters long. Similar with ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/lightningnetwork/lightning-rfc/blob/master/11-payment-encoding.md"},"BOLT"),", we simply remove the length limit. The error correction function is disabled when the Bech32 string is longer than 90. We don't intent to use this function anyway, because there is a risk to get wrong correction result."),(0,l.mdx)("p",null,"A Bech32 string consists of the ",(0,l.mdx)("strong",{parentName:"p"},"human-readable part"),", the ",(0,l.mdx)("strong",{parentName:"p"},"separator"),", and the ",(0,l.mdx)("strong",{parentName:"p"},"data part"),". The last 6 characters of data part is checksum. The data part is base32 encoded. Here is the readable translation of base32 encoding table."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null}),(0,l.mdx)("th",{parentName:"tr",align:null},"0"),(0,l.mdx)("th",{parentName:"tr",align:null},"1"),(0,l.mdx)("th",{parentName:"tr",align:null},"2"),(0,l.mdx)("th",{parentName:"tr",align:null},"3"),(0,l.mdx)("th",{parentName:"tr",align:null},"4"),(0,l.mdx)("th",{parentName:"tr",align:null},"5"),(0,l.mdx)("th",{parentName:"tr",align:null},"6"),(0,l.mdx)("th",{parentName:"tr",align:null},"7"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"+0")),(0,l.mdx)("td",{parentName:"tr",align:null},"q"),(0,l.mdx)("td",{parentName:"tr",align:null},"p"),(0,l.mdx)("td",{parentName:"tr",align:null},"z"),(0,l.mdx)("td",{parentName:"tr",align:null},"r"),(0,l.mdx)("td",{parentName:"tr",align:null},"y"),(0,l.mdx)("td",{parentName:"tr",align:null},"9"),(0,l.mdx)("td",{parentName:"tr",align:null},"x"),(0,l.mdx)("td",{parentName:"tr",align:null},"8")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"+8")),(0,l.mdx)("td",{parentName:"tr",align:null},"g"),(0,l.mdx)("td",{parentName:"tr",align:null},"f"),(0,l.mdx)("td",{parentName:"tr",align:null},"2"),(0,l.mdx)("td",{parentName:"tr",align:null},"t"),(0,l.mdx)("td",{parentName:"tr",align:null},"v"),(0,l.mdx)("td",{parentName:"tr",align:null},"d"),(0,l.mdx)("td",{parentName:"tr",align:null},"w"),(0,l.mdx)("td",{parentName:"tr",align:null},"0")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"+16")),(0,l.mdx)("td",{parentName:"tr",align:null},"s"),(0,l.mdx)("td",{parentName:"tr",align:null},"3"),(0,l.mdx)("td",{parentName:"tr",align:null},"j"),(0,l.mdx)("td",{parentName:"tr",align:null},"n"),(0,l.mdx)("td",{parentName:"tr",align:null},"5"),(0,l.mdx)("td",{parentName:"tr",align:null},"4"),(0,l.mdx)("td",{parentName:"tr",align:null},"k"),(0,l.mdx)("td",{parentName:"tr",align:null},"h")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("strong",{parentName:"td"},"+24")),(0,l.mdx)("td",{parentName:"tr",align:null},"c"),(0,l.mdx)("td",{parentName:"tr",align:null},"e"),(0,l.mdx)("td",{parentName:"tr",align:null},"6"),(0,l.mdx)("td",{parentName:"tr",align:null},"m"),(0,l.mdx)("td",{parentName:"tr",align:null},"u"),(0,l.mdx)("td",{parentName:"tr",align:null},"a"),(0,l.mdx)("td",{parentName:"tr",align:null},"7"),(0,l.mdx)("td",{parentName:"tr",align:null},"l")))),(0,l.mdx)("p",null,'The human-readable part is "',(0,l.mdx)("strong",{parentName:"p"},"ckb"),'" for CKB mainnet, and "',(0,l.mdx)("strong",{parentName:"p"},"ckt"),'" for the testnet. The separator is always "1".'),(0,l.mdx)("h2",{id:"examples-and-demo-code"},"Examples and Demo Code"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-yml"},"== short address (code_hash_index = 0x00) test ==\nargs to encode:          b39bbc0b3673c7d36450bc14cfcdad2d559c6c64\naddress generated:       ckb1qyqt8xaupvm8837nv3gtc9x0ekkj64vud3jqfwyw5v\n\n== short address (code_hash_index = 0x01) test ==\nmulti sign script:       00 | 01 | 02 | 03 | bd07d9f32bce34d27152a6a0391d324f79aab854 | 094ee28566dff02a012a66505822a2fd67d668fb | 4643c241e59e81b7876527ebff23dfb24cf16482\nargs to encode:          4fb2be2e5d0c1a3b8694f832350a33c1685d477a\naddress generated:       ckb1qyq5lv479ewscx3ms620sv34pgeuz6zagaaqklhtgg\n\n== full address test ==\ncode_hash to encode:     9bd7e06f3ecf4be0f2fcd2188b23f1b9fcc88e5d4b65a8637b17723bbda3cce8\nwith args to encode:     b39bbc0b3673c7d36450bc14cfcdad2d559c6c64\nfull address generated:  ckb1qjda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xw3vumhs9nvu786dj9p0q5elx66t24n3kxgj53qks\n")),(0,l.mdx)("p",null,"Demo code: ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/CipherWang/ckb-address-demo"},"https://github.com/CipherWang/ckb-address-demo")))}u.isMDXComponent=!0}}]);