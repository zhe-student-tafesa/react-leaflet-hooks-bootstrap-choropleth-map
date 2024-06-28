import React from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css";

// Frank
import PopupContent from "./PopupContent";
import ReactDOMServer from "react-dom/server";
const CovidMap = ({ countries }) => {
  const mapStyle = {
    fillColor: "white",
    weight: 1,
    color: "black",
    fillOpacity: 1,
  };

  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    //
     // Use ReactDOMServer render React component to string
     const popupContent = ReactDOMServer.renderToString(
      <PopupContent name={name} confirmedText={confirmedText} />
    );
    layer.bindPopup(popupContent);
  };

  return (
    <Map style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
      <GeoJSON
        style={mapStyle}
        data={countries}
        onEachFeature={onEachCountry}
      />
    </Map>
  );
};

export default CovidMap;
