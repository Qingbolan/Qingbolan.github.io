import{X as a,ab as n}from"./index-6ashpiFF.js";const t=async(e="en")=>{const s=await a("/api/v1/episodes/series",{lang:n(e)});return(s==null?void 0:s.series)??[]},r=async(e,s="en")=>e?a(`/api/v1/episodes/series/${e}`,{lang:n(s)}):null,o=async(e,s="en")=>e?a(`/api/v1/episodes/${e}`,{lang:n(s)}):null;export{r as a,o as b,t as f};
//# sourceMappingURL=episodeApi-CzTTkrvM.js.map
