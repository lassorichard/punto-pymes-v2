import { Button } from './Button';
import AboutUs from '../assets/images/emprendedores/emprendedores-2.jpg';

export const BlockAboutUs = ({ title, description }) => {

  return (
    <>
      <section className="block-aboutus">
        <div className="container block-aboutus__container">
          <div className="block-aboutus__img-wrapper">
            <h2 className="heading-2 block-aboutus__img-wrapper__title block-aboutus__img-wrapper__title--mobile">{title}</h2>
            <img src={AboutUs} alt="" className="block-aboutus__img-wrapper__img" />
          </div>
          <div className="block-aboutus__wrapper">
            <h2 className="heading-2 block-aboutus__title block-aboutus__title--desktop">{title}</h2>
            <p className="paragraph block-aboutus__paragraph">
              {description}
            </p>

            {window.location.pathname === '/nosotros' ? null :
              <Button
                title='Más información'
                linkRoute='/nosotros'
                type='primary'
                className={'block-aboutus__btn'}
              />
            }
          </div>
        </div>
      </section>
    </>
  )
}