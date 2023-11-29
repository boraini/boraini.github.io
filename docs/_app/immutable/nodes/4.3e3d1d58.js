import{s as g,n as s}from"../chunks/scheduler.014bc20e.js";import{S as p,i as u,g as l,s as f,z as v,h as c,f as a,c as b,x as w,k as m,B as y,a as d}from"../chunks/index.bf2c274e.js";function k(h){let e,o,t,r=`<section id="header" class="span-horizontal"><img src="/images/cv-profile.png" alt="Mert Bora İnevi"/> <h1>Mert Bora İnevi</h1> <p><a href="https://github.com/boraini" rel="nofollow">github.com/boraini</a></p> <p><a href="/portfolio/">boraini.com/portfolio</a></p></section> <section id="education"><h1>Education</h1> <ul><li><strong>American Robert College of Istanbul</strong> 2016-2021</li> <li><strong>Delft University of Technology</strong> BSc in Computer Science and Engineering, Systems Variant, 2021 - 2024</li> <li><strong>Oxbridge Advanced Studies Programme</strong> Engineering and Marketing Electives, 2018 Summer</li></ul></section> <section id="experience"><h1>Non-Academic Experience and Voluntary Work</h1> <ul><li><strong>Antalya Coding Community Involvement Project</strong> We taught two groups of middle school students how to design and write computer programs and games. We used Scratch as our coding platform.</li> <li><strong>Kırşehir Coding Community Involvement Project</strong> We taught couples of middle school students how to design and write website front-ends.</li> <li><strong>RC Makers</strong> I have been a part of Robert College’s maker subculture club between 2016 and 2020.</li></ul></section> <section id="skills" class="span-vertical"><h1>Skills</h1> <h2>Web Development</h2> <p>Webdev is my main computer science interest. I am especially proficient in Javascript and front-end development in general. You can find the source code of this website (which is developed with SvelteKit) and my other web projects on my Github account.</p> <h2>Embedded Systems Programming</h2> <p>In high school I’ve gained experience with working with hardware, electronics, and some robotics. I know how to make advanced devices using Arduino and its C++ dialect. In high school I have participated in the Robomasters AI Challenge as the engineer in charge of all the motion planning stuff and we worked with the ROS (Robot Operating System), programming in Python.</p> <h2>Game Development</h2> <p>I have plenty of experience with Three.js and some with Unity 3D. Moreover, I am able to produce visual assets for my games using programs like Blender 3D, Krita, Inkscape. You can visit my DeviantArt account to see some of my especially character design work (Also see the relevant blog page on this website for character designs, adoptables etc.)</p> <h2>Language</h2> <ul><li>Turkish - Native</li> <li>English - C1 (IELTS, 2021)</li> <li>German - A2 (Goethe Institut Fit-in-Deutsch, 2015. I also took B2 classes but could not certificate it.)</li> <li>Dutch - not certificated but around A2-B1, similar level to my actual German level</li></ul></section> <style lang="sass">main {
  display: grid;
  max-width: 80em;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, minmax(30em, 1fr));
  grid-template-rows: repeat(3, auto);
  margin: auto;
}
@media (max-width: 60em) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
  }
}
main section {
  margin: 1em;
  border: 1px solid var(--page-foreground);
  padding: 1em;
  background-color: var(--page-background-spectacle);
}
main section.span-horizontal {
  grid-column: 1/-1;
}
main section.span-vertical {
  grid-row-end: span 2;
}
main section p {
  margin-block: 0.4em;
}
main section h1 {
  font-size: 1.5em;
}
main section h2 {
  font-size: 1.2em;
}
main section#header img {
  float: right;
  height: 8em;
  width: auto;
}
main section#header img::after {
  display: block;
}</style>`;return{c(){e=l("meta"),o=f(),t=l("main"),t.innerHTML=r,this.h()},l(i){const n=v("svelte-1ssk2ga",document.head);e=c(n,"META",{name:!0,content:!0}),n.forEach(a),o=b(i),t=c(i,"MAIN",{"data-svelte-h":!0}),w(t)!=="svelte-171rjky"&&(t.innerHTML=r),this.h()},h(){document.title="boraini.com - CV",m(e,"name","description"),m(e,"content","Mert Bora İnevi's CV")},m(i,n){y(document.head,e),d(i,o,n),d(i,t,n)},p:s,i:s,o:s,d(i){i&&(a(o),a(t)),a(e)}}}class x extends p{constructor(e){super(),u(this,e,null,k,g,{})}}export{x as component};
