import{_ as re}from"./boraini-0f9fd772.js";import{_ as ie}from"./hidden-surface-removal-49542d09.js";import{_ as oe}from"./linear-and-affine-transformations-bb919e45.js";import{c as ce}from"./local-and-world-space-ba559627.js";import{a as ue}from"./projective-space-2d5fdc95.js";import{_ as fe}from"./texture-mapping-4f8e2598.js";import{S as te,i as le,s as ae,l as j,a as z,u as y,m as I,p as E,c as M,v as C,h as _,q as d,F as $,b as S,G as L,w as G,f as m,g as O,t as A,d as k,U as x,x as Q,y as T,z as F,C as N,K as he}from"./index-8e6002e7.js";import{A as se}from"./_blog_layout-a73ee55d.js";const _e="/_app/immutable/assets/snowboarder_original-cab17ecb.png",ze=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),me="/_app/immutable/assets/linear-and-affine-transformations-95adcc8c.png",Me=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),de="data:image/png;base64,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",Be=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),Oe={};Object.assign({"./authors/boraini.md":re,"./computer-graphics/hidden-surface-removal.md":ie,"./computer-graphics/linear-and-affine-transformations.md":oe,"./computer-graphics/local-and-world-space.md":ce,"./computer-graphics/projective-space.md":ue,"./computer-graphics/texture-mapping.md":fe});function ke(u){return{title:u,excerpt:"",authors:[],tags:[]}}function R(u,e,a){const c=u.slice();return c[1]=e[a],c}function Z(u){let e,a,c=u[0].authors,t=[];for(let r=0;r<c.length;r+=1)t[r]=W(R(u,c,r));const n=r=>A(t[r],1,1,()=>{t[r]=null});return{c(){e=j("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=I(r,"UL",{class:!0});var l=E(e);for(let h=0;h<t.length;h+=1)t[h].l(l);l.forEach(_),this.h()},h(){d(e,"class","authors svelte-1i6p1cj")},m(r,l){S(r,e,l);for(let h=0;h<t.length;h+=1)t[h].m(e,null);a=!0},p(r,l){if(l&1){c=r[0].authors;let h;for(h=0;h<c.length;h+=1){const s=R(r,c,h);t[h]?(t[h].p(s,l),m(t[h],1)):(t[h]=W(s),t[h].c(),m(t[h],1),t[h].m(e,null))}for(O(),h=c.length;h<t.length;h+=1)n(h);k()}},i(r){if(!a){for(let l=0;l<c.length;l+=1)m(t[l]);a=!0}},o(r){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)A(t[l]);a=!1},d(r){r&&_(e),x(t,r)}}}function W(u){let e,a,c;return a=new se({props:{author:u[1]}}),{c(){e=j("li"),Q(a.$$.fragment)},l(t){e=I(t,"LI",{});var n=E(e);T(a.$$.fragment,n),n.forEach(_)},m(t,n){S(t,e,n),F(a,e,null),c=!0},p(t,n){const r={};n&1&&(r.author=t[1]),a.$set(r)},i(t){c||(m(a.$$.fragment,t),c=!0)},o(t){A(a.$$.fragment,t),c=!1},d(t){t&&_(e),N(a)}}}function q(u){let e,a,c;return a=new se({props:{author:u[0].author}}),{c(){e=j("p"),Q(a.$$.fragment),this.h()},l(t){e=I(t,"P",{class:!0});var n=E(e);T(a.$$.fragment,n),n.forEach(_),this.h()},h(){d(e,"class","svelte-1i6p1cj")},m(t,n){S(t,e,n),F(a,e,null),c=!0},p(t,n){const r={};n&1&&(r.author=t[0].author),a.$set(r)},i(t){c||(m(a.$$.fragment,t),c=!0)},o(t){A(a.$$.fragment,t),c=!1},d(t){t&&_(e),N(a)}}}function ge(u){let e,a,c,t,n,r,l=u[0].title+"",h,s,o,i=u[0].excerpt+"",f,b,U,B,g=u[0].authors&&Z(u),p=u[0].author&&q(u);return{c(){e=j("div"),a=j("img"),t=z(),n=j("div"),r=j("h1"),h=y(l),s=z(),o=j("p"),f=y(i),b=z(),g&&g.c(),U=z(),p&&p.c(),this.h()},l(P){e=I(P,"DIV",{class:!0});var v=E(e);a=I(v,"IMG",{class:!0,src:!0}),t=M(v),n=I(v,"DIV",{class:!0});var w=E(n);r=I(w,"H1",{class:!0});var H=E(r);h=C(H,l),H.forEach(_),s=M(w),o=I(w,"P",{class:!0});var Y=E(o);f=C(Y,i),Y.forEach(_),w.forEach(_),b=M(v),g&&g.l(v),U=M(v),p&&p.l(v),v.forEach(_),this.h()},h(){d(a,"class","thumbnail svelte-1i6p1cj"),$(a.src,c=u[0].thumbnail)||d(a,"src",c),d(r,"class","title svelte-1i6p1cj"),d(o,"class","description svelte-1i6p1cj"),d(n,"class","min-height-section svelte-1i6p1cj"),d(e,"class","page-card svelte-1i6p1cj")},m(P,v){S(P,e,v),L(e,a),L(e,t),L(e,n),L(n,r),L(r,h),L(n,s),L(n,o),L(o,f),L(e,b),g&&g.m(e,null),L(e,U),p&&p.m(e,null),B=!0},p(P,[v]){(!B||v&1&&!$(a.src,c=P[0].thumbnail))&&d(a,"src",c),(!B||v&1)&&l!==(l=P[0].title+"")&&G(h,l),(!B||v&1)&&i!==(i=P[0].excerpt+"")&&G(f,i),P[0].authors?g?(g.p(P,v),v&1&&m(g,1)):(g=Z(P),g.c(),m(g,1),g.m(e,U)):g&&(O(),A(g,1,1,()=>{g=null}),k()),P[0].author?p?(p.p(P,v),v&1&&m(p,1)):(p=q(P),p.c(),m(p,1),p.m(e,null)):p&&(O(),A(p,1,1,()=>{p=null}),k())},i(P){B||(m(g),m(p),B=!0)},o(P){A(g),A(p),B=!1},d(P){P&&_(e),g&&g.d(),p&&p.d()}}}function pe(u,e,a){let{data:c}=e;return u.$$set=t=>{"data"in t&&a(0,c=t.data)},[c]}class ne extends te{constructor(e){super(),le(this,e,pe,ge,ae,{data:0})}}function D(u,e,a){const c=u.slice();return c[1]=e[a],c}function J(u,e,a){const c=u.slice();return c[1]=e[a],c}function V(u){let e,a,c,t,n,r=Object.entries(u[0].index.subdirectories),l=[];for(let s=0;s<r.length;s+=1)l[s]=K(J(u,r,s));const h=s=>A(l[s],1,1,()=>{l[s]=null});return{c(){e=j("h1"),a=y("Subblogs"),c=z(),t=j("section");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=I(s,"H1",{});var o=E(e);a=C(o,"Subblogs"),o.forEach(_),c=M(s),t=I(s,"SECTION",{class:!0});var i=E(t);for(let f=0;f<l.length;f+=1)l[f].l(i);i.forEach(_),this.h()},h(){d(t,"class","index-section svelte-akx94q")},m(s,o){S(s,e,o),L(e,a),S(s,c,o),S(s,t,o);for(let i=0;i<l.length;i+=1)l[i].m(t,null);n=!0},p(s,o){if(o&1){r=Object.entries(s[0].index.subdirectories);let i;for(i=0;i<r.length;i+=1){const f=J(s,r,i);l[i]?(l[i].p(f,o),m(l[i],1)):(l[i]=K(f),l[i].c(),m(l[i],1),l[i].m(t,null))}for(O(),i=r.length;i<l.length;i+=1)h(i);k()}},i(s){if(!n){for(let o=0;o<r.length;o+=1)m(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)A(l[o]);n=!1},d(s){s&&_(e),s&&_(c),s&&_(t),x(l,s)}}}function K(u){let e,a,c,t;return a=new ne({props:{data:u[1][1]}}),{c(){e=j("a"),Q(a.$$.fragment),this.h()},l(n){e=I(n,"A",{href:!0,class:!0});var r=E(e);T(a.$$.fragment,r),r.forEach(_),this.h()},h(){d(e,"href",c=u[1][0]),d(e,"class","svelte-akx94q")},m(n,r){S(n,e,r),F(a,e,null),t=!0},p(n,r){const l={};r&1&&(l.data=n[1][1]),a.$set(l),(!t||r&1&&c!==(c=n[1][0]))&&d(e,"href",c)},i(n){t||(m(a.$$.fragment,n),t=!0)},o(n){A(a.$$.fragment,n),t=!1},d(n){n&&_(e),N(a)}}}function X(u){let e,a,c,t,n,r=Object.entries(u[0].index.pages),l=[];for(let s=0;s<r.length;s+=1)l[s]=ee(D(u,r,s));const h=s=>A(l[s],1,1,()=>{l[s]=null});return{c(){e=j("h1"),a=y("Pages"),c=z(),t=j("section");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=I(s,"H1",{});var o=E(e);a=C(o,"Pages"),o.forEach(_),c=M(s),t=I(s,"SECTION",{class:!0});var i=E(t);for(let f=0;f<l.length;f+=1)l[f].l(i);i.forEach(_),this.h()},h(){d(t,"class","index-section svelte-akx94q")},m(s,o){S(s,e,o),L(e,a),S(s,c,o),S(s,t,o);for(let i=0;i<l.length;i+=1)l[i].m(t,null);n=!0},p(s,o){if(o&1){r=Object.entries(s[0].index.pages);let i;for(i=0;i<r.length;i+=1){const f=D(s,r,i);l[i]?(l[i].p(f,o),m(l[i],1)):(l[i]=ee(f),l[i].c(),m(l[i],1),l[i].m(t,null))}for(O(),i=r.length;i<l.length;i+=1)h(i);k()}},i(s){if(!n){for(let o=0;o<r.length;o+=1)m(l[o]);n=!0}},o(s){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)A(l[o]);n=!1},d(s){s&&_(e),s&&_(c),s&&_(t),x(l,s)}}}function ee(u){let e,a,c,t;return a=new ne({props:{data:u[1][1]}}),{c(){e=j("a"),Q(a.$$.fragment),this.h()},l(n){e=I(n,"A",{href:!0,class:!0});var r=E(e);T(a.$$.fragment,r),r.forEach(_),this.h()},h(){d(e,"href",c=u[1][0]),d(e,"class","svelte-akx94q")},m(n,r){S(n,e,r),F(a,e,null),t=!0},p(n,r){const l={};r&1&&(l.data=n[1][1]),a.$set(l),(!t||r&1&&c!==(c=n[1][0]))&&d(e,"href",c)},i(n){t||(m(a.$$.fragment,n),t=!0)},o(n){A(a.$$.fragment,n),t=!1},d(n){n&&_(e),N(a)}}}function be(u){let e,a,c,t,n,r=Object.keys(u[0].index.subdirectories).length!=0,l,h=Object.keys(u[0].index.pages).length!=0,s;document.title=e="boraini.com - "+u[0].index.metadata.title;let o=r&&V(u),i=h&&X(u);return{c(){a=j("meta"),t=z(),n=j("main"),o&&o.c(),l=z(),i&&i.c(),this.h()},l(f){const b=he('[data-svelte="svelte-139gm1z"]',document.head);a=I(b,"META",{name:!0,content:!0}),b.forEach(_),t=M(f),n=I(f,"MAIN",{class:!0});var U=E(n);o&&o.l(U),l=M(U),i&&i.l(U),U.forEach(_),this.h()},h(){d(a,"name","description"),d(a,"content",c=`Pages and Subblogs in ${u[0].index.metadata.title}`),d(n,"class","index svelte-akx94q")},m(f,b){L(document.head,a),S(f,t,b),S(f,n,b),o&&o.m(n,null),L(n,l),i&&i.m(n,null),s=!0},p(f,[b]){(!s||b&1)&&e!==(e="boraini.com - "+f[0].index.metadata.title)&&(document.title=e),(!s||b&1&&c!==(c=`Pages and Subblogs in ${f[0].index.metadata.title}`))&&d(a,"content",c),b&1&&(r=Object.keys(f[0].index.subdirectories).length!=0),r?o?(o.p(f,b),b&1&&m(o,1)):(o=V(f),o.c(),m(o,1),o.m(n,l)):o&&(O(),A(o,1,1,()=>{o=null}),k()),b&1&&(h=Object.keys(f[0].index.pages).length!=0),h?i?(i.p(f,b),b&1&&m(i,1)):(i=X(f),i.c(),m(i,1),i.m(n,null)):i&&(O(),A(i,1,1,()=>{i=null}),k())},i(f){s||(m(o),m(i),s=!0)},o(f){A(o),A(i),s=!1},d(f){_(a),f&&_(t),f&&_(n),o&&o.d(),i&&i.d()}}}function ve(u,e,a){let{data:c}=e;return u.$$set=t=>{"data"in t&&a(0,c=t.data)},[c]}class we extends te{constructor(e){super(),le(this,e,ve,be,ae,{data:0})}}export{we as I,ze as _,Me as a,Be as b,ke as d,Oe as p};
