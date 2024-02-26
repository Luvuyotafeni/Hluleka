// Home.js
import React from 'react';
import home from '../assets/Img20.jpg';
import './Home.css'; // Import your CSS file for styling

const Home = () => {
  return (
    <>
      <section className='home' id='home'>
        <div className='container f_flex top'>
          <div className='left_top'>
            <h1 className='welcome'>Welcome to </h1>
            <div className='name'>
              <h1 >Hluleka Nature Reserve</h1>             
            </div>
          </div>
          <div className='right'>
              <h1 className='moto'>“Preserving Nature's Beauty, One Reserve at a Time.”</h1>
            <div className='right_img'>
              <img src={home} className='imgH' alt='Nature Reserve'></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
