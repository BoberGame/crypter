!function(){"use strict";var e={395:function(){document.addEventListener("click",(e=>{const t=e.target,r=t.parentElement;(t.classList.contains("actions__icon--favorite")||r.parentElement.classList.contains("actions__icon--favorite"))&&(t.classList.toggle("active"),r.parentElement.classList.toggle("active"))}));const e=document.getElementById("cookies");document.getElementById("cookiesBtn").addEventListener("click",(t=>{t.preventDefault(),e.classList.add("hide")}))},146:function(e,t,r){r.d(t,{c:function(){return o}});const s=document.querySelector(".create__preview-btn"),o=e=>{setTimeout((()=>{e.style.opacity="1",e.style.transform="none"}),200)};if(s){const e={createPreview:document.querySelector(".create__preview"),createRight:document.querySelector(".create__right")},t=()=>{e.createPreview.removeAttribute("style"),setTimeout((()=>{e.createRight.classList.remove("active"),document.body.classList.remove("no-scroll")}),250)};document.getElementById("createCloseBtn").addEventListener("click",t),s.addEventListener("click",(t=>{t.preventDefault(),e.createRight.classList.add("active"),document.body.classList.add("no-scroll"),o(e.createPreview)}))}const n=document.getElementById("createBtn");n&&n.addEventListener("click",(()=>{const e=document.querySelector(".create__loading");e.classList.add("load-animate"),setInterval((()=>{e.classList.remove("load-animate")}),2e3)}))},379:function(){const e=document.querySelector(".subnav-tabs__list"),t=document.querySelectorAll(".tabs__btn"),r=(e,t)=>{e.classList.contains("active")||(t.forEach((e=>e.classList.remove("active"))),e.classList.add("active"))};e&&(t.forEach((e=>{const s=r.bind(null,e,t);e.addEventListener("click",s)})),document.querySelector(".tabs__btn").click()),t.forEach((e=>{(e=>{e.addEventListener("click",(t=>{const r=t.target.dataset.filter;document.querySelectorAll(".hot-bid__item--discovery").forEach((t=>{((e,t,r)=>{"all"===e.dataset.filter?t.classList.remove("hide"):t.dataset.cat!==r?t.classList.add("hide"):t.classList.remove("hide")})(e,t,r)}))}))})(e)}))},359:function(){const e=document.querySelector(".header"),t=t=>{document.addEventListener("click",(r=>{!r.composedPath().includes(e)&&t.classList.remove("active")}))};var r;(()=>{const r=e.querySelector(".notification");e.querySelector(".header__alert").addEventListener("click",(e=>{e.preventDefault(),r.classList.toggle("active")})),t(r)})(),(()=>{const r=e.querySelector(".header__profile");e.querySelector(".header__connected-img").addEventListener("click",(e=>{e.preventDefault(),r.classList.toggle("active")})),t(r)})(),r=e.querySelector(".header__connected-count"),e.querySelector(".header__balance-count").innerHTML=r.innerHTML},110:function(){const e={get loadMoreBtn(){return document.querySelector("#loadMoreBtn")},get loadMoreBtnProfile(){return document.querySelector("#loadMoreBtnProfile")},requestURL:"data.html",requestURL2:"data-2.html"};function t(e,t,r){return fetch(t).then((e=>e.text())).then((e=>((e,t)=>{t.classList.add("load-animate"),setTimeout((()=>{const r=document.querySelector("#loadMoreWrapper"),s=document.createElement("div");s.innerHTML=e,s.classList.add("discovery__wrapper"),r.appendChild(s),t.classList.remove("load-animate")}),600)})(e,r)))}e.loadMoreBtn&&e.loadMoreBtn.addEventListener("click",(()=>{t(0,e.requestURL,e.loadMoreBtn)})),e.loadMoreBtnProfile&&e.loadMoreBtnProfile.addEventListener("click",(()=>{t(0,e.requestURL2,e.loadMoreBtnProfile)}))},822:function(e,t,r){var s=r(146);const o=document.body,n=document.querySelectorAll(".modal__close, .btn-modal-close"),i=document.querySelectorAll(".modal"),c=e=>{i&&e.querySelector(".modal__content").removeAttribute("style"),setTimeout((()=>{e.classList.remove("show"),o.classList.remove("no-scroll")}),250)};document.addEventListener("click",(e=>{const t=e.target;t.dataset.modal&&(e.preventDefault(),(e=>{const t=e.getAttribute("data-modal"),r=document.getElementById(t),n=r.querySelector(".modal__content");n.addEventListener("click",(e=>{e.stopPropagation()})),r.classList.add("show"),o.classList.add("no-scroll"),(0,s.c)(n)})(t))})),n.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget.closest(".modal");i&&c(t)}))})),i.forEach((e=>{e.addEventListener("click",(e=>{const t=e.currentTarget;i&&c(t)}))}))},70:function(){(()=>{const e=document.querySelector(".form-value-span"),t=document.getElementById("inputRange");t&&(t.oninput=()=>((e,t)=>{const r=e.value;t.textContent=r+" ETH",t.style.left=10*r+"%",t.classList.add("show")})(t,e),t.onblur=()=>e.classList.remove("show"))})()},829:function(){const e=document.querySelectorAll("[data-scroll]");e&&document.addEventListener("DOMContentLoaded",(()=>{e.forEach((e=>{const t=e,r=e.getAttribute("data-scroll"),s=document.getElementById(r).offsetTop;t.addEventListener("click",(e=>{e.preventDefault(),window.scrollTo({top:s-250,behavior:"smooth"})}))}))}))},685:function(){(()=>{const e=document.querySelectorAll(".select__header"),t=document.querySelectorAll(".select__item");function r(){this.parentElement.classList.toggle("active")}function s(){const e=this.innerText,t=this.closest(".select");t.querySelector(".select__current").innerText=e,t.classList.remove("active")}e.forEach((e=>{e.addEventListener("click",r)})),t.forEach((e=>{e.addEventListener("click",s)}))})()},804:function(){new Swiper(".popular__slider-wrapper",{preloadImages:!1,lazy:{loadOnTransitionStart:!1,loadPrevNext:!0},watchSlidesProgress:!0,watchSlidesVisibility:!0,spaceBetween:32,keyboard:{enabled:!0,pageUpDown:!0},navigation:{nextEl:".arrow--next--popular",prevEl:".arrow--prev--popular"},breakpoints:{375:{slidesPerView:1.5},446:{slidesPerView:2},576:{slidesPerView:2.6},768:{slidesPerView:3},991:{slidesPerView:4},1024:{slidesPerView:4},1025:{slidesPerView:5}}}),new Swiper(".hot-bid",{preloadImages:!1,lazy:{loadOnTransitionStart:!1,loadPrevNext:!1},watchSlidesProgress:!0,watchSlidesVisibility:!0,spaceBetween:32,keyboard:{enabled:!0,pageUpDown:!0},breakpoints:{375:{slidesPerView:1.4},446:{slidesPerView:1.5},576:{slidesPerView:2},768:{slidesPerView:2.7},991:{slidesPerView:3},1024:{slidesPerView:3},1025:{slidesPerView:4}},navigation:{nextEl:".hot-bid-arrow--next",prevEl:".hot-bid-arrow--prev"}}),new Swiper(".collections__container",{spaceBetween:32,loop:!0,keyboard:{enabled:!0,pageUpDown:!0},navigation:{nextEl:".arrow--next--collections",prevEl:".arrow--prev--collections"},breakpoints:{375:{slidesPerView:1,enabled:!0},446:{slidesPerView:1.3},576:{slidesPerView:1.8},768:{slidesPerView:2},1024:{slidesPerView:2.5,enabled:!0},1025:{slidesPerView:3,enabled:!1}}}),(()=>{const e={discoveryContainer:document.querySelector(".discovery__container"),discoveryWrapper:document.querySelector(".discovery__wrapper"),discoverySlide:document.querySelectorAll(".hot-bid__item--discovery")};var t;e.discoveryContainer&&3===Object.keys(e).length&&(window.innerWidth<445?((t=e).discoveryContainer.classList.add("swiper"),t.discoveryWrapper.classList.add("swiper-wrapper"),t.discoverySlide.forEach((e=>{e.classList.add("swiper-slide")}))):e.discoveryContainer.classList.contains("swiper")&&function(e,t){e.discoveryContainer.classList.a("swiper"),e.discoveryWrapper.classList.a("swiper-wrapper"),e.discoverySlide.forEach((e=>{e.classList.a("swiper-slide")}))}(remove()))})(),new Swiper(".discovery__container",{spaceBetween:16,slidesPerView:1.2,initialSlide:1,centeredSlides:!0,centerInsufficientSlides:!0,keyboard:{enabled:!0,pageUpDown:!0},navigation:{nextEl:".arrow--next--discovery",prevEl:".arrow--prev--discovery"}}),new Swiper(".explore",{spaceBetween:32,slidesPerView:4,breakpoints:{375:{slidesPerView:1,enabled:!0},446:{slidesPerView:1.5},576:{slidesPerView:2},768:{slidesPerView:2.5},991:{slidesPerView:3.5},1024:{slidesPerView:4,enabled:!1}}})},195:function(){const e=()=>{const e=document.documentElement;e.classList.contains("light")?(e.classList.remove("light"),e.classList.add("dark")):(e.classList.remove("dark"),e.classList.add("light"))};document.querySelectorAll(".form__switchMode").forEach((t=>{t.addEventListener("change",e)}))}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,r),n.exports}r.d=function(e,t){for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(395),r(146),r(379),r(359),r(110),r(822),r(70),r(829),r(685),r(804),r(195)}();