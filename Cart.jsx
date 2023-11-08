import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-context";
import Cartitem2 from "./Cart-item";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Cartitem2 data={product} />;
          }
        })}
      </div>

      {totalAmount >0 ? (
        <div className="checkout">
          <p className="sub">SubTotal: ${totalAmount}</p>
          <hr />
          <button onClick={() => navigate("/")}>Continue Shopping</button>

          <button>Checkout</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
