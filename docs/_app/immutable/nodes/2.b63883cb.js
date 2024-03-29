import{s as W,d as F,n as J,c as X,u as Z,g as ee,f as te,o as se,a as ne,r as le}from"../chunks/scheduler.014bc20e.js";import{S as H,i as L,g as b,s as y,m as R,h as w,j,c as k,f as h,x as G,n as U,k as m,a as O,B as d,o as K,l as q,d as $,t as z,r as D,u as T,v as V,w as B,z as ae,C as Q}from"../chunks/index.bf2c274e.js";import{S as oe}from"../chunks/SocialLinks.9bbde2fd.js";async function re({fetch:i}){return{ownerInfo:await i("/blog/authorInfo/boraini").then(t=>t.json()),newArticle:await i("/blog/articles/byTrait/newest").then(t=>t.json())}}const Se=Object.freeze(Object.defineProperty({__proto__:null,load:re},Symbol.toStringTag,{value:"Module"}));function ie(i){let e,t,s,l,n,a,r,c,_,g="New Post",u,o,f=Object.values(i[0])[0].title+"",P,S,A,v=Object.values(i[0])[0].excerpt+"",p,E;return{c(){e=b("a"),t=b("section"),s=b("img"),n=y(),a=b("div"),r=y(),c=b("div"),_=b("h2"),_.textContent=g,u=y(),o=b("h1"),P=R(f),S=y(),A=b("p"),p=R(v),this.h()},l(I){e=w(I,"A",{href:!0,class:!0});var C=j(e);t=w(C,"SECTION",{class:!0});var N=j(t);s=w(N,"IMG",{class:!0,src:!0,alt:!0}),n=k(N),a=w(N,"DIV",{class:!0}),j(a).forEach(h),r=k(N),c=w(N,"DIV",{class:!0});var M=j(c);_=w(M,"H2",{class:!0,"data-svelte-h":!0}),G(_)!=="svelte-3vp7ty"&&(_.textContent=g),u=k(M),o=w(M,"H1",{class:!0});var Y=j(o);P=U(Y,f),Y.forEach(h),S=k(M),A=w(M,"P",{class:!0});var x=j(A);p=U(x,v),x.forEach(h),M.forEach(h),N.forEach(h),C.forEach(h),this.h()},h(){m(s,"class","thumbnail svelte-1ur4vbj"),F(s.src,l=Object.values(i[0])[0].thumbnail)||m(s,"src",l),m(s,"alt","Thumbnail"),m(a,"class","content shade svelte-1ur4vbj"),m(_,"class","svelte-1ur4vbj"),m(o,"class","svelte-1ur4vbj"),m(A,"class","svelte-1ur4vbj"),m(c,"class","content svelte-1ur4vbj"),m(t,"class","page-card-inner svelte-1ur4vbj"),m(e,"href",E=`/blog/${Object.keys(i[0])[0]}`),m(e,"class","page-card svelte-1ur4vbj")},m(I,C){O(I,e,C),d(e,t),d(t,s),d(t,n),d(t,a),d(t,r),d(t,c),d(c,_),d(c,u),d(c,o),d(o,P),d(c,S),d(c,A),d(A,p)},p(I,[C]){C&1&&!F(s.src,l=Object.values(I[0])[0].thumbnail)&&m(s,"src",l),C&1&&f!==(f=Object.values(I[0])[0].title+"")&&K(P,f),C&1&&v!==(v=Object.values(I[0])[0].excerpt+"")&&K(p,v),C&1&&E!==(E=`/blog/${Object.keys(I[0])[0]}`)&&m(e,"href",E)},i:J,o:J,d(I){I&&h(e)}}}function ce(i,e,t){let{index:s={"#":{title:"Dummy New Post",excerpt:"this is a dummy post.",author:"Olivia",thumbnail:"computer-graphics/triangle.png"}}}=e;return i.$$set=l=>{"index"in l&&t(0,s=l.index)},[s]}class ue extends H{constructor(e){super(),L(this,e,ce,ie,W,{index:0})}}function fe(i){let e,t,s;const l=i[5].default,n=X(l,i,i[4],null);return{c(){e=b("div"),t=b("div"),n&&n.c(),this.h()},l(a){e=w(a,"DIV",{class:!0,style:!0});var r=j(e);t=w(r,"DIV",{class:!0});var c=j(t);n&&n.l(c),c.forEach(h),r.forEach(h),this.h()},h(){m(t,"class","carousel-items svelte-7dzohb"),m(e,"class","carousel svelte-7dzohb"),q(e,"--shown-page",i[0]),q(e,"--number-of-pages",i[1])},m(a,r){O(a,e,r),d(e,t),n&&n.m(t,null),s=!0},p(a,[r]){n&&n.p&&(!s||r&16)&&Z(n,l,a,a[4],s?te(l,a[4],r,null):ee(a[4]),null),(!s||r&1)&&q(e,"--shown-page",a[0]),(!s||r&2)&&q(e,"--number-of-pages",a[1])},i(a){s||($(n,a),s=!0)},o(a){z(n,a),s=!1},d(a){a&&h(e),n&&n.d(a)}}}function he(i,e,t){let{$$slots:s={},$$scope:l}=e,{numberOfPages:n=1}=e,{shownPage:a=0}=e,{autoScroll:r=!0}=e,{scrollInterval:c=3e3}=e,_=n>1&&r,g;function u(){t(0,a=(a+1)%n)}return se(()=>{_&&(g=setInterval(u,c))}),ne(()=>{!r&&_&&clearInterval(g),n>1&&r&&!_&&(g=setInterval(u,c)),_=r}),i.$$set=o=>{"numberOfPages"in o&&t(1,n=o.numberOfPages),"shownPage"in o&&t(0,a=o.shownPage),"autoScroll"in o&&t(2,r=o.autoScroll),"scrollInterval"in o&&t(3,c=o.scrollInterval),"$$scope"in o&&t(4,l=o.$$scope)},[a,n,r,c,l,s]}class me extends H{constructor(e){super(),L(this,e,he,fe,W,{numberOfPages:1,shownPage:0,autoScroll:2,scrollInterval:3})}}function _e(i){let e,t;const s=i[3].default,l=X(s,i,i[2],null);return{c(){e=b("a"),l&&l.c(),this.h()},l(n){e=w(n,"A",{class:!0,href:!0,target:!0});var a=j(e);l&&l.l(a),a.forEach(h),this.h()},h(){m(e,"class","button-link svelte-1cvux4g"),m(e,"href",i[0]),m(e,"target",i[1])},m(n,a){O(n,e,a),l&&l.m(e,null),t=!0},p(n,[a]){l&&l.p&&(!t||a&4)&&Z(l,s,n,n[2],t?te(s,n[2],a,null):ee(n[2]),null),(!t||a&1)&&m(e,"href",n[0]),(!t||a&2)&&m(e,"target",n[1])},i(n){t||($(l,n),t=!0)},o(n){z(l,n),t=!1},d(n){n&&h(e),l&&l.d(n)}}}function ve(i,e,t){let{$$slots:s={},$$scope:l}=e,{href:n=""}=e,{target:a=""}=e;return i.$$set=r=>{"href"in r&&t(0,n=r.href),"target"in r&&t(1,a=r.target),"$$scope"in r&&t(2,l=r.$$scope)},[n,a,l,s]}class de extends H{constructor(e){super(),L(this,e,ve,_e,W,{href:0,target:1})}}function ge(i){let e;return{c(){e=R("Author Profile")},l(t){e=U(t,"Author Profile")},m(t,s){O(t,e,s)},d(t){t&&h(e)}}}function be(i){let e,t="Welcome to my website!",s,l,n="I am Mert Bora İnevi, and this is your number-one source to learn about me and my projects. I also have a nice blog which will hopefully come to be useful and entertaining for you. You can also follow me on other social media via the links below.",a,r,c,_,g,u;return r=new de({props:{href:"/blog/authors/boraini",$$slots:{default:[ge]},$$scope:{ctx:i}}}),g=new oe({props:{social:i[0].social}}),{c(){e=b("h1"),e.textContent=t,s=y(),l=b("p"),l.textContent=n,a=y(),D(r.$$.fragment),c=y(),_=b("span"),D(g.$$.fragment),this.h()},l(o){e=w(o,"H1",{"data-svelte-h":!0}),G(e)!=="svelte-1fu2j6n"&&(e.textContent=t),s=k(o),l=w(o,"P",{"data-svelte-h":!0}),G(l)!=="svelte-1udt647"&&(l.textContent=n),a=k(o),T(r.$$.fragment,o),c=k(o),_=w(o,"SPAN",{class:!0});var f=j(_);T(g.$$.fragment,f),f.forEach(h),this.h()},h(){m(_,"class","social-links svelte-1kflljn")},m(o,f){O(o,e,f),O(o,s,f),O(o,l,f),O(o,a,f),V(r,o,f),O(o,c,f),O(o,_,f),V(g,_,null),u=!0},p(o,[f]){const P={};f&2&&(P.$$scope={dirty:f,ctx:o}),r.$set(P);const S={};f&1&&(S.social=o[0].social),g.$set(S)},i(o){u||($(r.$$.fragment,o),$(g.$$.fragment,o),u=!0)},o(o){z(r.$$.fragment,o),z(g.$$.fragment,o),u=!1},d(o){o&&(h(e),h(s),h(l),h(a),h(c),h(_)),B(r,o),B(g)}}}function we(i,e,t){let{ownerInfo:s}=e;return i.$$set=l=>{"ownerInfo"in l&&t(0,s=l.ownerInfo)},[s]}class Ie extends H{constructor(e){super(),L(this,e,we,be,W,{ownerInfo:0})}}function pe(i){let e,t;return e=new ue({props:{index:i[1]}}),{c(){D(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,l){V(e,s,l),t=!0},p(s,l){const n={};l&2&&(n.index=s[1]),e.$set(n)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){z(e.$$.fragment,s),t=!1},d(s){B(e,s)}}}function je(i){let e,t,s,l,n,a,r,c,_="What is New",g,u,o,f,P,S,A;return n=new Ie({props:{ownerInfo:i[2]}}),f=new me({props:{numberOfPages:1,autoScroll:i[0],$$slots:{default:[pe]},$$scope:{ctx:i}}}),{c(){e=b("meta"),t=y(),s=b("main"),l=b("section"),D(n.$$.fragment),a=y(),r=b("section"),c=b("h1"),c.textContent=_,g=y(),u=b("div"),o=b("div"),D(f.$$.fragment),this.h()},l(v){const p=ae("svelte-iaggbw",document.head);e=w(p,"META",{name:!0,content:!0}),p.forEach(h),t=k(v),s=w(v,"MAIN",{class:!0});var E=j(s);l=w(E,"SECTION",{id:!0});var I=j(l);T(n.$$.fragment,I),I.forEach(h),a=k(E),r=w(E,"SECTION",{id:!0});var C=j(r);c=w(C,"H1",{"data-svelte-h":!0}),G(c)!=="svelte-12pjlqa"&&(c.textContent=_),g=k(C),u=w(C,"DIV",{class:!0});var N=j(u);o=w(N,"DIV",{class:!0});var M=j(o);T(f.$$.fragment,M),M.forEach(h),N.forEach(h),C.forEach(h),E.forEach(h),this.h()},h(){document.title="boraini.com - Mert Bora İnevi's Personal Website",m(e,"name","description"),m(e,"content","Welcome to my website!"),m(l,"id","about"),m(o,"class","news svelte-1t6dzeo"),m(u,"class","news-container svelte-1t6dzeo"),m(r,"id","news"),m(s,"class","svelte-1t6dzeo")},m(v,p){d(document.head,e),O(v,t,p),O(v,s,p),d(s,l),V(n,l,null),d(s,a),d(s,r),d(r,c),d(r,g),d(r,u),d(u,o),V(f,o,null),P=!0,S||(A=[Q(u,"mouseenter",i[3]),Q(u,"mouseleave",i[4])],S=!0)},p(v,[p]){const E={};p&4&&(E.ownerInfo=v[2]),n.$set(E);const I={};p&1&&(I.autoScroll=v[0]),p&66&&(I.$$scope={dirty:p,ctx:v}),f.$set(I)},i(v){P||($(n.$$.fragment,v),$(f.$$.fragment,v),P=!0)},o(v){z(n.$$.fragment,v),z(f.$$.fragment,v),P=!1},d(v){v&&(h(t),h(s)),h(e),B(n),B(f),S=!1,le(A)}}}function Ce(i,e,t){let{newsScroll:s=!1}=e,{data:l}=e,{newArticle:n,ownerInfo:a}=l,{newArticle:r=n,ownerInfo:c=a}=e;function _(u){t(0,s=!1)}function g(u){t(0,s=!0)}return i.$$set=u=>{"newsScroll"in u&&t(0,s=u.newsScroll),"data"in u&&t(5,l=u.data),"newArticle"in u&&t(1,r=u.newArticle),"ownerInfo"in u&&t(2,c=u.ownerInfo)},[s,r,c,_,g,l]}class ye extends H{constructor(e){super(),L(this,e,Ce,je,W,{newsScroll:0,data:5,newArticle:1,ownerInfo:2})}}export{ye as component,Se as universal};