import"./assets/vendor-D4Npw1qp.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const l="46143804-c250369a659784c87f3539553",d="https://pixabay.com/api/";async function u(n,t=1,o=12){const a=`${d}?key=${l}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${o}`;try{const e=await fetch(a);if(!e.ok)throw new Error("Error loading images");return await e.json()}catch(e){throw console.error("Sorry, there are no images matching your search query. Please try again!",e),e}}const f=document.getElementById("searchForm"),c=document.querySelector(".gallery"),i=document.getElementById("loader");f.addEventListener("submit",async n=>{n.preventDefault();const t=document.getElementById("query").value.trim();if(!t){alert("Please enter a search query");return}i.classList.remove("hidden");try{const o=await u(t);m(o.hits)}catch(o){console.error(o),alert("Error loading images.")}finally{i.classList.add("hidden")}});function m(n){if(c.innerHTML="",n.length===0){c.innerHTML="<p>No images found.</p>";return}n.forEach(t=>{const o=document.createElement("img");o.src=t.webformatURL,o.alt=t.tags,c.appendChild(o)})}
//# sourceMappingURL=index.js.map
