import { FaLongArrowAltRight } from 'react-icons/fa'
import './clints.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='Clients'>
        <div className="container">
            <div className="clients-head">
                <h1>Lovely<span> words </span>
                from my clients</h1>
                <div className="capture-button ">
                    <a href="#">View All Reviews<span><FaLongArrowAltRight /></span></a>
                </div>
            </div>
            <div className="slider">
            <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div>
            <div className="slider-row">
            <div className="slider-img">
              <img src="images/client.jpg" alt="img" />
            </div>
            <div className="slider-text">
              <p><span>"Jenifer Lofez </span>is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
                  My entire family was impressed by her 
                  and photographs.</p>
                  <h1>-Jason & Guidry</h1>
            </div>
            </div>
          </div>
        </div>
        <div>
        <div>
            <div className="slider-row">
            <div className="slider-img">
              <img src="images/client-2.jpg" alt="img" />
            </div>
            <div className="slider-text">
              <p><span>"Jenifer Lofez </span>is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
                  My entire family was impressed by her 
                  and photographs.</p>
                  <h1>-Jason & Guidry</h1>
            </div>
            </div>
          </div>
        </div>
        <div>
        <div>
            <div className="slider-row">
            <div className="slider-img">
              <img src="images/client-3.jpg" alt="img" />
            </div>
            <div className="slider-text">
              <p><span>"Jenifer Lofez </span>is Just an awesome photografer and great person Even if ifis your first photosession, don't worry, Kaya wIl calm you down, give a lot of helpful tips ans suggestions She is so calm and attentive,
                  My entire family was impressed by her 
                  and photographs.</p>
                  <h1>-Jason & Guidry</h1>
            </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
            </div>
        </div>
    </div>
  )
}

export default Clients