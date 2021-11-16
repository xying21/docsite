"use strict";(self.webpackChunkdev_doc=self.webpackChunkdev_doc||[]).push([[3089,5640],{2193:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(63366)),n=l(a(67294)),u=l(a(86010)),i=l(a(98532)),d=l(a(61238)),o=["sidebar","toc","children"];var s=function(e){var t=e.sidebar,a=e.toc,l=e.children,s=(0,r.default)(e,o),c=t&&t.items.length>0;return n.default.createElement(i.default,s,n.default.createElement("div",{className:"container margin-vert--lg"},n.default.createElement("div",{className:"row"},c&&n.default.createElement("aside",{className:"col col--3"},n.default.createElement(d.default,{sidebar:t})),n.default.createElement("main",{className:(0,u.default)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},l),a&&n.default.createElement("div",{className:"col col--2"},a))))};t.default=s},37329:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(52263)),u=l(a(2193)),i=l(a(45125)),d=l(a(36299)),o=a(86700);var s=function(e){var t=e.metadata,a=e.items,l=e.sidebar,s=(0,n.default)().siteConfig.title,c=t.blogDescription,m=t.blogTitle,f="/"===t.permalink?s:m;return r.default.createElement(u.default,{title:f,description:c,wrapperClassName:o.ThemeClassNames.wrapper.blogPages,pageClassName:o.ThemeClassNames.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:l},a.map((function(e){var t=e.content;return r.default.createElement(i.default,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.default.createElement(t,null))})),r.default.createElement(d.default,{metadata:t}))};t.default=s},36299:function(e,t,a){var l=a(20862).default,r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),u=r(a(33692)),i=l(a(29052));var d=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return n.default.createElement("nav",{className:"pagination-nav","aria-label":(0,i.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.default.createElement("div",{className:"pagination-nav__item"},a&&n.default.createElement(u.default,{className:"pagination-nav__link",to:a},n.default.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.default.createElement(i.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.default.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&n.default.createElement(u.default,{className:"pagination-nav__link",to:l},n.default.createElement("div",{className:"pagination-nav__label"},n.default.createElement(i.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};t.default=d},21746:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(33692)),u=l(a(11272));var i=function(e){var t=e.author,a=t.name,l=t.title,i=t.url,d=t.imageURL;return r.default.createElement("div",{className:"avatar margin-bottom--sm"},d&&r.default.createElement(n.default,{className:"avatar__photo-link avatar__photo",href:i},r.default.createElement("img",{className:u.default.image,src:d,alt:a})),a&&r.default.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.default.createElement("div",{className:"avatar__name"},r.default.createElement(n.default,{href:i,itemProp:"url"},r.default.createElement("span",{itemProp:"name"},a))),l&&r.default.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))};t.default=i},47070:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.authors,a=e.assets;if(0===t.length)return r.default.createElement(r.default.Fragment,null);return r.default.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.default.createElement("div",{className:(0,n.default)("col col--6",i.default.authorCol),key:t},r.default.createElement(u.default,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))};var r=l(a(67294)),n=l(a(86010)),u=l(a(21746)),i=l(a(29364))},45125:function(e,t,a){var l=a(20862).default,r=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),u=r(a(86010)),i=a(3905),d=l(a(29052)),o=r(a(33692)),s=a(44996),c=a(86700),m=r(a(73491)),f=r(a(14992)),g=r(a(46327)),v=r(a(79834)),p=r(a(47070));var b=function(e){var t,a,l,r,b=(l=(0,c.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return l(t,(0,d.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=(0,s.useBaseUrlUtils)().withBaseUrl,E=e.children,_=e.frontMatter,P=e.assets,N=e.metadata,k=e.truncated,C=e.isBlogPostPage,T=void 0!==C&&C,y=N.date,M=N.formattedDate,w=N.permalink,I=N.tags,L=N.readingTime,O=N.title,S=N.editUrl,j=N.authors,F=null!=(t=P.image)?t:_.image,R=!T&&k,U=I.length>0;return n.default.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(r=T?"h1":"h2",n.default.createElement("header",null,n.default.createElement(r,{className:g.default.blogPostTitle,itemProp:"headline"},T?O:n.default.createElement(o.default,{itemProp:"url",to:w},O)),n.default.createElement("div",{className:(0,u.default)(g.default.blogPostData,"margin-vert--md")},n.default.createElement("time",{dateTime:y,itemProp:"datePublished"},M),void 0!==L&&n.default.createElement(n.default.Fragment,null," \xb7 ",b(L))),n.default.createElement(p.default,{authors:j,assets:P}))),F&&n.default.createElement("meta",{itemProp:"image",content:h(F,{absolute:!0})}),n.default.createElement("div",{className:"markdown",itemProp:"articleBody"},n.default.createElement(i.MDXProvider,{components:m.default},E)),(U||k)&&n.default.createElement("footer",{className:(0,u.default)("row docusaurus-mt-lg",(a={},a[g.default.blogPostDetailsFull]=T,a))},U&&n.default.createElement("div",{className:(0,u.default)("col",{"col--9":R})},n.default.createElement(v.default,{tags:I})),T&&S&&n.default.createElement("div",{className:"col margin-top--sm"},n.default.createElement(f.default,{editUrl:S})),R&&n.default.createElement("div",{className:(0,u.default)("col text--right",{"col--3":U})},n.default.createElement(o.default,{to:N.permalink,"aria-label":"Read more about "+O},n.default.createElement("b",null,n.default.createElement(d.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))};t.default=b},61238:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.sidebar;if(0===t.items.length)return null;return r.default.createElement("nav",{className:(0,n.default)(i.default.sidebar,"thin-scrollbar"),"aria-label":(0,d.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.default.createElement("div",{className:(0,n.default)(i.default.sidebarItemTitle,"margin-bottom--md")},t.title),r.default.createElement("ul",{className:i.default.sidebarItemList},t.items.map((function(e){return r.default.createElement("li",{key:e.permalink,className:i.default.sidebarItem},r.default.createElement(u.default,{isNavLink:!0,to:e.permalink,className:i.default.sidebarItemLink,activeClassName:i.default.sidebarItemLinkActive},e.title))}))))};var r=l(a(67294)),n=l(a(86010)),u=l(a(33692)),i=l(a(60766)),d=a(29052)},14992:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.editUrl;return r.default.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.ThemeClassNames.common.editThisPage},r.default.createElement(u.default,null),r.default.createElement(n.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))};var r=l(a(67294)),n=l(a(29052)),u=l(a(18558)),i=a(86700)},18558:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(87462)),n=l(a(63366)),u=l(a(67294)),i=l(a(86010)),d=l(a(21321)),o=["className"],s=function(e){var t=e.className,a=(0,n.default)(e,o);return u.default.createElement("svg",(0,r.default)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.default)(d.default.iconEdit,t),"aria-hidden":"true"},a),u.default.createElement("g",null,u.default.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};t.default=s},74801:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(86010)),u=l(a(33692)),i=l(a(89302));var d=function(e){var t,a=e.permalink,l=e.name,d=e.count;return r.default.createElement(u.default,{href:a,className:(0,n.default)(i.default.tag,(t={},t[i.default.tagRegular]=!d,t[i.default.tagWithCount]=d,t))},l,d&&r.default.createElement("span",null,d))};t.default=d},79834:function(e,t,a){var l=a(95318).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.tags;return r.default.createElement(r.default.Fragment,null,r.default.createElement("b",null,r.default.createElement(u.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.default.createElement("ul",{className:(0,n.default)(d.default.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.default.createElement("li",{key:a,className:d.default.tag},r.default.createElement(i.default,{name:t,permalink:a}))}))))};var r=l(a(67294)),n=l(a(86010)),u=l(a(29052)),i=l(a(74801)),d=l(a(95704))},6979:function(e,t,a){var l=a(95318).default,r=a(20862).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(87462)),u=l(a(63366)),i=r(a(67294)),d=a(73935),o=l(a(52263)),s=a(28143),c=a(44996),m=l(a(33692)),f=l(a(35742)),g=l(a(6397)),v=a(67949),p=l(a(46839)),b=["contextualSearch"],h=null;function E(e){var t=e.hit,a=e.children;return i.default.createElement(m.default,{to:t.url},a)}function _(e){var t=e.state,a=e.onClose,l=(0,g.default)().generateSearchPageLink;return i.default.createElement(m.default,{to:l(t.query),onClick:a},"See all ",t.context.nbHits," results")}function P(e){var t,l,r=e.contextualSearch,m=(0,u.default)(e,b),g=(0,o.default)().siteMetadata,P=(0,p.default)(),N=null!=(t=null==(l=m.searchParameters)?void 0:l.facetFilters)?t:[],k=r?[].concat(P,N):N,C=Object.assign({},m.searchParameters,{facetFilters:k}),T=(0,c.useBaseUrlUtils)().withBaseUrl,y=(0,s.useHistory)(),M=(0,i.useRef)(null),w=(0,i.useState)(!1),I=w[0],L=w[1],O=(0,i.useState)(null),S=O[0],j=O[1],F=(0,i.useCallback)((function(){return h?Promise.resolve():Promise.all([a.e(4483).then(a.bind(a,84483)),Promise.all([a.e(532),a.e(6945)]).then(a.bind(a,46945)),Promise.all([a.e(532),a.e(9846)]).then(a.bind(a,9846))]).then((function(e){var t=e[0].DocSearchModal;h=t}))}),[]),R=(0,i.useCallback)((function(){F().then((function(){L(!0)}))}),[F,L]),U=(0,i.useCallback)((function(){L(!1)}),[L]),B=(0,i.useCallback)((function(e){F().then((function(){L(!0),j(e.key)}))}),[F,L,j]),D=(0,i.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,x=(0,i.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:T(""+t.pathname+t.hash)})}))})).current,A=(0,i.useMemo)((function(){return function(e){return i.default.createElement(_,(0,n.default)({},e,{onClose:U}))}}),[U]),q=(0,i.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",g.docusaurusVersion),e}),[g.docusaurusVersion]);return(0,v.useDocSearchKeyboardEvents)({isOpen:I,onOpen:R,onClose:U,onInput:B,searchButtonRef:M}),i.default.createElement(i.default.Fragment,null,i.default.createElement(f.default,null,i.default.createElement("link",{rel:"preconnect",href:"https://"+m.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),i.default.createElement(v.DocSearchButton,{onTouchStart:F,onFocus:F,onMouseOver:F,onClick:R,ref:M}),I&&(0,d.createPortal)(i.default.createElement(h,(0,n.default)({onClose:U,initialScrollY:window.scrollY,initialQuery:S,navigator:D,transformItems:x,hitComponent:E,resultsFooterComponent:A,transformSearchClient:q},m,{searchParameters:C})),document.body))}var N=function(){var e=(0,o.default)().siteConfig;return i.default.createElement(P,e.themeConfig.algolia)};t.default=N},11272:function(e,t,a){a.r(t),t.default={image:"image_9q7L"}},29364:function(e,t,a){a.r(t),t.default={authorCol:"authorCol_8c0z"}},46327:function(e,t,a){a.r(t),t.default={blogPostTitle:"blogPostTitle_d4p0",blogPostData:"blogPostData_-Im+",blogPostDetailsFull:"blogPostDetailsFull_xD8n"}},60766:function(e,t,a){a.r(t),t.default={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"}},21321:function(e,t,a){a.r(t),t.default={iconEdit:"iconEdit_mS5F"}},89302:function(e,t,a){a.r(t),t.default={tag:"tag_WK-t",tagRegular:"tagRegular_LXbV",tagWithCount:"tagWithCount_S5Zl"}},95704:function(e,t,a){a.r(t),t.default={tags:"tags_NBRY",tag:"tag_F03v"}}}]);