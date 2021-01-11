import React from "react";
import "./CartList.css";
import CartItem from "../CartItem/CartItem";

const cartList = ({ value }) => {
  const { cart } = value;
    return (
      <div className="CartList">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} value={value} />;
        })}
      </div>
    );
};

export default cartList;
