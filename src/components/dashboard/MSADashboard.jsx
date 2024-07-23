import React, { useState, useEffect, Component } from "react";

import Loading from "../Loading";
import MSAMap from "../map/MSAMap";
import LoadCountriesTask from "../../tasks/LoadCountriesTask";
import Legend from "../Legend";
import legendItems from "../../entities/LegendItems";
import TopBar from "../top_bar/TopBar";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import LineChartComponent from "../LineChart";
import "./MSADashboard.css";


class MSADashboard extends Component {

  render() {
    const { countries, loading, showPopup, chartData } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>

            <TopBar />
            <MSAMap />
            {/* <Legend legendItems={legendItemsReverse} /> */}
            {showPopup && (
                  <div className="popup-overlay"
                
                  >
                    <div className="popup-content">
                      <button className="close-button" onClick={()=>console.log('close')}>Close Close Close  </button>
                      <LineChartComponent salesData={chartData} />
                    </div>
                  </div>
                )}
          </div>
        )}
      </div>
    );

  }
  componentDidMount() {
    this.props.changeCountriesPrifit();

  }
}



const mapStateToProps = (state) => {
  return {
    countries: state.getIn(['dashboard', 'countriesProfit']),
    loading: state.getIn(['dashboard', 'loading']),
    chartData: (state.getIn(['popupContent', 'chartData']) != null) ? state.getIn(['popupContent', 'chartData']).toJS() : null,
    showPopup: state.getIn(['popupContent', 'showPopup'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeCountriesPrifit() {
      const action = actionCreators.getCountriesProfit();
      dispatch(action);
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MSADashboard);

