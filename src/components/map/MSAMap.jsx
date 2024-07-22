import React, { Component } from "react";
import { Map, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MSAMap.css";
import ReactDOM from "react-dom";
import { actionCreators } from './store';
import store from "../../store";


// Frank
import PopupContent from "../popupContent/PopupContent";
import ReactDOMServer from "react-dom/server";
import { connect, Provider } from "react-redux";
class MSAMap extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { countriesIM, handleSelect } = this.props;
    const countries = countriesIM.toJS();

    const mapStyle = {
      fillColor: "white",
      weight: 1,
      color: "white",
      fillOpacity: 0.5,
    };

    const onEachCountry = (country, layer) => {
      layer.options.fillColor = country.properties.color;
      const name = country.properties.ADMIN;
      const confirmedText = country.properties.confirmedText;
      const salesData = country.properties.salesData;

      //
      layer.on({
        mouseover: (event) => {
          if (layer.feature.properties.salesData != null) {
            const layer = event.target;
            //console.log(layer.feature.properties.salesData);
            layer.setStyle({
              fillOpacity: 1
            });
          }

        },
        mouseout: (event) => {
          const layer = event.target;
          layer.setStyle({
            fillOpacity: 0.5
          });
        }
      });


      layer.bindPopup(function () {
        /// set selected country
        handleSelect(country.properties.ISO_A3, name, salesData);
        console.log(salesData);
        const popupContentElement = document.createElement("div");
        ReactDOM.render(
          <Provider store={store}><PopupContent /></Provider>,
          popupContentElement
        );
        return popupContentElement;
      });
    };

    return (
      <Map style={{ height: "90vh" }} zoom={2} center={[20, 60]}>
        <GeoJSON
          style={mapStyle}
          data={countriesIM.toJS()}
          onEachFeature={onEachCountry}
        />
      </Map>
    );

  }
}


const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['map', 'selectedCountry']),
    countriesIM: state.getIn(['dashboard', 'countriesProfit'])

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect(countryName, fullName, salesData) {
      const action = actionCreators.selectCountry(countryName, fullName, salesData);
      dispatch(action);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MSAMap);
