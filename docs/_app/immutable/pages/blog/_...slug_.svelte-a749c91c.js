import{_ as u}from"../../chunks/boraini-ca8e7afa.js";import{_ as c}from"../../chunks/hidden-surface-removal-c778704f.js";import{_ as l,d as p,p as r,I as d}from"../../chunks/_IndexPage-1785588f.js";import{S as _,i as f,s as g,x as h,y as b,z as $,f as x,t as y,C as P}from"../../chunks/index-85b98948.js";function j(n){let e,t;return e=new d({props:{data:n[0]}}),{c(){h(e.$$.fragment)},l(a){b(e.$$.fragment,a)},m(a,s){$(e,a,s),t=!0},p(a,[s]){const o={};s&1&&(o.data=a[0]),e.$set(o)},i(a){t||(x(e.$$.fragment,a),t=!0)},o(a){y(e.$$.fragment,a),t=!1},d(a){P(e,a)}}}const S=!1,m=Object.assign({"./authors/boraini.md":u,"./computer-graphics/hidden-surface-removal.md":c,"./computer-graphics/triangle.png":l});async function i(n,e){const t={...n};return t.thumbnail&&(console.log("./"+r.join(t.assetPath,t.thumbnail)),t.thumbnail=m["./"+r.join(t.assetPath,t.thumbnail)].default),t.authors&&typeof t.authors[0]=="string"&&(t.authors=await Promise.all(t.authors.map(a=>e(`/blog/authorInfo?nickname=${a}`).then(s=>s.json())))),t}async function k({params:n,fetch:e}){const t=await e("/blog/articles?path="+n.slug).then(a=>a.json());for(let a in t.pages){const s=m["./"+t.pages[a].filePath].metadata||p(a);s.assetPath=t.pages[a].assetPath,t.pages[a]=await i(s,e)}for(let a in t.subdirectories){let s=t.subdirectories[a];t.subdirectories[a]=await i(s,e)}return{props:{data:{index:t}}}}function v(n,e,t){let{data:a}=e;return n.$$set=s=>{"data"in s&&t(0,a=s.data)},[a]}class q extends _{constructor(e){super(),f(this,e,v,j,g,{data:0})}}export{q as default,S as hydrate,k as load};