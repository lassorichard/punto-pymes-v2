import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Home } from './Home';
import { SoyEmprendedor } from './SoyEmprendedor';
import { SoyEstudiante } from './SoyEstudiante';
import { Contacto } from './Contacto';
import { NotFound } from './NotFound';

export const RoutesApp = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/soy-emprendedor" element={<SoyEmprendedor />} />
          <Route exact path="/soy-estudiante" element={<SoyEstudiante />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};