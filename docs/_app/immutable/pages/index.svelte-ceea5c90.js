import{S as z,i as G,s as R,l as d,a as $,u as M,m as g,p as I,c as S,h as c,v as W,q as m,F as K,b as k,G as h,w as U,n as Q,J as Z,r as Y,N as x,O as ee,P as te,f as D,t as V,o as se,k as le,x as T,y as q,z as H,C as L,K as ne,V as X,W as ae}from"../chunks/index-3043342b.js";import{S as oe}from"../chunks/_author_layout.svelte_svelte_type_style_lang-963aa9ac.js";function re(r){let e,t,s,a,l,o,i,u,v,b,w,n,f=Object.values(r[0])[0].title+"",E,O,N,_=Object.values(r[0])[0].excerpt+"",j,P;return{c(){e=d("a"),t=d("section"),s=d("img"),l=$(),o=d("div"),i=$(),u=d("div"),v=d("h2"),b=M("New Post"),w=$(),n=d("h1"),E=M(f),O=$(),N=d("p"),j=M(_),this.h()},l(p){e=g(p,"A",{href:!0,class:!0});var y=I(e);t=g(y,"SECTION",{class:!0});var A=I(t);s=g(A,"IMG",{class:!0,src:!0,alt:!0}),l=S(A),o=g(A,"DIV",{class:!0}),I(o).forEach(c),i=S(A),u=g(A,"DIV",{class:!0});var C=I(u);v=g(C,"H2",{class:!0});var B=I(v);b=W(B,"New Post"),B.forEach(c),w=S(C),n=g(C,"H1",{class:!0});var F=I(n);E=W(F,f),F.forEach(c),O=S(C),N=g(C,"P",{class:!0});var J=I(N);j=W(J,_),J.forEach(c),C.forEach(c),A.forEach(c),y.forEach(c),this.h()},h(){m(s,"class","thumbnail svelte-1ur4vbj"),K(s.src,a=`/blog/${Object.keys(r[0])[0]}/../${Object.values(r[0])[0].thumbnail}`)||m(s,"src",a),m(s,"alt","Thumbnail"),m(o,"class","content shade svelte-1ur4vbj"),m(v,"class","svelte-1ur4vbj"),m(n,"class","svelte-1ur4vbj"),m(N,"class","svelte-1ur4vbj"),m(u,"class","content svelte-1ur4vbj"),m(t,"class","page-card-inner svelte-1ur4vbj"),m(e,"href",P=`/blog/${Object.keys(r[0])[0]}`),m(e,"class","page-card svelte-1ur4vbj")},m(p,y){k(p,e,y),h(e,t),h(t,s),h(t,l),h(t,o),h(t,i),h(t,u),h(u,v),h(v,b),h(u,w),h(u,n),h(n,E),h(u,O),h(u,N),h(N,j)},p(p,[y]){y&1&&!K(s.src,a=`/blog/${Object.keys(p[0])[0]}/../${Object.values(p[0])[0].thumbnail}`)&&m(s,"src",a),y&1&&f!==(f=Object.values(p[0])[0].title+"")&&U(E,f),y&1&&_!==(_=Object.values(p[0])[0].excerpt+"")&&U(j,_),y&1&&P!==(P=`/blog/${Object.keys(p[0])[0]}`)&&m(e,"href",P)},i:Q,o:Q,d(p){p&&c(e)}}}function ie(r,e,t){let{index:s={"#":{title:"Dummy New Post",excerpt:"this is a dummy post.",author:"Olivia",thumbnail:"computer-graphics/triangle.png"}}}=e;return r.$$set=a=>{"index"in a&&t(0,s=a.index)},[s]}class ue extends z{constructor(e){super(),G(this,e,ie,re,R,{index:0})}}function ce(r){let e,t,s;const a=r[5].default,l=Z(a,r,r[4],null);return{c(){e=d("div"),t=d("div"),l&&l.c(),this.h()},l(o){e=g(o,"DIV",{class:!0,style:!0});var i=I(e);t=g(i,"DIV",{class:!0});var u=I(t);l&&l.l(u),u.forEach(c),i.forEach(c),this.h()},h(){m(t,"class","carousel-items svelte-7dzohb"),m(e,"class","carousel svelte-7dzohb"),Y(e,"--shown-page",r[0]),Y(e,"--number-of-pages",r[1])},m(o,i){k(o,e,i),h(e,t),l&&l.m(t,null),s=!0},p(o,[i]){l&&l.p&&(!s||i&16)&&x(l,a,o,o[4],s?te(a,o[4],i,null):ee(o[4]),null),(!s||i&1)&&Y(e,"--shown-page",o[0]),(!s||i&2)&&Y(e,"--number-of-pages",o[1])},i(o){s||(D(l,o),s=!0)},o(o){V(l,o),s=!1},d(o){o&&c(e),l&&l.d(o)}}}function fe(r,e,t){let{$$slots:s={},$$scope:a}=e,{numberOfPages:l=1}=e,{shownPage:o=0}=e,{autoScroll:i=!0}=e,{scrollInterval:u=3e3}=e,v=l>1&&i,b;function w(){t(0,o=(o+1)%l)}return se(()=>{v&&(b=setInterval(w,u))}),le(()=>{!i&&v&&clearInterval(b),l>1&&i&&!v&&(b=setInterval(w,u)),v=i}),r.$$set=n=>{"numberOfPages"in n&&t(1,l=n.numberOfPages),"shownPage"in n&&t(0,o=n.shownPage),"autoScroll"in n&&t(2,i=n.autoScroll),"scrollInterval"in n&&t(3,u=n.scrollInterval),"$$scope"in n&&t(4,a=n.$$scope)},[o,l,i,u,a,s]}class me extends z{constructor(e){super(),G(this,e,fe,ce,R,{numberOfPages:1,shownPage:0,autoScroll:2,scrollInterval:3})}}function he(r){let e,t;const s=r[3].default,a=Z(s,r,r[2],null);return{c(){e=d("a"),a&&a.c(),this.h()},l(l){e=g(l,"A",{class:!0,href:!0,target:!0});var o=I(e);a&&a.l(o),o.forEach(c),this.h()},h(){m(e,"class","button-link svelte-fmu5gv"),m(e,"href",r[0]),m(e,"target",r[1])},m(l,o){k(l,e,o),a&&a.m(e,null),t=!0},p(l,[o]){a&&a.p&&(!t||o&4)&&x(a,s,l,l[2],t?te(s,l[2],o,null):ee(l[2]),null),(!t||o&1)&&m(e,"href",l[0]),(!t||o&2)&&m(e,"target",l[1])},i(l){t||(D(a,l),t=!0)},o(l){V(a,l),t=!1},d(l){l&&c(e),a&&a.d(l)}}}function _e(r,e,t){let{$$slots:s={},$$scope:a}=e,{href:l=""}=e,{target:o=""}=e;return r.$$set=i=>{"href"in i&&t(0,l=i.href),"target"in i&&t(1,o=i.target),"$$scope"in i&&t(2,a=i.$$scope)},[l,o,a,s]}class ve extends z{constructor(e){super(),G(this,e,_e,he,R,{href:0,target:1})}}function de(r){let e;return{c(){e=M("Author Profile")},l(t){e=W(t,"Author Profile")},m(t,s){k(t,e,s)},d(t){t&&c(e)}}}function ge(r){let e,t,s,a,l,o,i,u,v,b,w;return i=new ve({props:{href:"/blog/authors/boraini",$$slots:{default:[de]},$$scope:{ctx:r}}}),b=new oe({props:{social:r[0].social}}),{c(){e=d("h1"),t=M("Welcome to my website!"),s=$(),a=d("p"),l=M("I am Mert Bora \u0130nevi, and this is your number-one source to learn about me and my projects. I also have a nice blog which will hopefully come to be useful and entertaining for you. You can also follow me on other social media via the links below."),o=$(),T(i.$$.fragment),u=$(),v=d("span"),T(b.$$.fragment),this.h()},l(n){e=g(n,"H1",{});var f=I(e);t=W(f,"Welcome to my website!"),f.forEach(c),s=S(n),a=g(n,"P",{});var E=I(a);l=W(E,"I am Mert Bora \u0130nevi, and this is your number-one source to learn about me and my projects. I also have a nice blog which will hopefully come to be useful and entertaining for you. You can also follow me on other social media via the links below."),E.forEach(c),o=S(n),q(i.$$.fragment,n),u=S(n),v=g(n,"SPAN",{class:!0});var O=I(v);q(b.$$.fragment,O),O.forEach(c),this.h()},h(){m(v,"class","social-links svelte-1kflljn")},m(n,f){k(n,e,f),h(e,t),k(n,s,f),k(n,a,f),h(a,l),k(n,o,f),H(i,n,f),k(n,u,f),k(n,v,f),H(b,v,null),w=!0},p(n,[f]){const E={};f&2&&(E.$$scope={dirty:f,ctx:n}),i.$set(E);const O={};f&1&&(O.social=n[0].social),b.$set(O)},i(n){w||(D(i.$$.fragment,n),D(b.$$.fragment,n),w=!0)},o(n){V(i.$$.fragment,n),V(b.$$.fragment,n),w=!1},d(n){n&&c(e),n&&c(s),n&&c(a),n&&c(o),L(i,n),n&&c(u),n&&c(v),L(b)}}}function be(r,e,t){let{ownerInfo:s}=e;return r.$$set=a=>{"ownerInfo"in a&&t(0,s=a.ownerInfo)},[s]}class we extends z{constructor(e){super(),G(this,e,be,ge,R,{ownerInfo:0})}}function Ie(r){let e,t;return e=new ue({props:{index:r[1]}}),{c(){T(e.$$.fragment)},l(s){q(e.$$.fragment,s)},m(s,a){H(e,s,a),t=!0},p(s,a){const l={};a&2&&(l.index=s[1]),e.$set(l)},i(s){t||(D(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function pe(r){let e,t,s,a,l,o,i,u,v,b,w,n,f,E,O,N;return l=new we({props:{ownerInfo:r[2]}}),f=new me({props:{numberOfPages:1,autoScroll:r[0],$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){e=d("meta"),t=$(),s=d("main"),a=d("section"),T(l.$$.fragment),o=$(),i=d("section"),u=d("h1"),v=M("What is New"),b=$(),w=d("div"),n=d("div"),T(f.$$.fragment),this.h()},l(_){const j=ne('[data-svelte="svelte-iaggbw"]',document.head);e=g(j,"META",{name:!0,content:!0}),j.forEach(c),t=S(_),s=g(_,"MAIN",{class:!0});var P=I(s);a=g(P,"SECTION",{id:!0});var p=I(a);q(l.$$.fragment,p),p.forEach(c),o=S(P),i=g(P,"SECTION",{id:!0});var y=I(i);u=g(y,"H1",{});var A=I(u);v=W(A,"What is New"),A.forEach(c),b=S(y),w=g(y,"DIV",{class:!0});var C=I(w);n=g(C,"DIV",{class:!0});var B=I(n);q(f.$$.fragment,B),B.forEach(c),C.forEach(c),y.forEach(c),P.forEach(c),this.h()},h(){document.title="boraini.com - Mert Bora \u0130nevi's Personal Website",m(e,"name","description"),m(e,"content","Welcome to my website!"),m(a,"id","about"),m(n,"class","news svelte-1epavi9"),m(w,"class","news-container svelte-1epavi9"),m(i,"id","news"),m(s,"class","svelte-1epavi9")},m(_,j){h(document.head,e),k(_,t,j),k(_,s,j),h(s,a),H(l,a,null),h(s,o),h(s,i),h(i,u),h(u,v),h(i,b),h(i,w),h(w,n),H(f,n,null),E=!0,O||(N=[X(w,"mouseenter",r[3]),X(w,"mouseleave",r[4])],O=!0)},p(_,[j]){const P={};j&4&&(P.ownerInfo=_[2]),l.$set(P);const p={};j&1&&(p.autoScroll=_[0]),j&34&&(p.$$scope={dirty:j,ctx:_}),f.$set(p)},i(_){E||(D(l.$$.fragment,_),D(f.$$.fragment,_),E=!0)},o(_){V(l.$$.fragment,_),V(f.$$.fragment,_),E=!1},d(_){c(e),_&&c(t),_&&c(s),L(l),L(f),O=!1,ae(N)}}}const Ee="boraini";async function Pe({fetch:r}){return{props:{ownerInfo:await r(`/blog/authorInfo?nickname=${Ee}`).then(e=>e.json()),newArticle:await r("/blog/articles?trait=newest").then(e=>e.json())}}}function je(r,e,t){let{newsScroll:s=!1}=e,{newArticle:a}=e,{ownerInfo:l}=e;function o(u){t(0,s=!1)}function i(u){t(0,s=!0)}return r.$$set=u=>{"newsScroll"in u&&t(0,s=u.newsScroll),"newArticle"in u&&t(1,a=u.newArticle),"ownerInfo"in u&&t(2,l=u.ownerInfo)},[s,a,l,o,i]}class ke extends z{constructor(e){super(),G(this,e,je,pe,R,{newsScroll:0,newArticle:1,ownerInfo:2})}}export{ke as default,Pe as load};