import { Button } from "./Button"

export const Register2 = () => {

  return (
    <>
      <section className="register register--2">
        <div className="register__container container">
          <div className="register__box">
            <h2 className="register__box__text heading-2">
              ¿Quéres registrarte?
              <p className="paragraph register__box__paragraph register__box__paragraph--desktop">
                Accedé al formulario de tu interés
              </p>
            </h2>
            <p className="paragraph register__box__paragraph register__box__paragraph--mobile">
              Accedé al formulario de tu interés
            </p>
            <div>
              <Button
                title='Soy Emprendedor'
                linkExternal='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit'
                type='secondary'
                className='register__button'
              />
              <Button
                title='Ofrecer servicios'
                linkExternal='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit'
                type='secondary'
                className='register__button'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
