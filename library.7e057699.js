!function(){var e=document.getElementById("watchedButton"),t=document.getElementById("queueButton");e.addEventListener("click",(function(){e.classList.add("active"),t.classList.remove("active")})),t.addEventListener("click",(function(){t.classList.add("active"),e.classList.remove("active")}));var c=document.querySelector(".scroll");window.addEventListener("scroll",(function(){window.pageYOffset>100?c.classList.add("scroll--active"):c.classList.remove("scroll--active")}));var n=document.querySelector(".footer-modal"),o=document.querySelector(".footer-modal__closeBtn");document.querySelector("#openFooterModal").addEventListener("click",(function(e){e.preventDefault(),n.style.display="block"})),o.addEventListener("click",(function(){n.style.display="none"})),window.addEventListener("click",(function(e){e.target===n&&(n.style.display="none")}))}();
//# sourceMappingURL=library.7e057699.js.map
