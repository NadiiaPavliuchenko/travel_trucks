import{d as e,N as r,j as t,r as s,L as n,O as a}from"./index-Doua56ua.js";const i=e.header`
  background-color: var(--inputs);
  width: 100%;
  height: 72px;
`,l=e.div`
  padding: 24px 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`,d=e.a`
  grid-column: 1;
  align-self: start;
  color: inherit;
  font-family: "Inter-Bold", sans-serif;
  font-weight: 700;
  font-size: 20px;
`,c=e.span`
  color: var(--text);
`,h=e.nav`
  grid-column: 2;
  justify-self: center;
`,o=e(r)`
  font-family: "Inter-Medium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: inherit;

  &:not(:last-child) {
    margin-right: 32px;
  }
  transition: color 200ms ease-in-out;

  &:hover,
  :focus {
    color: var(--button-hover);
  }
  &.active {
    color: var(--button-hover);
  }
`,f=()=>t.jsxs(s.Suspense,{fallback:t.jsx(n,{}),children:[t.jsx(i,{children:t.jsxs(l,{children:[t.jsxs(d,{href:"/",children:["Travel",t.jsx(c,{children:"Trucks"})]}),t.jsxs(h,{children:[t.jsx(o,{to:"/",children:"Home"}),t.jsx(o,{to:"/catalog",children:"Catalog"})]})]})}),t.jsx(a,{})]});export{f as default};
