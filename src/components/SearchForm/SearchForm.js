import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <div className='search-form__form-content' >
          <input className='search-form__form-input'>
            <button className='search-form__form-button'>
            </button>
          </input>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
