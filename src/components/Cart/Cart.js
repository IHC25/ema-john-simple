import React from "react";
import "./Cart.css";

const Cart = ({ cart, children }) => {
  let totalPrice = 0,
    shipping = 0,
    quantity = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (totalPrice * 0.1).toFixed(2);
  const total = totalPrice + shipping + parseFloat(tax);
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${totalPrice} </p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${total.toFixed(2)}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Cart;
