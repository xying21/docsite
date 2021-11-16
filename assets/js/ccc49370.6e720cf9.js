"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[6103,5640],{2193:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(63366)),r=l(a(67294)),u=l(a(86010)),i=l(a(98532)),o=l(a(61238)),d=["sidebar","toc","children"];var s=function(e){var t=e.sidebar,a=e.toc,l=e.children,s=(0,n.default)(e,d),c=t&&t.items.length>0;return r.default.createElement(i.default,s,r.default.createElement("div",{className:"container margin-vert--lg"},r.default.createElement("div",{className:"row"},c&&r.default.createElement("aside",{className:"col col--3"},r.default.createElement(o.default,{sidebar:t})),r.default.createElement("main",{className:(0,u.default)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},l),a&&r.default.createElement("div",{className:"col col--2"},a))))};t.default=s},21746:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),r=l(a(33692)),u=l(a(11272));var i=function(e){var t=e.author,a=t.name,l=t.title,i=t.url,o=t.imageURL;return n.default.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.default.createElement(r.default,{className:"avatar__photo-link avatar__photo",href:i},n.default.createElement("img",{className:u.default.image,src:o,alt:a})),a&&n.default.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.default.createElement("div",{className:"avatar__name"},n.default.createElement(r.default,{href:i,itemProp:"url"},n.default.createElement("span",{itemProp:"name"},a))),l&&n.default.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))};t.default=i},47070:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.authors,a=e.assets;if(0===t.length)return n.default.createElement(n.default.Fragment,null);return n.default.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.default.createElement("div",{className:(0,r.default)("col col--6",i.default.authorCol),key:t},n.default.createElement(u.default,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))};var n=l(a(67294)),r=l(a(86010)),u=l(a(21746)),i=l(a(29364))},45125:function(e,t,a){var l=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),u=n(a(86010)),i=a(3905),o=l(a(29052)),d=n(a(33692)),s=a(44996),c=a(86700),m=n(a(73491)),f=n(a(14992)),g=n(a(46327)),v=n(a(79834)),p=n(a(47070));var b=function(e){var t,a,l,n,b=(l=(0,c.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return l(t,(0,o.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,s.useBaseUrlUtils)().withBaseUrl,E=e.children,_=e.frontMatter,N=e.assets,P=e.metadata,k=e.truncated,C=e.isBlogPostPage,y=void 0!==C&&C,T=P.date,L=P.formattedDate,I=P.permalink,O=P.tags,M=P.readingTime,w=P.title,x=P.editUrl,j=P.authors,S=null!=(t=N.image)?t:_.image,F=!y&&k,B=O.length>0;return r.default.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(n=y?"h1":"h2",r.default.createElement("header",null,r.default.createElement(n,{className:g.default.blogPostTitle,itemProp:"headline"},y?w:r.default.createElement(d.default,{itemProp:"url",to:I},w)),r.default.createElement("div",{className:(0,u.default)(g.default.blogPostData,"margin-vert--md")},r.default.createElement("time",{dateTime:T,itemProp:"datePublished"},L),void 0!==M&&r.default.createElement(r.default.Fragment,null," \xb7 ",b(M))),r.default.createElement(p.default,{authors:j,assets:N}))),S&&r.default.createElement("meta",{itemProp:"image",content:h(S,{absolute:!0})}),r.default.createElement("div",{className:"markdown",itemProp:"articleBody"},r.default.createElement(i.MDXProvider,{components:m.default},E)),(B||k)&&r.default.createElement("footer",{className:(0,u.default)("row docusaurus-mt-lg",(a={},a[g.default.blogPostDetailsFull]=y,a))},B&&r.default.createElement("div",{className:(0,u.default)("col",{"col--9":F})},r.default.createElement(v.default,{tags:O})),y&&x&&r.default.createElement("div",{className:"col margin-top--sm"},r.default.createElement(f.default,{editUrl:x})),F&&r.default.createElement("div",{className:(0,u.default)("col text--right",{"col--3":B})},r.default.createElement(d.default,{to:P.permalink,"aria-label":"Read more about "+w},r.default.createElement("b",null,r.default.createElement(o.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))};t.default=b},27350:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),r=l(a(41217)),u=l(a(2193)),i=l(a(45125)),o=l(a(82581)),d=a(86700),s=l(a(5176));var c=function(e){var t,a=e.content,l=e.sidebar,c=a.frontMatter,m=a.assets,f=a.metadata,g=f.title,v=f.description,p=f.nextItem,b=f.prevItem,h=f.date,E=f.tags,_=f.authors,N=c.hide_table_of_contents,P=c.keywords,k=c.toc_min_heading_level,C=c.toc_max_heading_level,y=null!=(t=m.image)?t:c.image;return n.default.createElement(u.default,{wrapperClassName:d.ThemeClassNames.wrapper.blogPages,pageClassName:d.ThemeClassNames.page.blogPostPage,sidebar:l,toc:!N&&a.toc&&a.toc.length>0?n.default.createElement(s.default,{toc:a.toc,minHeadingLevel:k,maxHeadingLevel:C}):void 0},n.default.createElement(r.default,{title:g,description:v,keywords:P,image:y},n.default.createElement("meta",{property:"og:type",content:"article"}),n.default.createElement("meta",{property:"article:published_time",content:h}),_.some((function(e){return e.url}))&&n.default.createElement("meta",{property:"article:author",content:_.map((function(e){return e.url})).filter(Boolean).join(",")}),E.length>0&&n.default.createElement("meta",{property:"article:tag",content:E.map((function(e){return e.label})).join(",")})),n.default.createElement(i.default,{frontMatter:c,assets:m,metadata:f,isBlogPostPage:!0},n.default.createElement(a,null)),(p||b)&&n.default.createElement(o.default,{nextItem:p,prevItem:b}))};t.default=c},82581:function(e,t,a){var l=a(20862).default,n=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),u=l(a(29052)),i=n(a(33692));var o=function(e){var t=e.nextItem,a=e.prevItem;return r.default.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,u.translate)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.default.createElement("div",{className:"pagination-nav__item"},a&&r.default.createElement(i.default,{className:"pagination-nav__link",to:a.permalink},r.default.createElement("div",{className:"pagination-nav__sublabel"},r.default.createElement(u.default,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.default.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.default.createElement(i.default,{className:"pagination-nav__link",to:t.permalink},r.default.createElement("div",{className:"pagination-nav__sublabel"},r.default.createElement(u.default,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.default.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};t.default=o},61238:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return n.default.createElement("nav",{className:(0,r.default)(i.default.sidebar,"thin-scrollbar"),"aria-label":(0,o.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.default.createElement("div",{className:(0,r.default)(i.default.sidebarItemTitle,"margin-bottom--md")},t.title),n.default.createElement("ul",{className:i.default.sidebarItemList},t.items.map((function(e){return n.default.createElement("li",{key:e.permalink,className:i.default.sidebarItem},n.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:i.default.sidebarItemLink,activeClassName:i.default.sidebarItemLinkActive},e.title))}))))};var n=l(a(67294)),r=l(a(86010)),u=l(a(33692)),i=l(a(60766)),o=a(29052)},14992:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return n.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.ThemeClassNames.common.editThisPage},n.default.createElement(u.default,null),n.default.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var n=l(a(67294)),r=l(a(29052)),u=l(a(18558)),i=a(86700)},18558:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(87462)),r=l(a(63366)),u=l(a(67294)),i=l(a(86010)),o=l(a(21321)),d=["className"],s=function(e){var t=e.className,a=(0,r.default)(e,d);return u.default.createElement("svg",(0,n.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(o.default.iconEdit,t),"aria-hidden":"true"},a),u.default.createElement("g",null,u.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=s},25002:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.toc,a=e.className,l=void 0===a?"table-of-contents table-of-contents__left-border":a,n=e.linkClassName,c=void 0===n?"table-of-contents__link":n,m=e.linkActiveClassName,f=void 0===m?void 0:m,g=e.minHeadingLevel,v=e.maxHeadingLevel,p=(0,u.default)(e,d),b=(0,o.useThemeConfig)(),h=null!=g?g:b.tableOfContents.minHeadingLevel,E=null!=v?v:b.tableOfContents.maxHeadingLevel,_=(0,o.useTOCFilter)({toc:t,minHeadingLevel:h,maxHeadingLevel:E}),N=(0,i.useMemo)((function(){if(c&&f)return{linkClassName:c,linkActiveClassName:f,minHeadingLevel:h,maxHeadingLevel:E}}),[c,f,h,E]);return(0,o.useTOCHighlight)(N),i.default.createElement(s,(0,r.default)({toc:_,className:l,linkClassName:c},p))};var r=l(a(87462)),u=l(a(63366)),i=n(a(67294)),o=a(86700),d=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function s(e){var t=e.toc,a=e.className,l=e.linkClassName,n=e.isChild;return t.length?i.default.createElement("ul",{className:n?void 0:a},t.map((function(e){return i.default.createElement("li",{key:e.id},i.default.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.default.createElement(s,{isChild:!0,toc:e.children,className:a,linkClassName:l}))}))):null}},5176:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(87462)),r=l(a(63366)),u=l(a(67294)),i=l(a(86010)),o=l(a(25002)),d=l(a(38018)),s=["className"];var c=function(e){var t=e.className,a=(0,r.default)(e,s);return u.default.createElement("div",{className:(0,i.default)(d.default.tableOfContents,"thin-scrollbar",t)},u.default.createElement(o.default,(0,n.default)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))};t.default=c},74801:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),r=l(a(86010)),u=l(a(33692)),i=l(a(89302));var o=function(e){var t,a=e.permalink,l=e.name,o=e.count;return n.default.createElement(u.default,{href:a,className:(0,r.default)(i.default.tag,(t={},t[i.default.tagRegular]=!o,t[i.default.tagWithCount]=o,t))},l,o&&n.default.createElement("span",null,o))};t.default=o},79834:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.tags;return n.default.createElement(n.default.Fragment,null,n.default.createElement("b",null,n.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.default.createElement("ul",{className:(0,r.default)(o.default.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.default.createElement("li",{key:a,className:o.default.tag},n.default.createElement(i.default,{name:t,permalink:a}))}))))};var n=l(a(67294)),r=l(a(86010)),u=l(a(29052)),i=l(a(74801)),o=l(a(95704))},6979:function(e,t,a){var l=a(95318).default,n=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(87462)),u=l(a(63366)),i=n(a(67294)),o=a(73935),d=l(a(52263)),s=a(28143),c=a(44996),m=l(a(33692)),f=l(a(35742)),g=l(a(6397)),v=a(67949),p=l(a(46839)),b=["contextualSearch"],h=null;function E(e){var t=e.hit,a=e.children;return i.default.createElement(m.default,{to:t.url},a)}function _(e){var t=e.state,a=e.onClose,l=(0,g.default)().generateSearchPageLink;return i.default.createElement(m.default,{to:l(t.query),onClick:a},"See all ",t.context.nbHits," results")}function N(e){var t,l,n=e.contextualSearch,m=(0,u.default)(e,b),g=(0,d.default)().siteMetadata,N=(0,p.default)(),P=null!=(t=null==(l=m.searchParameters)?void 0:l.facetFilters)?t:[],k=n?[].concat(N,P):P,C=Object.assign({},m.searchParameters,{facetFilters:k}),y=(0,c.useBaseUrlUtils)().withBaseUrl,T=(0,s.useHistory)(),L=(0,i.useRef)(null),I=(0,i.useState)(!1),O=I[0],M=I[1],w=(0,i.useState)(null),x=w[0],j=w[1],S=(0,i.useCallback)((function(){return h?Promise.resolve():Promise.all([a.e(4483).then(a.bind(a,84483)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;h=t}))}),[]),F=(0,i.useCallback)((function(){S().then((function(){M(!0)}))}),[S,M]),B=(0,i.useCallback)((function(){M(!1)}),[M]),H=(0,i.useCallback)((function(e){S().then((function(){M(!0),j(e.key)}))}),[S,M,j]),A=(0,i.useRef)({navigate:function(e){var t=e.itemUrl;T.push(t)}}).current,R=(0,i.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:y(""+t.pathname+t.hash)})}))})).current,U=(0,i.useMemo)((function(){return function(e){return i.default.createElement(_,(0,r.default)({},e,{onClose:B}))}}),[B]),D=(0,i.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e}),[g.docusaurusVersion]);return(0,v.useDocSearchKeyboardEvents)({isOpen:O,onOpen:F,onClose:B,onInput:H,searchButtonRef:L}),i.default.createElement(i.default.Fragment,null,i.default.createElement(f.default,null,i.default.createElement("link",{rel:"preconnect",href:"https://"+m.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),i.default.createElement(v.DocSearchButton,{onTouchStart:S,onFocus:S,onMouseOver:S,onClick:F,ref:L}),O&&(0,o.createPortal)(i.default.createElement(h,(0,r.default)({onClose:B,initialScrollY:window.scrollY,initialQuery:x,navigator:A,transformItems:R,hitComponent:E,resultsFooterComponent:U,transformSearchClient:D},m,{searchParameters:C})),document.body))}var P=function(){var e=(0,d.default)().siteConfig;return i.default.createElement(N,e.themeConfig.algolia)};t.default=P},11272:function(e,t,a){a.r(t),t.default={image:"image_9q7L"}},29364:function(e,t,a){a.r(t),t.default={authorCol:"authorCol_8c0z"}},46327:function(e,t,a){a.r(t),t.default={blogPostTitle:"blogPostTitle_d4p0",blogPostData:"blogPostData_-Im+",blogPostDetailsFull:"blogPostDetailsFull_xD8n"}},60766:function(e,t,a){a.r(t),t.default={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"}},21321:function(e,t,a){a.r(t),t.default={iconEdit:"iconEdit_mS5F"}},38018:function(e,t,a){a.r(t),t.default={tableOfContents:"tableOfContents_vrFS",docItemContainer:"docItemContainer_VKW9"}},89302:function(e,t,a){a.r(t),t.default={tag:"tag_WK-t",tagRegular:"tagRegular_LXbV",tagWithCount:"tagWithCount_S5Zl"}},95704:function(e,t,a){a.r(t),t.default={tags:"tags_NBRY",tag:"tag_F03v"}}}]);