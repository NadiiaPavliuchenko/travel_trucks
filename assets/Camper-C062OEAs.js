import{d as e,j as s,c as h,r as n,L as p,e as x}from"./index-BJCHJWvm.js";import m from"./Error-DzEkLF68.js";const j=e.div``,g=e.h2``,u=e.p``,v=e.div``,f=e.div``,C=e.div``,y=e.p``,S=e.p``,w=e.div``,E=e.div``,L=e.p``,I=({camper:t})=>s.jsxs(j,{children:[s.jsx(g,{children:t.name}),s.jsxs(v,{children:[s.jsxs(f,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#star"})}),s.jsxs(y,{children:[t.rating,"(",t.reviews.length," Reviews)"]})]}),s.jsxs(C,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#map"})}),s.jsx(S,{children:t.location})]})]}),s.jsxs(u,{children:["€ ",t.price.toFixed(2)]}),s.jsx(w,{children:t.gallery.map((r,i)=>s.jsx(E,{children:s.jsx("img",{src:r.thumb,alt:"Camper Image"})},i))}),s.jsx(L,{children:t.description})]}),R=e.div``,D=()=>{const{id:t}=h(),[r,i]=n.useState(null),[c,o]=n.useState(!0),[d,l]=n.useState(null);return n.useEffect(()=>{(async()=>{try{const a=await x.get(`/campers/${t}`);i(a.data)}catch(a){l(a.message)}finally{o(!1)}})()},[t]),c?s.jsx(p,{}):d?s.jsx(m,{}):s.jsx(R,{children:r&&s.jsx(I,{camper:r})})};export{D as default};