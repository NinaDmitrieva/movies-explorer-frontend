import React from 'react';
import './AboutMe.css';
import ProjectTitle from '../ProjectTitle/ProjectTitle';
import foto from '../../images/foto.jpg'

const AboutMe = () => {
  return (
    <section className='about-me' id="me">
      <ProjectTitle title='Студент' />
      <div className='about-me__content'>
        <div className='about-me__info'>
          <div className='about-me__info-text'>
            <h2 className='about-me__info-text__name'>Нина</h2>
            <p className='about-me__info-text__job'>Фронтенд-разработчик</p>
            <p className='about-me__info-text__text'>Тут будет текст о себе приблизительно вот именно такого объема. возможно, я добавлю пару фраз.но потом, но это не точно</p>
            <nav className='about-me__info-text__nav'>
              <a className='about-me__info-text__nav-element' href='https://github.com/NinaDmitrieva'>Github</a>
            </nav>
          </div>
        <div className='about-me__info-foto'>
            <img className='about-me__info-foto__foto' src={foto} alt='фото портфолио' />
        </div>
        </div>
      </div>

      <div className='about-me__portfolio'>
        <h3 className='about-me__portfolio-title'>Портфолио</h3>
        <a className='about-me__portfolio-text' href='https://ninadmitrieva.github.io/how-to-learn'>Статичный сайт <span className="about-me__portfolio-span">&#8599;</span></a>
        <a className='about-me__portfolio-text' href='https://ninadmitrieva.github.io/russian-travel/'>Адаптивный сайт  <span className="about-me__portfolio-span">&#8599;</span></a>
        <a className='about-me__portfolio-text' href='http://domainname.mesto-full.nomoreparties.sbs'>Одностраничное приложение  <span className="about-me__portfolio-span">&#8599;</span></a>
      </div>
    </section>
  )
}

export default AboutMe;