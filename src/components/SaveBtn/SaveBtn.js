import React from 'react'
import './SaveBtn.css'

function SaveBtn({ onClick, isSavedMovie }) {
  return (
    <button
      type="button"
      className={
        !isSavedMovie
                ? 'movies-card__content-btn-like'
                : 'movies-card__content-btn-like movies-card__content-btn-like-activ'
      }
      onClick={onClick}
    ></button>
  )
}

export default SaveBtn