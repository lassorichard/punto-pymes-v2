import { HeroInfo } from '../components/HeroInfo'
import { BlockInfo } from '../components/BlockInfo'
import { BlockServices } from '../components/BlockServices'
import { HowItWorks } from '../components/HowItWorks'
import { Register } from '../components/Register'

import EmprendedoresMobile from '../assets/images/emprendedores/emprendedores-mobile.jpg'
import EmprendedoresDesktop from '../assets/images/emprendedores/emprendedores-desktop.jpg'
import EmprendedoresMobile2 from '../assets/images/emprendedores/emprendedores-2.jpg'
import EmprendedoresDesktop2 from '../assets/images/emprendedores/emprendedores-2-desktop.jpg'

export const SoyEstudiante = () => {

  return (
    <>
      <HeroInfo
        title='Ofrece tus servicios PROFESIONALES'
        mobileImage={ EmprendedoresMobile }
        desktopImage={ EmprendedoresDesktop }
      />
      <BlockInfo
        title='¿Qué podés encontrar?'
        title2='¿Qué podés encontrar?'
        paragraph="Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements."
        mobileImage={ EmprendedoresMobile2 }
        desktopImage={ EmprendedoresDesktop2 }
      />
      <BlockServices />
      <HowItWorks />
      <Register
        title='¿Querés aplicar a proyectos?'
      />
    </>
  )
}