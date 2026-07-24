import{c as n,j as o,M as u,G as r,g as h,ae as d,n as m}from"./index-DuAmzM-N.js";import{S as b}from"./send-CcjNiTOs.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=n("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=n("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=n("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("Youtube",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]),c=[{id:"github",label:"GitHub",hosts:["github.com","github.io"],icon:o.jsx(h,{})},{id:"linkedin",label:"LinkedIn",hosts:["linkedin.com","linked.in"],icon:o.jsx(d,{})},{id:"twitter",label:"X",hosts:["twitter.com","x.com"],icon:o.jsx(x,{})},{id:"youtube",label:"YouTube",hosts:["youtube.com","youtu.be"],icon:o.jsx(g,{})},{id:"instagram",label:"Instagram",hosts:["instagram.com"],icon:o.jsx(k,{})},{id:"facebook",label:"Facebook",hosts:["facebook.com","fb.com"],icon:o.jsx(f,{})},{id:"telegram",label:"Telegram",hosts:["t.me","telegram.me"],icon:o.jsx(b,{})},{id:"scholar",label:"Google Scholar",hosts:["scholar.google.com","scholar.google."],icon:o.jsx(m,{})}];function y(i,t){const e=(i||"").toLowerCase();if((e.startsWith("mailto:")||e.includes("@"))&&(e.startsWith("mailto:")||/^[^/]+@[^/]+\.[^/]+$/.test(e)))return"email";for(const s of c)if(s.hosts.some(l=>e.includes(l)))return s.id;const a=(t||"").toLowerCase().trim();if(a){for(const s of c)if(a.includes(s.id)||a.includes(s.label.toLowerCase()))return s.id;if(a.includes("mail")||a.includes("email"))return"email";if(a.includes("scholar"))return"scholar"}return"website"}function j(i){var t;return i==="email"?o.jsx(u,{}):i==="website"?o.jsx(r,{}):((t=c.find(e=>e.id===i))==null?void 0:t.icon)??o.jsx(r,{})}function p(i){var t;return i==="email"?"Email":i==="website"?"Website":((t=c.find(e=>e.id===i))==null?void 0:t.label)??"Website"}function v(i,t){const e=y(i,t);return{platform:e,icon:j(e),label:p(e)}}export{L as M,P,v as r};
