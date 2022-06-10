import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const TerminosCondiciones = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="terms">
        <div className="container terms__container">
          <br />
          <br />
          <h2 className="heading-2">Términos y condiciones de sitio web</h2>
          <br />
          <br />
          <p className="paragraph">
            Este contrato es contentivo de los términos y condiciones aplicables al uso del contenido, productos y/o servicios de la web <Link to={'/'} className={'link'}>Punto Pymes</Link> para hacer uso del contenido, productos y/o servicios del sitio web el usuario deberá sujetarse a los presentes términos y condiciones.
          </p>
          <br />
          <br />
          <h3 className="heading-3">I. OBJETIVO</h3>
          <br />
          <p className="paragraph">
            Se persigue la regulación el acceso y utilización del contenido, productos y/o servicios a disposición del público en general en el dominio planteado. El titular se guarda el derecho de realizar cualquier tipo de reforma en la página en cualquier momento y sin previo aviso, al suscriptor. El acceso a la página web por parte del usuario es libre y gratuito, la utilización del contenido, productos y/o servicios puede conllevar un costo para el usuario. El sitio web está dirigido a un público principalmente oriundo de Argentina y se ajusta a los parámetros legales establecidos en dicho territorio. La administración del sitio web puede ejercerse por terceros, es decir, personas distintas al titular, sin afectar esto los presentes términos y condiciones.
          </p>
          <br />
          <h3 className="heading-3">SOBRE DERECHOS DEL USUARIO</h3>
          <br />
          <p className="paragraph">
            La actividad del usuario en el sitio web como publicaciones o comentarios estarán sujetos a los presentes términos y condiciones. El usuario se compromete a utilizar el contenido, productos y/o servicios de forma lícita, sin faltar a la moral o al orden público. El usuario se compromete a proporcionar información verídica en los formularios del sitio web. El acceso al sitio web no supone una relación directa ni física  entre el usuario y el titular del sitio web. El usuario manifiesta ser mayor de edad y contar con la capacidad jurídica de acatar los presentes términos y condiciones.
          </p>
          <br />
          <h3 className="heading-3">ACCESO Y NAVEGACIÓN DENTRO DEL SITIO</h3>
          <br />
          <p className="paragraph">
            El titular no responde por la continuidad y disponibilidad del contenido, productos y/o servicios a largo plazo, se realizará acciones que fomenten el buen funcionamiento de dicho sitio web sin responsabilidad alguna. El titular no se responsabiliza de que el software esté libre de errores que puedan causar un daño al software y/o hardware del equipo del cual el usuario accede al sitio web. De igual forma, no se responsabiliza por los posibles daños psicológicos que puedan ocasionar el acceso y  utilización del sitio web.
          </p>
          <br />
          <br />
          <br />
        </div>
      </section>
    </motion.div>
  )
}