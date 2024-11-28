import{d as e,j as s,u as a,a as c,b as d,r as l,L as h,O as x}from"./index-BJCHJWvm.js";import{B as j,a as g}from"./baseButton.styled-XIXdvvB7.js";const u=e.div``,v=i=>i.campers.items,p=e.li``,C=e.div``,f=e.div``,w=e.div``,b=e.h2``,m=e.p``,B=e.button``,S=e.div``,L=e.div``,k=e.div``,y=e.p``,R=e.p``,F=e.p``,O=e(j)`
  padding: 16px 40px;
  width: 166px;
  color: var(--white);
`,T=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,I=e.svg`
  stroke: currentColor;
  fill: currentColor;
`,E=e.p`
  text-transform: capitalize;
`,M=({equipment:i})=>{const r=Object.keys(i),t=Object.values(i);return s.jsx(T,{children:r&&r.map((n,o)=>{if(t[o]===!0)return s.jsxs(g,{children:[s.jsx(I,{width:"20",height:"20",children:s.jsx("use",{href:`../../assets/sprite.svg#${n}`})}),s.jsx(E,{children:n})]},o)})})},$=()=>{const i=a(),r=c(v);return s.jsx("ul",{children:r&&r.map(t=>s.jsxs(p,{children:[s.jsx(C,{children:s.jsx("img",{src:t.gallery[0].thumb,alt:t.name})}),s.jsxs(f,{children:[s.jsxs(w,{children:[s.jsx(b,{children:t.name}),s.jsxs(m,{children:["€ ",t.price.toFixed(2)]}),s.jsx(B,{children:s.jsx("svg",{width:"26",height:"24",children:s.jsx("use",{href:"../../assets/sprite.svg#heart"})})})]}),s.jsxs(S,{children:[s.jsxs(L,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#star"})}),s.jsxs(y,{children:[t.rating,"(",t.reviews.length," Reviews)"]})]}),s.jsxs(k,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#map"})}),s.jsx(R,{children:t.location})]})]}),s.jsx(F,{children:t.description}),s.jsx(M,{equipment:{ac:t.AC,bathroom:t.bathroom,kitchen:t.kitchen,tv:t.TV,radio:t.radio,frige:t.refrigerator,microwave:t.microwave,gas:t.gas,water:t.water}}),s.jsx(O,{onClick:()=>i(`/catalog/${t.id}`),children:"Show More"})]})]},t.id))})},z=()=>s.jsx("div",{children:"Location"}),A=()=>s.jsx("div",{children:"Filters"}),D=e.div``,H=()=>s.jsxs(D,{children:[s.jsx(z,{}),s.jsx(A,{})]}),V=()=>{const i=d("/catalog");return s.jsxs(l.Suspense,{fallback:s.jsx(h,{}),children:[i&&s.jsxs(u,{children:[s.jsx(H,{}),s.jsx($,{})]}),s.jsx(x,{})]})};export{V as default};
