(function(e){function t(t){for(var n,o,r=t[0],l=t[1],c=t[2],d=0,m=[];d<r.length;d++)o=r[d],s[o]&&m.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},s={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0abc":function(e,t,i){"use strict";var n=i("24e6"),s=i.n(n);s.a},"24e6":function(e,t,i){},"2f03":function(e,t,i){"use strict";var n=i("ceea"),s=i.n(n);s.a},"34b4":function(e,t,i){"use strict";var n=i("4692"),s=i.n(n);s.a},3974:function(e,t,i){},"3e32":function(e,t,i){"use strict";var n=i("893b"),s=i.n(n);s.a},4692:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=i("2f62"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},o=[],r={name:"app",methods:{}},l=r,c=(i("5c0b"),i("2877")),u=Object(c["a"])(l,a,o,!1,null,null,null);u.options.__file="App.vue";var d=u.exports,m=i("8c4f"),p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"my-website"}},[i("myNav"),i("div",{class:{menu_open:e.menuOpen},attrs:{id:"view"},on:{click:function(t){e.closeMenu()}}},[i("router-view")],1)],1)},h=[],f=(i("7f7f"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"my_navigation",class:{open:e.menuOpen}},[i("div",{staticClass:"nav_btn",on:{click:function(t){e.$store.commit("toggleMenu")}}},[i("i",{staticClass:"fa fa-bars"})]),i("transition",{attrs:{name:"nav_content_slide"}},[e.menuOpen?i("nav",{staticClass:"content"},[i("div",{staticClass:"grad_breaker"}),i("div",{staticClass:"item_wrapper"},e._l(e.routes,function(t,n){return i("div",{key:n,staticClass:"item",class:{active:e.activeRoute===t.name},on:{click:function(i){e.go(t.name)}}},[i("i",{class:t.icon}),e._v("\n          "+e._s(t.name)+"\n        ")])})),i("div",{staticClass:"icon_wrapper"},[i("div",{staticClass:"icon_item",on:{click:function(t){e.openLink("https://www.linkedin.com/in/dallin-stagg")}}},[i("i",{staticClass:"fab fa-linkedin-in"})]),i("div",{staticClass:"icon_item",on:{click:function(t){e.openLink("https://github.com/Dallin-Stagg")}}},[i("i",{staticClass:"fab fa-github"})])])]):e._e()])],1)}),v=[],g={name:"Navigation",data:function(){return{routes:[{name:"Home",icon:"fas fa-home"},{name:"Portfolio",icon:"fas fa-layer-group"},{name:"Resume",icon:"fa fa-file"},{name:"Contact",icon:"fab fa-telegram-plane"}]}},computed:{activeRoute:function(){return this.$route.name},menuOpen:function(){return this.$store.state.menuOpen}},methods:{go:function(e){this.toggleMenu(),this.$router.push({name:e})},openLink:function(e){window.open(e)},toggleMenu:function(){this.menuOpen&&this.$store.commit("toggleMenu")}}},_=g,y=(i("5923"),Object(c["a"])(_,f,v,!1,null,"4aeda787",null));y.options.__file="Nav.vue";var b=y.exports,C={name:"Website",components:{myNav:b},computed:{menuOpen:function(){return this.$store.state.menuOpen},routeName:function(){return this.$route.name}},watch:{routeName:function(){var e=document.getElementById("view");this.$confetti.stop(),e.scrollTop=0}},mounted:function(){"Personal Website"===this.$route.name&&this.$router.push({name:"Home"})},methods:{closeMenu:function(){this.$store.state.menuOpen&&this.$store.commit("toggleMenu")}}},w=C,k=(i("34b4"),Object(c["a"])(w,p,h,!1,null,null,null));k.options.__file="PersonalWebsite.vue";var x=k.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"home"}},[e.displayIntro?i("div",[i("div",{staticClass:"prelude"}),i("div",{staticClass:"logo"})]):e._e(),i("div",{staticClass:"wrapper"},[i("div",{staticClass:"page_header"},[i("h2",[e._v("Hey, I'm")]),i("h1",{staticClass:"website_title"},[e._v("​"+e._s(e.displayText))])]),i("div",{staticClass:"overlay"})])])},T=[],S={name:"Home",data:function(){return{titles:["A student","A developer","A musician","Dallin Stagg"],displayedTitleLength:0,typing:!0,titleIndex:0,displayIntro:!0}},computed:{displayText:function(){return this.displayedTitleLength?this.titles[this.titleIndex].substring(0,this.displayedTitleLength):""}},mounted:function(){setTimeout(this.terminatePrelude,3900)},methods:{updateTitle:function(){this.typing&&this.displayedTitleLength<this.titles[this.titleIndex].length?(this.displayedTitleLength+=1," "===this.titles[this.titleIndex][this.displayedTitleLength]&&(this.displayedTitleLength+=1),setTimeout(this.updateTitle,125)):this.typing&&this.displayedTitleLength===this.titles[this.titleIndex].length?(this.typing=!1,setTimeout(this.updateTitle,800)):!this.typing&&this.displayedTitleLength>0&&this.titleIndex!==this.titles.length-1?(this.displayedTitleLength-=1," "===this.titles[this.titleIndex][this.displayedTitleLength]&&(this.displayedTitleLength-=1),setTimeout(this.updateTitle,170)):this.typing||this.displayedTitleLength||(this.titleIndex+=1,this.typing=!0,setTimeout(this.updateTitle,800))},terminatePrelude:function(){this.displayIntro=!1,setTimeout(this.updateTitle,200)}}},O=S,E=(i("3e32"),Object(c["a"])(O,I,T,!1,null,"630200dd",null));E.options.__file="Home.vue";var R=E.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"resume"},[i("transition",{attrs:{name:"filter_slide"}},[e.showFilter?i("div",{staticClass:"ds_filter"},[i("i",{staticClass:"fa fa-long-arrow-alt-right ds_close_btn left",on:{click:function(t){e.showFilter=!1}}}),i("div",{staticClass:"filter_section"},e._l(e.filters,function(t,n){return i("div",{key:n,staticClass:"filter_item",on:{click:function(e){t.display=!t.display}}},[i("h4",[e._v(e._s(t.title))]),i("div",{staticClass:"ds_toggle purple",class:{toggled:t.display}},[i("div",{staticClass:"dot"})])])}))]):e._e()]),e._m(0),i("div",{staticClass:"resume_outer_wrapper"},[i("div",{attrs:{id:"resume-content"}},[i("h3",[e._v("EXPERIENCE")]),e._l(e.experienceItems,function(t,n){return i("div",{key:n,staticClass:"resume_item"},[i("h4",[e._v(e._s(t.title))]),i("h5",[e._v(e._s(t.position_and_time))]),i("ul",e._l(t.list,function(t,n){return i("li",{key:n},[e._v(e._s(t))])}))])}),i("h3",[e._v("EDUCATION")]),e._l(e.educationItems,function(t,n){return i("div",{key:n+10,staticClass:"resume_item"},[i("h4",[e._v(e._s(t.title))]),i("h5",[e._v(e._s(t.position_and_time))]),i("ul",e._l(t.list,function(t,n){return i("li",{key:n},[e._v(e._s(t))])}))])}),i("h3",[e._v("SKILLS")]),i("div",{staticClass:"skills_item"},[i("ul",e._l(e.skills,function(t,n){return i("li",{key:n},[e._v(e._s(t))])}))]),i("h3",[e._v("SERVICE")]),e._l(e.serviceItems,function(t,n){return i("div",{key:n+20,staticClass:"resume_item"},[i("h4",[e._v(e._s(t.title))]),i("h5",[e._v(e._s(t.position_and_time))]),i("ul",e._l(t.list,function(t,n){return i("li",{key:n},[e._v(e._s(t))])}))])}),i("h3",[e._v("PERSONAL")]),i("div",{staticClass:"personal_item"},[i("p",[e._v(e._s(e.personalData))])])],2)]),i("div",{staticClass:"ds_info_line",attrs:{id:"test"}},[i("div",{staticClass:"float_wrapper"},[i("i",{staticClass:"fa fa-info"}),e._m(1),i("div",{staticClass:"info_line_btn",on:{click:function(t){e.$router.push({name:"Contact"})}}},[e._v("\n        Take me there\n        "),i("i",{staticClass:"fa fa-long-arrow-alt-right"})])])])],1)},L=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_header background"},[i("h1",[e._v("Resume")]),i("h2",[e._v("See what I've been up to")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",[i("strong",[e._v("Looking for an official copy of my resume?")]),i("br"),e._v("Just contact me and request it!\n      ")])}],M=(i("b54a"),i("28a5"),{name:"Resume",data:function(){return{link:"https://onedrive.live.com/embed?cid=F2D94E544E7CA959&resid=F2D94E544E7CA959%212878&authkey=AIjBRexX3Hd4eLg&em=2",experienceItems:[{title:"MILLENIUM AUTO NETWORK",position_and_time:"Software Developer, October 2017 - November 2017",description:"After gaining valuable experience in the industry, I was hired as a temporary developer directly in charge of optimizing the company website for mobile devices. As part of my work I overhauled the current stylesheets and implemented media queries to assist in overall visual and user experience enhancements. I assisted lead developers of their team in the optimization of load time and image rendering on a website that requires numerous pictures to be loaded quickly and effectively. Working with Millennium was an extremely valuable experience both because of the experience I gained and the opportunity to freelance and work remotely for an outside company.",list:["Overhauled CSS stylesheets and implemented global media queries making the site accessible and usable to users of all operating systems and devices.","Assisted lead developers in the optimization of load time, image rendering and stylesheet refinement."]},{title:"ROOM CHOICE",position_and_time:"Frontend Software Developer, March 2017 - November 2018",description:"At Room Choice, I progressed from having a minimal coding background, to a mastery of several high-demand programming languages. As part of a small and elite team of developers, I had a lot of responsibility placed on my shoulders and was assigned to head up projects or the creation of new functionality to suit the needs of numerous clients. Regular completion of these projects validated that quality stems from attention to detail and client-first thinking. During my time, Room Choice underwent a company rebranding, which included a redesign of the software and company website. This gave me the opportunity to test the valuable skills I had learned, as I created robust and clean stylesheets to enhance user experience, to implimenting global media queries to allow users to lease beds and sign contracts from anywhere!",list:["Lead role in the rebuilding and bottom-to-top redesign of the frontend of the software system in Vue.js.","Collaborated with company executives in managing product development across 4 software services.","Designed and implemented customizable and exportable financial and operational reports accessible to managers at all clients.","Performed bank reconciliations and user ledger audits with the CFO.","Assisted in the creation and monitoring of the online payment system used by tenants from all clients.","Reported to company executives regularly to communicate goals and progress on current projects."]}],educationItems:[{title:"BRIGHAM YOUNG UNIVERSITY",position_and_time:"Accounting, August 2017 -",list:["3.85 Major GPA with a 4.0 in all Accounting and Finance classes.","Met with professors and Accounting staff frequently as a top prospect in recruiting efforts.","Involved in BYU's Tech Club, PEVC Club, and Corporate Finance Club.","Hand-picked to be a part of the BYU Pre-Ph.D. in Finance program."]}],serviceItems:[{title:"THE CHURCH OF JESUS CHRIST OF LATTER-DAY SAINTS",position_and_time:"Volunteer Representative, 2016-2017",list:["Directed volunteer efforts in Rosario and surrounding areas.","Helped monitor short-term and long-term progress of representatives in the area.","Spent over 100 hours teaching English to help others increase their marketability."]}],skills:["Vue JS","HTML","CSS (SASS, Stylus)","SQL","Microsoft Excel","Product Management","Spanish","Client Communication"],personalData:"Recorded and performed live with multiple Grammy award winning musicians in multiple countries on drum set. Eagle scout. Enjoy reading and playing basketball and soccer.",showFilter:!1,filters:[{title:"Experience",display:!0},{title:"Education",display:!0},{title:"Skills",display:!0},{title:"Service",display:!1},{title:"Personal",display:!0}],openedFilterSection:""}},computed:{downloadLink:function(){return this.link.split("embed").join("download")}},methods:{print:function(){var e="resume-content",t=document.getElementById(e).innerHTML,i=window.open("","Print","height=600,width=800");return i.document.write("<html><head><title>Dallin Stagg - dallinstagg.com</title>"),i.document.write("</head><body >"),i.document.write(t),i.document.write("</body></html>"),i.document.close(),i.focus(),i.print(),i.close(),!0}},mounted:function(){this.experienceItems.reverse(),this.educationItems.reverse()}}),P=M,j=(i("2f03"),Object(c["a"])(P,A,L,!1,null,"3f6c6880",null));j.options.__file="Resume.vue";var $=j.exports,N=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"portfolio"},[i("div",{staticClass:"portfolio_wrapper"},[i("div",{staticClass:"page_header background with_polygon"},[i("h1",[e._v("Portfolio")]),i("h2",[e._v("Check out my latest work")]),i("div",{staticClass:"svg_wrapper"},[i("svg",{attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100"}},[i("polygon",{staticClass:"light",attrs:{points:"0,0 0,100 100,100 100,0 50,90",opacity:"1"}}),i("polygon",{staticClass:"med",attrs:{points:"0,7 50,97 100,7 100,10 50,100 0,10",opacity:"1"}})])])]),e._l(e.items,function(t,n){return i("div",{key:n,staticClass:"portfolio_item",class:e.getColor(n)},[i("div",{staticClass:"content"},[i("div",{staticClass:"mobile"},[i("div",{staticClass:"image",class:t.image_class})]),n%2===0?i("div",{staticClass:"desktop"},[i("div",{staticClass:"image",class:t.image_class})]):e._e(),i("div",{staticClass:"text_wrapper"},[t.company?i("h4",[e._v(e._s(t.company))]):e._e(),i("h2",{staticClass:"project_title"},[e._v(e._s(t.title))]),i("p",[e._v(e._s(t.description))]),i("div",{staticClass:"ds_btn grad"},[e._v("Learn More")])]),n%2===1?i("div",{staticClass:"desktop"},[i("div",{staticClass:"image",class:t.image_class})]):e._e()]),i("dsBreaker",{attrs:{passedColor:e.getColor(n)}})],1)}),i("div",{staticClass:"ds_info_line white"},[i("div",{staticClass:"float_wrapper"},[i("i",{staticClass:"fa fa-info"}),e._m(0),i("div",{staticClass:"info_line_btn",on:{click:function(t){e.$router.push({name:"Contact"})}}},[e._v("\n          Take me there\n          "),i("i",{staticClass:"fa fa-long-arrow-alt-right"})])])])],2)])},H=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("h4",[i("strong",[e._v("Trying to collaborate?")]),i("br"),e._v("Just contact me!\n        ")])}],q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"svg_breaker",class:e.colorReversal(e.passedColor)},[i("svg",{attrs:{preserveAspectRatio:"none",viewBox:"0 0 100 100"}},[i("defs",[i("filter",{attrs:{id:"f4",x:"0",y:"0",width:"150%",height:"150%"}},[i("feOffset",{attrs:{result:"offOut",in:"SourceGraphic",dx:"0",dy:"2"}}),i("feColorMatrix",{attrs:{result:"matrixOut",in:"offOut",type:"matrix",values:"0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 .6 0"}}),i("feGaussianBlur",{attrs:{result:"blurOut",in:"matrixOut",stdDeviation:"3"}}),i("feBlend",{attrs:{in:"SourceGraphic",in2:"blurOut",mode:"normal"}})],1)]),i("polygon",{class:e.passedColor,attrs:{filter:"url(#f4)",points:"0,0 50,90 100,0 0,0",opacity:"1"}})])])},D=[],B={name:"Breaker",props:["passedColor"],data:function(){return{}},methods:{colorReversal:function(e){return"light"===e?"white":"white"===e?"light":void 0}}},F=B,U=(i("0abc"),Object(c["a"])(F,q,D,!1,null,"4a111e1a",null));U.options.__file="Breaker.vue";var W=U.exports,z={name:"Portfolio",components:{dsBreaker:W},data:function(){return{items:[{company:"Room Choice",image_class:"rc_accounting",title:"Accounting",description:"A powerful accounting software with all the features you'd expect from scheduled journal entry creation to intelligent financial statement projections.",link:""},{company:"Room Choice",image_class:"rc_com",title:"Company Website",description:"The company website. Linked in all marketing campaigns and ads.",link:"roomchoice.com"},{company:"Room Choice",image_class:"rc_manager",title:"Manager Portal",description:"The feature-rich student housing management system used for everything from monitoring the leasing process to viewing and exporting customizable and powerful financial reports.",link:""},{image_class:"mil",title:"Millenium Auto Network",description:"The company website for Millenium Auto Network.",link:"milleniumauto.net"},{company:"Room Choice",image_class:"rc_student",title:"Student Portal",description:"A portal to the tenant-side Room Choice experience. Complete with application, contract signing, schedulable payments, maintenance requests, social media functionality and much more!",link:""}],infoToShow:""}},methods:{openLink:function(e){window.open("https://"+e,"_blank")},getColor:function(e){return e%2===0?"light":"white"}}},G=z,J=(i("8ff7"),Object(c["a"])(G,N,H,!1,null,"ae8ba170",null));J.options.__file="Portfolio.vue";var V=J.exports,Y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contact_me"},[e._m(0),i("div",{staticClass:"outer_wrapper"},[i("div",{staticClass:"content"},[i("div",{staticClass:"input_item"},[i("p",{class:{shift:e.name}},[e._v("NAME")]),i("input",{attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){return e.name=t.target.value}}})]),i("div",{staticClass:"input_item"},[i("p",{class:{shift:e.email}},[e._v("EMAIL")]),i("input",{attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){return e.email=t.target.value}}})]),i("div",{staticClass:"input_item"},[i("p",{class:{shift:e.message}},[e._v("MESSAGE")]),i("textarea",{domProps:{value:e.message},on:{input:function(t){return e.message=t.target.value}}})]),i("div",{staticClass:"toggle_item"},[i("div",{staticClass:"ds_toggle purple left",class:{toggled:e.request_resume},on:{click:function(t){e.request_resume=!e.request_resume}}},[i("div",{staticClass:"dot"})]),i("p",[e._v("REQUEST OFFICIAL RESUME")])]),i("div",{staticClass:"btn_wrapper",staticStyle:{"text-align":"center"}},[i("div",{staticClass:"ds_btn green",class:{disabled:!e.inputReady},on:{click:function(t){e.go()}}},[e._v("Send")])]),i("transition",{attrs:{name:"fade"}},[e.messageSent?i("div",{staticClass:"success_prompt"},[i("h4",[e._v("Thanks for contacting me! I'll be sure to contact you as soon as I am able! In the meantime, enjoy the confetti. :)")])]):e._e()])],1)])])},K=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page_header background"},[i("h1",[e._v("Contact")]),i("h2",[e._v("Let's get in touch")])])}],Q={name:"Contact",data:function(){return{messageSent:!1,name:"",email:"",message:"",request_resume:!1}},computed:{inputReady:function(){return this.name&&this.email&&this.message}},methods:{go:function(){if(this.inputReady){var e="https://script.google.com/macros/s/AKfycbwS78apLRhuzlmigzzMCZH_2Y6opmpWeCqfbc1_unWqEevmsUI/exec",t=new Date;fetch(e+"?name="+this.name+"&email="+this.email+"&message="+this.message+"&date="+t+"&request_resume="+this.request_resume),this.$confetti.start({shape:"rect"}),this.messageSent=!0}}}},X=Q,Z=(i("acf4"),Object(c["a"])(X,Y,K,!1,null,"69889951",null));Z.options.__file="Contact.vue";var ee=Z.exports;n["a"].use(m["a"]);var te=new m["a"]({mode:"hash",scrollBehavior:function(e,t,i){return e.hash?{selector:e.hash}:{x:0,y:0}},routes:[{path:"/",name:"Personal Website",component:x,children:[{path:"home",name:"Home",component:R},{path:"resume",name:"Resume",component:$},{path:"portfolio",name:"Portfolio",component:V},{path:"contact",name:"Contact",component:ee}]}]});n["a"].use(s["a"]);var ie=new s["a"].Store({state:{menuOpen:!1},mutations:{toggleMenu:function(e){e.menuOpen=!e.menuOpen},clearAlert:function(e){e.alertInfo.show=!1}},actions:{}}),ne=i("98c9"),se=i("890b"),ae=i.n(se);n["a"].use(s["a"]),n["a"].use(ne["a"]),n["a"].use(ae.a),n["a"].config.productionTip=!1,new n["a"]({router:te,store:ie,render:function(e){return e(d)}}).$mount("#app")},5923:function(e,t,i){"use strict";var n=i("9bb8"),s=i.n(n);s.a},"5c0b":function(e,t,i){"use strict";var n=i("5e27"),s=i.n(n);s.a},"5e27":function(e,t,i){},"79c8":function(e,t,i){},"893b":function(e,t,i){},"8ff7":function(e,t,i){"use strict";var n=i("3974"),s=i.n(n);s.a},"9bb8":function(e,t,i){},acf4:function(e,t,i){"use strict";var n=i("79c8"),s=i.n(n);s.a},ceea:function(e,t,i){}});
//# sourceMappingURL=app.31126f02.js.map