(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const a=document.getElementById("searchForm"),c=document.querySelector(".gallery"),l=document.getElementById("loader");a.addEventListener("submit",async n=>{n.preventDefault();const t=document.getElementById("query").value.trim();if(!t){alert("Please enter a search query");return}l.classList.remove("hidden");try{const o=await fetchImages(t);d(o.hits)}catch(o){console.error(o),alert("Error loading images.")}finally{l.classList.add("hidden")}});function d(n){if(c.innerHTML="",n.length===0){c.innerHTML="<p>No images found.</p>";return}n.forEach(t=>{const o=document.createElement("img");o.src=t.webformatURL,o.alt=t.tags,c.appendChild(o)})}
//# sourceMappingURL=index.js.map
