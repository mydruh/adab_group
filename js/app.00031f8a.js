(function(){"use strict";var e={6300:function(e,i,s){var a=s(5130),t=s(6768);function o(e,i,s,a,o,l){const n=(0,t.g2)("NavBar"),r=(0,t.g2)("router-view");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(n),(0,t.bF)(r)])}const l=(0,t.Fv)('<div class="site-mobile-menu site-navbar-target"><div class="site-mobile-menu-header"><div class="site-mobile-menu-close mt-3"><span class="icon-close2 js-menu-toggle"></span></div></div><div class="site-mobile-menu-body"></div></div>',1),n={class:"site-navbar py-3 js-site-navbar site-navbar-target",role:"banner",id:"site-navbar"},r={class:"container"},c={class:"row align-items-center"},d=(0,t.Lk)("div",{class:"col-11 col-xl-3 site-logo"},[(0,t.Lk)("h1",{class:"mb-0"},[(0,t.Lk)("a",{href:"index.html",class:"text-white h2 mb-0"},"ADAB GROUP")])],-1),u={class:"col-12 col-md-9 d-none d-xl-block"},m={class:"site-navigation position-relative text-right",role:"navigation"},p={class:"site-menu js-clone-nav mx-auto d-none d-lg-block"},v=(0,t.Fv)('<li><a href="#section-home" class="nav-link active">Главная</a></li><li class="has-children"><a href="#section-about" class="nav-link">О нас</a><ul class="dropdown"><li><a href="#section-how-it-works" class="nav-link">Что мы делаем</a></li><li><a href="#section-our-team" class="nav-link">Наша команда</a></li></ul></li>',2),b=(0,t.Lk)("div",{class:"d-inline-block d-xl-none ml-md-0 mr-auto py-3",style:{position:"relative",top:"3px"}},[(0,t.Lk)("a",{href:"#",class:"site-menu-toggle js-menu-toggle active",id:"site-init"},[(0,t.Lk)("span",{class:"icon-menu h3"})])],-1);function g(e,i,s,a,o,g){const f=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",null,[l,(0,t.Lk)("header",n,[(0,t.Lk)("div",r,[(0,t.Lk)("div",c,[d,(0,t.Lk)("div",u,[(0,t.Lk)("nav",m,[(0,t.Lk)("ul",p,[v,(0,t.Lk)("li",null,[(0,t.Lk)("a",{onClick:i[0]||(i[0]=e=>g.scrollToAnchor("section-services")),class:"nav-link"},"Наши сервисы")]),(0,t.Lk)("li",null,[(0,t.bF)(f,{to:{path:"/",hash:"#overlay_video"},class:"nav-link"},{default:(0,t.k6)((()=>[(0,t.eW)("Видео")])),_:1})]),(0,t.Lk)("li",null,[(0,t.bF)(f,{href:"#section-contact",class:"nav-link"},{default:(0,t.k6)((()=>[(0,t.eW)("Контакты")])),_:1})])])])]),b])])])])}var f={name:"App",components:{},mounted(){document.dispatchEvent(new Event("navbar-mounted"))},methods:{scrollToAnchor(e){const i=document.getElementById(e);i&&i.scrollIntoView({behavior:"smooth"})}}},h=s(1241);const k=(0,h.A)(f,[["render",g]]);var w=k,y={name:"App",components:{NavBar:w}};const x=(0,h.A)(y,[["render",o]]);var L=x,q=s(1387);const j={class:"site-blocks-cover overlay",style:{"background-image":"url(images/IntroBanner.jpeg)"},"data-aos":"fade","data-stellar-background-ratio":"0.5",id:"section-home"},C={class:"container"},O={class:"row align-items-center justify-content-center text-center"},A={class:"col-md-8","data-aos":"fade-up","data-aos-delay":"400"},E=(0,t.Lk)("h1",{class:"text-white font-weight-light text-uppercase font-weight-bold","data-aos":"fade-up"},"Adab Business",-1),_=(0,t.Lk)("p",{class:"mb-5","data-aos":"fade-up","data-aos-delay":"100"},"Помощник в бизнесе",-1),I=(0,t.Lk)("span",{class:"icon-play"},null,-1),M=[I],F=(0,t.Lk)("p",{"data-aos":"fade-up","data-aos-delay":"200"},[(0,t.Lk)("a",{href:"#section-contact",class:"btn btn-primary py-3 px-5 text-white"},"Оставить заявку")],-1),V=(0,t.Fv)('<div class="site-section bg-image overlay" style="background-image:url(&#39;images/workersBg.jpeg&#39;);" id="section-how-it-works"><div class="container"><div class="row justify-content-center mb-5"><div class="col-md-7 text-center border-primary"><h2 class="font-weight-light text-white" data-aos="fade">Что мы делаем</h2></div></div><div class="row"><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100"><div class="how-it-work-item"><span class="number">1</span><div class="how-it-work-body"><h2>Помощь</h2><p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p><ul class="ul-check list-unstyled success"><li class="text-white">Error minus sint nobis dolor</li><li class="text-white">Voluptatum porro expedita labore esse</li><li class="text-white">Voluptas unde sit pariatur earum</li></ul></div></div></div><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200"><div class="how-it-work-item"><span class="number">2</span><div class="how-it-work-body"><h2>Поддержка</h2><p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p><ul class="ul-check list-unstyled success"><li class="text-white">Error minus sint nobis dolor</li><li class="text-white">Voluptatum porro expedita labore esse</li><li class="text-white">Voluptas unde sit pariatur earum</li></ul></div></div></div><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300"><div class="how-it-work-item"><span class="number">3</span><div class="how-it-work-body"><h2>Наставничество</h2><p class="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.</p><ul class="ul-check list-unstyled success"><li class="text-white">Error minus sint nobis dolor</li><li class="text-white">Voluptatum porro expedita labore esse</li><li class="text-white">Voluptas unde sit pariatur earum</li></ul></div></div></div></div></div></div>',1),B=(0,t.Fv)('<div class="site-section bg-light" id="section-services"><div class="container"><div class="row justify-content-center mb-5" data-aos="fade-up"><div class="col-md-7 text-center border-primary"><h2 class="mb-0 text-primary">Наши сервисы</h2><p class="color-black-opacity-5">Lorem ipsum dolor sit amet.</p></div></div><div class="row align-items-stretch"><div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up"><div class="unit-4 d-flex"><div class="unit-4-icon mr-4"><span class="text-primary flaticon-plane"></span></div><div><h3>Сервис 1</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><p><a href="#">Подробнее</a></p></div></div></div><div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100"><div class="unit-4 d-flex"><div class="unit-4-icon mr-4"><span class="text-primary flaticon-boat-ship"></span></div><div><h3>Сервис 2</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><p><a href="#">Подробнее</a></p></div></div></div><div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200"><div class="unit-4 d-flex"><div class="unit-4-icon mr-4"><span class="text-primary flaticon-truck"></span></div><div><h3>Сервис 3</h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p><p><a href="#">Подробнее</a></p></div></div></div></div></div></div><div class="site-section border-bottom"><div class="container"><div class="row justify-content-center mb-5"><div class="col-md-7 text-center border-primary"><h2 class="font-weight-light text-primary">Отзывы</h2></div></div><div class="slide-one-item home-slider owl-carousel"><div><div class="testimonial"><figure class="mb-4"><img src="images/person_1.jpg" alt="Image" class="img-fluid mb-3"></figure><blockquote><p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p><p class="author"> — Дональд Трамп</p></blockquote></div></div><div><div class="testimonial"><figure class="mb-4"><img src="images/person_2.jpg" alt="Image" class="img-fluid mb-3"></figure><blockquote><p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p><p class="author"> — Джонни Депп</p></blockquote></div></div><div><div class="testimonial"><figure class="mb-4"><img src="images/person_4.jpg" alt="Image" class="img-fluid mb-3"></figure><blockquote><p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p><p class="author"> — Билл Гейтс</p></blockquote></div></div><div><div class="testimonial"><figure class="mb-4"><img src="images/person_5.jpg" alt="Image" class="img-fluid mb-3"></figure><blockquote><p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.”</p><p class="author"> — Марк Цукерберг</p></blockquote></div></div></div></div></div><div class="site-section bg-light" id="section-contact"><div class="container"><div class="row justify-content-center mb-5"><div class="col-md-7 text-center border-primary"><h2 class="font-weight-light text-primary">Форма заявки</h2><p class="color-black-opacity-5">Свяжись с нами</p></div></div><div class="row"><div class="col-md-7 mb-5"><form action="#" class="p-5 bg-white"><div class="row form-group"><div class="col-md-12 mb-md-0"><label class="text-black" for="fname">Имя</label><input type="text" id="fname" class="form-control"></div></div><div class="row form-group"><div class="col-md-12"><label class="text-black" for="email">Электронная почта</label><input type="email" id="email" class="form-control"></div></div><div class="row form-group"><div class="col-md-12"><label class="text-black" for="subject">Тема вопроса</label><input type="subject" id="subject" class="form-control"></div></div><div class="row form-group"><div class="col-md-12"><label class="text-black" for="message">Сообщение</label><textarea name="message" id="message" cols="30" rows="7" class="form-control"></textarea></div></div><div class="row form-group"><div class="col-md-12"><input type="submit" value="Отправить" class="btn btn-primary py-2 px-4 text-white"></div></div></form></div><div class="col-md-5"><div class="p-4 mb-3 bg-white"><p class="mb-0 font-weight-bold">Адрес</p><p class="mb-4">Улица пушкина</p><p class="mb-0 font-weight-bold">Номер телефона</p><p class="mb-4"><a href="#">+7 777 7777</a></p><p class="mb-0 font-weight-bold">Электронная почта</p><p class="mb-0"><a href="#">adab@group.com</a></p></div></div></div></div></div>',3);function S(e,i,s,a,o,l){const n=(0,t.g2)("AboutSection"),r=(0,t.g2)("TeamSection"),c=(0,t.g2)("ModalVideo");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",j,[(0,t.Lk)("div",C,[(0,t.Lk)("div",O,[(0,t.Lk)("div",A,[E,_,(0,t.Lk)("a",{href:"#",onClick:i[0]||(i[0]=(...e)=>l.openModal&&l.openModal(...e)),class:"play-single-big mb-5 d-inline-block"},M),F])])])]),(0,t.bF)(n),V,(0,t.bF)(r),B,(0,t.bF)(c,{isOpen:o.isModalOpen,videoUrl:o.videoUrl,onClose:i[1]||(i[1]=e=>o.isModalOpen=!1)},null,8,["isOpen","videoUrl"])])}const T={class:"site-section",id:"section-about"},U=(0,t.Fv)('<div class="container"><div class="row mb-5"><div class="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade-up" data-aos-delay="100"><img src="images/workersImg.webp" alt="Image" class="img-fluid rounded"></div><div class="col-md-6 order-md-1" data-aos="fade-up"><div class="text-left pb-1 border-primary mb-4"><h2 class="text-primary">Кто мы?</h2></div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti reprehenderit animi est eaque corporis! Nisi, asperiores nam amet doloribus, soluta ut reiciendis. Consequatur modi rem, vero eos ipsam voluptas.</p><p class="mb-5">Error minus sint nobis dolor laborum architecto, quaerat. Voluptatum porro expedita labore esse velit veniam laborum quo obcaecati similique iusto delectus quasi!</p><ul class="ul-check list-unstyled success"><li>Error minus sint nobis dolor</li><li>Voluptatum porro expedita labore esse</li><li>Voluptas unde sit pariatur earum</li></ul></div></div></div>',1),X=[U];function N(e,i,s,a,o,l){return(0,t.uX)(),(0,t.CE)("div",T,X)}var P={name:"AboutSection"};const D=(0,h.A)(P,[["render",N]]);var W=D;const $={class:"site-section border-bottom",id:"section-our-team"},G=(0,t.Fv)('<div class="container"><div class="row justify-content-center mb-5"><div class="col-md-7 text-center border-primary"><h2 class="font-weight-light text-primary" data-aos="fade">Наша команда</h2></div></div><div class="row"><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100"><div class="person"><img src="images/person_1.jpg" alt="Image" class="img-fluid rounded mb-5 w-75 rounded-circle"><h3>Владимир Павлов</h3><p class="position text-muted">Президент</p><p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p><ul class="ul-social-circle"><li><a href="#"><span class="icon-facebook"></span></a></li><li><a href="#"><span class="icon-twitter"></span></a></li><li><a href="#"><span class="icon-linkedin"></span></a></li><li><a href="#"><span class="icon-instagram"></span></a></li></ul></div></div><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200"><div class="person"><img src="images/person_2.jpg" alt="Image" class="img-fluid rounded mb-5 w-75 rounded-circle"><h3>Ирина Кайратовна</h3><p class="position text-muted">Рекрутер</p><p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p><ul class="ul-social-circle"><li><a href="#"><span class="icon-facebook"></span></a></li><li><a href="#"><span class="icon-twitter"></span></a></li><li><a href="#"><span class="icon-linkedin"></span></a></li><li><a href="#"><span class="icon-instagram"></span></a></li></ul></div></div><div class="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300"><div class="person"><img src="images/person_4.jpg" alt="Image" class="img-fluid rounded mb-5 w-75 rounded-circle"><h3>Маратбек Маратуглы</h3><p class="position text-muted">Маркетолог</p><p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p><ul class="ul-social-circle"><li><a href="#"><span class="icon-facebook"></span></a></li><li><a href="#"><span class="icon-twitter"></span></a></li><li><a href="#"><span class="icon-linkedin"></span></a></li><li><a href="#"><span class="icon-instagram"></span></a></li></ul></div></div></div></div>',1),H=[G];function Q(e,i,s,a,o,l){return(0,t.uX)(),(0,t.CE)("div",$,H)}var R={name:"TeamSection"};const Y=(0,h.A)(R,[["render",Q]]);var z=Y;const J={controls:"",autoplay:""},K=["src"];function Z(e,i,s,o,l,n){return s.isOpen?((0,t.uX)(),(0,t.CE)("div",{key:0,class:"modal-overlay",onClick:i[2]||(i[2]=(...e)=>n.closeModal&&n.closeModal(...e))},[(0,t.Lk)("div",{class:"modal-content",onClick:i[1]||(i[1]=(0,a.D$)((()=>{}),["stop"]))},[(0,t.Lk)("button",{class:"close-button",onClick:i[0]||(i[0]=(...e)=>n.closeModal&&n.closeModal(...e))},"X"),(0,t.Lk)("video",J,[(0,t.Lk)("source",{src:s.videoUrl,type:"video/mp4"},null,8,K),(0,t.eW)(" Your browser does not support the video tag. ")])])])):(0,t.Q3)("",!0)}var ee={props:{isOpen:{type:Boolean,required:!0},videoUrl:{type:String,required:!0}},methods:{closeModal(){this.$emit("close")}}};const ie=(0,h.A)(ee,[["render",Z],["__scopeId","data-v-e117b65e"]]);var se=ie,ae={name:"HomeView",data(){return{isModalOpen:!1,videoUrl:"https://www.w3schools.com/html/mov_bbb.mp4"}},components:{AboutSection:W,TeamSection:z,ModalVideo:se},methods:{openModal(){this.isModalOpen=!0}}};const te=(0,h.A)(ae,[["render",S]]);var oe=te;const le=[{path:"/",redirect:"/home"},{path:"/home",component:oe}],ne=(0,q.aE)({history:(0,q.Bt)(),routes:le,scrollBehavior(e,i,s){return s||(e.hash?{el:e.hash,behavior:"smooth"}:{top:0})}});var re=ne;const ce=(0,a.Ef)(L);ce.use(re),ce.mount("#app"),console.log("space: production"),document.addEventListener("DOMContentLoaded",(()=>{document.dispatchEvent(new Event("vue-mounted"))}))}},i={};function s(a){var t=i[a];if(void 0!==t)return t.exports;var o=i[a]={exports:{}};return e[a].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(i,a,t,o){if(!a){var l=1/0;for(d=0;d<e.length;d++){a=e[d][0],t=e[d][1],o=e[d][2];for(var n=!0,r=0;r<a.length;r++)(!1&o||l>=o)&&Object.keys(s.O).every((function(e){return s.O[e](a[r])}))?a.splice(r--,1):(n=!1,o<l&&(l=o));if(n){e.splice(d--,1);var c=t();void 0!==c&&(i=c)}}return i}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,t,o]}}(),function(){s.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(i,{a:i}),i}}(),function(){s.d=function(e,i){for(var a in i)s.o(i,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:i[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){var e={524:0};s.O.j=function(i){return 0===e[i]};var i=function(i,a){var t,o,l=a[0],n=a[1],r=a[2],c=0;if(l.some((function(i){return 0!==e[i]}))){for(t in n)s.o(n,t)&&(s.m[t]=n[t]);if(r)var d=r(s)}for(i&&i(a);c<l.length;c++)o=l[c],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(d)},a=self["webpackChunkadab_group"]=self["webpackChunkadab_group"]||[];a.forEach(i.bind(null,0)),a.push=i.bind(null,a.push.bind(a))}();var a=s.O(void 0,[504],(function(){return s(6300)}));a=s.O(a)})();
//# sourceMappingURL=app.00031f8a.js.map