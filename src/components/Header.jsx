import { NavLink } from "react-router-dom";

import Menu from '../assets/images/menu.svg';
import Logo from '../assets/images/logo.jpg';

export const Header = () => {

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <nav className="header__nav">
            <div className="header__nav__icon">
              <img src={Menu} alt="Pymes logo" className="header__nav__icon__img" id="menu-icon"></img>
              <div className="header__nav__shadow" id="shadow"></div>
            </div>
            <ul className="navigation" id="navigation">
              <NavLink to="/nosotros" className="navigation__item">
                <li className="navigation__item__li">Nosotros</li>
              </NavLink>
              <NavLink to="/soy-emprendedor" className="navigation__item">
                <li className="navigation__item__li">Soy Emprendedor</li>
              </NavLink>
              <NavLink to="/soy-estudiante" className="navigation__item">
                <li className="navigation__item__li">Soy Estudiante</li>
              </NavLink>
              <NavLink to="/contacto" className="navigation__item">
                <li className="navigation__item__li">Contacto</li>
              </NavLink>
            </ul>
          </nav>
          <NavLink to="/">
            <img src={Logo} alt="Pymes Logo" className="header__logo"></img>
          </NavLink>
        </div>
      </header>
    </>
  )
}