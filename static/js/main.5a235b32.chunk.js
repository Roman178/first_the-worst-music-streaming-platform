(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(28),l=a.n(s),i=(a(97),a(7)),r=a(8),c=a(10),u=a(9),d=a(11),h=a(6),m=a(2),p=a(12),f=a.n(p),g=a(84),b=a.n(g),v=a(86),y=a.n(v),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={opacityHeader:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("header",{className:e.root},o.a.createElement("div",{className:e.root2},o.a.createElement(b.a,{className:e.sHeadersMenuButton,color:"inherit","aria-label":"Menu",onClick:this.props.onOpenMenu},o.a.createElement(y.a,null)),o.a.createElement("h1",{className:e.sHeadersH1}),o.a.createElement(f.a,{className:e.sHeadersLoginButton,color:"inherit"},"Login")))}}]),t}(n.Component),C=Object(h.withStyles)({root:{backgroundColor:"yellow"},root2:{backgroundColor:"rgba( 255,255,255, 0.6)",fontFamily:"monospace",display:"flex",justifyContent:"flex-start",alignItems:"center",height:"70px"},sHeadersMenuButton:{width:"50px",height:"50px",flexBasis:"3%",margin:"0 .5%"},sHeadersH1:{flexBasis:"92%"},sHeadersLoginButton:{width:"60px",height:"12px",flexBasis:"5%",marginRight:"1%"}})(w),O=a(34),j=a.n(O),E=a(87),k=a.n(E),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).onSrollToMusicPage=a.onSrollToMusicPage.bind(Object(m.a)(Object(m.a)(a))),a.onSrollToMyMusicPage=a.onSrollToMyMusicPage.bind(Object(m.a)(Object(m.a)(a))),a.onSrollToContactsPage=a.onSrollToContactsPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"onSrollToMusicPage",value:function(){this.props.onCloseMenu(),window.scrollTo({top:window.innerHeight,behavior:"smooth"})}},{key:"onSrollToMyMusicPage",value:function(){this.props.onCloseMenu(),window.scrollTo({top:2*window.innerHeight,behavior:"smooth"})}},{key:"onSrollToContactsPage",value:function(){this.props.onCloseMenu(),document.documentElement.scrollHeight>3*window.innerHeight?window.scrollTo({top:3*window.innerHeight,behavior:"smooth"}):window.scrollTo({top:2*window.innerHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(k.a,{className:e.root},o.a.createElement(j.a,{className:e.sMenuItems,onClick:this.props.onCloseMenu},"Log in"),o.a.createElement(j.a,{className:e.sMenuItems,onClick:this.onSrollToMusicPage},"Music"),document.documentElement.scrollHeight>3*window.innerHeight&&o.a.createElement(j.a,{className:e.sMenuItems,onClick:this.onSrollToMyMusicPage},"My Music"),o.a.createElement(j.a,{className:e.sMenuItems,onClick:this.onSrollToContactsPage},"Contacts"))}}]),t}(n.Component),S=Object(h.withStyles)({root:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around",paddingTop:"0",paddingBottom:"0"},sMenuItems:{justifyContent:"center",padding:"0",width:"100%",height:"33.3333%"}})(x),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).wrapperRef=o.a.createRef(),a.handleClickOutside=a.handleClickOutside.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"handleClickOutside",value:function(e){this.wrapperRef.current&&!this.wrapperRef.current.contains(e.target)&&this.props.onCloseMenu()}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{ref:this.wrapperRef,className:e.root}," ",this.props.children," ")}}]),t}(n.Component),M=Object(h.withStyles)({root:{position:"absolute",backgroundColor:"aqua",top:"0",bottom:"0",left:"0",right:"0",margin:"auto",width:"350px",height:"420px","@media (max-width: 812px)":{width:"210px",height:"220px"},borderRadius:"8px"}})(N),P=a(88),T={root:{backgroundImage:"url(".concat(a.n(P).a,")"),backgroundSize:"100% 100%",flexBasis:"100%",display:"flex",flexDirection:"column","@media (max-width: 1030px)":{backgroundSize:"150% 135%",backgroundPosition:"center center",flexBasis:"25%"}},buttonArrowContainer:{flexGrow:"1",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",transition:"background-color .2s ease-in-out"},buttonArrowContainerRGBA:{backgroundColor:"rgba( 255,255,255, 0.7)",transition:"background-color .2s ease-in-out"},sButtonIntoMusic:{}},A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={opacityFirstPage:!1,visibleMenu:!1},a.handleManageMenu=a.handleManageMenu.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleManageMenu",value:function(){this.state.opacityFirstPage?document.body.style.overflow="visible":document.body.style.overflow="hidden",this.setState({opacityFirstPage:!this.state.opacityFirstPage,visibleMenu:!this.state.visibleMenu})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement(C,{onOpenMenu:this.handleManageMenu}),this.state.visibleMenu&&o.a.createElement(M,{onCloseMenu:this.handleManageMenu},o.a.createElement(S,{onCloseMenu:this.handleManageMenu})),o.a.createElement("div",{className:this.state.opacityFirstPage?e.buttonArrowContainerRGBA+" "+e.buttonArrowContainer:e.buttonArrowContainer},o.a.createElement(f.a,{variant:"extendedFab",onClick:function(){return window.scrollTo({top:window.innerHeight,behavior:"smooth"})}},"let's lose yourself in the music")))}}]),t}(n.Component),D=Object(h.withStyles)(T)(A),B=a(29),I=a.n(B),H=a(55),R=a.n(H),L=a(30),F=a.n(L),U=a(42),W=a.n(U),z=function(e){function t(e){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this,e))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("div",null,o.a.createElement("span",null,this.props.author," - "),o.a.createElement("span",null," ",this.props.name," ")))}}]),t}(n.Component),G=Object(h.withStyles)({root:{display:"flex",alignItems:"center"}})(z),Y=a(39),J=a.n(Y),_=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={playlistTitle:""},a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.setInputRef=a.setInputRef.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({playlistTitle:t})}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.state.playlistTitle;t&&(this.props.onAdd(t),this.setState({playlistTitle:""}))}},{key:"setInputRef",value:function(e){this.inputRef=e}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("form",{className:e.root},o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"The name of playlist",value:this.state.playlistTitle,onChange:this.handleChange,ref:this.setInputRef}),o.a.createElement(f.a,{onClick:this.handleClick},o.a.createElement(J.a,null))))}}]),t}(n.Component),q=Object(h.withStyles)({root:{display:"flex",alignItems:"center",marginLeft:"5%"}})(_),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={artistName:"",songName:""},a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleChange2=a.handleChange2.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({artistName:t})}},{key:"handleChange2",value:function(e){var t=e.target.value;this.setState({songName:t})}},{key:"handleClick",value:function(e){e.preventDefault();var t=this.state,a=t.artistName,n=t.songName;a&&n&&(this.props.onAdd(this.props.playlistName,a,n),this.setState({artistName:"",songName:""}))}},{key:"render",value:function(){return o.a.createElement("form",null,o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"The name of artist/band",value:this.state.artistName,onChange:this.handleChange}),o.a.createElement("input",{type:"text",placeholder:"The name of song",value:this.state.songName,onChange:this.handleChange2}),o.a.createElement(f.a,{onClick:this.handleClick},o.a.createElement(J.a,null))))}}]),t}(o.a.Component),$=a(41),K=a.n($),V=a(40),X=a.n(V);var Z=Object(h.withStyles)({root:{display:"flex","@media (max-width: 450px)":{flexBasis:"30%",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-end"}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,null,o.a.createElement(X.a,null)),o.a.createElement(f.a,null,o.a.createElement(K.a,null)),o.a.createElement(f.a,{onClick:function(t){t.preventDefault(),e.onDelete(e.id,e.playlistName)}},o.a.createElement(W.a,null)))}),ee=a(89),te=a.n(ee);var ae=Object(h.withStyles)({root:{display:"flex",alignItems:"center","@media (max-width: 450px)":{flexBasis:"30%",flexWrap:"wrap",alignItems:"center",justifyContent:"flex-end"}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,null,o.a.createElement(X.a,null)),o.a.createElement(f.a,null,o.a.createElement(te.a,null)),o.a.createElement(f.a,null,o.a.createElement(K.a,null)))}),ne=a(90),oe=a.n(ne),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={songs:{namesOfUsersPlaylists:[]},isLoading:!0,value:0,value2:NaN},a.handleAdd=a.handleAdd.bind(Object(m.a)(Object(m.a)(a))),a.handleDelete=a.handleDelete.bind(Object(m.a)(Object(m.a)(a))),a.handleSongAdd=a.handleSongAdd.bind(Object(m.a)(Object(m.a)(a))),a.handleSongDelete=a.handleSongDelete.bind(Object(m.a)(Object(m.a)(a))),a.handleChange=a.handleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleChange2=a.handleChange2.bind(Object(m.a)(Object(m.a)(a))),a.handleError=a.handleError.bind(Object(m.a)(Object(m.a)(a))),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;I.a.get("https://warm-bastion-65369.herokuapp.com").then(function(t){e.setState({songs:t.data,isLoading:!1})}).catch(this.handleError)}},{key:"handleAdd",value:function(e){var t=this;this.state.songs.namesOfUsersPlaylists.filter(function(t){return t.toLowerCase()===e.toLowerCase()}).length>0?alert("You already have a playlist with the same name"):this.state.songs.namesOfUsersPlaylists.length<10?I.a.post("https://warm-bastion-65369.herokuapp.com",{genre:e}).then(function(e){return t.setState({songs:e.data})}).catch(this.handleError):alert("You can't add more playlists")}},{key:"handleDelete",value:function(){var e=this,t=this.state.songs.namesOfUsersPlaylists[this.state.value2];I.a.delete("https://warm-bastion-65369.herokuapp.com",{data:{deletedPlaylist:t}}).then(function(t){return e.setState({songs:t.data,value2:NaN})}).catch(this.handleError)}},{key:"handleSongAdd",value:function(e,t,a){var n=this;this.state.songs[e].length<14?I.a.put("https://warm-bastion-65369.herokuapp.com",{nameOfPlaylist:e,artistName:t,songName:a}).then(function(e){return n.setState({songs:e.data})}).then(function(){return console.log(n.state)}).catch(this.handleError):alert("You can't add more songs in this playlist")}},{key:"handleSongDelete",value:function(e,t){var a=this;I.a.delete("https://warm-bastion-65369.herokuapp.com",{data:{id:e,playlistName:t}}).then(function(e){return a.setState({songs:e.data})}).catch(this.handleError)}},{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"handleChange2",value:function(e,t){this.setState({value2:t})}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.songs,s=a.isLoading,l=a.value,i=a.value2;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.sBigContainers},o.a.createElement("div",{className:t.sForm},o.a.createElement("h2",null,"Playlists of the week"),o.a.createElement("div",{className:t.sContainerPlaylistsAndSongs},o.a.createElement(R.a,{value:l,onChange:this.handleChange},o.a.createElement(F.a,{label:"Hip-Hop",className:t.sTabs}),o.a.createElement(F.a,{label:"Rock'n Roll",className:t.sTabs}),o.a.createElement(F.a,{label:"Funk",className:t.sTabs}),o.a.createElement(F.a,{label:"Pop",className:t.sTabs})),o.a.createElement("div",{className:t.sSongsContainer},[{num:0,genre:"HipHop"},{num:1,genre:"RockNRoll"},{num:2,genre:"Funk"},{num:3,genre:"Pop"}].map(function(e){return l===e.num&&!s&&n[e.genre].map(function(e){return o.a.createElement("div",{className:t.sSongAndButtonsCont+" "+t.sAnimation},o.a.createElement(G,{key:e.id,id:e.id,name:e.name,author:e.author}),o.a.createElement(ae,null))})}))))),o.a.createElement("div",{className:t.sBigContainers},o.a.createElement("div",{className:t.sForm+" "+t.sForm2},o.a.createElement("div",{className:t.sContainerH2AndPlaylistadder},o.a.createElement("h2",null,"My playlists"),o.a.createElement(q,{onAdd:this.handleAdd})),o.a.createElement("div",{className:t.sContainerPlaylistsAndSongs},o.a.createElement(R.a,{value:i,onChange:this.handleChange2},n.namesOfUsersPlaylists.map(function(e){return o.a.createElement(F.a,{label:e,className:t.sTabs})})),o.a.createElement("div",{className:t.secondContSongsSongsadderDeletepllstbttn},[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map(function(a){return o.a.createElement("div",{className:t.sContainerSongsSongadderDeleteplaylist},o.a.createElement("div",null,i===a&&n[n.namesOfUsersPlaylists[a]].map(function(s){return o.a.createElement("div",{className:t.sSongAndButtonsCont+" "+t.sAnimation},o.a.createElement(G,{key:s.id,id:s.id,name:s.name,author:s.author}),o.a.createElement(Z,{id:s.id,playlistName:n.namesOfUsersPlaylists[a],onDelete:e.handleSongDelete}))}),i===a&&o.a.createElement("div",{className:t.sAnimation},o.a.createElement(Q,{playlistName:n.namesOfUsersPlaylists[a],onAdd:e.handleSongAdd}))),o.a.createElement("div",null,i===a&&o.a.createElement(f.a,{className:t.sAnimation+" "+t.sDeletePlIcon,onClick:e.handleDelete}," ","Delete playlist ",o.a.createElement(W.a,null)," ")))}))))))}}]),t}(n.Component),le=Object(h.withStyles)(function(e){return{root:{flexBasis:"100%",backgroundImage:"url(".concat(oe.a,")"),backgroundSize:"100% 100%","@media (max-width: 1030px)":{flexDirection:"column",flexBasis:"50%",justifyContent:"flex-start",backgroundSize:"100% 50%"},display:"flex",justifyContent:"center",fontFamily:"Roboto, Helvetica, Arial, sans-serif",overflow:"hidden"},sBigContainers:{width:"50%","@media (max-width: 1030px)":{width:"inherit",flexBasis:"50%",overflow:"hidden"}},sForm:{height:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",opacity:"0.8"},sForm2:{backgroundColor:"#d2eaf7",alignItems:"normal"},sContainerPlaylistsAndSongs:{overflow:"hidden",height:"100%",width:"100%",display:"flex"},sSongsContainer:{display:"flex",flexDirection:"column",marginLeft:"4%",width:"100%",fontSize:"0.9em",overflow:"scroll"},sTabs:{minWidth:"100%",maxWidth:"100px"},sSongAndButtonsCont:{flexGrow:"1",display:"flex",justifyContent:"space-between",borderTop:"dotted 1px"},sContainerH2AndPlaylistadder:{display:"flex",justifyContent:"center"},sContainerSongsSongadderDeleteplaylist:{position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between",fontSize:"0.9em",wordBreak:"break-all"},secondContSongsSongsadderDeletepllstbttn:{overflow:"scroll",marginLeft:"4%",width:"100%"},sDeletePlIcon:{position:"absolute",bottom:"-5",right:"0"},sAnimation:{animation:"appear 0.5s ease"},"@keyframes appear":{"0%":{opacity:"0"},"100%":{opacity:"1"}}}})(se),ie=a(91),re={root:{flexBasis:"100%",backgroundImage:"url(".concat(a.n(ie).a,")"),backgroundSize:"100% 100%","@media (max-width: 1030px)":{flexBasis:"25%"}}},ce=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("div",{className:e.root},o.a.createElement("span",null))}}]),t}(n.Component),ue=Object(h.withStyles)(re)(ce),de=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.classes;return o.a.createElement("main",{className:e.root},o.a.createElement(D,null),o.a.createElement(le,null),o.a.createElement(ue,null))}}]),t}(n.Component),he=Object(h.withStyles)({root:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch"}})(de),me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function pe(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(he,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/first_the-worst-music-streaming-platform",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/first_the-worst-music-streaming-platform","/service-worker.js");me?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):pe(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):pe(t,e)})}}()},88:function(e,t,a){e.exports=a.p+"static/media/first.ae1cceef.png"},90:function(e,t,a){e.exports=a.p+"static/media/second.7af37e23.png"},91:function(e,t,a){e.exports=a.p+"static/media/third.c56dd13d.png"},92:function(e,t,a){e.exports=a(224)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.5a235b32.chunk.js.map