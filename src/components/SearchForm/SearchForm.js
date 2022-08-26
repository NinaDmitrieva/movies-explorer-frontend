import React, { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSearchMovies, savedMoviesRoute }) {
  const [keyWord, setKeyWord] = useState('')
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!savedMoviesRoute) {
      const query = localStorage.getItem('keyWord')

      if (query) {
        setKeyWord(query)
      }
    }
  }, [savedMoviesRoute])

  useEffect(() => {
    if (!savedMoviesRoute) {
      const status = localStorage.getItem('checkBoxStatus')

      if (JSON.parse(status) === true) {
        setCheckBoxStatus(true)
      } else {
        setCheckBoxStatus(false)
      }
    }
  }, [savedMoviesRoute])

  const handleSubmitSearchForm = (e) => {
    e.preventDefault()
    if (!keyWord) {
      setError(true)
    } else {
      setError(false)
      onSearchMovies(keyWord, checkBoxStatus)
    }
  }

  const handleSearchInputChange = (e) => {
    setKeyWord(e.target.value)
    setError(false)
  }

  const handleCheckBoxChange = (e) => {
    setCheckBoxStatus(e.target.checked)
    onSearchMovies(keyWord, e.target.checked)
  }


  return (
    <section className='search'>
      <form
      className='search-form'
      onSubmit={handleSubmitSearchForm}
      noValidate
      >
        <div className='search-form__content' >

          <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
          required
          onChange={handleSearchInputChange}
          autoComplete="off"
          value={keyWord || ''}
          />

          <button
          className='search-form__button'
          type='submit'
          onChange={handleCheckBoxChange}
          >Поиск</button>

          <span className='search-form__error'>
            {error ? ' Нужно ввести ключевое слово.' : ''}
          </span>

        </div>

        <div className='checkbox'>
          <input
            type='checkbox'
            className='checkbox__btn'
            onChange={handleCheckBoxChange}
             />
          <p className='checkbox__btn-text'>Короткометражки</p>
        </div>

      </form>
      <></>
    </section>
  )
}

export default SearchForm;
