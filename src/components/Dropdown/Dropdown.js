import React from "react";
import "./Dropdown.css";

const dropdown = (props) => {
  const { handleCountChange } = props.value;
  const id = props.id;

  return (
    <div className="DropdownForm">
      <select id="dropdown" onChange={(e) => handleCountChange({ e, id })}>
        <option
          selected={props.cart.count === 1 ? "selected" : false}
          value="1"
        >
          1
        </option>
        <option
          selected={props.cart.count === 2 ? "selected" : false}
          value="2"
        >
          2
        </option>
        <option
          selected={props.cart.count === 3 ? "selected" : false}
          value="3"
        >
          3
        </option>
        <option
          selected={props.cart.count === 4 ? "selected" : false}
          value="4"
        >
          4
        </option>
      </select>
    </div>
  );
};

export default dropdown;
