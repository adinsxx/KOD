(function(e){function t(t){for(var r,s,i=t[0],o=t[1],l=t[2],h=0,m=[];h<i.length;h++)s=i[h],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},c=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"10cd":function(e,t,a){"use strict";a("47d6")},"16b1":function(e,t,a){"use strict";a("5262")},2911:function(e,t,a){},2944:function(e,t,a){"use strict";a("ae54")},2995:function(e,t,a){},"29b2":function(e,t,a){"use strict";a("647b")},"47d6":function(e,t,a){},"4fdf":function(e,t,a){},5262:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("router-view",{attrs:{authUser:e.authUser,"new-character-sheet":e.newCharacterSheet}})],1)},c=[];a("b0c0"),a("a4d3"),a("e01a");function s(e,t,a,r,n,c,s,i,o,l,u,h,m){this.user=e||{},this.name=t||"",this.className=a||"",this.subclassName=r||"",this.raceName=n||"",this.subrace=c||"",this.background=s||"",this.abilityScores=i||0,this.proficiences=o||"",this.options=l||"",this.spells=u||"",this.equipment=h||"",this.description=m||"",this.toFirestore=function(){return{user:this.user,name:this.name,className:this.className,subclassName:this.subclassName,raceName:this.raceName,subrace:this.subrace,background:this.background,abilityScores:this.abilityScores,proficiences:this.proficiences,options:this.options,spells:this.spells,equipment:this.equipment,description:this.description}}}s.collectionName="sheets",s.fromFirestore=function(e,t){var a=e.data(t);return new s(a.user,a.name,a.className,a.subclassName,a.raceName,a.subrace,a.background,a.abilityScores,a.proficiences,a.options,a.spells,a.equipment,a.description)};var i=s,o=a("8aa5"),l=a.n(o),u=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},m=[],p={name:"ProfilePage"},d=p,f=a("2877"),v=Object(f["a"])(d,h,m,!1,null,"1697a4ca",null),b=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-treeview",{attrs:{activatable:"",items:e.items}})},w=[],S={name:"ResourceWiki",data:function(){return{items:[{id:1,name:"Applications :",children:[{id:2,name:"Calendar : app"},{id:3,name:"Chrome : app"},{id:4,name:"Webstorm : app"}]},{id:5,name:"Documents :",children:[{id:6,name:"vuetify :",children:[{id:7,name:"src :",children:[{id:8,name:"index : ts"},{id:9,name:"bootstrap : ts"}]}]},{id:10,name:"material2 :",children:[{id:11,name:"src :",children:[{id:12,name:"v-btn : ts"},{id:13,name:"v-card : ts"},{id:14,name:"v-window : ts"}]}]}]},{id:15,name:"Downloads :",children:[{id:16,name:"October : pdf"},{id:17,name:"November : pdf"},{id:18,name:"Tutorial : html"}]},{id:19,name:"Videos :",children:[{id:20,name:"Tutorials :",children:[{id:21,name:"Basic layouts : mp4"},{id:22,name:"Advanced techniques : mp4"},{id:23,name:"All about app : dir"}]},{id:24,name:"Intro : mov"},{id:25,name:"Conference introduction : avi"}]}]}}},x=S,_=a("6544"),C=a.n(_),k=a("eb2a"),y=Object(f["a"])(x,g,w,!1,null,"63d9da1b",null),V=y.exports;C()(y,{VTreeview:k["a"]});var O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a Race"},model:{value:e.newCharacterSheet.raceName,callback:function(t){e.$set(e.newCharacterSheet,"raceName",t)},expression:"newCharacterSheet.raceName"}})],1),a("v-btn",{on:{click:function(){e.next()}}},[e._v("Next")])],1)},j=[],N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-breadcrumb",{attrs:{items:e.items}})},B=[],$={name:"Breadcrumbs",data:function(){return{items:[{text:"Race",to:{name:"Race"}},{text:"Class",to:{name:"Class"}},{text:"Background",to:{name:"Background"}},{text:"Level & Ability Scores",to:{name:"AbilityScores"}},{text:"Proficiencies",to:{name:"Proficiencies"}},{text:"Options",to:{name:"Options"}},{text:"Known Spells",to:{name:"Spells"}},{text:"Equipment",to:{name:"Equipment"}},{text:"Description",to:{name:"Description"}},{text:"Sheet Preview",to:{name:"SheetPreview"}}]}}},P=$,U=Object(f["a"])(P,N,B,!1,null,"35c183c0",null),E=U.exports,A={name:"Race",data:function(){return{items:["Aarakocra","Aasimar","Bugbear","Centaur","Changeling","Dhampir","Dragonborn","Dwarf","Elf","Firbolg","Genasi","Gith","Gnome","Goblin","Goliath","Grung","Halfling","Half-Elf","Half-Orc","Hexblood","Hobgoblin","Human","Kalashtar","Kenku","Kobold","Leonin","Lizardfolk","Locathah","Loxodon","Minotaur","Orc","Reborn","Satyr","Shifter","Simic Hybrid","Tabaxi","Tiefling","Tortle","Triton","Vedalken","Verdan","Warforged","Yuan-Ti Pureblood"]}},components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/class")}}},F=A,L=(a("d8c7"),a("8336")),I=a("4bd4"),T=a("b974"),q=Object(f["a"])(F,O,j,!1,null,"4986f3ab",null),D=q.exports;C()(q,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a Class"},model:{value:e.newCharacterSheet.className,callback:function(t){e.$set(e.newCharacterSheet,"className",t)},expression:"newCharacterSheet.className"}}),a("v-btn",{on:{click:function(){e.next()}}},[e._v("Next")])],1)],1)},M=[],H={name:"Class",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},data:function(){return{items:["Artificer","Barbarian","Bard","Blood Hunter","Cleric","Druid","Fighter","Monk","Mystic","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"]}},methods:{next:function(){this.$router.push("/character-creator/background")}}},G=H,K=(a("c1aa"),Object(f["a"])(G,R,M,!1,null,"5f1dc762",null)),W=K.exports;C()(K,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a Background"},model:{value:e.newCharacterSheet.background,callback:function(t){e.$set(e.newCharacterSheet,"background",t)},expression:"newCharacterSheet.background"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Y=[],J={name:"Background",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},data:function(){return{info:null,items:["Criminal","Acolyte ","Entertainer","Knight","Soldier","Pirate"]}},methods:{next:function(){this.$router.push("/character-creator/ability-scores")}}},X=J,Q=(a("2944"),Object(f["a"])(X,z,Y,!1,null,"36c847d8",null)),Z=Q.exports;C()(Q,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose Your Ability Scores"},model:{value:e.newCharacterSheet.abilityScores,callback:function(t){e.$set(e.newCharacterSheet,"abilityScores",t)},expression:"newCharacterSheet.abilityScores"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},te=[],ae={name:"AbilityScores",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},data:function(){return{items:["str: 15, dex: 15, con: 15, int: 8 wis: 8 cha: 8","str: 15, dex: 15, con: 14, int: 10, wis: 8, cha: 8","str: 15, dex: 15, con: 14, int: 9, wis: 9, cha: 8","str: 14, dex: 14, con: 12, int: 11, wis: 11, cha: 11","str: 14, dex: 13, con: 13, int: 13, wis: 13, cha: 8","str: 14, dex: 13, con: 13, int: 13, wis: 12, cha: 9","str: 14, dex: 13, con: 13, int: 13, wis: 11, cha: 10","str: 14, dex: 13, con: 13, int: 12, wis: 12, cha: 10","str: 14, dex: 13, con: 13, int: 12, wis: 11, cha: 11","str: 14, dex: 13, con: 12, int: 12, wis: 12, cha: 11","str: 14, dex: 12, con: 12, int: 12, wis: 12, cha: 12","str: 13, dex: 13, con: 13, int: 13, wis: 13, cha: 10","str: 13, dex: 13, con: 13, int: 13, wis: 12, cha: 11","str: 13, dex: 13, con: 13, int: 12, wis: 12, cha: 12"]}},methods:{next:function(){this.$router.push("/character-creator/proficiencies")}}},re=ae,ne=(a("961e"),Object(f["a"])(re,ee,te,!1,null,"2272b9c9",null)),ce=ne.exports;C()(ne,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-textarea",{attrs:{name:"input-7-4",label:"Write a proficiency. ex: Athletics, Arcana, Stealth, etc."},model:{value:e.newCharacterSheet.proficiences,callback:function(t){e.$set(e.newCharacterSheet,"proficiences",t)},expression:"newCharacterSheet.proficiences"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},ie=[],oe={name:"Proficiencies",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/options")}}},le=oe,ue=(a("e666"),a("a844")),he=Object(f["a"])(le,se,ie,!1,null,"b6931576",null),me=he.exports;C()(he,{VBtn:L["a"],VForm:I["a"],VTextarea:ue["a"]});var pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{label:"Choose a Pack",items:e.items},model:{value:e.newCharacterSheet.options,callback:function(t){e.$set(e.newCharacterSheet,"options",t)},expression:"newCharacterSheet.options"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},de=[],fe={name:"Options",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/spells")}},data:function(){return{items:["Adventurers Pack","Explorers Pack","Scholars Pack"]}}},ve=fe,be=(a("6914"),Object(f["a"])(ve,pe,de,!1,null,"68890a5a",null)),ge=be.exports;C()(be,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose a spell"},model:{value:e.newCharacterSheet.spells,callback:function(t){e.$set(e.newCharacterSheet,"spells",t)},expression:"newCharacterSheet.spells"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Se=[],xe={name:"KnownSpells",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/equipment")}},data:function(){return{items:["None","Spare the Dying","Firebolt","Shocking Grasp","Magic Missile","Turn Undead"]}}},_e=xe,Ce=(a("e394"),Object(f["a"])(_e,we,Se,!1,null,"34614542",null)),ke=Ce.exports;C()(Ce,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-select",{attrs:{items:e.items,label:"Choose your weapon"},model:{value:e.newCharacterSheet.equipment,callback:function(t){e.$set(e.newCharacterSheet,"equipment",t)},expression:"newCharacterSheet.equipment"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Ve=[],Oe={name:"Equipment",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/description")}},data:function(){return{items:["Club","Mace","Axe","Sword","Bow","Unarmed"]}}},je=Oe,Ne=(a("29b2"),Object(f["a"])(je,ye,Ve,!1,null,null,null)),Be=Ne.exports;C()(Ne,{VBtn:L["a"],VForm:I["a"],VSelect:T["a"]});var $e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("v-text-field",{attrs:{label:"Name your character"},model:{value:e.newCharacterSheet.name,callback:function(t){e.$set(e.newCharacterSheet,"name",t)},expression:"newCharacterSheet.name"}}),a("v-textarea",{attrs:{label:"Give your character some fun details"},model:{value:e.newCharacterSheet.description,callback:function(t){e.$set(e.newCharacterSheet,"description",t)},expression:"newCharacterSheet.description"}}),a("v-btn",{on:{click:e.next}},[e._v("Next")])],1)],1)},Pe=[],Ue={name:"Description",components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{next:function(){this.$router.push("/character-creator/sheet-preview")}}},Ee=Ue,Ae=(a("b087"),a("8654")),Fe=Object(f["a"])(Ee,$e,Pe,!1,null,"bad45e22",null),Le=Fe.exports;C()(Fe,{VBtn:L["a"],VForm:I["a"],VTextField:Ae["a"],VTextarea:ue["a"]});var Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"characterForm"},[a("breadcrumbs"),a("v-form",[a("p",[e._v(" Name: "+e._s(e.newCharacterSheet.name))]),a("p",[e._v(" Race: "+e._s(e.newCharacterSheet.raceName))]),a("p",[e._v(" Class: "+e._s(e.newCharacterSheet.className))]),a("p",[e._v(" Background: "+e._s(e.newCharacterSheet.background))]),a("p",[e._v(" Ability Scores: "+e._s(e.newCharacterSheet.abilityScores))]),a("p",[e._v(" Proficiencies: "+e._s(e.newCharacterSheet.proficiences))]),a("p",[e._v(" Options: "+e._s(e.newCharacterSheet.options))]),a("p",[e._v(" Spells: "+e._s(e.newCharacterSheet.spells))]),a("p",[e._v(" Equipment: "+e._s(e.newCharacterSheet.equipment))]),a("p",[e._v(" Description: "+e._s(e.newCharacterSheet.description))]),a("v-btn",{on:{click:function(t){return t.preventDefault(),e.addCharacter.apply(null,arguments)}}},[e._v("Save")]),a("v-btn",{on:{click:function(t){return t.preventDefault(),e.toSheets.apply(null,arguments)}}},[e._v("My Sheets")])],1)],1)},Te=[],qe=a("0ff2"),De=a("59ca"),Re=a.n(De);a("ea7b"),a("588e"),a("e71f");r["default"].use(qe["a"]);var Me={apiKey:"AIzaSyA-q3kbxyTwtw_kS6q-U_gXU8QeodmCy7w",authDomain:"kingofdiamonds-18c2f.firebaseapp.com",projectId:"kingofdiamonds-18c2f",storageBucket:"kingofdiamonds-18c2f.appspot.com",messagingSenderId:"448284867499",appId:"1:448284867499:web:2c91397d5d35e1e5be30ee",measurementId:"G-VBBZXVW7KB"};Re.a.initializeApp(Me);var He=Re.a.firestore(),Ge=(Re.a.auth(),Re.a.storage(),{name:"SheetPreview",data:function(){return{Characters:[]}},components:{Breadcrumbs:E},props:{authUser:Object,newCharacterSheet:Object},methods:{addCharacter:function(){var e=this.newCharacterSheet;e.user=this.authUser,console.log(e.toFirestore()),console.log(this.authUser),He.collection("characters").add(e.toFirestore()).then((function(t){console.log("Sheet added: ",t),e=new i})).catch((function(e){console.error("Error adding sheet: ",e)}))},toSheets:function(){this.$router.push("/sheet-pages")}}}),Ke=Ge,We=(a("16b1"),Object(f["a"])(Ke,Ie,Te,!1,null,"48e571f1",null)),ze=We.exports;C()(We,{VBtn:L["a"],VForm:I["a"]});var Ye=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("v-app-bar",[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("King Of Diamonds")])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e._v(" Home ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/profile"}},[e._v(" Profile ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-file")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/sheet-pages"}},[e._v(" My Sheets ")])],1)],1)],1)],1)],1),a("v-carousel",{attrs:{cycle:"",height:"750","hide-delimiters":""}},e._l(e.items,(function(e,t){return a("v-carousel-item",{key:t,attrs:{src:e.src}})})),1),a("login-page",{attrs:{"auth-user":e.authUser}})],1)},Je=[],Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"parent"},[a("v-row",{staticClass:"mb-6",attrs:{justify:"center","no-gutters":""}},[a("v-col",{attrs:{md:"3","offset-md":"3"}},[a("v-btn",{staticClass:"text-decoration-none",attrs:{to:"/character-creator/race"}},[e._v("Build your character")])],1),a("v-col",{attrs:{md:"1","offset-md":"1"}},[e.authUser?a("v-btn",{staticClass:"text-decoration-none",on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v("Logout")]):a("v-btn",{staticClass:"text-decoration-none",on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Login")])],1)],1)],1)},Qe=[],Ze={name:"LoginPage",props:{authUser:{required:!0}},methods:{login:function(){var e=new l.a.auth.GoogleAuthProvider;l.a.auth().signInWithPopup(e).catch((function(e){var t=e.message;console.log(e),console.log("Error logging in: ",t)}))},logout:function(){l.a.auth().signOut()}}},et=Ze,tt=(a("b647"),a("62ad")),at=a("a523"),rt=a("0fd9"),nt=Object(f["a"])(et,Xe,Qe,!1,null,null,null),ct=nt.exports;C()(nt,{VBtn:L["a"],VCol:tt["a"],VContainer:at["a"],VRow:rt["a"]});var st={name:"HomePage",components:{LoginPage:ct},props:{authUser:Object,newCharacterSheet:Object},data:function(){return{characters:[],slide:0,sliding:null,drawer:!1,group:null,items:[{src:"https://cdnb.artstation.com/p/assets/images/images/013/521/391/4k/emmanuel-shiu-human-relm-002.jpg?1539970395"},{src:"https://cdna.artstation.com/p/assets/images/images/001/206/348/4k/david-edwards-kenden-001.jpg?1442195813"},{src:"https://cdna.artstation.com/p/assets/images/images/002/352/926/4k/zsolt-kuczora-landscape-redesign-from-2013.jpg?1460651959"}],email:"",password:"",absolute:!0,opacity:0,overlay:!0}}},it=st,ot=(a("b29c"),a("40dc")),lt=a("5bc1"),ut=a("5e66"),ht=a("3e35"),mt=a("132d"),pt=a("8860"),dt=a("da13"),ft=a("1baa"),vt=a("34c3"),bt=a("5d23"),gt=a("f774"),wt=a("2a7f"),St=Object(f["a"])(it,Ye,Je,!1,null,"68c81141",null),xt=St.exports;C()(St,{VAppBar:ot["a"],VAppBarNavIcon:lt["a"],VCarousel:ut["a"],VCarouselItem:ht["a"],VIcon:mt["a"],VList:pt["a"],VListItem:dt["a"],VListItemGroup:ft["a"],VListItemIcon:vt["a"],VListItemTitle:bt["b"],VNavigationDrawer:gt["a"],VToolbarTitle:wt["a"]});var _t=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sheetpage"},[e.loggedIn?a("sheet-list",{attrs:{collection:"characters",user:e.authUser}}):a("v-col",{staticClass:"mx-auto",attrs:{cols:"9"}},[a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v("You must be logged in to view your character sheets")])],1)],1)},Ct=[],kt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-app-bar",[a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}),a("v-toolbar-title",[e._v("My Sheets")])],1),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/"}},[e._v(" Home ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/profile"}},[e._v(" Profile ")])],1)],1),a("v-list-item",[a("v-list-item-icon",[a("v-icon",[e._v("mdi-file")])],1),a("v-list-item-title",[a("router-link",{staticClass:"text-decoration-none",attrs:{to:"/sheet-pages"}},[e._v(" My Sheets ")])],1)],1)],1)],1)],1),e.characters?a("v-row",{staticClass:"sheet-list"},e._l(e.characters,(function(t){return a("v-card",{key:t.id,staticClass:"pa-md-4 mx-lg-auto",attrs:{width:"500px",character:t}},[a("p",[e._v("Name: "+e._s(t.name))]),a("p",[e._v("Race: "+e._s(t.raceName))]),a("p",[e._v("Class: "+e._s(t.className))]),a("p",[e._v("Background: "+e._s(t.background))]),a("p",[e._v("Ability Scores: "+e._s(t.abilityScores))]),a("p",[e._v("Proficiencies: "+e._s(t.proficiences))]),a("p",[e._v("Options: "+e._s(t.options))]),a("p",[e._v("Spells: "+e._s(t.spells)+" ")]),a("p",[e._v("Equipment: "+e._s(t.equipment))]),a("p",[e._v("Description: "+e._s(t.description))])])})),1):e._e()],1)},yt=[],Vt={name:"SheetList",props:{user:Object,newCharacterSheet:Object,collection:String},data:function(){return{characters:[],drawer:!1,group:null}},firestore:function(){return{characters:He.collection("characters").where("user.uid","==",this.user.uid)}}},Ot=Vt,jt=(a("10cd"),a("b0af")),Nt=Object(f["a"])(Ot,kt,yt,!1,null,"57c6b1e2",null),Bt=Nt.exports;C()(Nt,{VAppBar:ot["a"],VAppBarNavIcon:lt["a"],VCard:jt["a"],VIcon:mt["a"],VList:pt["a"],VListItem:dt["a"],VListItemGroup:ft["a"],VListItemIcon:vt["a"],VListItemTitle:bt["b"],VNavigationDrawer:gt["a"],VRow:rt["a"],VToolbarTitle:wt["a"]});var $t={name:"SheetPage",props:{authUser:Object,newCharacterSheet:Object},components:{SheetList:Bt},computed:{loggedIn:function(){return this.authUser&&this.authUser.uid}}},Pt=$t,Ut=a("0798"),Et=Object(f["a"])(Pt,_t,Ct,!1,null,"65da4eed",null),At=Et.exports;C()(Et,{VAlert:Ut["a"],VCol:tt["a"]}),r["default"].use(u["a"]);var Ft=[{path:"/",name:"HomePage",component:xt},{path:"/profile",name:"ProfilePage",component:b},{path:"/wiki",name:"ResourceWiki",component:V},{path:"/character-creator/race",name:"Race",component:D},{path:"/character-creator/class",name:"Class",component:W},{path:"/character-creator/background",name:"Background",component:Z},{path:"/character-creator/ability-scores",name:"AbilityScores",component:ce},{path:"/character-creator/proficiencies",name:"Proficiencies",component:me},{path:"/character-creator/options",name:"Options",component:ge},{path:"/character-creator/spells",name:"Spells",component:ke},{path:"/character-creator/equipment",name:"Equipment",component:Be},{path:"/character-creator/description",name:"Description",component:Le},{path:"/character-creator/sheet-preview",name:"SheetPreview",component:ze},{path:"/sheet-pages",name:"SheetPage",component:At}],Lt=new u["a"]({routes:Ft}),It=Lt,Tt=function(e){var t={displayName:"",email:"",photoURL:"",uid:""};return e&&(t.displayName=e.displayName?e.displayName:"",t.email=e.email?e.email:"",t.photoURL=e.photoURL?e.photoURL:"",t.uid=e.uid?e.uid:""),t},qt={name:"App",router:It,data:function(){return{authUser:null,newCharacterSheet:new i}},created:function(){var e=this;l.a.auth().onAuthStateChanged((function(t){if(t){var a=t.displayName,r=t.email;console.log("Signed in as: ",t),e.authUser=new Tt(t),document.getElementById("message").innerHTML="Signed in as: "+a+" ("+r+")"}else console.log("Not signed in."),e.authUser=null}))}},Dt=qt,Rt=a("7496"),Mt=Object(f["a"])(Dt,n,c,!1,null,null,null),Ht=Mt.exports;C()(Mt,{VApp:Rt["a"]});var Gt=a("5f5b"),Kt=a("b1e0"),Wt=a("bc3a"),zt=a.n(Wt),Yt=a("130e"),Jt=(a("f9e3"),a("2dd8"),a("f309"));r["default"].use(Jt["a"]);var Xt=new Jt["a"]({});r["default"].use(Gt["a"]),r["default"].use(Kt["a"]),r["default"].use(Yt["a"],zt.a),r["default"].config.productionTip=!1,new r["default"]({router:It,vuetify:Xt,render:function(e){return e(Ht)}}).$mount("#app")},"60d7":function(e,t,a){},"647b":function(e,t,a){},6914:function(e,t,a){"use strict";a("f391")},"7ce2":function(e,t,a){},"961e":function(e,t,a){"use strict";a("2995")},9713:function(e,t,a){},ae54:function(e,t,a){},b087:function(e,t,a){"use strict";a("9713")},b0cf:function(e,t,a){},b29c:function(e,t,a){"use strict";a("60d7")},b647:function(e,t,a){"use strict";a("b0cf")},be6a:function(e,t,a){},c1aa:function(e,t,a){"use strict";a("4fdf")},d8c7:function(e,t,a){"use strict";a("2911")},e394:function(e,t,a){"use strict";a("7ce2")},e666:function(e,t,a){"use strict";a("be6a")},f391:function(e,t,a){}});
//# sourceMappingURL=app.a94192ec.js.map