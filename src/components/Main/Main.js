import React from 'react';
import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <section className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </section>
  )
}

export default Main;