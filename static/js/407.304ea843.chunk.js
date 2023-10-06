"use strict";(self.webpackChunkreact_project_movieapp=self.webpackChunkreact_project_movieapp||[]).push([[407],{8407:function(e,a,r){r.r(a),r.d(a,{default:function(){return o}});var s=r(1413),l=r(9439),t=r(2791),n=r(184);function o(){var e=(0,t.useState)({name:"",email:"",username:"",password:"",confirmPassword:""}),a=(0,l.Z)(e,2),r=a[0],o=a[1],i=(0,t.useState)({name:null,email:null,username:null,password:null,confirmPassword:null}),m=(0,l.Z)(i,2),d=m[0],u=m[1],c=function(e){var a=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");"name"===e.target.name&&(o((0,s.Z)((0,s.Z)({},r),{},{name:e.target.value})),u((0,s.Z)((0,s.Z)({},d),{},{name:0===e.target.value.length?"This field is required":null}))),"email"===e.target.name&&(o((0,s.Z)((0,s.Z)({},r),{},{email:e.target.value})),u((0,s.Z)((0,s.Z)({},d),{},{email:0===e.target.value.length?"This field is required":!0!==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)?"Not valid email":null}))),"username"===e.target.name&&(o((0,s.Z)((0,s.Z)({},r),{},{username:e.target.value})),u((0,s.Z)((0,s.Z)({},d),{},{username:0===e.target.value.length?"This field is required":!0===/\s/g.test(e.target.value)?"Space not allowed":null}))),"password"===e.target.name&&(o((0,s.Z)((0,s.Z)({},r),{},{password:e.target.value})),u((0,s.Z)((0,s.Z)({},d),{},{password:0===e.target.value.length?"This field is required":0===e.target.value?"Value must be greater than 0":e.target.value.length<8?"password too short":!0!==a.test(e.target.value)?"password not valid":null}))),"confirmPassword"===e.target.name&&(o((0,s.Z)((0,s.Z)({},r),{},{confirmPassword:e.target.value})),u((0,s.Z)((0,s.Z)({},d),{},{confirmPassword:0===e.target.value.length?"This field is required":e.target.value!==r.password?"not match":null})))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h1",{children:"Register"}),(0,n.jsx)("hr",{}),(0,n.jsxs)("form",{children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"name",placeholder:"your name",value:r.name,onChange:c}),d.name&&(0,n.jsx)("div",{id:"priceHelp",className:"form-text text-danger",children:d.name})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"email",children:"Email address"}),(0,n.jsx)("input",{type:"email",className:"form-control",name:"email","aria-describedby":"emailHelp",placeholder:"your email",value:r.email,onChange:c}),d.email&&(0,n.jsx)("div",{id:"priceHelp",className:"form-text text-danger",children:d.email})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"username",children:"User name"}),(0,n.jsx)("input",{type:"text",className:"form-control",name:"username",placeholder:"your user name",value:r.username,onChange:c}),d.username&&(0,n.jsx)("div",{id:"priceHelp",className:"form-text text-danger",children:d.username})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"password",children:"Password"}),(0,n.jsx)("input",{type:"password",className:"form-control",name:"password",placeholder:"Password",value:r.password,onChange:c}),d.password&&(0,n.jsx)("div",{id:"priceHelp",className:"form-text text-danger",children:d.password})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm password"}),(0,n.jsx)("input",{type:"password",className:"form-control",name:"confirmPassword",placeholder:"Confirm password",value:r.confirmPassword,onChange:c}),d.confirmPassword&&(0,n.jsx)("div",{id:"priceHelp",className:"form-text text-danger",children:d.confirmPassword})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary m-5",children:"Register"})]})]})}}}]);
//# sourceMappingURL=407.304ea843.chunk.js.map