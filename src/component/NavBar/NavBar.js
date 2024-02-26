import React from 'react';
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <header className='Header'>
        <div className='container d_flex'>
          <ul className="navList">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#gallery'>Gallery</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#cart'><i className='bx bxs-cart'></i></a></li>
            <li><a href='#contact'>Contact me</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
