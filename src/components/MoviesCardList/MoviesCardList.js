import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({
  movies,
  moviesCardList,
  onSave,
  onDelete,
  isSaved,
}) {

  return (
    <section className='movies-list'>

      {movies.map((moviesCard) => (
        <MoviesCard
          key={moviesCard.id || moviesCard.movieId}
          moviesCard={moviesCard}
          moviesCardList={moviesCardList}
          onSave={onSave}
          onDelete={onDelete}
          isSaved={isSaved}
        />
      ))}


    </section>
  )
}

export default MoviesCardList;