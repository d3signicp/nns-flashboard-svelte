import{S as h,i as j,s as w,l as b,r as E,a as S,e as C,m as d,n as P,u as R,h as m,c as q,b as _,D as $,v as N,B as D,F as y}from"../chunks/index-b5964bb2.js";import{p as z}from"../chunks/stores-3715edcd.js";function F(p){let r,a=p[0].error.frame+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.frame+"")&&N(f,a)},d(l){l&&m(r)}}}function H(p){let r,a=p[0].error.stack+"",f;return{c(){r=b("pre"),f=E(a)},l(l){r=d(l,"PRE",{});var s=P(r);f=R(s,a),s.forEach(m)},m(l,s){_(l,r,s),$(r,f)},p(l,s){s&1&&a!==(a=l[0].error.stack+"")&&N(f,a)},d(l){l&&m(r)}}}function A(p){let r,a=p[0].status+"",f,l,s,c=p[0].error.message+"",v,k,u,n,t=p[0].error.frame&&F(p),i=p[0].error.stack&&H(p);return{c(){r=b("h1"),f=E(a),l=S(),s=b("pre"),v=E(c),k=S(),t&&t.c(),u=S(),i&&i.c(),n=C()},l(e){r=d(e,"H1",{});var o=P(r);f=R(o,a),o.forEach(m),l=q(e),s=d(e,"PRE",{});var B=P(s);v=R(B,c),B.forEach(m),k=q(e),t&&t.l(e),u=q(e),i&&i.l(e),n=C()},m(e,o){_(e,r,o),$(r,f),_(e,l,o),_(e,s,o),$(s,v),_(e,k,o),t&&t.m(e,o),_(e,u,o),i&&i.m(e,o),_(e,n,o)},p(e,[o]){o&1&&a!==(a=e[0].status+"")&&N(f,a),o&1&&c!==(c=e[0].error.message+"")&&N(v,c),e[0].error.frame?t?t.p(e,o):(t=F(e),t.c(),t.m(u.parentNode,u)):t&&(t.d(1),t=null),e[0].error.stack?i?i.p(e,o):(i=H(e),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},i:D,o:D,d(e){e&&m(r),e&&m(l),e&&m(s),e&&m(k),t&&t.d(e),e&&m(u),i&&i.d(e),e&&m(n)}}}function G(p,r,a){let f;return y(p,z,l=>a(0,f=l)),[f]}class K extends h{constructor(r){super(),j(this,r,G,A,w,{})}}export{K as default};
