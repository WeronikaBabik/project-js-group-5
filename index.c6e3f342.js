function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire987d;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire987d=a),a.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.c6e3f342.js","80Vjd":"noimage.10a54d7e.jpg","7mVsD":"index.8c352712.css","eM9ss":"library.f6818b33.js"}')),a("YttQV"),a("hoWMN"),a("2sKPt");var i,s=a("2sKPt"),l=(s=a("2sKPt"),a("YttQV"));async function c(){const e=await(0,s.getTrending)();u.innerHTML=e.slice(0,12).map((e=>{let n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";const r=(0,l.getGenre)(e.genre_ids),o=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(i);return`\n      <li class="card tracking" data-movie="${e.id}">\n    <div class="movie__info">        \n      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${o}" alt="movie-title" loading="lazy"/>\n    </div>\n  <p class="movie__name">${e.title}</p>\n  <p class="movie__description"> ${r}\n   | ${n.slice(0,4)}</p>\n</li>`})).join("");v(document.querySelectorAll(".card"))}i=new URL(a("kyEFX").resolve("80Vjd"),import.meta.url).toString(),c();var d=a("7Y9D8");l=a("YttQV");const u=document.querySelector(".gallery"),m=document.querySelector(".search-input"),p=document.querySelector(".modal"),_=(document.querySelector(".movie"),document.querySelector(".search-form")),f=document.querySelector(".modal");function v(e){e.forEach((e=>{e.addEventListener("click",(()=>async function(e){p.classList.add("show-popup");const n=e.getAttribute("data-movie"),r=await(0,s.getInfoAboutMovie)(n),o=await(0,s.getMovieTrailer)(n),a=r.genres.map((e=>e.id)),c=r.poster_path?`https://image.tmdb.org/t/p/w500/${r.poster_path}`:t(i);f.innerHTML=`\n  <div class="modal__info">\n  <span class="modal__closeBtn" type="button">x</span>\n  <div class="container__img">\n  \n  <button class="button_trailer" type="button" id="button_trailer"\n  ></button>\n    <img class="img" src="${c}" alt="${r.title}" />\n  </div>\n  <div class="container__text">\n    <div class="info__text">\n      <h1 class="info__title">${r.title}</h1>\n    </div>\n    <div class="info__movie">\n      <div class="info__name">\n        <p class="name">Vote / Votes</p>\n        <p class="name">Popularity</p>\n        <p class="name">Original Title</p>\n        <p class="name">Genre</p>\n      </div>\n      <div class="info__value">\n        <p class="value">\n          <span class="value__orange">${r.vote_average}</span> / <span class="value__white"\n            >${r.vote_count}</span\n          >\n        </p>\n        <p class="value">${r.popularity}</p>\n        <p class="value">${r.original_title}</p>\n        <p class="value">${(0,l.getGenre)(a)}</p>\n      </div>\n    </div>\n    <h2 class="about">ABOUT</h2>\n    <p class="about__text">${r.overview}</p>\n    <ul class="button">\n      <li class="button__item">\n        <button class="button__watched" type="button">ADD TO WATCHED</button>\n      </li>\n      <li class="button__item">\n        <button class="button__queue" type="button">ADD TO QUEUE</button>\n      </li>\n    </ul>\n  </div>\n</div>\n  <div class="trailer__modal trailerHiden ">Trailer<div class="trailer">\n  <iframe class="iframe" id="iframe" frameborder="0" border="0" cellspacing="0" allowfullscreen src="" title="Youtube">\n  </iframe>\n  <button class="button_trailer-close">X</button></div></div>\n  `;const d=document.querySelector(".modal__closeBtn"),u=document.querySelector(".trailer__modal"),m=document.querySelector(".button_trailer-close"),_=document.querySelector(".button_trailer");let v=document.querySelector(".iframe");const g=document.querySelector(".trailer"),b=document.querySelector(".modal__info");_.addEventListener("click",(()=>{u.classList.remove("trailerHiden"),b.classList.add("hidden"),f.classList.add("overflow"),v.src=`https://www.youtube.com/embed/${o}`})),g.addEventListener("click",(()=>{u.classList.add("trailerHiden"),f.classList.remove("overflow"),b.classList.remove("hidden"),v.src=""})),m.addEventListener("click",(()=>{u.classList.add("trailerHiden"),f.classList.remove("overflow"),v.src=""})),d.addEventListener("click",(()=>p.classList.remove("show-popup")));const y=document.querySelector(".button__watched"),h=JSON.parse(localStorage.getItem("watchedMovies"))||[];h.indexOf(n)>-1?(y.innerHTML="DELETE FROM WATCHED",y.style.backgroundColor="#ff6b01"):y.style.backgroundColor="#fff";function E(e){const t=h.indexOf(e);t>-1?(h.splice(t,1),localStorage.setItem("watchedMovies",JSON.stringify(h)),y.innerHTML="ADD TO WATCHED",y.style.backgroundColor="#fff"):(h.push(e),localStorage.setItem("watchedMovies",JSON.stringify(h)),y.innerHTML="DELETE FROM WATCHED",y.style.backgroundColor="#ff6b01")}y.addEventListener("click",(()=>{E(n)}));const S=document.querySelector(".button__queue"),w=JSON.parse(localStorage.getItem("queueMovies"))||[];w.indexOf(n)>-1&&(S.innerHTML="DELETE FROM QUEUE",S.style.backgroundColor="#ff6b01");function L(e){const t=w.indexOf(e);t>-1?(w.splice(t,1),localStorage.setItem("queueMovies",JSON.stringify(w)),S.innerHTML="ADD TO QUEUE",S.style.backgroundColor="#fff"):(w.push(e),localStorage.setItem("queueMovies",JSON.stringify(w)),S.innerHTML="DELETE FROM QUEUE",S.style.backgroundColor="#ff6b01")}S.addEventListener("click",(()=>{L(n)}))}(e)))}))}_.addEventListener("submit",(async function(e){e.preventDefault();const n=m.value,r=await(0,s.getBySearch)(n);if(0===r.length)return c(),t(d).Notify.failure("Oops, there is no movie with that name");u.innerHTML=r.map((e=>{let n="";n=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";const r=(0,l.getGenre)(e.genre_ids),o=e.poster_path?`https://image.tmdb.org/t/p/w500/${e.poster_path}`:t(i);return`\n    <li class="card tracking" data-movie="${e.id}">\n      <div class="movie__info">        \n        <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${o}" alt="movie-title" loading="lazy"/>\n      </div>\n    <p class="movie__name">${e.title}</p>\n    <p class="movie__description"> ${r}\n     | ${n.slice(0,4)}</p>\n  </li>`})).join("");v(document.querySelectorAll(".card"))})),a("aCSv8");let g=localStorage.getItem("theme")||"light";document.querySelector(".btn-switch").addEventListener("click",(function(){"dark"===g?(document.querySelector("body").classList.remove("dark"),g="light"):(document.querySelector("body").classList.add("dark"),g="dark"),localStorage.setItem("theme",g)})),"dark"===g&&document.querySelector("body").classList.add("dark"),a("5oRYk"),a("kZwB7"),a("f19cm");
//# sourceMappingURL=index.c6e3f342.js.map
