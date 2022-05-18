import AboutUs from '../assets/images/emprendedores/emprendedores-2.jpg';

export const BlockAboutUsReverse = () => {

  return (
    <>
      <section className="block-aboutus block-aboutus--reverse">
        <div className="container block-aboutus__container">
          <div className="block-aboutus__img-wrapper">
            <h2 className="heading-2 block-aboutus__img-wrapper__title block-aboutus__img-wrapper__title--mobile">¿Qué hacemos?</h2>
            <img src={AboutUs} alt="" className="block-aboutus__img-wrapper__img" />
          </div>
          <div className="block-aboutus__wrapper">
            <h2 className="heading-2 block-aboutus__title block-aboutus__title--desktop">¿Qué hacemos?</h2>
            <p className="paragraph block-aboutus__paragraph">
              Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}