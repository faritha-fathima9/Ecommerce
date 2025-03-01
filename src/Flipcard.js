import React from "react";
import "./Flipcard.css";

const Flipcard = (props) => {
  return (
    <div>
        <img src={props.img} alt=""/>
        <hi>{props.productname}</hi>
    </div>
  );
};

export default Flipcard;