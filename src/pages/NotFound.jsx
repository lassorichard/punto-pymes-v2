import { Button } from "../components/Button"
import { motion } from "framer-motion"


export const NotFound = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="not-found">
        <div className="container terms__container">
          <br />
          <br />
          <h2 className="heading-2">Página no encontrada</h2>
          <Button
            title={'Home'}
            linkRoute={'/'}
            type={'secondary'}
          />
          <br />
          <br />
        </div>
      </section>
    </motion.div>
  )
}