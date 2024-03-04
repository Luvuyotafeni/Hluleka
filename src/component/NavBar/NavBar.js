// NavBar.js
import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import Cart from '../Cart';

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
    setIsCheckoutOpen(false);
    closeMenu();
  };

  const handleCheckoutClick = () => {
    setIsCheckoutOpen(!isCheckoutOpen);
    closeMenu();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart');
    setIsCheckoutOpen(false);
    closeMenu();
  };

  const handleCloseOverlay = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    closeMenu();
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMobileScreen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div>

      <header className={`Header ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className='container d_flex'>
          <div className="menu-toggle" onClick={handleToggleMenu}>
            <i className={`bx ${isMenuOpen ? 'bx bx-x' : 'bx bx-menu'}`}></i>
          </div>
          <ul className={`navList ${isMenuOpen ? 'menu-open' : ''}`}>
            <li><a href='#home' onClick={closeMenu}>Home</a></li>
            <li><a href='#about' onClick={closeMenu}>About</a></li>
            <li><a href='#gallery' onClick={closeMenu}>Gallery</a></li>
            <li><a href='#services' onClick={closeMenu}>Services</a></li>
            <li><a href="#" onClick={handleCartClick} className='bx bxs-cart'></a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </div>
      </header>

      {/* Cart Overlay */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={handleCloseOverlay}>
          <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
            <Cart />
            <button onClick={handleCheckoutClick} className='check_btn'>CheckOut</button>
          </div>
        </div>
      )}

      {/* Checkout Form Overlay */}
      {isCheckoutOpen && (
        <div className="cart-overlay" onClick={handleCloseOverlay}>
          <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name"/>
              <label htmlFor="surname">Surname:</label>
              <input type="text" id="surname" name="surname"/>
              <label htmlFor="gender">Gender:</label>
              <input type="text" id="gender" name="gender" />
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" name="id"/>
              <label htmlFor="date">Date:</label>
              <input type="date" id="date" name="date" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}  
    </div>
  );
}

export default NavBar;
