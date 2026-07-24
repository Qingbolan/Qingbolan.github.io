import{c as a}from"./index-D9wP6PD4.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=a("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),n=(t,c)=>{var s;const r=t.trimStart().split(`
`),e=(s=r[0])==null?void 0:s.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);return(e==null?void 0:e[1].trim().toLocaleLowerCase())===c.trim().toLocaleLowerCase()?r.slice(1).join(`
`).trimStart():t},l=(t,c,r=220)=>{const e=n(t??"",c).replace(/```[\s\S]*?```/g," ").replace(/!\[[^\]]*]\([^)]*\)/g," ").replace(/\[([^\]]+)]\([^)]*\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^\s*(?:[-*+]|\d+[.)])\s+/gm,"").replace(/[*_~`>#|]/g,"").replace(/\s+/g," ").trim();return e.length<=r?e:`${e.slice(0,r).trimEnd()}...`};export{i as U,l as m,n as w};
