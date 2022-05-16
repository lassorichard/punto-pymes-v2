import { NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';

import Menu from '../assets/images/menu.svg';
import Logo from '../assets/images/logo.jpg';

export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setMenuOpen(true);
    }
  }, [])

  const openMenu = () => {
    setMenuOpen(true);
  }

  const closeMenu = () => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);

    }
  }

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <nav className="header__nav">
            <div className="header__nav__icon">
              <img onClick={ openMenu } src={Menu} alt="Pymes logo" className="header__nav__icon__img" id="menu-icon"></img>
              <div onClick={ closeMenu } className={`header__nav__shadow ${menuOpen ? 'open' : 'close'}`} id="shadow"></div>
            </div>
            <ul className={`navigation ${menuOpen ? 'open' : 'close'}`} id="navigation">
              <NavLink onClick={closeMenu} to="/nosotros" className="navigation__item">
                <li className="navigation__item__li">Nosotros</li>
              </NavLink>
              <NavLink onClick={closeMenu} to="/soy-emprendedor" className="navigation__item">
                <li className="navigation__item__li">Soy Emprendedor</li>
              </NavLink>
              <NavLink onClick={closeMenu} to="/soy-estudiante" className="navigation__item">
                <li className="navigation__item__li">Soy Estudiante</li>
              </NavLink>
              <NavLink onClick={closeMenu} to="/contacto" className="navigation__item">
                <li className="navigation__item__li">Contacto</li>
              </NavLink>
            </ul>
          </nav>
          <NavLink onClick={closeMenu} to="/">
            <img src={Logo} alt="Pymes Logo" className="header__logo"></img>
          </NavLink>
        </div>
      </header>
    </>
  )
}