import{S as F,i as Q,s as U,l as g,u as w,m as k,p as N,v as K,h as c,q as d,b as C,G as p,w as j,n as M,J as W,a as L,K as X,c as P,f as S,g as Y,t as T,d as Z,N as x,O as $,P as ee,x as te,y as le,z as ae,C as se}from"./index-3043342b.js";function ne(s){let e,l=s[0].name+"",t;return{c(){e=g("span"),t=w(l),this.h()},l(a){e=k(a,"SPAN",{class:!0});var o=N(e);t=K(o,l),o.forEach(c),this.h()},h(){d(e,"class","author-card svelte-1pnfsom")},m(a,o){C(a,e,o),p(e,t)},p(a,[o]){o&1&&l!==(l=a[0].name+"")&&j(t,l)},i:M,o:M,d(a){a&&c(e)}}}function ie(s,e,l){let{author:t}=e;return s.$$set=a=>{"author"in a&&l(0,t=a.author)},[t]}class re extends F{constructor(e){super(),Q(this,e,ie,ne,U,{author:0})}}function O(s){let e,l;return{c(){e=g("h2"),l=w(s[1]),this.h()},l(t){e=k(t,"H2",{class:!0});var a=N(e);l=K(a,s[1]),a.forEach(c),this.h()},h(){d(e,"class","post-description svelte-y6ptvp")},m(t,a){C(t,e,a),p(e,l)},p(t,a){a&2&&j(l,t[1])},d(t){t&&c(e)}}}function R(s){let e,l;return{c(){e=w("on "),l=w(s[3])},l(t){e=K(t,"on "),l=K(t,s[3])},m(t,a){C(t,e,a),C(t,l,a)},p(t,a){a&8&&j(l,t[3])},d(t){t&&c(e),t&&c(l)}}}function V(s){let e,l,t,a,o;return t=new re({props:{author:s[2]}}),{c(){e=w("by "),l=g("a"),te(t.$$.fragment),this.h()},l(i){e=K(i,"by "),l=k(i,"A",{href:!0});var r=N(l);le(t.$$.fragment,r),r.forEach(c),this.h()},h(){d(l,"href",a=s[2].page)},m(i,r){C(i,e,r),C(i,l,r),ae(t,l,null),o=!0},p(i,r){const b={};r&4&&(b.author=i[2]),t.$set(b),(!o||r&4&&a!==(a=i[2].page))&&d(l,"href",a)},i(i){o||(S(t.$$.fragment,i),o=!0)},o(i){T(t.$$.fragment,i),o=!1},d(i){i&&c(e),i&&c(l),se(t)}}}function oe(s){let e,l,t,a,o,i,r,b,I,q,u,y,B,z,E;document.title=e="boraini.com - "+s[0];let _=s[1]&&O(s),m=s[3]&&R(s),f=s[2]&&V(s);const D=s[7].default,v=W(D,s,s[6],null);return{c(){l=g("meta"),t=g("link"),a=g("link"),o=L(),i=g("div"),r=g("article"),b=g("h1"),I=w(s[0]),q=L(),_&&_.c(),u=L(),y=g("p"),m&&m.c(),B=L(),f&&f.c(),z=L(),v&&v.c(),this.h()},l(n){const h=X('[data-svelte="svelte-15wtgav"]',document.head);l=k(h,"META",{name:!0,content:!0}),t=k(h,"LINK",{rel:!0,href:!0}),a=k(h,"LINK",{rel:!0,href:!0}),h.forEach(c),o=P(n),i=k(n,"DIV",{class:!0});var G=N(i);r=k(G,"ARTICLE",{class:!0});var A=N(r);b=k(A,"H1",{class:!0});var J=N(b);I=K(J,s[0]),J.forEach(c),q=P(A),_&&_.l(A),u=P(A),y=k(A,"P",{});var H=N(y);m&&m.l(H),B=P(H),f&&f.l(H),H.forEach(c),z=P(A),v&&v.l(A),A.forEach(c),G.forEach(c),this.h()},h(){d(l,"name","description"),d(l,"content",s[1]),d(t,"rel","stylesheet"),d(t,"href","/stylesheets/prism-duotone-dark.css"),d(a,"rel","stylesheet"),d(a,"href","https://cdn.jsdelivr.net/npm/katex@0.16.2/dist/katex.min.css"),d(b,"class","post-title svelte-y6ptvp"),d(r,"class","post svelte-y6ptvp"),d(i,"class","post-margin svelte-y6ptvp")},m(n,h){p(document.head,l),p(document.head,t),p(document.head,a),C(n,o,h),C(n,i,h),p(i,r),p(r,b),p(b,I),p(r,q),_&&_.m(r,null),p(r,u),p(r,y),m&&m.m(y,null),p(y,B),f&&f.m(y,null),p(r,z),v&&v.m(r,null),E=!0},p(n,[h]){(!E||h&1)&&e!==(e="boraini.com - "+n[0])&&(document.title=e),(!E||h&2)&&d(l,"content",n[1]),(!E||h&1)&&j(I,n[0]),n[1]?_?_.p(n,h):(_=O(n),_.c(),_.m(r,u)):_&&(_.d(1),_=null),n[3]?m?m.p(n,h):(m=R(n),m.c(),m.m(y,B)):m&&(m.d(1),m=null),n[2]?f?(f.p(n,h),h&4&&S(f,1)):(f=V(n),f.c(),S(f,1),f.m(y,null)):f&&(Y(),T(f,1,1,()=>{f=null}),Z()),v&&v.p&&(!E||h&64)&&x(v,D,n,n[6],E?ee(D,n[6],h,null):$(n[6]),null)},i(n){E||(S(f),S(v,n),E=!0)},o(n){T(f),T(v,n),E=!1},d(n){c(l),c(t),c(a),n&&c(o),n&&c(i),_&&_.d(),m&&m.d(),f&&f.d(),v&&v.d(n)}}}function fe(s,e,l){let{$$slots:t={},$$scope:a}=e,{title:o}=e,{excerpt:i}=e,{author:r}=e,{thumbnail:b}=e,{tags:I}=e,{date:q}=e;return s.$$set=u=>{"title"in u&&l(0,o=u.title),"excerpt"in u&&l(1,i=u.excerpt),"author"in u&&l(2,r=u.author),"thumbnail"in u&&l(4,b=u.thumbnail),"tags"in u&&l(5,I=u.tags),"date"in u&&l(3,q=u.date),"$$scope"in u&&l(6,a=u.$$scope)},[o,i,r,q,b,I,a,t]}class ce extends F{constructor(e){super(),Q(this,e,fe,oe,U,{title:0,excerpt:1,author:2,thumbnail:4,tags:5,date:3})}}export{re as A,ce as B};