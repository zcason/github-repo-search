(this["webpackJsonphotel-engine-project"]=this["webpackJsonphotel-engine-project"]||[]).push([[0],{29:function(e,t,a){},39:function(e,t,a){},46:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),c=a(13),r=a.n(c),l=a(11),s=a(3),i=a(9),u=a(12),o=a(28),j=(a(39),a(2));var b=function(e){var t=e.match,a=Object(n.useState)(null),c=Object(i.a)(a,2),r=c[0],s=c[1],b=Object(u.c)((function(e){return e.results.items})),h=t.params.id,d=b.find((function(e){return e.id===parseInt(h)}));return Object(n.useEffect)((function(){s(d)}),[d]),Object(j.jsxs)("div",{className:"details-page",children:[Object(j.jsx)(l.b,{className:"back-link",to:"/",children:"Back"}),Object(j.jsx)("div",{className:"repo-details",children:r&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:r.name}),Object(j.jsx)("p",{children:r.language}),Object(j.jsx)("img",{src:d.owner.avatar_url,alt:"".concat(d.owner.login)}),Object(j.jsxs)("h3",{children:["Owner: ",d.owner.login]}),Object(j.jsxs)("p",{className:"star-container",children:[Object(j.jsx)(o.a,{className:"star"})," ",d.stargazers_count]}),Object(j.jsx)("p",{className:"repo-desc",children:d.description})]},r.id)})]})},h=a(15),d=a.n(h),p=a(18),g=a(25),O=[{value:"",label:"All"},{value:"+language:assembly",label:"Assembly"},{value:"+language:c",label:"C"},{value:"+language:c#",label:"C#"},{value:"+language:c++",label:"C++"},{value:"+language:go",label:"Go"},{value:"+language:haskell",label:"Haskell"},{value:"+language:html",label:"HTML"},{value:"+language:java",label:"Java"},{value:"+language:javascript",label:"Javascript"},{value:"+language:php",label:"PHP"},{value:"+language:python",label:"Python"},{value:"+language:ruby",label:"Ruby"},{value:"+language:rust",label:"Rust"},{value:"+language:scala",label:"Scala"},{value:"+language:swift",label:"Swift"}],v=[{value:"",label:"Best Match (Default)"},{value:"&sort=stars",label:"Stars"}],f=function(e){return{type:"GET_RESULTS",payload:e}},x=function(){var e=Object(p.a)(d.a.mark((function e(t,a,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/repositories?q="+t+a+n);case 2:return c=e.sent,e.next=5,c.ok?c.json():c.json().then((function(e){return Promise.reject(e)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}();a(46);var m=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),l=Object(i.a)(r,2),s=l[0],o=l[1],b=Object(n.useState)(""),h=Object(i.a)(b,2),m=h[0],N=h[1],S=Object(n.useState)(null),y=Object(i.a)(S,2),w=y[0],_=y[1],E=Object(u.b)(),k=function(){var e=Object(p.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==(n=a.replace(/\s/g,"+"))){e.next=6;break}_("Please enter a valid name!"),e.next=11;break;case 6:return e.next=8,x(n,s,m);case 8:c=e.sent,E(f(c)),_(null);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"search-form",children:Object(j.jsxs)("form",{onSubmit:k,children:[Object(j.jsx)("input",{className:"search-input",onChange:function(e){return c(e.target.value)},placeholder:"Enter Repo Name",type:"text",required:!0}),w&&Object(j.jsx)("p",{className:"error",children:w}),Object(j.jsxs)("div",{className:"search-selectors",children:[Object(j.jsxs)("div",{className:"select-box",children:[Object(j.jsx)("label",{htmlFor:"language",children:"Language"}),Object(j.jsx)(g.a,{id:"language",placeholder:"All",defaultValue:s,onChange:function(e){return o(e.value)},options:O})]}),Object(j.jsxs)("div",{className:"select-box",children:[Object(j.jsx)("label",{htmlFor:"sort-by",children:"Sort By"}),Object(j.jsx)(g.a,{id:"sort-by",placeholder:"Best Match (Default)",defaultValue:m,onChange:function(e){return N(e.value)},options:v})]})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})})};a(59);var N=function(e){for(var t=e.reposPerPage,a=e.totalRepos,n=e.paginate,c=e.currentPage,r=[],l=1;l<=Math.ceil(a/t);l++)r.push(l);return Object(j.jsx)("ul",{className:"paginator",children:r.map((function(e){return Object(j.jsx)("li",{className:e===c?"page-number-active":"page-number",children:Object(j.jsx)("p",{onClick:function(){return n(e)},children:e})},e)}))})};a(60);var S=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(5),s=Object(i.a)(r,1)[0],o=a*s,b=o-s,h=Object(u.c)((function(e){return e.results})),d=h?h.items.length:null,p=h?h.items.slice(b,o):0;return Object(j.jsxs)("div",{children:[0===d&&Object(j.jsx)("p",{className:"no-repos",children:"Sorry, there are no repositories that matches this search."}),d>0&&Object(j.jsx)("ul",{className:"repo-list",children:p.map((function(e){return Object(j.jsxs)("li",{className:"repo-card",children:[Object(j.jsx)("img",{src:e.owner.avatar_url,alt:"".concat(e.owner.login)}),Object(j.jsxs)("div",{className:"repo-card-details",children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("p",{children:e.language})]}),Object(j.jsx)(l.b,{className:"repo-link",to:"/details/".concat(e.id),children:"Details"})]},e.id)}))}),Object(j.jsx)("div",{className:"center-paginator",children:Object(j.jsx)(N,{currentPage:a,reposPerPage:s,totalRepos:d,paginate:function(e){return c(e)}})})]})};a(61);var y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"header",children:"Search for a repository"}),Object(j.jsx)(m,{}),Object(j.jsx)(S,{})]})};a(62);var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(l.a,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",component:y}),Object(j.jsx)(s.a,{path:"/details/:id",component:b})]})})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))},E=a(19),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_RESULTS":return t.payload;default:return e}},P=Object(E.a)({results:k}),T=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),C=Object(E.b)(P,T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());C.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log(a)}}(C.getState())})),r.a.render(Object(j.jsx)(u.a,{store:C,children:Object(j.jsx)(l.a,{children:Object(j.jsx)(w,{})})}),document.getElementById("root")),_()}},[[63,1,2]]]);
//# sourceMappingURL=main.f1f44cb5.chunk.js.map