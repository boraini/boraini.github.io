import{_ as n,a as c}from"../../chunks/boraini-21d826a9.js";import{_ as p,a as m,b as l,c as g,d as u,e as d,p as h,I as f}from"../../chunks/_IndexPage-d60c63cd.js";import{_ as b,a as v,b as w}from"../../chunks/acceleration-data-structures-f16aa0cc.js";import{_ as $,a as j,b as x,c as y}from"../../chunks/local-and-world-space-e91077a2.js";import{_ as P,a as I}from"../../chunks/projective-space-382acdea.js";import{_ as B}from"../../chunks/hidden-surface-removal-c75dc3e4.js";import{_ as z}from"../../chunks/linear-and-affine-transformations-2b942b9f.js";import{_ as C}from"../../chunks/texture-mapping-e1788145.js";import{_ as M}from"../../chunks/just-go-for-it-cff11bdf.js";import{S,i as k,s as q,x as O,y as A,z as D,f as E,t as F,C as G}from"../../chunks/index-2fdc1048.js";import"../../chunks/_author_layout.svelte_svelte_type_style_lang-f8232355.js";import"../../chunks/_blog_layout-34b26a2e.js";function H(r){let t,a;return t=new f({props:{data:r[0]}}),{c(){O(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,o){D(t,e,o),a=!0},p(e,[o]){const s={};o&1&&(s.data=e[0]),t.$set(s)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){F(t.$$.fragment,e),a=!1},d(e){G(t,e)}}}const aa=!1,_=Object.assign({"./authors/boraini.md":n,"./authors/trilizard-sleeping.svg":c,"./computer-graphics/_acceleration-data-structures/ads-thumbnail.svg":p,"./computer-graphics/_acceleration-data-structures/bvh-median.svg":b,"./computer-graphics/_acceleration-data-structures/bvh-midpoint.svg":v,"./computer-graphics/_local-and-world-space/character-arm.svg":$,"./computer-graphics/_local-and-world-space/object-hierarchy-basic.svg":j,"./computer-graphics/_local-and-world-space/object-hierarchy-complete.svg":x,"./computer-graphics/_projective-space/frustum.svg":P,"./computer-graphics/_texture-mapping/snowboarder_original.png":m,"./computer-graphics/acceleration-data-structures.md":w,"./computer-graphics/hidden-surface-removal.md":B,"./computer-graphics/linear-and-affine-transformations.md":z,"./computer-graphics/linear-and-affine-transformations.png":l,"./computer-graphics/local-and-world-space.md":y,"./computer-graphics/projective-space.md":I,"./computer-graphics/texture-mapping.md":C,"./computer-graphics/triangle.png":g,"./personal/_personal/thumbnail.svg":u,"./personal/just-go-for-it.md":M});async function i(r,t){const a={...r};return a.thumbnail&&(a.thumbnail=_["./"+h.join(a.assetPath,a.thumbnail)].default),a.authors&&typeof a.authors[0]=="string"&&(a.authors=await Promise.all(a.authors.map(e=>t(`/blog/authorInfo?nickname=${e}`).then(o=>o.json()))),console.log(a.authors)),a}async function ta({fetch:r}){const t=await r("/blog/articles?path=").then(a=>a.json());for(let a in t.pages){const e=_["./"+t.pages[a].filePath].metadata||d(a);e.assetPath=t.pages[a].assetPath,t.pages[a]=await i(e,r)}for(let a in t.subdirectories){const e=t.subdirectories[a];t.subdirectories[a]=await i(e,r)}return t.metadata.title="Blog",{props:{data:{index:t,title:"Blog"}}}}function J(r,t,a){let{data:e}=t;return r.$$set=o=>{"data"in o&&a(0,e=o.data)},[e]}class ea extends S{constructor(t){super(),k(this,t,J,H,q,{data:0})}}export{ea as default,aa as hydrate,ta as load};
