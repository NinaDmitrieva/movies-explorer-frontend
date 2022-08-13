import React from 'react';
import './AboutMe.css';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import foto from '../../images/foto.jpg'
import Portfolio from '../Portfolio/Portfolio';

const AboutMe = () => {
  return (
    <section className='about-me' id="me">
      <ProjectTitle title='Студент' />
      <div className='about-me__content'>
        <div className='about-me__info'>
          <div className='about-me__info-text'>
            <h2 className='about-me__info-text__name'>Нина</h2>
            <p className='about-me__info-text__job'>Фронтенд-разработчик</p>
            <p className='about-me__info-text__text'>Тут должен быть текст обо мне, но копипастить то,что есть в макете жутко скучно, а писать что то новое - на это нужно время, поэтому я вернусь к этому пункту чуть позже, потому что адаптив сам себя не сделает.будет смешно, если я забуду удалить этот текст</p>
            <nav className='about-me__info-text__nav'>
              <a className='about-me__info-text__nav-element' href='https://github.com/NinaDmitrieva' target="_blank" rel="noreferrer">Github</a>
              <a className='about-me__info-text__nav-element' href='https://ru-ru.facebook.com' target="_blank" rel="noreferrer">Facebook</a>
            </nav>
          </div>
        <div className='about-me__info-foto'>
            <img className='about-me__info-foto__foto' src={foto} alt='фото портфолио' />
        </div>
        </div>
      </div>
      <Portfolio />

    </section>
  )
}

export default AboutMe;