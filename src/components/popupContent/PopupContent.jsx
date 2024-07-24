import React, { PureComponent } from "react";
import LineChartComponent from "../LineChart";
import { connect } from "react-redux";
import { actionCreators } from './store';

class PopupContent extends PureComponent {
  render() {
    const { fullName, salesData, handleSelectMining, showChart, showPopup, chartData } = this.props;
    return (
      <div>
        {salesData != null ?
          (<div
            style={{
              height: "350px",
              width: "400px"
            }}
          >
            <div
              style={{
                width: "300px",
                paddingRight: "15px",
                paddingTop: "7px",
                paddingBottom: "7px",
                boxShadow: "0 0 8px rgba(0, 0, 0, .2)",
                background: "white"
              }}
            >
              <div style={{ margin: "0  0px 10px 0", paddingLeft:"5px" }}>Mine List</div>
              <div id="SearchItemWrapper"
                style={{
                   padding: "0 15px"
                }}
              >
                {salesData.map((mine) => {
                  return (
                    <div style={{
                      
                      padding: "0 5px",
                      margin: "0 10px 10px 0",
                      fontSize: "12px",
                      lineHeight: "20px",
                      color: "white",
                      borderRadius: "3px",
                      border: "1px solid #ddd",
                      textAlign: "center",
                      background: "#0f1d41"
                    }}
                      onClick={() => {
                        handleSelectMining(mine.mineName);
                        showChart(salesData, mine.mineName);

                      }}

                    >{mine.mineName}
                    </div>
                  );
                })}


              </div>
            </div>

          </div>)
          :
          (<div>{fullName}: No Sales Data </div>)
        }
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    fullName: state.getIn(['map', 'fullName']),
    salesData: (state.getIn(['map', 'salesData']) != null) ? state.getIn(['map', 'salesData']).toJS() : null
    

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectMining(miningName) {
      const action = actionCreators.selectMining(miningName);
      dispatch(action);
    },
    showChart(salesData, miningName) {
      if (salesData != null && miningName != "") {
        const selectedSalesData = salesData.find((item) => item.mineName === miningName);
        // set chart data
        const action1 = actionCreators.setChartData(selectedSalesData.data);
        dispatch(action1);
        // set showPop = true
        const action2 = actionCreators.showPop();
        dispatch(action2);

      } else {

      }
    }

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PopupContent);