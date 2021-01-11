import React from "react";
import "./CartItem.css";
import Dropdown from "../../Dropdown/Dropdown";
import trash from "./trash.png";

const cartItem = ({ item, value }) => {
  const { id, title, imageUrl, total } = item;
  const { removeItem } = value;

  return (
    <div className="CartItem">
      <div className="CartImage">
        <img src={imageUrl} alt="workshop" />
      </div>
      <div className="CartItemInfo">
        <div className="CartItemInfoTitle">
          {title}
          <div>
            <img src={trash} alt="trash" onClick={() => removeItem(id)} />
          </div>
        </div>
        <div className="CartItemInfoPrice">
          <div style={{height: '2rem'}}>
            <Dropdown id={id} value={value} cart={item}/>
          </div>
          
          <p>
            {total},00
            <span> EUR</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default cartItem;
