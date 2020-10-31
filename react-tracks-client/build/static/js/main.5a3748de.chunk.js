(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{220:function(e,t,a){"use strict";a.r(t);var n=a(61),r=a(2),c=a(0),i=a.n(c),s=a(17),o=a.n(s),l=a(160),d=a(254),u=a(106),j=a.n(u),b=a(107),p=a.n(b),m=a(255),O=Object(l.a)({palette:{primary:{light:j.a[500],main:j.a[700],dark:j.a[900]},secondary:{light:p.a[200],main:p.a[500],dark:p.a[700]}},typography:{useNextVariants:!0}}),h=e=>t=>Object(r.jsxs)(d.a,{theme:O,children:[Object(r.jsx)(m.a,{}),Object(r.jsx)(e,Object(n.a)({},t))]}),g=a(64),x=a(22),v=a(11),f=a(10),k=a(263),y=a(23),w=a(21),S=a.n(w),N=a(36),I=a(163),C=a(222),T=a(284),q=a(97),$=a.n(q),L=a(149),W=a.n(L);function F(){var e=Object(y.a)(["\n  query($search: String) {\n    tracks(search: $search) {\n      id\n      title\n      description\n      url\n      likes {\n        id\n      }\n      postedBy {\n        id\n        username\n      }\n    }\n  }\n"]);return F=function(){return e},e}var A=Object(v.gql)(F()),B=Object(k.a)((e=>({root:{padding:"2px 4px",margin:e.spacing.unit,display:"flex",alignItems:"center"}}))),R=({setSearchResults:e})=>{var t=B(),a=Object(c.useRef)(null),n=Object(c.useState)(""),i=Object(f.a)(n,2),s=i[0],o=i[1],l=function(){var t=Object(N.a)(S.a.mark((function t(a,n){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,n.query({query:A,variables:{search:s}});case 3:r=t.sent,e(r.data.tracks);case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),d=()=>{e([]),o(""),a.current.focus()};return Object(r.jsx)(v.ApolloConsumer,{children:e=>Object(r.jsx)("form",{onSubmit:t=>l(t,e),children:Object(r.jsxs)(I.a,{className:t.root,elevation:1,children:[Object(r.jsx)(C.a,{onClick:d,children:Object(r.jsx)($.a,{})}),Object(r.jsx)(T.a,{fullWidth:!0,placeholder:"Search All Tracks",InputProps:{disableUnderline:!0},onChange:e=>o(e.target.value),value:s,inputRef:a}),Object(r.jsx)(C.a,{type:"submit",children:Object(r.jsx)(W.a,{})})]})})})},D=a(261),z=a(288),Q=a(270),U=a(271),P=a(272),M=a(273),E=a(51),_=a(274),J=a(153),G=a.n(J),H=a(150),V=a.n(H),K=({url:e})=>Object(r.jsx)("div",{children:Object(r.jsx)(V.a,{url:e,height:"30px",width:"500px",controls:!0})}),X=a(102),Y=a.n(X),Z=a(286),ee=a(264),te=Object(k.a)((e=>({snackbar:{margin:e.spacing.unit}}))),ae=({error:e})=>{var t=Object(c.useState)(!0),a=Object(f.a)(t,2),n=a[0],i=a[1],s=te();return Object(r.jsx)(Z.a,{open:n,className:s.snackbar,action:Object(r.jsx)(ee.a,{onClick:()=>{i(!1)},color:"secondary",size:"small",children:"Close"}),message:e})};function ne(){var e=Object(y.a)(["\n  {\n    me {\n      id\n      username\n      email\n      likeSet {\n        track {\n          id\n        }\n      }\n    }\n  }\n"]);return ne=function(){return e},e}function re(){var e=Object(y.a)(["\n  query getTracksQuery {\n    tracks {\n      id\n      title\n      description\n      url\n      likes {\n        id\n      }\n      postedBy {\n        id\n        username\n      }\n    }\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(y.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"]);return ce=function(){return e},e}var ie=Object(v.gql)(ce()),se=Object(v.gql)(re()),oe=Object(v.gql)(ne());function le(){var e=Object(y.a)(["\n  mutation($trackId: Int!) {\n    createLike(trackId: $trackId) {\n      track {\n        id\n        likes {\n          id\n        }\n      }\n    }\n  }\n"]);return le=function(){return e},e}var de=Object(v.gql)(le()),ue=Object(k.a)((e=>({iconButton:{color:"deeppink"},icon:{marginLeft:e.spacing.unit/2}}))),je=({trackId:e,likeCount:t})=>{var a=ue(),n=Object(c.useContext)(xt),i=Object(v.useMutation)(de,{refetchQueries:[{query:oe}]}),s=Object(f.a)(i,2),o=s[0],l=s[1].error;if(l)return Object(r.jsx)(ae,{error:l});return Object(r.jsxs)(C.a,{onClick:t=>{t.stopPropagation(),o({variables:{trackId:e}})},className:a.iconButton,disabled:n.likeSet.findIndex((({track:t})=>t.id===e))>-1,children:[t,Object(r.jsx)(Y.a,{className:a.icon})]})},be=a(151),pe=a.n(be);function me(){var e=Object(y.a)(["\n  mutation($trackId: Int!) {\n    deleteTrack(trackId: $trackId) {\n      trackId\n    }\n  }\n"]);return me=function(){return e},e}var Oe=Object(v.gql)(me()),he=({track:e})=>{var t=Object(c.useContext)(xt),a=Object(v.useMutation)(Oe,{update(e,t){o(e,t)}}),n=Object(f.a)(a,2),i=n[0],s=n[1].error;if(s)return Object(r.jsx)(ae,{error:s});var o=(e,{data:{deleteTrack:t}})=>{var a=e.readQuery({query:se}),n=a.tracks.findIndex((e=>Number(e.id)===t.trackId)),r=[...a.tracks.slice(0,n),...a.tracks.slice(n+1)];e.writeQuery({query:se,data:{tracks:r}})};return t.id===e.postedBy.id&&Object(r.jsx)(C.a,{onClick:()=>{i({variables:{trackId:e.id}})},children:Object(r.jsx)(pe.a,{})})},ge=a(103),xe=a.n(ge),ve=a(287),fe=a(265),ke=a(266),ye=a(267),we=a(259),Se=a(262),Ne=a(268),Ie=a(269),Ce=a(152),Te=a.n(Ce),qe=a(104),$e=a.n(qe),Le="https://api.cloudinary.com/v1_1/de-maio-design/raw/upload",We="de-maio-design",Fe="graphene-music";function Ae(){var e=Object(y.a)(["\n  mutation(\n    $trackId: Int!\n    $title: String!\n    $description: String!\n    $url: String!\n  ) {\n    updateTrack(\n      trackId: $trackId\n      title: $title\n      description: $description\n      url: $url\n    ) {\n      track {\n        id\n        title\n        description\n        url\n        likes {\n          id\n        }\n        postedBy {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return Ae=function(){return e},e}var Be=Object(v.gql)(Ae()),Re=Object(k.a)((e=>({container:{display:"flex",flexWrap:"wrap"},dialog:{margin:"0 auto",maxWidth:550},textField:{margin:e.spacing.unit},cancel:{color:"red"},save:{color:"green"},button:{margin:2*e.spacing.unit},icon:{marginLeft:e.spacing.unit},input:{display:"none"}}))),De=({track:e})=>{var t=Re(),a=Object(c.useContext)(xt),n=Object(v.useMutation)(Be,{onCompleted(){U()}}),i=Object(f.a)(n,2),s=i[0],o=i[1].error,l=Object(c.useState)(!1),d=Object(f.a)(l,2),u=d[0],j=d[1],b=Object(c.useState)(e.title),p=Object(f.a)(b,2),m=p[0],O=p[1],h=Object(c.useState)(e.description),g=Object(f.a)(h,2),x=g[0],k=g[1],y=Object(c.useState)(""),w=Object(f.a)(y,2),I=w[0],q=w[1],$=Object(c.useState)(!1),L=Object(f.a)($,2),W=L[0],F=L[1],A=Object(c.useState)(""),B=Object(f.a)(A,2),R=B[0],D=B[1];if(o)return Object(r.jsx)(ae,{error:o});var z=a.id===e.postedBy.id,Q=function(){var e=Object(N.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,e.prev=1,t.append("file",I),t.append("resource_type","raw"),t.append("upload_preset",Fe),t.append("cloud_name",We),e.next=8,xe.a.post(Le,t);case 8:return a=e.sent,e.abrupt("return",a.data.url);case 12:e.prev=12,e.t0=e.catch(1),console.error("Error with cloudinary "+e.t0),F(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),U=()=>{j(!1),F(!1),O(""),k(""),q("")},P=function(){var t=Object(N.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),F(!0),t.next=4,Q();case 4:n=t.sent,s({variables:{title:m,description:x,url:n,trackId:e.id}});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return z&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{onClick:()=>{j(!0)},children:Object(r.jsx)(Te.a,{})}),Object(r.jsx)(ve.a,{open:u,className:t.dialog,children:Object(r.jsxs)("form",{onSubmit:e=>{P(e)},children:[Object(r.jsx)(fe.a,{children:"Update Track"}),Object(r.jsx)(ke.a,{children:Object(r.jsxs)(ye.a,{component:"span",children:["Update Title, Description or Audio File",Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{label:"Title",placeholder:"Add Title",className:t.textField,onChange:e=>{O(e.target.value)},value:m})}),Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{multiline:!0,row:"2",label:"Description",placeholder:"Add Description",className:t.textField,onChange:e=>{k(e.target.value)},value:x})}),Object(r.jsxs)(we.a,{fullWidth:!0,error:""!==R,children:[Object(r.jsx)("input",{id:"audio",required:!0,type:"file",className:t.input,accept:"audio/mp3,audio/wav",onChange:e=>{var t=e.target.files[0];t&&t.size>1e7?D("".concat(t.name,": File size too large, 10mb max.")):(q(t),D(""))}}),Object(r.jsxs)("label",{htmlFor:"audio",children:[Object(r.jsxs)(ee.a,{variant:"outlined",color:I?"secondary":"inherit",component:"span",className:t.button,children:["Audio File",Object(r.jsx)($e.a,{className:t.icon})]}),I&&I.name]}),Object(r.jsx)(Se.a,{children:R})]})]})}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{onClick:()=>{j(!1)},className:t.cancel,disabled:W,children:"Cancel"}),Object(r.jsx)(ee.a,{disabled:W||!m.trim()||!x.trim()||!I,type:"submit",className:t.save,children:W?Object(r.jsx)(Ie.a,{size:24,className:t.save}):"Update Track"})]})]})})]})},ze=Object(k.a)((e=>({root:{display:"flex",flexWrap:"wrap"},details:{alignItems:"center"},link:{color:"#424242",textDecoration:"none","&:hover":{color:"black"}}}))),Qe=({tracks:e})=>{var t=ze();return Object(r.jsx)(D.a,{children:e.map((e=>Object(r.jsxs)(z.a,{children:[Object(r.jsx)(Q.a,{expandIcon:Object(r.jsx)(G.a,{}),children:Object(r.jsxs)(U.a,{className:t.root,children:[Object(r.jsx)(je,{trackId:e.id,likeCount:e.likes.length}),Object(r.jsx)(P.a,{primaryTypographyProps:{variant:"h4",color:"primary"},primary:e.title,secondary:Object(r.jsx)(g.b,{to:"/profile/".concat(e.postedBy.id),className:t.link,children:e.postedBy.username})}),Object(r.jsx)(K,{url:e.url})]})}),Object(r.jsx)(M.a,{className:t.details,children:Object(r.jsx)(E.a,{variant:"body1",children:e.description})}),Object(r.jsxs)(_.a,{children:[Object(r.jsx)(De,{track:e}),Object(r.jsx)(he,{track:e})]})]},e.id)))})},Ue=a(154),Pe=a.n(Ue);function Me(){var e=Object(y.a)(["\n  mutation($title: String!, $description: String!, $url: String!) {\n    createTrack(title: $title, description: $description, url: $url) {\n      track {\n        id\n        title\n        description\n        url\n        likes {\n          id\n        }\n        postedBy {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return Me=function(){return e},e}var Ee=Object(v.gql)(Me()),_e=Object(k.a)((e=>({container:{display:"flex",flexWrap:"wrap"},dialog:{margin:"0 auto",maxWidth:550},textField:{margin:e.spacing.unit},cancel:{color:"red"},save:{color:"green"},button:{margin:2*e.spacing.unit},icon:{marginLeft:e.spacing.unit},input:{display:"none"},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit,zIndex:"200"}}))),Je=()=>{var e=_e(),t=Object(v.useMutation)(Ee,{update(e,t){R(e,t)},onCompleted(){z()}}),a=Object(f.a)(t,2),n=a[0],i=a[1].error,s=Object(c.useState)(!1),o=Object(f.a)(s,2),l=o[0],d=o[1],u=Object(c.useState)(""),j=Object(f.a)(u,2),b=j[0],p=j[1],m=Object(c.useState)(""),O=Object(f.a)(m,2),h=O[0],g=O[1],x=Object(c.useState)(""),k=Object(f.a)(x,2),y=k[0],w=k[1],I=Object(c.useState)(!1),C=Object(f.a)(I,2),q=C[0],L=C[1],W=Object(c.useState)(""),F=Object(f.a)(W,2),A=F[0],B=F[1];if(i)return Object(r.jsx)(ae,{error:i});var R=(e,{data:{createTrack:t}})=>{var a=e.readQuery({query:se}).tracks.concat(t.track);e.writeQuery({query:se,data:{tracks:a}})},D=function(){var e=Object(N.a)(S.a.mark((function e(){var t,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new FormData,e.prev=1,t.append("file",y),t.append("resource_type","raw"),t.append("upload_preset",Fe),t.append("cloud_name",We),e.next=8,xe.a.post(Le,t);case 8:return a=e.sent,e.abrupt("return",a.data.url);case 12:e.prev=12,e.t0=e.catch(1),console.error("Error with cloudinary "+e.t0),L(!1);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}(),z=()=>{d(!1),L(!1),p(""),g(""),w("")},Q=function(){var e=Object(N.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(!0),e.next=4,D();case 4:a=e.sent,n({variables:{title:b,description:h,url:a}});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee.a,{onClick:()=>{d(!0)},variant:"outlined",className:e.fab,color:"secondary",children:l?Object(r.jsx)($.a,{}):Object(r.jsx)(Pe.a,{})}),Object(r.jsx)(ve.a,{open:l,className:e.dialog,children:Object(r.jsxs)("form",{onSubmit:e=>{Q(e)},children:[Object(r.jsx)(fe.a,{children:"Create Track"}),Object(r.jsx)(ke.a,{children:Object(r.jsxs)(ye.a,{component:"span",children:["Add a Title, Description and Audio File",Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{label:"Title",placeholder:"Add Title",className:e.textField,onChange:e=>{p(e.target.value)},value:b})}),Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{multiline:!0,row:"2",label:"Description",placeholder:"Add Description",className:e.textField,onChange:e=>{g(e.target.value)},value:h})}),Object(r.jsxs)(we.a,{fullWidth:!0,error:""!==A,children:[Object(r.jsx)("input",{id:"audio",required:!0,type:"file",className:e.input,accept:"audio/mp3,audio/wav",onChange:e=>{var t=e.target.files[0];t&&t.size>1e7?B("".concat(t.name,": File size too large, 10mb max.")):(w(t),B(""))}}),Object(r.jsxs)("label",{htmlFor:"audio",children:[Object(r.jsxs)(ee.a,{variant:"outlined",color:y?"secondary":"inherit",component:"span",className:e.button,children:["Audio File",Object(r.jsx)($e.a,{className:e.icon})]}),y&&y.name]}),Object(r.jsx)(Se.a,{children:A})]})]})}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{onClick:()=>{d(!1)},className:e.cancel,disabled:q,children:"Cancel"}),Object(r.jsx)(ee.a,{disabled:q||!b.trim()||!h.trim()||!y,type:"submit",className:e.save,children:q?Object(r.jsx)(Ie.a,{size:24,className:e.save}):"Add Track"})]})]})})]})},Ge=Object(k.a)((e=>({root:{width:"100vw",textAlign:"center"},progress:{margin:2*e.spacing.unit,color:e.palette.secondary.dark}}))),He=()=>{var e=Ge();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(Ie.a,{className:e.progress})})},Ve=Object(k.a)((e=>({container:{margin:"0 auto",maxWidth:960,padding:2*e.spacing.unit}}))),Ke=()=>{var e=Ve(),t=Object(c.useState)([]),a=Object(f.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)([]),o=Object(f.a)(s,2),l=o[0],d=o[1],u=Object(v.useQuery)(se),j=u.loading,b=u.error,p=u.data;return Object(c.useEffect)((()=>{n.length>0?d(n):p&&d(p.tracks)}),[n,p]),j?Object(r.jsx)(He,{}):b?Object(r.jsx)(ae,{error:b}):Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(R,{setSearchResults:i}),Object(r.jsx)(Je,{}),Object(r.jsx)(Qe,{tracks:l})]})},Xe=a(275),Ye=a(276),Ze=a(290),et=a(277),tt=a(155),at=a.n(tt);function nt(){var e=Object(y.a)(["\n  query($id: Int!) {\n    user(id: $id) {\n      id\n      username\n      dateJoined\n      trackSet {\n        id\n        title\n        url\n        likes {\n          id\n        }\n      }\n      likeSet {\n        id\n        track {\n          id\n          title\n          url\n          likes {\n            id\n          }\n          postedBy {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n"]);return nt=function(){return e},e}var rt=Object(v.gql)(nt()),ct=Object(k.a)((e=>({paper:{width:"auto",display:"block",padding:2*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,[e.breakpoints.up("md")]:{width:650,marginLeft:"auto",marginRight:"auto"}},card:{display:"flex",justifyContent:"center"},title:{display:"flex",alignItems:"center",marginBottom:2*e.spacing.unit},audioIcon:{color:"purple",fontSize:30,marginRight:e.spacing.unit},thumbIcon:{color:"green",marginRight:e.spacing.unit},divider:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}))),it=({match:e})=>{var t=ct(),a=Object(v.useQuery)(rt,{variables:{id:e.params.id}}),n=a.loading,c=a.error,i=a.data;return n?Object(r.jsx)(He,{}):c?Object(r.jsx)(ae,{error:c}):Object(r.jsxs)("div",{children:[Object(r.jsx)(Xe.a,{className:t.card,children:Object(r.jsx)(Ye.a,{avatar:Object(r.jsx)(Ze.a,{children:i.user.username[0]}),title:i.user.username,subheader:"Joined ".concat(new Date(i.user.dateJoined).toISOString().substring(0,10))})}),Object(r.jsxs)(I.a,{elevation:1,className:t.paper,children:[Object(r.jsxs)(E.a,{variant:"subtitle1",className:t.title,children:[Object(r.jsx)(at.a,{className:t.audioIcon}),"Created Tracks"]}),i.user.trackSet.map((e=>Object(r.jsxs)("div",{children:[Object(r.jsxs)(E.a,{children:[e.title," - ",e.likes.length," Likes"]}),Object(r.jsx)(K,{url:e.url}),Object(r.jsx)(et.a,{className:t.divider})]},e.id)))]}),Object(r.jsxs)(I.a,{elevation:1,className:t.paper,children:[Object(r.jsxs)(E.a,{variant:"subtitle1",className:t.title,children:[Object(r.jsx)(Y.a,{className:t.thumbIcon}),"Liked Tracks"]}),i.user.likeSet.map((({track:e})=>Object(r.jsxs)("div",{children:[Object(r.jsxs)(E.a,{children:[e.title," - ",e.likes.length," Likes -"," ",e.postedBy.username]}),Object(r.jsx)(K,{url:e.url}),Object(r.jsx)(et.a,{className:t.divider})]},e.id)))]})]})},st=a(278),ot=a(279),lt=a(157),dt=a.n(lt),ut=a(158),jt=a.n(ut),bt=a(156),pt=a.n(bt),mt=Object(k.a)((e=>({root:{cursor:"pointer",display:"flex"},buttonIcon:{marginLeft:"5px"}}))),Ot=()=>{var e=mt(),t=function(){var e=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("authToken"),t.writeQuery({query:ie,data:{isLoggedIn:!1}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(v.ApolloConsumer,{children:a=>Object(r.jsxs)(ee.a,{onClick:()=>{t(a)},children:[Object(r.jsx)(E.a,{variant:"body1",className:e.buttonIcon,color:"secondary",children:"Signout"}),Object(r.jsx)(pt.a,{className:e.buttonIcon,color:"secondary"})]})})},ht=Object(k.a)((e=>({root:{flexGrow:1,margin:0,padding:0},grow:{flexGrow:1,display:"flex",alignItems:"center",textDecoration:"none"},logo:{marginRight:e.spacing.unit,fontSize:45},faceIcon:{marginRight:e.spacing.unit,fontSize:30,color:"white"},username:{color:"white",fontSize:30}}))),gt=({currentUser:e})=>{var t=ht();return Object(r.jsx)(st.a,{position:"static",className:t.root,children:Object(r.jsxs)(ot.a,{children:[Object(r.jsxs)(g.b,{to:"/",className:t.grow,children:[Object(r.jsx)(dt.a,{className:t.logo,color:"secondary"}),Object(r.jsx)(E.a,{variant:"h3",color:"secondary",noWrap:!0,children:"Musicallen"})]}),e&&Object(r.jsxs)(g.b,{to:"/profile/".concat(e.id),className:t.grow,children:[Object(r.jsx)(jt.a,{className:t.faceIcon}),Object(r.jsx)(E.a,{variant:"h3",className:t.username,noWrap:!0,children:e.username})]}),Object(r.jsx)(Ot,{})]})})},xt=i.a.createContext(),vt=h((()=>{var e=Object(v.useQuery)(oe,{fetchPolicy:"cache-and-network"}),t=e.loading,a=e.error,n=e.data;return t?Object(r.jsx)(He,{}):a?Object(r.jsx)(ae,{error:a}):Object(r.jsx)(g.a,{children:Object(r.jsxs)(xt.Provider,{value:n.me,children:[Object(r.jsx)(gt,{currentUser:n.me}),Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{path:"/",exact:!0,component:Ke}),Object(r.jsx)(x.a,{path:"/profile/:id",component:it})]})]})})})),ft=a(289),kt=a(258),yt=a(280);function wt(){var e=Object(y.a)(["\n  mutation($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return wt=function(){return e},e}var St=Object(v.gql)(wt()),Nt=Object(k.a)((e=>({root:{width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,[e.breakpoints.up("md")]:{width:400,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:2*e.spacing.unit},title:{marginTop:2*e.spacing.unit,color:e.palette.secondary.main},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}}))),It=({setIsLogin:e})=>{var t=Object(c.useState)(""),a=Object(f.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(""),o=Object(f.a)(s,2),l=o[0],d=o[1],u=Nt(),j=Object(v.useMutation)(St),b=Object(f.a)(j,2),p=b[0],m=b[1],O=m.loading,h=m.error,g=m.client,x=function(){var e=Object(N.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p({variables:{password:l,username:n}});case 4:a=e.sent,localStorage.setItem("authToken",a.data.tokenAuth.token),g.writeQuery({query:ie,data:{isLoggedIn:!0}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:u.root,children:Object(r.jsxs)(I.a,{className:u.paper,children:[Object(r.jsx)(Ze.a,{className:u.avatar,children:Object(r.jsx)(yt.a,{})}),Object(r.jsx)(E.a,{variant:"h4",children:"Login as Existing User"}),Object(r.jsxs)("form",{className:u.form,onSubmit:e=>{x(e)},children:[Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(ft.a,{htmlFor:"username",children:"Username"}),Object(r.jsx)(kt.a,{id:"username",onChange:e=>{i(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(ft.a,{htmlFor:"password",children:"Password"}),Object(r.jsx)(kt.a,{id:"password",type:"password",onChange:e=>{d(e.target.value)}})]}),Object(r.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",disabled:O||!n.trim()||!l.trim(),className:u.submit,children:O?"Logging in...":"Login"}),Object(r.jsx)(ee.a,{onClick:()=>{e(!1)},color:"primary",variant:"outlined",fullWidth:!0,children:"New user? Register here."}),O&&Object(r.jsx)("p",{children:"Loading..."}),h&&Object(r.jsx)(ae,{error:h.toString()})]})]})})},Ct=a(281),Tt=a(282),qt=a(283);function $t(){var e=Object(y.a)(["\n  mutation($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password) {\n      user {\n        username\n        email\n      }\n    }\n  }\n"]);return $t=function(){return e},e}var Lt=i.a.forwardRef(((e,t)=>Object(r.jsx)(Ct.a,Object(n.a)({direction:"up",ref:t},e)))),Wt=Object(v.gql)($t()),Ft=Object(k.a)((e=>({root:{width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,[e.breakpoints.up("md")]:{width:400,marginLeft:"auto",marginRight:"auto"}},paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:2*e.spacing.unit},title:{marginTop:2*e.spacing.unit,color:e.palette.openTitle},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},icon:{padding:"0px 2px 2px 0px",verticalAlign:"middle",color:"green"}}))),At=({setIsLogin:e})=>{var t=Object(c.useState)(""),a=Object(f.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(""),o=Object(f.a)(s,2),l=o[0],d=o[1],u=Object(c.useState)(""),j=Object(f.a)(u,2),b=j[0],p=j[1],m=Object(c.useState)(!1),O=Object(f.a)(m,2),h=O[0],g=O[1],x=Ft(),k=Object(v.useMutation)(Wt),y=Object(f.a)(k,2),w=y[0],C=y[1],T=C.loading,q=C.error,$=function(){var e=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,w({variables:{email:l,password:b,username:n}});case 4:g(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:x.root,children:[Object(r.jsxs)(I.a,{className:x.paper,children:[Object(r.jsx)(Ze.a,{className:x.avatar,children:Object(r.jsx)(Tt.a,{})}),Object(r.jsx)(E.a,{variant:"h4",children:"Register"}),Object(r.jsxs)("form",{className:x.form,onSubmit:e=>{$(e)},children:[Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(ft.a,{htmlFor:"username",children:"Username"}),Object(r.jsx)(kt.a,{id:"username",onChange:e=>{i(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(ft.a,{htmlFor:"email",children:"Email"}),Object(r.jsx)(kt.a,{id:"email",type:"email",onChange:e=>{d(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(ft.a,{htmlFor:"password",children:"Password"}),Object(r.jsx)(kt.a,{id:"password",type:"password",onChange:e=>{p(e.target.value)}})]}),Object(r.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",disabled:T||!n.trim()||!l.trim()||!b.trim(),className:x.submit,children:T?"Registering...":"Register"}),Object(r.jsx)(ee.a,{onClick:()=>{e(!0)},color:"primary",variant:"outlined",fullWidth:!0,children:"Previous user? Login in here."}),T&&Object(r.jsx)("p",{children:"Loading..."}),q&&Object(r.jsx)(ae,{error:q.toString()})]})]}),Object(r.jsxs)(ve.a,{disableBackdropClick:!0,open:h,TransitionComponent:Lt,children:[Object(r.jsxs)(fe.a,{children:[Object(r.jsx)(qt.a,{className:x.icon}),"New Account"]}),Object(r.jsxs)(ke.a,{children:[Object(r.jsxs)(ye.a,{children:["User ",n," successfully created!"]}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{color:"primary",variant:"contained",onClick:()=>{e(!0)},children:"Login"}),q&&Object(r.jsx)("div",{children:"Error"})]})]})]})]})},Bt=h((()=>{var e=Object(c.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1];return a?Object(r.jsx)(It,{setIsLogin:n}):Object(r.jsx)(At,{setIsLogin:n})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Rt=a(159),Dt=new v.InMemoryCache,zt=Object(v.createHttpLink)({uri:"http://157.230.238.148:8000/graphql/"}),Qt=Object(Rt.a)(((e,{headers:t})=>{var a=localStorage.getItem("authToken");return{headers:Object(n.a)(Object(n.a)({},t),{},{authorization:a?"JWT ".concat(a):""})}})),Ut=new v.ApolloClient({link:Qt.concat(zt),cache:Dt});Dt.writeQuery({query:ie,data:{isLoggedIn:!!localStorage.getItem("authToken")}});var Pt=e=>Object(v.useQuery)(ie).data.isLoggedIn?Object(r.jsx)(vt,{}):e.children;o.a.render(Object(r.jsx)(v.ApolloProvider,{client:Ut,children:Object(r.jsx)(Pt,{children:Object(r.jsx)(Bt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[220,1,2]]]);
//# sourceMappingURL=main.5a3748de.chunk.js.map