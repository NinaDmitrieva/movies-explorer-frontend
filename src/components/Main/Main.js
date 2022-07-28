import './Main.css';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import Techs from '../Techs/Techs';
// import AboutMe from '../AboutMe/AboutMe';

const Main = () => {
  return (
    <div className='main'>
      <Promo />
      <AboutProject />
      <Techs />
      {/* <AboutMe /> */}
    </div>
  )
}

export default Main;