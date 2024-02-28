import React, { useState } from 'react';
import "./NavBar.css";
import { NavLink } from 'react-router-dom';
import Cart from '../Cart';

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <header className='Header'>
        <div className='container d_flex'>
          <ul className="navList">
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#gallery'>Gallery</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href="#" onClick={handleCartClick} className='bx bxs-cart'></a></li>
            <li><a href='#contact'>Contact me</a></li>
          </ul>
        </div>
      </header>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-popup">
            <Cart />
            <button onClick={handleCartClick}>Close Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
