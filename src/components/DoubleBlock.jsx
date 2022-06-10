import { Button } from "./Button"
import Dummy1 from '../assets/images/home/dummy-1.png';
import Dummy2 from '../assets/images/home/dummy-2.png';
import BoxSearch from '../assets/images/home/box-search.svg';

export const DoubleBlock = () => {

  return (
    <>
      <section className="double-block">
        <div className="container double-block__container">
          <h2 className="heading-2 double-block__title"><span className="double-block__title--bold">En PuntoPymes</span> <br></br>podés
            encontrar</h2>
          <div className="double-block__content">
            <div className="double-block__left-info">
              <h3 className="heading-3 double-block__secondary-title">Como emprendedor/a
              </h3>
              <p className="double-block__register__text">
                Haz clic aquí para registrarte
              </p>
              <Button
                title='SOY EMPRENDEDOR'
                linkExternal='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit'
                type='secondary'
              />
            </div>
            <img src={Dummy1} alt="Dummy text" className="double-block__image"></img>
            <h3 className="heading-3 double-block__secondary-title double-block__secondary-title--mobile">Como emprendedor/a
            </h3>
            <div className="double-block__cards">
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Profesionales
                  Capacitados</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Hacer crecer Emprendimiento</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Ayudar a estudiantes</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
            </div>
            <div className="double-block__register double-block__register--mobile">
              <p className="double-block__register__text">
                Haz clic aquí para registrarte
              </p>
              <button className="btn btn--secondary">SOY EMPRENDEDOR</button>
            </div>
          </div>
          <div className="double-block__content">
            <div className="double-block__left-info">
              <h3 className="heading-3 double-block__secondary-title">Como profesional
              </h3>
              <p className="double-block__register__text">
                Haz clic aquí para registrarte
              </p>
              <Button
                title='Ofrecer servicios'
                linkExternal='https://docs.google.com/forms/d/1onnjtCKG24APUcgJPTPoCxnBlo56D8fGi6Swlc49SBg/edit'
                type='secondary'
              />
            </div>
            <img src={Dummy2} alt="Dummy text" className="double-block__image"></img>
            <h3 className="heading-3 double-block__secondary-title double-block__secondary-title--mobile">Como profesional
            </h3>
            <div className="double-block__cards">
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Profesionales
                  Capacitados</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Hacer crecer Emprendimiento</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
              <div className="double-block__card">
                <div className="double-block__card__icon">
                  <img src={BoxSearch} alt="Box search icon" className="double-block__card__icon__img"></img>
                </div>
                <div className="double-block__card__title">Ayudar a estudiantes</div>
                <p className="double-block__card__description"> Descripción</p>
              </div>
            </div>
            <div className="double-block__register double-block__register--mobile">
              <p className="double-block__register__text">
                Haz clic aquí para registrarte
              </p>
              <button className="btn btn--secondary">Ofrecer servicios</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}