!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=n.parcelRequire987d;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire987d=o),o.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},a=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),a[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.aeb9cfc9.js","dymoT":"noimage.10a54d7e.jpg","7mVsD":"index.31d5bb67.css","7nwxg":"library.0e182f76.js"}')),o("1TaP3"),o("7MLza"),o("2pRc6");var i,c=o("bpxeT"),s=o("2TvXO"),l=o("2pRc6"),u=(c=o("bpxeT"),s=o("2TvXO"),l=o("2pRc6"),o("1TaP3"));function d(){return f.apply(this,arguments)}function f(){return(f=t(c)(t(s).mark((function e(){var n;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.getTrending)();case 2:n=e.sent,_.innerHTML=n.slice(0,12).map((function(e){var n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";var r=(0,u.getGenre)(e.genre_ids),a=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):t(i);return'\n      <li class="card tracking" data-movie="'.concat(e.id,'">\n    <div class="movie__info">        \n      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/').concat(a,'" alt="movie-title" loading="lazy"/>\n    </div>\n  <p class="movie__name">').concat(e.title,'</p>\n  <p class="movie__description"> ').concat(r,"\n   | ").concat(n.slice(0,4),"</p>\n</li>")})).join(""),E(document.querySelectorAll(".card"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("dymoT"),d();var p=o("6JpON");u=o("1TaP3");function m(e){var n=e.genres.map((function(e){return e.id})),r=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):t(i);return'<div class="modal__info">\n<span class="modal__closeBtn" type="button">x</span>\n<div class="container__img">\n\n<button class="button_trailer" type="button" id="button_trailer"\n></button>\n  <img class="img" src="'.concat(r,'" alt="').concat(e.title,'" />\n</div>\n<div class="container__text">\n  <div class="info__text">\n    <h1 class="info__title">').concat(e.title,'</h1>\n  </div>\n  <div class="info__movie">\n    <div class="info__name">\n      <p class="name">Vote / Votes</p>\n      <p class="name">Popularity</p>\n      <p class="name">Original Title</p>\n      <p class="name">Genre</p>\n    </div>\n    <div class="info__value">\n      <p class="value">\n        <span class="value__orange">').concat(e.vote_average,'</span> / <span class="value__white"\n          >').concat(e.vote_count,'</span\n        >\n      </p>\n      <p class="value">').concat(e.popularity,'</p>\n      <p class="value">').concat(e.original_title,'</p>\n      <p class="value">').concat((0,u.getGenre)(n),'</p>\n    </div>\n  </div>\n  <h2 class="about">ABOUT</h2>\n  <p class="about__text">').concat(e.overview,'</p>\n  <ul class="button">\n    <li class="button__item">\n      <button class="button__watched" type="button">ADD TO WATCHED</button>\n    </li>\n    <li class="button__item">\n      <button class="button__queue" type="button">ADD TO QUEUE</button>\n    </li>\n  </ul>\n</div>\n</div>\n<div class="trailer__modal trailerHiden ">Trailer<div class="trailer">\n<iframe class="iframe" id="iframe" frameborder="0" border="0" cellspacing="0" allowfullscreen src="" title="Youtube">\n</iframe>\n<button class="button_trailer-close">X</button></div></div>\n')}u=o("1TaP3");function v(e){e.map((function(e){var n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";var r=(0,u.getGenre)(e.genre_ids),a=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):t(i);return'\n    <li class="card tracking" data-movie="'.concat(e.id,'">\n      <div class="movie__info">        \n        <img class="movie__image" src="https://image.tmdb.org/t/p/w500/').concat(a,'" alt="movie-title" loading="lazy"/>\n      </div>\n    <p class="movie__name">').concat(e.title,'</p>\n    <p class="movie__description"> ').concat(r,"\n     | ").concat(n.slice(0,4),"</p>\n  </li>")})).join("")}var _=document.querySelector(".gallery"),g=document.querySelector(".search-input"),b=document.querySelector(".modal"),h=(document.querySelector(".movie"),document.querySelector(".search-form")),y=document.querySelector(".modal");function E(e){e.forEach((function(e){e.addEventListener("click",(function(){return function(e){return w.apply(this,arguments)}(e)}))}))}function w(){return(w=t(c)(t(s).mark((function e(n){var r,a,o,i,c,u,d,f,p,v,_,g,h,E,w,S;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=function(e){var t=g.indexOf(e);t>-1?(g.splice(t,1),localStorage.setItem("watchedMovies",JSON.stringify(g)),_.innerHTML="ADD TO WATCHED",_.style.backgroundColor="#fff"):(g.push(e),localStorage.setItem("watchedMovies",JSON.stringify(g)),_.innerHTML="DELETE FROM WATCHED",_.style.backgroundColor="#ff6b01")},S=function(e){var t=w.indexOf(e);t>-1?(w.splice(t,1),localStorage.setItem("queueMovies",JSON.stringify(w)),E.innerHTML="ADD TO QUEUE",E.style.backgroundColor="#fff"):(w.push(e),localStorage.setItem("queueMovies",JSON.stringify(w)),E.innerHTML="DELETE FROM QUEUE",E.style.backgroundColor="#ff6b01")},b.classList.add("show-popup"),r=n.getAttribute("data-movie"),e.next=6,(0,l.getInfoAboutMovie)(r);case 6:return a=e.sent,e.next=9,(0,l.getMovieTrailer)(r);case 9:o=e.sent,y.innerHTML=m(a),i=document.querySelector(".modal__closeBtn"),c=document.querySelector(".trailer__modal"),u=document.querySelector(".button_trailer-close"),d=document.querySelector(".button_trailer"),f=document.querySelector(".iframe"),p=document.querySelector(".trailer"),v=document.querySelector(".modal__info"),d.addEventListener("click",(function(){c.classList.remove("trailerHiden"),v.classList.add("hidden"),y.classList.add("overflow"),f.src="https://www.youtube.com/embed/".concat(o)})),p.addEventListener("click",(function(){c.classList.add("trailerHiden"),y.classList.remove("overflow"),v.classList.remove("hidden"),f.src=""})),u.addEventListener("click",(function(){c.classList.add("trailerHiden"),y.classList.remove("overflow"),f.src=""})),i.addEventListener("click",(function(){return b.classList.remove("show-popup")})),_=document.querySelector(".button__watched"),g=JSON.parse(localStorage.getItem("watchedMovies"))||[],g.indexOf(r)>-1?(_.innerHTML="DELETE FROM WATCHED",_.style.backgroundColor="#ff6b01"):_.style.backgroundColor="#fff",_.addEventListener("click",(function(){h(r)})),E=document.querySelector(".button__queue"),w=JSON.parse(localStorage.getItem("queueMovies"))||[],w.indexOf(r)>-1&&(E.innerHTML="DELETE FROM QUEUE",E.style.backgroundColor="#ff6b01"),E.addEventListener("click",(function(){S(r)}));case 34:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=t(c)(t(s).mark((function e(n){var r,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=g.value,e.next=4,(0,l.getBySearch)(r);case 4:if(0!==(a=e.sent).length){e.next=8;break}return d(),e.abrupt("return",t(p).Notify.failure("Oops, there is no movie with that name"));case 8:_.innerHTML=v(a),E(document.querySelectorAll(".card"));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.addEventListener("submit",(function(e){return S.apply(this,arguments)})),o("cWg52");var L=localStorage.getItem("theme")||"light";document.querySelector(".btn-switch").addEventListener("click",(function(){"dark"===L?(document.querySelector("body").classList.remove("dark"),L="light"):(document.querySelector("body").classList.add("dark"),L="dark"),localStorage.setItem("theme",L)})),"dark"===L&&document.querySelector("body").classList.add("dark"),o("hhzHx"),o("2lJ8w"),o("26D0h")}();
//# sourceMappingURL=index.aeb9cfc9.js.map
