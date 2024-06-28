import React from "react";

const PopupContent = ({ name, confirmedText }) => (
  <div>
    <h3>{name}</h3>
    <p>Confirmed Cases: {confirmedText}</p>
  </div>
);

export default PopupContent;