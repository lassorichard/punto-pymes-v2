import { Link, NavLink } from "react-router-dom";

import Logo from '../assets/images/logo.jpg';
import Facebook from '../assets/images/facebook.svg';
import Twitter from '../assets/images/twitter.svg';
import Linkedin from '../assets/images/linkedin.svg';

export const Footer = () => {

  return (
    <>
      <footer class="footer">
        <div class="footer__container container">
          <img class="footer__logo" src={Logo} alt="Logo Punto Pymes"></img>
          <ul class="footer__us">
            <h4 class="footer__title">Nosotros</h4>
            <li className="footer__link">
              <NavLink to="/nosotros">Quienes somos</NavLink>
            </li>
            <li className="footer__link">
              <NavLink to="/nosotros">Qué hacemos</NavLink>
            </li>
            <li className="footer__link">
              <NavLink to="/como-funciona">Cómo funciona</NavLink>
            </li>
          </ul>
          <ul class="footer__help">
            <h4 class="footer__title">Ayuda</h4>
            <li className="footer__link">
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li className="footer__link">
              <NavLink to="/terminos-condiciones">Términos y condiciones</NavLink>
            </li>
          </ul>
          <ul class="footer__help">
            <h4 class="footer__title">Contacto</h4>
            <li className="footer__link">
              <Link to="#">Email</Link>
            </li>
            <li className="footer__link">
              <Link to="#">Whatsapp</Link>
            </li>
          </ul>
          <div class="footer__social-media">
            <h4 class="footer__title">
              Seguinos en redes
            </h4>
            <div class="footer__social-media__container">
              <Link to="#" className="footer__social-media__icon">
                <img src={Facebook} alt="Icono de Facebook"></img>
              </Link>
              <Link to="#" className="footer__social-media__icon">
                <img src={Twitter} alt="Icono de twitter"></img>
              </Link>
              <Link to="#" className="footer__social-media__icon">
                <img src={Linkedin} alt="Icono de Linkedin"></img>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
