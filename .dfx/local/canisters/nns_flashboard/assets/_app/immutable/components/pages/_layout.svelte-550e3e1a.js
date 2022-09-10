import{S as F,i as A,s as T,l as _,a as b,m as C,n as m,h as f,c as E,p as v,C as G,b as N,D as u,E as I,B as k,F as S,G as P,H as j,I as y,J,K,r as R,L as Z,u as Q,M as W,w as D,x as H,y as M,N as X,O as Y,P as t2,f as x,t as B,z as V}from"../../chunks/index-b5964bb2.js";import{n as z}from"../../chunks/Stores-ffcd842c.js";import{p as e2}from"../../chunks/stores-3715edcd.js";import"../../chunks/index-0d329864.js";import"../../chunks/QuicklookNeurons-f76aabb9.js";import"../../chunks/neurons-a39e9c22.js";import"../../chunks/index-428378a3.js";function s2(i){let t,e,s,l,c,g,d,r,n,a,o;return{c(){t=_("header"),e=_("nav"),s=_("button"),l=_("span"),c=_("span"),g=b(),d=_("div"),r=_("img"),this.h()},l(p){t=C(p,"HEADER",{class:!0});var h=m(t);e=C(h,"NAV",{class:!0});var w=m(e);s=C(w,"BUTTON",{"aria-label":!0,class:!0});var L=m(s);l=C(L,"SPAN",{class:!0});var $=m(l);c=C($,"SPAN",{class:!0}),m(c).forEach(f),$.forEach(f),L.forEach(f),g=E(w),d=C(w,"DIV",{});var O=m(d);r=C(O,"IMG",{src:!0,alt:!0,class:!0}),O.forEach(f),w.forEach(f),h.forEach(f),this.h()},h(){v(c,"class","svelte-1vdzck0"),v(l,"class","svelte-1vdzck0"),v(s,"aria-label","Menu"),v(s,"class","svelte-1vdzck0"),G(r.src,n="/nns-logo.png")||v(r,"src",n),v(r,"alt","NNS with Dfinity Foundation logo"),v(r,"class","svelte-1vdzck0"),v(e,"class","spread std-padding-parent"),v(t,"class","top-nav sticky svelte-1vdzck0")},m(p,h){N(p,t,h),u(t,e),u(e,s),u(s,l),u(l,c),u(e,g),u(e,d),u(d,r),a||(o=I(s,"click",i[1]),a=!0)},p:k,i:k,o:k,d(p){p&&f(t),a=!1,o()}}}function a2(i,t,e){let s;return S(i,z,c=>e(0,s=c)),[s,()=>z.set(!s)]}class l2 extends F{constructor(t){super(),A(this,t,a2,s2,T,{})}}function U(i,t,e){const s=i.slice();return s[5]=t[e],s}function q(i){let t,e,s,l=i[5].svg+"",c,g,d=i[5].title+"",r,n,a;return{c(){t=_("li"),e=_("a"),s=new K(!1),c=b(),g=_("span"),r=R(d),this.h()},l(o){t=C(o,"LI",{});var p=m(t);e=C(p,"A",{href:!0,class:!0});var h=m(e);s=Z(h,!1),c=E(h),g=C(h,"SPAN",{});var w=m(g);r=Q(w,d),w.forEach(f),h.forEach(f),p.forEach(f),this.h()},h(){s.a=c,v(e,"href",i[5].path),v(e,"class","svelte-5jfe6k"),y(e,"active",i[1].url.pathname===i[5].path)},m(o,p){N(o,t,p),u(t,e),s.m(l,e),u(e,c),u(e,g),u(g,r),n||(a=I(e,"click",i[3]),n=!0)},p(o,p){p&6&&y(e,"active",o[1].url.pathname===o[5].path)},d(o){o&&f(t),n=!1,a()}}}function n2(i){let t,e,s,l,c,g,d,r,n=i[2],a=[];for(let o=0;o<n.length;o+=1)a[o]=q(U(i,n,o));return{c(){t=_("ul");for(let o=0;o<a.length;o+=1)a[o].c();e=b(),s=_("li"),l=_("button"),c=P("svg"),g=P("path"),this.h()},l(o){t=C(o,"UL",{class:!0});var p=m(t);for(let $=0;$<a.length;$+=1)a[$].l(p);e=E(p),s=C(p,"LI",{class:!0});var h=m(s);l=C(h,"BUTTON",{class:!0,type:!0,name:!0});var w=m(l);c=j(w,"svg",{width:!0,height:!0,version:!0,viewBox:!0,xmlns:!0,class:!0});var L=m(c);g=j(L,"path",{d:!0}),m(g).forEach(f),L.forEach(f),w.forEach(f),h.forEach(f),p.forEach(f),this.h()},h(){v(g,"d","m54.375 50 29.062-29.062c1.25-1.25 1.25-3.125 0-4.375s-3.125-1.25-4.375 0l-29.062 29.062-29.062-29.062c-1.25-1.25-3.125-1.25-4.375 0s-1.25 3.125 0 4.375l29.062 29.062-29.062 29.062c-1.25 1.25-1.25 3.125 0 4.375 0.625 0.625 1.25 0.9375 2.1875 0.9375s1.5625-0.3125 2.1875-0.9375l29.062-29.062 29.062 29.062c0.625 0.625 1.5625 0.9375 2.1875 0.9375s1.5625-0.3125 2.1875-0.9375c1.25-1.25 1.25-3.125 0-4.375z"),v(c,"width","32"),v(c,"height","32"),v(c,"version","1.1"),v(c,"viewBox","0 0 100 100"),v(c,"xmlns","http://www.w3.org/2000/svg"),v(c,"class","svelte-5jfe6k"),v(l,"class","center-all-single svelte-5jfe6k"),v(l,"type","button"),v(l,"name","button"),v(s,"class","drawer-nav__close svelte-5jfe6k"),v(t,"class","[ column reset-list ] [ drawer-nav ] svelte-5jfe6k"),y(t,"active",i[0])},m(o,p){N(o,t,p);for(let h=0;h<a.length;h+=1)a[h].m(t,null);u(t,e),u(t,s),u(s,l),u(l,c),u(c,g),d||(r=I(l,"click",i[4]),d=!0)},p(o,[p]){if(p&14){n=o[2];let h;for(h=0;h<n.length;h+=1){const w=U(o,n,h);a[h]?a[h].p(w,p):(a[h]=q(w),a[h].c(),a[h].m(t,e))}for(;h<a.length;h+=1)a[h].d(1);a.length=n.length}p&1&&y(t,"active",o[0])},i:k,o:k,d(o){o&&f(t),J(a,o),d=!1,r()}}}function c2(i,t,e){let s,l;return S(i,z,r=>e(0,s=r)),S(i,e2,r=>e(1,l=r)),[s,l,[{title:"Home",path:"/",svg:'<svg class="fill-magenta" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m89.902 28.289-33.332-23.332v-0.003906c-3.9492-2.75-9.1914-2.75-13.141 0l-33.332 23.332v0.003906c-3.0664 2.1445-4.8906 5.6484-4.8906 9.3867v45.656c0.007813 6.3281 5.1328 11.453 11.461 11.461h10.414c6.3281-0.007813 11.453-5.1328 11.461-11.461v-14.582c0-1.7266 1.3984-3.125 3.125-3.125h16.668-0.003907c1.7266 0 3.125 1.3984 3.125 3.125v14.582c0.007813 6.3281 5.1328 11.453 11.461 11.461h10.414c6.3281-0.007813 11.453-5.1328 11.461-11.461v-45.656c0-3.7383-1.8242-7.2422-4.8906-9.3867zm-1.3594 55.043c-0.007813 2.875-2.3359 5.2031-5.2109 5.2109h-10.414c-2.875-0.007813-5.2031-2.3359-5.2109-5.2109v-14.582c-0.003906-5.1758-4.1992-9.3711-9.375-9.375h-16.664c-5.1758 0.003906-9.3711 4.1992-9.375 9.375v14.582c-0.007813 2.875-2.3359 5.2031-5.2109 5.2109h-10.414c-2.875-0.007813-5.2031-2.3359-5.2109-5.2109v-45.656c0-1.7031 0.82812-3.2969 2.2227-4.2734l33.332-23.332c1.7969-1.25 4.1797-1.25 5.9766 0l33.332 23.332c1.3945 0.97656 2.2227 2.5703 2.2227 4.2734z"/></svg>'},{title:"Accounts",path:"/accounts",svg:'<svg class="fill-lightblue" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m86.398 11h-71.398c-5.8008 0-10.801 5-10.801 10.801v56.301c0 5.8984 5 10.898 10.801 10.898h71.301c5.8984 0 10.801-5 10.801-10.801v-56.398c0.097657-5.8008-4.9023-10.801-10.703-10.801zm-75.598 10.801c0-2.3984 1.8008-4.1992 4.1992-4.1992h71.301c2.3984 0 4.1992 1.8008 4.1992 4.1992v9.3008h-19.199c-13.5 0-14.602 8.3008-14.602 16.801v3c0 8.5 1.1016 16.801 14.602 16.801h19.199v10.398c0 2.3008-1.8984 4.1992-4.1992 4.1992h-71.301c-2.3984 0-4.1992-1.8008-4.1992-4.1992zm52.598 26.098c0-8.3984 0.69922-10.199 7.8984-10.199h19.199v23.398l-19.195 0.003906c-7.3008 0-7.8984-1.6992-7.8984-10.199z"/><path d="m73.199 54.898c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5-5.5 2.5-5.5 5.5c0 3.1016 2.5 5.5 5.5 5.5z"/></g></svg>'},{title:"Neurons",path:"/neurons",svg:'<svg class="fill-orange" viewBox="0 0 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="nns_flashboard_home" transform="translate(-225.000000, -208.000000)" fill="#ffffff" fill-rule="nonzero"><g id="hero" transform="translate(-115.000000, -74.000000)"><g id="content" transform="translate(162.000000, 168.000000)"><g id="btn-row" transform="translate(0.000000, 97.000000)"><g id="send" transform="translate(160.000000, 0.000000)"><path d="M35.8910762,26.3491399 C35.5592239,26.7034697 35.1167541,26.9462971 34.6302144,26.9462971 L32.1740647,26.9462971 C31.8197349,26.9462971 31.5103601,26.7250622 31.3772652,26.4156874 L31.3547966,26.371613 C31.2217105,26.0397606 31.2882535,25.6413609 31.5535628,25.376056 L33.3234419,23.6061769 C33.6552942,23.2743246 34.097764,23.1412297 34.5627112,23.1637072 C35.1823458,23.2077816 35.8019805,22.9424723 36.1994953,22.3669076 C36.5978951,21.7697504 36.5978951,20.9729509 36.1994953,20.3757937 C35.5357907,19.4027142 34.2083814,19.3136893 33.4114934,20.0880114 C33.0130936,20.4864111 32.8584062,21.0170209 32.9024761,21.5260381 C32.9465506,21.9909853 32.7477843,22.4334551 32.4159364,22.7653074 L30.6685348,24.512709 C30.4248225,24.7564213 30.0489002,24.8445613 29.7170478,24.6898695 L29.6729734,24.6674008 C29.3411211,24.5343148 29.1198862,24.2024536 29.1198862,23.8265313 L29.1198862,21.3929476 C29.1198862,20.9064079 29.3411211,20.4639381 29.7170434,20.1320858 C30.1595132,19.733686 30.424818,19.1140514 30.2926081,18.4287542 C30.159522,17.7209796 29.5848334,17.1678923 28.8986513,17.0347974 C27.7484069,16.8135626 26.7303725,17.6760246 26.7303725,18.8046765 C26.7303725,19.3577637 26.9740849,19.8443034 27.3715997,20.1761558 C27.7259295,20.4639381 27.9246869,20.9280004 27.9246869,21.3929476 L27.9246869,23.8265313 C27.9246869,24.2024536 27.703452,24.5343059 27.3715997,24.6674008 L27.3491311,24.6674008 C27.0172788,24.8004869 26.618879,24.7339439 26.3535741,24.4686346 L24.5836951,22.6987555 C24.2518427,22.3669032 24.1187478,21.9244334 24.1412253,21.4594862 C24.1852997,20.8398516 23.9199904,20.2202169 23.3444257,19.8227021 C22.7472686,19.4243023 21.950469,19.4243023 21.3533118,19.8227021 C20.3802323,20.4864067 20.2912074,21.813816 21.0655295,22.610704 C21.4639293,23.0091038 21.994539,23.1637913 22.5035562,23.1197213 C22.9685034,23.0756469 23.4109732,23.2744131 23.7428255,23.606261 L25.4686346,25.3320701 C25.7339395,25.5973749 25.8004869,25.9957747 25.6674008,26.327627 L25.6674008,26.3500957 C25.5343148,26.681948 25.2024536,26.9031829 24.8265313,26.9031829 L22.3929476,26.9031829 C21.9064079,26.9031829 21.4639381,26.681948 21.1320858,26.3060257 C20.733686,25.8635559 20.1140514,25.598251 19.4287542,25.730461 C18.7209796,25.8635471 18.1678923,26.4382356 18.0347974,27.1244177 C17.8135626,28.2746621 18.6760246,29.2926966 19.8046765,29.2926966 C20.3577637,29.2926966 20.8443034,29.0489842 21.1761558,28.6514694 C21.4639381,28.2971396 21.9280004,28.0983822 22.3929476,28.0983822 L24.8490973,28.0983822 C25.2034271,28.0983822 25.5128019,28.3196171 25.6458968,28.6289919 L25.6683654,28.695535 C25.8014515,29.0273873 25.7349085,29.3817171 25.491205,29.6470219 L23.6988485,31.4393784 C23.3669961,31.7712308 22.9245264,31.9043257 22.4595791,31.8818482 C21.8399445,31.8377738 21.2203098,32.1030831 20.822795,32.6786478 C20.4243952,33.2758049 20.4243952,34.0726045 20.822795,34.6697617 C21.4864996,35.6428412 22.8139089,35.7318661 23.610797,34.957544 C24.0091967,34.5591442 24.1638842,34.0285345 24.1198142,33.5195173 C24.0757398,33.0545701 24.274506,32.6121003 24.6063539,32.280248 L26.3537555,30.5328464 C26.5974679,30.289134 26.9733902,30.2009941 27.3052425,30.3556859 L27.3493169,30.3781545 C27.6811692,30.5112406 27.9024041,30.8431018 27.9024041,31.2190241 L27.9024041,33.6526078 C27.9024041,34.1391475 27.6811692,34.5816173 27.3052469,34.9134696 C26.8627772,35.3118694 26.5974723,35.931504 26.7296823,36.6168012 C26.8627683,37.3245758 27.4374569,37.877663 28.123639,38.0107579 C29.2738834,38.2319928 30.2919178,37.3695308 30.2919178,36.2408789 C30.2919178,35.6877917 30.0482055,35.2012519 29.6506906,34.8693996 C29.2963609,34.5816173 29.0976034,34.117555 29.0976034,33.6526078 L29.0993317,31.1940245 C29.0993317,30.8396947 29.3205666,30.5303199 29.6299415,30.397225 L29.6740159,30.3747564 C30.0058682,30.2416703 30.404268,30.3082133 30.6695728,30.5735226 L32.4394519,32.3434017 C32.7713042,32.675254 32.9043991,33.1177238 32.8594442,33.582671 C32.8153698,34.2023057 33.0806791,34.8219403 33.6562437,35.2194551 C34.2534009,35.6178549 35.0502005,35.6178549 35.6473577,35.2194551 C36.6204372,34.5557505 36.7094621,33.2283412 35.93514,32.4314532 C35.5367402,32.0330534 35.0061305,31.878366 34.4971133,31.922436 C34.0321661,31.9665104 33.5896963,31.7677441 33.257844,31.4358962 L31.5320349,29.7100871 C31.26673,29.4447823 31.2001826,29.0463825 31.3332686,28.7145302 L31.3332686,28.6920616 C31.4663547,28.3602092 31.7982159,28.1389744 32.1741382,28.1389744 L34.6077219,28.1389744 C35.0726691,28.1389744 35.5367314,28.3161348 35.8245137,28.6920616 C36.156366,29.0904613 36.6429058,29.3332887 37.195993,29.3332887 C38.3021674,29.3332887 39.1871069,28.3152543 38.965872,27.1650099 C38.8552546,26.4814384 38.3021674,25.9067365 37.5943928,25.7736416 C36.9082257,25.6404892 36.289476,25.8841927 35.8910762,26.3491399 Z" id="Path"></path></g></g></g></g></g></g></svg>'},{title:"Voting",path:"/voting",svg:'<svg class="fill-gold" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="#FFFFFF"><path d="m94 68h-16v-52c0-6.6289-5.3711-12-12-12h-52c-6.6289 0-12 5.3711-12 12v60c0 5.3047 2.1055 10.391 5.8594 14.141 3.75 3.7539 8.8359 5.8594 14.141 5.8594h56c5.3047 0 10.391-2.1055 14.141-5.8594 3.7539-3.75 5.8594-8.8359 5.8594-14.141v-4c0-1.0625-0.42188-2.0781-1.1719-2.8281s-1.7656-1.1719-2.8281-1.1719zm-84 8v-60c0-2.2109 1.7891-4 4-4h52c1.0625 0 2.0781 0.42188 2.8281 1.1719s1.1719 1.7656 1.1719 2.8281v52h-32c-2.2109 0-4 1.7891-4 4v4c0 6.6289-5.3711 12-12 12s-12-5.3711-12-12zm68 12h-40.102c2.6484-3.4414 4.0898-7.6602 4.1016-12h48c0 6.6289-5.3711 12-12 12z"/><path d="m22 28h36c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/><path d="m22 44h36c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/><path d="m58 60c2.2109 0 4-1.7891 4-4s-1.7891-4-4-4h-36c-2.2109 0-4 1.7891-4 4s1.7891 4 4 4z"/></g></svg>'},{title:"Canisters",path:"/canisters",svg:'<svg class="fill-green" width="100pt" height="100pt" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="m50 56.25c20 0 36.25-7.5 36.25-16.875v-0.625-7.707c0-0.83203-1.043-1.457-1.668-0.83203-7.707 6.25-21.043 9.582-34.582 9.582-13.332 0-26.875-3.332-34.582-9.582-0.625-0.625-1.668 0-1.668 0.83203v7.707 0.625c0 9.168 16.25 16.875 36.25 16.875z"/><path d="m86.25 17.918c0 9.3203-16.23 16.875-36.25 16.875s-36.25-7.5547-36.25-16.875c0-9.3203 16.23-16.875 36.25-16.875s36.25 7.5547 36.25 16.875"/><path d="m96.043 88.957h-28.125c-0.41797 0-1.043-0.41797-1.043-0.83203v-1.668c0-1.043-0.83203-1.875-1.875-1.875h-11.043c-0.625 0-1.043-0.41797-1.043-1.043v-4.375c0-0.625 0.41797-1.043 1.043-1.043 18.125-0.83203 32.293-8.125 32.293-16.668v-0.625-7.707c0-0.83203-1.043-1.457-1.875-0.83203-7.707 6.25-21.043 9.582-34.375 9.582s-26.668-3.332-34.375-9.582c-0.625-0.625-1.875 0-1.875 0.83203v7.707 0.625c0 8.75 14.168 15.832 32.293 16.668 0.625 0 1.043 0.41797 1.043 1.043v4.375c0 0.625-0.41797 1.043-1.043 1.043h-11.043c-1.043 0-1.875 0.83203-1.875 1.875v1.668c0 0.41797-0.41797 0.83203-1.043 0.83203h-28.125c-1.668 0-2.918 1.25-2.918 2.918s1.25 2.918 2.918 2.918h28.125c0.41797 0 1.043 0.41797 1.043 0.83203v1.668c0 1.043 0.83203 1.875 1.875 1.875h30.207c1.043 0 1.875-0.83203 1.875-1.875v-1.668c0-0.41797 0.41797-0.83203 1.043-0.83203h28.125c1.668 0 2.918-1.25 2.918-2.918s-1.4609-2.918-3.125-2.918z"/></g></svg>'}],()=>z.set(!s),()=>z.set(!s)]}class r2 extends F{constructor(t){super(),A(this,t,c2,n2,T,{})}}function o2(i){let t,e,s,l,c,g;e=new l2({}),l=new r2({});const d=i[1].default,r=W(d,i,i[0],null);return{c(){t=_("div"),D(e.$$.fragment),s=b(),D(l.$$.fragment),c=b(),r&&r.c(),this.h()},l(n){t=C(n,"DIV",{id:!0});var a=m(t);H(e.$$.fragment,a),s=E(a),H(l.$$.fragment,a),c=E(a),r&&r.l(a),a.forEach(f),this.h()},h(){v(t,"id","app")},m(n,a){N(n,t,a),M(e,t,null),u(t,s),M(l,t,null),u(t,c),r&&r.m(t,null),g=!0},p(n,[a]){r&&r.p&&(!g||a&1)&&X(r,d,n,n[0],g?t2(d,n[0],a,null):Y(n[0]),null)},i(n){g||(x(e.$$.fragment,n),x(l.$$.fragment,n),x(r,n),g=!0)},o(n){B(e.$$.fragment,n),B(l.$$.fragment,n),B(r,n),g=!1},d(n){n&&f(t),V(e),V(l),r&&r.d(n)}}}function i2(i,t,e){let{$$slots:s={},$$scope:l}=t;return i.$$set=c=>{"$$scope"in c&&e(0,l=c.$$scope)},[l,s]}class m2 extends F{constructor(t){super(),A(this,t,i2,o2,T,{})}}export{m2 as default};
