import AboutUs from '../assets/images/emprendedores/emprendedores-2.jpg';
import { Link } from "react-router-dom";

export const BlockAboutUs = () => {

  return (
    <>
      <section className="block-aboutus">
        <div className="container block-aboutus__container">
          <div className="block-aboutus__img-wrapper">
            <h2 className="heading-2 block-aboutus__img-wrapper__title block-aboutus__img-wrapper__title--mobile">Quienes somos</h2>
            <img src={AboutUs} alt="" className="block-aboutus__img-wrapper__img" />
          </div>
          <div className="block-aboutus__wrapper">
            <h2 className="heading-2 block-aboutus__title block-aboutus__title--desktop">Quienes somos</h2>
            <p className="paragraph block-aboutus__paragraph">
              Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
            </p>
            <Link to="/nosotros">
              <button className="btn btn--primary block-aboutus__btn">
                Más información
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}