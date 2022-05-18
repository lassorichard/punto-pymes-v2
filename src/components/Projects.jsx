import Google from '../assets/images/home/google.svg';
import Airbnb from '../assets/images/home/airbnb.svg';
import Uber from '../assets/images/home/uber.svg';
import Amazon from '../assets/images/home/amazon.svg';

export const Projects = () => {

  return (
    <>
      <section className="projects">
        <div className="container projects__container">
          <div className="projects__left-wrapper">
            <h2 className="heading-2 projects__title">Proyectos Destacados</h2>
            <p className="paragraph projects__paragraph">
              Ellos han conseguido profesionales capacitados para colaborar en sus proyectos y ayudarlos a crecer
            </p>
          </div>
          <div className="projects__right-wrapper">
            <img className='projects__logos' src={Google} alt="Google Logo" />
            <img className='projects__logos' src={Airbnb} alt="Airbnb Logo" />
            <img className='projects__logos' src={Uber} alt="Uber Logo" />
            <img className='projects__logos' src={Amazon} alt="Amazon Logo" />
          </div>
        </div>
      </section>
    </>
  )
}