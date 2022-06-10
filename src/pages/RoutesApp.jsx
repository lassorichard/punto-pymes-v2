import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AnimatedPage } from '../components/AnimatedPage';

export const RoutesApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AnimatedPage />
        <Footer />
      </BrowserRouter>
    </>
  )
};