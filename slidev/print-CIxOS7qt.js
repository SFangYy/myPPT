import{m as p,ac as d,d as _,q as s,x as t,a7 as a,u as i,a1 as u,ab as h,z as f,A as l,F as v,G as g,a2 as x}from"../modules/vue-B2I66eqI.js";import{A as b,c as m,y,t as N,B as k,_ as w}from"../entry-Rkfn7aqs.js";import{N as V}from"./NoteDisplay-CeMKsVzA.js";import"../modules/shiki-CdPnd8mN.js";import"../modules/unplugin-icons-COxst9Kh.js";const B={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},z={class:"text-lg"},A={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=p({__name:"print",setup(M){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),b({title:`Notes - ${m.title}`});const r=_(()=>y.map(o=>{var n;return(n=o.meta)==null?void 0:n.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,n)=>(l(),s("div",{id:"page-root",style:f(i(N))},[t("div",B,[t("div",L,[t("h1",S,a(i(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(l(!0),s(u,null,h(r.value,(e,c)=>(l(),s("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",A,[t("div",D,a(e==null?void 0:e.no)+"/"+a(i(k)),1),v(" "+a(e==null?void 0:e.title)+" ",1),H])]),g(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<r.value.length-1?(l(),s("hr",C)):x("v-if",!0)]))),128))])],4))}}),W=w(F,[["__file","/usr/lib/node_modules/@slidev/cli/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{W as default};
