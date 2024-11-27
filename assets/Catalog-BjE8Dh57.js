import{d as t,j as s,a,r as c,L as d,O as l}from"./index-Doua56ua.js";import{B as h,a as x}from"./baseButton.styled-Bs4USKV7.js";const j=t.div``,g=r=>r.campers.items,u=t.li``,v=t.div``,p=t.div``,C=t.div``,f=t.h2``,w=t.p``,m=t.button``,b=t.div``,B=t.div``,S=t.div``,L=t.p``,k=t.p``,y=t.p``,F=t(h)`
  padding: 16px 40px;
  width: 166px;
  color: var(--white);
`,O=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`,R=t.svg`
  stroke: currentColor;
  fill: currentColor;
`,T=t.p`
  text-transform: capitalize;
`,I=({equipment:r})=>{const e=Object.keys(r),o=Object.values(r);return s.jsx(O,{children:e&&e.map((i,n)=>{if(o[n]===!0)return s.jsxs(x,{children:[s.jsx(R,{width:"20",height:"20",children:s.jsx("use",{href:`../../assets/sprite.svg#${i}`})}),s.jsx(T,{children:i})]},n)})})},E=()=>{const r=a(g);return s.jsx("ul",{children:r&&r.map(e=>s.jsxs(u,{children:[s.jsx(v,{children:s.jsx("img",{src:e.gallery[0].thumb,alt:e.name})}),s.jsxs(p,{children:[s.jsxs(C,{children:[s.jsx(f,{children:e.name}),s.jsxs(w,{children:["€ ",e.price.toFixed(2)]}),s.jsx(m,{children:s.jsx("svg",{width:"26",height:"24",children:s.jsx("use",{href:"../../assets/sprite.svg#heart"})})})]}),s.jsxs(b,{children:[s.jsxs(B,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#star"})}),s.jsxs(L,{children:[e.rating,"(",e.reviews.length," Reviews)"]})]}),s.jsxs(S,{children:[s.jsx("svg",{width:"16",height:"16",children:s.jsx("use",{href:"../../assets/sprite.svg#map"})}),s.jsx(k,{children:e.location})]})]}),s.jsx(y,{children:e.description}),s.jsx(I,{equipment:{ac:e.AC,bathroom:e.bathroom,kitchen:e.kitchen,tv:e.TV,radio:e.radio,frige:e.refrigerator,microwave:e.microwave,gas:e.gas,water:e.water}}),s.jsx(F,{children:"Show More"})]})]},e.id))})},z=()=>s.jsx("div",{children:"Location"}),A=()=>s.jsx("div",{children:"Filters"}),D=t.div``,H=()=>s.jsxs(D,{children:[s.jsx(z,{}),s.jsx(A,{})]}),V=()=>s.jsxs(c.Suspense,{fallback:s.jsx(d,{}),children:[s.jsxs(j,{children:[s.jsx(H,{}),s.jsx(E,{})]}),s.jsx(l,{})]});export{V as default};
