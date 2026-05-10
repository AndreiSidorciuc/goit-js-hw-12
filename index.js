/* empty css                      */import{a as S,S as v,i}from"./assets/vendor-73qhTu8_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function f(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const P="https://pixabay.com/api/",M="55788267-3582975ea85f5047ce4ceeb52",R=15;async function h(r,e){return(await S.get(P,{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:R}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function g(r){const e=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${o.likes}</p>
          <p><b>Views</b> ${o.views}</p>
          <p><b>Comments</b> ${o.comments}</p>
          <p><b>Downloads</b> ${o.downloads}</p>
        </div>
      </li>
    `).join("");p.insertAdjacentHTML("beforeend",e),q.refresh()}function B(){p.innerHTML=""}function L(){m.classList.remove("hidden")}function b(){m.classList.add("hidden")}function l(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const w=document.querySelector(".form"),$=document.querySelector(".load-more");let s=1,a="",u=0;w.addEventListener("submit",E);$.addEventListener("click",x);async function E(r){if(r.preventDefault(),a=r.currentTarget.elements.searchText.value.trim(),!!a){s=1,B(),d(),L();try{const e=await h(a,s);if(u=e.totalHits,e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again.",position:"topRight"});return}g(e.hits);const o=Math.ceil(u/15);s<o?l():(d(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.error({message:"Something went wrong!",position:"topRight"})}finally{b(),w.reset()}}}async function x(){const r=s+1;d(),L();try{const e=await h(a,r);s=r,g(e.hits);const o=Math.ceil(u/15);s<o?l():i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),O()}catch{i.error({message:"Something went wrong!",position:"topRight"}),l()}finally{b()}}function O(){const r=document.querySelector(".gallery-item");if(!r)return;const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
