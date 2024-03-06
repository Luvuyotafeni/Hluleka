import React from 'react';

function Cart() {
  // Get the cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

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

  return (
    <>
      <section>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '10px' }}>Item</th>
                <th style={{ padding: '10px' }}>Quantity</th>
                <th style={{ padding: '10px' }}>Price</th>
                <th style={{ padding: '10px' }}>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px' }}>{item.title}</td>
                  <td style={{ padding: '10px' }}>{item.quantity}</td>
                  <td style={{ padding: '10px' }}>{item.price}</td>
                  <td style={{ padding: '10px' }}>{calculateTotal(item.quantity, item.price)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ padding: '10px' }}>Total</td>
                <td style={{ padding: '10px' }}>{calculateOverallTotal()}</td>
              </tr>
            </tfoot>
          </table>
        )}
      </section>
    </>
  );
}

export default Cart;
