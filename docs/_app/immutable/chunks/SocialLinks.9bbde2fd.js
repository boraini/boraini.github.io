import{s as L,n as g,k as b}from"./scheduler.014bc20e.js";import{S as j,i as A,g as r,h as p,j as _,f as u,k as o,a as E,G as O,m as $,n as q,B as m,o as y}from"./index.bf2c274e.js";function k(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function w(a,t,n){const e=a.slice();return e[1]=t[n],e}function S(a){let t,n,e,l=a[1]+"",c,s,f;return{c(){t=r("li"),n=r("a"),e=r("p"),c=$(l),this.h()},l(h){t=p(h,"LI",{class:!0});var i=_(t);n=p(i,"A",{href:!0,target:!0,class:!0});var v=_(n);e=p(v,"P",{class:!0});var d=_(e);c=q(d,l),d.forEach(u),v.forEach(u),i.forEach(u),this.h()},h(){o(e,"class",s=b(`icon ${a[1]}`)+" svelte-1pw0h9l"),o(n,"href",f=a[0][a[1]]),o(n,"target","_blank"),o(n,"class","svelte-1pw0h9l"),o(t,"class","svelte-1pw0h9l")},m(h,i){E(h,t,i),m(t,n),m(n,e),m(e,c)},p(h,i){i&1&&l!==(l=h[1]+"")&&y(c,l),i&1&&s!==(s=b(`icon ${h[1]}`)+" svelte-1pw0h9l")&&o(e,"class",s),i&1&&f!==(f=h[0][h[1]])&&o(n,"href",f)},d(h){h&&u(t)}}}function B(a){let t,n=k(Object.keys(a[0])),e=[];for(let l=0;l<n.length;l+=1)e[l]=S(w(a,n,l));return{c(){t=r("ul");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=p(l,"UL",{class:!0});var c=_(t);for(let s=0;s<e.length;s+=1)e[s].l(c);c.forEach(u),this.h()},h(){o(t,"class","social-links svelte-1pw0h9l")},m(l,c){E(l,t,c);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(l,[c]){if(c&1){n=k(Object.keys(l[0]));let s;for(s=0;s<n.length;s+=1){const f=w(l,n,s);e[s]?e[s].p(f,c):(e[s]=S(f),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=n.length}},i:g,o:g,d(l){l&&u(t),O(e,l)}}}function C(a,t,n){let{social:e}=t;return a.$$set=l=>{"social"in l&&n(0,e=l.social)},[e]}class P extends j{constructor(t){super(),A(this,t,C,B,L,{social:0})}}export{P as S,k as e};
