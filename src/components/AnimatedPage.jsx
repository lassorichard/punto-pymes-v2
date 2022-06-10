import { Route, Routes, useLocation } from "react-router-dom"
import { Contacto } from "../pages/Contacto"
import { Faq } from "../pages/Faq"
import { Home } from "../pages/Home"
import { Nosotros } from "../pages/Nosotros"
import { NotFound } from "../pages/NotFound"
import { SoyEmprendedor } from "../pages/SoyEmprendedor"
import { SoyEstudiante } from "../pages/SoyEstudiante"
import { TerminosCondiciones } from "../pages/TerminosCondiciones"
import { AnimatePresence } from 'framer-motion'


export const AnimatedPage = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/soy-emprendedor" element={<SoyEmprendedor />} />
          <Route exact path="/soy-estudiante" element={<SoyEstudiante />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
