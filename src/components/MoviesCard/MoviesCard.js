import React from 'react';
import './MoviesCard.css';
import { useLocation, matchPath } from 'react-router'
import SaveBtn from '../SaveBtn/SaveBtn';

function MoviesCard({
  moviesCard,
  moviesCardList,
  onSave,
  onDelete }){


  const isSaved =
    moviesCard.id && moviesCardList.some((m) => m.movieId === moviesCard.id)

  const location = useLocation()

  const handleClickMovie = () => {
    if (isSaved) {
      onDelete(
        moviesCardList.filter((m) => m.movieId === moviesCard.id)[0]
      )
    } else {
      onSave(moviesCard)
      console.log(moviesCard)
    }
  }

  const handleDeleteClick = () => {
    console.log(moviesCard)
    onDelete(moviesCard)
  }

  return (
    <div className='movies-card'>
      <a
        className="movies-card__link"
        href={moviesCard.trailerLink}
        target="_blank"
        rel="noreferrer"
      >

         <img className='movies-card__img'
          alt={`Фото к фильму ${moviesCard.nameRu}`}
          src={moviesCard.image}
        />
 </a>
      <div className='movies-card__content'>
        <div className='movies-card__content-text'>
          <h3 className='movies-card__content-text-title'>{moviesCard.nameRU}</h3>
          <p className='movies-card__content-text-duration'>{moviesCard.duration}</p>
        </div>
        {matchPath({ path: '/movies' }, location.pathname) && (
          <SaveBtn
            isSavedMovie={isSaved}
            onClick={handleClickMovie}
          />
        )}
        {matchPath({ path: '/saved-movies' }, location.pathname) && (
          <button
            type="button"
            className='movies-card__content-btn-del'
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </div>


  )
}

export default MoviesCard;

