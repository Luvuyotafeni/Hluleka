import React, { useState } from 'react';
import './Services.css';
import Img16 from './pictures/Img16.jpg'
import Cruise from './pictures/sunset-cruise_fun_boat-ride-1024x576.jpg'
import HlulekaNature from './pictures/LostFile_JPG_2137856.jpg'
import Mpande from './pictures/Mpande-Beach-2.jpg'
import Silaka from './pictures/Silaka-Nature-Res-1.jpg'
import Zoo from '../assets/Img8.jpg'
import Hiking from './pictures/download.jpg'
import Quad from './pictures/Highstakes-Quad.jpg'
import NestedModal from '../NestedModal';

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
                        <NestedModal
                          title="Dollitle Hotel"
                          description="Dolittle Cottage is self-catering and can accommodate 16 people. This is your chance to enjoy the WILD in comfort.
                          The cottage has 6 bedrooms, 4 inside bathrooms, 1 outside beach shower."
                        />
                    </div>
                    <div className='service'>
                        <img src={HlulekaNature} className='Images center_title'></img>
                        <p className='center_title'> Hluleka Nature reserve bnb</p>
                        <NestedModal
                          title="Hluleka"
                          description="seven self catering chalets with exquisite views, on a small hilltop  covered in old indigenous trees, striking orange 
                          strelitzias and grassy areas where Burchell’s zebra roam and graze.Each double story chalet sleeps 4. "
                        />
                    </div>
                    <div className='service'>
                        <img src={Silaka} className='Images center_title'></img>
                        <p className='center_title'> Silaka Nature Reserve and Chalets</p>
                        <NestedModal
                          title="Silaka Nature Reserve and Chalets"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className='service'>
                        <img src={Mpande} className='Images center_title'></img>
                        <p className='center_title'> Rogers mpande beach Cottage</p>
                        <NestedModal
                          title="Rogers mpande beach Cottage"
                          description="Rogers Mpande Cottage is perfectly situated for self catering with stunning views and direct access to the beach. 
                          Sit on the wooden deck to enjoy both sunrises and sunsets and whales as they migrate seasonally to their breeding grounds. "
                        />
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
                        <NestedModal
                          title="Boat Cruise"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className='service'>
                        <img src={Zoo} className='Images center_title'></img>
                        <p className='center_title'>Zoo</p>
                        <NestedModal
                          title="Zoo"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className='service'>
                        <img src={Hiking} className='Images center_title'></img>
                        <p className='center_title'>Hiking</p>
                        <NestedModal
                          title="Hiking"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </div>
                    <div className='service'>
                        <img src={Quad} className='Images center_title'></img>
                        <p className='center_title'>Quad Biking</p>
                        <NestedModal
                          title="Quad Biking"
                          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
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
