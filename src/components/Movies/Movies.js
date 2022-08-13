import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList />
      <div className="btn-content">
        <button className="btn-content__btn-more" type="button">Ещё</button>
      </div>
    </section>
  )
}

export default Movies;

