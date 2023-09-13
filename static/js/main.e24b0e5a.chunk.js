(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),i=c(1),d=(c(10),c(11),c(4)),o=c.n(d);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var r=c(0);var j=function(e){var t=e.todos,c=e.selectedTodo,a=e.setSelectedTodo,n=function(e,t,c){return e.filter((function(e){var a=e.title.toLowerCase(),n=t===s.Active&&e.completed,l=t===s.Completed&&!e.completed;return!n&&!l&&!(c&&!a.includes(c.toLowerCase()))}))}(t,e.filter,e.query);return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:n.map((function(e){var t=e.id===(null===c||void 0===c?void 0:c.id);return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":t}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}):Object(r.jsx)("td",{className:"is-vcentered"}),Object(r.jsx)("td",{className:"is-vcentered",children:Object(r.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()({"far fa-eye-slash":t,"far fa-eye":!t})})})})})]},e.id)}))})]})},b=function(e){var t=e.setFilter,c=e.setQuery,s=e.query;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",title:"Select your option",onChange:function(e){return t(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:" control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:s,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),s&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})},u=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var m=function(e){var t=e.selectedTodo,c=e.close,s=Object(i.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1];return Object(i.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then(d)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-danger",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]}):Object(r.jsx)(u,{})]})},O=function(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(i.useState)(null),n=Object(l.a)(a,2),d=n[0],o=n[1],O=Object(i.useState)(!1),x=Object(l.a)(O,2),f=x[0],p=x[1],v=Object(i.useState)(""),N=Object(l.a)(v,2),y=N[0],g=N[1],k=Object(i.useState)("all"),S=Object(l.a)(k,2),C=S[0],T=S[1],w=Object(i.useState)(""),A=Object(l.a)(w,2),_=A[0],q=A[1];return Object(i.useEffect)((function(){p(!0),h("/todos").then(s).catch((function(){return g("Todo not found")})).finally((function(){return p(!1)}))}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:_,setQuery:q,setFilter:T})}),Object(r.jsxs)("div",{className:"block",children:[f&&Object(r.jsx)(u,{}),!f&&c.length>0?Object(r.jsx)(j,{todos:c,selectedTodo:d,setSelectedTodo:o,filter:C,query:_}):Object(r.jsx)("p",{children:y})]})]})})}),d&&Object(r.jsx)(m,{selectedTodo:d,close:function(){return o(null)}})]})};n.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e24b0e5a.chunk.js.map