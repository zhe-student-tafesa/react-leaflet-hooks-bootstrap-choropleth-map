import React, { useState, useEffect, Component } from "react";

import Loading from "../Loading";
import MSAMap from "../map/MSAMap";
import LoadCountriesTask from "../../tasks/LoadCountriesTask";
import Legend from "../Legend";
import legendItems from "../../entities/LegendItems";
import TopBar from "../top_bar/TopBar";
import { connect } from "react-redux";
import { actionCreators } from "./store";


class MSADashboard extends Component {

  render() {
    const { countries, loading } = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>

            <TopBar />
            <MSAMap />
            {/* <Legend legendItems={legendItemsReverse} /> */}
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
    loading: state.getIn(['dashboard', 'loading'])
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

