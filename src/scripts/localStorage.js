import { getInfoAboutMovie } from "./api";
const buttonWatched = document.querySelector('.button_watched');
const buttonQueue= document.querySelector('.button_queue')
// buttonWatched.addEventListener('click', addToWatched);
// buttonQueue.addEventListener('click', addToQueue);
// buttonWatched.onclick = function () {
//     if (buttonWatched.innerHTML.toLowerCase() === 'ad to watched') {
        
//     }
// }







// let watchedMovies = [];
// let moviesInQueue = [];

// if (localStorage.getItem('watchedMovies' === null)){
//     watchedMovies = [];  
// } else {
//     watchedMovies = JSON.parse(localStorage.getItem('watchedMovies'));
// }

// if (localStorage.getItem('moviesInQueue' === null)){
//     moviesInQueue = [];  
// } else {
//     moviesInQueue = JSON.parse(localStorage.getItem('moviesInQueue'));
// }
// export  function checkLocalStorageWatched(e) {
    
// }
// function loadArrayFromLocalStorage(key) {
//     try {
//       const serializedState = localStorage.getItem(key);
//       return serializedState === null ? [] : JSON.parse(serializedState);
//     } catch (error) {
//       console.error('Get state error: ', error.message);
//     }
//   }
//   function deleteMovieFromLocalStorage(movieId, key) {
//     try {
//       const Movies = JSON.parse(localStorage.getItem(key));
//       const updatedMovies = Movies.filter(id => id !== movieId);
//       localStorage.setItem(key, JSON.stringify(updatedMovies));
//     } catch (error) {}
//   }
//   function addMovieToWatchedList(id) {
//     saveIdMovieToLocalStorage(id, 'watched', 'queue');
// }
  
function getYearFromDate(date) {
    if (!date) {
      return 'no data';
    }
    const dateRelease = new Date(date);
    return dateRelease.getFullYear();
}
async function loadArrayMoviesByArrayOfIds(arrayOfMovieIds) {
    const arrayOfPromises = arrayOfMovieIds.map(async movieId => {
      const { data } = await fetch(
        `https://api.themoviedb.org/3${movieId}?api_key=${API_KEY}&language=en-US`
      );
      return data;
    });
    const movies = await Promise.all(arrayOfPromises);
    return movies;
  }
  
  export function addClickListenerToMovie() {
    document.querySelectorAll('.movie').forEach(element => {
      element.addEventListener('click', event => {
        try {
          getInfoAboutMovie(element.dataset.movie);
        } catch (error) {
          Notify.failure(error.message);
        }
        event.preventDefault();
      });
    });
}
function loadArrayFromLocalStorage(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? [] : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
}
function deleteMovieFromLocalStorage(movieId, key) {
    try {
      const Movies = JSON.parse(localStorage.getItem(key));
      const updatedMovies = Movies.filter(id => id !== movieId);
      localStorage.setItem(key, JSON.stringify(updatedMovies));
    } catch (error) {}
}
function addMovieToWatchedList(id) {
    saveIdMovieToLocalStorage(id, 'watched', 'queue');
}
const libraryNotification = document.querySelector('.library-notification');
const movieContainer = document.querySelector('.js-movies-container');
async function showMoviesFromLocalstorage(keyOfStorage) {
    const queueArray = loadArrayFromLocalStorage(keyOfStorage);
    if (queueArray.length > 0) {
      let movies = await loadArrayMoviesByArrayOfIds(queueArray);
      renderMoviesFromLocalstorageArray(movies);
      libraryNotification.classList.toggle('is-hidden', true);
    } else {
      movieContainer.innerHTML = '';
     libraryNotification.classList.toggle('is-hidden', false);
    }
  }
  function addMovieToQueueList(id) {
    saveIdMovieToLocalStorage(id, 'queue', 'watched');
}
function saveIdMovieToLocalStorage(idMovie, key, keyToFindDuplicate) {
    let args = loadFromLocalStorage(key);
    let duplicateKey = loadFromLocalStorage(keyToFindDuplicate);
    let arr = [];
    if (!args) {
      arr.push(idMovie);
    } else {
      arr.push(...args);
      if (!arr.includes(idMovie)) {
        arr.push(idMovie);
      }
    }
    saveToLocalStorage(key, arr);

  if (duplicateKey) {
    if (duplicateKey.indexOf(idMovie) !== -1) {
      duplicateKey.splice(duplicateKey.indexOf(idMovie), 1);
      saveToLocalStorage(keyToFindDuplicate, duplicateKey);
    }
  }
}
function saveToLocalStorage(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }
  
  function loadFromLocalStorage(key) {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
  
  function renderMoviesFromLocalstorageArray(data) {
    const movies = data
      .map(movie => {
        return `<li class="movie" data-movie="${movie.id}">
        <div class="movie__info tracking">        
            <img class="movie__image"
            src="https://image.tmdb.org/t/p/w500/${poster}"
            alt="movie-title"
            loading="lazy"
            href="#" data-hystmodal="#myModal"
            />
          <p class="movie__name">${movie.title}</p>
          <p class="movie__description"> ${genre}
           | ${date.slice(0, 4)}</p>
        </div>
      </li>`;
        })
        .join('');
   
    refs.movieContainer.innerHTML = movies;
   
  
    addClickListenerToMovie();
  }
  