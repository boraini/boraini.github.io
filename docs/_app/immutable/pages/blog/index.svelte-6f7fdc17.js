import{_ as m,a as _}from"../../chunks/boraini-91d25bd5.js";import{_ as l}from"../../chunks/hidden-surface-removal-88767a23.js";import{_ as p}from"../../chunks/linear-and-affine-transformations-81a1177c.js";import{_ as c,a as u,d,p as g,I as f}from"../../chunks/_IndexPage-8d81111c.js";import{S as h,i as b,s as $,x as v,y as x,z as y,f as P,t as w,C as j}from"../../chunks/index-d73a3999.js";import"../../chunks/_author_layout.svelte_svelte_type_style_lang-3051d5eb.js";import"../../chunks/_blog_layout-7d607f8c.js";function I(o){let a,t;return a=new f({props:{data:o[0]}}),{c(){v(a.$$.fragment)},l(e){x(a.$$.fragment,e)},m(e,s){y(a,e,s),t=!0},p(e,[s]){const n={};s&1&&(n.data=e[0]),a.$set(n)},i(e){t||(P(a.$$.fragment,e),t=!0)},o(e){w(a.$$.fragment,e),t=!1},d(e){j(a,e)}}}const A=!1,i=Object.assign({"./authors/boraini.md":m,"./authors/trilizard-sleeping.svg":_,"./computer-graphics/hidden-surface-removal.md":l,"./computer-graphics/linear-and-affine-transformations.md":p,"./computer-graphics/linear-and-affine-transformations.png":c,"./computer-graphics/triangle.png":u});async function r(o,a){const t={...o};return t.thumbnail&&(t.thumbnail=i["./"+g.join(t.assetPath,t.thumbnail)].default),t.authors&&typeof t.authors[0]=="string"&&(t.authors=await Promise.all(t.authors.map(e=>a(`/blog/authorInfo?nickname=${e}`).then(s=>s.json()))),console.log(t.authors)),t}async function D({fetch:o}){const a=await o("/blog/articles?path=").then(t=>t.json());for(let t in a.pages){const e=i["./"+a.pages[t].filePath].metadata||d(t);e.assetPath=a.pages[t].assetPath,a.pages[t]=await r(e,o)}for(let t in a.subdirectories){const e=a.subdirectories[t];a.subdirectories[t]=await r(e,o)}return a.metadata.title="Blog",{props:{data:{index:a,title:"Blog"}}}}function B(o,a,t){let{data:e}=a;return o.$$set=s=>{"data"in s&&t(0,e=s.data)},[e]}class E extends h{constructor(a){super(),b(this,a,B,I,$,{data:0})}}export{E as default,A as hydrate,D as load};
