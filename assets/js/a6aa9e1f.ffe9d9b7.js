"use strict";(self.webpackChunklibro_disenio_oop=self.webpackChunklibro_disenio_oop||[]).push([[89],{895:function(e,t,a){a.d(t,{dK:function(){return l},_k:function(){return i},vc:function(){return o},rx:function(){return s},qo:function(){return c},Hk:function(){return m},Iz:function(){return u}});var n=a(1336),r=a.n(n);a(892)(r()),a(9574)(r());var l=["es"],i=!1,o=null,s="1912f2be",c=8,m=100,u={search_placeholder:"Buscar",see_all_results:"Ver todos los resultados",no_results:"No hay resultados. \ud83d\ude1e",search_results_for:'Buscar resultados para "{{ keyword }}"',search_the_documentation:"Buscar en la documentaci\xf3n",count_documents_found:"{{ count }} documento encontrado",count_documents_found_plural:"{{ count }} documentos encontrados",no_documents_were_found:"No encontramos nada que coincida con tu b\xfasqueda... \ud83d\ude22"}},6165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(9756),r=a(7294),l=a(6010),i=a(2273),o=a(6742),s="sidebar_2ahu",c="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",v=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var p=a(571),h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,n.Z)(e,h),c=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c})},o),a&&r.createElement("div",{className:"col col--2"},r.createElement(p.Z,{toc:a})))))}},4428:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),r=a(2263),l=a(6165),i=a(3146),o=a(6742),s=a(4973);var c=function(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(o.Z,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(o.Z,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},m=a(3018);var u=function(e){var t=e.metadata,a=e.items,o=e.sidebar,s=(0,r.Z)().siteConfig.title,u=t.blogDescription,d=t.blogTitle,g="/"===t.permalink?s:d;return n.createElement(l.Z,{title:g,description:u,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:o},a.map((function(e){var t=e.content;return n.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},3146:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(6010),l=a(3905),i=a(4973),o=a(6742),s=a(3018),c=a(637),m=a(1217),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",v="blogPostDetailsFull_3kfx";var f=function(e){var t,a,f,p=(a=(0,s.c2)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,E=e.frontMatter,b=e.metadata,_=e.truncated,N=e.isBlogPostPage,Z=void 0!==N&&N,k=b.date,T=b.formattedDate,w=b.permalink,L=b.tags,C=b.readingTime,y=b.title,I=b.editUrl,x=E.author,M=E.image,B=E.keywords,P=E.author_url||E.authorURL,R=E.author_title||E.authorTitle,A=E.author_image_url||E.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(m.Z,{keywords:B,image:M}),n.createElement("article",{className:Z?void 0:"margin-bottom--xl"},(f=Z?"h1":"h2",n.createElement("header",null,n.createElement(f,{className:d},Z?y:n.createElement(o.Z,{to:w},y)),n.createElement("div",{className:(0,r.Z)(g,"margin-vert--md")},n.createElement("time",{dateTime:k},T),C&&n.createElement(n.Fragment,null," \xb7 ",p(C))),n.createElement("div",{className:"avatar margin-vert--md"},A&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:P},n.createElement("img",{src:A,alt:x})),n.createElement("div",{className:"avatar__intro"},x&&n.createElement(n.Fragment,null,n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:P},x)),n.createElement("small",{className:"avatar__subtitle"},R)))))),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:c.Z},h)),(L.length>0||_)&&n.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(t={},t[v]=Z,t))},L.length>0&&n.createElement("div",{className:"col"},n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),L.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),Z&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:I})),!Z&&_&&n.createElement("div",{className:"col text--right"},n.createElement(o.Z,{to:b.permalink,"aria-label":"Read more about "+y},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},6146:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(4973),l=a(2122),i=a(9756),o=a(6010),s="iconEdit_2_ui",c=["className"],m=function(e){var t=e.className,a=(0,i.Z)(e,c);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(m,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,a){a.d(t,{r:function(){return s},Z:function(){return c}});var n=a(7294),r=a(6010);var l=function(e,t,a){var r=(0,n.useState)(void 0),l=r[0],i=r[1];(0,n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,o=!1,s=document.getElementsByClassName(e);r<s.length&&!o;){var c=s[r],m=c.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),c.classList.add(t),i(c),o=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i="tableOfContents_35-E",o="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:o,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(s,{isChild:!0,toc:e.children}))}))):null}var c=function(e){var t=e.toc;return l(o,"table-of-contents__link--active",100),n.createElement("div",{className:(0,r.Z)(i,"thin-scrollbar")},n.createElement(s,{toc:t}))}}}]);