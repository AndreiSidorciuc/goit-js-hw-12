/* empty css                      */import{a as S,S as v,i}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const P="https://pixabay.com/api/",M="55788267-3582975ea85f5047ce4ceeb52",R=15;async function f(o,t){return(await S.get(P,{params:{key:M,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:R}})).data}const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const t=o.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){h.innerHTML=""}function g(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}function b(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const w=document.querySelector(".form"),$=document.querySelector(".load-more");let n=1,a="",d=0;w.addEventListener("submit",E);$.addEventListener("click",O);async function E(o){if(o.preventDefault(),a=o.currentTarget.elements.searchText.value.trim(),!!a){n=1,B(),l(),g();try{const t=await f(a,n);if(d=t.totalHits,t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}y(t.hits);const r=Math.ceil(d/15);n<r?b():(l(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{L(),w.reset()}}}async function O(){n+=1,l(),g();try{const o=await f(a,n);y(o.hits);const t=Math.ceil(d/15);n<t?b():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),x()}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}function x(){const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
