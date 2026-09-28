import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        <p>Your cart is empty.</p>

        <button onClick={() => (window.location.href = "/plants")}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="cart-image"
          />

          <div className="cart-details">
            <h2>{item.name}</h2>

            <p>Unit Price: ₹{item.price}</p>

            <p>
              Total: ₹{item.price * item.quantity}
            </p>

            <div className="quantity-controls">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQuantity(item.id))}
              >
                +
              </button>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <h2>Cart Total: ₹{totalAmount}</h2>

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

      <button onClick={() => (window.location.href = "/plants")}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;