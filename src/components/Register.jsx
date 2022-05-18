
export const Register = ({title}) => {

  return (
    <>
      <section className="register">
        <div className="register__container container">
          <div className="register__box">
            <h2 className="register__box__text heading-2">
              {title}
            </h2>
            <button className="btn btn--secondary register__button">Registrarme</button>
          </div>
        </div>
      </section>
    </>
  )
}
