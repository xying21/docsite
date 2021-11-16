"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[2684,7484],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return v},useMDXComponents:function(){return c},withMDXComponents:function(){return d}});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),d=function(e){return function(t){var n=c(t.components);return l.createElement(e,o({},t,{components:n}))}},c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,p=d["".concat(a,".").concat(m)]||d[m]||f[m]||o;return n?l.createElement(p,u(u({ref:t},s),{},{components:n})):l.createElement(p,u({ref:t},s))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22286:function(e,t,n){var l=n(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useLinksCollector=t.createStatefulLinksCollector=t.ProvideLinksCollector=void 0;var r=l(n(67294));t.createStatefulLinksCollector=function(){var e=new Set;return{collectLink:function(t){e.add(t)},getCollectedLinks:function(){return[].concat(e)}}};var o=(0,r.createContext)({collectLink:function(){}});t.useLinksCollector=function(){return(0,r.useContext)(o)};t.ProvideLinksCollector=function(e){var t=e.children,n=e.linksCollector;return r.default.createElement(o.Provider,{value:n},t)}},33692:function(e,t,n){var l=n(95318).default,r=n(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n(63366)),a=r(n(67294)),u=n(73727),i=l(n(52263)),s=l(n(13919)),d=l(n(10412)),c=n(22286),m=n(44996),f=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,l=e.isNavLink,r=e.to,v=e.href,h=e.activeClassName,b=e.isActive,y=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,x=void 0===g||g,w=(0,o.default)(e,p),k=(0,i.default)().siteConfig,O=k.trailingSlash,T=k.baseUrl,j=(0,m.useBaseUrlUtils)().withBaseUrl,C=(0,c.useLinksCollector)(),P=r||v,N=(0,s.default)(P),S=null==P?void 0:P.replace("pathname://",""),L=void 0!==S?(n=S,x&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0;L&&N&&(L=(0,f.applyTrailingSlash)(L,{trailingSlash:O,baseUrl:T}));var E=(0,a.useRef)(!1),I=l?u.NavLink:u.Link,U=d.default.canUseIntersectionObserver,_=(0,a.useRef)();(0,a.useEffect)((function(){return!U&&N&&null!=L&&window.docusaurus.prefetch(L),function(){U&&_.current&&_.current.disconnect()}}),[_,L,U,N]);var D=null!==(t=null==L?void 0:L.startsWith("#"))&&void 0!==t&&t,M=!L||!N||D;return L&&N&&!D&&!y&&C.collectLink(L),M?a.default.createElement("a",Object.assign({href:L},P&&!N&&{target:"_blank",rel:"noopener noreferrer"},w)):a.default.createElement(I,Object.assign({},w,{onMouseEnter:function(){E.current||null==L||(window.docusaurus.preload(L),E.current=!0)},innerRef:function(e){var t,n;U&&e&&N&&(t=e,n=function(){null!=L&&window.docusaurus.prefetch(L)},_.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.current.unobserve(t),_.current.disconnect(),n())}))})),_.current.observe(t))},to:L||""},l&&{isActive:b,activeClassName:h}))};t.default=v},13919:function(e,t){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return void 0!==e&&!n(e)},t.hasProtocol=n},44996:function(e,t,n){var l=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){void 0===t&&(t={});return(0,a().withBaseUrl)(e,t)},t.useBaseUrlUtils=a;var r=l(n(52263)),o=n(13919);function a(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,l){var r=void 0===l?{}:l,a=r.forcePrependBaseUrl,u=void 0!==a&&a,i=r.absolute,s=void 0!==i&&i;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.hasProtocol)(n))return n;if(u)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+d:d}(l,n,e,t)}}}},58215:function(e,t,n){var l=n(95318).default;t.Z=void 0;var r=l(n(67294));var o=function(e){var t=e.children,n=e.hidden,l=e.className;return r.default.createElement("div",{role:"tabpanel",hidden:n,className:l},t)};t.Z=o},10279:function(e,t,n){var l=n(20862).default,r=n(95318).default;t.Z=function(e){var t=(0,u.default)();return a.default.createElement(m,(0,o.default)({key:String(t)},e))};var o=r(n(87462)),a=l(n(67294)),u=r(n(72389)),i=r(n(80944)),s=n(86700),d=r(n(86010)),c=r(n(13693));function m(e){var t,n,l,r=e.lazy,o=e.block,u=e.defaultValue,m=e.values,f=e.groupId,p=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,s.duplicates)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===u?u:null!=(t=null!=u?u:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.default)(),x=g.tabGroupChoices,w=g.setTabGroupChoices,k=(0,a.useState)(y),O=k[0],T=k[1],j=[],C=(0,s.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=x[f];null!=P&&P!==O&&h.some((function(e){return e.value===P}))&&T(P)}var N=function(e){var t=e.currentTarget,n=j.indexOf(t),l=h[n].value;l!==O&&(C(t),T(l),null!=f&&w(f,l))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=j.indexOf(e.currentTarget)+1;n=j[l]||j[0];break;case"ArrowLeft":var r=j.indexOf(e.currentTarget)-1;n=j[r]||j[j.length-1]}null==(t=n)||t.focus()};return a.default.createElement("div",{className:"tabs-container"},a.default.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.default)("tabs",{"tabs--block":o},p)},h.map((function(e){var t=e.value,n=e.label;return a.default.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,d.default)("tabs__item",c.default.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:S,onFocus:N,onClick:N},null!=n?n:t)}))),r?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.default.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},79443:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=(0,n(67294).createContext)(void 0);t.default=l},80944:function(e,t,n){var l=n(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(67294),o=l(n(79443));var a=function(){var e=(0,r.useContext)(o.default);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};t.default=a},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,l=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var r,o=e.split(/[#?]/)[0],a="/"===o||o===l?o:(r=o,n?function(e){return e.endsWith("/")?e:e+"/"}(r):function(e){return e.endsWith("/")?e.slice(0,-1):e}(r));return e.replace(o,a)}},18780:function(e,t,n){var l=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var r=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return l(r).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return l(o).default}})},29964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},57690:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),a=(n(44996),n(33692),n(10279)),u=n(58215),i=["components"],s={id:"tutorial-hellolumos-setupsystem",title:"Set Up Development Stacks"},d=void 0,c={unversionedId:"develop/tutorial-hellolumos-setupsystem",id:"develop/tutorial-hellolumos-setupsystem",isDocsHomePage:!1,title:"Set Up Development Stacks",description:"This guide will help you set up your system for building DApps with Lumos. If you already have everything installed, feel free to read the other guides, and walk through the examples to learn the usage of Lumos.",source:"@site/docs/develop/tutorial-hellolumos-setupsystem.md",sourceDirName:"develop",slug:"/develop/tutorial-hellolumos-setupsystem",permalink:"/docsite/docs/develop/tutorial-hellolumos-setupsystem",editUrl:"https://github.com/xying21/docsite/docs/develop/tutorial-hellolumos-setupsystem.md",tags:[],version:"current",lastUpdatedAt:1636371416,formattedLastUpdatedAt:"11/8/2021",frontMatter:{id:"tutorial-hellolumos-setupsystem",title:"Set Up Development Stacks"},sidebar:"sidebar2",previous:{title:"Transactions",permalink:"/docsite/docs/develop/tutorial-zero2ckb-transaction"},next:{title:"Hello Lumos",permalink:"/docsite/docs/develop/tutorial-hellolumos"}},m=[{value:"System Requirements",id:"system-requirements",children:[],level:2},{value:"Install Node.js",id:"install-nodejs",children:[],level:2},{value:"Install Yarn",id:"install-yarn",children:[],level:2},{value:"Install Dependencies for node-gyp",id:"install-dependencies-for-node-gyp",children:[],level:2}],f={toc:m};function p(e){var t=e.components,n=(0,r.default)(e,i);return(0,o.mdx)("wrapper",(0,l.default)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This guide will help you set up your system for building DApps with Lumos. If you already have everything installed, feel free to read the other guides, and walk through the examples to learn the usage of Lumos."),(0,o.mdx)("h2",{id:"system-requirements"},"System Requirements"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Operating System:  CKB DApps can be developed upon Lumos on all major platforms, including Linux, Windows, and macOS."),(0,o.mdx)("li",{parentName:"ul"},"JavaScript runtime environment: ",(0,o.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," LTS Version (>=12)"),(0,o.mdx)("li",{parentName:"ul"},"Development tools to build native addons: GCC and make"),(0,o.mdx)("li",{parentName:"ul"},"JavaScript package manager: Yarn or npm")),(0,o.mdx)("h2",{id:"install-nodejs"},"Install Node.js"),(0,o.mdx)("p",null,"Node.js is the runtime environment that must be installed on the system before using Lumos. The following sections explain the easiest way to install the Long Term Supported (LTS) version of Node.js on Ubuntu Linux 20.04, macOS, and Windows 10."),(0,o.mdx)(a.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS and Windows 10",value:"macoswin"}],mdxType:"Tabs"},(0,o.mdx)(u.Z,{value:"ubuntu",mdxType:"TabItem"},(0,o.mdx)("p",null,"Install Node.js with Apt by Using a NodeSource PPA:"),(0,o.mdx)("p",null,"The following commands installs Node.js 14.x."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"$ curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh\n$ sudo apt install nodejs\n"))),(0,o.mdx)(u.Z,{value:"macoswin",mdxType:"TabItem"},"Download and install ",(0,o.mdx)("a",{href:"https://nodejs.org/en/"},"the LTS version")," that is Recommended For Most Users.")),(0,o.mdx)("h2",{id:"install-yarn"},"Install Yarn"),(0,o.mdx)("p",null,"It is recommended to install Yarn through the NPM package manager, which comes bundled with ",(0,o.mdx)("a",{parentName:"p",href:"https://nodejs.org/"},"Node.js")," when it is installed on the system."),(0,o.mdx)("p",null,"To install Yarn through NPM:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install --global yarn\n")),(0,o.mdx)("h2",{id:"install-dependencies-for-node-gyp"},"Install Dependencies for node-gyp"),(0,o.mdx)("p",null,"Lumos relies on ",(0,o.mdx)("strong",{parentName:"p"},"node-gyp"),", a cross-platform command-line tool for compiling native addon modules for ",(0,o.mdx)("em",{parentName:"p"},"Node"),".js. "),(0,o.mdx)("p",null,"node-gyp has a few additional system requirements and dependencies that have different installation steps on different operating systems."),(0,o.mdx)(a.Z,{defaultValue:"ubuntu",values:[{label:"Ubuntu 20.04",value:"ubuntu"},{label:"macOS",value:"macos"},{label:"Windows 10",value:"windows"}],mdxType:"Tabs"},(0,o.mdx)(u.Z,{value:"ubuntu",mdxType:"TabItem"},"The development dependencies for Ubuntu 20.04 LTS are as follows:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Python v3.6, v3.7, v3.8, or v3.9 (Ubuntu 20.04 and other versions of Debian Linux ship with Python 3 pre-installed)"),(0,o.mdx)("li",null,"make"),(0,o.mdx)("li",null,"A proper C/C++ compiler toolchain, like ",(0,o.mdx)("a",{href:"https://gcc.gnu.org/"},"GCC"))),(0,o.mdx)("p",null,"To install ",(0,o.mdx)("code",null,"GCC")," and ",(0,o.mdx)("code",null,"make")," on Ubuntu 20.04, run the following command as root or user with sudo privileges:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"$ sudo apt update\n$ sudo apt install build-essential\n"))),(0,o.mdx)(u.Z,{value:"macos",mdxType:"TabItem"},"The development dependencies for macOS are as follows:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Python v3.6, v3.7, v3.8, or v3.9"),(0,o.mdx)("li",null,(0,o.mdx)("a",{href:"https://developer.apple.com/xcode/download/"},"Xcode")," and Xcode command line tools"))),(0,o.mdx)(u.Z,{value:"windows",mdxType:"TabItem"},"The development dependencies for Windows are as follows:",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"The current version of Python."),(0,o.mdx)("li",null,"Visual C++ Build Environment")),(0,o.mdx)("b",null,"Installation Options"),(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Option 1: Install all the required tools and configurations using Microsoft's windows-build-tools by running ",(0,o.mdx)("code",null,"npm install -g windows-build-tools -vs2019")," from an elevated PowerShell (run as Administrator).",(0,o.mdx)("p",null,(0,o.mdx)("b",null,"Note"),": This command installs all the system dependencies without conflicting with any software already installed on the system. Depending on the build tools' version, the installation requires 3 to 8 gigabytes space to get all dependencies installed. It can take at least 30 minutes depending on the network connection.")),(0,o.mdx)("li",null,"Option 2: Install dependencies and configure the tools manually.",(0,o.mdx)("ul",null,(0,o.mdx)("li",null,"Install Visual C++ Build Environment: Tools for Visual Studio 2019 -> ",(0,o.mdx)("a",{href:"https://visualstudio.microsoft.com/downloads/"},(0,o.mdx)("i",{class:"feather icon-download"}),"Visual Studio 2019 Build Tools"),' (using "Visual C++ build tools" workload) and run ',(0,o.mdx)("code",null,"npm config set msvs_version 2019")," in a cmd terminal."),(0,o.mdx)("li",null,"Install the current version of Python from the ",(0,o.mdx)("a",{href:"https://docs.python.org/3/using/windows.html#the-microsoft-store-package"},"Microsoft Store package"),", and run ",(0,o.mdx)("code",null,"npm config set python /path/to/python"),".")))))),"For more information, see the instructions of ",(0,o.mdx)("a",{href:"https://github.com/nodejs/node-gyp"},"node-gyp"),".")}p.isMDXComponent=!0},13693:function(e,t,n){n.r(t),t.default={tabItem:"tabItem_vU9c"}}}]);