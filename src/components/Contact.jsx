import { useEffect, useState } from "react";

export const Contact = () => {

  const [script, setScript] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://form.jotform.com/jsform/220728529344055';
    script.async = true;
    setScript(script);
  }, []);

  return (
    <>
      <section className="contact">
        <div className="contact__container container">
          <h2 className="contact__title heading-2">
            ¿Donde puedes ubicarnos?
          </h2>
          <div className="contact__grid">
            <div className="contact__map">
              <iframe title="Punto pymes mapa" width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Les%20Rambles,%201%20Barcelona,%20Spain+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a
                  href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
              </iframe>
            </div>
            <div className="contact__form">
              {console.log(script)}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
