import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className='search'>
      <form className='search-form'>
        <div className='search-form__content' >
          <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          required />

          <button
          className='search-form__button'
          type='submit'>Поиск</button>
        </div>

        <FilterCheckbox />

      </form>
      <></>
    </section>
  )
}

export default SearchForm;
