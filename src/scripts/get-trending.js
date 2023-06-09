import { getTrending } from './api';
import { mainGallery } from './main-body';
import { getGenre } from './genres';
import { addEventToCard } from './main-body';

import Notiflix from 'notiflix';
let perPage = 20;
showGallery();
export async function showGallery(page) {
  const data = await getTrending(page);
  mainGallery.innerHTML = data.results
    .slice(0, 9)
    .map(e => {
      let date = '';
      if (e.release_date) {
        date = e.release_date;
      } else if (e.first_air_date) {
        date = e.first_air_date;
      } else {
        date = `No date`;
      }
      const genre = getGenre(e.genre_ids);
      const poster = e.poster_path
        ? `https://image.tmdb.org/t/p/w500/${e.poster_path}`
        : `https://upload.wikimedia.org/wikipedia/commons/4/44/Image_tagging_icon_02.svg`;
      return `
      <li class="card tracking" data-movie="${e.id}">
    <div class="movie__info">        
      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${poster}" alt="movie-title" loading="lazy"/>
    </div>
  <p class="movie__name">${e.title}</p>
  <p class="movie__description"> ${genre}
   | ${date.slice(0, 4)}</p>
</li>`;
    })
    .join('');
  const cards = document.querySelectorAll('.card');
  addEventToCard(cards);
}
