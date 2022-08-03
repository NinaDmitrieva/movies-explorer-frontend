import React from 'react';
import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <section className='main'>
      <Header />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer/>
    </section>
  )
}

export default Main;