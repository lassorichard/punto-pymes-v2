import { BlockAboutUs } from '../components/BlockAboutUs';
import { BlockAboutUsReverse } from '../components/BlockAboutUsReverse';
import { HowItWorks } from '../components/HowItWorks';
import { Register2 } from '../components/Register2';
import { motion } from 'framer-motion';

export const Nosotros = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BlockAboutUs
        title='Quienes Somos'
        description='Somos un equipo de jóvenes profesionales que preocupados por la actualidad, creamos la primera plataforma que proporciona integridad, igualdad y oportunidades a quienes se animan a emprender y trabajar; a través de un espacio online gratuito con herramientas para hacer más simple y eficiente el proceso de emprender un negocio así como la primera experiencia laboral.'
      />
      <BlockAboutUsReverse
        title='¿Qué hacemos?'
        description='Ayudar a las Pymes con un servicio de asesoría comercial integral y gratuita, a la vez que se ayuda a un estudiante a conseguir experiencia laboral. Nuestro objetivo es ser el punto de partida e impulso hacia su mejor versión, para que Pymes y estudiantes disfruten del proceso.'
      />
      <BlockAboutUs
        title='¿Por qué lo hacemos?'
        description='Creemos que quién busca su primera experiencia laboral en aquello para lo que estuvo preparándose, que le apasiona y que eligió, así como el emprendedor que confió en sí mismo y decidió lanzarse con su idea; merecen disfrutar del proceso.'
      />
      <BlockAboutUsReverse
        title='¿Cuando lo hacemos?'
        description='A la brevedad, buscamos generar el cambio cuanto antes se pueda.'
      />
      <HowItWorks />
      <Register2 />
    </motion.div>
  )
}