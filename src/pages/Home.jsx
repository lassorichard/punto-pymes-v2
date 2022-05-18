import { HeroInfo } from '../components/HeroInfo';
import { DoubleBlock } from '../components/DoubleBlock';
import { BlockAboutUs } from '../components/BlockAboutUs';
import { Projects } from '../components/Projects';
import { Carousel } from '../components/Carousel';
import { Register2 } from '../components/Register2';

import EmprendedoresMobile from '../assets/images/emprendedores/emprendedores-mobile.jpg'
import EmprendedoresDesktop from '../assets/images/emprendedores/emprendedores-desktop.jpg'

export const Home = () => {

  return (
    <>
      <HeroInfo
        title='Somos PuntoPYMES'
        paragraph='En PuntoPymes podrás encontras diferentes proyectos de emprendedores que buscan trabajar con profesionales freelance. Entre todos formamos la comunidad de PuntoPymes en Argentina.'
        mobileImage={ EmprendedoresMobile }
        desktopImage={ EmprendedoresDesktop }
      />
      <DoubleBlock />
      <BlockAboutUs />
      <Projects />
      <Carousel />
      <Register2 />
    </>
  )
}