import { getMovieTrailer, getTrending } from './api';
import { getGenre } from './genres';

export const mainGallery = document.querySelector('.gallery');

getTrending().then(data => {
  mainGallery.insertAdjacentHTML('beforeend', showGallery(data));
});
export function showGallery(movies) {
  return movies
    .map(movie => {
      //let movieId = movie.id;
      //const keyOfTrailer = getMovieTrailer(movie.id).then(data => {
      //  for (let value of data) {
      //   console.log(value.key);
      // }
      //});
      let date = '';
      if (movie.release_date) {
        date = movie.release_date;
      } else if (movie.first_air_date) {
        date = movie.first_air_date;
      } else {
        date = `No date`;
      }
      const genre = getGenre(movie.genre_ids);
      const poster = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        : noimage;
      return `
    <li class="card tracking" data-movie="${movie.id}">
      <div class="movie__info">        
        <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${poster}" alt="movie-title" loading="lazy"/>
      </div>
    <p class="movie__name">${movie.title}</p>
    <p class="movie__description"> ${genre}
     | ${date.slice(0, 4)}</p>
  </li>`;
    })
    .join('');
  const cards = document.querySelectorAll('.card');
  addEventToCard(cards);
}

async function showTrailer(id) {
  e.preventDefault();
  const query = input.value;
  const data = await getMovieTrailer(query);
}
