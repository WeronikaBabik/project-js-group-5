!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire987d;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire987d=r);var i=document.getElementById("watchedButton"),o=document.getElementById("queueButton");i.addEventListener("click",(function(){i.classList.add("active"),o.classList.remove("active")})),o.addEventListener("click",(function(){o.classList.add("active"),i.classList.remove("active")})),r("hhzHx"),r("cWg52"),r("2lJ8w");var c=r("bpxeT"),s=r("2TvXO"),l=r("2pRc6"),d=r("1TaP3"),u=document.querySelector(".movie-icon"),p=document.querySelector(".gallery-library");function f(){return JSON.parse(localStorage.getItem("watchedMovies"))}function v(){return(v=e(c)(e(s).mark((function t(){var n,a,r,i,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,f();case 3:a=e.sent,r=0;case 5:if(!(r<=a.length)){e.next=15;break}return i=a[r],e.next=9,(0,l.getInfoAboutMovie)(i);case 9:m(o=e.sent),n.push(o);case 12:r++,e.next=5;break;case 15:return e.abrupt("return",n);case 16:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function m(e){u.innerHTML="";var t="";t=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";var n=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):noimage,a=e.genres.map((function(e){return e.id}));p.innerHTML='<li class="card tracking" data-movie="'.concat(e.id,'">\n    <div class="movie__info">        \n      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/').concat(n,'" alt="movie-title" loading="lazy"/>\n    </div>\n  <p class="movie__name">').concat(e.title,'</p>\n  <p class="movie__description">').concat((0,d.getGenre)(a)," | ").concat(t.slice(0,4),"</p>\n  </li>")}f(),function(){v.apply(this,arguments)}()}();
//# sourceMappingURL=library.e7fa210b.js.map
