import{_ as p,a as c}from"../../chunks/boraini-a8f150d1.js";import{_ as m,a as l,b as g,c as u}from"../../chunks/local-and-world-space-eb2e15b5.js";import{_ as d,a as f}from"../../chunks/projective-space-1d6982d8.js";import{_ as h,a as b,b as v,c as j,d as w,p as i,I as $}from"../../chunks/_IndexPage-fbaa64fd.js";import{_ as x}from"../../chunks/hidden-surface-removal-9ad67db1.js";import{_ as y}from"../../chunks/linear-and-affine-transformations-d2fb14e1.js";import{_ as P}from"../../chunks/texture-mapping-bca9d9f5.js";import{_ as I}from"../../chunks/just-go-for-it-6a810600.js";import{S as z,i as C,s as M,x as S,y as k,z as q,f as B,t as D,C as O}from"../../chunks/index-8e6002e7.js";import"../../chunks/_author_layout.svelte_svelte_type_style_lang-1d56dbad.js";import"../../chunks/_blog_layout-7e7a0e1d.js";function U(r){let e,a;return e=new $({props:{data:r[0]}}),{c(){S(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,o){q(e,t,o),a=!0},p(t,[o]){const s={};o&1&&(s.data=t[0]),e.$set(s)},i(t){a||(B(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){O(e,t)}}}const V=!1,n=Object.assign({"./authors/boraini.md":p,"./authors/trilizard-sleeping.svg":c,"./computer-graphics/_local-and-world-space/character-arm.svg":m,"./computer-graphics/_local-and-world-space/object-hierarchy-basic.svg":l,"./computer-graphics/_local-and-world-space/object-hierarchy-complete.svg":g,"./computer-graphics/_projective-space/frustum.svg":d,"./computer-graphics/_texture-mapping/snowboarder_original.png":h,"./computer-graphics/hidden-surface-removal.md":x,"./computer-graphics/linear-and-affine-transformations.md":y,"./computer-graphics/linear-and-affine-transformations.png":b,"./computer-graphics/local-and-world-space.md":u,"./computer-graphics/projective-space.md":f,"./computer-graphics/texture-mapping.md":P,"./computer-graphics/triangle.png":v,"./personal/_personal/thumbnail.svg":j,"./personal/just-go-for-it.md":I});async function _(r,e){const a={...r};return a.thumbnail&&(console.log("./"+i.join(a.assetPath,a.thumbnail)),a.thumbnail=n["./"+i.join(a.assetPath,a.thumbnail)].default),a.authors&&typeof a.authors[0]=="string"&&(a.authors=await Promise.all(a.authors.map(t=>e(`/blog/authorInfo?nickname=${t}`).then(o=>o.json())))),a}async function W({params:r,fetch:e}){const a=await e("/blog/articles?path="+r.slug).then(t=>t.json());for(let t in a.pages){const o=n["./"+a.pages[t].filePath].metadata||w(t);o.assetPath=a.pages[t].assetPath,a.pages[t]=await _(o,e)}for(let t in a.subdirectories){let o=a.subdirectories[t];a.subdirectories[t]=await _(o,e)}return{props:{data:{index:a}}}}function A(r,e,a){let{data:t}=e;return r.$$set=o=>{"data"in o&&a(0,t=o.data)},[t]}class X extends z{constructor(e){super(),C(this,e,A,U,M,{data:0})}}export{X as default,V as hydrate,W as load};
