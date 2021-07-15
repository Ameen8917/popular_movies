(this["webpackJsonpmovie-website"]=this["webpackJsonpmovie-website"]||[]).push([[0],{20:function(e,t,a){},24:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(26),r=a.n(s),i=(a(20),a(21),a(8)),o=a(2),l=a(10),d=a.n(l),j=a(13),b=a(7),m=a(28),u=a(0),h=function(e){var t=e.movies,a=Object(c.useState)(""),n=Object(b.a)(a,2),s=n[0],r=n[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favourites-movies"));r(e)}),[]);var i=function(e){localStorage.setItem("favourites-movies",JSON.stringify(e))};return Object(u.jsx)(u.Fragment,{children:t.map((function(e,t){return Object(u.jsx)("div",{className:"d-flex p-2 justify-content-center  disabled",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===e||void 0===e?void 0:e.backdrop_path,'")'),backgroundPosition:"center center",height:"100vh"},children:Object(u.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"30px",color:"black"},children:Object(u.jsx)("div",{className:"card text-white bg-dark mb-3",style:{maxWidth:650},children:Object(u.jsxs)("div",{className:"row g-0",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),className:"img-fluid rounded-start",alt:"movie"})}),Object(u.jsx)("div",{className:"col-md-8 ",children:Object(u.jsxs)("div",{className:"card-body text-center",children:[Object(u.jsx)("h3",{className:"card-title",children:e.title}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{className:"text-muted",children:e.release_date})}),Object(u.jsxs)("p",{className:"card-text",children:[(a=null===e||void 0===e?void 0:e.overview,c=150,(null===a||void 0===a?void 0:a.length)>c?a.substr(0,c-1)+"....":a),Object(u.jsx)("br",{}),Object(u.jsx)("small",{className:"text-muted",children:Object(u.jsxs)("em",{children:[" ",e.tagline]})})]}),Object(u.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(u.jsxs)("button",{className:"btn btn-primary",type:"button",onClick:function(){return function(e){var t=[].concat(Object(m.a)(s),[e]);r(t),i(t)}(e)},children:["Add to favourite"," ",Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",className:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})})]})})]})})})},e.id);var a,c}))})},v=function(e){var t=e.match,a=Object(c.useState)([]),n=Object(b.a)(a,2),s=n[0],r=n[1],i=function(){var e=Object(j.a)(d.a.mark((function e(){var a,c,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"),e.next=3,fetch(a);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,r([n]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[]),Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(h,{movies:s})})})},x=(a(35),a(24),function(e){return Object(u.jsx)(u.Fragment,{children:e.movies.map((function(e,t){return Object(u.jsx)("div",{className:"image-container d-flex justify-content-start m-3",children:Object(u.jsx)(i.b,{to:"/details/".concat(e.id),children:Object(u.jsx)("img",{className:"row_poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:"movie"})})},e.id)}))})}),p=function(e){return Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("h4",{children:e.heading})})};var O=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63",e.next=3,fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n(a.results);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s()}),[]),Object(u.jsxs)("div",{className:"container-fluid movie-app",children:[Object(u.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4 justify-content-center",children:Object(u.jsx)(p,{heading:"Popular Movies"})}),Object(u.jsx)("div",{className:"row mt-3",children:Object(u.jsx)(x,{movies:a})})]})},f=function(){return Object(u.jsx)("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(i.b,{className:"navbar-brand",to:"/",children:Object(u.jsx)("strong",{children:"Movie App"})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(u.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link ","aria-current":"page",to:"/favourites",children:"Favourite List"})})}),Object(u.jsxs)("form",{className:"d-flex",children:[Object(u.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(u.jsx)("button",{className:"btn btn-outline-light",type:"submit",children:"Search"})]})]})]})})},g=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"mr-2",children:"Remove?"})," ",Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-x-square",viewBox:"0 0 16 16",children:[Object(u.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(u.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})})},N=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("favourites-movies"));n(e)}),[]);var s=function(e){localStorage.setItem("favourites-movies",JSON.stringify(e))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4 justify-content-center",children:Object(u.jsx)(p,{heading:"Favourites Movies"})}),Object(u.jsx)("div",{className:"row mt-3",children:a.length?a.map((function(e,t){return Object(u.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(u.jsx)("img",{className:"row_poster",src:"".concat("https://image.tmdb.org/t/p/original/").concat(e.poster_path),alt:"movie"}),Object(u.jsx)("span",{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e.id}));n(t),s(t)}(e)},className:"overlay d-flex align-item-center justify-content-center",children:Object(u.jsx)(g,{})})]},e.id)})):Object(u.jsx)("small",{className:" h-100 d-flex justify-content-center align-items-center ",children:"Note: right no there is no favourite movies please try to add"})})]})};var w=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(f,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:O}),Object(u.jsx)(o.a,{path:"/details/:id",exact:!0,component:v}),Object(u.jsx)(o.a,{path:"/favourites",exact:!0,component:N})]})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.00353686.chunk.js.map