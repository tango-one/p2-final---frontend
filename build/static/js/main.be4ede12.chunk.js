(this.webpackJsonppe2=this.webpackJsonppe2||[]).push([[0],{123:function(e,t,c){},148:function(e,t,c){},151:function(e,t,c){},155:function(e,t,c){},167:function(e,t,c){},185:function(e,t,c){},196:function(e,t,c){},197:function(e,t,c){},198:function(e,t,c){},199:function(e,t,c){},200:function(e,t,c){},201:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},222:function(e,t,c){},223:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(28),r=c.n(a),i=(c(148),c(30)),o=c(27),j=(c(149),c(150),c(151),c(25)),l=c(226),b=c(227),d=c(228),u=c(229),h=c(230),O=c(231),x=c(232),m=c(239),p=c(81);c(152),c(224);p.a.apps.length?p.a.app():p.a.initializeApp({apiKey:"AIzaSyACy3DXOKoHK0nFoD5ZW2COxLLQclPLzpg",authDomain:"help-e30f6.firebaseapp.com",projectId:"help-e30f6",storageBucket:"help-e30f6.appspot.com",messagingSenderId:"426053638691",appId:"1:426053638691:web:6c756c2f8fbd8bc8366f96"});var f=p.a,g=c(2),v=Object(n.createContext)(),A=f.firestore().collection("user"),w=function(e){var t=e.children,c=Object(n.useState)(null),s=Object(j.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(!1),o=Object(j.a)(i,2),l=o[0],b=o[1];Object(n.useEffect)((function(){f.auth().onAuthStateChanged((function(e){null!==e?A.doc(e.uid).get().then((function(e){if(e.exists){var t=e.data();r(t),b(!1)}else b(!0)})).catch((function(e){b(!0)})):b(!0)}))}),[]);return Object(g.jsx)(v.Provider,{value:{user:a,setUser:r,signOut:function(){return f.auth().signOut()},signIn:function(e,t){return f.auth().signInWithEmailAndPassword(e,t)},signUp:function(e,t){return f.auth().createUserWithEmailAndPassword(e,t)},redirect:l},children:t})},N=v,C=(c(155),c.p+"static/media/person-circle.6d429003.svg"),y=c.p+"static/media/cart.5a3ccadd.svg",I=function(){var e=Object(n.useContext)(N),t=e.user,c=e.signOut,s=e.setUser,a=Object(o.f)(),r=Object(n.useState)(!1),p=Object(j.a)(r,2),f=p[0],v=p[1],A=Object(g.jsx)("div",{children:Object(g.jsx)("p",{style:{cursor:"pointer"},onClick:function(){c().then((function(){s(null),a.push("/login")})).catch((function(e){return console.error(e.message)}))},children:"Logout"})});return Object(g.jsx)(l.a,{light:!0,expand:"md",children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(i.b,{to:"/",children:Object(g.jsx)(b.a,{children:Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"here to help"})})}),Object(g.jsx)(d.a,{onClick:function(){return v(!f)}}),Object(g.jsxs)(u.a,{isOpen:f,navbar:!0,children:[Object(g.jsxs)(h.a,{className:"mx-auto navbar__wrapper",navbar:!0,children:[Object(g.jsx)(O.a,{children:Object(g.jsx)(i.b,{className:"nav-link",to:"/",children:"Home"})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(i.b,{className:"nav-link",to:"/courses",children:"Courses"})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(i.b,{className:"nav-link",to:"/contact",children:"Contact"})}),Object(g.jsx)(O.a,{children:Object(g.jsx)(i.b,{className:"nav-link",to:"/search",children:"Search"})})]}),null===t?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.b,{to:"/login",children:Object(g.jsx)(x.a,{className:"navbar__btn first",children:"Login"})}),Object(g.jsx)(i.b,{to:"/register",children:Object(g.jsx)(x.a,{className:"navbar__btn",children:"Register"})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(m.a,{content:A,children:Object(g.jsx)("img",{className:"navbar__icon",src:C,alt:"user logged"})}),Object(g.jsx)(i.b,{to:"/cart",children:Object(g.jsx)("img",{className:"navbar__icon",src:y,alt:"user cart"})})]})]})]})})},k=(c(167),{hero:{title:"Here to help",info:"We offer high qulity online tutorials to guide you when you need help",btnText:"Choose a course",bgImag:c.p+"static/media/person-work.44164a4f.png"},courses:[{id:1,title:"How to clean your PC",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",price:"20",image:c.p+"static/media/pc.4b998b8b.png",category:"pc"},{id:2,title:"Remove App",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",price:"20",image:c.p+"static/media/mobile.2f4046e7.jpg",category:"mobile"},{id:3,title:"Free Memory on Ipad",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo possimus soluta vel numquam facere reiciendis?",price:"20",image:c.p+"static/media/tab.f2804726.jpg",category:"tablet"}]}),S=function(){var e=Object(o.f)();return Object(g.jsxs)("div",{className:"hero__wrapper",children:[Object(g.jsxs)("section",{className:"detail__section",children:[Object(g.jsx)("h1",{children:k.hero.title}),Object(g.jsx)("p",{children:k.hero.info}),Object(g.jsx)("button",{onClick:function(){return e.push("/courses")},children:k.hero.btnText})]}),Object(g.jsx)("img",{className:"image__section",src:k.hero.bgImag,alt:"perons workspace"})]})},E=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(S,{})})},Q=c(73),L=c.n(Q),T=c(88),K=c(141),B=c(140),R=c(233),U=c(234),M=c(235),G=c(236),D=(c(114),c(123),f.firestore().collection("user")),H=function(){var e=Object(n.useContext)(N),t=e.setUser,c=e.signUp,s=Object(n.useState)(""),a=Object(j.a)(s,2),r=a[0],i=a[1],l=Object(n.useState)(""),b=Object(j.a)(l,2),d=b[0],u=b[1],h=Object(n.useState)(""),O=Object(j.a)(h,2),x=O[0],m=O[1],p=Object(n.useState)(!1),f=Object(j.a)(p,2),v=f[0],A=f[1],w=Object(o.f)(),C=function(){var e=Object(T.a)(L.a.mark((function e(n){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),""!==r&&""!==d&&""!==x?(A(!0),c(d,x).then((function(e){console.log(e);var c={id:e.user.uid,name:r,email:d};D.doc(c.id).set(c).then((function(){A(!1),t(c),w.push("/")})).catch((function(e){A(!1),y(e.message)}))})).catch((function(e){A(!1),y(e.message)}))):K.b.error("Fill all the fields");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(e){B.a.open({message:"Credential Error",description:e})};return Object(g.jsx)("div",{className:"register__wrapper",children:Object(g.jsxs)("div",{className:"register__content",children:[Object(g.jsx)("h2",{children:"Register"}),Object(g.jsxs)(R.a,{className:"register_form",onSubmit:C,children:[Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"name",children:"Full Name"}),Object(g.jsx)(G.a,{type:"text",name:"name",id:"name",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"email",children:"E-mail"}),Object(g.jsx)(G.a,{type:"email",name:"email",id:"email",value:d,onChange:function(e){return u(e.target.value)}})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"password",children:"Password"}),Object(g.jsx)(G.a,{type:"password",name:"password",id:"password",value:x,onChange:function(e){return m(e.target.value)}})]}),Object(g.jsx)("button",{type:"submit",children:v?"Registering....":"Register"})]})]})})},z=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(H,{})})},F=(f.firestore().collection("user"),function(){var e=Object(n.useContext)(N),t=(e.user,e.setUser,e.signIn),c=Object(n.useState)(""),s=Object(j.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(""),l=Object(j.a)(i,2),b=l[0],d=l[1],u=Object(n.useState)(!1),h=Object(j.a)(u,2),O=h[0],x=h[1],m=Object(o.f)(),p=function(){var e=Object(T.a)(L.a.mark((function e(c){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c.preventDefault(),""!==a&&""!==b?(x(!0),t(a,b).then((function(e){x(!1),console.log(e),m.push("/")})).catch((function(e){x(!1),f(e.message)}))):K.b.error("Fill all the fields");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){B.a.open({message:"Credential Error",description:e})};return Object(g.jsx)("div",{className:"register__wrapper",children:Object(g.jsxs)("div",{className:"register__content",children:[Object(g.jsx)("h2",{children:"Login"}),Object(g.jsxs)(R.a,{className:"register_form",onSubmit:p,children:[Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"email",children:"E-mail"}),Object(g.jsx)(G.a,{type:"email",name:"email",id:"email",value:a,onChange:function(e){return r(e.target.value)}})]}),Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"password",children:"Password"}),Object(g.jsx)(G.a,{type:"password",name:"password",id:"password",value:b,onChange:function(e){return d(e.target.value)}})]}),Object(g.jsx)("button",{type:"submit",children:O?"Logging....":"Login"})]})]})})}),V=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(F,{})})},Z=c(107),W=c(238),J=c(240),Y=c(142),q=Object(n.createContext)(),P=function(e){var t=e.children,c=Object(n.useState)([]),s=Object(j.a)(c,2),a=s[0],r=s[1],i=Object(n.useState)(0),o=Object(j.a)(i,2),l=o[0],b=o[1];return Object(g.jsx)(q.Provider,{value:{cartList:a,cartTotal:l,addToCart:function(e){r([e].concat(Object(Y.a)(a))),b((function(t){return t+e.price}))},removeFromCart:function(){}},children:t})},X=q,_=(c(185),function(e){var t=e.data,c=Object(n.useContext)(X).addToCart,s=Object(n.useContext)(N).user,a=Object(o.f)();return Object(g.jsx)(W.b,{grid:{gutter:8,sm:1,md:2,lg:3},dataSource:t,renderItem:function(e){return Object(g.jsx)(W.b.Item,{children:Object(g.jsxs)(J.a,{style:{width:350,cursor:"pointer"},cover:Object(g.jsx)("img",{loading:"lazy",alt:"example",src:e.image}),onClick:function(){return a.push("/course/".concat(e.id))},children:[Object(g.jsxs)("div",{className:"list__info",children:[Object(g.jsx)("h5",{children:e.title}),Object(g.jsxs)("span",{children:["$",e.price]})]}),Object(g.jsx)("p",{className:"list_desc",children:e.description}),Object(g.jsx)("button",{className:"list__btn",onClick:function(t){t.stopPropagation(),null!==s?(c(e),K.b.success("Course Added to Cart",.5)):B.a.open({message:"User Not Logged In",description:"Logged in or Create an Account to add course to cart"})},children:"Add To Cart"})]})})}})}),$=(c(196),Z.a.TabPane),ee=f.firestore().collection("courses"),te=function(){var e=Object(n.useState)(),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(j.a)(a,2),i=r[0],o=r[1];Object(n.useEffect)((function(){ee.get().then((function(e){var t=e.docs.map((function(e){return e.data()}));s(t),o(t)})).catch((function(e){console.log(e)}))}),[]);var l=function(e){return i.filter((function(t){return t.category===e}))};return Object(g.jsxs)("div",{className:"tabs__wrapper",children:[Object(g.jsx)("h1",{children:"Courses"}),Object(g.jsxs)(Z.a,{defaultActiveKey:"1",onChange:function(e){switch(e){case"1":s(i);break;case"2":s(l("pc"));break;case"3":s(l("mobile"));break;case"4":s(l("tablet"))}},children:[Object(g.jsx)($,{tab:"All",children:Object(g.jsx)(_,{data:c})},"1"),Object(g.jsx)($,{tab:"PC",children:Object(g.jsx)(_,{data:c})},"2"),Object(g.jsx)($,{tab:"MOBILE",children:Object(g.jsx)(_,{data:c})},"3"),Object(g.jsx)($,{tab:"TABLET",children:Object(g.jsx)(_,{data:c})},"4")]})]})},ce=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(te,{})})},ne=(c(197),function(){return Object(g.jsxs)("div",{className:"about__wrapper",children:[Object(g.jsx)("h1",{children:"Who we are"}),Object(g.jsx)("h2",{children:"Our Mission"}),Object(g.jsxs)("div",{className:"about__inner",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:k.hero.bgImag,alt:"perons workspace"})}),Object(g.jsx)("h3",{children:"To guide you so you will learn"})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"through online learning"}),Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:k.hero.bgImag,alt:"perons workspace"})})]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("span",{children:Object(g.jsx)("img",{src:k.hero.bgImag,alt:"perons workspace"})}),Object(g.jsx)("h3",{children:"on all screens, we are there for you."})]})]})]})}),se=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(ne,{})})},ae=(c(198),c(199),function(){return Object(g.jsx)("div",{className:"contact__message",children:Object(g.jsx)("p",{children:"Email received, we will contact you as soon as possible"})})}),re=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],s=t[1];return Object(g.jsxs)("div",{className:"contact__wrapper",children:[Object(g.jsx)("h1",{children:"Contact Us"}),c?Object(g.jsx)(ae,{}):Object(g.jsxs)(R.a,{className:"contact__form",children:[Object(g.jsx)(U.a,{children:Object(g.jsx)(G.a,{type:"text",name:"name",id:"name",placeholder:"Your Name"})}),Object(g.jsx)(U.a,{children:Object(g.jsx)(G.a,{type:"email",name:"email",id:"email",placeholder:"Email Address"})}),Object(g.jsx)(U.a,{children:Object(g.jsx)(G.a,{type:"textarea",name:"comment",id:"comment",placeholder:"Comment"})}),Object(g.jsx)("button",{onClick:function(e){!function(e){e.preventDefault(),s(!c)}(e)},children:"Submit"})]})]})},ie=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(re,{})})},oe=(c(200),f.firestore().collection("courses")),je=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(j.a)(a,2),i=r[0],l=r[1],b=Object(n.useState)([]),d=Object(j.a)(b,2),u=d[0],h=d[1],O=Object(o.f)();return Object(n.useEffect)((function(){oe.get().then((function(e){var t=e.docs.map((function(e){return e.data()}));h(t)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){if(""===c)l([]);else{var e=u.filter((function(e){return e.category.toLowerCase().includes(c.toLowerCase())}));l(e)}}),[c]),Object(g.jsxs)("div",{className:"search__wrapper",children:[Object(g.jsx)("h1",{children:"Search"}),Object(g.jsx)("div",{className:"search-input-container",children:Object(g.jsx)(G.a,{value:c,onChange:function(e){return s(e.target.value)},placeholder:"Search"})}),Object(g.jsx)(W.b,{grid:{gutter:8,sm:1,md:2,lg:3},dataSource:i,renderItem:function(e){return Object(g.jsx)(W.b.Item,{children:Object(g.jsxs)(J.a,{style:{width:350,cursor:"pointer"},cover:Object(g.jsx)("img",{loading:"lazy",alt:"example",src:e.image}),onClick:function(){return O.push("/course/".concat(e.id))},children:[Object(g.jsxs)("div",{className:"list__info",children:[Object(g.jsx)("h5",{children:e.title}),Object(g.jsxs)("h3",{children:["$",e.price]})]}),Object(g.jsx)("p",{className:"list_desc",children:e.description}),Object(g.jsx)("button",{className:"list__btn",children:"Add To Cart"})]})})}})]})},le=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(je,{})})},be=(c(201),function(){var e=Object(n.useContext)(X).cartTotal;return Object(g.jsxs)("div",{className:"cart-total",children:[Object(g.jsx)("h6",{children:"Total"}),Object(g.jsxs)("h2",{children:["$ ",e]}),Object(g.jsx)("button",{children:"Accept"})]})}),de=(c(202),c(203),function(e){var t=e.data,c=Object(o.f)();return Object(g.jsxs)("div",{className:"cart-item",onClick:function(){c.push("/course/".concat(t.id))},children:[Object(g.jsx)("img",{src:t.image,alt:t.title}),Object(g.jsx)("p",{children:t.title})]})}),ue=function(){var e=Object(n.useContext)(X).cartList;return Object(g.jsx)("div",{className:"cart-items",children:e.map((function(e,t){return Object(g.jsx)(de,{data:e},t)}))})},he=function(){return Object(g.jsxs)("div",{className:"container wrapper cart",children:[Object(g.jsx)(ue,{}),Object(g.jsx)(be,{})]})},Oe=c(137),xe=c.n(Oe),me=(c(222),f.firestore().collection("courses")),pe=function(){var e=Object(o.g)().id,t=Object(n.useState)(null),c=Object(j.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){me.doc(e).get().then((function(e){a(e.data())})).catch((function(e){return console.log(e.message)}))}),[e]),s?Object(g.jsxs)("div",{children:[Object(g.jsx)(xe.a,{url:s.video,controls:!0,width:"100%",height:"450px"}),Object(g.jsxs)("div",{className:"detail__section",children:[Object(g.jsxs)("div",{className:"row w-100 section__one",children:[Object(g.jsxs)("h5",{className:"col-4",children:["Course: ",Object(g.jsx)("span",{children:s.title})]}),Object(g.jsxs)("h5",{className:"col-4",children:["Duration: ",Object(g.jsx)("span",{children:s.duration})]}),Object(g.jsxs)("h5",{className:"col-4",children:["release date: ",Object(g.jsx)("span",{children:s.release_date})]})]}),Object(g.jsxs)("div",{className:"row w-100 py-4 section__two",children:[Object(g.jsxs)("div",{className:"col-6",children:[Object(g.jsx)("h5",{children:"This is what you will learn"}),Object(g.jsx)("p",{children:s.learn})]}),Object(g.jsxs)("div",{className:"col-6",children:[Object(g.jsx)("h5",{children:"This course is for"}),Object(g.jsx)("p",{children:s.course_for})]})]}),Object(g.jsxs)("div",{className:"section__three",children:[Object(g.jsx)("h5",{children:"Let us notify you on new courses"}),Object(g.jsxs)(R.a,{className:"newslater",children:[Object(g.jsxs)(U.a,{children:[Object(g.jsx)(M.a,{for:"email",children:"E-mail"}),Object(g.jsx)(G.a,{type:"email",name:"email",id:"email"})]}),Object(g.jsx)("button",{disabled:!0,children:"SUBMIT"})]})]})]})]}):Object(g.jsx)("h1",{children:"Loading..."})},fe=function(){return Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(pe,{})})};var ge=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)(i.a,{children:[Object(g.jsx)(I,{}),Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{exact:!0,path:"/",children:Object(g.jsx)(E,{})}),Object(g.jsx)(o.a,{path:"/register",children:Object(g.jsx)(z,{})}),Object(g.jsx)(o.a,{path:"/login",children:Object(g.jsx)(V,{})}),Object(g.jsx)(o.a,{path:"/courses",children:Object(g.jsx)(ce,{})}),Object(g.jsx)(o.a,{path:"/course/:id",children:Object(g.jsx)(fe,{})}),Object(g.jsx)(o.a,{path:"/about",children:Object(g.jsx)(se,{})}),Object(g.jsx)(o.a,{path:"/contact",children:Object(g.jsx)(ie,{})}),Object(g.jsx)(o.a,{path:"/search",children:Object(g.jsx)(le,{})}),Object(g.jsx)(o.a,{path:"/cart",children:Object(g.jsx)(he,{})})]})]})})},ve=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,242)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(w,{children:Object(g.jsx)(P,{children:Object(g.jsx)(ge,{})})})}),document.getElementById("root")),ve()}},[[223,1,2]]]);
//# sourceMappingURL=main.be4ede12.chunk.js.map