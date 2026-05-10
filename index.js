/* empty css                      */import{a as w,S,i as s}from"./assets/vendor-73qhTu8_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const v="https://pixabay.com/api/",P="55788267-3582975ea85f5047ce4ceeb52",q=20;async function u(o,t){return(await w.get(v,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:q}})).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),R=new S(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const t=o.map(n=>`
      <li class="gallery-item">
        <a href="${n.largeImageURL}">
          <img
            src="${n.webformatURL}"
            alt="${n.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${n.likes}</p>
          <p><b>Views</b> ${n.views}</p>
          <p><b>Comments</b> ${n.comments}</p>
          <p><b>Downloads</b> ${n.downloads}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",t),R.refresh()}function M(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function g(){m.classList.add("hidden")}function B(){p.classList.remove("hidden")}function L(){p.classList.add("hidden")}const b=document.querySelector(".form"),$=document.querySelector(".load-more");let i=1,a="",l=0;b.addEventListener("submit",E);$.addEventListener("click",O);async function E(o){if(o.preventDefault(),a=o.currentTarget.elements.searchText.value.trim(),!a){s.warning({message:"Please enter a search query!",position:"topRight"});return}i=1,M(),L(),y();try{const t=await u(a,i);if(l=t.totalHits,t.hits.length===0){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits),l>15&&B()}catch{s.error({message:"Something went wrong!",position:"topRight"})}finally{g(),b.reset()}}async function O(){i+=1,y();try{const o=await u(a,i);h(o.hits);const t=Math.ceil(l/15);i>=t&&(L(),s.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),x()}catch{s.error({message:"Something went wrong!",position:"topRight"})}finally{g()}}function x(){const o=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:o.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
