import { HeroInfo } from '../components/HeroInfo'
import { Contact } from '../components/Contact'

import EmprendedoresMobile from '../assets/images/emprendedores/emprendedores-mobile.jpg'
import EmprendedoresDesktop from '../assets/images/emprendedores/emprendedores-desktop.jpg'

export const Contacto = () => {

  return (
    <>
      <HeroInfo
        title='Somos PuntoPYMES'
        paragraph='En PuntoPymes podrás encontras diferentes proyectos de emprendedores que buscan trabajar con profesionales freelance. Entre todos formamos la comunidad de PuntoPymes en Argentina.'
        mobileImage={ EmprendedoresMobile }
        desktopImage={ EmprendedoresDesktop }
      />
      <Contact />
    </>
  )
}