(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},113:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(30),r=n.n(c),o=(n(99),n(4)),l=(n(70),n(71),n(100),n(46)),i=n(47),d=n(73),j=n.n(d),b=new(function(){function e(){Object(l.a)(this,e)}return Object(i.a)(e,[{key:"getProfile",value:function(){return j()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return j()(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),u=n(127),m=n(122),h=n(128),p=n(1),O={color:"#66ccff"},x={width:"100%",padding:"15px"};var g=function(e){return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark",style:x,children:Object(p.jsx)("div",{className:"navbar-nav",children:b.loggedIn()?Object(p.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)("a",{className:"navbar-brand",style:O,href:"/",children:" Eat-And-Go "}),Object(p.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(u.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(h.a,{className:"me-auto",children:[Object(p.jsx)(h.a.Link,{href:"/about",style:O,children:"Welcome"}),Object(p.jsx)(h.a.Link,{href:"/resturants",style:O,children:"Resturants"}),Object(p.jsx)(h.a.Link,{href:"/posts",style:O,children:"Discussion"}),Object(p.jsx)("a",{href:"/",className:"nav-link",onClick:function(){return b.logout()},style:O,children:"Logout"})]})})]})}):Object(p.jsx)(u.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(p.jsxs)(m.a,{children:[Object(p.jsx)("a",{className:"navbar-brand",style:O,href:"/",children:"  place holder"}),Object(p.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(p.jsx)(u.a.Collapse,{id:"responsive-navbar-nav",children:Object(p.jsxs)(h.a,{className:"me-auto",children:[Object(p.jsx)(h.a.Link,{href:"/about",style:O,children:"Welcome"}),Object(p.jsx)(h.a.Link,{href:"/resturants",style:O,children:"Resturants"}),Object(p.jsx)(h.a.Link,{href:"/posts",style:O,children:"Discussion"}),Object(p.jsx)(h.a.Link,{href:"/signup",style:O,children:"Signup"}),Object(p.jsx)(h.a.Link,{href:"/login",style:O,children:"Login"})]})})]})})})})},v=(n(108),function(){return Object(p.jsx)("div",{className:"nav",children:Object(p.jsx)(g,{})})}),f=(n(109),{padding:"10px",fontWeight:"bold"});var y,N,k,w,C,S,I,B,P=function(){return Object(p.jsx)("div",{className:"footer",id:"footer",children:Object(p.jsx)("p",{style:f,children:"\xa9 Team itWorksInLocal 2022"})})},_={margin:"30px"},$={backgroundColor:"#66ccff",padding:"20px"},L=function(){return Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h1",{className:"display-4",style:$,children:"Eat And Go"}),Object(p.jsx)("p",{className:"lead",style:_,children:"To dreams a coward the opprespect that fly to sleep; to greath this no mortal shuffer devoutrageousand the proubles, puzzlesh is heir current merit of somethis sicklied o'er a we know not that the of grunt wills bear the natural contumely, to, 'tis question. To die, or no traveller be, thus pause. Thus that may coment make cast of that pith a consummative hue of of? Ther whips a we haveller deat dream: ay, and ent and arms and arrows of grunt with and, but the of time, and by a sea of deat is ressor "}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)("p",{})]})},A=n(25),D=n(40),T=n(9),q=n(11),Y=n(123),F=n(18),U=n(36),E=n(130),G=Object(E.a)(y||(y=Object(U.a)(["\nmutation login($email: String!, $password: String!) {\n  login(email: $email, password: $password) {\n    token\n    user {\n      _id\n      username\n    }\n  }\n}\n"]))),W=Object(E.a)(N||(N=Object(U.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n        username\n      }\n    }\n  }\n"]))),z=Object(E.a)(k||(k=Object(U.a)(["\n  mutation addPost($postBody: String!) {\n    addPost(postBody: $postBody) {\n      _id\n      postBody\n      username\n      createdAt\n      comments {\n        _id\n        commentBody\n      }\n    }\n  }\n"]))),R=Object(E.a)(w||(w=Object(U.a)(["\n  mutation addComment($postId: ID!, $commentBody: String!) {\n    addComment(postId: $postId, commentBody: $commentBody) {\n      _id\n      postBody\n      username\n      createdAt\n      comments {\n        _id\n        commentBody\n        createdAt\n      }\n    }\n  }\n"]))),H={backgroundColor:"#66ccff",padding:"20px"},J={color:"#66ccff"},Q={backgroundColor:"black",color:"#66ccff"},M={display:"flex",flexDirection:"column",justifyContent:"center",padding:"20px"},K={padding:"10px"},V=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(q.a)(t,2),s=n[0],c=n[1],r=Object(Y.a)(G),l=Object(q.a)(r,2),i=l[0],d=l[1],j=d.error,u=d.data,m=function(e){var t=e.target,n=t.name,a=t.value;c(Object(o.a)(Object(o.a)({},s),{},Object(T.a)({},n,a)))},h=function(){var e=Object(D.a)(Object(A.a)().mark((function e(t){var n,a;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s),e.prev=2,e.next=5,i({variables:Object(o.a)({},s)});case 5:n=e.sent,a=n.data,b.login(a.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:c({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"login",children:[Object(p.jsx)("h1",{style:H,children:"Login"}),Object(p.jsx)("br",{}),Object(p.jsx)(F.b,{to:"/signup",children:Object(p.jsx)("button",{className:"btn btn-dark",style:J,children:"Go to Signup Page"})}),u?Object(p.jsxs)("p",{children:["Success! You may now head"," ",Object(p.jsx)(F.b,{to:"/",children:"back to the homepage."})]}):Object(p.jsxs)("form",{onSubmit:h,style:M,children:[Object(p.jsx)("input",{className:"form-input",style:K,placeholder:"Your email",name:"email",type:"email",value:s.email,onChange:m}),Object(p.jsx)("input",{className:"form-input",placeholder:"******",style:K,name:"password",type:"password",value:s.password,onChange:m}),Object(p.jsx)("button",{className:"btn btn-dark",style:J,children:"Login"})]}),j?Object(p.jsxs)("div",{style:Q,children:[Object(p.jsx)("h3",{children:"Form Errors:"}),Object(p.jsxs)("p",{className:"error",children:["The user credentials provided are incorrect, please try again. ",j.message]})]}):null]})},X={display:"flex",flexDirection:"column",justifyContent:"center"},Z={color:"#66ccff"},ee={backgroundColor:"#66ccff",padding:"20px"},te={padding:"30px"},ne=function(){var e=Object(a.useState)({username:"",email:"",password:""}),t=Object(q.a)(e,2),n=t[0],s=t[1],c=Object(Y.a)(W),r=Object(q.a)(c,2),l=r[0],i=r[1],d=i.error,j=i.data,u=function(e){var t=e.target,a=t.name,c=t.value;s(Object(o.a)(Object(o.a)({},n),{},Object(T.a)({},a,c)))},m=function(){var e=Object(D.a)(Object(A.a)().mark((function e(t){var a,s;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,l({variables:Object(o.a)({},n)});case 5:a=e.sent,s=a.data,b.login(s.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(p.jsx)("div",{className:"col-12",style:te,children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("h4",{className:"card-header",style:ee,children:"Sign Up"}),Object(p.jsxs)("div",{className:"card-body",children:[j?Object(p.jsxs)("p",{children:["Success! You may now head"," ",Object(p.jsx)(F.b,{to:"/",children:"back to the homepage."})]}):Object(p.jsxs)("form",{onSubmit:m,style:X,children:[Object(p.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:n.name,onChange:u}),Object(p.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:u}),Object(p.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:u}),Object(p.jsx)("button",{className:"btn btn-dark",style:Z,type:"submit",children:"Submit"})]}),d&&Object(p.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:d.message})]})]})})})},ae=n(133),se={color:"#66ccff"},ce={backgroundColor:"#66ccff",padding:"20px"},re={padding:"20px",backgroundColor:"#212429",justifyContent:"Center"},oe=function(e){var t=e.posts;e.title,e.showTitle,e.showUsername;return t.length?Object(p.jsxs)("section",{className:"posts",children:[Object(p.jsx)("h1",{style:ce,children:"User Posts"}),t.map((function(e){return Object(p.jsx)("div",{className:"row bg-dark",style:re,children:Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsxs)("div",{className:"card text-center",children:[Object(p.jsx)("div",{className:"card-header",style:ce,children:e.createdAt}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.postBody}),Object(p.jsxs)("p",{className:"card-text",children:["-Posted by ",e.username]}),Object(p.jsx)("a",{href:"/posts/".concat(e._id),className:"btn btn-dark",style:se,children:"Comment on this Post!"})]})]})})},e._id)}))]}):Object(p.jsx)("h3",{children:"No posts Yet"})},le=n(68),ie=Object(E.a)(C||(C=Object(U.a)(["\n  query user($username: String!) {\n    user(username: $username) {\n      _id\n      username\n      email\n    }\n  }\n"]))),de=Object(E.a)(S||(S=Object(U.a)(["\n  query getPosts {\n    posts {\n      _id\n      postBody\n      username\n      createdAt\n    }\n  }\n"]))),je=Object(E.a)(I||(I=Object(U.a)(["\n  query getSinglePost($postId: ID!) {\n    post(postId: $postId) {\n      _id\n      postBody\n      username\n      createdAt\n      comments {\n        _id\n        commentBody\n        username\n        createdAt\n      }\n    }\n  }\n"]))),be=Object(E.a)(B||(B=Object(U.a)(["\n  query getResturants {\n    resturant {\n        _id\n        name\n        image\n        description\n    }\n  }\n"]))),ue={display:"flex",flexDirection:"row",justifyContent:"Center",padding:"10px",backgroundColor:"#66ccff"},me={display:"flex",flexDirection:"column",justifyContent:"Center",padding:"10px"},he={color:"#66ccff"},pe=function(){var e=Object(a.useState)(""),t=Object(q.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),r=Object(q.a)(c,2),o=r[0],l=r[1],i=Object(Y.a)(z,{update:function(e,t){var n=t.data.addPost;try{var a=e.readQuery({query:de}).posts;e.writeQuery({query:de,data:{posts:[n].concat(Object(le.a)(a))}})}catch(s){console.error(s)}}}),d=Object(q.a)(i,2),j=d[0],u=d[1].error,m=function(){var e=Object(D.a)(Object(A.a)().mark((function e(t){var a;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,j({variables:{postBody:n,username:b.getProfile().data.username}});case 4:a=e.sent,a.data,s(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"form",style:ue,children:Object(p.jsx)("h3",{children:"What's on your mind?"})}),b.loggedIn()?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:"m-0 ".concat(280===o||u?"text-danger":""),children:["Character Count: ",o,"/280"]}),Object(p.jsxs)("form",{className:"form",onSubmit:m,style:me,children:[Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("textarea",{name:"postBody",placeholder:"Type your post here...",value:n,className:"form-input w-100",style:{lineHeight:"1.5",resize:"vertical"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"postBody"===n&&a.length<=280&&(s(a),l(a.length))}})}),Object(p.jsx)("div",{className:"col-12",children:Object(p.jsx)("button",{className:"btn btn-dark",type:"submit",style:he,children:"Add Post"})}),u&&Object(p.jsx)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:u.message})]})]}):Object(p.jsx)("div",{className:"form",style:me,children:Object(p.jsxs)("p",{children:["You need to be logged in to share your posts. Please"," ",Object(p.jsx)(F.b,{to:"/login",children:"login"})," or ",Object(p.jsx)(F.b,{to:"/signup",children:"signup."})]})})]})},Oe=function(){var e=Object(ae.a)(de),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.posts)||[];return Object(p.jsxs)("div",{className:"top-level",children:[Object(p.jsx)("div",{className:"post-list",children:t?Object(p.jsx)("div",{children:"LOADING..."}):Object(p.jsx)(oe,{posts:a})}),Object(p.jsx)("div",{className:"post-form",children:Object(p.jsx)(pe,{})})]})},xe=n(15),ge={color:"black"},ve={backgroundColor:"#66ccff",padding:"10px",color:"black"},fe={justifyContent:"Center",padding:"20px"},ye=function(e){var t=e.comments,n=void 0===t?[]:t;return n.length?Object(p.jsxs)("section",{className:"comments",children:[Object(p.jsx)("h1",{style:ve,children:"Comments"}),n&&n.map((function(e){return Object(p.jsx)("div",{className:"row",style:fe,children:Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-header",style:ge,children:"Comment"}),Object(p.jsx)("div",{className:"card-body",children:Object(p.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(p.jsx)("p",{style:ge,children:e.commentBody}),Object(p.jsxs)("footer",{className:"blockquote-footer",children:["Posted by ",e.username," on ",e.createdAt]})]})})]})})},e._id)}))]}):Object(p.jsx)("h3",{children:"No Comments Yet"})},Ne={justifyContent:"Center"},ke={backgroundColor:"#66ccff",padding:"20px",color:"black"},we={color:"#66ccff"},Ce=function(e){var t=e.postId,n=Object(a.useState)(""),s=Object(q.a)(n,2),c=s[0],r=s[1],o=Object(a.useState)(0),l=Object(q.a)(o,2),i=l[0],d=l[1],j=Object(Y.a)(R),u=Object(q.a)(j,2),m=u[0],h=u[1].error,O=function(){var e=Object(D.a)(Object(A.a)().mark((function e(n){var a;return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,m({variables:{postId:t,commentBody:c,username:b.getProfile().data.username}});case 4:a=e.sent,a.data,r(""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"p-3 bg-dark text-light",style:Ne,children:[Object(p.jsx)("h4",{style:ke,children:"What do YOU have to say about this Post?"}),b.loggedIn()?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{className:"m-0 ".concat(280===i||h?"text-danger":""),children:["Character Count: ",i,"/280",h&&Object(p.jsx)("span",{className:"ml-2",children:h.message})]}),Object(p.jsxs)("form",{className:"flex-row justify-center align-center",onSubmit:O,children:[Object(p.jsx)("div",{className:"col-12 col-lg-12",children:Object(p.jsx)("textarea",{name:"commentBody",placeholder:"Add your comment...",value:c,className:"form-input w-50",style:{lineHeight:"1.5",resize:"vertical"},onChange:function(e){var t=e.target,n=t.name,a=t.value;"commentBody"===n&&a.length<=280&&(r(a),d(a.length))}})}),Object(p.jsx)("div",{className:"col-12 col-lg-12",children:Object(p.jsx)("button",{className:"btn btn-light btn-block py-3",type:"submit",children:"Add Comment"})})]})]}):Object(p.jsxs)("p",{children:["You need to be logged in to share your posts. Please"," ",Object(p.jsx)(F.b,{to:"/login",style:we,children:"login"})," or ",Object(p.jsx)(F.b,{to:"/signup",style:we,children:"signup."})]})]})},Se={backgroundColor:"#66ccff",padding:"20px"},Ie={padding:"20px",justifyContent:"Center"},Be={color:"white",padding:"20px"},Pe=function(){var e=Object(xe.e)().postId,t=Object(ae.a)(je,{variables:{postId:e}}),n=t.loading,a=t.data,s=(null===a||void 0===a?void 0:a.post)||{};return n?Object(p.jsx)("div",{children:"Loading..."}):Object(p.jsxs)("section",{className:"post",children:[Object(p.jsx)("h1",{style:Se,children:"Post Discussion"}),Object(p.jsxs)("div",{className:"row bg-dark",style:Ie,children:[Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsxs)("div",{class:"card text-center",children:[Object(p.jsx)("div",{class:"card-header",style:Se,children:s.createdAt}),Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h5",{class:"card-title",children:s.postBody}),Object(p.jsxs)("p",{class:"card-text",children:["-Posted by ",s.username]})]})]})}),Object(p.jsx)("div",{className:"bg-dark",style:Be,children:Object(p.jsx)(ye,{comments:s.comments})}),Object(p.jsx)("div",{className:"m-3 p-4",style:{border:"1px dotted #1a1a1a"},children:Object(p.jsx)(Ce,{postId:s._id})})]})]})},_e=function(){var e=b.getProfile().data.username;console.log(e);var t=Object(ae.a)(ie,{variables:{username:e}}),n=t.loading;t.data;return Object(p.jsx)("div",{className:"top-level",children:Object(p.jsx)("div",{className:"post-list",children:n?Object(p.jsx)("div",{children:"LOADING..."}):Object(p.jsx)("h1",{className:"",children:"saved should be here."})})})},$e={backgroundColor:"#66ccff",padding:"20px"},Le={padding:"20px",backgroundColor:"#212429",justifyContent:"Center"},Ae=function(e){var t=e.resturants;return t.length?Object(p.jsxs)("section",{className:"resturant",children:[Object(p.jsx)("h1",{style:$e,children:"Resturants"}),t.map((function(e){return Object(p.jsx)("div",{className:"row",style:Le,children:Object(p.jsx)("div",{className:"col-sm-8",children:Object(p.jsx)("div",{className:"card text-center",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.name}),Object(p.jsx)("img",{className:"img1",src:e.image}),Object(p.jsx)("p",{className:"card-text",children:e.description})]})})})},e._id)}))]}):Object(p.jsx)("h3",{children:"No Resturants"})},De=function(){var e=Object(ae.a)(be),t=e.loading,n=e.data,a=(null===n||void 0===n?void 0:n.resturants)||[];return Object(p.jsx)("div",{className:"top-level",children:Object(p.jsx)("div",{className:"post-list",children:t?Object(p.jsx)("div",{children:"LOADING..."}):Object(p.jsx)(Ae,{resturants:a})})})},Te=n(90),qe=n(129),Ye=n(131),Fe=n(126),Ue=n(88),Ee=Object(Te.a)({uri:"/graphql"}),Ge=Object(Ue.a)((function(e,t){var n=t.headers,a=localStorage.getItem("id_token");return{headers:Object(o.a)(Object(o.a)({},n),{},{authorization:a?"Bearer ".concat(a):""})}})),We=new qe.a({link:Ge.concat(Ee),cache:new Ye.a});var ze=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(Fe.a,{client:We,children:Object(p.jsx)(F.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)(xe.a,{exact:!0,path:"/",children:Object(p.jsx)(L,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/login",children:Object(p.jsx)(V,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/about",children:Object(p.jsx)(L,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/signup",children:Object(p.jsx)(ne,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/posts",children:Object(p.jsx)(Oe,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/posts/:postId",children:Object(p.jsx)(Pe,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/user",children:Object(p.jsx)(_e,{})}),Object(p.jsx)(xe.a,{exact:!0,path:"/resturants",children:Object(p.jsx)(De,{})}),Object(p.jsx)(P,{})]})})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(ze,{})}),document.getElementById("root")),Re()},70:function(e,t,n){},99:function(e,t,n){}},[[113,1,2]]]);
//# sourceMappingURL=main.666edc9a.chunk.js.map