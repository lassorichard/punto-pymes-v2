import Slider from "react-slick";

import Carousel1 from '../assets/images/home/carousel-1.png';
import CarouselStatic from '../assets/images/home/carousel-static.png';

export const Carousel = () => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="carousel">
        <div className="container carousel__container">
          <h2 className="heading-2 carousel__title">Experiencias</h2>
          <Slider {...settings}>
            <div className="carousel__slide">
              <img src={Carousel1} alt="Carousel img" className="carousel__slide__image" />
              <div className="carousel__slide__wrapper">
                <h3 className="carousel__slide__title heading-3">Matthew Paul</h3>
                <p className="carousel__slide__paragraph paragraph">Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
              </div>
              <img src={CarouselStatic} alt="" className="carousel__slide__image-static" />
            </div>
            <div className="carousel__slide">
              <img src={Carousel1} alt="Carousel img" className="carousel__slide__image" />
              <div className="carousel__slide__wrapper">
                <h3 className="carousel__slide__title heading-3">Matthew Paul</h3>
                <p className="carousel__slide__paragraph paragraph">Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
              </div>
              <img src={CarouselStatic} alt="" className="carousel__slide__image-static" />
            </div>
            <div className="carousel__slide">
              <img src={Carousel1} alt="Carousel img" className="carousel__slide__image" />
              <div className="carousel__slide__wrapper">
                <h3 className="carousel__slide__title heading-3">Matthew Paul</h3>
                <p className="carousel__slide__paragraph paragraph">Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
              </div>
              <img src={CarouselStatic} alt="" className="carousel__slide__image-static" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  )
}