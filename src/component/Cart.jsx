import React from 'react';

function Cart() {
  // Get the cart items from local storage or initialize an empty array
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <>
      <section>
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}

export default Cart;
