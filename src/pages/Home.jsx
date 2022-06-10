import { HeroInfo } from '../components/HeroInfo';
import { DoubleBlock } from '../components/DoubleBlock';
import { BlockAboutUs } from '../components/BlockAboutUs';
import { Projects } from '../components/Projects';
import { Carousel } from '../components/Carousel';
import { Register2 } from '../components/Register2';
import { motion } from 'framer-motion';

import EmprendedoresMobile from '../assets/images/emprendedores/emprendedores-mobile.jpg'
import EmprendedoresDesktop from '../assets/images/emprendedores/emprendedores-desktop.jpg'

export const Home = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroInfo
        title='Somos PuntoPYMES'
        paragraph='En PuntoPymes podrás encontras diferentes proyectos de emprendedores que buscan trabajar con profesionales freelance. Entre todos formamos la comunidad de PuntoPymes en Argentina.'
        mobileImage={EmprendedoresMobile}
        desktopImage={EmprendedoresDesktop}
      />
      <DoubleBlock />
      <BlockAboutUs
        title='Quienes Somos'
        description='Somos un equipo de jóvenes profesionales que preocupados por la actualidad, creamos la primera plataforma que proporciona integridad, igualdad y oportunidades a quienes se animan a emprender y trabajar; a través de un espacio online gratuito con herramientas para hacer más simple y eficiente el proceso de emprender un negocio así como la primera experiencia laboral.'
      />
      <Projects />
      <Carousel />
      <Register2 />
    </motion.div>
  )
}