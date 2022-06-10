import { Button } from "./Button"

export const Register = ({ title }) => {

  return (
    <>
      <section className="register">
        <div className="register__container container">
          <div className="register__box">
            <h2 className="register__box__text heading-2">
              {title}
            </h2>
            <Button
              title='Registrarme'
              linkExternal='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit'
              type='secondary'
              className={'register__button'}
            />
          </div>
        </div>
      </section>
    </>
  )
}
