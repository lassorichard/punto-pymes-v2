import { HeroInfo } from '../components/HeroInfo'
import { BlockInfo } from '../components/BlockInfo'
import { BlockServices } from '../components/BlockServices'
import { BlockAboutUs } from '../components/BlockAboutUs'
import { HowItWorks } from '../components/HowItWorks'
import { Register } from '../components/Register'
import { motion } from 'framer-motion'

import EmprendedoresMobile from '../assets/images/emprendedores/emprendedores-mobile.jpg'
import EmprendedoresDesktop from '../assets/images/emprendedores/emprendedores-desktop.jpg'
import EmprendedoresMobile2 from '../assets/images/emprendedores/emprendedores-2.jpg'
import EmprendedoresDesktop2 from '../assets/images/emprendedores/emprendedores-2-desktop.jpg'


export const SoyEmprendedor = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroInfo
        title='Servicio para Emprendedores'
        paragraph='En PuntoPymes podrás encontras diferentes proyectos de emprendedores que buscan trabajar con profesionales freelance. Entre todos formamos la comunidad de PuntoPymes en Argentina.'
        mobileImage={EmprendedoresMobile}
        desktopImage={EmprendedoresDesktop}
      />
      <BlockInfo
        title='¿Qué podés encontrar?'
        title2='¿Qué podés encontrar?'
        paragraph="Ayudar a las Pymes con un servicio de asesoría comercial integral y gratuita, a la vez que se ayuda a un estudiante a conseguir experiencia laboral. Nuestro objetivo es ser el punto de partida e impulso hacia su mejor versión, para que Pymes y estudiantes disfruten del proceso."
        mobileImage={EmprendedoresMobile2}
        desktopImage={EmprendedoresDesktop2}
      />
      <BlockServices
        title={'Servicios para Emprendedores:'}
      />
      <BlockAboutUs
        title='¡Aprende a administrar tu negocio!'
        description='Aprende junto a los profesionales que te acompañaran en todo el proceso, enseñándote a llevar adelante el dìa a dìa en tu negocio para que puedas sobrellevarlo y obtener los mejores resultados con el ¡menor esfuerzo posible!'
      />
      <HowItWorks
        title={'¿Como accedo a la asesoría gratuita?'}
      />
      <Register
        title='¿Querés asesorarte con un Freelancer?'
      />
    </motion.div>
  )
}