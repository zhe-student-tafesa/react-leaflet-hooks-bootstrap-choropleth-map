import React, { PureComponent } from "react";
import LineChartComponent from "./LineChart";
import { connect } from "react-redux";

class PopupContent extends PureComponent {
  render() {
    const { fullName, salesData } = this.props;
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
                boxShadow: "0 0 8px rgba(0, 0, 0, .2)",
                background: "white"
              }}
            >
              <div style={{ margin: "0  0px 10px 0", }}>Mine List</div>
              <div id="SearchItemWrapper"
                style={{
                  overflow: "hidden", padding: "0 15px"
                }}
              >
                {salesData.map((mine) => {
                  return (
                    <button style={{
                      float: "left",
                      display: "block",
                      padding: "0 5px",
                      margin: "0 10px 10px 0",
                      fontSize: "12px",
                      lineHeight: "20px",
                      color: "#787878",
                      borderRadius: "3px",
                      border: "1px solid #ddd"
                    }}
                      onClick={() => console.log(mine.mineName)}

                    >{mine.mineName}</button>
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PopupContent);