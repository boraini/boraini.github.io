import{_ as c}from"../../chunks/boraini-b5b95838.js";import{_ as p}from"../../chunks/hidden-surface-removal-08374d91.js";import{_ as u}from"../../chunks/linear-and-affine-transformations-ad53c064.js";import{_,a as l,d,p as r,I as f}from"../../chunks/_IndexPage-4468fe91.js";import{S as g,i as h,s as b,x as $,y as v,z as x,f as y,t as P,C as j}from"../../chunks/index-de7e00d5.js";import"../../chunks/_blog_layout-9daa0adc.js";function w(s){let e,a;return e=new f({props:{data:s[0]}}),{c(){$(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,n){x(e,t,n),a=!0},p(t,[n]){const o={};n&1&&(o.data=t[0]),e.$set(o)},i(t){a||(y(e.$$.fragment,t),a=!0)},o(t){P(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}const B=!1,m=Object.assign({"./authors/boraini.md":c,"./computer-graphics/hidden-surface-removal.md":p,"./computer-graphics/linear-and-affine-transformations.md":u,"./computer-graphics/linear-and-affine-transformations.png":_,"./computer-graphics/triangle.png":l});async function i(s,e){const a={...s};return a.thumbnail&&(console.log("./"+r.join(a.assetPath,a.thumbnail)),a.thumbnail=m["./"+r.join(a.assetPath,a.thumbnail)].default),a.authors&&typeof a.authors[0]=="string"&&(a.authors=await Promise.all(a.authors.map(t=>e(`/blog/authorInfo?nickname=${t}`).then(n=>n.json())))),a}async function D({params:s,fetch:e}){const a=await e("/blog/articles?path="+s.slug).then(t=>t.json());for(let t in a.pages){const n=m["./"+a.pages[t].filePath].metadata||d(t);n.assetPath=a.pages[t].assetPath,a.pages[t]=await i(n,e)}for(let t in a.subdirectories){let n=a.subdirectories[t];a.subdirectories[t]=await i(n,e)}return{props:{data:{index:a}}}}function I(s,e,a){let{data:t}=e;return s.$$set=n=>{"data"in n&&a(0,t=n.data)},[t]}class O extends g{constructor(e){super(),h(this,e,I,w,b,{data:0})}}export{O as default,B as hydrate,D as load};