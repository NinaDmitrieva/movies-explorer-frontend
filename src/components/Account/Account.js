import React from 'react'
import './Account.css'

function Account() {

  return (
    <div className='header__navigate'>
      <a className='header__navigate header__navigate-link' href='/profile'>
        <p className='header__navigate-text'>Аккаунт</p>
        <svg className='header__navigate-img'></svg>
      </a>
    </div>
  )
}

export default Account