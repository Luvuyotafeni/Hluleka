import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const calculateTotal = (quantity, price) => {
    const numericPrice = parseFloat(price.substring(1));
    if (!isNaN(numericPrice)) {
      return quantity * numericPrice;
    } else {
      return 0;
    }
  };

  const calculateOverallTotal = () => {
    return cartItems.reduce((total, item) => total + calculateTotal(item.quantity, item.price), 0);
  };

  const handleDeleteItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.location.reload();
  };

  return (
    <>
      <section>
        <h2 className='center_title'><i className='bx bxs-cart'></i></h2>
        {cartItems.length === 0 ? (
          <p className='center_title'>No Items</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px' }}>Item</th>
                <th style={{ padding: '10px' }}>Quantity</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Total</th>
                <th style={{ padding: '10px' }}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px' }}>{item.title}</td>
                  <td style={{ padding: '10px' }}>{item.quantity}</td>
                  <td style={{ padding: '10px' }}>{item.price}</td>
                  <td style={{ padding: '10px' }}>{calculateTotal(item.quantity, item.price)}</td>
                  <td style={{ padding: '10px' }}>
                    <button onClick={() => handleDeleteItem(index)} className='delete-btn'>
                      <i className='bx bx-trash'></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ padding: '10px' }}>Total</td>
                <td style={{ padding: '10px' }}>{calculateOverallTotal()}</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        )}
      </section>
    </>
  );
}

export default Cart;
