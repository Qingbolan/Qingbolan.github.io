import{c as o,u as j,bO as v,bP as N,j as e,a as h,bQ as M,d as C,bR as w,bS as A,E as R,r as x,L as y}from"./index-B7-dgNnw.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=o("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=o("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=o("Fingerprint",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=o("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=o("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]),T=({canonicalPath:i,kind:n,author:s,className:t})=>{const{language:l}=j(),a=l,r=M(a,n),c=v(i,a),m=N(a);return e.jsxs("aside",{...C,"aria-label":r.heading,"data-content-attribution":n,"data-canonical-source":c,className:h("border-y border-ds-border py-5 text-ds-sm text-ds-fg-muted",t),children:[e.jsxs("div",{className:"mb-4 flex items-center gap-2 font-mono text-ds-2xs font-medium uppercase tracking-[0.12em] text-ds-fg-subtle",children:[e.jsx(z,{className:"size-3.5","aria-hidden":!0}),e.jsx("span",{children:r.heading})]}),e.jsxs("dl",{className:"grid gap-x-6 gap-y-3 sm:grid-cols-[7rem_minmax(0,1fr)]",children:[e.jsx("dt",{className:"font-medium text-ds-fg-subtle",children:r.author}),e.jsx("dd",{children:e.jsx("a",{href:m,rel:"author",className:"font-medium text-ds-fg underline decoration-ds-border underline-offset-4 transition-colors hover:text-ds-primary hover:decoration-current",children:w(s)})}),e.jsx("dt",{className:"font-medium text-ds-fg-subtle",children:r.reproduction}),e.jsx("dd",{className:"max-w-[58rem] leading-6",children:A(a)}),e.jsx("dt",{className:"font-medium text-ds-fg-subtle",children:r.canonical}),e.jsx("dd",{children:e.jsxs("a",{href:c,rel:"bookmark",className:"inline-flex items-center gap-1.5 font-medium text-ds-fg underline decoration-ds-border underline-offset-4 transition-colors hover:text-ds-primary hover:decoration-current",children:[c,e.jsx(R,{className:"size-3.5","aria-hidden":!0})]})})]})]})};function S(i){const[n,s]=x.useState({phase:"idle"}),t=n.phase==="launching",l=()=>{t||s({phase:"launching",progress:0})};x.useEffect(()=>{if(!t)return;const c=document.querySelector("#browser-window")??document.documentElement,m=c.scrollTop;let u=0,p=m,f=performance.now();const g=b=>{const d=c.scrollTop;if(d<=1){s({phase:"arrived",progress:1});return}if(d!==p&&(f=b),d>p+1||b-f>250){s({phase:"idle"});return}p=d,s({phase:"launching",progress:Math.max(0,Math.min(1,1-d/m))}),u=requestAnimationFrame(g)};return i(),u=requestAnimationFrame(g),()=>cancelAnimationFrame(u)},[t,i]);const a=x.useCallback(()=>s(r=>r.phase==="arrived"?{phase:"idle"}:r),[]);return{flight:n,launching:t,launch:l,resetOnScroll:a}}function H({title:i,language:n,parent:s,centered:t=!1,className:l}){const a="rounded-ds-xs transition-colors hover:text-ds-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4";return e.jsx("nav",{"aria-label":n==="zh"?"面包屑导航":"Breadcrumb",className:h("text-ds-sm text-ds-fg-muted",l),children:e.jsxs("ol",{className:h("flex min-w-0 items-center gap-2",t?"flex-wrap justify-center":""),children:[e.jsx("li",{className:"shrink-0",children:e.jsx(y,{className:a,to:"/",children:n==="zh"?"首页":"Home"})}),e.jsx("li",{"aria-hidden":"true",children:e.jsx(k,{className:"size-3.5 text-ds-primary"})}),e.jsx("li",{className:"shrink-0",children:e.jsx(y,{className:a,to:s.to,children:s.label})}),e.jsx("li",{"aria-hidden":"true",children:e.jsx(k,{className:"size-3.5 text-ds-primary"})}),e.jsx("li",{"aria-current":"page",className:h("min-w-0 text-ds-fg",t?"max-w-full break-words":"truncate"),children:i})]})})}export{H as C,F as M,E as R,U as T,q as a,T as b,k as c,S as u};
