const syncLocalStorage = (action, movie) => {
  let localMovies = JSON.parse(localStorage.getItem('movies')) || [];

  if (action === 'add') {
    localMovies.push(movie);
    localStorage.setItem('movies', JSON.stringify(localMovies));
  } else if (action === 'remove') {
    localMovies = localMovies.filter(localMovie => localMovie.id !== movie.id);

    if (localMovies.length === 0) {
      localStorage.removeItem('movies');
    } else {
      localStorage.setItem('movies', JSON.stringify(localMovies));
    }
  } else if (action === 'change') {
    localMovies = localMovies.map(localMovie => {
      if (localMovie.id === movie.id) {
        return {...localMovie, isFavorite: !movie.isFavorite}
      }

      return localMovie;
    })

    localStorage.setItem('movies', JSON.stringify(localMovies));
  }

  return localMovies;
}

export default syncLocalStorage;