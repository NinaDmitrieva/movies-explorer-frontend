import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return (
    <section className='save-movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <div className='save-movies_box'></div>
      <Footer />
    </section>
  )
}

export default SavedMovies;