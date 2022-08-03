import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__info'>
        <span className=''>© 2022</span>
        <nav className='footer__info-nav'>
          <a className='footer__info-nav__element' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
          <a className='footer__info-nav__element' href='https://github.com/NinaDmitrieva'>Github</a>
          <a className='footer__info-nav__element' href='https://ru-ru.facebook.com'>Facebook</a>
        </nav>
      </div>
    </section>
  )
}

export default Footer;