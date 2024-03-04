import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Galary.css'
import Img1 from '../assets/Img1.jpg'
import Img2 from '../assets/Img2.jpg'
import Img3 from '../assets/Img3.jpg'
import Img4 from '../assets/Img4.jpg'
import Img5 from '../assets/Img5.jpg'
import Img6 from '../assets/Img6.jpg'
import Img7 from '../assets/Img7.jpg'
import Img8 from '../assets/Img8.jpg'
import Img10 from '../assets/Hluleka-Nature-Reserve-copyright-Scott-N-Ramsay-www.yearinthewild.com-4-2.jpg'
import Img11 from '../assets/Hluleka-Transkei.jpg'
import Img12 from '../assets/hluleka-nature-reserve-view.jpg'
import Img13 from '../assets/hluleka-nature-reserve.jpg'
import Img14 from '../assets/Img14.jpg'
import Img15 from '../assets/IMG_1580.jpg'
import Img16 from '../assets/IMG_1584.jpg'
import Img17 from '../assets/IMG_1585.jpg'
import Img18 from '../assets/IMG_1587.jpg'
import Img21 from '../assets/IMG_1589.jpg'
import Img22 from '../assets/IMG_0266.jpg'
import Img23 from '../assets/Img13.jpg'



const Gallery = () => {
  const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,
    Img16,
    Img17,
    Img18,
    Img21,
    Img22,
    Img23

    // Add more image URLs as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='gallery'>
      <p className='center_title'>Gallery</p> 
      <div className='Gallery'>
        <div className='gallery_container'>
          <Slider {...settings} className='images'>
            {images.map((image, index) => (
              <div key={index} className="gallery-slide">
                <img src={image} alt={`slide-${index + 1}`} className='' />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;