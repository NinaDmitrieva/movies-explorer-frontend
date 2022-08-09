import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return (
    <section className='movies-list'>

      {/* <Preloader /> */}
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />
      <MoviesCard />

    </section>
  )
}

export default MoviesCardList;