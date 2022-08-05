import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <section className='movies'>
      <Header />
      <SearchForm />
      <MoviesCardList />
      <div className="btn-content">
        <button className="btn-content__btn-more" type="button">Ещё</button>
      </div>

      <Footer />
    </section>
  )
}

export default Movies;

