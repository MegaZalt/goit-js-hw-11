import{S as d,i as c}from"./assets/vendor-DsY7ssb3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const y="46143804-c250369a659784c87f3539553",f="https://pixabay.com/api/";async function g(o,r=1,n=12){const a=`${f}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true&page=${r}&per_page=${n}`;try{const e=await fetch(a);if(!e.ok)throw new Error("Error loading images");return await e.json()}catch(e){throw console.error("Sorry, there are no images matching your search query. Please try again!",e),e}}let i=null;function m(o){const r=document.querySelector(".gallery");if(r.innerHTML="",o.length===0){r.innerHTML="<p>Sorry, there are no images matching your search query. Please try again!</p>";return}const n=o.map(a=>`<div class="gallery-item">
        <a href="${a.largeImageURL}">
          <img src="${a.webformatURL}" alt="${a.tags}" loading="lazy" />
        </a>
      </div>`).join("");r.innerHTML=n,i?i.refresh():i=new d(".gallery a",{captionsData:"alt",captionsDelay:250})}const h=document.getElementById("searchForm"),p=document.querySelector(".gallery"),l=document.getElementById("loader");function u(o){o?l.classList.remove("hidden"):l.classList.add("hidden")}function L(){p.innerHTML=""}h.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("query").value.trim();if(!r){c.show({title:"Warning",message:"Please enter a search query!",color:"yellow",position:"topRight"});return}L(),u(!0);try{const n=await g(r);m(n.hits)}catch(n){console.error(n),c.show({title:"Warning",message:"Please enter a search query!",color:"red",position:"topRight"})}finally{u(!1)}});
//# sourceMappingURL=index.js.map
