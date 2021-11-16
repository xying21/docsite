"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[9514,6035,5640],{4071:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(67294)),r=l(a(86010)),u=a(29052),d=l(a(67862)),i=a(86700);function c(){var e=(0,o.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var s=function(){var e,t=(0,o.useState)(!1),a=t[0],l=t[1],n=(0,o.useRef)(!1),s=c(),f=s.smoothScrollTop,m=s.cancelScrollToTop;return(0,i.useScrollPosition)((function(e,t){var a=e.scrollY,o=null==t?void 0:t.scrollY;if(o)if(n.current)n.current=!1;else{var r=a<o;if(r||m(),a<300)l(!1);else if(r){var u=document.documentElement.scrollHeight;a+window.innerHeight<u&&l(!0)}else l(!1)}})),(0,i.useLocationChange)((function(e){e.location.hash&&(n.current=!0,l(!1))})),o.default.createElement("button",{"aria-label":(0,u.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.default)("clean-btn",i.ThemeClassNames.common.backToTopButton,d.default.backToTopButton,(e={},e[d.default.backToTopButtonShow]=a,e)),type:"button",onClick:function(){return f()}})};t.default=s},79889:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(67294)),r=a(3905),u=l(a(46291)),d=l(a(98532)),i=l(a(64396)),c=l(a(73491)),s=l(a(24608)),f=l(a(34096)),m=l(a(4071)),b=a(28143),h=a(29052),p=l(a(86010)),v=l(a(67959)),E=a(86700),C=l(a(35742));function g(e){var t,a,l,n=e.currentDocRoute,u=e.versionMetadata,s=e.children,b=u.pluginId,C=u.version,g=n.sidebar,S=g?u.docsSidebars[g]:void 0,k=(0,o.useState)(!1),_=k[0],T=k[1],N=(0,o.useState)(!1),I=N[0],P=N[1],y=(0,o.useCallback)((function(){I&&P(!1),T((function(e){return!e}))}),[I]);return o.default.createElement(d.default,{wrapperClassName:E.ThemeClassNames.wrapper.docsPages,pageClassName:E.ThemeClassNames.page.docsDocPage,searchMetadatas:{version:C,tag:(0,E.docVersionSearchTag)(b,C)}},o.default.createElement("div",{className:v.default.docPage},o.default.createElement(m.default,null),S&&o.default.createElement("aside",{className:(0,p.default)(v.default.docSidebarContainer,(t={},t[v.default.docSidebarContainerHidden]=_,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(v.default.docSidebarContainer)&&_&&P(!0)}},o.default.createElement(i.default,{key:g,sidebar:S,path:n.path,onCollapse:y,isHidden:I}),I&&o.default.createElement("div",{className:v.default.collapsedDocSidebar,title:(0,h.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:y,onClick:y},o.default.createElement(f.default,{className:v.default.expandSidebarButtonIcon}))),o.default.createElement("main",{className:(0,p.default)(v.default.docMainContainer,(a={},a[v.default.docMainContainerEnhanced]=_||!S,a))},o.default.createElement("div",{className:(0,p.default)("container padding-top--md padding-bottom--lg",v.default.docItemWrapper,(l={},l[v.default.docItemWrapperEnhanced]=_,l))},o.default.createElement(r.MDXProvider,{components:c.default},s)))))}var S=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,n=t.find((function(e){return(0,b.matchPath)(l.pathname,e)}));return n?o.default.createElement(o.default.Fragment,null,o.default.createElement(C.default,null,o.default.createElement("html",{className:a.className})),o.default.createElement(g,{currentDocRoute:n,versionMetadata:a},(0,u.default)(t,{versionMetadata:a}))):o.default.createElement(s.default,e)};t.default=S},58218:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.DocSidebarItems=void 0,t.default=g;var o=l(a(87462)),r=l(a(63366)),u=n(a(67294)),d=l(a(86010)),i=a(86700),c=l(a(33692)),s=l(a(13919)),f=l(a(86891)),m=l(a(72353)),b=["items"],h=["item"],p=["item","onItemClick","activePath","level"],v=["item","onItemClick","activePath","level"],E=function e(t,a){return"link"===t.type?(0,i.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},C=(0,u.memo)((function(e){var t=e.items,a=(0,r.default)(e,b);return u.default.createElement(u.default.Fragment,null,t.map((function(e,t){return u.default.createElement(g,(0,o.default)({key:t,item:e},a))})))}));function g(e){var t=e.item,a=(0,r.default)(e,h);return"category"===t.type?0===t.items.length?null:u.default.createElement(S,(0,o.default)({item:t},a)):u.default.createElement(k,(0,o.default)({item:t},a))}function S(e){var t,a=e.item,l=e.onItemClick,n=e.activePath,c=e.level,s=(0,r.default)(e,p),f=a.items,b=a.label,h=a.collapsible,v=a.className,g=E(a,n),S=(0,i.useCollapsible)({initialState:function(){return!!h&&(!g&&a.collapsed)}}),k=S.collapsed,_=S.setCollapsed,T=S.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,n=(0,i.usePrevious)(t);(0,u.useEffect)((function(){t&&!n&&a&&l(!1)}),[t,n,a,l])}({isActive:g,collapsed:k,setCollapsed:_}),u.default.createElement("li",{className:(0,d.default)(i.ThemeClassNames.docs.docSidebarItemCategory,i.ThemeClassNames.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},v)},u.default.createElement("a",(0,o.default)({className:(0,d.default)("menu__link",(t={"menu__link--sublist":h,"menu__link--active":h&&g},t[m.default.menuLinkText]=!h,t)),onClick:h?function(e){e.preventDefault(),T()}:void 0,href:h?"#":void 0},s),b),u.default.createElement(i.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},u.default.createElement(C,{items:f,tabIndex:k?-1:0,onItemClick:l,activePath:n,level:c+1})))}function k(e){var t=e.item,a=e.onItemClick,l=e.activePath,n=e.level,m=(0,r.default)(e,v),b=t.href,h=t.label,p=t.className,C=E(t,l);return u.default.createElement("li",{className:(0,d.default)(i.ThemeClassNames.docs.docSidebarItemLink,i.ThemeClassNames.docs.docSidebarItemLinkLevel(n),"menu__list-item",p),key:h},u.default.createElement(c.default,(0,o.default)({className:(0,d.default)("menu__link",{"menu__link--active":C}),"aria-current":C?"page":void 0,to:b},(0,s.default)(b)&&{onClick:a},m),(0,s.default)(b)?h:u.default.createElement("span",null,h,u.default.createElement(f.default,null))))}t.DocSidebarItems=C},64396:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,d.default)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement(E,e),l&&o.default.createElement(C,e))};var o=n(a(67294)),r=l(a(86010)),u=a(86700),d=l(a(93783)),i=l(a(55537)),c=l(a(34096)),s=a(29052),f=a(58218),m=l(a(43698));function b(e){var t=e.onClick;return o.default.createElement("button",{type:"button",title:(0,s.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,s.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.default)("button button--secondary button--outline",m.default.collapseSidebarButton),onClick:t},o.default.createElement(c.default,{className:m.default.collapseSidebarButtonIcon}))}function h(e){var t,a,l=e.path,n=e.sidebar,d=e.onCollapse,c=e.isHidden,s=function(){var e=(0,u.useAnnouncementBar)().isActive,t=(0,o.useState)(e),a=t[0],l=t[1];return(0,u.useScrollPosition)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),h=(0,u.useThemeConfig)(),p=h.navbar.hideOnScroll,v=h.hideableSidebar;return o.default.createElement("div",{className:(0,r.default)(m.default.sidebar,(t={},t[m.default.sidebarWithHideableNavbar]=p,t[m.default.sidebarHidden]=c,t))},p&&o.default.createElement(i.default,{tabIndex:-1,className:m.default.sidebarLogo}),o.default.createElement("nav",{className:(0,r.default)("menu thin-scrollbar",m.default.menu,(a={},a[m.default.menuWithAnnouncementBar]=s,a))},o.default.createElement("ul",{className:(0,r.default)(u.ThemeClassNames.docs.docSidebarMenu,"menu__list")},o.default.createElement(f.DocSidebarItems,{items:n,activePath:l,level:1}))),v&&o.default.createElement(b,{onClick:d}))}var p=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return o.default.createElement("ul",{className:(0,r.default)(u.ThemeClassNames.docs.docSidebarMenu,"menu__list")},o.default.createElement(f.DocSidebarItems,{items:a,activePath:l,onItemClick:function(){return t()},level:1}))};function v(e){return o.default.createElement(u.MobileSecondaryMenuFiller,{component:p,props:e})}var E=o.default.memo(h),C=o.default.memo(v)},34096:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(87462)),o=l(a(67294)),r=function(e){return o.default.createElement("svg",(0,n.default)({width:"20",height:"20","aria-hidden":"true"},e),o.default.createElement("g",{fill:"#7a7a7a"},o.default.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),o.default.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))};t.default=r},24608:function(e,t,a){var l=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(67294)),r=n(a(98532)),u=l(a(29052));var d=function(){return o.default.createElement(r.default,{title:(0,u.translate)({id:"theme.NotFound.title",message:"Page Not Found"})},o.default.createElement("main",{className:"container margin-vert--xl"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col col--6 col--offset-3"},o.default.createElement("h1",{className:"hero__title"},o.default.createElement(u.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.default.createElement("p",null,o.default.createElement(u.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.default.createElement("p",null,o.default.createElement(u.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))};t.default=d},6979:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(87462)),r=l(a(63366)),u=n(a(67294)),d=a(73935),i=l(a(52263)),c=a(28143),s=a(44996),f=l(a(33692)),m=l(a(35742)),b=l(a(6397)),h=a(67949),p=l(a(46839)),v=["contextualSearch"],E=null;function C(e){var t=e.hit,a=e.children;return u.default.createElement(f.default,{to:t.url},a)}function g(e){var t=e.state,a=e.onClose,l=(0,b.default)().generateSearchPageLink;return u.default.createElement(f.default,{to:l(t.query),onClick:a},"See all ",t.context.nbHits," results")}function S(e){var t,l,n=e.contextualSearch,f=(0,r.default)(e,v),b=(0,i.default)().siteMetadata,S=(0,p.default)(),k=null!=(t=null==(l=f.searchParameters)?void 0:l.facetFilters)?t:[],_=n?[].concat(S,k):k,T=Object.assign({},f.searchParameters,{facetFilters:_}),N=(0,s.useBaseUrlUtils)().withBaseUrl,I=(0,c.useHistory)(),P=(0,u.useRef)(null),y=(0,u.useState)(!1),M=y[0],B=y[1],w=(0,u.useState)(null),A=w[0],x=w[1],F=(0,u.useCallback)((function(){return E?Promise.resolve():Promise.all([a.e(4483).then(a.bind(a,84483)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;E=t}))}),[]),L=(0,u.useCallback)((function(){F().then((function(){B(!0)}))}),[F,B]),O=(0,u.useCallback)((function(){B(!1)}),[B]),D=(0,u.useCallback)((function(e){F().then((function(){B(!0),x(e.key)}))}),[F,B,x]),H=(0,u.useRef)({navigate:function(e){var t=e.itemUrl;I.push(t)}}).current,R=(0,u.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:N(""+t.pathname+t.hash)})}))})).current,W=(0,u.useMemo)((function(){return function(e){return u.default.createElement(g,(0,o.default)({},e,{onClose:O}))}}),[O]),j=(0,u.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",b.docusaurusVersion),e}),[b.docusaurusVersion]);return(0,h.useDocSearchKeyboardEvents)({isOpen:M,onOpen:L,onClose:O,onInput:D,searchButtonRef:P}),u.default.createElement(u.default.Fragment,null,u.default.createElement(m.default,null,u.default.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),u.default.createElement(h.DocSearchButton,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:L,ref:P}),M&&(0,d.createPortal)(u.default.createElement(E,(0,o.default)({onClose:O,initialScrollY:window.scrollY,initialQuery:A,navigator:H,transformItems:R,hitComponent:C,resultsFooterComponent:W,transformSearchClient:j},f,{searchParameters:T})),document.body))}var k=function(){var e=(0,i.default)().siteConfig;return u.default.createElement(S,e.themeConfig.algolia)};t.default=k},67862:function(e,t,a){a.r(t),t.default={backToTopButton:"backToTopButton_i9tI",backToTopButtonShow:"backToTopButtonShow_wCmF"}},67959:function(e,t,a){a.r(t),t.default={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"}},72353:function(e,t,a){a.r(t),t.default={menuLinkText:"menuLinkText_OKON"}},43698:function(e,t,a){a.r(t),t.default={sidebar:"sidebar_a3j0",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_VlPv",sidebarHidden:"sidebarHidden_OqfG",sidebarLogo:"sidebarLogo_hmkv",menu:"menu_cyFh",menuWithAnnouncementBar:"menuWithAnnouncementBar_+O1J",collapseSidebarButton:"collapseSidebarButton_eoK2",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_e+kA",sidebarMenuIcon:"sidebarMenuIcon_iZzd",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_6kU2"}}}]);