(function(){"use strict";var e={8192:function(e,t,n){var r=n(9242),a=n(3396),i=n(7718);function o(e,t,n,r,o,s){const l=(0,a.up)("NavBar"),c=(0,a.up)("router-view"),u=(0,a.up)("v-content"),d=(0,a.up)("FooterBar");return(0,a.wg)(),(0,a.j4)(i.q,{class:"grey lighten-4 bg-background",style:{}},{default:(0,a.w5)((()=>[(0,a.Wm)(l),(0,a.Wm)(u,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c)])),_:1}),(0,a.Wm)(d)])),_:1})}var s=n(7139),l=n(497),c=n(6357),u=n(9234),d=n(3289),m=n(1901),g=n(329),h=n(6898),f=n(2127),p=n(7033);const w=(0,a._)("span",{class:"font-weight-light red-text"},"Fitness",-1),_=(0,a._)("span",{class:"text-primary"},"Barock",-1),v=(0,a.Uk)("mdi-menu"),y=(0,a.Uk)("mdi-close"),b=(0,a.Uk)("Menu"),k={class:"nav-link"};function x(e,t,n,r,i,o){const x=(0,a.up)("v-app-title"),W=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",null,[(0,a.Wm)(l.L,{flat:"",app:"",class:"bg-grey"},{default:(0,a.w5)((()=>[(0,a.Wm)(x,{class:"text-uppercase"},{default:(0,a.w5)((()=>[w,_])),_:1}),(0,a.Wm)(u.C),(0,a.Wm)(c.T,{onClick:t[0]||(t[0]=e=>this.drawer=!this.drawer)},{default:(0,a.w5)((()=>[i.drawer?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(d.t,{key:0},{default:(0,a.w5)((()=>[v])),_:1})),i.drawer?((0,a.wg)(),(0,a.j4)(d.t,{key:1},{default:(0,a.w5)((()=>[y])),_:1})):(0,a.kq)("",!0),b])),_:1})])),_:1}),(0,a.Wm)(p.V,{modelValue:this.drawer,"onUpdate:modelValue":t[1]||(t[1]=e=>this.drawer=e),temporary:""},{default:(0,a.w5)((()=>[this.mode?((0,a.wg)(),(0,a.j4)(m.i,{key:0,density:"compact",class:"ma-5",nav:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.links_prod,(t=>((0,a.wg)(),(0,a.j4)(g.l,{key:t.text,value:e.item,"active-color":"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{to:t.route,id:"link",class:"pa-"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.t,{icon:t.icon},null,8,["icon"])])),_:2},1024),(0,a.Wm)(f.V,{class:"grey--text",textContent:(0,s.zw)(t.text)},null,8,["textContent"])])),_:2},1032,["to"])])),_:2},1032,["value"])))),128))])),_:1})):((0,a.wg)(),(0,a.j4)(m.i,{key:1,density:"compact",class:"ma-5",nav:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.links,(t=>((0,a.wg)(),(0,a.j4)(g.l,{key:t.text,value:e.item,"active-color":"primary"},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{to:t.route,id:"link",class:"nav-link-anchor"},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a.Wm)(h.U,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d.t,{class:"nav-icon",icon:t.icon},null,8,["icon"])])),_:2},1024),(0,a.Wm)(f.V,{class:"grey--text nav-icon-title",textContent:(0,s.zw)(t.text)},null,8,["textContent"])])])),_:2},1032,["to"])])),_:2},1032,["value"])))),128))])),_:1}))])),_:1},8,["modelValue"])])}var W={data(){return{drawer:!1,mode:!0,links:[{icon:"mdi-home",text:"Titelseite",route:"/"},{icon:"mdi-folder",text:"My Projects",route:"/projects"},{icon:"mdi-account",text:"Team",route:"/team"}],links_prod:[{icon:"mdi-home",text:"Titelseite",route:"/fbb/"},{icon:"mdi-folder",text:"My Projects",route:"/projects"},{icon:"mdi-account",text:"Team",route:"/team"}]}}},T=n(89);const j=(0,T.Z)(W,[["render",x]]);var D=j;const C={class:"footer-container bg-darkgrey"};function P(e,t,n,r,i,o){const s=(0,a.up)("SocialLinkCard");return(0,a.wg)(),(0,a.iD)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.medias,(e=>((0,a.wg)(),(0,a.j4)(s,{key:e.short,name:e.name,url:e.url,short:e.short},null,8,["name","url","short"])))),128))])}const F=["href"],Z={class:"footer-card-title-large"},A={class:"footer-card-title-small text-textcolor text-h5"};function O(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("a",{href:n.url,target:"_blank",class:"footer-card-cta"},[(0,a._)("div",{class:(0,s.C_)(["footer-card",n.short])},[(0,a._)("h3",Z,(0,s.zw)(n.name),1),(0,a._)("h5",A,(0,s.zw)(n.name),1)],2)],8,F)}var S={name:"social-link-card",props:{url:String,name:String,short:String},setup(){},computed:{styleObject:function(){return{"--media_color":this.media_colour}}}};const H=(0,T.Z)(S,[["render",O]]);var K=H,M={components:{SocialLinkCard:K},data:()=>({medias:[{short:"whatsapp",name:"WhatsApp",url:"https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining."},{short:"instagram",name:"Instagram",url:"https://www.instagram.com/fitnessbarockbacknang/?hl=de"},{short:"facebook",name:"Facebook",url:"https://www.facebook.com/fitnessbarockbacknang-105339741217132"},{short:"youtube",name:"Youtube",url:"https://www.youtube.com/channel/UCVgBKKGKg1rWt9h1ILMAWrA"},{short:"phone",name:"Mobilnummer",url:"tel:+491777871717"}]})};const B=(0,T.Z)(M,[["render",P]]);var z=B,I={components:{NavBar:D,FooterBar:z},name:"App",data(){return{}}};const L=(0,T.Z)(I,[["render",o]]);var U=L,V=(n(9773),n(8957)),Y=n(3504);const E={dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF",primary:"#c6a966","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}},G={dark:!0,colors:{background:"#000000",surface:"#000000",primary:"#c6a966",textcolor:"#ffffff",darkgrey:"#222222",darkgreylighter:"#333333",grey:"#555555",greylighter:"#8C8C8C"}};var q=(0,V.Rd)({icons:{defaultSet:"mdi",aliases:Y.j,sets:{mdi:Y.t}},theme:{defaultTheme:"DarkTheme",options:{customProperties:!0},themes:{LightTheme:E,DarkTheme:G}}});async function N(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}var R=n(678);const J={style:{height:"auto"},class:"bg-background"};function Q(e,t,n,r,i,o){const s=(0,a.up)("HeaderTitle"),l=(0,a.up)("GymPage"),c=(0,a.up)("TrainingPage"),u=(0,a.up)("MyGym"),d=(0,a.up)("CommentSlider");return(0,a.wg)(),(0,a.iD)("div",J,[(0,a.Wm)(s),(0,a.Wm)(l),(0,a.Wm)(c),(0,a.Wm)(u),(0,a.Wm)(d)])}const X={id:"header",class:"bg-background"},$={class:"header-training"},ee=(0,a._)("span",{class:"header-text header-text-left"},"TR",-1),te=["src"],ne=(0,a._)("span",{class:"header-text header-text-right"},"NG",-1);function re(e,t,n,i,o,s){return(0,a.wg)(),(0,a.iD)("header",X,[(0,a._)("div",$,[((0,a.wg)(),(0,a.j4)(r.uT,{name:"leftHeader",key:e.animationTrigger,appear:""},{default:(0,a.w5)((()=>[ee])),_:1})),(0,a.Wm)(r.uT,{name:"imageHeader",appear:""},{default:(0,a.w5)((()=>[(0,a._)("img",{src:s.img_src,alt:"",class:"header-img"},null,8,te)])),_:1}),(0,a.Wm)(r.uT,{name:"rightHeader",appear:""},{default:(0,a.w5)((()=>[ne])),_:1})])])}var ae={computed:{img_src:()=>"./assets/images/index/bki9701.png"}};const ie=(0,T.Z)(ae,[["render",re]]);var oe=ie,se=n(3369),le=n(6824),ce=n(8521);const ue=e=>((0,a.dD)("data-v-3ab0758a"),e=e(),(0,a.Cn)(),e),de={id:"gym",class:"bg-background mb-16 mb-md-12",style:{height:"auto","min-height":"90vh",width:"100vw"}},me=ue((()=>(0,a._)("h1",{class:"mb-16 text-md-h2 text-sm-h4",style:{"text-align":"center"}}," 24h/7 geöffnet ",-1))),ge={class:"call"},he={href:"tel:+491777871717",style:{"text-decoration":"none"},class:"mb-8"},fe=(0,a.Uk)(" mdi-phone "),pe=ue((()=>(0,a._)("span",{class:"mb-8 text-primary text-lg-h4 text-sm-h6"},"0177 7871717",-1))),we=ue((()=>(0,a._)("span",{class:"calltext text-body-1"},[(0,a.Uk)(" Jetzt "),(0,a._)("a",{href:"tel:+491777871717",class:"text-greylighter",style:{"text-decoration":"none"}},"anrufen"),(0,a.Uk)(" oder per "),(0,a._)("a",{href:"https://api.whatsapp.com/send?phone=491777871717&text=Guten Tag, ich interessiere mich für ein Probetraining.",class:"text-greylighter",style:{"text-decoration":"none"},target:"_blank"},"WhatsApp"),(0,a.Uk)(" schreiben ")],-1))),_e=ue((()=>(0,a._)("div",{id:"header-container"},[(0,a._)("div",{id:"header-background"},"Fitness"),(0,a._)("h1",{id:"header"},"Du schaffst dein Ziel nur bei uns!")],-1))),ve={class:"card scroll-reveal-left pa-6 pa-md-12"},ye={class:"card-image"},be=["src"];function ke(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("section",de,[(0,a.Wm)(se.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(le.o,{justify:"center","no-gutters":""},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{sm:"12"},{default:(0,a.w5)((()=>[me])),_:1})])),_:1}),(0,a.Wm)(le.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{cols:"12",md:"4"},{default:(0,a.w5)((()=>[(0,a._)("div",ge,[(0,a._)("a",he,[(0,a.Wm)(d.t,{title:"Phone",id:"icon",size:"100px"},{default:(0,a.w5)((()=>[fe])),_:1})]),pe,we])])),_:1}),(0,a.Wm)(ce.D,{cols:"12",md:"8",id:"gymheader"},{default:(0,a.w5)((()=>[_e])),_:1})])),_:1}),(0,a.Wm)(le.o,{class:"mt-10 scroll-trigger-gympage"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.cards,((e,t)=>((0,a.wg)(),(0,a.j4)(ce.D,{cols:"12",lg:"4",align:"center",justify:"center",key:e.title,"data-index":t},{default:(0,a.w5)((()=>[(0,a._)("div",ve,[(0,a._)("div",ye,[(0,a._)("img",{src:e.image_url,alt:"",class:"overview-card"},null,8,be)]),(0,a._)("div",null,[(0,a._)("h1",null,(0,s.zw)(e.title),1),(0,a._)("p",null,(0,s.zw)(e.description),1)])])])),_:2},1032,["data-index"])))),128))])),_:1})])),_:1})])}var xe=n(8552),We=n(5073);xe.ZP.registerPlugin(We.Z),xe.ZP.core.globals("ScrollTrigger",We.Z);var Te={mounted:function(){this.scrollAnimation()},methods:{scrollAnimation(){const e=xe.ZP.timeline({scrollTrigger:{trigger:".card",start:"-50% bottom",toggleActions:"restart none restart none"}});return e.fromTo(".card",{y:.3*innerWidth,opacity:0,duration:.8,stagger:.2},{y:-.001*innerWidth,opacity:1,duration:.8,stagger:.2}),()=>{e.scrollTrigger.kill()}},get_right_path:e=>"./"+e},data(){return{cards:[{title:"Body Building",description:"Bringe dein Körper in Form",image_url:this.get_right_path("assets/images/icons/dumbell.png")},{title:"Cardio Work",description:"Bringe deine Ausdauer in Schwung",image_url:this.get_right_path("assets/images/icons/supplement.png")},{title:"Dynamo Fitness",description:"Bringe deine Kraft mit Ausdauer in Schwung",image_url:this.get_right_path("assets/images/icons/kettlebell.png")}]}}};const je=(0,T.Z)(Te,[["render",ke],["__scopeId","data-v-3ab0758a"]]);var De=je;const Ce=e=>((0,a.dD)("data-v-7d4ff121"),e=e(),(0,a.Cn)(),e),Pe={id:"training",class:"bg-background mb-16 mb-md-12",style:{height:"auto","min-height":"90vh",width:"100vw"}},Fe=Ce((()=>(0,a._)("div",{id:"header-container"},[(0,a._)("div",{id:"header-background"},"Training"),(0,a._)("h1",{id:"header"},"The best thing in training")],-1))),Ze=["src"],Ae={class:"ml-16 training-list"},Oe=["value"],Se=(0,a.Uk)(" mdi-lightning-bolt "),He={class:"text-md-h6 ml-4"};function Ke(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("section",Pe,[(0,a.Wm)(se.K,{class:"mt-8 mt-md-16"},{default:(0,a.w5)((()=>[(0,a.Wm)(le.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{cols:"12"},{default:(0,a.w5)((()=>[Fe])),_:1})])),_:1}),(0,a.Wm)(le.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{cols:"12",sm:"4",md:"6",class:"image-wrapper"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:i.training_motivation_image,alt:"Strong-Man-Image",class:"training-motivation-image"},null,8,Ze)])),_:1}),(0,a.Wm)(ce.D,{cols:"12",sm:"8",md:"6",class:"d-flex align-center"},{default:(0,a.w5)((()=>[(0,a._)("ul",Ae,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.training_motivation,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{key:t,value:e,class:"my-3 list-item-wrapper"},[(0,a.Wm)(d.t,{class:"lightningBolt text-primary"},{default:(0,a.w5)((()=>[Se])),_:1}),(0,a._)("li",He,(0,s.zw)(e),1)],8,Oe)))),128))])])),_:1})])),_:1})])),_:1})])}xe.ZP.registerPlugin(We.Z);var Me={mounted:function(){this.scrollAnimation()},methods:{scrollAnimation(){const e=xe.ZP.timeline({scrollTrigger:{trigger:".image-wrapper",start:"20% bottom",toggleActions:"restart none restart none"}});return e.fromTo(".training-motivation-image",{x:-.2*innerWidth,opacity:0,duration:.8,stagger:.2},{x:-.001*innerWidth,opacity:1,duration:.8},"start"),e.fromTo(".training-list",{x:.2*innerWidth,opacity:0,duration:.8,stagger:.2},{x:-.001*innerWidth,opacity:1,duration:.8},"start"),()=>{e.scrollTrigger.kill()}},get_right_path:e=>"./"+e},data(){return{training_motivation:["Gesundheit","mehr Vitalität","Koordination","Freunde kennenlernen","Selbstbewusstsein","Muskeln"],training_motivation_image:this.get_right_path("assets/images/index/strong1.jpg")}}};const Be=(0,T.Z)(Me,[["render",Ke],["__scopeId","data-v-7d4ff121"]]);var ze=Be;const Ie=e=>((0,a.dD)("data-v-54a489f2"),e=e(),(0,a.Cn)(),e),Le={id:"overview",class:"bg-background mb-16 mb-md-12",style:{height:"auto","min-height":"90vh",width:"100vw"}},Ue=Ie((()=>(0,a._)("h3",{class:"text-h6 text-md-h4 font-weight-bold number-counter",id:"memCounter"},"1682",-1))),Ve=Ie((()=>(0,a._)("span",{class:"text-caption text-md-h5 counter-explanation",style:{opacity:".8"}},"Mitglieder",-1))),Ye=Ie((()=>(0,a._)("h3",{class:"text-h6 text-md-h4 font-weight-bold number-counter",id:"goalCounter"},"1228",-1))),Ee=Ie((()=>(0,a._)("span",{class:"text-caption text-md-h5 counter-explanation",style:{opacity:".8"}},"Körperliches Ziel erreicht",-1))),Ge=Ie((()=>(0,a._)("div",{class:"gym_descr"},[(0,a._)("div",{id:"header-container"},[(0,a._)("div",{id:"header-background"},"Fitness"),(0,a._)("h1",{id:"header"},"Du schaffst dein Ziel nur bei uns!")]),(0,a._)("div",{class:"mt-6 mt-lg-16pt-lg-16 px-2 px-md-16 px-md-0 gym-text"},[(0,a._)("p",null," Du bist auf der Suche nach einem Fitnessstudio in gehobenem Stil und einem kompetenten Trainer an deiner Seite, der genau deine Wünsche umsetzt? "),(0,a._)("p",null,"Du möchtest auch ein gutes Preisleistungsverhältnis?"),(0,a._)("p",null,"Dann sind wir für dich das ideale Fitnessstudio!"),(0,a._)("p",null," Wir unterstützen unsere Kunden bei Gesundheitsbeschwerden, Gewichtsabnahme, Muskelaufbau, Beweglichkeit, Koordination, Ausdauer, Kraftaufbau, Selbstbewusstseinsaufbau und Stressabbau. ")])],-1))),qe={class:"card-image"},Ne=["src"];function Re(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("section",Le,[(0,a.Wm)(se.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(le.o,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{cols:"6",class:"counter-wrapper"},{default:(0,a.w5)((()=>[Ue,Ve])),_:1}),(0,a.Wm)(ce.D,{cols:"6",class:"counter-wrapper"},{default:(0,a.w5)((()=>[Ye,Ee])),_:1})])),_:1}),(0,a.Wm)(le.o,{class:"mt-16"},{default:(0,a.w5)((()=>[(0,a.Wm)(ce.D,{cols:"12",md:"7",xl:"6"},{default:(0,a.w5)((()=>[Ge])),_:1}),(0,a.Wm)(ce.D,{cols:"12",md:"5",xl:"6"},{default:(0,a.w5)((()=>[(0,a._)("div",qe,[(0,a._)("img",{src:i.gym_image,alt:"",class:"gym-image"},null,8,Ne)])])),_:1})])),_:1})])),_:1})])}xe.ZP.registerPlugin(We.Z),xe.ZP.core.globals("ScrollTrigger",We.Z);var Je={mounted:function(){this.scrollAnimation(),document.addEventListener("scroll",(function(){let e=document.getElementById("memCounter"),t=document.getElementById("goalCounter"),n=e.offsetTop,r=window.scrollY,a=window.screen.height;var i=!1;if(n-a<r&&r<n&&(i=!0),!this.wasVisible&&i)var o=parseInt(e.innerHTML),s=parseInt(t.innerHTML),l=0,c=0,u=setInterval((function(){l+=2,e.innerHTML=l,l===o&&clearInterval(u)}),1),d=setInterval((function(){c+=2,t.innerHTML=c,c===s&&clearInterval(d)}),1);this.wasVisible=i}))},methods:{scrollAnimation(){const e=xe.ZP.timeline({scrollTrigger:{trigger:".image-wrapper",start:"20% bottom",toggleActions:"restart none restart none"}});return e.fromTo(".training-motivation-image",{x:-.2*innerWidth,opacity:0,duration:.8,stagger:.2},{x:-.001*innerWidth,opacity:1,duration:.8},"start"),e.fromTo(".training-list",{x:.2*innerWidth,opacity:0,duration:.8,stagger:.2},{x:-.001*innerWidth,opacity:1,duration:.8},"start"),()=>{e.scrollTrigger.kill()}},get_right_path:e=>"./"+e},data(){return{gym_image:this.get_right_path("assets/images/index/our-gym.png"),wasVisible:!1}}};const Qe=(0,T.Z)(Je,[["render",Re],["__scopeId","data-v-54a489f2"]]);var Xe=Qe,$e=n(5107),et=n(6573),tt=n(4286);const nt=e=>((0,a.dD)("data-v-70e56059"),e=e(),(0,a.Cn)(),e),rt={id:"training",class:"bg-background mb-16 mb-md-12",style:{height:"auto","min-height":"90vh",width:"100vw"}},at={class:"card-content"},it={class:"user"},ot={class:"image"},st=["src"],lt={class:"user-data"},ct={class:"name"},ut=nt((()=>(0,a._)("div",{class:"rating"},null,-1)));function dt(e,t,n,r,i,o){return(0,a.wg)(),(0,a.iD)("section",rt,[(0,a.Wm)($e.k,{height:"400",style:{width:"60%",margin:"auto"},"hide-delimiter-background":"","show-arrows":"hover",cycle:"",interval:"6000"},{prev:(0,a.w5)((({props:e})=>[(0,a.Wm)(c.T,{variant:"plain",color:"primary",onClick:e.onClick,icon:"mdi-chevron-left",style:{"font-size":"5vh"}},null,8,["onClick"])])),next:(0,a.w5)((({props:e})=>[(0,a.Wm)(c.T,{variant:"plain",color:"primary",onClick:e.onClick,icon:"mdi-chevron-right",style:{"font-size":"5vh"}},null,8,["onClick"])])),default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.comments,((e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(t+1)%o.columns===1||1===o.columns?((0,a.wg)(),(0,a.j4)(et.f,{key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(le.o,{class:"flex-nowrap",style:{height:"100%"}},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.columns,((e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[+t+n<i.comments.length?((0,a.wg)(),(0,a.j4)(ce.D,{key:n},{default:(0,a.w5)((()=>[+t+n<i.comments.length?((0,a.wg)(),(0,a.j4)(tt.C,{key:0,height:"100%"},{default:(0,a.w5)((()=>[(0,a.Wm)(le.o,{class:"fill-height",align:"center",justify:"center"},{default:(0,a.w5)((()=>[(0,a._)("div",at,[(0,a._)("div",it,[(0,a._)("div",ot,[(0,a._)("img",{src:i.comments[t+e-1][0],alt:"",class:"profile-img"},null,8,st)]),(0,a._)("div",lt,[(0,a._)("span",ct,(0,s.zw)(i.comments[t+e-1][1]),1),ut,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.comments[t+e-1][2],(e=>((0,a.wg)(),(0,a.j4)(d.t,{key:e,icon:"mdi-"+e,class:"rating-icon"},null,8,["icon"])))),128))])]),(0,a._)("span",null,(0,s.zw)(i.comments[t+e-1][3]),1)])])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0)])),_:2},1024)):(0,a.kq)("",!0)],64)))),256))])),_:2},1024)])),_:2},1024)):(0,a.kq)("",!0)],64)))),256))])),_:1})])}var mt={data(){return{comments:[["assets/images/index/av4.jpg","Alexander Milonakis",["star","star","star","star","star-half-full"],"Läuft"],["assets/images/index/av1.jpg","Christina Heppchen",["star","star","star","star","star"],"Viel Platz zum trainieren. Top Trainingsplan bekommen :)"],["assets/images/index/ad9.jpg","Marion Elster",["star","star","star","star","star-outline"],"Hammer Cool hier. Fühle mich sehr wohl hier. Auch schon 3kg abgenommen"]]}},computed:{columns(){return window.screen.width>1300?2:1},methods:{get_right_path:e=>"./"+e}}};const gt=(0,T.Z)(mt,[["render",dt],["__scopeId","data-v-70e56059"]]);var ht=gt,ft={components:{HeaderTitle:oe,GymPage:De,TrainingPage:ze,MyGym:Xe,CommentSlider:ht}};const pt=(0,T.Z)(ft,[["render",Q]]);var wt=pt,_t=[];_t.push({path:"/",redirect:{name:"Home"}}),_t.push({path:"/fbb/",name:"Header",component:wt});const vt=(0,R.p7)({history:(0,R.PO)(""),routes:_t});var yt=vt;N(),(0,r.ri)(U).use(q).use(yt).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){o[e]=function(){return r[e]}}));return o["default"]=function(){return r},n.d(i,o),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.a33e8c01.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vuetify_3_test:";n.l=function(r,a,i,o){if(e[r])e[r].push(a);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(t),s=new Error,l=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,a[1](s)}};n.l(o,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var u=l(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self["webpackChunkvuetify_3_test"]=self["webpackChunkvuetify_3_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8192)}));r=n.O(r)})();
//# sourceMappingURL=app.ce3e644b.js.map