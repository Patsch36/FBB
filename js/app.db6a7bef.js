(function(e){function t(t){for(var a,o,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0003":function(e,t,n){e.exports=n.p+"img/fbb-logo.c4dff90c.png"},"039f":function(e,t,n){},"087e":function(e,t){},"0bf9":function(e,t,n){"use strict";n.r(t);var a,i,s=n("2877"),o={},r=Object(s["a"])(o,a,i,!1,null,null,null);t["default"]=r.exports},"1d61":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"footer-card-cta",attrs:{href:e.url,target:"_blank"}},[n("div",{staticClass:"footer-card",class:e.short},[n("h3",{staticClass:"footer-card-title-large"},[e._v(e._s(e.name))]),n("h5",{staticClass:"footer-card-title-small"},[e._v(e._s(e.name))])])])},i=[];n("c000"),n("2ea8");let s=getComputedStyle(document.documentElement),o=s.getPropertyValue("--accent-color");o||s.setProperty("--accent-color","#33FFBD");var r={name:"social-link-card",props:{url:String,name:String,short:String},computed:{styleObject:function(){return{"--media_color":this.media_colour}}}},c=r,l=(n("c922"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=d.exports},"1fde":function(e,t,n){e.exports=n.p+"img/bki9701.468a2b6a.png"},"26aa":function(e,t,n){e.exports=n.p+"img/strong1.9f3eb08d.jpg"},"27b6":function(e,t,n){e.exports=n.p+"img/WhatsApp-Image-2022-03-31-at-20.18.59-600x442.018652ae.jpeg"},"2a37":function(e,t,n){e.exports=n.p+"img/av1.69156102.jpg"},"2ea8":function(e,t,n){},"347d":function(e,t,n){e.exports=n.p+"img/DSC_0897-300x200-1.ff9bebaf.jpg"},"3dfd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("Sidebar",{attrs:{page:e.nav_page}}),n("Header"),n("Overview"),n("Footer")],1)},i=[],s=n("fbd6"),o=n("981c"),r=n("0bf9"),c=n("b2c8"),l={name:"App",components:{Sidebar:s["default"],Header:o["default"],Overview:r["default"],Footer:c["default"]},data:()=>({nav_page:{logo_src:"assets/images/icons/logo_small.png"}})},d=l,u=n("2877"),m=n("6544"),p=n.n(m),g=n("7496"),f=Object(u["a"])(d,a,i,!1,null,null,null);t["default"]=f.exports;p()(f,{VApp:g["a"]})},"402c":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=n("f309");a["a"].use(i["a"]),t["default"]=new i["a"]({})},"4a83":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toggle-button"},[n("input",{ref:"toggle",attrs:{type:"checkbox",id:"toggle"},on:{click:function(t){return e.myFunctionClick()}}}),n("label",{staticClass:"toggle_button",attrs:{for:"toggle"}})])},i=[],s={methods:{myFunctionClick:function(){setTimeout(()=>{document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?localStorage.setItem("darkTheme","active"):localStorage.removeItem("darkTheme")},500)}}},o=s,r=(n("5eb6"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,null,null);t["default"]=c.exports},5031:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=n("3dfd"),s=n("402c");a["a"].config.productionTip=!1,new a["a"]({vuetify:s["default"],render:function(e){return e(i["default"])}}).$mount("#app")},"5eb6":function(e,t,n){"use strict";n("b27d")},"5fa0":function(e,t,n){e.exports=n.p+"img/sun.7eeb5bc0.svg"},"87d3":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMEAAADJAQMAAACg38SyAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAxBJREFUWMPt2EGO7CYUBdCLGJAZG4jEUthKVhKzNJbCEhgyQL4ZPLDBhk46KuX/L6Vm7lMu42fzuDQAADBsn4zHx3c5n8LrE2ZQt8RZ9C1pFnPLYwj2lvJPxd1SH3Id+6dc17UP8ZeYvTzK49N/Ja1y+S2tPuUtrT71F5Msz+B/+Ywct/AxgQeJ8wS+RM9T2I5S5smY7tPr3FvCfclz7i3DMDkN7RzPj+PQyjSasbfk8SCOX4vjT4dx0GNTG0fgp4H+OdZzurnfx/Ongvw2XvPVcO9Kb8Q8u+ogYSOWV2FjK127sDuv1pzbN865QZrWXhX7UznK1YCfki+ps/Tb6aK7qC8kbkT3G33J9SZ/IcU2UfIne26l7qSvIweLJQMcqWRRc6UvgsWSEZ5UUqe2WmiRDJJKRtnEzHICONJVaUsWJcJZDFn1La1sg5xKVukmjsy6CUiG6913ZFIiBX6SPrmlWAzQxAelN6fPSH9wn5H2SD8l+fvivxCpgiMZnLwHWZMBPg3im9hRLMlw/K04EjhmKeolRiRD5ASOKKK3okQiPJkdyy04yHDIzMqOGTiutscgBz5LmX9m4RfS39/3r31W9M8s3Ejai9qI/5cS1pL3go243B/4N6T012cl6ZtiS28WL6nfF1N7I3vJ2dfAhdi1aPa1diFmL1yKYtBfSFgJGFuqWEpaS8JGjtQSz1syfFmKzy1ZvaW0NPYSVyTBeQbyBAyzkyRnq6Q+MlDSRnaS5OwJwwgtknAwO0kbhtBMMCIZ0shPEcXSpSgRtsTFCitSNZkuiTjKS4LkN1/gSDwETHAZTuJH1WTscmTYBCeLRdU8cUmBjosVEPAVai3uBMJauF5PASu+EEneK5G0vhJJ+CuRXcFSjroTf+7EMWzEMm7EMG1Es2xEsQKOjJhyYt+1Ddmy4ujiGeHIbKbUKcPOq6QKwLJ0GXMvAMPas3KXs++n6ipFt2q3TJ5wXMm7zTtwyvF9U2YzYFksK6BIdW9LTV7tCgBApZ3gj60sdyw/TNRKylrMa984/LMvtSRXAfwF2R8A0PrG/18AAAAASUVORK5CYII="},"8a8e":function(e,t,n){e.exports=n.p+"img/fitness-people-hands-lifting-kettle-bell.f22f4d06.jpg"},"8f38":function(e,t,n){e.exports=n.p+"img/moon.189989a4.svg"},"929e":function(e,t,n){"use strict";n("5031")},"981c":function(e,t,n){"use strict";n.r(t);var a=n("aba3"),i=n("fe46");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(s);n("929e");var o=n("2877"),r=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"334725c0",null);t["default"]=r.exports},"9a27":function(e,t,n){},a44d:function(e,t,n){e.exports=n.p+"img/av4.232ad5ce.jpg"},a8ec:function(e,t,n){var a={"./App":"3dfd","./App.vue":"3dfd","./MainStyle.css":"c000","./assets/images/gallery/DSC_0897-300x200-1.jpg":"347d","./assets/images/gallery/WhatsApp-Image-2022-03-31-at-20.18.59-600x442.jpeg":"27b6","./assets/images/gallery/gym-01-206x300.png":"ec3c","./assets/images/icons/dumbell.png":"e360","./assets/images/icons/kettlebell.png":"87d3","./assets/images/icons/logo_small.png":"b071","./assets/images/icons/supplement.png":"b90e","./assets/images/index/ad9.jpg":"da32","./assets/images/index/av1.jpg":"2a37","./assets/images/index/av4.jpg":"a44d","./assets/images/index/bki9701.png":"1fde","./assets/images/index/fbb-logo.png":"0003","./assets/images/index/fitness-people-hands-lifting-kettle-bell.jpg":"8a8e","./assets/images/index/our-gym.png":"caa6","./assets/images/index/strong1.jpg":"26aa","./components/Footer":"b2c8","./components/Footer/":"b2c8","./components/Footer/index":"b2c8","./components/Footer/index.vue":"b2c8","./components/Header":"981c","./components/Header/":"981c","./components/Header/index":"981c","./components/Header/index.vue":"981c","./components/Overview":"0bf9","./components/Overview/":"0bf9","./components/Overview/index":"0bf9","./components/Overview/index.vue":"0bf9","./components/Overview/style.css":"039f","./components/Sidebar":"fbd6","./components/Sidebar/":"fbd6","./components/Sidebar/index":"fbd6","./components/Sidebar/index.vue":"fbd6","./components/Sidebar/style.css":"c63d","./components/widgets/SocialLinkCard/media-classes.css":"2ea8","./components/widgets/SocialLinkCard/social-link-card":"1d61","./components/widgets/SocialLinkCard/social-link-card.vue":"1d61","./components/widgets/ToggleButton":"4a83","./components/widgets/ToggleButton/":"4a83","./components/widgets/ToggleButton/index":"4a83","./components/widgets/ToggleButton/index.vue":"4a83","./components/widgets/ToggleButton/moon.svg":"8f38","./components/widgets/ToggleButton/sun.svg":"5fa0","./main":"56d7","./main.js":"56d7","./plugins/vuetify":"402c","./plugins/vuetify.js":"402c"};function i(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="a8ec"},aba3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{attrs:{id:"header"}},[a("div",{staticClass:"header-training"},[a("span",{staticClass:"header-text header-text-left scroll-reveal-left-header"},[e._v("TR")]),a("img",{staticClass:"header-img scroll-reveal-bottom-header",attrs:{src:n("1fde"),alt:""}}),a("span",{staticClass:"header-text header-text-right scroll-reveal-right-header"},[e._v("NG")])])])}]},b071:function(e,t,n){e.exports=n.p+"img/logo_small.754604b9.png"},b27d:function(e,t,n){},b2c8:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer-container"},e._l(e.medias,(function(e){return n("SocialLinkCard",{key:e.media_key,attrs:{name:e.name,url:e.url,short:e.short}})})),1)},i=[],s=n("1d61"),o={components:{SocialLinkCard:s["default"]},data:()=>({medias:[{short:"whatsapp",name:"WhatsApp",url:"https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining."},{short:"instagram",name:"Instagram",url:"https://www.instagram.com/fitnessbarockbacknang/?hl=de"},{short:"facebook",name:"Facebook",url:"https://www.facebook.com/fitnessbarockbacknang-105339741217132"},{short:"youtube",name:"Youtube",url:"https://www.youtube.com/channel/UCVgBKKGKg1rWt9h1ILMAWrA"},{short:"phone",name:"Mobilnummer",url:"tel:+491777871717"}]})},r=o,c=(n("d304"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,null,null);t["default"]=l.exports},b90e:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAADJAQMAAABFQQHeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAnhJREFUWMPt2DGS3CAQBdDGBIQcgaPgm0Hma3EUjqCQQMV3ABIN03hXuy671mWimXqjQY26AUFERAF3q8SaBmuJgeGQGVgOBwPHoTDwHM5PQXgX8AgDu3fzBWAbx5+G5w+qvCdLiHyP3ZxEXxbumG0xAPBSNhfktTouKOugX3AuXdzQO1GvEJdaviEttVxs0ayiLQc1QZ5HwfSH6LAMD/VA3DpuFBr4skL/qT9WsA3CFvIKvXZCejfoNwAPAP/hKayt/mvwV0b3KsXfCW7eKAzwOwifAj3WIwbfx+w1Qx5TauKgjgGZgy5juWqQxsQexko1wNYNOGzA764I5z3luAlQZFA4ZNDIMhgkGSyiDA4kg6+0xEEjDBFQZFA4ZNDIMhgkGSyiDG1J8q/gK4c8IAB1LH5xQE8zU4kUWH2o/rvHoABkhfMFbAPWuWqd+w55vavQ4VjjQIfCyzmc7Q+zAk4OKAMqA4WjlWCmGTQy9Z1MABgYJDK4PjOwiPemVnNwGNsoxcFXDnFOOBFQZFA4ZNDIMhgkGSyiDA4kg68bCGcHgxlQOnjk+YqjA1DmPnIDBdT5rlIDDWCOIzawAOIUeZ/9HIDE4VuHnotxXiY6HBIE/JABhVBEOMhLoJDInSJEshJoRLJVBCLTgLXYQItQiTSegPkQqEdX6I/BG0PyOogiqN3obh8UIZM/HyVDgN7l1Sbhtin6ktQXvJTBBWYtnAv0Wmr3tmEtzhvWcr5hnQCmV8tfQngO+TEcG/BbKBtwVYTlDfJaJhSWd06+sPCjqDK+LKAZ8FOtothRhxLhnM8+CvETDc8hMHAc2C6D31a5dxlpfm0obL/7E+yQE533JUkTAAAAAElFTkSuQmCC"},c000:function(e,t,n){},c63d:function(e,t,n){},c922:function(e,t,n){"use strict";n("e4a3")},caa6:function(e,t,n){e.exports=n.p+"img/our-gym.63910c81.png"},d304:function(e,t,n){"use strict";n("9a27")},da32:function(e,t,n){e.exports=n.p+"img/ad9.a1c4b0ca.jpg"},e360:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAADJAQMAAACHVBJzAAAACXBIWXMAAC4jAAAuIwF4pT92AAAABlBMVEX///////9VfPVsAAAAAXRSTlMAQObYZgAAAa9JREFUaN7t2kGOhCAQBdBvXLDkCB7Fo8nRPApHYOnC8Geh6WmwoKsnmu6JuLQfwZiSQP0G9msiI7JrJJnfQ0+Sc3aTJEMuLUl6YfSSy0EYb8jCI+XjLSk86ESSqzAPnfDw+UyjJDsKM00UXsgu3XEe8YVk47ua9H+T+70gyvApGQCby2X/4SBNLkNJ9k1+rzRbIcgyqZGhLmP6EVbk04fIF3JOPq2a9Elx12RI1rRz5JKsfufINV+PJdldIKGXYypdseoA4LdEmmzyXtIuNdkzgNEuAECNpAM6nfSA0ckAWJ1cgEEnV7WMwKiWk07yCunA75HZlcmImtzrc2jyXnKrkKMsVV2TTTbZpEYqVpvnFkSTt5D6HctHd1ZX7CrHs2V8Z+9t1dKod/69+tyhPKHMAEaVfJy50kPWcV1Ck03eVW4tuWJfMZGEugM5XyC9Rtr3pKr7as6TQd159upu9qzukLskJKtJdSd/TROtipxbhvIPpVFnfIc0cBXlZamlv0Aqst1OkKhJ9zqDhpRWj2UZNVm5lKrL+buU1MuZ/lB6dWsuTSlqP/yjoCsF/Y/RP/vxEV7TgcTGAAAAAElFTkSuQmCC"},e4a3:function(e,t,n){},ec3c:function(e,t,n){e.exports=n.p+"img/gym-01-206x300.923421a6.png"},fbd6:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app-bar",{attrs:{id:"top-navbar",app:""}},[n("div",{staticClass:"app-bar-content"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.drawer,expression:"!drawer"}],staticClass:"top-menu-container"},[n("img",{directives:[{name:"show",rawName:"v-show",value:!e.drawer,expression:"!drawer"}],staticClass:"nav-logo",attrs:{src:e.getImgUrl(e.page.logo_src),alt:""}})]),n("v-btn",{staticClass:"top-menu-container",attrs:{id:"menu-btn"},on:{click:function(t){return e.toggleDrawer()}}},[e.drawer?e._e():n("v-icon",{attrs:{title:"Menu"}},[e._v("mdi-menu")]),e.drawer?n("v-icon",{style:{"font-size":"3vh"},attrs:{title:"Menu"}},[e._v("mdi-close")]):e._e(),e.drawer?e._e():n("div",[e._v("Menu")])],1),n("ToggleButton",{staticClass:"top-menu-container, right-menu-item"})],1)]),n("v-navigation-drawer",{attrs:{temporary:!1,"disable-resize-watcher":"","mini-variant":!e.menuCompact.hidden,"mini-variant-width":"100",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("div",{attrs:{id:"sidebar"}},[n("div",{staticClass:"sidebar-toggle"},[n("div",{attrs:{id:"btn-toggle"},on:{click:function(t){return e.changeToggleState()}}},[n("v-icon",{attrs:{id:"btn-toggle-icon","x-large":""}},[e._v("mdi-chevron-left")])],1)]),n("div",{staticClass:"nav-image-wrapper",attrs:{href:"#"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.drawer,expression:"drawer"}],staticClass:"nav-logo nav-logo-big",attrs:{src:e.getImgUrl(e.page.logo_src),alt:""},on:{click:function(t){return t.preventDefault(),e.scrollToTop()}}})]),n("div",{staticClass:"sidebar-links"},[n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}]},[e._v("Landing-Page")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},e._l(e.LandingMenuLinks,(function(t){return n("a",{key:t.title,attrs:{href:t.path}},[n("v-icon",{staticClass:"icon",attrs:{title:t.title,id:"icon"}},[e._v("mdi-"+e._s(t.icon)+" ")]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[e._v(" "+e._s(t.title)+" ")])])],1)})),0)]),n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}]},[e._v("Gallery-Page")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},e._l(e.GalleryMenuLinks,(function(t){return n("a",{key:t.title,attrs:{href:t.path}},[n("v-icon",{staticClass:"icon",attrs:{title:t.title,id:"icon"}},[e._v("mdi-"+e._s(t.icon))]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[e._v(" "+e._s(t.title)+" ")])])],1)})),0)]),n("div",{staticClass:"sidebar-link-group"},[n("small",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}]},[e._v("Contact-form")]),n("hr",{staticClass:"divider"}),n("div",{staticClass:"links"},e._l(e.ContactMenuLinks,(function(t){return n("a",{key:t.title,attrs:{href:t.path}},[n("v-icon",{staticClass:"icon",attrs:{title:t.title,id:"icon"}},[e._v("mdi-"+e._s(t.icon))]),n("v-slide-x-transition",{attrs:{mode:"in-out","leave-absolute":""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.menuCompact.hidden,expression:"menuCompact.hidden"}],staticClass:"link-title"},[e._v(" "+e._s(t.title)+" ")])])],1)})),0)])])])])],1)},i=[],s=(n("c000"),n("c63d"),n("4a83")),o={name:"Sidebar",props:{page:Object},components:{ToggleButton:s["default"]},data:()=>({drawer:!1,mobile_width:!1,menuCompact:{hidden:!0},memberActive:!0,LandingMenuLinks:[{path:"#overview",title:"Overview",icon:"information-outline"},{path:"#",title:"Training",icon:"dumbbell"},{path:"#",title:"Gym",icon:"account-multiple"},{path:"#",title:"Kommentare",icon:"comment-text-multiple"},{path:"#",title:"Mitgliedschaft",icon:"passport-biometric"},{path:"#",title:"Kontakt",icon:"card-account-mail"}],GalleryMenuLinks:[{path:"#",title:"Bilder",icon:"image-multiple"},{path:"#",title:"Instagram",icon:"instagram"},{path:"#",title:"Videos",icon:"youtube-tv"}],ContactMenuLinks:[{path:"#",title:"Kontakt",icon:"email"}]}),methods:{changeToggleState(){let e=document.getElementById("btn-toggle-icon");return this.menuCompact.hidden=!this.menuCompact.hidden,this.menuCompact.hidden?e.style.transform="rotateY(0deg)":e.style.transform="rotateY(180deg)"},getImgUrl(e){return n("a8ec")("./"+e)},scrollToTop:function(){window.scroll(0,0)},toggleDrawer(){let e=document.getElementById("menu-btn");window.innerWidth<600&&(this.mobile_width=!0),this.drawer=!this.drawer,this.drawer?e.style.paddingInlineStart="10px":e.style.paddingInlineStart="0px"}}},r=o,c=n("2877"),l=n("6544"),d=n.n(l),u=n("40dc"),m=n("8336"),p=n("132d"),g=n("f774"),f=n("0789"),v=Object(c["a"])(r,a,i,!1,null,null,null);t["default"]=v.exports;d()(v,{VAppBar:u["a"],VBtn:m["a"],VIcon:p["a"],VNavigationDrawer:g["a"],VSlideXTransition:f["a"]})},fe46:function(e,t,n){"use strict";n.r(t);var a=n("087e"),i=n.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(s);t["default"]=i.a}});
//# sourceMappingURL=app.db6a7bef.js.map