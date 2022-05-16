
export const BlockInfo = ({ title, title2, paragraph, mobileImage, desktopImage }) => {

  return (
    <>
      <section className="block-info">
        <div className="block-info__container container">
          <figure className="block-info__figure--mobile">
            <h2 className="heading-2 block-info__figure__title">
              {title}
            </h2>
            <img className="block-info__figure--mobile__image" src={mobileImage} alt="Emprendedores imagen"></img>
          </figure>
          <img className="block-info__figure__image" src={desktopImage} alt="Emprendedores imagen"></img>
          <div className="block-info__content">
            <h2 className="heading-2 block-info__content__title">
              {title2}
            </h2>
            <p className="paragraph-2 block-info__content__text">
              {paragraph}
            </p>
            <button className="btn btn--secondary  block-info__content__button">
              Registrarme
            </button>
          </div>
        </div>
      </section>
    </>
  )
}