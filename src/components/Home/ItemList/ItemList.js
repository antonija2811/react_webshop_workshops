import React from "react";
import "./ItemList.css";
import Item from "./Item/Item";

const itemList = (props) => {
  return (
    <div className="Items">
          {
            props.workshops.map((item) => {
              return <Item key={item.id} item={item} />;
          })}
    </div>
  );
};

export default itemList;
