!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=t.parcelRequire987d;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire987d=a);var r=document.getElementById("watchedButton"),o=document.getElementById("queueButton");r.addEventListener("click",(function(){r.classList.add("active"),o.classList.remove("active")})),o.addEventListener("click",(function(){o.classList.add("active"),r.classList.remove("active")})),a("hhzHx"),a("cWg52"),a("2lJ8w");var c=a("bpxeT"),s=a("2TvXO"),d=a("2pRc6"),u=a("1TaP3"),l=a("26D0h"),f=a("lagbz"),p=document.querySelector(".movie-icon"),v=document.querySelector(".gallery-library"),h=document.querySelector("#watchedButton"),m=document.querySelector("#queueButton");function g(e){return _.apply(this,arguments)}function _(){return(_=e(c)(e(s).mark((function t(n){var i,a,r,o,c;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.refs.paginationRef.classList.add("is-hidden"),i=[],e.next=4,w(n);case 4:if(!((a=e.sent)&&a.length>0)){e.next=24;break}if(p.innerHTML="",l.refs.paginationRef.classList.add("is-hidden"),!(a&&a.length>0)){e.next=23;break}b(),r=0;case 11:if(!(r<a.length)){e.next=21;break}return o=a[r],e.next=15,(0,d.getInfoAboutMovie)(o);case 15:y(c=e.sent),i.push(c);case 18:r++,e.next=11;break;case 21:e.next=24;break;case 23:b();case 24:return e.abrupt("return",i);case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function w(e){return JSON.parse(localStorage.getItem(e))}function b(){v.innerHTML=""}function y(e){var t="";t=e.release_date?e.release_date:e.first_air_date?e.first_air_date:"No date";var n=e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg",i=e.genres.map((function(e){return e.id}));v.innerHTML+='<li class="card tracking" data-movie="'.concat(e.id,'">\n    <div class="movie__info">        \n      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/').concat(n,'" alt="movie-title" loading="lazy"/>\n    </div>\n    <p class="movie__name">').concat(e.title,'</p>\n    <p class="movie__description">').concat((0,u.getGenre)(i)," | ").concat(t.slice(0,4),"</p>\n  </li>");var a=document.querySelectorAll(".tracking");a.forEach((function(e){e.addEventListener("click",(function(){!function(e){k.apply(this,arguments)}(e.getAttribute("data-movie")),(0,f.showPopUp)(e)}))}))}l.refs.paginationRef.classList.add("is-hidden"),h.addEventListener("click",(function(){g("watchedMovies")})),m.addEventListener("click",(function(){g("queueMovies")})),window.addEventListener("DOMContentLoaded",(function(){g("watchedMovies"),l.refs.paginationRef.classList.add("is-hidden")}));var x="d793dd4ca6e7be6c8e5a071661ccb72e",L="https://api.themoviedb.org/3";function k(){return(k=e(c)(e(s).mark((function t(n){var i,a;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(L,"/movie/").concat(n,"?api_key=").concat(x));case 2:return(i=e.sent).ok||(reject(Notiflix.Notify.failure("Oops, there is no movie with that name")),"undefined"===n&&reject(Notiflix.Notify.failure("Oops, there is no movie with that name"))),e.next=6,i.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}}();
//# sourceMappingURL=library.ede447ff.js.map
