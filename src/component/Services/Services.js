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
                          price="R200"
                        />
                    </div>
                    <div className='service'>
                        <img src={HlulekaNature} className='Images center_title'></img>
                        <p className='center_title'> Hluleka Nature reserve bnb</p>
                        <NestedModal
                          title="Hluleka"
                          description="seven self catering chalets with exquisite views, on a small hilltop  covered in old indigenous trees, striking orange 
                          strelitzias and grassy areas where Burchell’s zebra roam and graze.Each double story chalet sleeps 4. "
                          price="R200"  
                        />
                    </div>
                    <div className='service'>
                        <img src={Silaka} className='Images center_title'></img>
                        <p className='center_title'> Silaka Nature Reserve and Chalets</p>
                        <NestedModal
                          title="Silaka Nature Reserve and Chalets"
                          description="A small but beautiful coastal reserve, with 14 chalets can accommodate 4 persons each; 2 chalets accommodate 2 persons each and 2 chalets accommodate 6 persons each."
                          price="R200"
                        />
                    </div>
                    <div className='service'>
                        <img src={Mpande} className='Images center_title'></img>
                        <p className='center_title'> Rogers mpande beach Cottage</p>
                        <NestedModal
                          title="Rogers mpande beach Cottage"
                          description="Rogers Mpande Cottage is perfectly situated for self catering with stunning views and direct access to the beach. 
                          Sit on the wooden deck to enjoy both sunrises and sunsets and whales as they migrate seasonally to their breeding grounds. "
                          price="R200" 
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
                          description="
                          Embarking on a boat cruise is a sensory journey, as the gentle rock of the vessel merges with the soothing whispers of water, 
                          providing a serene escape to admire picturesque landscapes"
                          price="R200" 
                        />
                    </div>
                    <div className='service'>
                        <img src={Zoo} className='Images center_title'></img>
                        <p className='center_title'>Zoo</p>
                        <NestedModal
                          title="Zoo"
                          description="
                          Exploring the zoo is a vibrant immersion into a world of diverse wildlife, where the rustle of leaves, the calls of exotic creatures, 
                          and the vibrant colors of feathers and fur create an enchanting tapestry of nature's wonders"
                          price="R200" 
                        />
                    </div>
                    <div className='service'>
                        <img src={Hiking} className='Images center_title'></img>
                        <p className='center_title'>Hiking</p>
                        <NestedModal
                          title="Hiking"
                          description="Hiking unfolds as a rhythmic ascent through nature's wonders, where the crisp rustle of leaves underfoot and
                          the invigorating scent of pine accompany the rewarding discovery of scenic vistas along winding trails."
                          price="R200"
                        />
                    </div>
                    <div className='service'>
                        <img src={Quad} className='Images center_title'></img>
                        <p className='center_title'>Quad Biking</p>
                        <NestedModal
                          title="Quad Biking"
                          description="Quad biking ignites an adrenaline-fueled adventure as the powerful engine roars, kicking up clouds of dust on 
                          rugged trails,while the thrill of maneuvering through diverse terrains creates an exhilarating experience in the great outdoors"
                          price="R200" 
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
