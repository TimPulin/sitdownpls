"use strict";var btnsPreventDefault=document.querySelectorAll('[data-click="prevent-default"]');function createSelectus(e){var t=createTag("div",["selectus","form__select"]),n=createTag("h3",["selectus__title"]),s=createTag("span",["selectus__wrap-icon"]),i=createTag("div",["selectus__panel-wrapper","selectus__panel-wrapper--hide"]),r=createTag("div",["selectus__panel"]);return t.setAttribute("tabindex","0"),n.textContent=e,s.innerHTML=iconArrow,t.append(n),t.append(s),t.append(i),i.append(r),{selectus:t,title:n,optionsPanelWrapper:i,optionsPanel:r}}function createOption(e,t){var n=createTag("label",["selectus__label"]),s=createTag("input",["selectus__input"]),i=createTag("span",["selectus__span"]);return i.textContent=e,s.setAttribute("type","radio"),s.setAttribute("value",t),n.append(i),n.append(s),{label:n,input:s,span:i}}function createTag(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=document.createElement(e);return t.forEach((function(e){n.classList.add(e)})),n}btnsPreventDefault.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault()}))})),document.querySelectorAll(".js-custom-checkbox").forEach((function(e){e.querySelector(".form__input").addEventListener("click",(function(t){!function(e,t){e.target.checked?(t.classList.add("form__custom-checkbox--checked"),t.setAttribute("aria-checked",!0)):(t.classList.remove("form__custom-checkbox--checked"),t.setAttribute("aria-checked",!1))}(t,e)}))})),function(){var e=document.querySelector(".search__form .form__input");e.addEventListener("focus",(function(e){e.target.parentElement.classList.add("form__label--focused")})),e.addEventListener("blur",(function(e){e.target.parentElement.classList.remove("form__label--focused")})),e.addEventListener("mousedown",(function(e){e.target.parentElement.classList.add("form__label--active")})),e.addEventListener("mouseup",(function(e){e.target.parentElement.classList.remove("form__label--active")}))}(),function(){var e=document.querySelector("body"),t=document.getElementById("burger-btn"),n=document.querySelector(".nav__btn-close"),s=document.querySelector(".nav__modal"),i=s.querySelector(".nav__list");t.addEventListener("click",(function(){s.classList.add("nav__modal--open"),e.classList.add("stop-scroll"),setTimeout((function(){s.classList.add("nav__modal--non-opacity"),i.classList.add("nav__list--open")}),1)})),n.addEventListener("click",(function(){s.classList.remove("nav__modal--non-opacity"),i.classList.remove("nav__list--open"),setTimeout((function(){e.classList.remove("stop-scroll"),s.classList.remove("nav__modal--open")}),550)}))}();var iconArrow='<svg width="13" height="13" viewBox="0 -3 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M6.65674 5.80521L11.5593 0.902607L12.3136 1.65685L6.65674 7.31371L0.999884 1.65685L1.75413 0.902607L6.65674 5.80521Z" fill="#A65CF0"/>\n</svg>',targetElementList=document.querySelectorAll('[data-target="selectus');function renderSelectus(e){var t=createSelectus(getTitle(e)),n=t.selectus;t.optionsPanelWrapper;renderOptionsList(t,e),hideTargetElement(e),e.insertAdjacentElement("afterend",n),n.addEventListener("click",(function(e){n.classList.contains("selectus--opened")?(closeOptionsPanel(n,e),hidePanelWrapper(t)):(openPanelWrapper(t),openOptionsPanel(n,e),onClickCloseOptionsPanel(n),setSizingPanelWrapper(t))})),setSizingPanelWrapper(t),hidePanelWrapper(t)}function renderOptionsList(e,t){for(var n=t.querySelectorAll("option"),s=0;s<n.length;s++){var i=n[s];if(!i.selected){var r=createOption(i.innerText,i.value);e.optionsPanel.append(r.label),r.input.addEventListener("click",(function(t){setTitleText(e,t),closeOptionsPanel(e.selectus,t),hidePanelWrapper(e)}))}}}function getTitle(e){return e.querySelector("option[selected]")?e.querySelector("option[selected]").textContent:e.querySelectorAll("option")[0].textContent}function setSizingPanelWrapper(e){e.optionsPanelWrapper.style.width=e.optionsPanel.offsetWidth+"px",e.optionsPanelWrapper.style.height=e.optionsPanel.offsetHeight+"px"}function onClickCloseOptionsPanel(e){document.addEventListener("click",(function t(n){e.contains(n.target)||(closeOptionsPanel(e,n),document.removeEventListener("click",t))}))}function openOptionsPanel(e,t){setTimeout((function(){e.classList.add("selectus--opened")}),1),t.stopPropagation()}function closeOptionsPanel(e,t){e.classList.remove("selectus--opened"),t.stopPropagation()}function openPanelWrapper(e){e.optionsPanelWrapper.classList.remove("selectus__panel-wrapper--hide")}function hidePanelWrapper(e){setTimeout((function(){e.optionsPanelWrapper.classList.add("selectus__panel-wrapper--hide")}),400)}function setTitleText(e,t){e.title.textContent=t.target.value}function hideTargetElement(e){e.classList.add("element--invisible")}targetElementList.forEach((function(e){renderSelectus(e)}));var swiperItems=document.querySelectorAll(".swiper");function setControlButtonsSlide(e,t){var n=findControlButtons(e);n[0].addEventListener("click",(function(){console.log(),t.swiper.slidePrev()})),n[1].addEventListener("click",(function(){t.swiper.slideNext()}))}function setControlButtonsJump(e,t){var n=findControlButtons(e);n[0].addEventListener("click",(function(){t.swiper.slideTo(1)})),n[1].addEventListener("click",(function(){t.swiper.slideTo(10)})),n[2].addEventListener("click",(function(){t.swiper.slideTo(16)}))}function findControlButtons(e){return document.querySelectorAll('[data-swiper-btn-target="'.concat(e,'"]'))}swiperItems.forEach((function(e){var t=e.dataset.swiperId;"bans"===t&&new Swiper(e,{direction:"horizontal",loop:!0,grabCursor:!0,pagination:{el:".swiper-pagination"}}),"specials"===t&&(new Swiper(e,{direction:"horizontal",loop:!0,slidesPerView:3,slidesPerGroup:3,grabCursor:!0,spaceBetween:32,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1},1024:{slidesPerView:3,slidesPerGroup:1},1280:{slidesPerView:3,slidesPerGroup:3}}}),setControlButtonsSlide(t,e)),"usefuls"===t&&(new Swiper(".usefuls__swiper",{direction:"horizontal",loop:!0,grabCursor:!0,slidesPerView:2,spaceBetween:32,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3},1280:{slidesPerView:2}}}),setControlButtonsSlide(t,e)),"catalog"===t&&(new Swiper(e,{direction:"horizontal",loop:!1,slidesPerView:1,grid:{fill:"row",rows:3},grabCursor:!0,spaceBetween:32,breakpoints:{320:{slidesPerView:2,slidesPerGroup:2,spaceBetween:16},1024:{slidesPerView:3,slidesPerGroup:3}}}),setControlButtonsJump(t,e)),"related-product"===t&&(new Swiper(e,{direction:"horizontal",loop:!0,grid:{fill:"row",rows:1},grabCursor:!0,spaceBetween:38,breakpoints:{320:{slidesPerView:2,spaceBetween:16},767:{slidesPerView:2},1024:{slidesPerView:3},1309:{slidesPerView:4}}}),setControlButtonsSlide(t,e)),"thumbs-main"===t&&new Swiper(e,{direction:"horizontal",slidesPerView:3,slidesPerGroup:1,loop:!1,grid:{fill:"row",rows:1},grabCursor:!0,spaceBetween:38,breakpoints:{320:{direction:"horizontal",slidesPerView:2.4,slidesPerGroup:1,spaceBetween:16},767:{direction:"vertical",slidesPerView:4,spaceBetween:18},1024:{direction:"horizontal",slidesPerView:3.3,slidesPerGroup:1},1309:{slidesPerView:4}}}),"thumbs-modal"===t&&(new Swiper(e,{direction:"horizontal",slidesPerView:3,slidesPerGroup:1,loop:!1,grid:{fill:"row",rows:1},grabCursor:!0,spaceBetween:38,breakpoints:{320:{slidesPerView:1,spaceBetween:16},767:{slidesPerView:2,spaceBetween:18},1024:{slidesPerView:3},1309:{slidesPerView:4}}}),setControlButtonsSlide(t,e))})),document.querySelectorAll(".tooltip").forEach((function(e){e.addEventListener("mouseenter",(function(){!function(e){var t=e.querySelector(".tooltip__panel");t.classList.add("tooltip__panel--displayed")}(e)})),e.addEventListener("mouseleave",(function(){!function(e){var t=e.querySelector(".tooltip__panel");t.classList.remove("tooltip__panel--displayed")}(e)}))}));
//# sourceMappingURL=script.js.map
