import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (

      <div className='portfolio'>
        <h3 className='portfolio__title'>Портфолио</h3>

        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>

            <a
            className='portfolio__list-item-text'
              href='https://ninadmitrieva.github.io/how-to-learn'
              target="_blank"
              rel="noreferrer"
            >
            <p className='portfolio__list-item-text-p'>Статичный сайт</p>
            <span className="portfolio__list-item-span">↗</span>
            </a>

            <a
            className='portfolio__list-item-text'
              href='https://ninadmitrieva.github.io/how-to-learn'
              target="_blank"
              rel="noreferrer"
            >
            <p className='portfolio__list-item-text-p'>Адаптивный сайт</p>
            <span className="portfolio__list-item-span">↗</span>
            </a>

            <a
            className='portfolio__list-item-text'
              href='https://ninadmitrieva.github.io/how-to-learn'
              target="_blank"
              rel="noreferrer"
            >
            <p className='portfolio__list-item-text-p'>Одностраничное приложение</p>
            <span className="portfolio__list-item-span">↗</span>
            </a>

          </li>
        </ul>

      </div>

  )
}

export default Portfolio;