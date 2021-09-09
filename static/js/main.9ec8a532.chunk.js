(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{49:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var c=s(10),a=s.n(c),n=s(39),r=s.n(n),i=(s(49),s(11)),l=s(6),o=Object(c.createContext)();var j=function(e){var t=Object(c.useState)(),s=Object(i.a)(t,2),a=s[0];return s[1],Object(l.jsx)(o.Provider,{value:{currentUser:a},children:e.children})},b=s(41),d=s(14),m=s(40),u=function(e){var t,s=e.title,a=e.poster_path,n=e.overview,r=e.vote_average,i=Object(c.useContext)(o).currentUser;return Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w1280"+a:"https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",alt:s}),Object(l.jsxs)("div",{className:"movie-info",children:[Object(l.jsx)("h3",{children:s}),i&&Object(l.jsx)("span",{className:"tag ".concat((t=r,t>=8?"green":t>=6?"orange":"red")),children:r})]}),Object(l.jsxs)("div",{className:"movie-over",children:[Object(l.jsx)("h2",{children:"Overview:"}),Object(l.jsx)("p",{children:n})]})]})};var h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),j=r[0],b=r[1],d=Object(c.useContext)(o).currentUser;Object(c.useEffect)((function(){h("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")}),[]);var h=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){a(e.results)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{className:"search",onSubmit:function(e){e.preventDefault(),j&&d?(h("https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="+j),b("")):alert("Please login to search a movie!")},children:Object(l.jsx)("input",{className:"search-input",type:"search",placeholder:"Search a movie",onChange:function(e){b(e.target.value)}})}),Object(l.jsx)("div",{className:"movie-container",children:s.length>0&&s.map((function(e){return Object(l.jsx)(u,Object(m.a)({},e),e.id)}))})]})},p=(s(51),s(60),s(53),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],j=r[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=(d[0],d[1]),u=Object(c.useState)(""),h=Object(i.a)(u,2),p=(h[0],h[1]);return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("div",{className:"form-image",children:Object(l.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample-movie"})}),Object(l.jsxs)("div",{className:"register-form",children:[Object(l.jsx)("h1",{className:"form-title display-3",children:"Register"}),Object(l.jsxs)("form",{id:"register",children:[Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"first-name",class:"form-label display-4",children:"First Name"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"first-name",placeholder:"Enter your first name...",onChange:function(e){return a(e.target.value)}})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"last-name",class:"form-label display-4",children:"Last Name"}),Object(l.jsx)("input",{type:"text",class:"form-control",id:"last-name",placeholder:"Enter your last name...",onChange:function(e){return j(e.target.value)}})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"email",class:"form-label display-4",children:"Email"}),Object(l.jsx)("input",{type:"email",class:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return m(e.target.value)}})]}),Object(l.jsxs)("div",{class:"mb-3",children:[Object(l.jsx)("label",{for:"password",class:"form-label display-4",children:"Password"}),Object(l.jsx)("input",{type:"password",class:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return p(e.target.value)}})]}),Object(l.jsx)("input",{type:"button",class:"btn btn-primary form-control",value:"Register",onClick:function(){"".concat(s," ").concat(o)}})]}),Object(l.jsx)("button",{class:"btn btn-primary form-control",children:"Continue with Google"})]})]})}),O=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),s=(t[0],t[1]),a=Object(c.useState)(""),n=Object(i.a)(a,2),r=(n[0],n[1]);return Object(l.jsxs)("div",{className:"register",children:[Object(l.jsx)("div",{className:"form-image",children:Object(l.jsx)("img",{src:"https://picsum.photos/1200/900",alt:"sample-movie"})}),Object(l.jsxs)("div",{className:"register-form",children:[Object(l.jsx)("h1",{className:"form-title display-3",children:"Login"}),Object(l.jsxs)("form",{id:"login",children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"email",className:"form-label display-4",children:"Email"}),Object(l.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter your email address...",onChange:function(e){return s(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"password",className:"form-label display-4",children:"Password"}),Object(l.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter your password...",onChange:function(e){return r(e.target.value)}})]}),Object(l.jsx)("input",{type:"button",className:"btn btn-primary form-control",value:"Login",onClick:function(){}})]}),Object(l.jsx)("button",{className:"btn btn-primary form-control",children:"Continue with Google"})]})]})},x=function(){var e=Object(c.useContext)(o).currentUser;return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",style:{color:"white"},children:"React Movie App"}),Object(l.jsxs)("div",{className:"buttons",children:[e?Object(l.jsx)("h3",{children:e.displayName}):Object(l.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",children:"Login"}),e?Object(l.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",children:"Logout"}):Object(l.jsx)("button",{type:"button",className:"ms-2 btn btn-outline-light",children:"Register"})]})]})})})},f=function(){return Object(l.jsxs)(b.a,{children:[Object(l.jsx)(x,{}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/register",component:p}),Object(l.jsx)(d.a,{exact:!0,path:"/login",component:O}),Object(l.jsx)(d.a,{exact:!0,path:"/",component:h})]})]})};var v=function(){return Object(l.jsx)(j,{children:Object(l.jsx)(f,{})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),g()}},[[59,1,2]]]);
//# sourceMappingURL=main.9ec8a532.chunk.js.map