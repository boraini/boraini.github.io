import{S as xn,i as jn,s as zn,l as z,u as P,m as x,p as h,v as H,h as a,q as s,b as y,G as u,w as gn,n as _n,J as ts,a as I,K as os,c as L,f as kn,g as ps,t as yn,d as rs,N as ls,O as cs,P as is,x as Hn,y as Dn,z as Bn,C as Sn,R as X,T as G,r as C,U as En,V as us,o as ks,H as fs,D as Ln,A as hs,B as Kn,Q as Qn}from"./index-85b98948.js";function ms(p){let e,t=p[0].name+"",o;return{c(){e=z("p"),o=P(t),this.h()},l(r){e=x(r,"P",{class:!0});var c=h(e);o=H(c,t),c.forEach(a),this.h()},h(){s(e,"class","author-card svelte-1pnfsom")},m(r,c){y(r,e,c),u(e,o)},p(r,[c]){c&1&&t!==(t=r[0].name+"")&&gn(o,t)},i:_n,o:_n,d(r){r&&a(e)}}}function ds(p,e,t){let{author:o}=e;return p.$$set=r=>{"author"in r&&t(0,o=r.author)},[o]}class ys extends xn{constructor(e){super(),jn(this,e,ds,ms,zn,{author:0})}}function Zn(p){let e,t;return{c(){e=z("h2"),t=P(p[1]),this.h()},l(o){e=x(o,"H2",{class:!0});var r=h(e);t=H(r,p[1]),r.forEach(a),this.h()},h(){s(e,"class","post-description")},m(o,r){y(o,e,r),u(e,t)},p(o,r){r&2&&gn(t,o[1])},d(o){o&&a(e)}}}function $n(p){let e,t;return{c(){e=P("on "),t=P(p[3])},l(o){e=H(o,"on "),t=H(o,p[3])},m(o,r){y(o,e,r),y(o,t,r)},p(o,r){r&8&&gn(t,o[3])},d(o){o&&a(e),o&&a(t)}}}function ns(p){let e,t,o,r,c;return o=new ys({props:{author:p[2]}}),{c(){e=P("by "),t=z("a"),Hn(o.$$.fragment),this.h()},l(l){e=H(l,"by "),t=x(l,"A",{href:!0});var _=h(t);Dn(o.$$.fragment,_),_.forEach(a),this.h()},h(){s(t,"href",r=p[2].page)},m(l,_){y(l,e,_),y(l,t,_),Bn(o,t,null),c=!0},p(l,_){const v={};_&4&&(v.author=l[2]),o.$set(v),(!c||_&4&&r!==(r=l[2].page))&&s(t,"href",r)},i(l){c||(kn(o.$$.fragment,l),c=!0)},o(l){yn(o.$$.fragment,l),c=!1},d(l){l&&a(e),l&&a(t),Sn(o)}}}function _s(p){let e,t,o,r,c,l,_,v,B,E,k,R,M,F;document.title=e="boraini.com - "+p[0];let i=p[1]&&Zn(p),d=p[3]&&$n(p),g=p[2]&&ns(p);const S=p[7].default,j=ts(S,p,p[6],null);return{c(){t=z("meta"),o=z("link"),r=I(),c=z("div"),l=z("main"),_=z("h1"),v=P(p[0]),B=I(),i&&i.c(),E=I(),k=z("p"),d&&d.c(),R=I(),g&&g.c(),M=I(),j&&j.c(),this.h()},l(f){const m=os('[data-svelte="svelte-orjt86"]',document.head);t=x(m,"META",{name:!0,content:!0}),o=x(m,"LINK",{rel:!0,href:!0}),m.forEach(a),r=L(f),c=x(f,"DIV",{class:!0});var q=h(c);l=x(q,"MAIN",{class:!0});var D=h(l);_=x(D,"H1",{class:!0});var O=h(_);v=H(O,p[0]),O.forEach(a),B=L(D),i&&i.l(D),E=L(D),k=x(D,"P",{});var J=h(k);d&&d.l(J),R=L(J),g&&g.l(J),J.forEach(a),M=L(D),j&&j.l(D),D.forEach(a),q.forEach(a),this.h()},h(){s(t,"name","description"),s(t,"content",p[1]),s(o,"rel","stylesheet"),s(o,"href","/stylesheets/prism-duotone-dark.css"),s(_,"class","post-title svelte-1skmhio"),s(l,"class","post svelte-1skmhio"),s(c,"class","post-margin svelte-1skmhio")},m(f,m){u(document.head,t),u(document.head,o),y(f,r,m),y(f,c,m),u(c,l),u(l,_),u(_,v),u(l,B),i&&i.m(l,null),u(l,E),u(l,k),d&&d.m(k,null),u(k,R),g&&g.m(k,null),u(l,M),j&&j.m(l,null),F=!0},p(f,[m]){(!F||m&1)&&e!==(e="boraini.com - "+f[0])&&(document.title=e),(!F||m&2)&&s(t,"content",f[1]),(!F||m&1)&&gn(v,f[0]),f[1]?i?i.p(f,m):(i=Zn(f),i.c(),i.m(l,E)):i&&(i.d(1),i=null),f[3]?d?d.p(f,m):(d=$n(f),d.c(),d.m(k,R)):d&&(d.d(1),d=null),f[2]?g?(g.p(f,m),m&4&&kn(g,1)):(g=ns(f),g.c(),kn(g,1),g.m(k,null)):g&&(ps(),yn(g,1,1,()=>{g=null}),rs()),j&&j.p&&(!F||m&64)&&ls(j,S,f,f[6],F?is(S,f[6],m,null):cs(f[6]),null)},i(f){F||(kn(g),kn(j,f),F=!0)},o(f){yn(g),yn(j,f),F=!1},d(f){a(t),a(o),f&&a(r),f&&a(c),i&&i.d(),d&&d.d(),g&&g.d(),j&&j.d(f)}}}function gs(p,e,t){let{$$slots:o={},$$scope:r}=e,{title:c}=e,{excerpt:l}=e,{author:_}=e,{thumbnail:v}=e,{tags:B}=e,{date:E}=e;return p.$$set=k=>{"title"in k&&t(0,c=k.title),"excerpt"in k&&t(1,l=k.excerpt),"author"in k&&t(2,_=k.author),"thumbnail"in k&&t(4,v=k.thumbnail),"tags"in k&&t(5,B=k.tags),"date"in k&&t(3,E=k.date),"$$scope"in k&&t(6,r=k.$$scope)},[c,l,_,E,v,B,r,o]}class bs extends xn{constructor(e){super(),jn(this,e,gs,_s,zn,{title:0,excerpt:1,author:2,thumbnail:4,tags:5,date:3})}}function vs(p){let e,t,o,r,c,l,_,v,B,E,k,R,M,F,i,d,g,S,j,f,m,q,D,O,J,U,Q,V,A,N,$,W,tn,nn,Y,on,sn,rn,ln;return{c(){e=z("div"),t=document.createElementNS("w3.org/2000/svg","svg"),o=X("defs"),r=X("marker"),c=X("path"),l=X("marker"),_=X("path"),v=X("marker"),B=X("path"),E=X("g"),k=X("line"),d=X("line"),m=X("line"),U=X("text"),Q=P(p[2]),V=X("g"),A=X("circle"),W=X("circle"),Y=X("circle"),this.h()},l(w){e=x(w,"DIV",{class:!0});var T=h(e);t=x(T,"svg",{class:!0,xmlns:!0,viewBox:!0});var an=h(t);o=G(an,"defs",{});var Z=h(o);r=G(Z,"marker",{id:!0,viewBox:!0,refX:!0,refY:!0,markerWidth:!0,markerHeight:!0,orient:!0});var fn=h(r);c=G(fn,"path",{d:!0,style:!0}),h(c).forEach(a),fn.forEach(a),l=G(Z,"marker",{id:!0,viewBox:!0,refX:!0,refY:!0,markerWidth:!0,markerHeight:!0,orient:!0});var cn=h(l);_=G(cn,"path",{d:!0,style:!0}),h(_).forEach(a),cn.forEach(a),v=G(Z,"marker",{id:!0,viewBox:!0,refX:!0,refY:!0,markerWidth:!0,markerHeight:!0,orient:!0});var en=h(v);B=G(en,"path",{d:!0,style:!0}),h(B).forEach(a),en.forEach(a),Z.forEach(a),E=G(an,"g",{id:!0,style:!0});var pn=h(E);k=G(pn,"line",{x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),h(k).forEach(a),d=G(pn,"line",{x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),h(d).forEach(a),m=G(pn,"line",{x1:!0,y1:!0,x2:!0,y2:!0,style:!0}),h(m).forEach(a),pn.forEach(a),U=G(an,"text",{x:!0,y:!0,"font-size":!0,style:!0});var un=h(U);Q=H(un,p[2]),un.forEach(a),V=G(an,"g",{id:!0,style:!0});var K=h(V);A=G(K,"circle",{id:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),h(A).forEach(a),W=G(K,"circle",{id:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),h(W).forEach(a),Y=G(K,"circle",{id:!0,cx:!0,cy:!0,r:!0,fill:!0,stroke:!0,"stroke-width":!0}),h(Y).forEach(a),K.forEach(a),an.forEach(a),T.forEach(a),this.h()},h(){s(c,"d","M 0 0 L 10 5 L 0 10 z"),C(c,"fill","red"),s(r,"id","arrow1"),s(r,"viewBox","0 0 10 10"),s(r,"refX","5"),s(r,"refY","5"),s(r,"markerWidth","50"),s(r,"markerHeight","25"),s(r,"orient","auto-start-reverse"),s(_,"d","M 0 0 L 10 5 L 0 10 z"),C(_,"fill","var(--page-foreground)"),s(l,"id","arrow2"),s(l,"viewBox","0 0 10 10"),s(l,"refX","5"),s(l,"refY","5"),s(l,"markerWidth","50"),s(l,"markerHeight","25"),s(l,"orient","auto-start-reverse"),s(B,"d","M 0 0 L 10 5 L 0 10 z"),C(B,"fill","aqua"),s(v,"id","arrow3"),s(v,"viewBox","0 0 10 10"),s(v,"refX","5"),s(v,"refY","5"),s(v,"markerWidth","50"),s(v,"markerHeight","25"),s(v,"orient","auto-start-reverse"),s(k,"x1",R=p[0][0][0]),s(k,"y1",M=p[0][0][1]),s(k,"x2",F=p[0][1][0]),s(k,"y2",i=p[0][1][1]),C(k,"--stroke-color","red"),C(k,"stroke","var(--stroke-color)"),C(k,"marker-end","url(#arrow1)"),C(k,"stroke-width","0.1"),s(d,"x1",g=p[0][1][0]),s(d,"y1",S=p[0][1][1]),s(d,"x2",j=p[0][2][0]),s(d,"y2",f=p[0][2][1]),C(d,"--stroke-color","var(--page-foreground)"),C(d,"stroke","var(--stroke-color)"),C(d,"marker-end","url(#arrow2)"),C(d,"stroke-width","0.1"),s(m,"x1",q=p[0][2][0]),s(m,"y1",D=p[0][2][1]),s(m,"x2",O=p[0][0][0]),s(m,"y2",J=p[0][0][1]),C(m,"--stroke-color","aqua"),C(m,"stroke","var(--stroke-color)"),C(m,"marker-start","url(#arrow3)"),C(m,"stroke-width","0.1"),s(E,"id","trianglelayer"),C(E,"transform","scaleY(-1)"),s(U,"x","-10"),s(U,"y","10"),s(U,"font-size","1.6"),C(U,"fill","var(--page-foreground)"),s(A,"id","pointer-1"),s(A,"cx",N=p[0][0][0]),s(A,"cy",$=p[0][0][1]),s(A,"r","0.8"),s(A,"fill","#f00"),s(A,"stroke","#000"),s(A,"stroke-width","0.1"),s(W,"id","pointer-2"),s(W,"cx",tn=p[0][1][0]),s(W,"cy",nn=p[0][1][1]),s(W,"r","0.8"),s(W,"fill","#f00"),s(W,"stroke","#000"),s(W,"stroke-width","0.1"),s(Y,"id","pointer-3"),s(Y,"cx",on=p[0][2][0]),s(Y,"cy",sn=p[0][2][1]),s(Y,"r","0.8"),s(Y,"fill","#f00"),s(Y,"stroke","#000"),s(Y,"stroke-width","0.1"),s(V,"id","pointerlayer"),C(V,"transform","scaleY(-1)"),s(t,"class","compass-menu svelte-s9mvsj"),s(t,"xmlns","w3.org/2000/svg"),s(t,"viewBox","-12 -12 24 24"),s(e,"class","applet")},m(w,T){y(w,e,T),u(e,t),u(t,o),u(o,r),u(r,c),u(o,l),u(l,_),u(o,v),u(v,B),u(t,E),u(E,k),u(E,d),u(E,m),u(t,U),u(U,Q),u(t,V),u(V,A),u(V,W),u(V,Y),p[6](t),rn||(ln=[En(t,"pointerdown",p[3]),En(t,"pointerup",p[5]),En(t,"pointermove",p[4]),En(t,"scroll",ws)],rn=!0)},p(w,[T]){T&1&&R!==(R=w[0][0][0])&&s(k,"x1",R),T&1&&M!==(M=w[0][0][1])&&s(k,"y1",M),T&1&&F!==(F=w[0][1][0])&&s(k,"x2",F),T&1&&i!==(i=w[0][1][1])&&s(k,"y2",i),T&1&&g!==(g=w[0][1][0])&&s(d,"x1",g),T&1&&S!==(S=w[0][1][1])&&s(d,"y1",S),T&1&&j!==(j=w[0][2][0])&&s(d,"x2",j),T&1&&f!==(f=w[0][2][1])&&s(d,"y2",f),T&1&&q!==(q=w[0][2][0])&&s(m,"x1",q),T&1&&D!==(D=w[0][2][1])&&s(m,"y1",D),T&1&&O!==(O=w[0][0][0])&&s(m,"x2",O),T&1&&J!==(J=w[0][0][1])&&s(m,"y2",J),T&4&&gn(Q,w[2]),T&1&&N!==(N=w[0][0][0])&&s(A,"cx",N),T&1&&$!==($=w[0][0][1])&&s(A,"cy",$),T&1&&tn!==(tn=w[0][1][0])&&s(W,"cx",tn),T&1&&nn!==(nn=w[0][1][1])&&s(W,"cy",nn),T&1&&on!==(on=w[0][2][0])&&s(Y,"cx",on),T&1&&sn!==(sn=w[0][2][1])&&s(Y,"cy",sn)},i:_n,o:_n,d(w){w&&a(e),p[6](null),rn=!1,us(ln)}}}const ws=p=>p.preventDefault();function Es(p,e,t){let{corners:o=[[-5,-5],[-4,8],[5,-3]]}=e,{compassField:r}=e,{message:c="Try dragging the red dots."}=e;var l={x:-12,y:-12,width:24,height:24};function _(){r||t(1,r=window.COMPASS_FIELD),v=r.getBoundingClientRect()}var v;function B(i,d){var g=(i-v.left)/v.width*l.width+l.x;g>10?g=10:g<-10&&(g=-10);var S=-(d-v.top)/v.height*l.height-l.y;S>10?S=10:S<-10&&(S=-10);let j=1/0,f;for(let D of o){const O=Math.hypot(D[0]-g,D[1]-S);O<j&&(j=O,f=D)}f[0]=g,f[1]=S,t(0,o);const m=[o[1][0]-o[0][0],o[1][1]-o[0][1]],q=[o[2][0]-o[0][0],o[2][1]-o[0][1]];t(2,c=`Triangle is facing ${q[0]*m[1]-q[1]*m[0]>0?"front":"back"}.`)}var E=void 0;function k(i){i.preventDefault(),E||(E=i.pointerId,console.log(E),B(i.clientX,i.clientY))}function R(i){i.preventDefault(),i.pointerId==E&&B(i.clientX,i.clientY)}function M(i){i.preventDefault(),i.pointerId==E&&(E=void 0)}ks(()=>{window.COMPASS_FIELD=r,addEventListener("resize",_,{passive:!0}),addEventListener("scroll",_,{passive:!0}),_()});function F(i){fs[i?"unshift":"push"](()=>{r=i,t(1,r)})}return p.$$set=i=>{"corners"in i&&t(0,o=i.corners),"compassField"in i&&t(1,r=i.compassField),"message"in i&&t(2,c=i.message)},[o,r,c,k,R,M,F]}class xs extends xn{constructor(e){super(),jn(this,e,Es,vs,zn,{corners:0,compassField:1,message:2})}}function js(p){let e,t,o,r,c,l,_,v,B,E,k,R,M,F=`<code class="language-glsl"><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">extension</span> <span class="token expression">GL_OES_standard_derivatives <span class="token operator">:</span> enable</span></span>

<span class="token keyword">precision</span> <span class="token keyword">highp</span> <span class="token keyword">float</span><span class="token punctuation">;</span>

<span class="token comment">//GLSL Sandbox Uniform</span>
<span class="token keyword">uniform</span> <span class="token keyword">vec2</span> resolution<span class="token punctuation">;</span>

<span class="token comment">//Clockwise order has to be a, b, c. a, b, c have already been projected.</span>
<span class="token keyword">bool</span> <span class="token function">isFront</span><span class="token punctuation">(</span><span class="token keyword">vec4</span> a<span class="token punctuation">,</span> <span class="token keyword">vec4</span> b<span class="token punctuation">,</span> <span class="token keyword">vec4</span> c<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">vec3</span> atob <span class="token operator">=</span> <span class="token punctuation">(</span>b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span>xyz<span class="token punctuation">;</span>
	<span class="token keyword">vec3</span> atoc <span class="token operator">=</span> <span class="token punctuation">(</span>c <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">.</span>xyz<span class="token punctuation">;</span>
	atob<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
	atoc<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">0.0</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">cross</span><span class="token punctuation">(</span>atoc<span class="token punctuation">,</span> atob<span class="token punctuation">)</span><span class="token punctuation">.</span>z <span class="token operator">></span> <span class="token number">0.0</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">vec4</span> position <span class="token operator">=</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	position<span class="token punctuation">.</span>xy <span class="token operator">=</span> gl_FragCoord<span class="token punctuation">.</span>xy <span class="token operator">/</span> resolution<span class="token punctuation">.</span>xy<span class="token punctuation">;</span>

	<span class="token comment">//if the triangle formed by (0, 0), (1, 1), and the screen point faces front</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isFront</span><span class="token punctuation">(</span><span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> position<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		gl_FragColor <span class="token operator">=</span>  <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
	<span class="token keyword">else</span> <span class="token punctuation">&#123;</span>
		gl_FragColor <span class="token operator">=</span>  <span class="token keyword">vec4</span><span class="token punctuation">(</span><span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">0.0</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,i,d,g,S,j,f,m,q,D,O,J,U,Q,V,A,N,$,W,tn,nn,Y,on,sn,rn,ln,w,T,an,Z,fn,cn,en,pn,un,K,ss=`<code class="language-js"><span class="token keyword">let</span> triangles <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">&#125;</span><span class="token punctuation">,</span> <span class="token punctuation">&#123;</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">&#125;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">//...</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">project</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//project onto the z-plane</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>p<span class="token punctuation">.</span>x<span class="token punctuation">,</span> p<span class="token punctuation">.</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token keyword">function</span> <span class="token function">triangleComparer</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z <span class="token operator">+</span> a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token punctuation">(</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z <span class="token operator">+</span> b<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span>z<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">//remove back-facing triangles</span>
triangles <span class="token operator">=</span> triangles<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">tri</span> <span class="token operator">=></span> <span class="token function">isFront</span><span class="token punctuation">(</span><span class="token function">project</span><span class="token punctuation">(</span>tri<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">project</span><span class="token punctuation">(</span>tri<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">project</span><span class="token punctuation">(</span>tri<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//sort based on centroid z</span>
triangles<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>triangleComparer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//rasterize needs to be implemented</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token literal-property property">triangle</span> <span class="token operator">:</span> triangles<span class="token punctuation">)</span> <span class="token function">rasterize</span><span class="token punctuation">(</span>triangle<span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,bn,hn,Tn,vn,mn,In,wn;return j=new xs({}),{c(){e=z("p"),t=P(`Hidden surface removal is one of the most fundamental problems to solve before rendering almost any 3D scene.
Not only that you get better performance by rendering less objects, you can also end up with a non-intersecting
set of polygons to simply render.`),o=I(),r=z("h2"),c=P("Hiding Based on Turning Direction of Projected Triangles"),l=I(),_=z("p"),v=P(`3D objects in contemporary applications are usually composed of 3D triangles whose edges are coinciding with
each other to produce a closed form. In simple triangle-rasterising rendering, these triangles are first
projected onto the camera frustum\u2019s near plane using perspective or orthographic projection. When this is done,
the vertices either appear in clockwise or anticlockwise order. Usually if the triangle appears clockwise, we
say we are seeing the front side of it and render.`),B=I(),E=z("p"),k=P("Which side we are on can easily be figured out by taking the cross product of two edges."),R=I(),M=z("pre"),i=I(),d=z("p"),g=P("In the following applet, the blue vector is atoc and the red vector is atob. You can follow the direction of the right arrow to determine if the triangle is clockwise or anticlockwise."),S=I(),Hn(j.$$.fragment),f=I(),m=z("h2"),q=P("Managing Overlapping Parts"),D=I(),O=z("p"),J=P("This works great to correctly hide the necessary faces of convex shapes like spheres or cubes, but struggles for shapes which have complex shapes whose parts may overlap each other when projected at certain orientations."),U=I(),Q=z("p"),V=P("For each overlapping part of the image, we find which object is closest to the camera. This can be done by"),A=I(),N=z("ul"),$=z("li"),W=P("ray tracing"),tn=I(),nn=z("li"),Y=P("painter\u2019s algorithm"),on=I(),sn=z("li"),rn=P("z-buffering"),ln=I(),w=z("p"),T=P(`In ray tracing, a ray is generated from the camera that contains all 3D points that would be projected to the solved pixel. Then this ray is
traced in miniscule steps and the pixel color is determined according to which object is hit first. The ray may be reflected, branched etc.
to simulate light even more realistically, which would bring us to physics-based rendering.`),an=I(),Z=z("p"),fn=P(`But what if we want to be fast? We can be fast by handling each triangle instead of each pixel on the screen. The first way is to sort triangles
based on the distance of their centroids to the camera, then rendering them from farthest to closest. This is called painter\u2019s algorithm, referring
to painters painting their paintings starting from the sky, then the background objects, and finally the closest subjects.`),cn=I(),en=z("p"),pn=P("This is usually not done in OpenGL, so I am providing JS code which does the thing."),un=I(),K=z("pre"),bn=I(),hn=z("p"),Tn=P("The other way is to rasterising triangles the order they appear, but also onto a depth buffer of the render. After efficiently finding the depth value of each pixel of the triangle, we compose each pixel onto the final image if the depth of the pixel is closer to the camera than anything before."),vn=I(),mn=z("p"),In=P("OpenGL pretty much does the depth-buffering for us, so no example code will be given here. It can be fraud at best."),this.h()},l(n){e=x(n,"P",{});var b=h(e);t=H(b,`Hidden surface removal is one of the most fundamental problems to solve before rendering almost any 3D scene.
Not only that you get better performance by rendering less objects, you can also end up with a non-intersecting
set of polygons to simply render.`),b.forEach(a),o=L(n),r=x(n,"H2",{});var Mn=h(r);c=H(Mn,"Hiding Based on Turning Direction of Projected Triangles"),Mn.forEach(a),l=L(n),_=x(n,"P",{});var Fn=h(_);v=H(Fn,`3D objects in contemporary applications are usually composed of 3D triangles whose edges are coinciding with
each other to produce a closed form. In simple triangle-rasterising rendering, these triangles are first
projected onto the camera frustum\u2019s near plane using perspective or orthographic projection. When this is done,
the vertices either appear in clockwise or anticlockwise order. Usually if the triangle appears clockwise, we
say we are seeing the front side of it and render.`),Fn.forEach(a),B=L(n),E=x(n,"P",{});var An=h(E);k=H(An,"Which side we are on can easily be figured out by taking the cross product of two edges."),An.forEach(a),R=L(n),M=x(n,"PRE",{class:!0});var as=h(M);as.forEach(a),i=L(n),d=x(n,"P",{});var Cn=h(d);g=H(Cn,"In the following applet, the blue vector is atoc and the red vector is atob. You can follow the direction of the right arrow to determine if the triangle is clockwise or anticlockwise."),Cn.forEach(a),S=L(n),Dn(j.$$.fragment,n),f=L(n),m=x(n,"H2",{});var On=h(m);q=H(On,"Managing Overlapping Parts"),On.forEach(a),D=L(n),O=x(n,"P",{});var Wn=h(O);J=H(Wn,"This works great to correctly hide the necessary faces of convex shapes like spheres or cubes, but struggles for shapes which have complex shapes whose parts may overlap each other when projected at certain orientations."),Wn.forEach(a),U=L(n),Q=x(n,"P",{});var Yn=h(Q);V=H(Yn,"For each overlapping part of the image, we find which object is closest to the camera. This can be done by"),Yn.forEach(a),A=L(n),N=x(n,"UL",{});var dn=h(N);$=x(dn,"LI",{});var Rn=h($);W=H(Rn,"ray tracing"),Rn.forEach(a),tn=L(dn),nn=x(dn,"LI",{});var Xn=h(nn);Y=H(Xn,"painter\u2019s algorithm"),Xn.forEach(a),on=L(dn),sn=x(dn,"LI",{});var Gn=h(sn);rn=H(Gn,"z-buffering"),Gn.forEach(a),dn.forEach(a),ln=L(n),w=x(n,"P",{});var Nn=h(w);T=H(Nn,`In ray tracing, a ray is generated from the camera that contains all 3D points that would be projected to the solved pixel. Then this ray is
traced in miniscule steps and the pixel color is determined according to which object is hit first. The ray may be reflected, branched etc.
to simulate light even more realistically, which would bring us to physics-based rendering.`),Nn.forEach(a),an=L(n),Z=x(n,"P",{});var qn=h(Z);fn=H(qn,`But what if we want to be fast? We can be fast by handling each triangle instead of each pixel on the screen. The first way is to sort triangles
based on the distance of their centroids to the camera, then rendering them from farthest to closest. This is called painter\u2019s algorithm, referring
to painters painting their paintings starting from the sky, then the background objects, and finally the closest subjects.`),qn.forEach(a),cn=L(n),en=x(n,"P",{});var Un=h(en);pn=H(Un,"This is usually not done in OpenGL, so I am providing JS code which does the thing."),Un.forEach(a),un=L(n),K=x(n,"PRE",{class:!0});var es=h(K);es.forEach(a),bn=L(n),hn=x(n,"P",{});var Jn=h(hn);Tn=H(Jn,"The other way is to rasterising triangles the order they appear, but also onto a depth buffer of the render. After efficiently finding the depth value of each pixel of the triangle, we compose each pixel onto the final image if the depth of the pixel is closer to the camera than anything before."),Jn.forEach(a),vn=L(n),mn=x(n,"P",{});var Vn=h(mn);In=H(Vn,"OpenGL pretty much does the depth-buffering for us, so no example code will be given here. It can be fraud at best."),Vn.forEach(a),this.h()},h(){s(M,"class","language-glsl"),s(K,"class","language-js")},m(n,b){y(n,e,b),u(e,t),y(n,o,b),y(n,r,b),u(r,c),y(n,l,b),y(n,_,b),u(_,v),y(n,B,b),y(n,E,b),u(E,k),y(n,R,b),y(n,M,b),M.innerHTML=F,y(n,i,b),y(n,d,b),u(d,g),y(n,S,b),Bn(j,n,b),y(n,f,b),y(n,m,b),u(m,q),y(n,D,b),y(n,O,b),u(O,J),y(n,U,b),y(n,Q,b),u(Q,V),y(n,A,b),y(n,N,b),u(N,$),u($,W),u(N,tn),u(N,nn),u(nn,Y),u(N,on),u(N,sn),u(sn,rn),y(n,ln,b),y(n,w,b),u(w,T),y(n,an,b),y(n,Z,b),u(Z,fn),y(n,cn,b),y(n,en,b),u(en,pn),y(n,un,b),y(n,K,b),K.innerHTML=ss,y(n,bn,b),y(n,hn,b),u(hn,Tn),y(n,vn,b),y(n,mn,b),u(mn,In),wn=!0},p:_n,i(n){wn||(kn(j.$$.fragment,n),wn=!0)},o(n){yn(j.$$.fragment,n),wn=!1},d(n){n&&a(e),n&&a(o),n&&a(r),n&&a(l),n&&a(_),n&&a(B),n&&a(E),n&&a(R),n&&a(M),n&&a(i),n&&a(d),n&&a(S),Sn(j,n),n&&a(f),n&&a(m),n&&a(D),n&&a(O),n&&a(U),n&&a(Q),n&&a(A),n&&a(N),n&&a(ln),n&&a(w),n&&a(an),n&&a(Z),n&&a(cn),n&&a(en),n&&a(un),n&&a(K),n&&a(bn),n&&a(hn),n&&a(vn),n&&a(mn)}}}function zs(p){let e,t;const o=[p[0],Pn];let r={$$slots:{default:[js]},$$scope:{ctx:p}};for(let c=0;c<o.length;c+=1)r=Ln(r,o[c]);return e=new bs({props:r}),{c(){Hn(e.$$.fragment)},l(c){Dn(e.$$.fragment,c)},m(c,l){Bn(e,c,l),t=!0},p(c,[l]){const _=l&1?hs(o,[l&1&&Kn(c[0]),l&0&&Kn(Pn)]):{};l&2&&(_.$$scope={dirty:l,ctx:c}),e.$set(_)},i(c){t||(kn(e.$$.fragment,c),t=!0)},o(c){yn(e.$$.fragment,c),t=!1},d(c){Sn(e,c)}}}const Pn={title:"Hidden Surface Removal",excerpt:"Introduction to methods of hidden surface removal in contemporary 3D computer graphics",author:{nickname:"boraini",name:"Mert Bora \u0130nevi",page:"/blog/authors/boraini/"},thumbnail:"./triangle.png",date:"2022-07-30",tags:["3d-graphics"]};function Ts(p,e,t){return p.$$set=o=>{t(0,e=Ln(Ln({},e),Qn(o)))},e=Qn(e),[e]}class Is extends xn{constructor(e){super(),jn(this,e,Ts,zs,zn,{})}}const Ps=Object.freeze(Object.defineProperty({__proto__:null,default:Is,metadata:Pn},Symbol.toStringTag,{value:"Module"}));export{ys as A,Is as H,Ps as _,Pn as m};
