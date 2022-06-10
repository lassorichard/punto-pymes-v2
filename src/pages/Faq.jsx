import {HowItWorks} from '../components/HowItWorks'
import { motion } from 'framer-motion'

export const Faq = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="faq">
        <div className="container terms__container">
          <br />
          <br />
          <h2 className="heading-2">Preguntas Frecuentes</h2>
          <br />
          <br />
          <h3 className="heading-3">¿Qué es punto pymes?</h3>
          <br />
          <p className="paragraph">
            Punto Pymes es un espacio online gratuito con herramientas para hacer más simple y eficiente el proceso de emprender un negocio así como la primera experiencia laboral.
          </p>
          <br />
          <h3 className="heading-3">¿A quiénes va dirigido?</h3>
          <br />
          <p className="paragraph">
            Va dirigido a estudiantes/profesionales que deseen colaborar con algún emprendedor y obtener experiencia laboral. También apunta a los emprendedores que requieran ayuda con la administración de su negocio.
          </p>
          <br />
          <h3 className="heading-3">¿La utilización del servicio supone algún costo para mi como emprendedor?</h3>
          <br />
          <p className="paragraph">
            No, el servicio estándar es gratuito. Solo en el caso de que el servicio que necesites requiera algún costo, te lo haremos saber antes.
          </p>
          <br />
          <h3 className="heading-3">¿Cómo puedo hacer para solicitar/ofrecer algún servicio?</h3>
          <br />
          <p className="paragraph">
            No, el servicio estándar es gratuito. Solo en el caso de que el servicio que necesites requiera algún costo, te lo haremos saber antes.
          </p>
          <br />
          <HowItWorks />
          <br />
          <h3 className="heading-3">¿Qué datos necesitan para mi registro?</h3>
          <br />
          <br />
          <ul className='list'>
            <li>Nombre completo:</li>
            <li>DNI:</li>
            <li>Fecha de nacimiento:</li>
            <li>Tel:</li>
            <li>Email:</li>
            <li>Domicilio:</li>
            <li>Actividad que realiza:</li>
            <li>Interes respecto al servicio:</li>
          </ul>
          <br />
          <br />
          <br />
        </div>
      </section>
    </motion.div>
  )
}