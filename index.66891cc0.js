function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequire987d;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequire987d=a),a.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var a={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},r=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.66891cc0.js","80Vjd":"noimage.10a54d7e.jpg","7mVsD":"index.68900f54.css","eM9ss":"library.6ddfc849.js"}')),a("YttQV"),a("hoWMN"),a("2sKPt");var i,s=a("2sKPt"),l=(s=a("2sKPt"),a("YttQV"));async function c(){const e=await(0,s.getTrending)();p.innerHTML=e.slice(0,12).map((e=>{let n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";const o=(0,l.getGenre)(e.genre_ids),r=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(i);return`\n      <li class="card tracking" data-movie="${e.id}">\n    <div class="movie__info">        \n      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${r}" alt="movie-title" loading="lazy"/>\n    </div>\n  <p class="movie__name">${e.title}</p>\n  <p class="movie__description"> ${o}\n   | ${n.slice(0,4)}</p>\n</li>`})).join("");b(document.querySelectorAll(".card"))}i=new URL(a("kyEFX").resolve("80Vjd"),import.meta.url).toString(),c();var d=a("7Y9D8");l=a("YttQV");function u(e){const n=e.genres.map((e=>e.id));return`<div class="modal__info">\n<span class="modal__closeBtn" type="button">x</span>\n<div class="container__img">\n\n<button class="button_trailer" type="button" id="button_trailer"\n></button>\n  <img class="img" src="${e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(i)}" alt="${e.title}" />\n</div>\n<div class="container__text">\n  <div class="info__text">\n    <h1 class="info__title">${e.title}</h1>\n  </div>\n  <div class="info__movie">\n    <div class="info__name">\n      <p class="name">Vote / Votes</p>\n      <p class="name">Popularity</p>\n      <p class="name">Original Title</p>\n      <p class="name">Genre</p>\n    </div>\n    <div class="info__value">\n      <p class="value">\n        <span class="value__orange">${e.vote_average}</span> / <span class="value__white"\n          >${e.vote_count}</span\n        >\n      </p>\n      <p class="value">${e.popularity}</p>\n      <p class="value">${e.original_title}</p>\n      <p class="value">${(0,l.getGenre)(n)}</p>\n    </div>\n  </div>\n  <h2 class="about">ABOUT</h2>\n  <p class="about__text">${e.overview}</p>\n  <ul class="button">\n    <li class="button__item">\n      <button class="button__watched" type="button">ADD TO WATCHED</button>\n    </li>\n    <li class="button__item">\n      <button class="button__queue" type="button">ADD TO QUEUE</button>\n    </li>\n  </ul>\n</div>\n</div>\n<div class="trailer__modal trailerHiden ">Trailer<div class="trailer">\n<iframe class="iframe" id="iframe" frameborder="0" border="0" cellspacing="0" allowfullscreen src="" title="Youtube">\n</iframe>\n<button class="button_trailer-close">X</button></div></div>\n`}l=a("YttQV");function m(e){e.map((e=>{let n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";const o=(0,l.getGenre)(e.genre_ids),r=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(i);return`\n    <li class="card tracking" data-movie="${e.id}">\n      <div class="movie__info">        \n        <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${r}" alt="movie-title" loading="lazy"/>\n      </div>\n    <p class="movie__name">${e.title}</p>\n    <p class="movie__description"> ${o}\n     | ${n.slice(0,4)}</p>\n  </li>`})).join("")}const p=document.querySelector(".gallery"),_=document.querySelector(".search-input"),f=document.querySelector(".modal"),v=(document.querySelector(".movie"),document.querySelector(".search-form")),g=document.querySelector(".modal");function b(e){e.forEach((e=>{e.addEventListener("click",(()=>async function(e){f.classList.add("show-popup");const t=e.getAttribute("data-movie"),n=await(0,s.getInfoAboutMovie)(t),o=await(0,s.getMovieTrailer)(t);g.innerHTML=u(n);const r=document.querySelector(".modal__closeBtn"),a=document.querySelector(".trailer__modal"),i=document.querySelector(".button_trailer-close"),l=document.querySelector(".button_trailer");let c=document.querySelector(".iframe");const d=document.querySelector(".trailer"),m=document.querySelector(".modal__info");l.addEventListener("click",(()=>{a.classList.remove("trailerHiden"),m.classList.add("hidden"),g.classList.add("overflow"),c.src=`https://www.youtube.com/embed/${o}`})),d.addEventListener("click",(()=>{a.classList.add("trailerHiden"),g.classList.remove("overflow"),m.classList.remove("hidden"),c.src=""})),i.addEventListener("click",(()=>{a.classList.add("trailerHiden"),g.classList.remove("overflow"),c.src=""})),r.addEventListener("click",(()=>f.classList.remove("show-popup")));const p=document.querySelector(".button__watched"),_=JSON.parse(localStorage.getItem("watchedMovies"))||[];_.indexOf(t)>-1?(p.innerHTML="DELETE FROM WATCHED",p.style.backgroundColor="#ff6b01"):p.style.backgroundColor="#fff";function v(e){const t=_.indexOf(e);t>-1?(_.splice(t,1),localStorage.setItem("watchedMovies",JSON.stringify(_)),p.innerHTML="ADD TO WATCHED",p.style.backgroundColor="#fff"):(_.push(e),localStorage.setItem("watchedMovies",JSON.stringify(_)),p.innerHTML="DELETE FROM WATCHED",p.style.backgroundColor="#ff6b01")}p.addEventListener("click",(()=>{v(t)}));const b=document.querySelector(".button__queue"),y=JSON.parse(localStorage.getItem("queueMovies"))||[];y.indexOf(t)>-1&&(b.innerHTML="DELETE FROM QUEUE",b.style.backgroundColor="#ff6b01");function h(e){const t=y.indexOf(e);t>-1?(y.splice(t,1),localStorage.setItem("queueMovies",JSON.stringify(y)),b.innerHTML="ADD TO QUEUE",b.style.backgroundColor="#fff"):(y.push(e),localStorage.setItem("queueMovies",JSON.stringify(y)),b.innerHTML="DELETE FROM QUEUE",b.style.backgroundColor="#ff6b01")}b.addEventListener("click",(()=>{h(t)}))}(e)))}))}v.addEventListener("submit",(async function(e){e.preventDefault();const n=_.value,o=await(0,s.getBySearch)(n);if(0===o.length)return c(),t(d).Notify.failure("Oops, there is no movie with that name");p.innerHTML=m(o);b(document.querySelectorAll(".card"))})),a("aCSv8");let y=localStorage.getItem("theme")||"light";document.querySelector(".btn-switch").addEventListener("click",(function(){"dark"===y?(document.querySelector("body").classList.remove("dark"),y="light"):(document.querySelector("body").classList.add("dark"),y="dark"),localStorage.setItem("theme",y)})),"dark"===y&&document.querySelector("body").classList.add("dark"),a("5oRYk"),a("kZwB7"),a("f19cm");
//# sourceMappingURL=index.66891cc0.js.map