import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return (
    <section className='save-movies'>
      <SearchForm />
      <MoviesCardList />
      <div className='save-movies_box'></div>
    </section>
  )
}

export default SavedMovies;