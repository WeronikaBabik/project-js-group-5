!function(){var t=document.getElementById("watchedButton"),e=document.getElementById("queueButton");t.addEventListener("click",(function(){t.classList.add("active"),e.classList.remove("active")})),e.addEventListener("click",(function(){e.classList.add("active"),t.classList.remove("active")}));var n=document.querySelector(".scroll");window.addEventListener("scroll",(function(){window.pageYOffset>100?n.classList.add("scroll--active"):n.classList.remove("scroll--active")}));var o=document.querySelector(".footer-modal"),a=document.querySelector(".footer-modal__closeBtn");document.querySelector("#openFooterModal").addEventListener("click",(function(t){t.preventDefault(),o.style.display="block"})),a.addEventListener("click",(function(){o.style.display="none"})),window.addEventListener("click",(function(t){t.target===o&&(o.style.display="none")}));var r={btn1Ref:document.querySelector('[data-id="1"]'),btn2Ref:document.querySelector('[data-id="2"]'),btn3Ref:document.querySelector('[data-id="3"]'),btn4Ref:document.querySelector('[data-id="4"]'),btn5Ref:document.querySelector('[data-id="5"]'),firstPageRef:document.querySelector(".first-btn"),lastPageRef:document.querySelector(".last-btn"),paginationRef:document.querySelector(".pagination-container"),rightArrowRef:document.querySelector(".arrow-right"),leftArrowRef:document.querySelector(".arrow-left"),prevDotsRef:document.querySelector("#previous"),nextDotsRef:document.querySelector("#next"),paginationBtnEl:document.querySelectorAll(".pagination-btn"),btns:document.querySelectorAll(".pagination-btn")};r.paginationRef.addEventListener("click",(function(t){"BUTTON"===t.target.tagName&&(Number(t.target.textContent)&&(i=Number(t.target.textContent)),r.prevDotsRef.hidden=!0,r.nextDotsRef.hidden=!0,t.target.classList.contains("pagination-btn")&&(c.forEach((function(t){return t.classList.remove("pagination-select")})),t.target.classList.add("pagination-select")),t.target.classList.contains("arrow-right")&&i<1e3&&(c.forEach((function(t){return t.classList.remove("pagination-select")})),r.btn1Ref.classList.add("pagination-select"),r.btn1Ref.textContent=Number(r.btn1Ref.textContent)+5,r.btn2Ref.textContent=Number(r.btn2Ref.textContent)+5,r.btn3Ref.textContent=Number(r.btn3Ref.textContent)+5,r.btn4Ref.textContent=Number(r.btn4Ref.textContent)+5,r.btn5Ref.textContent=Number(r.btn5Ref.textContent)+5,i=r.btn1Ref.textContent),t.target.classList.contains("arrow-left")&&i>=5&&(c.forEach((function(t){return t.classList.remove("pagination-select")})),r.btn1Ref.textContent=Number(r.btn1Ref.textContent)-5,r.btn2Ref.textContent=Number(r.btn2Ref.textContent)-5,r.btn3Ref.textContent=Number(r.btn3Ref.textContent)-5,r.btn4Ref.textContent=Number(r.btn4Ref.textContent)-5,r.btn5Ref.textContent=Number(r.btn5Ref.textContent)-5,r.btn5Ref.classList.add("pagination-select"),i=r.btn5Ref.textContent),t.target.classList.contains("first-btn")&&(c.forEach((function(t){return t.classList.remove("pagination-select")})),r.btn1Ref.textContent=1,r.btn2Ref.textContent=2,r.btn3Ref.textContent=3,r.btn4Ref.textContent=4,r.btn5Ref.textContent=5,r.btn1Ref.classList.add("pagination-select"),i=r.btn1Ref.textContent,s(!0)),t.target.classList.contains("last-btn")&&(c.forEach((function(t){return t.classList.remove("pagination-select")})),r.btn1Ref.textContent=Number(r.lastPageRef.textContent)-4,r.btn2Ref.textContent=Number(r.lastPageRef.textContent)-3,r.btn3Ref.textContent=Number(r.lastPageRef.textContent)-2,r.btn4Ref.textContent=Number(r.lastPageRef.textContent)-1,r.btn5Ref.textContent=r.lastPageRef.textContent,r.btn5Ref.classList.add("pagination-select"),i=r.btn5Ref.textContent,l(!0)),Number(i)>5?s(!1):s(!0),Number(i)<996&&l(!1),window.scrollTo({top:0,behavior:"smooth"}))}));var i=1,c=document.querySelectorAll(".pagination-btn");function s(t){r.leftArrowRef.hidden=t,r.prevDotsRef.hidden=t,r.firstPageRef.hidden=t}function l(t){r.rightArrowRef.hidden=t,r.nextDotsRef.hidden=t,r.lastPageRef.hidden=t}s(!0)}();
//# sourceMappingURL=library.1a90a203.js.map
