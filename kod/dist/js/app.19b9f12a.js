(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],m=0,p=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"3f4e":function(e,t,a){"use strict";a("985a")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-md",attrs:{id:"app"}},[a("v-app",[a("router-view",{attrs:{authUser:e.authUser,"new-character-sheet":e.newCharacterSheet}})],1)],1)},i=[],o=a("0ff2"),s=a("59ca"),c=a.n(s);a("ea7b"),a("588e"),a("e71f");r["default"].use(o["a"]);var l={apiKey:"AIzaSyA-q3kbxyTwtw_kS6q-U_gXU8QeodmCy7w",authDomain:"kingofdiamonds-18c2f.firebaseapp.com",projectId:"kingofdiamonds-18c2f",storageBucket:"kingofdiamonds-18c2f.appspot.com",messagingSenderId:"448284867499",appId:"1:448284867499:web:2c91397d5d35e1e5be30ee",measurementId:"G-VBBZXVW7KB"};c.a.initializeApp(l);c.a.firestore();var u=c.a.auth();c.a.storage(),a("b0c0"),a("a4d3"),a("e01a");function m(e,t,a,r,n,i,o,s,c,l,u,m){this.name=e||"Character Name",this.className=t||"Class Name",this.subclassName=a||"Subclass Name",this.race=r||"Race Name",this.subrace=n||"Sub-Race Name",this.background=i||"Character Background",this.abilityScores=o||8,this.proficiences=s||"Proficiencies",this.options=c||"Options",this.spells=l||"Spells",this.equipment=u||"Equipment",this.description=m||"Description",this.toFirestore=function(){return{name:this.name=e,className:this.className=t,subclassName:this.subclassName=a,race:this.race=r,subrace:this.subrace=n,background:this.background=i,abilityScores:this.abilityScores=o,proficiences:this.proficiences=s,options:this.options=c,spells:this.spells=l,equipment:this.equipment=u,description:this.description=m}}}m.collectionName="sheets",m.fromFirestore=function(e,t){var a=e.data(t);return new m(a.name,a.className,a.subclassName,a.race,a.subrace,a.background,a.abilityScores,a.proficiences,a.options,a.spells,a.equipment,a.description)};var p=m,d={name:"App",data:function(){return{authUser:{uid:""},newCharacterSheet:new p}},created:function(){var e=this;u.onAuthStateChanged((function(t){e.authUser=t||{uid:""}}))}},h=d,f=(a("034f"),a("2877")),b=a("6544"),v=a.n(b),g=a("7496"),x=Object(f["a"])(h,n,i,!1,null,null,null),_=x.exports;v()(x,{VApp:g["a"]});var w=a("8c4f"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"homepage"}},[a("v-app-bar",[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("King Of Diamonds")])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e._v(" Home ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/profile"}},[e._v(" Profile ")])],1)],1)],1)],1)],1),a("v-app",[a("v-carousel",{attrs:{cycle:"",height:"800","hide-delimiters":""}},e._l(e.items,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})})),1)],1),a("login-page",{attrs:{"auth-user":"authUser"}}),a("b-card-footer",[e._v(" Its a footer ")])],1)},V=[],k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"parent"},[a("v-row",{staticClass:"mb-6",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{md:"3","offset-md":"3"}},[a("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/character-creator/race"}},[e._v("Build your character")])],1),a("v-col",{attrs:{md:"1","offset-md":"1"}},[e.authUser?a("v-btn",{staticClass:"text-decoration-none",on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Login")]):e._e()],1)],1)],1)},O=[],y=a("8aa5"),B=a.n(y),C={name:"LoginPage",props:{authUser:{required:!0}},methods:{login:function(){var e=new B.a.auth.GoogleAuthProvider;B.a.auth().signInWithPopup(e).catch((function(e){var t=e.message;console.log(e),console.log("Error logging in: ",t)}))},logout:function(){B.a.auth().signOut()}}},j=C,P=(a("8b76"),a("8336")),$=a("62ad"),E=a("a523"),N=a("0fd9"),A=Object(f["a"])(j,k,O,!1,null,"57351bb7",null),I=A.exports;v()(A,{VBtn:P["a"],VCol:$["a"],VContainer:E["a"],VRow:N["a"]});var F={name:"HomePage",components:{LoginPage:I},data:function(){return{slide:0,sliding:null,drawer:!1,group:null,items:[{src:"https://cdnb.artstation.com/p/assets/images/images/013/521/391/4k/emmanuel-shiu-human-relm-002.jpg?1539970395"},{src:"https://cdna.artstation.com/p/assets/images/images/001/206/348/4k/david-edwards-kenden-001.jpg?1442195813"},{src:"https://cdna.artstation.com/p/assets/images/images/002/352/926/4k/zsolt-kuczora-landscape-redesign-from-2013.jpg?1460651959"}],email:"",password:"",absolute:!0,opacity:0,overlay:!0}}},z=F,T=(a("3f4e"),a("40dc")),U=a("5bc1"),q=a("5e66"),D=a("3e35"),R=a("132d"),L=a("8860"),H=a("da13"),G=a("1baa"),M=a("34c3"),K=a("5d23"),W=a("f774"),J=a("2a7f"),X=Object(f["a"])(z,S,V,!1,null,"63fb259e",null),Q=X.exports;v()(X,{VApp:g["a"],VAppBar:T["a"],VAppBarNavIcon:U["a"],VCarousel:q["a"],VCarouselItem:D["a"],VIcon:R["a"],VList:L["a"],VListItem:H["a"],VListItemGroup:G["a"],VListItemIcon:M["a"],VListItemTitle:K["b"],VNavigationDrawer:W["a"],VToolbarTitle:J["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},Z=[],ee={name:"ProfilePage"},te=ee,ae=Object(f["a"])(te,Y,Z,!1,null,"1697a4ca",null),re=ae.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-treeview",{attrs:{activatable:"",items:e.items}})},ie=[],oe={name:"ResourceWiki",data:function(){return{items:[{id:1,name:"Applications :",children:[{id:2,name:"Calendar : app"},{id:3,name:"Chrome : app"},{id:4,name:"Webstorm : app"}]},{id:5,name:"Documents :",children:[{id:6,name:"vuetify :",children:[{id:7,name:"src :",children:[{id:8,name:"index : ts"},{id:9,name:"bootstrap : ts"}]}]},{id:10,name:"material2 :",children:[{id:11,name:"src :",children:[{id:12,name:"v-btn : ts"},{id:13,name:"v-card : ts"},{id:14,name:"v-window : ts"}]}]}]},{id:15,name:"Downloads :",children:[{id:16,name:"October : pdf"},{id:17,name:"November : pdf"},{id:18,name:"Tutorial : html"}]},{id:19,name:"Videos :",children:[{id:20,name:"Tutorials :",children:[{id:21,name:"Basic layouts : mp4"},{id:22,name:"Advanced techniques : mp4"},{id:23,name:"All about app : dir"}]},{id:24,name:"Intro : mov"},{id:25,name:"Conference introduction : avi"}]}]}}},se=oe,ce=a("eb2a"),le=Object(f["a"])(se,ne,ie,!1,null,"63d9da1b",null),ue=le.exports;v()(le,{VTreeview:ce["a"]});var me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-app",[a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a Race"}})],1)],1),a("v-btn",{on:{click:function(){e.next,e.persist}}},[e._v("Next")])],1)},pe=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-breadcrumb",{attrs:{items:e.items}})},he=[],fe={name:"Breadcrumbs",data:function(){return{items:[{text:"Race",to:{name:"Race"}},{text:"Class",to:{name:"Class"}},{text:"Background",to:{name:"Background"}},{text:"Level & Ability Scores",to:{name:"AbilityScores"}},{text:"Proficiencies",to:{name:"Proficiencies"}},{text:"Options",to:{name:"Options"}},{text:"Known Spells",to:{name:"Spells"}},{text:"Equipment",to:{name:"Equipment"}},{text:"Description",to:{name:"Description"}},{text:"Sheet Preview",to:{name:"SheetPreview"}}]}}},be=fe,ve=Object(f["a"])(be,de,he,!1,null,"35c183c0",null),ge=ve.exports,xe={name:"Race",data:function(){return{items:["Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dhampir","Dragonborn","Dwarf","Elf","Firbolg","Genasi","Gith","Gnome","Goblin","Goliath","Grung","Halfling","Half-Elf","Half-Orc","Hexblood","Hobgoblin","Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Locathah","Loxodon","Minotaur","Orc","Reborn","Satyr","Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Verdan","Warforged","Yuan-Ti Pureblood"]}},components:{Breadcrumbs:ge},methods:{next:function(){this.$router.push("/character-creator/class")},persist:function(){localStorage.items=this.items}}},_e=xe,we=a("4bd4"),Se=a("b974"),Ve=Object(f["a"])(_e,me,pe,!1,null,"19d9e482",null),ke=Ve.exports;v()(Ve,{VApp:g["a"],VBtn:P["a"],VForm:we["a"],VSelect:Se["a"]});var Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a Class"}}),a("v-btn",{on:{click:function(){e.next(),e.persist()}}},[e._v("Next")])],1)],1)},ye=[],Be={name:"Class",components:{Breadcrumbs:ge},props:{newCharacterSheet:Object},data:function(){return{items:["Artificer","Barbarian","Bard","Blood Hunter","Cleric","Druid","Fighter","Monk","Mystic","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"]}},methods:{next:function(){this.$router.push("/character-creator/background")},persist:function(){localStorage.items=this.items}}},Ce=Be,je=Object(f["a"])(Ce,Oe,ye,!1,null,"d8ba8992",null),Pe=je.exports;v()(je,{VBtn:P["a"],VForm:we["a"],VSelect:Se["a"]});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{label:"Choose a Background"}}),a("v-textarea",{attrs:{name:"input-7-4"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Ee=[],Ne={name:"Background",components:{Breadcrumbs:ge},props:{newCharacterSheet:Object},data:function(){return{info:null}},methods:{next:function(){this.$router.push("/character-creator/ability-scores")},persist:function(){localStorage.items=this.items}}},Ae=Ne,Ie=a("a844"),Fe=Object(f["a"])(Ae,$e,Ee,!1,null,"1224fb93",null),ze=Fe.exports;v()(Fe,{VBtn:P["a"],VForm:we["a"],VSelect:Se["a"],VTextarea:Ie["a"]});var Te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-input"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Ue=[],qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list"},[a("div",[a("v-col",[a("v-text-field",{attrs:{label:"Main input",rules:e.rules,"hide-details":"auto"}}),a("v-text-field",{attrs:{label:"Another input"}})],1)],1)])},De=[],Re={name:"UserSelect",data:function(){return{rules:[function(e){return!!e||"Required."},function(e){return e&&e.length>=3||"Min 3 characters"}]}}},Le=Re,He=a("8654"),Ge=Object(f["a"])(Le,qe,De,!1,null,"4ba1e0b8",null),Me=Ge.exports;v()(Ge,{VCol:$["a"],VTextField:He["a"]});var Ke={name:"AbilityScores",components:{UserInput:Me,Breadcrumbs:ge},props:{newCharacterSheet:Object},data:function(){return{items:["Foo","Bar","Fizz","Buzz"]}},methods:{next:function(){this.$router.push("/character-creator/proficiencies")}}},We=Ke,Je=Object(f["a"])(We,Te,Ue,!1,null,"51114d01",null),Xe=Je.exports;v()(Je,{VBtn:P["a"],VForm:we["a"]});var Qe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-input"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Ye=[],Ze={name:"Proficiencies",components:{UserInput:Me,Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/options")},persist:function(){localStorage.items=this.items}}},et=Ze,tt=Object(f["a"])(et,Qe,Ye,!1,null,"08b3151e",null),at=tt.exports;v()(tt,{VBtn:P["a"],VForm:we["a"]});var rt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-input"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},nt=[],it={name:"Options",components:{UserInput:Me,Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/spells")},persist:function(){localStorage.items=this.items}}},ot=it,st=Object(f["a"])(ot,rt,nt,!1,null,"d7a2ffb4",null),ct=st.exports;v()(st,{VBtn:P["a"],VForm:we["a"]});var lt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-select"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},ut=[],mt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"select"},[a("v-col",[a("v-select",{attrs:{items:e.items,label:"Outlined style",outlined:""}})],1)],1)},pt=[],dt={name:"UserInput",data:function(){return{items:["Foo","Bar","Fizz","Buzz"]}}},ht=dt,ft=Object(f["a"])(ht,mt,pt,!1,null,"347f3069",null),bt=ft.exports;v()(ft,{VCol:$["a"],VSelect:Se["a"]});var vt={name:"KnownSpells",components:{UserSelect:bt,Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/equipment")},persist:function(){localStorage.items=this.items}}},gt=vt,xt=Object(f["a"])(gt,lt,ut,!1,null,"3c84f47b",null),_t=xt.exports;v()(xt,{VBtn:P["a"],VForm:we["a"]});var wt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-select"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},St=[],Vt={name:"Equipment",components:{UserSelect:bt,Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/description")},persist:function(){localStorage.items=this.items}},data:function(){return{items:["Foo","Bar","Fizz","Buzz"]}}},kt=Vt,Ot=Object(f["a"])(kt,wt,St,!1,null,"6f555d2e",null),yt=Ot.exports;v()(Ot,{VBtn:P["a"],VForm:we["a"]});var Bt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("user-input"),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Ct=[],jt={name:"Description",components:{UserInput:Me,Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/sheet-preview")},persist:function(){localStorage.items=this.items}}},Pt=jt,$t=Object(f["a"])(Pt,Bt,Ct,!1,null,"5373f285",null),Et=$t.exports;v()($t,{VBtn:P["a"],VForm:we["a"]});var Nt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("breadcrumbs"),a("v-form",[a("h1",[e._v("Its a sheet preview")]),a("v-btn",[e._v("Save")])],1)],1)},At=[],It={name:"SheetPreview",components:{Breadcrumbs:ge},props:{newCharacterSheet:Object},methods:{persist:function(){localStorage.items=this.items}}},Ft=It,zt=Object(f["a"])(Ft,Nt,At,!1,null,"a9ffe2e4",null),Tt=zt.exports;v()(zt,{VBtn:P["a"],VForm:we["a"]}),r["default"].use(w["a"]);var Ut=[{path:"/",name:"HomePage",component:Q},{path:"/profile",name:"ProfilePage",component:re},{path:"/wiki",name:"ResourceWiki",component:ue},{path:"/character-creator/race",name:"Race",component:ke},{path:"/character-creator/class",name:"Class",component:Pe},{path:"/character-creator/race",name:"Race",component:ke},{path:"/character-creator/background",name:"Background",component:ze},{path:"/character-creator/ability-scores",name:"AbilityScores",component:Xe},{path:"/character-creator/proficiencies",name:"Proficiencies",component:at},{path:"/character-creator/options",name:"Options",component:ct},{path:"/character-creator/spells",name:"Spells",component:_t},{path:"/character-creator/equipment",name:"Equipment",component:yt},{path:"/character-creator/description",name:"Description",component:Et},{path:"/character-creator/sheet-preview",name:"SheetPreview",component:Tt}],qt=new w["a"]({routes:Ut}),Dt=qt,Rt=a("5f5b"),Lt=a("b1e0"),Ht=a("bc3a"),Gt=a.n(Ht),Mt=a("130e"),Kt=(a("f9e3"),a("2dd8"),a("f309"));r["default"].use(Kt["a"]);var Wt=new Kt["a"]({});r["default"].use(Rt["a"]),r["default"].use(Lt["a"]),r["default"].use(Mt["a"],Gt.a),r["default"].config.productionTip=!1,new r["default"]({router:Dt,vuetify:Wt,render:function(e){return e(_)}}).$mount("#app")},"6c9b":function(e,t,a){},"85ec":function(e,t,a){},"8b76":function(e,t,a){"use strict";a("6c9b")},"985a":function(e,t,a){}});
//# sourceMappingURL=app.19b9f12a.js.map