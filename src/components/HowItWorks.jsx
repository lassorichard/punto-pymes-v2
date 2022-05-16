
export const HowItWorks = () => {

  return (
    <>
      <section className="how-it-works">
        <div className="how-it-works__container container">
          <h2 className="how-it-works__title heading-2">
            ¿Cómo funcioná?
          </h2>
          <div className="how-it-works__cards">
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">1</div>
                <div className="how-it-works__card__box__text heading-2">Regístrate</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Accede al formulario de tu interés, ya se como emprendedor o si te interesa ofrecer tus servicios profesionales y pasarás a formar parte de nuestra base de datos
              </figcaption>
            </figure>
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">2</div>
                <div className="how-it-works__card__box__text heading-2">Está atento</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Recibirás información relevante que te ayudará en tu búsqueda y puedes escribir si alguna es tu interés para solicitar una validación de parte de la otra parte
              </figcaption>
            </figure>
            <figure className="how-it-works__card">
              <div className="how-it-works__card__box">
                <div className="how-it-works__card__box__number heading-2">3</div>
                <div className="how-it-works__card__box__text heading-2">Confirmar</div>
              </div>
              <figcaption className="how-it-works__card__figcaption">
                Si todo va bien y ambas partes están a gusto, vamos a contactarte para confirmar con vos y si estás de acuerdo entonces ambas partes podrán conectarse
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  )
}