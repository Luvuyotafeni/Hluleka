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

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);  

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

    // Calculate the overall total
    const overallTotal = cartItems.reduce((total, item) => {
      const numericPrice = parseFloat(item.price.substring(1));
      const itemTotal = !isNaN(numericPrice) ? item.quantity * numericPrice : 0;
      return total + itemTotal;
    }, 0);
    // Use checkoutFormData to perform actions like sending data to the server or storing in localStorage
    const formDataWithCart = {
      ...checkoutFormData,
      cartItems, // Add the cart items to the form data
      overallTotal, // Add the overall total to the form data
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
    setIsOrderPlaced(true);
    window.alert("Your message has been sent successfully!");
    window.location.reload();
  };

  const handleCloseOverlay = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(false);
    closeMenu();
    setIsOrderPlaced(false);
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
      {isOrderPlaced && (
        <div className="order-placed-message">
          <p>Your order has been placed successfully!</p>
        </div>
      )}

      {/* Checkout Form Overlay */}
      {isCheckoutOpen && (
        <div className="cart-overlay" onClick={handleCloseOverlay}>
          <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
            <p className='center_title'>Enter dtails</p>
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
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={checkoutFormData.email}
                onChange={handleFormChange}
              />
              <label>Gender:</label>
                <div className="gender-radio">
                  <label htmlFor="male">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={checkoutFormData.gender === "male"}
                      onChange={handleFormChange}
                    />
                    Male
                  </label>
                  <label htmlFor="female">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={checkoutFormData.gender === "female"}
                      onChange={handleFormChange}
                    />
                    Female
                  </label>
                </div>
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
              <button type="submit" className=''>Reserve space</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
