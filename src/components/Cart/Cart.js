import React from "react";
import "./Cart.css";
import CartTitle from "./CartTitle/CartTitle";
import { WorkshopConsumer } from "../../context";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";

const cart = (props) => {
  let attachedClasses = ["Cart", "Close"];
  if (props.open) {
    attachedClasses = ["Cart", "Open"];
  }

  return (
    <React.Fragment>
      <div className={attachedClasses.join(" ")}>
        <CartTitle close={props.close} />
        <WorkshopConsumer>
          {(value) => {
            const { cart, cartTotal } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <CartList value={value} />
                  <CartTotal value={cartTotal} />
                </React.Fragment>
              );
            }
          }}
        </WorkshopConsumer>
      </div>
    </React.Fragment>
  );
};

export default cart;
