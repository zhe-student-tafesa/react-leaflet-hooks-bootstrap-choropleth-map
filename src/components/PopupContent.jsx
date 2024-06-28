import React from "react";
import LineChartComponent from "./LineChart";

const PopupContent = ({ name, confirmedText, salesData }) => (
  <div>
    <h3>{name}</h3>
    <p>Confirmed Cases: {confirmedText}</p>
    {salesData != null ? (<div
      style={{
        height: "300px",
        width: "300px"
      }}
    >
  
      <LineChartComponent salesData={salesData} />
      </div>) : <div>no salesData</div>}
  </div>
);

export default PopupContent;