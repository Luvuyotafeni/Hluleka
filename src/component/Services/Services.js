import React, { useState } from 'react';
import './Services.css';
import Img16 from './pictures/Img16.jpg'
import Cruise from './pictures/sunset-cruise_fun_boat-ride-1024x576.jpg'
import HlulekaNature from './pictures/LostFile_JPG_2137856.jpg'
import Mpande from './pictures/Mpande-Beach-2.jpg'

const Services = () => {
  const [activeSection, setActiveSection] = useState('accommodation');

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <section id='services'>
        <p className='center_title'>Services</p>
        <div className='services'>
          <div className='mediator'>
            <button
              className={`buttons ${activeSection === 'accommodation' ? 'active' : ''}`}
              onClick={() => handleButtonClick('accommodation')}
            >
              Accommodation
            </button>
            <button
              className={`buttons ${activeSection === 'activities' ? 'active' : ''}`}
              onClick={() => handleButtonClick('activities')}
            >
              Activities
            </button>
          </div>
          <div className='content'>
            {activeSection === 'accommodation' && (
              <div className='accommodation-content'>               
                <p className='center_title'>This is the Accommodation section.</p>
                <div className='services_container'>
                <div className='service'>
                        <img src={Img16} className='Images center_title'></img>
                        <p className='center_title'> Dollitle Hotel</p>
                    </div>
                    <div className='service'>
                        <img src={HlulekaNature} className='Images center_title'></img>
                        <p className='center_title'> Hluleka Nature reserve bnb</p>
                    </div>
                    <div className='service'>
                        <img src={Img16} className='Images center_title'></img>
                        <p className='center_title'> Nolizwi's Homestay</p>
                    </div>
                    <div className='service'>
                        <img src={Mpande} className='Images center_title'></img>
                        <p className='center_title'> Rogers mpande beach Cottage</p>
                    </div>
                </div>
              </div>
            )}
            {activeSection === 'activities' && (
              <div className='activities-content'>
                <p className='center_title'>This is the Activities section.</p>
                <div className='services_container'>
                    <div className='service'>
                        <img src={Cruise} className='Images center_title'></img>
                        <p className='center_title'> Boat Cruise</p>
                    </div>
                    <div className='service'>
                        <img src={Img16} className='Images center_title'></img>
                        <p className='center_title'> Dollitle Hotel</p>
                    </div>
                    <div className='service'>
                        <img src={Img16} className='Images center_title'></img>
                        <p className='center_title'> Dollitle Hotel</p>
                    </div>
                    <div className='service'>
                        <img src={Img16} className='Images center_title'></img>
                        <p className='center_title'> Dollitle Hotel</p>
                    </div>

                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
