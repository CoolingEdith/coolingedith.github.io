import{s as q,f as p,a as x,g as d,c as F,M as w,h as b,d as f,j as m,i as u,I as U,N as S,u as j,O as B}from"../chunks/scheduler.8f10649e.js";import{e as v}from"../chunks/each.e59479a4.js";import{S as D,i as M}from"../chunks/index.e5570706.js";function C(o,t,c){const i=o.slice();return i[1]=t[c],i}function I(o,t,c){const i=o.slice();return i[4]=t[c],i}function y(o){let t,c,i;return{c(){t=p("div"),c=p("img"),this.h()},l(n){t=d(n,"DIV",{});var l=b(t);c=d(l,"IMG",{class:!0,src:!0,alt:!0}),l.forEach(f),this.h()},h(){m(c,"class","h-auto max-w-full rounded-lg svelte-1tjunt4"),B(c.src,i=o[4])||m(c,"src",i),m(c,"alt","")},m(n,l){u(n,t,l),j(t,c)},p:U,d(n){n&&f(t)}}}function E(o){let t,c,i=v(o[1]),n=[];for(let l=0;l<i.length;l+=1)n[l]=y(I(o,i,l));return{c(){t=p("div");for(let l=0;l<n.length;l+=1)n[l].c();c=x(),this.h()},l(l){t=d(l,"DIV",{class:!0});var h=b(t);for(let e=0;e<n.length;e+=1)n[e].l(h);c=F(h),h.forEach(f),this.h()},h(){m(t,"class","grid gap-5")},m(l,h){u(l,t,h);for(let e=0;e<n.length;e+=1)n[e]&&n[e].m(t,null);j(t,c)},p(l,h){if(h&1){i=v(l[1]);let e;for(e=0;e<i.length;e+=1){const g=I(l,i,e);n[e]?n[e].p(g,h):(n[e]=y(g),n[e].c(),n[e].m(t,c))}for(;e<n.length;e+=1)n[e].d(1);n.length=i.length}},d(l){l&&f(t),S(n,l)}}}function N(o){let t,c,i,n="Såhär gör du:",l,h,e,g=v(o[0]),r=[];for(let s=0;s<g.length;s+=1)r[s]=E(C(o,g,s));return{c(){t=p("br"),c=x(),i=p("h1"),i.textContent=n,l=p("br"),h=x(),e=p("section");for(let s=0;s<r.length;s+=1)r[s].c();this.h()},l(s){t=d(s,"BR",{}),c=F(s),i=d(s,"H1",{class:!0,"data-svelte-h":!0}),w(i)!=="svelte-14xwn9u"&&(i.textContent=n),l=d(s,"BR",{}),h=F(s),e=d(s,"SECTION",{class:!0});var _=b(e);for(let a=0;a<r.length;a+=1)r[a].l(_);_.forEach(f),this.h()},h(){m(i,"class","svelte-1tjunt4"),m(e,"class","p-10 grid grid-cols-2 md:grid-cols-4 gap-2")},m(s,_){u(s,t,_),u(s,c,_),u(s,i,_),u(s,l,_),u(s,h,_),u(s,e,_);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(e,null)},p(s,[_]){if(_&1){g=v(s[0]);let a;for(a=0;a<g.length;a+=1){const k=C(s,g,a);r[a]?r[a].p(k,_):(r[a]=E(k),r[a].c(),r[a].m(e,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=g.length}},i:U,o:U,d(s){s&&(f(t),f(c),f(i),f(l),f(h),f(e)),S(r,s)}}}function O(o){return[[["UF-1.png","UF-2.png","UF-3.png","UF-4.png","UF-5.png","UF-6.png","UF-7.png","UF-8.png","UF-9.png"]]]}class G extends D{constructor(t){super(),M(this,t,O,N,q,{})}}export{G as component};
