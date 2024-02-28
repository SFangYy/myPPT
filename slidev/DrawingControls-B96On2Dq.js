import{o as F,w as G,x as I,y as O,z as T,A as Y,B as H,C as J,D as Q,E as W,F as X,G as Z}from"../modules/unplugin-icons-COxst9Kh.js";import{m as $,r as D,P as ee,av as ne,q as B,y as se,z,u as e,A as f,B as k,C as o,G as s,a3 as l,x as i,a7 as te,ao as w,aw as oe,ab as le,a1 as ae,ap as b,a2 as re}from"../modules/vue-B2I66eqI.js";import{L as ie}from"../modules/shiki-CdPnd8mN.js";import{_ as L,am as r,aa as m,an as ue,ao as ce,ap as de,aq as _e,ar as pe,as as u,S as _,at as h}from"../entry-Rkfn7aqs.js";import{I as a,V as C}from"./SlidesShow-QlHY74d7.js";import"./bottom-uJZFNs1p.js";import"./DrawingPreview-CzwGjuwt.js";const me=$({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(x){const g=x,v=D(null),p=g.initial??{x:0,y:0},c=g.storageKey?ee(g.storageKey,p):D(p),{style:y}=ne(v,{initialValue:c});return(d,n)=>(f(),B("div",{ref_key:"el",ref:v,class:"fixed",style:z(e(y))},[se(d.$slots,"default")],4))}}),ge=L(me,[["__file","/usr/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/Draggable.vue"]]),we=i("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[i("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),fe=i("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[i("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),i("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),i("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),ve={class:"flex bg-main p-2"},be={class:"inline-block w-7 text-center"},ye={class:"pt-.5"},ke=$({__name:"DrawingControls",setup(x){function g(){h.undo()}function v(){h.redo()}let p="stylus";function c(d){r.value=d,_.value=!0,d!=="eraseLine"&&(p=d)}function y(d){m.color=d,_.value=!0,r.value=p}return(d,n)=>{const S=F,M=G,V=I,q=O,A=T,E=Y,U=H,K=J,N=Q,P=W,R=X,j=Z;return f(),k(ge,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",e(_)?"":e(u)?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:o(()=>[s(a,{title:"Draw with stylus",class:l({shallow:e(r)!=="stylus"}),onClick:n[0]||(n[0]=t=>c("stylus"))},{default:o(()=>[s(S)]),_:1},8,["class"]),s(a,{title:"Draw a line",class:l({shallow:e(r)!=="line"}),onClick:n[1]||(n[1]=t=>c("line"))},{default:o(()=>[we]),_:1},8,["class"]),s(a,{title:"Draw an arrow",class:l({shallow:e(r)!=="arrow"}),onClick:n[2]||(n[2]=t=>c("arrow"))},{default:o(()=>[s(M)]),_:1},8,["class"]),s(a,{title:"Draw an ellipse",class:l({shallow:e(r)!=="ellipse"}),onClick:n[3]||(n[3]=t=>c("ellipse"))},{default:o(()=>[s(V)]),_:1},8,["class"]),s(a,{title:"Draw a rectangle",class:l({shallow:e(r)!=="rectangle"}),onClick:n[4]||(n[4]=t=>c("rectangle"))},{default:o(()=>[s(q)]),_:1},8,["class"]),s(a,{title:"Erase",class:l({shallow:e(r)!=="eraseLine"}),onClick:n[5]||(n[5]=t=>c("eraseLine"))},{default:o(()=>[s(A)]),_:1},8,["class"]),s(C),s(e(ie),null,{popper:o(()=>[i("div",ve,[i("div",be,te(e(m).size),1),i("div",ye,[w(i("input",{"onUpdate:modelValue":n[6]||(n[6]=t=>e(m).size=t),type:"range",min:"1",max:"15",onChange:n[7]||(n[7]=t=>r.value=e(p))},null,544),[[oe,e(m).size]])])])]),default:o(()=>[s(a,{title:"Adjust stroke width",class:l({shallow:e(r)==="eraseLine"})},{default:o(()=>[fe]),_:1},8,["class"])]),_:1}),(f(!0),B(ae,null,le(e(ue),t=>(f(),k(a,{key:t,title:"Set brush color",class:l(e(m).color===t&&e(r)!=="eraseLine"?"active":"shallow"),onClick:Ce=>y(t)},{default:o(()=>[i("div",{class:l(["w-6 h-6 transition-all transform border",e(m).color!==t?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:z(e(_)?{background:t}:{borderColor:t})},null,6)]),_:2},1032,["class","onClick"]))),128)),s(C),s(a,{title:"Undo",class:l({disabled:!e(ce)}),onClick:n[8]||(n[8]=t=>g())},{default:o(()=>[s(E)]),_:1},8,["class"]),s(a,{title:"Redo",class:l({disabled:!e(de)}),onClick:n[9]||(n[9]=t=>v())},{default:o(()=>[s(U)]),_:1},8,["class"]),s(a,{title:"Delete",class:l({disabled:!e(_e)}),onClick:n[10]||(n[10]=t=>e(pe)())},{default:o(()=>[s(K)]),_:1},8,["class"]),s(C),s(a,{title:e(u)?"Unpin drawing":"Pin drawing",class:l({shallow:!e(u)}),onClick:n[11]||(n[11]=t=>u.value=!e(u))},{default:o(()=>[w(s(N,{class:"transform -rotate-45"},null,512),[[b,e(u)]]),w(s(P,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"]),e(_)?(f(),k(a,{key:0,title:e(u)?"Drawing pinned":"Drawing unpinned",class:l({shallow:!e(_)}),onClick:n[12]||(n[12]=t=>_.value=!e(_))},{default:o(()=>[w(s(R,null,null,512),[[b,e(u)]]),w(s(j,null,null,512),[[b,!e(u)]])]),_:1},8,["title","class"])):re("v-if",!0)]),_:1},8,["class"])}}}),Se=L(ke,[["__file","/usr/lib/node_modules/@slidev/cli/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Se as default};
