import { Button } from "./Button"

export const HeroInfo = ({ title, paragraph, mobileImage, desktopImage }) => {

  return (
    <>
      <section className="hero-info">
        <div className="container hero-info__container">
          <div className="hero-info__left">
            <h1 className="heading-1 hero-info__title">
              {title}
            </h1>
            <p className="paragraph hero-info__paragraph">
              {paragraph}
            </p>
            <img className="hero-info__image hero-info__image--mobile" src={mobileImage} alt="Servicio para emprendedores"></img>
            <Button
              title='Más información'
              linkRoute='/nosotros'
              type='primary'
              className='hero-info__button'
              extra='btn--dots'
            />
          </div>
          <div className="hero-info__right">
            <img className="hero-info__image hero-info__image--desktop" src={desktopImage} alt="Servicio para emprendedores"></img>
          </div>
        </div>
      </section>
    </>
  )
}