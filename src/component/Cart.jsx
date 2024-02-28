import React from 'react';

function Cart() {
  return (
    <>
      <section>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>1</td>
              <td>$15.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Cart;
