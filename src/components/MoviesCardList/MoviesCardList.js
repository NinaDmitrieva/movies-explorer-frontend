import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
// import Preloader from '../Preloader/Preloader';

function MoviesCardList() {
  return (
    <section className='movies-list'>
      <div className='movies-list_content'>
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
      </div>
    </section>
  )
}

export default MoviesCardList;