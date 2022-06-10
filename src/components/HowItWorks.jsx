export const HowItWorks = ({title}) => {

  return (
    <>
      <section className="how-it-works" id="como-funciona">
        <div className="how-it-works__container container">
          <h2 className="how-it-works__title heading-2">
            {title}
          </h2>
          <div className="how-it-works__cards">
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">1</div>
                <div className="how-it-works__card__box__text heading-2">¡Te registras!</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Podes hacerlo como emprendedor o como <a href='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit' target='_blank' rel="noreferrer" className="link">estudiante/profesional</a>. Solo tenes que completar el formulario correspondiente y enviarlo.
              </figcaption>
            </figure>
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">2</div>
                <div className="how-it-works__card__box__text heading-2">¡Te contactamos!</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Para definir cuál es tu situación actual y de què manera podemos ayudarnos.
              </figcaption>
            </figure>
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">3</div>
                <div className="how-it-works__card__box__text heading-2">¡Esperar el match!</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Una vez definidos tus intereses, nos comunicamos para indicarte los pasos a seguir
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}