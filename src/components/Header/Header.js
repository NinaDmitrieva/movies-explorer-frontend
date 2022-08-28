import { Link } from 'react-router-dom';
import { React, useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './Header.css';
import Logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import Account from '../Account/Account';
import Menu from '../Menu/Menu';
import MenuBtn from '../MenuBtn/MenuBtn';

function Header({ loggedIn}) {

  const location = useLocation();

  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 768

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  function handleClickBurgerMenu() {
    setIsBurgerMenuOpen(!isBurgerMenuOpen)
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false)
  }


  if (width < breakpoint) {
    return (
      <section className='header'>
        <NavLink to="/">
          <img className='header__logo' src={Logo} alt='Лого' />
        </NavLink>

        {location.pathname === "/" && loggedIn ? (
          <>
            <MenuBtn
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
            />
            <Menu
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
              onClose={handleCloseBurgerMenu}
            />
          </>
        ) : ('')}

        {location.pathname === '/movies' && !loggedIn ? (
          <>
            <MenuBtn
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
            />
            <Menu
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
              onClose={handleCloseBurgerMenu}
            />
          </>
        ) : ('')}

        {location.pathname === '/saved-movies' && !loggedIn ? (
          <>
            <MenuBtn
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
            />
            <Menu
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
              onClose={handleCloseBurgerMenu}
            />
          </>
        ) : ('')}

        {location.pathname === '/profile' && !loggedIn ? (
          <>
            <MenuBtn
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
            />
            <Menu
              isOpen={isBurgerMenuOpen}
              handleClick={handleClickBurgerMenu}
              onClose={handleCloseBurgerMenu}
            />
          </>
        ) : ('')}

      </section>
    )

  }


  return (
    <section className='header'>
      <NavLink to="/">
        <img className='header__logo' src={Logo} alt='Лого' />
      </NavLink>

      {location.pathname === "/" && !loggedIn ? (
        <nav className='header__link'>
          <Link className='header__link-element' to='/signup'>Регистрация</Link >
          <Link className='header__link-element' to='/signin'>Войти</Link >
        </nav>
      ) : (
      <>
        <Navigation />
        <Account />
      </>) }

    </section>
  )

}

export default Header;