(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),o=a.n(l),i=a(3),c=a(7),s=a(13),m=a.n(s),u=a(22),p=a(25),d=(a(18),{margin:"0 0.3rem"}),h=[{Name:"Home",Url:"/"},{Name:"Experiences",Url:"/experiences"},{Name:"Projects",Url:"/projects"}],g=function(){return r.a.createElement("div",{className:"flex_group"},r.a.createElement("div",null,r.a.createElement(i.b,{className:"logo-link",to:"/"},"Jeff Zhao")),r.a.createElement("div",{style:d}),r.a.createElement(E,null))},E=function(){return r.a.createElement("div",{className:"non-hamburger-menu"},h.map((function(e,t){return r.a.createElement(i.b,{className:"header-link",key:t,to:e.Url},e.Name)})))};function f(e){var t=Object(n.useState)(!1),a=Object(p.a)(t,2),l=a[0],o=a[1];function c(e){return s.apply(this,arguments)}function s(){return(s=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),o(!l),console.log(l);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l?r.a.createElement("div",null,r.a.createElement("div",{className:"hamburger-button change",onClick:function(e){return c(e)}},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"})),r.a.createElement("div",{className:"hamburger-menu"},r.a.createElement("ul",null,h.map((function(e,t){return r.a.createElement("li",null,r.a.createElement(i.b,{className:"header-link",key:t,to:e.Url},e.Name))}))))):r.a.createElement("div",{className:"hamburger-menu",onClick:function(e){return c(e)}},r.a.createElement("div",{className:"bar1"}),r.a.createElement("div",{className:"bar2"}),r.a.createElement("div",{className:"bar3"}))}function b(e){return r.a.createElement("nav",{className:"topnav"},r.a.createElement(g,null),r.a.createElement("div",{className:"flex_group"},r.a.createElement(f,null)))}a(20);var v=a(9),w=a(10),y={marginRight:"1rem"},k={color:"#647789"};function I(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"flex_group"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",style:y,href:"https://www.linkedin.com/in/jiayii-zhao/"},r.a.createElement(v.a,{className:"footer_icon",icon:w.b})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",style:y,href:"https://github.com/kamiyaa/"},r.a.createElement(v.a,{className:"footer_icon",icon:w.a}))),r.a.createElement("a",{href:"/res/Resume-Jiayi-Zhao.pdf"},r.a.createElement("li",{className:"footer_link"},"Resume")),r.a.createElement("a",{href:"/#"},r.a.createElement("li",{className:"footer_link"},"Blog")))),r.a.createElement("div",{className:"flex_group"},r.a.createElement("p",{style:k},"Built using React and React Routing")))}var N={borderRadius:"50%",marginTop:"1rem",marginBottom:"0",boxShadow:"0 0 16px -8px grey"};function C(e){return r.a.createElement("a",{href:e.href},r.a.createElement("img",{src:e.src,alt:e.alt,style:N,height:e.height}))}var S={display:"flex"};function D(e){var t=e.bookmarks?e.bookmarks.map((function(e){return r.a.createElement("a",{className:"article-topbar-link",href:"#".concat(e)},e)})):null;return r.a.createElement("div",{className:"article-topbar"},r.a.createElement("div",{style:S},t))}function j(){var e=Object(c.f)().pathname;return Object(n.useEffect)((function(){try{window.scroll({top:0,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,0)}}),[e]),null}var x=function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"About"},"About"),r.a.createElement(C,{height:"200px",src:"https://raw.githubusercontent.com/kamiyaa/kamiyaa.github.io/master/img/profile.jpg"}),r.a.createElement("p",null,"Hi, my name is Jiayi Zhao (",r.a.createElement("b",null,"Jeff"),").",r.a.createElement("br",null),"I am a 4th year student studying Computer Science at the University of Toronto.",r.a.createElement("br",null),"Still considering what to put on this page but..."),r.a.createElement("p",null,"Feel free to look around!"))};function U(e){return r.a.createElement("div",null,r.a.createElement(b,e),r.a.createElement("div",{className:"article"},r.a.createElement(D,{bookmarks:["About"]}),r.a.createElement("div",{className:"article-content"},r.a.createElement(x,null))),r.a.createElement(I,null))}function T(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"Open Source Runtime Developer"},"Open Source Runtime Developer"),r.a.createElement("h4",null,"IBM"),r.a.createElement("h6",null,"May 2019 - April 2020"),r.a.createElement("p",null,"Being part of the Runtimes-Service team at IBM, I was responsible for developing internal toolchains to improve developer experience and efficiency."),r.a.createElement("p",null,"Some background: When a user's Java program crashes, it produces a ",r.a.createElement("b",null,"core dump")," which we use to analyze and figure out what caused the crash. To do this, we use an internal diassembler maintained by IBM employees. But because it was maintained internally, whenever new cpu architectures were released, a lot of effort was required to add the new cpu instructions."),r.a.createElement("p",null,"My first task was to port our internal disassembler to use ",r.a.createElement("a",{href:"http://www.capstone-engine.org/"},"Capstone"),", an open source disassembler library. This effort immediately added support for ",r.a.createElement("b",null,"z13, z14 and Power9")," instructions to our disassembler, eliminating months of potential work needed to add those instructions."),r.a.createElement("p",null,"Often when working on a user's core dump, it takes lots of effort to reach a certain point in the program, like a really tedious debugging session. To alleviate this problem, I added ",r.a.createElement("b",null,"Lua")," scripting support to our internal diassembler. This allowed users to write Lua scripts to checkpoint their progress so they can start exactly where they left off."),r.a.createElement("p",null,"More recently ",r.a.createElement("b",null,"OpenJ9")," added support for ",r.a.createElement("b",null,"AArch64")," and the team was given hardware to test with. I was responsible for adding AArch64 support to our disassembler."),r.a.createElement("p",null,"Other things I've done are:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Add support for demangling C++ names"),r.a.createElement("li",null,"Refactor code base to be more maintainable"),r.a.createElement("li",null,"Refactor build system to support cross compilations in the future")),r.a.createElement("p",null,"All this required me to ensure it worked on all IBM-supported platforms, such as AIX, zOS, LinuxPPC and zLinux."))}function P(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"Teaching Assistant"},"Teaching Assistant"),r.a.createElement("h4",null,"University of Toronto"),r.a.createElement("h6",null,"September 2017 - December 2019"),r.a.createElement("p",null,"Courses taught:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"CSCA08 - Introduction to Computer Science I")),"Using Python, students are introduced to the fundamental concepts of programming such as variables, conditional statements, loops, functions, lists, and dictionaries.",r.a.createElement("br",null),"I was responsible for answering questions during anti-lectures, hosting office hours and marking exams.",r.a.createElement("li",null,r.a.createElement("b",null,"CSCA48 - Introduction to Computer Science II")),"Students are introduced to more advanced programming concepts with C such as structs, linked data structures and recursion.",r.a.createElement("br",null),"I taught a tutorial of 20-30 students; going over contents taught in lectures and coming up with additional examples to help students understand the course content better.",r.a.createElement("li",null,r.a.createElement("b",null,"CSCB07 - Software Design")),"Utilizing Java's Object-Oriented programming style, students are introduced to the concepts of good design and design patterns.",r.a.createElement("br",null),"I oversaw labs where students would apply techniques taught in class such as singleton, factory, builder, adapter, generics, interfaces and inheritance. I was also responsible for marking exams.",r.a.createElement("li",null,r.a.createElement("b",null,"CSCB09 - Software Tools and System Design")),"Using C, students are taught systems programming. Introducing concepts such as Makefiles, header files, pointers (and double pointers), file I/O, processes (fork), pipes and sockets.",r.a.createElement("br",null),"I was responsible for lab where students would apply techniques taught in class and marking exams."))}function A(){return r.a.createElement("div",null,r.a.createElement("h2",{id:"Application Programmer"},"Application Programmer"),r.a.createElement("h4",null,"Ontario Public Service"),r.a.createElement("h6",null,"May 2018 - August 2018"),r.a.createElement("p",null,"Worked as a part of the Case and Grant Management System team. Developed test scripts and cases for new releases. Created a JasperReports proof-of-concept to replace Adobe LifeCycle's PDF generation."))}var M=[{Title:"Open Source Runtime Developer",Company:"IBM",StartDate:"May 2019",EndDate:"May 2020",PreviewImgUrl:"https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/IBM.jpg",Component:T},{Title:"Teaching Assistant",Company:"University of Toronto",StartDate:"Sept 2017",EndDate:"Dec 2019",PreviewImgUrl:"https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/UofT.jpg",Component:P},{Title:"Application Programmer",Company:"Ontario Public Service",StartDate:"May 2018",EndDate:"Aug 2018",PreviewImgUrl:"https://github.com/kamiyaa/kamiyaa.github.io/raw/master/img/OPS_002.png",Component:A}];function _(){return r.a.createElement("div",{className:"flex_card_list"},M.map((function(e,t){return r.a.createElement("div",{className:"flex_card"},r.a.createElement(i.b,{to:"/experiences/".concat(t)},r.a.createElement("div",null,r.a.createElement("img",{alt:"".concat(e.Company),src:"".concat(e.PreviewImgUrl)})),r.a.createElement("div",{className:"flex_card_info"},r.a.createElement("h4",null,e.Title),r.a.createElement("h6",null,e.Company),r.a.createElement("p",null,e.StartDate," - ",e.EndDate))))})))}var R=[{Name:"Developer Student Club",Title:"VP Marketing",Url:"https://utsc.developerstudentclubs.ca/",StartDate:"August 2019 - Present",Component:r.a.createElement("div",null,r.a.createElement("p",null,"Developer Student Clubs are university based community groups for students interested in Google developer technologies.",r.a.createElement("br",null),"As the VP of Marketing, I was responsible for writing and promoting events. Promoting includes writing emails, Facebook posts and other forms of copy."))},{Name:"UofT Hacks",Title:"Participant",StartDate:"January 2018",Component:r.a.createElement("p",null,"Ended up going to this hackathon on my own. Met a grad student there and we created a Django web app that aggregates large, existing open datasets and tries to do predictions on illnesses and diseases.")},{Name:"Microsoft msft Coding Challenge",Title:"1st Place",StartDate:"January 2017",Component:r.a.createElement("p",null,"Working in a team of three with two other first years, we tackled a series of coding problems presented by Microsoft.")},{Name:"Chinese Lion Dancing",Title:"Performer and student",Url:"http://www.sammychengtorontoliondance.com/",StartDate:"2012 - Present",Component:r.a.createElement("div",null,r.a.createElement("p",null,"Worked together in teams to deliver spectacular performances for many events such as parades, weddings, grand openings, new years, etc."),r.a.createElement("p",null,"Some of the roles I've performed are lion head/tail, dragon head, and various martial arts.",r.a.createElement("br",null)))}];function O(){return R.map((function(e,t){var a;return a=e.Url?r.a.createElement("a",{href:e.Url},r.a.createElement("h4",null,e.Name)):r.a.createElement("h4",null,e.Name),r.a.createElement("div",null,a,r.a.createElement("h6",null,r.a.createElement("b",null,e.Title)),e.StartDate,e.Component)}))}function B(e){return r.a.createElement("div",null,r.a.createElement(b,e),r.a.createElement("div",{className:"article"},r.a.createElement(D,{bookmarks:["Experiences","Extracurricular"]}),r.a.createElement("div",{className:"article-content"},r.a.createElement("div",null,r.a.createElement("h1",{id:"Experiences"},"Experiences"),r.a.createElement(_,null)),r.a.createElement("div",null,r.a.createElement("h1",{id:"Extracurricular"},"Extracurricular"),r.a.createElement(O,null)))),r.a.createElement(I,null))}var L=[T,P,A];function J(e){var t=Object(c.g)().id;if(t>=L.length)return null;var a=L[t];return r.a.createElement("div",null,r.a.createElement(b,e),r.a.createElement("div",{className:"article"},r.a.createElement(D,{bookmarks:[]}),r.a.createElement("div",{className:"article-content"},r.a.createElement(a,null))),r.a.createElement(I,null),r.a.createElement(j,null))}function F(e){var t=e.project;return r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.Url},r.a.createElement("h3",{id:t.Name},t.Name)),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.Url},r.a.createElement(v.a,{className:"article-icon",icon:w.a})),r.a.createElement("h6",null,t.Description,", ",t.Language),r.a.createElement("a",{href:t.PreviewImgUrl,rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{className:"project_image",alt:t.Name,src:t.PreviewImgUrl})))}var q={Name:"Joshuto",Description:"Terminal File Manager",Language:"Rust",Url:"https://github.com/kamiyaa/joshuto",PreviewImgUrl:"https://raw.githubusercontent.com/kamiyaa/joshuto/master/joshuto_screenshot.png"};function z(){return r.a.createElement("div",null,r.a.createElement(F,{project:q}),r.a.createElement("p",null,"Some background: ",r.a.createElement("br",null),"In the summer of 2018, I wanted to learn C++ because I wanted something higher than C but still yielded competitive performance. While doing some research on C++, I stumbled across Rust, the shiny new language that is competing with C++. Curious, I decided to learn Rust instead. This project is a product of the things I've learned."),r.a.createElement("p",null,"On a daily basis, I use a file manager called ",r.a.createElement("a",{href:"https://ranger.github.io/"},"Ranger"),". But ranger is very slow at moving files around, especially across an MTP device such as an Android phone.",r.a.createElement("br",null),"So I decided to try and write my own version in Rust, applying the things I've learned."),r.a.createElement("p",null,"Overall, I really enjoy programming in Rust. Although, some concepts are really hard to express in Rust (linked data structures), it's benefits are very attractive. I am also very grateful I picked up Rust because later on, I had to take a course that was taught in Haskell and I was able to do almost a 1-to-1 matching in my head to learn Haskell much faster:",r.a.createElement("ul",null,r.a.createElement("li",null,"Just -> Some, Nothing -> None"),r.a.createElement("li",null,"Left -> Err, Right -> Ok"),r.a.createElement("li",null,"Type classes -> Traits"),r.a.createElement("li",null,"Pattern matching"),r.a.createElement("li",null,"Closures and function currying"),r.a.createElement("li",null,"etc..."))))}var W={Name:"SpaceFarmerBot",Description:"Discord Bot",Language:"Golang",Url:"https://github.com/Tusk98/SpaceFarmerBot",PreviewImgUrl:"https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg"};function G(){return r.a.createElement("div",null,r.a.createElement(F,{project:W}),r.a.createElement("p",null,"This project, I worked with a colleague to produce a fast, customized Discord bot for our servers. We added support for serving images from image boards, reverse image searching images that user provides and giving wiki data when user requested."),r.a.createElement("p",null,"From this I was able to learn the basics of Go such as functions, structs, methods and interfaces. I was hoping to learn a bit more about Go channels but I guess that will have to wait for another time."))}var H={Name:"Ruiji",Description:"Reverse Image Search Tool",Language:"C",Url:"https://github.com/kamiyaa/ruiji",PreviewImgUrl:"https://raw.githubusercontent.com/kamiyaa/ruiji/master/ruiji_screenshot.png"};function Z(){return r.a.createElement("div",null,r.a.createElement(F,{project:H}),r.a.createElement("p",null,"This project was mostly for my own use. I often have lots of pictures saved that are low resolution and would like to find higher resolution versions. Creating this program allowed me to combine it with shell scripts to process hundreds of images at a time."),r.a.createElement("p",null,"From this project, I learn a lot more about C and build systems. I was able to implement linked lists, resizable arrays and utilized ",r.a.createElement("a",{href:"https://curl.haxx.se/"},"curl")," to make network requests to ",r.a.createElement("a",{href:"http://iqdb.org/"},"iqdb.org"),". Then I parsed the html to prompt the user for which result to download from. After downloading, my program will also output any useful tags the image contained."),r.a.createElement("p",null,"For building the project, I used both Makefiles as well as the new build system ",r.a.createElement("a",{href:"https://mesonbuild.com/"},"Meson"),"."))}var V=[{Title:"Joshuto",Description:"Terminal File Manager",Language:"Rust",StartDate:"May 2019",EndDate:"May 2020",PreviewImgUrl:"https://raw.githubusercontent.com/kamiyaa/joshuto/master/joshuto_screenshot.png",Component:z},{Title:"Ruiji",Description:"Reverse Image Search Tool",Language:"C",StartDate:"May 2018",EndDate:"Aug 2018",PreviewImgUrl:"https://raw.githubusercontent.com/kamiyaa/ruiji/master/ruiji_screenshot.png",Component:Z},{Title:"SpaceFarmerBot",Description:"Discord bot",Language:"Golang",StartDate:"Sept 2017",EndDate:"Dec 2019",PreviewImgUrl:"https://raw.githubusercontent.com/Tusk98/SpaceFarmerBot/master/SpaceFarmer.jpg",Component:G}];function X(){return r.a.createElement("div",{className:"flex_card_list"},V.map((function(e,t){return r.a.createElement("div",{className:"flex_card"},r.a.createElement(i.b,{to:"/projects/".concat(t)},r.a.createElement("div",null,r.a.createElement("img",{alt:"".concat(e.Title),src:"".concat(e.PreviewImgUrl)})),r.a.createElement("div",{className:"flex_card_info"},r.a.createElement("h4",null,e.Title),r.a.createElement("h6",null,e.Language),r.a.createElement("p",null,e.Description))))})))}var $={display:"inline",marginLeft:"0.4rem",marginRight:"0.4rem",width:"28px"},K=[{Name:"Capstone",Url:"https://github.com/aquynh/capstone",IconUrl:"http://www.capstone-engine.org/img/capstone.png",Description:"Multi-platform, multi-architecture disassembly framework",Language:"C",Component:r.a.createElement("ul",null,r.a.createElement("li",null,"Add build support for IBM platforms such as AIX and zOS"),r.a.createElement("li",null,"Fix zOS instruction disassembly for instructions where base is 0 but index is not"))},{Name:"Portage",Url:"https://github.com/gentoo/gentoo",IconUrl:"https://www.gentoo.org/assets/img/logo/gentoo-signet.svg",Description:"Official package manager and distribution system for Gentoo",Language:"Shell",Component:r.a.createElement("ul",null,r.a.createElement("li",null,"Package maintainer for ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/easymodo/qimgv"},"qimgv")))},{Name:"Maven",Url:"https://github.com/carlossg/docker-maven",IconUrl:"http://cdn.onlinewebfonts.com/svg/img_161017.png",Description:"Maven Dockerfiles",Language:"Scripting",Component:r.a.createElement("ul",null,r.a.createElement("li",null,"Add Dockerfile with OpenJ9 as Java implementation"))},{Name:"Jenkins",Url:"https://github.com/jenkinsci/jenkins",IconUrl:"https://jenkins.io/images/logos/jenkins/256.png",Description:"Free and open source automation server",Language:"Scripting",Component:r.a.createElement("ul",null,r.a.createElement("li",null,"Add Dockerfile with OpenJ9 as Java implementation with Shared Class Cache enabled"),r.a.createElement("li",null,"Decrease memory usage by 50% and decrease startup times by 30%"))}],Q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{id:"Contributions"},"Contributions"),K.map((function(e,t){return r.a.createElement("div",null,r.a.createElement("h4",{id:e.Name},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.Url},e.Name,r.a.createElement("img",{alt:e.Name,style:$,src:e.IconUrl}))),r.a.createElement("h6",null,r.a.createElement("b",null,e.Description)),e.Language,e.Component)})))};function Y(e){return r.a.createElement("div",null,r.a.createElement(b,e),r.a.createElement("div",{className:"article"},r.a.createElement(D,{bookmarks:["Projects","Contributions"]}),r.a.createElement("div",{className:"article-content"},r.a.createElement("div",null,r.a.createElement("h1",{id:"Projects"},"Projects"),r.a.createElement(X,null)),r.a.createElement(Q,null))),r.a.createElement(I,null))}function ee(e){var t=Object(c.g)().id;if(t>=V.length)return null;var a=V[t].Component;return r.a.createElement("div",null,r.a.createElement(b,e),r.a.createElement("div",{className:"article"},r.a.createElement(D,{bookmarks:[]}),r.a.createElement("div",{className:"article-content"},r.a.createElement(a,null))),r.a.createElement(I,null),r.a.createElement(j,null))}var te=function(){return r.a.createElement(i.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:U}),r.a.createElement(c.a,{exact:!0,path:"/experiences",component:B}),r.a.createElement(c.a,{exact:!0,path:"/experiences/:id",component:J}),r.a.createElement(c.a,{exact:!0,path:"/projects",component:Y}),r.a.createElement(c.a,{exact:!0,path:"/projects/:id",component:ee})))};a(39),a(40),a(41),a(42),a(43),a(44),a(45),a(46),a(47),a(48),a(49);var ae=function(){return r.a.createElement("div",{id:"App"},r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ebd08f8d.chunk.js.map