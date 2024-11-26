import{d as e,u as o,j as t}from"./index-BYAGfn_6.js";const i=e.div`
  padding: 48px 64px;
`,r=e.button`
  border-radius: 200px;
  border: none;

  padding: 16px 50px;
  height: 56px;

  color: inherit;
  font-family: "Inter-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  background-color: var(--button);
  transition: background-color 200ms ease-in-out;

  &:hover,
  :focus {
    background-color: var(--button-hover);
  }
  &:active {
    background-color: var(--button-hover);
  }
`;e.div`
  display: inline-flex;
  gap: 8px;

  border-radius: 100px;
  border: none;
  padding: 12px 18px;
  height: 48px;

  font-family: "Inter-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;

  color: var(--main);
  background-color: var(--badges);
  fill: var(--main);
`;const a=""+new URL("hero_bg-BYR0htVx.png",import.meta.url).href,s=e.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-image: url(${a});
  background-size: 100%;
  color: var(--inputs);
`,d=e.h1`
  font-family: "Inter-Semibold" sans-serif;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 16px;
  line-height: 0.66667;
`,l=e.p`
  font-family: "Inter-Semibold" sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33333;
  margin-bottom: 40px;
`,g=e(r)`
  max-width: 173px;
`,h=()=>{const n=o();return t.jsx(s,{children:t.jsxs(i,{children:[t.jsx(d,{children:"Campers of your dreams"}),t.jsx(l,{children:"You can find everything you want in our catalog"}),t.jsx(g,{onClick:()=>n("/catalog"),children:"View now"})]})})};export{h as default};
