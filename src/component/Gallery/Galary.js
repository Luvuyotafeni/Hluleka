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
import Img9 from '../assets/Img9.jpg'


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
    Img9,

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
    <>
      <section id='gallery'>
        <div className='Gallery'>
            <p>Gallery</p>
            <div>
                <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                    <img src={image} alt={`slide-${index + 1}`} />
                    </div>
                ))}
        </Slider>
            </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
