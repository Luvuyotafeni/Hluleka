import React, { useState, useEffect } from 'react';
import "./NavBar.css";
import Cart from '../Cart';

const NavBar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 768);
  const [checkoutFormData, setCheckoutFormData] = useState({
    name: "",
    surname: "",
    gender: "",
    id: "",
    date: "",
  });

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

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setCheckoutFormData({
      ...checkoutFormData,
      [name]: value,
    });
  };

  const collectData = async (formData) => {
    try {
      let result = await fetch('http://localhost:4000/cart', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      result = await result.json();
      console.log('Server response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Get the cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Use checkoutFormData to perform actions like sending data to the server or storing in localStorage
    const formDataWithCart = {
      ...checkoutFormData,
      cartItems, // Add the cart items to the form data
    };

    console.log("Checkout Form Data:", formDataWithCart);

    // Reset the form fields
    setCheckoutFormData({
      name: "",
      surname: "",
      gender: "",
      id: "",
      date: "",
    });

    localStorage.removeItem('cart');
    setIsCheckoutOpen(false);
    closeMenu();

    // Call collectData function with the required parameters
    await collectData(formDataWithCart);
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
              <input
                type="text"
                id="name"
                name="name"
                value={checkoutFormData.name}
                onChange={handleFormChange}
              />
              <label htmlFor="surname">Surname:</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={checkoutFormData.surname}
                onChange={handleFormChange}
              />
              <label htmlFor="gender">Gender:</label>
              <input
                type="text"
                id="gender"
                name="gender"
                value={checkoutFormData.gender}
                onChange={handleFormChange}
              />
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={checkoutFormData.id}
                onChange={handleFormChange}
              />
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                value={checkoutFormData.date}
                onChange={handleFormChange}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;