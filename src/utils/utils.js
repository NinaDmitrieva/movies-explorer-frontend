import { MOVIES_URL, DEF_IMG } from './const'

//export const trailerLink_URL = 'https://www.youtube.com/';

export function changeMovies(movies) {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image = DEF_IMG
      movie.thumbnail = DEF_IMG
      movie.trailerLink = DEF_IMG
    } else {
      movie.thumbnail = `${MOVIES_URL}${movie.image.formats.thumbnail.url}`
      movie.image = `${MOVIES_URL}${movie.image.url}`
      //movie.trailerLink = `${trailerLink_URL}${movie.trailerLink}`
    }
  })
}

export function findShortMovies(movies) {
  return movies.filter((item) => item.duration < 40)
}

export function searchAndFilterMovies(movies, keyWord, checkBoxStatus) {
  const queryMovies = Array.isArray(movies)
    ? movies.filter((item) => {
      return (
        item.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
      )
    })
    : []
  if (checkBoxStatus) {
    return findShortMovies(queryMovies)
  }
  return queryMovies
}