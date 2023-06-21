import { getInfoAboutMovie } from './api';
import { getGenre } from './genres';
import { refs } from './pagination-refs';

const galleryIcon = document.querySelector('.movie-icon');
const galleryLibrary = document.querySelector('.gallery-library');
const watchedButton = document.querySelector('#watchedButton');
const queueButton = document.querySelector('#queueButton');

refs.paginationRef.classList.add('is-hidden');
// Kliknięcie przycisku watched wyświetla watchedMovies
watchedButton.addEventListener('click', () => {
  displayMoviesFromLocalStorage('watchedMovies');
});
// Kliknięcie przycisku queue wyświetla queueMovies
queueButton.addEventListener('click', () => {
  displayMoviesFromLocalStorage('queueMovies');
});
// Wejście na stronę wyświetla automatycznie watchedMovies
window.addEventListener('DOMContentLoaded', () => {
  displayMoviesFromLocalStorage('watchedMovies');
});

async function displayMoviesFromLocalStorage(key) {
  const movies = [];
  const data = await getDataFromLS(key);
  //Sprawdzanie czy localstorage jest pusty, jeśli nie jest to galleryIcon znika
  if (data && data.length > 0) {
    galleryIcon.innerHTML = '';
    refs.paginationRef.classList.remove('is-hidden');
    if (data && data.length > 0) {
      clearGallery();

      for (let i = 0; i < data.length; i++) {
        const movie_id = data[i];
        let movie = await getInfoAboutMovie(movie_id);
        showMovies(movie);
        movies.push(movie);
      }
    } else {
      clearGallery();
    }
  }
  return movies;
}

function getDataFromLS(key) {
  const data = JSON.parse(localStorage.getItem(key));
  return data;
}
// Czyszczenie galeri
function clearGallery() {
  galleryLibrary.innerHTML = '';
}

function showMovies(data) {
  let date = '';
  if (data.release_date) {
    date = data.release_date;
  } else if (data.first_air_date) {
    date = data.first_air_date;
  } else {
    date = 'No date';
  }
  const poster = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : `https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg`;
  const genres = data.genres.map(genre => genre.id);
  galleryLibrary.innerHTML += `<li class="card tracking" data-movie="${
    data.id
  }">
    <div class="movie__info">        
      <img class="movie__image" src="https://image.tmdb.org/t/p/w500/${poster}" alt="movie-title" loading="lazy"/>
    </div>
    <p class="movie__name">${data.title}</p>
    <p class="movie__description">${getGenre(genres)} | ${date.slice(0, 4)}</p>
  </li>`;
  const trackingID = document.querySelectorAll('.tracking');
  addEventToCardLibrary(trackingID);
}
import { showPopUp } from './main-body';
const API_KEY = `d793dd4ca6e7be6c8e5a071661ccb72e`;
const API_URL = `https://api.themoviedb.org/3`;

function addEventToCardLibrary(cards) {
  cards.forEach(card => {
    card.addEventListener('click', () => {
      let text = card.getAttribute('data-movie');
      console.log(text);
      let singleMovie = getInfoAboutMovielibrary(text);
      console.log(singleMovie);
      showPopUp(card);
    });
  });
}

async function getInfoAboutMovielibrary(movieId) {
  const response = await fetch(
    `${API_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) {
    reject(Notiflix.Notify.failure('Oops, there is no movie with that name'));
    if (movieId === 'undefined') {
      reject(Notiflix.Notify.failure('Oops, there is no movie with that name'));
    }
  }
  const movie = await response.json();
  return movie;
}
