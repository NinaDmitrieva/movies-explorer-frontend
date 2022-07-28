import './Header.css';
// import Logo from '../../images/logo.svg'

const Header = () => {

  return (
    <section className='header'>
      <div className='header__logo'></div>
      <div className='header__link'>
        <a className='header__link-element' href='/siginup'>Регистрация</a>
        <a className='header__link-element' href='/sigin'>Войти</a>
      </div>
    </section>
  )
}

export default Header;