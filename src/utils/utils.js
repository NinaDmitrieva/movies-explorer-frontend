import { MOVIES_URL, DEF_IMG } from './const'

export function changeMovies(movies) {
  movies.forEach((movie) => {
    if (!movie.image) {
      movie.image = DEF_IMG
      movie.thumbnail = DEF_IMG
      movie.trailerLink = DEF_IMG
    } else {
      movie.thumbnail = `${MOVIES_URL}${movie.image.formats.thumbnail.url}`
      movie.image = `${MOVIES_URL}${movie.image.url}`
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

export function getTimeFromMin(min) {
  const hours = Math.trunc(min / 60)
  const minutes = min % 60
  return `${hours}ч ${minutes}м`
}