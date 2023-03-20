import{S as Rt,i as Ht,s as Ot,D as Qe,x as Bt,y as $t,z as Ct,A as zt,B as bt,f as It,t as qt,C as Dt,Q as gt,l as o,u as n,a as c,m as i,p as s,v as h,h as t,c as p,q as y,F as Ye,b as r,G as l,n as Nt}from"./index-8e6002e7.js";import{B as Gt}from"./_blog_layout-7e7a0e1d.js";const Tt="/_app/immutable/assets/character-arm-f96a1a9e.svg",Vt=Object.freeze(Object.defineProperty({__proto__:null,default:Tt},Symbol.toStringTag,{value:"Module"})),kt="/_app/immutable/assets/object-hierarchy-basic-c79f0bec.svg",Xt=Object.freeze(Object.defineProperty({__proto__:null,default:kt},Symbol.toStringTag,{value:"Module"})),xt="/_app/immutable/assets/object-hierarchy-complete-19fc906e.svg",Zt=Object.freeze(Object.defineProperty({__proto__:null,default:xt},Symbol.toStringTag,{value:"Module"}));function Ft(j){let u,w,v,_,f,d,m,Te,Q,ke,xe,U,Ee,je,X,b,Se,J,We,Pe,Z,S,Me,ee,T,Et=`<code class="language-undefined">matrixStack = []
currentTransformation = indentityMatrix()

// Note that we have the call stack also

def traverse(tree) &#123;
matrixStack.push(currentTransformation)
drawCurrent(currentTransformation)
for (child in tree.children) traverse(child)
currentTransformation = matrixStack.pop()
&#125;

traverse(root)</code>`,te,W,Ae,ae,g,K,Le,Re,V,He,re,P,Oe,le,M,Be,oe,A,L,Je,ie,R,$e,se,H,Ce,ne,O,B,Ke,ce,$,ze,he,C,z,Ve,pe,I,Ie,ue,q,qe,fe,k,jt=`<code class="language-undefined">draw arm (matrix) &#123;
current = matrix

draw shoulder(current)

push current
rotate current by upper arm angle
draw upper arm(current)
translate current by upper arm length

push current
rotate current by lower arm angle
draw lower arm(current)
translate current by lower arm length

push current
rotate current by palm angle
draw palm
translate current by palm length

push current
rotate current by finger angle
draw finger

pop current
pop current
pop current
pop current
&#125;</code>`,me,D,De,de,N,Ne,we,x,St=`<code class="language-undefined">draw segment (matrix, thickness, length) &#123;
//remember, the rectangle primitive extends between (0, 0) and (2, 1)
localScaling = S(length / 2, thickness)
localTranslation = T(0, -0.5)
//we include the parent transformation here
loadMatrix(matrix * localScaling * localTranslation)
drawRectangle()

localScaling = S(thickness / 2)
localTranslation = T(length, 0)
loadMatrix(matrix * localTranslation * localScaling)
drawCircle()
&#125;</code>`,ve,G,Ge,_e,F,Fe,ye,E,Wt=`<code class="language-undefined">draw arm (matrix) &#123;
current = matrix

draw circle(current)

current = current * R(upper arm angle)
draw segment(current, 1, 3)
current = current * T(3, 0)

current = current * R(lower arm angle)
draw segment(current, 0.8, 3)
current = current * T(3, 0)

current = current * R(palm angle)
draw segment(current, 0.3, 0.7)
current = current * T(0.7, 0)

current = current * R(finger angle)
draw segment(current, 0.2, 0.7)
&#125;</code>`;return{c(){u=o("p"),w=n("When we start talking about relative positions of different objects in 2D/3D space, we see that they form a hierarchy where the children are related to their parent by the fact that their independent transformation is given relative to their parent."),v=c(),_=o("p"),f=n("We can think of this hierarchy as a tree structure. The root of the tree would be the world. The camera and all the other objects would be descendants of world. Additionally we could parent camera to the player object, the arm of the player to the player\u2019s torso etc."),d=c(),m=o("p"),Te=n("The edges of this tree would store a transformation from the child\u2019s "),Q=o("em"),ke=n("local space"),xe=n(" to the parent\u2019s "),U=o("em"),Ee=n("local space"),je=n(", or vice versa. You just have to know what you are doing. For this article we will store the transformation from the local space to the parent - so we have to multiply the local space matrices from the RHS."),X=c(),b=o("p"),Se=n("By convention and since it makes applying parent-child relationships easy, we usually run a depth-first traversal over such hierarchy to calculate how objects local parts transform from the object\u2019s local space to the "),J=o("em"),We=n("world space"),Pe=n(" - the local space of the root of our tree."),Z=c(),S=o("p"),Me=n("What data structure do you use for a depth-first traversal? A stack, of course!"),ee=c(),T=o("pre"),te=c(),W=o("p"),Ae=n("This might seem like too much boilerplate, but you don\u2019t need to explicitly write it and it ensures a few things:"),ae=c(),g=o("ul"),K=o("li"),Le=n("The children can freely use any transformation."),Re=c(),V=o("li"),He=n(`When writing the algorithm, you don\u2019t have to worry about breaking the current transformation when you make draw calls for children.
To give a possibly even more relatable analogy, the premises are pretty similar to x86 call conventions.`),re=c(),P=o("h2"),Oe=n("Applying to a Real World situation"),le=c(),M=o("p"),Be=n("Let\u2019s see how we can apply this to a scene that might occur in a Real World\u2122 game/application. We are going to look at how to draw some blocky video game character\u2019s arm."),oe=c(),A=o("p"),L=o("img"),ie=c(),R=o("p"),$e=n("The arm consists of four segments: upper and lower arm, palm, and finger. This way our character can hold things. We also can draw only two types of primitives: a rectangle that spans from (0, 0) to (2, 1) in the local space and a circle at the local origin with radius 1. We have to draw different sized rectangles for arm segments and circles to hide the tearing joints under rotation and the square tips of terminating segments."),se=c(),H=o("p"),Ce=n("We can first try to draw the scene hierarchy tree. We won\u2019t include the camera because it is beyond our scope right now."),ne=c(),O=o("p"),B=o("img"),ce=c(),$=o("p"),ze=n("Now, since we can\u2019t go and draw an upper arm, we have to parent the necessary primitives to different objects, which will also have their own local transformations to bring them to the shape we want."),he=c(),C=o("p"),z=o("img"),pe=c(),I=o("p"),Ie=n("Exploring what would happen if we didn\u2019t add a layer of abstraction like this and added especially the scaling directly to the main objects is an exercise for the reader."),ue=c(),q=o("p"),qe=n("Then we can look at how the depth first traversal would happen. There is a straight path from the shoulder to the finger so we can say that would be the main traversal."),fe=c(),k=o("pre"),me=c(),D=o("p"),De=n("Since this was a linear traversal, we didn\u2019t need to push and pop any matrix at this level. Anyways, we will remove these calls next time we use it."),de=c(),N=o("p"),Ne=n("Now, we can look at how to draw segments. If you have noticed, we only have one type of segment which is made up of a rectangle and a circle, and which is distinguished by its thickness and length. We can write a function which will draw this."),we=c(),x=o("pre"),ve=c(),G=o("p"),Ge=n("Then you can replace the draw upper arm() etc. with a call to this function with proper arguments. How this is related to all the depth-first traversal is, if we receive the matrix argument by value, we can\u2019t change its value as it appears in the caller. This provides the encapsulation of the transformations that we want for the children."),_e=c(),F=o("p"),Fe=n("The final pseudocode for draw arm would look like"),ye=c(),E=o("pre"),this.h()},l(e){u=i(e,"P",{});var a=s(u);w=h(a,"When we start talking about relative positions of different objects in 2D/3D space, we see that they form a hierarchy where the children are related to their parent by the fact that their independent transformation is given relative to their parent."),a.forEach(t),v=p(e),_=i(e,"P",{});var Xe=s(_);f=h(Xe,"We can think of this hierarchy as a tree structure. The root of the tree would be the world. The camera and all the other objects would be descendants of world. Additionally we could parent camera to the player object, the arm of the player to the player\u2019s torso etc."),Xe.forEach(t),d=p(e),m=i(e,"P",{});var Y=s(m);Te=h(Y,"The edges of this tree would store a transformation from the child\u2019s "),Q=i(Y,"EM",{});var Ze=s(Q);ke=h(Ze,"local space"),Ze.forEach(t),xe=h(Y," to the parent\u2019s "),U=i(Y,"EM",{});var et=s(U);Ee=h(et,"local space"),et.forEach(t),je=h(Y,", or vice versa. You just have to know what you are doing. For this article we will store the transformation from the local space to the parent - so we have to multiply the local space matrices from the RHS."),Y.forEach(t),X=p(e),b=i(e,"P",{});var be=s(b);Se=h(be,"By convention and since it makes applying parent-child relationships easy, we usually run a depth-first traversal over such hierarchy to calculate how objects local parts transform from the object\u2019s local space to the "),J=i(be,"EM",{});var tt=s(J);We=h(tt,"world space"),tt.forEach(t),Pe=h(be," - the local space of the root of our tree."),be.forEach(t),Z=p(e),S=i(e,"P",{});var at=s(S);Me=h(at,"What data structure do you use for a depth-first traversal? A stack, of course!"),at.forEach(t),ee=p(e),T=i(e,"PRE",{class:!0});var Pt=s(T);Pt.forEach(t),te=p(e),W=i(e,"P",{});var rt=s(W);Ae=h(rt,"This might seem like too much boilerplate, but you don\u2019t need to explicitly write it and it ensures a few things:"),rt.forEach(t),ae=p(e),g=i(e,"UL",{});var ge=s(g);K=i(ge,"LI",{});var lt=s(K);Le=h(lt,"The children can freely use any transformation."),lt.forEach(t),Re=p(ge),V=i(ge,"LI",{});var ot=s(V);He=h(ot,`When writing the algorithm, you don\u2019t have to worry about breaking the current transformation when you make draw calls for children.
To give a possibly even more relatable analogy, the premises are pretty similar to x86 call conventions.`),ot.forEach(t),ge.forEach(t),re=p(e),P=i(e,"H2",{});var it=s(P);Oe=h(it,"Applying to a Real World situation"),it.forEach(t),le=p(e),M=i(e,"P",{});var st=s(M);Be=h(st,"Let\u2019s see how we can apply this to a scene that might occur in a Real World\u2122 game/application. We are going to look at how to draw some blocky video game character\u2019s arm."),st.forEach(t),oe=p(e),A=i(e,"P",{});var nt=s(A);L=i(nt,"IMG",{src:!0,alt:!0}),nt.forEach(t),ie=p(e),R=i(e,"P",{});var ct=s(R);$e=h(ct,"The arm consists of four segments: upper and lower arm, palm, and finger. This way our character can hold things. We also can draw only two types of primitives: a rectangle that spans from (0, 0) to (2, 1) in the local space and a circle at the local origin with radius 1. We have to draw different sized rectangles for arm segments and circles to hide the tearing joints under rotation and the square tips of terminating segments."),ct.forEach(t),se=p(e),H=i(e,"P",{});var ht=s(H);Ce=h(ht,"We can first try to draw the scene hierarchy tree. We won\u2019t include the camera because it is beyond our scope right now."),ht.forEach(t),ne=p(e),O=i(e,"P",{});var pt=s(O);B=i(pt,"IMG",{src:!0,alt:!0}),pt.forEach(t),ce=p(e),$=i(e,"P",{});var ut=s($);ze=h(ut,"Now, since we can\u2019t go and draw an upper arm, we have to parent the necessary primitives to different objects, which will also have their own local transformations to bring them to the shape we want."),ut.forEach(t),he=p(e),C=i(e,"P",{});var ft=s(C);z=i(ft,"IMG",{src:!0,alt:!0}),ft.forEach(t),pe=p(e),I=i(e,"P",{});var mt=s(I);Ie=h(mt,"Exploring what would happen if we didn\u2019t add a layer of abstraction like this and added especially the scaling directly to the main objects is an exercise for the reader."),mt.forEach(t),ue=p(e),q=i(e,"P",{});var dt=s(q);qe=h(dt,"Then we can look at how the depth first traversal would happen. There is a straight path from the shoulder to the finger so we can say that would be the main traversal."),dt.forEach(t),fe=p(e),k=i(e,"PRE",{class:!0});var Mt=s(k);Mt.forEach(t),me=p(e),D=i(e,"P",{});var wt=s(D);De=h(wt,"Since this was a linear traversal, we didn\u2019t need to push and pop any matrix at this level. Anyways, we will remove these calls next time we use it."),wt.forEach(t),de=p(e),N=i(e,"P",{});var vt=s(N);Ne=h(vt,"Now, we can look at how to draw segments. If you have noticed, we only have one type of segment which is made up of a rectangle and a circle, and which is distinguished by its thickness and length. We can write a function which will draw this."),vt.forEach(t),we=p(e),x=i(e,"PRE",{class:!0});var At=s(x);At.forEach(t),ve=p(e),G=i(e,"P",{});var _t=s(G);Ge=h(_t,"Then you can replace the draw upper arm() etc. with a call to this function with proper arguments. How this is related to all the depth-first traversal is, if we receive the matrix argument by value, we can\u2019t change its value as it appears in the caller. This provides the encapsulation of the transformations that we want for the children."),_t.forEach(t),_e=p(e),F=i(e,"P",{});var yt=s(F);Fe=h(yt,"The final pseudocode for draw arm would look like"),yt.forEach(t),ye=p(e),E=i(e,"PRE",{class:!0});var Lt=s(E);Lt.forEach(t),this.h()},h(){y(T,"class","language-undefined"),Ye(L.src,Je=Tt)||y(L,"src",Je),y(L,"alt","Character Arm"),Ye(B.src,Ke=kt)||y(B,"src",Ke),y(B,"alt","Basic Object Hierarchy"),Ye(z.src,Ve=xt)||y(z,"src",Ve),y(z,"alt","Complete Object Hierarchy"),y(k,"class","language-undefined"),y(x,"class","language-undefined"),y(E,"class","language-undefined")},m(e,a){r(e,u,a),l(u,w),r(e,v,a),r(e,_,a),l(_,f),r(e,d,a),r(e,m,a),l(m,Te),l(m,Q),l(Q,ke),l(m,xe),l(m,U),l(U,Ee),l(m,je),r(e,X,a),r(e,b,a),l(b,Se),l(b,J),l(J,We),l(b,Pe),r(e,Z,a),r(e,S,a),l(S,Me),r(e,ee,a),r(e,T,a),T.innerHTML=Et,r(e,te,a),r(e,W,a),l(W,Ae),r(e,ae,a),r(e,g,a),l(g,K),l(K,Le),l(g,Re),l(g,V),l(V,He),r(e,re,a),r(e,P,a),l(P,Oe),r(e,le,a),r(e,M,a),l(M,Be),r(e,oe,a),r(e,A,a),l(A,L),r(e,ie,a),r(e,R,a),l(R,$e),r(e,se,a),r(e,H,a),l(H,Ce),r(e,ne,a),r(e,O,a),l(O,B),r(e,ce,a),r(e,$,a),l($,ze),r(e,he,a),r(e,C,a),l(C,z),r(e,pe,a),r(e,I,a),l(I,Ie),r(e,ue,a),r(e,q,a),l(q,qe),r(e,fe,a),r(e,k,a),k.innerHTML=jt,r(e,me,a),r(e,D,a),l(D,De),r(e,de,a),r(e,N,a),l(N,Ne),r(e,we,a),r(e,x,a),x.innerHTML=St,r(e,ve,a),r(e,G,a),l(G,Ge),r(e,_e,a),r(e,F,a),l(F,Fe),r(e,ye,a),r(e,E,a),E.innerHTML=Wt},p:Nt,d(e){e&&t(u),e&&t(v),e&&t(_),e&&t(d),e&&t(m),e&&t(X),e&&t(b),e&&t(Z),e&&t(S),e&&t(ee),e&&t(T),e&&t(te),e&&t(W),e&&t(ae),e&&t(g),e&&t(re),e&&t(P),e&&t(le),e&&t(M),e&&t(oe),e&&t(A),e&&t(ie),e&&t(R),e&&t(se),e&&t(H),e&&t(ne),e&&t(O),e&&t(ce),e&&t($),e&&t(he),e&&t(C),e&&t(pe),e&&t(I),e&&t(ue),e&&t(q),e&&t(fe),e&&t(k),e&&t(me),e&&t(D),e&&t(de),e&&t(N),e&&t(we),e&&t(x),e&&t(ve),e&&t(G),e&&t(_e),e&&t(F),e&&t(ye),e&&t(E)}}}function Yt(j){let u,w;const v=[j[0],Ue];let _={$$slots:{default:[Ft]},$$scope:{ctx:j}};for(let f=0;f<v.length;f+=1)_=Qe(_,v[f]);return u=new Gt({props:_}),{c(){Bt(u.$$.fragment)},l(f){$t(u.$$.fragment,f)},m(f,d){Ct(u,f,d),w=!0},p(f,[d]){const m=d&1?zt(v,[d&1&&bt(f[0]),d&0&&bt(Ue)]):{};d&2&&(m.$$scope={dirty:d,ctx:f}),u.$set(m)},i(f){w||(It(u.$$.fragment,f),w=!0)},o(f){qt(u.$$.fragment,f),w=!1},d(f){Dt(u,f)}}}const Ue={title:"Local and World Spaces",author:{nickname:"boraini",name:"Mert Bora \u0130nevi",social:{linkedin:"https://linkedin.com/in/boraini",github:"https://github.com/boraini",deviantart:"https://deviantart.com/boraini",twitter:"https://twitter.com/BorainiOfficial",instagram:"https://instagram.com/borainevi",tumblr:"https://tumblr.com/boraini",scratch:"https://scratch.mit.edu/users/boraini",abmdevandgames:"https://abmdevandgames.blogspot.com"},page:"/blog/authors/boraini/"},date:"2022-09-20",excerpt:"An attempt to explain how local and world spaces work in computer graphics scene hierarchies",thumbnail:"./_local-and-world-space/character-arm.svg"};function Qt(j,u,w){return j.$$set=v=>{w(0,u=Qe(Qe({},u),gt(v)))},u=gt(u),[u]}class Ut extends Rt{constructor(u){super(),Ht(this,u,Qt,Yt,Ot,{})}}const ea=Object.freeze(Object.defineProperty({__proto__:null,default:Ut,metadata:Ue},Symbol.toStringTag,{value:"Module"}));export{Ut as L,Vt as _,Xt as a,Zt as b,ea as c,Ue as m};
