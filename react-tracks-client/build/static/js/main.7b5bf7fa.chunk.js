(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{199:function(e,t,n){"use strict";n.r(t);var a=n(62),r=n(2),c=n(0),i=n.n(c),s=n(18),o=n.n(s),l=n(152),u=n(234),j=n(104),d=n.n(j),b=n(105),O=n.n(b),p=n(235),m=Object(l.a)({palette:{primary:{light:d.a[500],main:d.a[700],dark:d.a[900]},secondary:{light:O.a[200],main:O.a[500],dark:O.a[700]}},typography:{useNextVariants:!0}}),g=function(e){return function(t){return Object(r.jsxs)(u.a,{theme:m,children:[Object(r.jsx)(p.a,{}),Object(r.jsx)(e,Object(a.a)({},t))]})}},h=n(48),x=n(21),f=n(11),v=n(10),k=n(243),y=n(22),w=n(31),S=n.n(w),N=n(50),I=n(155),C=n(201),T=n(265),q=n(96),$=n.n(q),L=n(141),W=n.n(L);function F(){var e=Object(y.a)(["\n  query($search: String) {\n    tracks(search: $search) {\n      id\n      title\n      description\n      url\n      likes {\n        id\n      }\n      postedBy {\n        id\n        username\n      }\n    }\n  }\n"]);return F=function(){return e},e}var A=Object(f.gql)(F()),B=Object(k.a)((function(e){return{root:{padding:"2px 4px",margin:e.spacing.unit,display:"flex",alignItems:"center"}}})),R=function(e){var t=e.setSearchResults,n=B(),a=Object(c.useRef)(null),i=Object(c.useState)(""),s=Object(v.a)(i,2),o=s[0],l=s[1],u=function(){var e=Object(N.a)(S.a.mark((function e(n,a){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,a.query({query:A,variables:{search:o}});case 3:r=e.sent,t(r.data.tracks);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){t([]),l(""),a.current.focus()};return Object(r.jsx)(f.ApolloConsumer,{children:function(e){return Object(r.jsx)("form",{onSubmit:function(t){return u(t,e)},children:Object(r.jsxs)(I.a,{className:n.root,elevation:1,children:[Object(r.jsx)(C.a,{onClick:j,children:Object(r.jsx)($.a,{})}),Object(r.jsx)(T.a,{fullWidth:!0,placeholder:"Search All Tracks",InputProps:{disableUnderline:!0},onChange:function(e){return l(e.target.value)},value:o,inputRef:a}),Object(r.jsx)(C.a,{type:"submit",children:Object(r.jsx)(W.a,{})})]})})}})},D=n(241),z=n(269),U=n(250),Q=n(251),P=n(252),M=n(253),J=n(52),E=n(254),G=n(145),H=n.n(G),V=n(142),K=n.n(V),X=function(e){var t=e.url;return Object(r.jsx)("div",{children:Object(r.jsx)(K.a,{url:t,height:"30px",width:"500px",controls:!0})})},Y=n(101),Z=n.n(Y),_=n(267),ee=n(244),te=Object(k.a)((function(e){return{snackbar:{margin:e.spacing.unit}}})),ne=function(e){var t=e.error,n=Object(c.useState)(!0),a=Object(v.a)(n,2),i=a[0],s=a[1],o=te();return Object(r.jsx)(_.a,{open:i,className:o.snackbar,action:Object(r.jsx)(ee.a,{onClick:function(){s(!1)},color:"secondary",size:"small",children:"Close"}),message:t})};function ae(){var e=Object(y.a)(["\n  {\n    me {\n      id\n      username\n      email\n      likeSet {\n        track {\n          id\n        }\n      }\n    }\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(y.a)(["\n  query getTracksQuery {\n    tracks {\n      id\n      title\n      description\n      url\n      likes {\n        id\n      }\n      postedBy {\n        id\n        username\n      }\n    }\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(y.a)(["\n  query IsUserLoggedIn {\n    isLoggedIn @client\n  }\n"]);return ce=function(){return e},e}var ie=Object(f.gql)(ce()),se=Object(f.gql)(re()),oe=Object(f.gql)(ae());function le(){var e=Object(y.a)(["\n  mutation($trackId: Int!) {\n    createLike(trackId: $trackId) {\n      track {\n        id\n        likes {\n          id\n        }\n      }\n    }\n  }\n"]);return le=function(){return e},e}var ue=Object(f.gql)(le()),je=Object(k.a)((function(e){return{iconButton:{color:"deeppink"},icon:{marginLeft:e.spacing.unit/2}}})),de=function(e){var t=e.trackId,n=e.likeCount,a=je(),i=Object(c.useContext)(gt),s=Object(f.useMutation)(ue,{refetchQueries:[{query:oe}]}),o=Object(v.a)(s,2),l=o[0],u=o[1].error;if(u)return Object(r.jsx)(ne,{error:u.toString()});return Object(r.jsxs)(C.a,{onClick:function(e){e.stopPropagation(),l({variables:{trackId:t}})},className:a.iconButton,disabled:i.likeSet.findIndex((function(e){return e.track.id===t}))>-1,children:[n,Object(r.jsx)(Z.a,{className:a.icon})]})},be=n(49),Oe=n(245),pe=n(143),me=n.n(pe);function ge(){var e=Object(y.a)(["\n  mutation($trackId: Int!) {\n    deleteTrack(trackId: $trackId) {\n      trackId\n    }\n  }\n"]);return ge=function(){return e},e}var he=Object(f.gql)(ge()),xe=function(e){var t=e.track,n=Object(c.useContext)(gt),a=Object(c.useState)(!1),i=Object(v.a)(a,2),s=i[0],o=i[1],l=Object(f.useMutation)(he,{update:function(e,t){b(e,t)},onCompleted:function(){O()}}),u=Object(v.a)(l,2),j=u[0],d=u[1].error,b=function(e,t){var n=t.data.deleteTrack,a=e.readQuery({query:se}),r=a.tracks.findIndex((function(e){return Number(e.id)===n.trackId})),c=[].concat(Object(be.a)(a.tracks.slice(0,r)),Object(be.a)(a.tracks.slice(r+1)));e.writeQuery({query:se,data:{tracks:c}})},O=function(){o(!1)},p=n.id===t.postedBy.id;return d?Object(r.jsx)(ne,{error:d.toString()}):p&&Object(r.jsx)(C.a,{onClick:function(){o(!0),j({variables:{trackId:t.id}})},children:s?Object(r.jsx)(Oe.a,{size:24}):Object(r.jsx)(me.a,{})})},fe=n(268),ve=n(246),ke=n(247),ye=n(248),we=n(239),Se=n(242),Ne=n(249),Ie=n(144),Ce=n.n(Ie),Te=n(102),qe=n.n(Te);function $e(){var e=Object(y.a)(["\n  mutation(\n    $trackId: Int!\n    $title: String!\n    $description: String!\n    $file: Upload!\n  ) {\n    updateTrack(\n      trackId: $trackId\n      title: $title\n      description: $description\n      file: $file\n    ) {\n      track {\n        id\n        title\n        description\n        url\n        likes {\n          id\n        }\n        postedBy {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return $e=function(){return e},e}var Le=Object(f.gql)($e()),We=Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},dialog:{margin:"0 auto",maxWidth:550},textField:{margin:e.spacing.unit},cancel:{color:"red"},save:{color:"green"},button:{margin:2*e.spacing.unit},icon:{marginLeft:e.spacing.unit},input:{display:"none"}}})),Fe=function(e){var t=e.track,n=We(),a=Object(c.useContext)(gt),i=Object(f.useMutation)(Le,{onCompleted:function(){Q()}}),s=Object(v.a)(i,2),o=s[0],l=s[1].error,u=Object(c.useState)(!1),j=Object(v.a)(u,2),d=j[0],b=j[1],O=Object(c.useState)(t.title),p=Object(v.a)(O,2),m=p[0],g=p[1],h=Object(c.useState)(t.description),x=Object(v.a)(h,2),k=x[0],y=x[1],w=Object(c.useState)(""),I=Object(v.a)(w,2),q=I[0],$=I[1],L=Object(c.useState)(!1),W=Object(v.a)(L,2),F=W[0],A=W[1],B=Object(c.useState)(""),R=Object(v.a)(B,2),D=R[0],z=R[1],U=a.id===t.postedBy.id,Q=function(){b(!1),A(!1),g(""),y(""),$("")},P=function(){var e=Object(N.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),A(!0),o({variables:{title:m,description:k,file:q,trackId:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?Object(r.jsx)(ne,{error:l.toString()}):U&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{onClick:function(){b(!0)},children:Object(r.jsx)(Ce.a,{})}),Object(r.jsx)(fe.a,{open:d,className:n.dialog,children:Object(r.jsxs)("form",{onSubmit:function(e){P(e)},children:[Object(r.jsx)(ve.a,{children:"Update Track"}),Object(r.jsx)(ke.a,{children:Object(r.jsxs)(ye.a,{component:"span",children:["Update Title, Description or Audio File",Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{label:"Title",placeholder:"Add Title",className:n.textField,onChange:function(e){g(e.target.value)},value:m})}),Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{multiline:!0,row:"2",label:"Description",placeholder:"Add Description",className:n.textField,onChange:function(e){y(e.target.value)},value:k})}),Object(r.jsxs)(we.a,{fullWidth:!0,error:""!==D,children:[Object(r.jsx)("input",{id:"audio",required:!0,type:"file",className:n.input,accept:"audio/mp3,audio/wav",onChange:function(e){var t=e.target.files[0];t&&t.size>1e7?z("".concat(t.name,": File size too large, 10mb max.")):($(t),z(""))}}),Object(r.jsxs)("label",{htmlFor:"audio",children:[Object(r.jsxs)(ee.a,{variant:"outlined",color:q?"secondary":"inherit",component:"span",className:n.button,children:["Audio File",Object(r.jsx)(qe.a,{className:n.icon})]}),q&&q.name]}),Object(r.jsx)(Se.a,{children:D})]})]})}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{onClick:function(){b(!1)},className:n.cancel,disabled:F,children:"Cancel"}),Object(r.jsx)(ee.a,{disabled:F||!m.trim()||!k.trim()||!q,type:"submit",className:n.save,children:F?Object(r.jsx)(Oe.a,{size:24,className:n.save}):"Update Track"})]})]})})]})},Ae=Object(k.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},details:{alignItems:"center"},link:{color:"#424242",textDecoration:"none","&:hover":{color:"black"}}}})),Be=function(e){var t=e.tracks,n=Ae();return Object(r.jsx)(D.a,{children:t.map((function(e){return Object(r.jsxs)(z.a,{children:[Object(r.jsx)(U.a,{expandIcon:Object(r.jsx)(H.a,{}),children:Object(r.jsxs)(Q.a,{className:n.root,children:[Object(r.jsx)(de,{trackId:e.id,likeCount:e.likes.length}),Object(r.jsx)(P.a,{primaryTypographyProps:{variant:"h4",color:"primary"},primary:e.title,secondary:Object(r.jsx)(h.b,{to:"/profile/".concat(e.postedBy.id),className:n.link,children:e.postedBy.username})}),Object(r.jsx)(X,{url:e.url})]})}),Object(r.jsx)(M.a,{className:n.details,children:Object(r.jsx)(J.a,{variant:"body1",children:e.description})}),Object(r.jsxs)(E.a,{children:[Object(r.jsx)(Fe,{track:e}),Object(r.jsx)(xe,{track:e})]})]},e.id)}))})},Re=n(146),De=n.n(Re);function ze(){var e=Object(y.a)(["\n  mutation($title: String!, $description: String!, $file: Upload!) {\n    createTrack(title: $title, description: $description, file: $file) {\n      track {\n        id\n        title\n        description\n        url\n        likes {\n          id\n        }\n        postedBy {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return ze=function(){return e},e}var Ue=Object(f.gql)(ze()),Qe=Object(k.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},dialog:{margin:"0 auto",maxWidth:550},textField:{margin:e.spacing.unit},cancel:{color:"red"},save:{color:"green"},button:{margin:2*e.spacing.unit},icon:{marginLeft:e.spacing.unit},input:{display:"none"},fab:{position:"fixed",bottom:2*e.spacing.unit,right:2*e.spacing.unit,zIndex:"200"}}})),Pe=function(){var e=Qe(),t=Object(f.useMutation)(Ue,{update:function(e,t){A(e,t)},onCompleted:function(){B()}}),n=Object(v.a)(t,2),a=n[0],i=n[1].error,s=Object(c.useState)(!1),o=Object(v.a)(s,2),l=o[0],u=o[1],j=Object(c.useState)(""),d=Object(v.a)(j,2),b=d[0],O=d[1],p=Object(c.useState)(""),m=Object(v.a)(p,2),g=m[0],h=m[1],x=Object(c.useState)(""),k=Object(v.a)(x,2),y=k[0],w=k[1],S=Object(c.useState)(!1),N=Object(v.a)(S,2),I=N[0],C=N[1],q=Object(c.useState)(""),L=Object(v.a)(q,2),W=L[0],F=L[1],A=function(e,t){var n=t.data.createTrack,a=e.readQuery({query:se}).tracks.concat(n.track);e.writeQuery({query:se,data:{tracks:a}})},B=function(){u(!1),C(!1),O(""),h(""),w("")};return i?Object(r.jsx)(ne,{error:i.toString()}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ee.a,{onClick:function(){u(!0)},variant:"outlined",className:e.fab,color:"secondary",children:l?Object(r.jsx)($.a,{}):Object(r.jsx)(De.a,{})}),Object(r.jsx)(fe.a,{open:l,className:e.dialog,children:Object(r.jsxs)("form",{onSubmit:function(e){!function(e){e.preventDefault(),C(!0),a({variables:{title:b,description:g,file:y}})}(e)},children:[Object(r.jsx)(ve.a,{children:"Create Track"}),Object(r.jsx)(ke.a,{children:Object(r.jsxs)(ye.a,{component:"span",children:["Add a Title, Description and Audio File",Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{label:"Title",placeholder:"Add Title",className:e.textField,onChange:function(e){O(e.target.value)},value:b})}),Object(r.jsx)(we.a,{fullWidth:!0,children:Object(r.jsx)(T.a,{multiline:!0,row:"2",label:"Description",placeholder:"Add Description",className:e.textField,onChange:function(e){h(e.target.value)},value:g})}),Object(r.jsxs)(we.a,{fullWidth:!0,error:""!==W,children:[Object(r.jsx)("input",{id:"audio",required:!0,type:"file",className:e.input,accept:"audio/mp3,audio/wav",onChange:function(e){var t=e.target.files[0];t&&t.size>1e7?F("".concat(t.name,": File size too large, 10mb max.")):(w(t),F(""))}}),Object(r.jsxs)("label",{htmlFor:"audio",children:[Object(r.jsxs)(ee.a,{variant:"outlined",color:y?"secondary":"inherit",component:"span",className:e.button,children:["Audio File",Object(r.jsx)(qe.a,{className:e.icon})]}),y&&y.name]}),Object(r.jsx)(Se.a,{children:W})]})]})}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{onClick:function(){u(!1)},className:e.cancel,disabled:I,children:"Cancel"}),Object(r.jsx)(ee.a,{disabled:I||!b.trim()||!g.trim()||!y,type:"submit",className:e.save,children:I?Object(r.jsx)(Oe.a,{size:24,className:e.save}):"Add Track"})]})]})})]})},Me=Object(k.a)((function(e){return{root:{width:"100vw",textAlign:"center"},progress:{margin:2*e.spacing.unit,color:e.palette.secondary.dark}}})),Je=function(){var e=Me();return Object(r.jsx)("div",{className:e.root,children:Object(r.jsx)(Oe.a,{className:e.progress})})},Ee=Object(k.a)((function(e){return{container:{margin:"0 auto",maxWidth:960,padding:2*e.spacing.unit}}})),Ge=function(){var e=Ee(),t=Object(c.useState)([]),n=Object(v.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)([]),o=Object(v.a)(s,2),l=o[0],u=o[1],j=Object(f.useQuery)(se),d=j.loading,b=j.error,O=j.data;return Object(c.useEffect)((function(){a.length>0?u(a):O&&u(O.tracks)}),[a,O]),d?Object(r.jsx)(Je,{}):b?Object(r.jsx)(ne,{error:b.toString()}):Object(r.jsxs)("div",{className:e.container,children:[Object(r.jsx)(R,{setSearchResults:i}),Object(r.jsx)(Pe,{}),Object(r.jsx)(Be,{tracks:l})]})},He=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"404 - Not Found!"}),Object(r.jsx)(h.b,{to:"/",children:"Go Home"})]})},Ve=n(15),Ke=n(255),Xe=n(256),Ye=n(271),Ze=n(257),_e=n(147),et=n.n(_e);function tt(){var e=Object(y.a)(["\n  query ($id: Int!) {\n    user(id: $id) {\n      id\n      username\n      dateJoined\n      trackSet {\n        id\n        title\n        url\n        likes {\n          id\n        }\n      }\n      likeSet {\n        id\n        track {\n          id\n          title\n          url\n          likes {\n            id\n          }\n          postedBy {\n            id\n            username\n          }\n        }\n      }\n    }\n  }\n"]);return tt=function(){return e},e}var nt=Object(f.gql)(tt()),at=Object(k.a)((function(e){return{paper:Object(Ve.a)({width:"auto",display:"block",padding:2*e.spacing.unit,marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit,marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},e.breakpoints.up("md"),{width:650,marginLeft:"auto",marginRight:"auto"}),card:{display:"flex",justifyContent:"center"},title:{display:"flex",alignItems:"center",marginBottom:2*e.spacing.unit},audioIcon:{color:"purple",fontSize:30,marginRight:e.spacing.unit},thumbIcon:{color:"green",marginRight:e.spacing.unit},divider:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})),rt=function(e){var t=e.match,n=at(),a=Object(x.f)(),c=Object(f.useQuery)(nt,{variables:{id:t.params.id}}),i=c.loading,s=c.error,o=c.data;return i?Object(r.jsx)(Je,{}):s?(a.push("/"),Object(r.jsx)(ne,{error:s.toString()})):Object(r.jsxs)("div",{children:[Object(r.jsx)(Ke.a,{className:n.card,children:Object(r.jsx)(Xe.a,{avatar:Object(r.jsx)(Ye.a,{children:o.user.username[0]}),title:o.user.username,subheader:"Joined ".concat(new Date(o.user.dateJoined).toISOString().substring(0,10))})}),Object(r.jsxs)(I.a,{elevation:1,className:n.paper,children:[Object(r.jsxs)(J.a,{variant:"subtitle1",className:n.title,children:[Object(r.jsx)(et.a,{className:n.audioIcon}),"Created Tracks"]}),o.user.trackSet.map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(J.a,{children:[e.title," - ",e.likes.length," Likes"]}),Object(r.jsx)(X,{url:e.url}),Object(r.jsx)(Ze.a,{className:n.divider})]},e.id)}))]}),Object(r.jsxs)(I.a,{elevation:1,className:n.paper,children:[Object(r.jsxs)(J.a,{variant:"subtitle1",className:n.title,children:[Object(r.jsx)(Z.a,{className:n.thumbIcon}),"Liked Tracks"]}),o.user.likeSet.map((function(e){var t=e.track;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(J.a,{children:[t.title," - ",t.likes.length," Likes -"," ",t.postedBy.username]}),Object(r.jsx)(X,{url:t.url}),Object(r.jsx)(Ze.a,{className:n.divider})]},t.id)}))]})]})},ct=n(258),it=n(259),st=n(149),ot=n.n(st),lt=n(150),ut=n.n(lt),jt=n(148),dt=n.n(jt),bt=Object(k.a)((function(e){return{root:{cursor:"pointer",display:"flex"},buttonIcon:{marginLeft:"5px"}}})),Ot=function(){var e=bt(),t=Object(x.f)(),n=function(){var e=Object(N.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.removeItem("authToken"),n.writeQuery({query:ie,data:{isLoggedIn:!1}}),t.push("/");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(f.ApolloConsumer,{children:function(t){return Object(r.jsxs)(ee.a,{onClick:function(){n(t)},children:[Object(r.jsx)(J.a,{variant:"body1",className:e.buttonIcon,color:"secondary",children:"Signout"}),Object(r.jsx)(dt.a,{className:e.buttonIcon,color:"secondary"})]})}})},pt=Object(k.a)((function(e){return{root:{flexGrow:1,margin:0,padding:0},grow:{flexGrow:1,display:"flex",alignItems:"center",textDecoration:"none"},logo:{marginRight:e.spacing.unit,fontSize:45},faceIcon:{marginRight:e.spacing.unit,fontSize:30,color:"white"},username:{color:"white",fontSize:30}}})),mt=function(e){var t=e.currentUser,n=pt();return Object(r.jsx)(ct.a,{position:"static",className:n.root,children:Object(r.jsxs)(it.a,{children:[Object(r.jsxs)(h.b,{to:"/",className:n.grow,children:[Object(r.jsx)(ot.a,{className:n.logo,color:"secondary"}),Object(r.jsx)(J.a,{variant:"h3",color:"secondary",noWrap:!0,children:"Musicallen"})]}),t&&Object(r.jsxs)(h.b,{to:"/profile/".concat(t.id),className:n.grow,children:[Object(r.jsx)(ut.a,{className:n.faceIcon}),Object(r.jsx)(J.a,{variant:"h3",className:n.username,noWrap:!0,children:t.username})]}),Object(r.jsx)(Ot,{})]})})},gt=i.a.createContext(),ht=g((function(){var e=Object(f.useQuery)(oe,{fetchPolicy:"cache-and-network"}),t=e.loading,n=e.error,a=e.data;return t?Object(r.jsx)(Je,{}):n?Object(r.jsx)(ne,{error:n.toString()}):Object(r.jsx)(h.a,{children:Object(r.jsxs)(gt.Provider,{value:a.me,children:[Object(r.jsx)(mt,{currentUser:a.me}),Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{path:"/",exact:!0,component:Ge}),Object(r.jsx)(x.a,{path:"/profile/:id",component:rt}),Object(r.jsx)(x.a,{component:He})]})]})})})),xt=n(270),ft=n(238),vt=n(260);function kt(){var e=Object(y.a)(["\n  mutation($username: String!, $password: String!) {\n    tokenAuth(username: $username, password: $password) {\n      token\n    }\n  }\n"]);return kt=function(){return e},e}var yt=Object(f.gql)(kt()),wt=Object(k.a)((function(e){return{root:Object(Ve.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up("md"),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:2*e.spacing.unit},title:{marginTop:2*e.spacing.unit,color:e.palette.secondary.main},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.primary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit}}})),St=function(e){var t=e.setIsLogin,n=Object(c.useState)(""),a=Object(v.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(v.a)(o,2),u=l[0],j=l[1],d=wt(),b=Object(f.useMutation)(yt),O=Object(v.a)(b,2),p=O[0],m=O[1],g=m.loading,h=m.error,x=m.client,k=function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p({variables:{password:u,username:i}});case 4:n=e.sent,localStorage.setItem("authToken",n.data.tokenAuth.token),x.writeQuery({query:ie,data:{isLoggedIn:!0}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:d.root,children:Object(r.jsxs)(I.a,{className:d.paper,children:[Object(r.jsx)(Ye.a,{className:d.avatar,children:Object(r.jsx)(vt.a,{})}),Object(r.jsx)(J.a,{variant:"h4",children:"Login as Existing User"}),Object(r.jsxs)("form",{className:d.form,onSubmit:function(e){k(e)},children:[Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(xt.a,{htmlFor:"username",children:"Username"}),Object(r.jsx)(ft.a,{id:"username",onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(xt.a,{htmlFor:"password",children:"Password"}),Object(r.jsx)(ft.a,{id:"password",type:"password",onChange:function(e){j(e.target.value)}})]}),Object(r.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",disabled:g||!i.trim()||!u.trim(),className:d.submit,children:g?"Logging in...":"Login"}),Object(r.jsx)(ee.a,{onClick:function(){t(!1)},color:"primary",variant:"outlined",fullWidth:!0,children:"New user? Register here."}),g&&Object(r.jsx)("p",{children:"Loading..."}),h&&Object(r.jsx)(ne,{error:h.toString()})]})]})})},Nt=n(261),It=n(262),Ct=n(263);function Tt(){var e=Object(y.a)(["\n  mutation($username: String!, $email: String!, $password: String!) {\n    createUser(username: $username, email: $email, password: $password) {\n      user {\n        username\n        email\n      }\n    }\n  }\n"]);return Tt=function(){return e},e}var qt=i.a.forwardRef((function(e,t){return Object(r.jsx)(Nt.a,Object(a.a)({direction:"up",ref:t},e))})),$t=Object(f.gql)(Tt()),Lt=Object(k.a)((function(e){return{root:Object(Ve.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up("md"),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:2*e.spacing.unit},title:{marginTop:2*e.spacing.unit,color:e.palette.openTitle},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit},icon:{padding:"0px 2px 2px 0px",verticalAlign:"middle",color:"green"}}})),Wt=function(e){var t=e.setIsLogin,n=Object(c.useState)(""),a=Object(v.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(v.a)(o,2),u=l[0],j=l[1],d=Object(c.useState)(""),b=Object(v.a)(d,2),O=b[0],p=b[1],m=Object(c.useState)(!1),g=Object(v.a)(m,2),h=g[0],x=g[1],k=Lt(),y=Object(f.useMutation)($t),w=Object(v.a)(y,2),C=w[0],T=w[1],q=T.loading,$=T.error,L=function(){var e=Object(N.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C({variables:{email:u,password:O,username:i}});case 4:x(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:k.root,children:[Object(r.jsxs)(I.a,{className:k.paper,children:[Object(r.jsx)(Ye.a,{className:k.avatar,children:Object(r.jsx)(It.a,{})}),Object(r.jsx)(J.a,{variant:"h4",children:"Register"}),Object(r.jsxs)("form",{className:k.form,onSubmit:function(e){L(e)},children:[Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(xt.a,{htmlFor:"username",children:"Username"}),Object(r.jsx)(ft.a,{id:"username",onChange:function(e){s(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(xt.a,{htmlFor:"email",children:"Email"}),Object(r.jsx)(ft.a,{id:"email",type:"email",onChange:function(e){j(e.target.value)}})]}),Object(r.jsxs)(we.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(r.jsx)(xt.a,{htmlFor:"password",children:"Password"}),Object(r.jsx)(ft.a,{id:"password",type:"password",onChange:function(e){p(e.target.value)}})]}),Object(r.jsx)(ee.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",disabled:q||!i.trim()||!u.trim()||!O.trim(),className:k.submit,children:q?"Registering...":"Register"}),Object(r.jsx)(ee.a,{onClick:function(){t(!0)},color:"primary",variant:"outlined",fullWidth:!0,children:"Previous user? Login in here."}),q&&Object(r.jsx)("p",{children:"Loading..."}),$&&Object(r.jsx)(ne,{error:$.toString()})]})]}),Object(r.jsxs)(fe.a,{disableBackdropClick:!0,open:h,TransitionComponent:qt,children:[Object(r.jsxs)(ve.a,{children:[Object(r.jsx)(Ct.a,{className:k.icon}),"New Account"]}),Object(r.jsxs)(ke.a,{children:[Object(r.jsxs)(ye.a,{children:["User ",i," successfully created!"]}),Object(r.jsxs)(Ne.a,{children:[Object(r.jsx)(ee.a,{color:"primary",variant:"contained",onClick:function(){t(!0)},children:"Login"}),$&&Object(r.jsx)("div",{children:"Error"})]})]})]})]})},Ft=g((function(){var e=Object(c.useState)(!1),t=Object(v.a)(e,2),n=t[0],a=t[1];return n?Object(r.jsx)(St,{setIsLogin:a}):Object(r.jsx)(Wt,{setIsLogin:a})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var At=n(264),Bt=n.n(At),Rt=n(151),Dt=new f.InMemoryCache,zt=Bt()({uri:"https://www.reactsongs.com/graphql/"}),Ut=Object(Rt.a)((function(e,t){var n=t.headers,r=localStorage.getItem("authToken");return{headers:Object(a.a)(Object(a.a)({},n),{},{authorization:r?"JWT ".concat(r):""})}})),Qt=new f.ApolloClient({link:Ut.concat(zt),cache:Dt});Dt.writeQuery({query:ie,data:{isLoggedIn:!!localStorage.getItem("authToken")}});var Pt=function(e){return Object(f.useQuery)(ie).data.isLoggedIn?Object(r.jsx)(ht,{}):e.children};o.a.render(Object(r.jsx)(f.ApolloProvider,{client:Qt,children:Object(r.jsx)(Pt,{children:Object(r.jsx)(Ft,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[199,1,2]]]);
//# sourceMappingURL=main.7b5bf7fa.chunk.js.map