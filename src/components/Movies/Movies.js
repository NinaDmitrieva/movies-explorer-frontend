import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import NotFound from '../NotFound/NotFound';

const Movies = () => {
  return (
    <section className='movies'>
      <Header />
      <SearchForm />
      <Footer />
    </section>
  )
}

export default Movies;

