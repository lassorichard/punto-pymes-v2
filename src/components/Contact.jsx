import {Register2} from './Register2'

export const Contact = () => {

  return (
    <>
      <section className="contact">
        <div className="contact__container container">
          <h2 className="contact__title heading-2">
            ¿Donde puedes ubicarnos?
          </h2>
          <div className="contact__map">
            <iframe title="Punto pymes mapa" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.0669062509496!2d-60.101867399999996!3d-34.0677991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b99dc2221711fb%3A0xee8164674d2a23b1!2sFrascheri%20559%2C%20Arrecifes%2C%20Provincia%20de%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses-419!2sco!4v1654878134867!5m2!1ses-419!2sco"><a
                href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
            </iframe>
          </div>
            <Register2 />
        </div>
      </section>
    </>
  )
}
