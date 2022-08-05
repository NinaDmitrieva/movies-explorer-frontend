import React from 'react';
import './MoviesCard.css';
import moviesTEST from '../../images/moviesTEST.jpg';


const MoviesCard = () => {
  return (
    <div className='movies-card'>
      <img className='movies-card__img' alt ='изображение фильма' src={moviesTEST} />
      <div className='movies-card__content'>
        <div className='movies-card__content-text'>
          <h3 className='movies-card__content-text-title'>33 слова о дизайне</h3>
          <p className='movies-card__content-text-duration'>1ч42м</p>
        </div>
        <input type='checkbox' className='movies-card__content-btn-like' />
      </div>
    </div>
  )
}

export default MoviesCard;